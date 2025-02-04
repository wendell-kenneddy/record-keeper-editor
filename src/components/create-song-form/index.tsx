"use client";

import { Button, Grid, Group, Stack, Text, TextInput } from "@mantine/core";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import { RichTextEditor } from "../rich-text-editor";

export function CreateSongForm() {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: {},
  });

  return (
    <Grid w="90%">
      <Grid.Col span={10}>
        <Stack component="form" w="100%">
          <TextInput label="Título" name="title" required minLength={2} />

          <TextInput label="Lançamento" name="release" required minLength={2} />

          <Group gap={4} mb={-14}>
            <Text size="sm">Letra</Text>

            <Text size="sm" style={{ color: "var(--mantine-color-red-9)" }}>
              *
            </Text>
          </Group>

          <RichTextEditor editor={editor!} />
        </Stack>
      </Grid.Col>

      <Grid.Col span={2} w="100%">
        <Button color="teal" mt={25} w="100%">
          Registrar
        </Button>
      </Grid.Col>
    </Grid>
  );
}
