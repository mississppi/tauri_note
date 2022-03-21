import React from "react";
import { 
    Editor, 
    EditorState,
    RichUtils,
    AtomicBlockUtils,
    DraftEditorCommand,
    convertToRaw,
    convertFromRaw
} from "draft-js";

function TextEditor() {
    const initialState = EditorState.createEmpty();
    const [editorState, setEditorState] = React.useState<EditorState>(initialState);
    const handleKeyCommand = (command: DraftEditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          setEditorState(newState);
          return "handled";
        }
        return "not-handled";
    };
    return (
        <div className="main_wrapper">
            <div className="titleArea">
                <input type="text" className="titleInput"/>
                <span className="focus_line"></span>
            </div>
            <div className="contentArea">
                <div className="texteditor">
                    <Editor 
                        editorState={editorState}
                        onChange={setEditorState}
                        handleKeyCommand={handleKeyCommand}
                    />
                </div>
            </div>
        </div>
        
    );
}

export default TextEditor;