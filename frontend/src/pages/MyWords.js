import React, { useEffect, useState } from "react";
import { allWords } from "../http/userAPI";
import "./styles/MyWords.css"

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
        <div className="mywords-container text  d-flex justify-content-center">
          <table className="table-container">
            <thead>
              <tr>
                <th className="th-item">Word</th>
                <th className="th-item">Transcription</th>
                <th className="th-item">Translation</th>
                <th className="th-item">Using Example</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word, index) => (
                <tr key={index}>
                  <td className="td-item">{word.vocabularies.word}</td>
                  <td className="td-item">{word.vocabularies.transcription}</td>
                  <td className="td-item">{word.vocabularies.translate}</td>
                  <td className="td-item">{word.vocabularies.usingExample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default MyWords