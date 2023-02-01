import React, {useState} from 'react';

// themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

// languages
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

import { Controlled as ControlledEditorComponent} from 'react-codemirror2';
import ThemeSelector from './ThemeSelector';

function Editor({language, value, setEditorState}) {
    const [theme, setTheme] = useState('dracula');

    const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night'];

    const handleChange = (editor, data, value) => {
        setEditorState(value);
    }

    const handleTheme = (el) => {
        setTheme(el.target.value);
        console.log(theme);
    }

    return (
        <div className="editor-container">
            <ThemeSelector themeArray={themeArray} func={handleTheme}/>

            <ControlledEditorComponent
                onBeforeChange = {handleChange}
                value = {value}
                className = "code-mirror-wrapper"
                options = {{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: theme,
                }}
            />
        </div>
    )
}

export default Editor;