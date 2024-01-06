import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles/AddWord.css";

const AddWord = () => {
  const [word, setWord] = useState("");
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");
  const [usingExample, setUsingExample] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику для обработки данных формы
    console.log("Submitted:", { word, transcription, translation, usingExample });
    // Очистить поля формы
    setWord("");
    setTranscription("");
    setTranslation("");
    setUsingExample("");
  };

  return (
    <div className="text">
      <h2>Add Word</h2>
      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddWord;