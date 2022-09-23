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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
