import { useEffect, useState } from 'react';
import './hello-word.css';

function HelloWord() {
const [mensagge, setMensagge] = useState("");

useEffect(() => {
  setMensagge("¡Hello World! 😄")
},[mensagge]);


  return (
    <div className="container">
      <h1>Hello World App</h1>
      <p>{mensagge}</p>
    </div>
  );
}

export default HelloWord;
