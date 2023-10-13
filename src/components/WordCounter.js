import React, { useState } from 'react';
import "./WordCounter.css";

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <center>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="4"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
      </center>
    </div>
  );
}

export default WordCounter;
