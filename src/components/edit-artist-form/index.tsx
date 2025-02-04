"use client";

import { Button, Stack, TextInput } from "@mantine/core";

interface EditArtistFormProps {
  defaultName: string;
}

export function EditArtistForm({ defaultName }: EditArtistFormProps) {
  return (
    <Stack component="form" w="90%">
      <TextInput label="Nome" name="name" defaultValue={defaultName} required minLength={2} />

      <Stack mt="sm" gap="md">
        <Button color="teal" type="submit">
          Salvar
        </Button>

        <Button color="red" variant="outline">
          Deletar
        </Button>
      </Stack>
    </Stack>
  );
}
