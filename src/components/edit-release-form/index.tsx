"use client";

// @ts-expect-error theres no @types/dayjs lmao
import ptBr from "dayjs/locale/pt-br";
import { Button, ComboboxData, NativeSelect, Stack, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

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

export function EditReleaseForm() {
  return (
    <Stack component="form" w="90%">
      <TextInput label="Título" defaultValue="Melt Away" name="title" required minLength={2} />

      <TextInput label="Artista" defaultValue="Tayeon" name="artist" required minLength={2} />

      <NativeSelect label="Tipo de lançamento" data={releaseTypes} defaultValue="album" required />

      <DatePickerInput
        locale={ptBr}
        label="Data de lançamento"
        placeholder="08/01/2025"
        name="release-date"
        required
      />

      <Stack mt="sm" gap="sm">
        <Button color="teal">Salvar</Button>

        <Button color="red" variant="outline">
          Deletar
        </Button>
      </Stack>
    </Stack>
  );
}
