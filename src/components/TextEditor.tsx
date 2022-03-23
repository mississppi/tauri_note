import React, { SyntheticEvent, useState } from "react";
import {
    Editor as DraftEditor, 
    EditorState, 
    RichUtils,
    getDefaultKeyBinding,
    KeyBindingUtil
} from "draft-js";
const {hasCommandModifier} = KeyBindingUtil;

function keyBindingFn(e: React.KeyboardEvent<{}>): string | null{
    if (e.keyCode === 83 /* `S` key */ && hasCommandModifier(e)) {
        return 'save';
    }
    return getDefaultKeyBinding(e);
}

const TextEditor: React.FC = () => {
    const [editorState, setEditorState] = useState(() => 
        EditorState.createEmpty()
    );
    const handleKeyCommand = (command: string, editorState: EditorState) => {
        if (command === 'save') {
          console.log("test");
          return "handled";
        }
        return "not-handled";
    };
    return (
        <div className="contentArea">
            <div className="texteditor">
                <DraftEditor 
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={keyBindingFn}
                />
            </div>
        </div>
    );
}

export default TextEditor;