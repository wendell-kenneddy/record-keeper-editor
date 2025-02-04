"use client";

import { Button, Stack, TextInput } from "@mantine/core";

export function CreateArtistForm() {
  return (
    <Stack component="form" w="90%" maw={500}>
      <TextInput label="Nome" name="name" required minLength={2} />

      <Button color="teal" mt="sm">
        Registrar
      </Button>
    </Stack>
  );
}
