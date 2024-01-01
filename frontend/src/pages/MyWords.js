import React, { useEffect, useState } from "react";
import { allWords } from "../http/userAPI";

const MyWords = () =>{
    const [words, setWords] = useState([])
    useEffect( () => {
        async function fetchData () {
        const getAllWords = await allWords()
        setWords(getAllWords)
        }
        fetchData()
    },[])

    return (
        <div className="text">
            <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Using Example</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={index}>
              <td>{word.vocabularies.word}</td>
              <td>{word.vocabularies.transcription}</td>
              <td>{word.vocabularies.translate}</td>
              <td>{word.vocabularies.usingExample}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}

export default MyWords