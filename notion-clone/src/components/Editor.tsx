import { BlockNoteEditor, PartialBlock, } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/react/style.css';
import { BlockNoteView } from '@blocknote/react';
import { ja } from '@blocknote/core/locales';
interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string | null;
}

function Editor({ onChange, initialContent }: EditorProps) {
  const editor = useCreateBlockNote({
     dictionary: ja,
     initialContent:
     initialContent != null ? JSON.parse(initialContent) : undefined});


  return (
    <div>
      <BlockNoteView editor={editor}
      onChange={() => onChange(JSON.stringify(editor.document))}
      />
    </div>
  );
}

export default Editor;
