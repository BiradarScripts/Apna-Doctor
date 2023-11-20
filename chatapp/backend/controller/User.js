require("dotenv").config();
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const UserAccount = require("../models/User");
const User = UserAccount.user;

async function securePassword(password) {
  const saltNo = process.env.Salt;
  const salt = await bcrypt.genSalt(+saltNo);
  const secPass = await bcrypt.hash(password, salt);
  return secPass;
}

exports.createUser = async (req, res) => {
  let success = true;
  // try {
  //   const errors = validationResult(req);
  //   const arr = errors.array();
  //   if (!errors.isEmpty()) {
  //     success = false;
  //     return res.status(400).json({ success: success, error: arr });
  //   }

  //   const prevUser = {
  //     Email: await User.findOne({ emailid: req.body.emailid }),
  //     DisplayName: await User.findOne({ displayName: req.body.displayName }),
  //   };

  //   if (!!prevUser.Email) {
  //     success = false;
  //     return res.status(400).json({
  //       success: success,
  //       error: "Account with this emailid already exists",
  //     });
  //   }

  //   if (!!prevUser.DisplayName) {
  //     success = false;
  //     return res.status(400).json({
  //       success: success,
  //       error: "Account with this display name already exists",
  //     });
  //   }
    try {
      const user = new User(req.body);
      const password = req.body.password;
      let secPass = await securePassword(password);
      user.password = secPass;
      try {
        const doc = await user.save();
        const data = {
          user: {
            id: user.id,
          },
        };
        const authToken = jwt.sign(data, `${process.env.JWT_SECRET}`);
        res.status(201).json({ success: success, authToken: authToken });
      } catch (saveError) {
        console.error(saveError);
        success = false;
        res.status(500).json({ success: success, error: "User Save Error" });
      }

    } catch (userCreationError) {
      console.error(userCreationError);
      success = false;
      res.status(500).json({ success: success, error: "User Creation Error" });
    }
  // } catch (validationError) {
  //   console.error(validationError);
  //   success = false;
  //   res.status(400).json({ success: success, error: validationError.array() });
  // }
};

function validateEmail(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  }
  return false;
}

async function loginCheck(user, password) {
  let success = true;
  if (!user) {
    success = false;
    return success;
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    success = false;
    return success;
  }
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = jwt.sign(data, `${process.env.JWT_SECRET}`);
  return authToken;
}

exports.loginUser = async (req, res) => {
  let success = true;
  try {
    const errors = validationResult(req);
    const arr = errors.array();
    let printmsg;
    let success = true;
    if (!errors.isEmpty()) {
      for (const errorObject of arr) {
        const errorMsg = errorObject.msg;
        printmsg = errorMsg;
        success = false;
      }
      return res.status(400).json({ success: success, error: printmsg });
    }

    const { input, password } = req.body;
    // const inputType = validateEmail(input);
    try {
      let user =
        (await User.findOne({ emailid: input })) ||
        (await User.findOne({ displayName: input }));
      const loginToken = await loginCheck(user, password);
      if (loginToken == false) {
        success = false;
        return res.status(400).json({
          success: success,
          error: "Please try to login with correct credentials",
        });
      } else {
        return res.status(201).json({
          success: success,
          authToken: loginToken,
          message: "Login Successful!",
        });
      }
    } catch (err) {
      success = false;
      console.log(err);
      res
        .status(500)
        .json({ success: success, error: "Internal Server Error" });
    }
  } catch (err) {
    success = false;
    console.error(err);
    res.status(500).json({ success: success, error: "Internal Server Error" });
  }
};

exports.decodeUser = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findOne({ _id: id }).select("-password");
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.changePassword = async (req, res) => {
  let success = true;
  try {
    const id = req.user.id;
    const user = await User.findOne({ _id: id });
    const { confirmPassword, newPassword } = req.body;
    const passwordCompare = await bcrypt.compare(
      confirmPassword,
      user.password
    );
    if (!passwordCompare) {
      success = false;
      return res
        .status(401)
        .json({ success: success, error: "Invalid Password" });
    }
    let secPass = await securePassword(newPassword);
    const userWithNewPassword = await User.findByIdAndUpdate(
      id,
      {
        password: secPass,
      },
      { new: true }
    );
    res.status(200).json({
      success: success,
      message: "Your Password has been updated successfully",
    });
  } catch (err) {
    success = false;
    console.error(err);
    res.status(500).json({ success: success, error: "Internal Server Error" });
  }
};

async function sendMailForReset(user, randomString) {
  const emailConfig = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GmailUsername,
      pass: process.env.GmailPassword,
    },
  };

  const emailData = {
    from: "noreply@helloworld.in",
    to: user.emailid,
    subject: "Reset Account Password Link",
    html: `
    <h3>Hi Bhavya, Please click the link below to reset the password</h3>
    <p><a href = 'http://localhost:8080/user/auth/resetPassword?token=${randomString}'>Reset Password</a></p>`,
  };

  const transporter = nodemailer.createTransport(emailConfig);

  try {
    await transporter.sendMail(emailData);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  } finally {
    transporter.close();
  }
}

exports.forgetPassword = async (req, res) => {
  let success = true;
  const { input } = req.body;
  // const inputType = validateEmail(input);
  try {
    let user =
      (await User.findOne({ emailid: input })) ||
      (await User.findOne({ displayName: input }));
    if (!user) {
      success = false;
      return res
        .status(501)
        .json({ success: success, error: "Try using correct credentials" });
    }
    const randomString = randomstring.generate();
    const data = await User.findByIdAndUpdate(user.id, {
      resetLink: randomString,
    });
    sendMailForReset(user, randomString);
    res.status(200).json({
      success: success,
      message: "Please check your inbox for reset link",
    });
  } catch (err) {
    success = false;
    console.error(err);
    res.status(500).json({ success: success, error: "Internal Server Error" });
  }
};

exports.resetPassword = async (req, res) => {
  let success = true;
  try {
    const token = req.query.token;
    const user = await User.findOne({ resetLink: token });

    if (!user) {
      success = false;
      return res.status(200).json({
        success: success,
        error: "This Link is expired",
      });
    }
    const { newPassword } = req.body;
    let secPass = await securePassword(newPassword);
    user.password = secPass;
    const data = await User.findByIdAndUpdate(
      user.id,
      { password: secPass, resetLink: "" },
      { new: true }
    );
    res
      .status(200)
      .json({ success: success, message: "User Password has been updated" });
  } catch (err) {
    success = false;
    console.error(err);
    res.status(400).json({ success: success, error: err });
  }
};
