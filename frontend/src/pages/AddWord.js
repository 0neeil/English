import React, { useState } from "react";
import { Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import "./styles/AddWord.css";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");
  const [usingExample, setUsingExample] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrorMsg = [];

    if (word.length === 0) {
      newErrorMsg.push({ status: 400, msg: "Word can't be empty" });
    }

    if (translation.length === 0) {
      newErrorMsg.push({ status: 400, msg: "Translation can't be empty" });
    }

    if (newErrorMsg.length > 0) {
      setErrorMsg(newErrorMsg);
    } else {
      setErrorMsg([{ status: 200, msg: `Word ${word} added` }]);
      setWord("");
      setTranscription("");
      setTranslation("");
      setUsingExample("");
    }
  };

  return (
    <div className="text addword-container">
      <h2 className="addword-title">Add Word</h2>

      <Form className="addword-form" onSubmit={handleSubmit}>
        <div>
          {console.log(errorMsg)}
          {errorMsg.map((elem) => (
                
                <div className={elem.status === 200 ? "success-msg" : "error-msg"} key={`${elem.msg}-${elem.status}`}>
                  {console.log(elem)}
                  {elem.msg}
                </div>
      
            ))}
        </div>
        <Form.Group className="mb-3" controlId="word">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="transcription">
          <Form.Label>Transcription</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter transcription"
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="translation">
          <Form.Label>Translation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter translation"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="usingExample">
          <Form.Label>Using Example</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter using example"
            value={usingExample}
            onChange={(e) => setUsingExample(e.target.value)}
          />
        </Form.Group>

        <Button
          className="addword-button"
          variant="success"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddWord;