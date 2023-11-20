import {
  cs1,
  cs2,
  chat1,
  chat2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
  chat8,
  chat9,
  chat10,
  chat11,
  chat12,
  chat13,
} from "../assets/whatsapp";

export const chatsData = [
  {
    id:0,
    severity:1000,
    pp: cs1,
    contact: "Ava",
    msg: "Awesome, thank you!",
    time: "1:15 pm",
    unreadMsgs: null,
  },
  {
    id:1,
    severity:15,
    pp: chat1,
    contact: "Patient-1",
    msg: "Coding Spot is fire! 🔥",
    time: "12:15 pm",
    unreadMsgs: 2,
  },
  {
    id:2,
    severity:19,
    pp: chat2,
    contact: "Patient-2",
    msg: "Miss you, call you later!",
    time: "11:11 am",
    unreadMsgs: 4,
  },
  {
    id:3,
    pp: chat3,
    severity:4,
    contact: "Patient-3",
    msg: "Hey dad, need you asap!!",
    time: "11:04 am",
    unreadMsgs: null,
  },
  {
    id:4,
    pp: chat4,
    severity:45,
    contact: "Patient-4",
    msg: "Who are you???",
    time: "10:58 am",
    unreadMsgs: null,
  },
  {
    id:5,
    severity:47,
    pp: chat5,
    contact: "Patient-5",
    msg: "Help me with this bug!! 😭😭",
    time: "10:50 am",
    unreadMsgs: 23,
  },
  {
    id:6,
    pp: chat6,
    severity:1,
    contact: "Patient-6",
    msg: "Call me son, love you. ❤️",
    time: "10:35 am",
    unreadMsgs: 2,
  },
  {
    id:7,
    pp: chat7,
    severity:9,
    contact: "Patient-7",
    msg: "hahhahhaha lol 😂😂😂",
    time: "10:18 am",
    unreadMsgs: null,
  },
  {
    id:8,
    pp: chat8,
    severity:29,
    contact: "Patient-8",
    msg: "Meeting in 2 hours.",
    time: "10:02 am",
    unreadMsgs: null,
  },
  {
    id:9,
    pp: chat9,
    severity:24,
    contact: "Patient-9",
    msg: "The test was sooo hard 😓",
    time: "9:47 am",
    unreadMsgs: 3,
  },
];



export const messagesData = [
  [
    // Conversation 1
    {
      msg: "Hi Doctor! i am here to assist you!!",
      time: "9:00 am",
      sent: false,
    },
    {
      msg: "x patients are required to be consulted",
      time: "9:10 am",
      sent: false,
    },
    {
      msg:"Patients are sorted according to there severity!!!",
      time: "9:10 am",
      sent: false,
    },
    {
      msg:"Press yes to do so",
      time: "9:10 am",
      sent: false,
    }
  ],
  [
    // Conversation 2
    {
      msg: "Hello, Doctor. I've had a persistent cough and fever for a few days.",
      time: "11:00 am",
      sent: true,
    },
    {
      msg: "I'm Dr. Johnson. I'm sorry you're not feeling well. Have you traveled recently or been in contact with anyone who's sick?",
      time: "11:05 am",
      sent: false,
    },
    {
      msg: "No, I haven't traveled, but my colleague at work was sick recently.",
      time: "11:10 am",
      sent: true,
    },
    {
      msg: "It's possible you've contracted an infection. I recommend getting a COVID-19 test and staying isolated until you receive the results.",
      time: "11:15 am",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I'll follow your advice and get tested.",
      time: "11:20 am",
      sent: true,
    },
  ],
  [
    // Conversation 3
    {
      msg: "Good afternoon, Doctor. I've been experiencing dizziness and fatigue lately.",
      time: "2:00 pm",
      sent: true,
    },
    {
      msg: "I'm Dr. Lee. I'm sorry to hear that. Are you taking any medications or experiencing any other symptoms?",
      time: "2:05 pm",
      sent: false,
    },
    {
      msg: "I'm not on any medications, but I've also had occasional headaches and blurred vision.",
      time: "2:10 pm",
      sent: true,
    },
    {
      msg: "It's important to get a comprehensive checkup to determine the cause of your symptoms. Let's schedule an appointment for further evaluation.",
      time: "2:15 pm",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I appreciate your help.",
      time: "2:20 pm",
      sent: true,
    },
  ],
  [
    // Conversation 4
    {
      msg: "Hi, Doctor. I've been experiencing severe allergies with sneezing and itchy eyes.",
      time: "4:30 pm",
      sent: true,
    },
    {
      msg: "I'm Dr. Patel. Allergies can be quite bothersome. Have you been exposed to any specific allergens recently?",
      time: "4:35 pm",
      sent: false,
    },
    {
      msg: "I spent the weekend in the countryside, and that's when the symptoms started.",
      time: "4:40 pm",
      sent: true,
    },
    {
      msg: "It's likely due to environmental allergens. I'll prescribe an antihistamine to alleviate your symptoms.",
      time: "4:45 pm",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I hope that helps.",
      time: "4:50 pm",
      sent: true,
    },
  ],
  [
    // Conversation 5
    {
      msg: "Doctor, I've been feeling extremely fatigued and have no energy lately.",
      time: "10:00 am",
      sent: true,
    },
    {
      msg: "I'm Dr. Garcia. Fatigue can have many causes. Are you getting enough rest and sleep?",
      time: "10:05 am",
      sent: false,
    },
    {
      msg: "I've been sleeping well, but the fatigue persists. I also have muscle weakness.",
      time: "10:10 am",
      sent: true,
    },
    {
      msg: "I'll order some blood tests to check for any underlying health conditions. It could be related to various factors.",
      time: "10:15 am",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I hope to find the cause and get better soon.",
      time: "10:20 am",
      sent: true,
    },
  ],
  [
    // Conversation 6
    {
      msg: "Doctor, my child has a high fever and has been vomiting. I'm very worried.",
      time: "8:15 am",
      sent: true,
    },
    {
      msg: "I'm Dr. Martinez. I understand your concern. It's important to monitor their fever and hydration. Any other symptoms?",
      time: "8:20 am",
      sent: false,
    },
    {
      msg: "They also have diarrhea and seem very lethargic.",
      time: "8:25 am",
      sent: true,
    },
    {
      msg: "It could be a stomach virus. Keep them hydrated, and if symptoms worsen, bring them to the emergency room for evaluation.",
      time: "8:30 am",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I'll watch them closely.",
      time: "8:35 am",
      sent: true,
    },
  ],
  [
    // Conversation 7
    {
      msg: "Hello, Doctor. I've been experiencing joint pain and stiffness, especially in the mornings.",
      time: "3:30 pm",
      sent: true,
    },
    {
      msg: "I'm Dr. Adams. Joint pain can be challenging. Are there any specific joints that are affected, and how long have you had these symptoms?",
      time: "3:35 pm",
      sent: false,
    },
    {
      msg: "My knees and wrists are the most affected. I've had these symptoms for a few weeks now.",
      time: "3:40 pm",
      sent: true,
    },
    {
      msg: "I recommend a rheumatologist evaluation to rule out any autoimmune conditions. We'll get to the bottom of this.",
      time: "3:45 pm",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I hope to find some relief soon.",
      time: "3:50 pm",
      sent: true,
    },
  ],
  [
    // Conversation 8
    {
      msg: "Doctor, I've been having trouble sleeping and feel anxious all the time.",
      time: "7:45 am",
      sent: true,
    },
    {
      msg: "I'm Dr. Turner. Anxiety and sleep problems often go hand in hand. How long has this been going on, and do you know any triggers?",
      time: "7:50 am",
      sent: false,
    },
    {
      msg: "It's been several months, and I think it's related to work stress and family issues.",
      time: "7:55 am",
      sent: true,
    },
    {
      msg: "Let's discuss treatment options, which may include therapy and medication. We'll work on managing your anxiety and improving your sleep.",
      time: "8:00 am",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I'm looking forward to feeling better.",
      time: "8:05 am",
      sent: true,
    },
  ],
  [
    // Conversation 9
    {
      msg: "Hi, Doctor. I've noticed a persistent rash on my arms and legs. It's quite itchy and uncomfortable.",
      time: "12:30 pm",
      sent: true,
    },
    {
      msg: "I'm Dr. Wright. Rashes can have various causes. Have you been in contact with any new substances or allergens recently?",
      time: "12:35 pm",
      sent: false,
    },
    {
      msg: "I've been using a new laundry detergent, but I'm not sure if that's the cause. The rash appeared a week ago.",
      time: "12:40 pm",
      sent: true,
    },
    {
      msg: "It could be a contact dermatitis. I'll recommend a different detergent and a cream to alleviate the rash. If it doesn't improve, we'll reevaluate.",
      time: "12:45 pm",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I'll try that and see if it helps.",
      time: "12:50 pm",
      sent: true,
    },
  ],
  [
    // Conversation 10
    {
      msg: "Doctor, I've been experiencing intense headaches and difficulty with my vision.",
      time: "4:00 pm",
      sent: true,
    },
    {
      msg: "I'm Dr. Baker. Vision problems and headaches could be concerning. Have you had any head injuries or other health issues?",
      time: "4:05 pm",
      sent: false,
    },
    {
      msg: "I haven't had any head injuries, but these symptoms have been bothering me for a couple of weeks.",
      time: "4:10 pm",
      sent: true,
    },
    {
      msg: "We need to investigate further with a neurological evaluation and an eye exam. It's essential to rule out any serious conditions.",
      time: "4:15 pm",
      sent: false,
    },
    {
      msg: "Thank you, Doctor. I hope to get to the bottom of this issue soon.",
      time: "4:20 pm",
      sent: true,
    },
  ],
  // Add more conversations here if needed
];
