"use client";

import { Button, Grid, Group, NativeSelect, Stack, Text, TextInput } from "@mantine/core";
import StarterKit from "@tiptap/starter-kit";
import { JSONContent, useEditor } from "@tiptap/react";
import { RichTextEditor } from "../rich-text-editor";
import { useDisclosure } from "@mantine/hooks";
import { ResourceDeleteModal } from "../resource-delete-modal";

interface EditSongFormProps {
  songId: number;
  defaultTitle: string;
  defaultArtistId: number;
  defaultReleaseId: number;
  lyrics?: JSONContent;
}

export function EditSongForm({
  defaultTitle,
  defaultArtistId,
  defaultReleaseId,
  lyrics,
}: EditSongFormProps) {
  const [isSongDeleteModalOpen, { open: openSongDeleteModal, close: closeSongDeleteModal }] =
    useDisclosure(false);
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: lyrics,
  });

  return (
    <>
      <Grid w="90%">
        <Grid.Col span={10}>
          <Stack component="form" w="100%">
            <TextInput
              label="Título"
              defaultValue={defaultTitle}
              name="title"
              required
              minLength={2}
            />

            <NativeSelect
              label="Artista"
              name="artist"
              required
              defaultValue={String(defaultArtistId)}
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
              defaultValue={String(defaultReleaseId)}
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

        <Grid.Col mt={25} span={2} w="100%">
          <Stack gap="md">
            <Button color="teal" w="100%">
              Salvar
            </Button>

            <Button onClick={openSongDeleteModal} variant="outline" color="red" w="100%">
              Deletar
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>

      <ResourceDeleteModal
        opened={isSongDeleteModalOpen}
        onClose={closeSongDeleteModal}
        onConfirm={closeSongDeleteModal}
        title={`Deletar ${defaultTitle}?`}
        description="A ação não pode ser revertida."
      />
    </>
  );
}
