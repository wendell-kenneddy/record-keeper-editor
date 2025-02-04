"use client";

import { RichTextEditor as MantineRichTextEditor } from "@mantine/tiptap";
import { BubbleMenu, Editor } from "@tiptap/react";

interface RichTextEditorProps {
  editor: Editor;
}

export function RichTextEditor({ editor }: RichTextEditorProps) {
  return (
    <MantineRichTextEditor editor={editor} mih={106}>
      <MantineRichTextEditor.Toolbar>
        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Bold />
          <MantineRichTextEditor.Italic />
          <MantineRichTextEditor.Strikethrough />
          <MantineRichTextEditor.ClearFormatting />
          <MantineRichTextEditor.Code />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.H1 />
          <MantineRichTextEditor.H2 />
          <MantineRichTextEditor.H3 />
          <MantineRichTextEditor.H4 />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Blockquote />
          <MantineRichTextEditor.Hr />
          <MantineRichTextEditor.BulletList />
          <MantineRichTextEditor.OrderedList />
        </MantineRichTextEditor.ControlsGroup>

        <MantineRichTextEditor.ControlsGroup>
          <MantineRichTextEditor.Undo />
          <MantineRichTextEditor.Redo />
        </MantineRichTextEditor.ControlsGroup>
      </MantineRichTextEditor.Toolbar>

      {editor && (
        <BubbleMenu editor={editor}>
          <MantineRichTextEditor.ControlsGroup>
            <MantineRichTextEditor.Bold />
            <MantineRichTextEditor.Italic />
            <MantineRichTextEditor.H1 />
            <MantineRichTextEditor.H2 />
            <MantineRichTextEditor.H3 />
            <MantineRichTextEditor.H4 />
          </MantineRichTextEditor.ControlsGroup>
        </BubbleMenu>
      )}

      <MantineRichTextEditor.Content />
    </MantineRichTextEditor>
  );
}
