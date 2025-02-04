import { CreateArtistForm } from "@/components/create-artist-form";
import { Center, Stack, Title } from "@mantine/core";

export default async function CreateArtistPage() {
  return (
    <Center component="main">
      <Stack align="center" maw={500}>
        <Title order={2}>Registre um novo artista</Title>

        <CreateArtistForm />
      </Stack>
    </Center>
  );
}
