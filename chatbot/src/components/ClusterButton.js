// const articles = {
//     "users": [
//             {
//                 "id": 1,
//                 "doctor": "Orthopedic",
//                 "pain_part": ["Bone","Muscle_Ligaments"]
//             },
//             {
//                 "id": 2,
//                 "doctor": "Neuro",
//                 "pain_part": ["Brain"]
//             }
//         ]
//     }
// import React from 'react'

// const pain_part = ["Bone","Muscle_Ligaments"];

import React from "react";
import Button from "./Button";
import chatbotQuestions from './chatbotQuestions'; 

export default function ClusterButton(props) {
  // const pain_part = ["Bone","Muscle_Ligaments","Benc"];
  // const articles = {
  //   users: [
  //     {
  //       id: 1,
  //       doctor: "Orthopedic",
  //       pain_part: ["Bone", "Muscle_Ligaments"],
  //     },
  //     {
  //       id: 2,
  //       doctor: "Neuro",
  //       pain_part: ["Brain"],
  //     },
  //   ],
  // };

  // const ortho_bones = {
  //   intensity_pain: {
  //     questions: ["Pain At Rest", "Localized", "Persistent"],
  //     index: 0,
  //     topic:"Intensity Of Pain"
  //   },
  //   duration_pain: {
  //     questions: ["Acute", "Chronic"],
  //     index: 1,
  //     topic:"Duration Of Pain"
  //   },
  //   swelling: {
  //     questions: ["Mild", "Moderate", "Severe"],
  //     index: 2,
  //     topic:"Swelling"
  //   },
  //   joint_stiffness: {
  //     questions: ["Mild", "Moderate", "Severe"],
  //     index: 3,
  //     topic:"Stiffness in Joints"
  //   },
  //   medical_history: {
  //     questions: ["No", "Yes"],
  //     index: 4,
  //     topic:"Any Medical History"
  //   },
  //   age: {
  //     questions: ["10", "20", "30"],
  //     index: 5,
  //     topic:"Age"
  //   },
  // };

  // const allQuestions = [];

  // Iterate through the ortho_bones object and concatenate questions
  // To dispkay all questions
  // for (const key in ortho_bones) {
  //     if (ortho_bones.hasOwnProperty(key)) {
  //         const questions = ortho_bones[key].questions;
  //         allQuestions.push(...questions);
  //     }
  // }

  // console.log(allQuestions);
  //In this code, the allQuestions array will contain all the questions from the ortho_bones object. The for...in loop is used to iterate through the ortho_bones object, and the questions from each symptom are concatenated into the allQuestions array using the spread operator (...). Finally, the console.log(allQuestions) statement will display all the questions in one go.

  // const pain_part = ["Bone","Muscle_Ligaments","Benc"];
  // Here Current index - 1 gives the severity order of -1,0,1

//   let count = Object.keys(ortho_bones).length;
// //   console.log(count);

//   for(let i=0;i<count;i++)
//   {

//   }

// const chatbotQuestions = [];
// chatbotQuestions.push({
//   index: 0,
//   topic: "movement",
//   question:
//     "Can you feel and control the movement of your arms and legs as you normally would?",
//   answer: [
//     ["Yes", 1],
//     ["No", 2],
//     ["Not Sure", 0],
//   ],
//   questionNo: 1,
// });
// chatbotQuestions.push({
//   index: 1,
//   topic: "coordination and balance",
//   question:
//     "Do you experience any difficulties with your coordination and balance, such as stumbling or feeling unsteady when walking?",
//   answer: [
//     ["Yes", 1],
//     ["No", 2],
//     ["Not Sure", 0],
//   ],
//   questionNo: 2,
// });

// chatbotQuestions.push({
//   index: 2,
//   topic: "reflexes",
//   question:
//     "Have you noticed any changes in your reflexes, like heightened or reduced responses when your doctor tested your reflexes?",
//   answer: [
//     ["Yes", 1],
//     ["No", 2],
//     ["Not Sure", 0],
//   ],
//   questionNo: 3,
// });

// chatbotQuestions.push({
//   index: 3,
//   topic: "areas of discomfort",
//   question:
//     "Do you have any specific areas in your body where you're experiencing pain or discomfort?",
//   answer: [
//     ["Full Body", 12],
//     ["Muscles", 5],
//     ["Limb", 6],
//     ["Neck", 7],
//     ["Back", 8],
//     ["Legs", 9],
//     ["Face", 10],
//     ["Arms", 11],
//   ],
//   questionNo: 4,
// });

// chatbotQuestions.push({
//   index: 4,
//   topic: "memory",
//   question:
//     "Do you find it difficult to remember recent events or things you've learned recently? For example, do you often forget where you placed your keys or forget what you had for breakfast this morning?",
//   answer: [
//     ["Yes", 1],
//     ["No", 2],
//     ["Not Sure", 0],
//   ],
//   questionNo: 5,
// });

// chatbotQuestions.push({
//     index: 5,
//     topic: "emotional well-being",
//     question: "Have you been feeling persistently sad, down, or anxious most days, to the extent that it affects your daily life and activities?",
//     answer: [["Yes", 1], ["No", 2],["Not Sure", 0]],
//     questionNo: 6
// });

// chatbotQuestions.push({
//     index: 6,
//     topic: "bowel and bladder control",
//     question: "Have you experienced any recent changes or difficulties in controlling your bowel or bladder movements, such as sudden or frequent urges, incontinence, or constipation?",
//     answer: [["Yes", 1], ["No", 2],["Not Sure", 0]],
//     questionNo: 7
// });

// chatbotQuestions.push({
//     index: 7,
//     topic: "swallowing and eating habits",
//     question: "Have you noticed any difficulties with swallowing, such as choking or food getting stuck, or any unexplained weight loss or changes in your eating habits?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 8
// });

// chatbotQuestions.push({
//     index: 8,
//     topic: "mental well-being",
//     question: "Do you ever experience unusual thoughts, perceptions, or extreme distrust that affect your daily life and well-being?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 9
// });

// chatbotQuestions.push({
//     index: 9,
//     topic: "sleep patterns",
//     question: "Do you have difficulties with your sleep pattern, such as trouble falling asleep, staying asleep, or experiencing excessive daytime sleepiness?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 10
// });

// chatbotQuestions.push({
//     index: 10,
//     topic: "speech problems",
//     question: "Do you face any issues with your speech, like slurred speech, difficulty finding words, or trouble speaking clearly?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 11
// });

// chatbotQuestions.push({
//     index: 11,
//     topic: "walking and balance",
//     question: "Have you experienced any changes in the way you walk or your ability to maintain balance while walking?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 12
// });

// chatbotQuestions.push({
//     index: 12,
//     topic: "sensations and symptoms",
//     question: "Have you noticed any unusual sensations, such as numbness or tingling in your body, or experienced episodes of nausea or paralysis?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 13
// });

// chatbotQuestions.push({
//     index: 13,
//     topic: "breathing patterns",
//     question: "Have you been experiencing any difficulty or changes in your breathing patterns recently?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 14
// });

// chatbotQuestions.push({
//     index: 14,
//     topic: "sensory changes",
//     question: "Have you noticed any of the following changes in your eyes, ears, or skin: slow eye movement, inability to open or close eyes, vision changes, watery eyes, dropping eyelids, sensitivity to light, sound, or others?",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 15
// });

// chatbotQuestions.push({
//     index: 15,
//     topic: "headaches",
//     question: "Have you experienced any headaches recently? Please respond with 'Yes' or 'No'.",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 16
// });

// chatbotQuestions.push({
//     index: 16,
//     topic: "shaking, seizures, fever",
//     question: "Have you had any episodes of shaking, seizures, or a fever lately? Please respond with 'Yes' or 'No'.",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 17
// });

// chatbotQuestions.push({
//     index: 17,
//     topic: "confusion and consciousness",
//     question: "Have you experienced any recent episodes of confusion or changes in consciousness? Please respond with 'Yes' or 'No'.",
//     answer: [["Yes", 1], ["No", 2], ["Not sure", 0]],
//     questionNo: 18
// });



// console.log(chatbotQuestions[0].answer[0][1])

  // const search = props.search;

  // const pain_part_question = ortho_bones.swelling.questions; //Can be optimized using integral addresses


  const pain_part_question_dummy = chatbotQuestions[props.currentQuestionIndex];

  return (
    <div className="container">
    <p>{pain_part_question_dummy.question}</p>
      {pain_part_question_dummy.answer.map((element, index) => {
        return (
          <div className="col-md-4 my-2" key={index}>
            <Button subject={element[0]} ClickOptions = {props.ClickOptions}/>
          </div>
        );
      })}
    </div>
  );
}
