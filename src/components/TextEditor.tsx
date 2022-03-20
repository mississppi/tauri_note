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
    return (
        <div className="texteditor">
            <Editor 
                editorState={editorState}
                onChange={setEditorState}
            />
        </div>
    );
}

export default TextEditor;