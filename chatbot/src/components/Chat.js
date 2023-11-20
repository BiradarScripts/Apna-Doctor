import React from "react";
import "./chat.css";
import ClusterButton from "./ClusterButton";

export default function Chat(props) {
  const reversedTexts = [...props.texts].reverse();

  return (
    <div>
      <div className="chatbox">
        <div className="upper_chatbox">
          {reversedTexts.map((text, index) => {
            return (
              <div
                className="bg-text"
                id={props.name === text.name ? "you" : "other"}
                key={index}
              >
                <div className="text">
                  <div
                    className="mx-2"
                    style={{
                      textAlign: "left",
                      fontSize: "11px",
                      color: "rgba(228, 184, 5, 0.76)",
                    }}
                  ></div>
                  {/*{text.message}*/}
                  <ClusterButton ClickOptions = {props.ClickOptions} currentQuestionIndex = {props.currentQuestionIndex}/>
                  <div>
                    <div
                      className="mx-2"
                      style={{
                        textAlign: "right",
                        fontSize: "11px",
                        color: "rgba(228, 184, 5, 0.76)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lower_chatbox">
          <input
            id="Input"
            type="text"
            placeholder="Message..."
            value={props.message}
            onChange={props.onChangeHandler}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                props.onClickHandler();
              }
            }}
          ></input>
          <i
            className="fa-solid fa-paper-plane fa-beat fa-lg sendArrow"
            onClick={props.onClickHandler}
          ></i>
        </div>
      </div>
    </div>
  );
}