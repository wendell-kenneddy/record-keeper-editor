import { CreateSongForm } from "@/components/create-song-form";
import { Stack, Title } from "@mantine/core";

export default async function CreateSongPage() {
  return (
    <Stack component="main" align="flex-start">
      <Title order={2}>Registre uma nova música</Title>

      <CreateSongForm />
    </Stack>
  );
}
