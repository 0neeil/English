import React, { useState } from "react";
import { Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import { addNewWord } from "../http/userAPI";
import "./styles/AddWord.css";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");
  const [usingExample, setUsingExample] = useState("");
  const [msg, setMsg] = useState([]);

  const fields = [
    { title: "Word", placeholder: "Enter word", type: "text", value: word, method: setWord },
    { title: "Transcription", placeholder: "Enter transcription", type: "text", value: transcription, method: setTranscription },
    { title: "Translation", placeholder: "Enter translation", type: "text", value: translation, method: setTranslation },
    { title: "Using example", placeholder: "Enter using example", as: "textarea", rows: 3, value: usingExample, method: setUsingExample },
  ];

  const handleSubmit = async () => {

    const newErrorMsg = [];

    if (word.length === 0) {
      newErrorMsg.push({ status: 400, msg: "Word can't be empty" });
    }

    if (translation.length === 0) {
      newErrorMsg.push({ status: 400, msg: "Translation can't be empty" });
    }

    if (newErrorMsg.length > 0) {
      setMsg(newErrorMsg);
    } else {
      const response = await addNewWord(word, transcription, translation, usingExample);
      if(response.status ===200){
      setMsg([{ status: 200, msg: `Word ${word} added` }]);
      setWord("");
      setTranscription("");
      setTranslation("");
      setUsingExample("");
      }
    }
  };

  return (
    <div className="text addword-container">
      <h2 className="addword-title">Add Word</h2>

      <Form className="addword-form">
        <div>
          {msg.map((elem) => (
            <div className={elem.status === 200 ? "success-msg" : "error-msg"} key={`${elem.msg}-${elem.status}`}>
              {console.log(elem)}
              {elem.msg}
            </div>
          ))}
        </div>
        {fields.map((elem) => (
          <Form.Group className="mb-3" key={elem.title}>
            <Form.Label>{elem.title}</Form.Label>
            <Form.Control
              type={elem.type}
              as={elem.as}
              rows={elem.rows}
              placeholder={elem.placeholder}
              value={elem.value}
              onChange={(e) => elem.method(e.target.value)}
            />
          </Form.Group>
        ))}

        <Button className="addword-button" variant="success" onClick={()=> handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddWord;