import './App.css';
import React, { useState } from "react"; 

function App() {
    const [text, setText] = useState("");
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  return (
    <center>
        <div>
          <h1>Responsive Paragraph Word Counter</h1>
          <textarea value={text} cols={70} rows={10} placeholder="Type here...." onChange={handleTextChange}></textarea>
          <p>Word Count: {wordCount}</p>
        </div>
    </center>
  );
}

export default App;
