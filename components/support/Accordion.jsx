import React from "react";
import { useState } from "react";

//accordion for FAQ's
const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accwrapper ">
      <div className="accordion ">
        {data.map((items, i) => (
          <div key={i} className="accitem font-bold">
            <div className="acctitle" onClick={() => toogle(i)}>
              <h2>{items.question}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "acccontentshow" : "acccontent"}>
              {items.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

const data = [
  {
    question: "What do I put in my bio?",
    answer:
      "Your bio is a summary of who you are. If you don't want to write much you can make a list of things you like, want or even your hobbies.",
  },
  {
    question: "How do I add an event?",
    answer:
      "simply visit our webpage and signup as an organiser. You wil be able to upload events!",
  },
  {
    question: "How do I delete a match?",
    answer:
      "Apparently by deleting the conversation but the person may pop up in your recommendations again.",
  },
  {
    question: "Why should I choose this platform over others?",
    answer:
      "The team chose this project to improve upon already existing matchmaking solutions to widen the benefit. A major issue with existing solutions is that they usually consider only mutual friends and fail to connect people based on their interests.",
  },
];
