import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';

function App() {
  const [openedEditor, setOpenedEditor] = useState('html');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  const pStyle = {
    background : "#333",
    color: "#fff",
    padding: "4px",
    textAlign: "center",
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 20);
    return () => clearTimeout(timeOut)
  }, [html, css, js])

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
          openedEditor === 'html' ? (
              <Editor 
                language="xml"
                value={html}
                setEditorState={setHtml}
                />
          ) :
          openedEditor === 'css' ? (
              <Editor 
                language = "css"
                value = {css}
                setEditorState={setCss}  
              />
          ) : 
          (
              <Editor 
                language = "javascript"
                value = {js}
                setEditorState = {setJs}
              />
          )
        }
      </div>

      <div>
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder = "1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
