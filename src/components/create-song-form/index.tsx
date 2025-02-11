"use client";

import { Button, Grid, Group, NativeSelect, Stack, Text, TextInput } from "@mantine/core";
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

          <NativeSelect
            label="Artista"
            name="artist"
            required
            data={[
              { label: "Bring Me The Horizon", value: "1" },
              { label: "NCT 127", value: "2" },
              { label: "Asking Alexandria", value: "3" },
              { label: "Tayeon", value: "4" },
            ]}
          />
          <NativeSelect
            label="Lançamento"
            name="release"
            required
            data={[
              { label: "The Black - Asking Alexandria", value: "1" },
              { label: "Sempiternal - Bring Me The Horizon", value: "2" },
              { label: "From Zero - Linkin Park", value: "3" },
              { label: "Melt Away - Taeyeon", value: "4" },
            ]}
          />

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
          Adicionar
        </Button>
      </Grid.Col>
    </Grid>
  );
}
