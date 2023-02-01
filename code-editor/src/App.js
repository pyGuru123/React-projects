import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Editor from './components/Editor';

function App() {
  const [openedEditor, setOpenedEditor] = useState('html');

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
    console.log(openedEditor);
  };

  const pStyle = {
    background : "#333",
    color: "#fff",
    padding: "4px",
  }

  return (
    <div className="App">
      <p style={pStyle}> Welcome to the Editor !</p>

      <div className="button-container">
        <Button title="html" onClick={() => onTabClick('html')}/>
        <Button title="css" onClick={() => onTabClick('css')}/>
        <Button title="js" onClick={() => onTabClick('js')}/>
      </div>

      <div className="editor-container">
        {
          openedEditor === 'html' ? (<p>HTML</p>) :
          openedEditor === 'css' ? (<p>CSS</p>) : 
          (<p>JS</p>)
        }
      </div>
    </div>
  );
}

export default App;
