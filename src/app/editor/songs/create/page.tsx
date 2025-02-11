import { CreateSongForm } from "@/components/create-song-form";
import { Stack, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper Editor | Adicionar música",
};

export default async function CreateSongPage() {
  return (
    <Stack component="main" align="flex-start">
      <Title order={2}>Registre uma nova música</Title>

      <CreateSongForm />
    </Stack>
  );
}
