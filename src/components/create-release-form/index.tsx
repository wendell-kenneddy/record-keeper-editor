"use client";

// @ts-expect-error theres no @types/dayjs lmao
import ptBr from "dayjs/locale/pt-br";
import { DatePickerInput } from "@mantine/dates";
import { Button, ComboboxData, NativeSelect, Stack, TextInput } from "@mantine/core";

export function CreateReleaseForm() {
  const releaseTypes: ComboboxData = [
    {
      label: "Álbum",
      value: "album",
    },
    {
      label: "EP",
      value: "ep",
    },
    {
      label: "Single",
      value: "single",
    },
  ];

  return (
    <Stack component="form" w="90%">
      <TextInput label="Título" name="title" required minLength={2} />

      <TextInput label="Artista" name="artist" required minLength={2} />

      <NativeSelect label="Tipo de lançamento" data={releaseTypes} defaultValue="album" required />

      <DatePickerInput
        locale={ptBr}
        label="Data de lançamento"
        placeholder="08/01/2025"
        name="release-date"
        required
      />

      <Button color="teal" mt="sm">
        Registrar
      </Button>
    </Stack>
  );
}
