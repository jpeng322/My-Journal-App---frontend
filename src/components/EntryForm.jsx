import { useContext, useState } from "react";
import { EntryContext } from "../contexts/EntryContext";
import Draggable from "react-draggable";
import "../cssPages/EntryForm.css";

const EntryForm = () => {
  const { addEntry, active, currentDate, closeForm } = useContext(EntryContext);
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(topic, details);
    setTopic("");
    setDetails("");
  };

  // console.log(currentDate, "currentdate")
  return (
    <Draggable>
      <div className={active ? "entry-form" : "entry-form hidden"}>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Note</h3>
            <button type="button" onClick={closeForm}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
          </div>
          <div>
            <label htmlFor="topic">Topic: </label>
            <input
              className="ms-2"
              type="text"
              name="topic"
              id="topic"
              onChange={(e) => setTopic(e.target.value)}
              value={topic}
            />
          </div>
          <div>
            <p>
              Date: <span>{currentDate}</span>
            </p>
          </div>
          <div>
            <label htmlFor="details">Details: </label>
            <textarea
            //   maxLength={100}
              rows={5}
              cols={5}
              name="details"
              id="details"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            >
              {" "}
            </textarea>
          </div>
          <button type="submit">Enter</button>
        </form>
      </div>
    </Draggable>
  );
};

export default EntryForm;
