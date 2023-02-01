import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css';
import { Controlled as ControlledEditorComponent} from 'react-codemirror2';

// languages
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

// themes
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

function Editor(props) {
    const [theme, setTheme] = useState('dracula');

    const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night'];

    const handleChange = (editor, data, value) => {
        props.setEditorState(value);
    }

    return (
        <div className="editor-container">



            <ControlledEditorComponent
                onBeforeChange = {handleChange}
                value = {props.value}
                className = "code-mirror-wrapper"
                options = {{
                    lineWrapping: true,
                    lint: true,
                    mode: props.language,
                    lineNumbers: true,
                }}
            />
        </div>
    )
}

export default Editor;