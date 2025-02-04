import { EditArtistForm } from "@/components/edit-artist-form";
import { SearchParams } from "@/data/types";
import { Center, Stack, Title } from "@mantine/core";
import { redirect } from "next/navigation";

export default async function EditArtistPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const id = params.id;

  if (!id || !Number(id)) return redirect("/editor/artists/create");

  return (
    <Center component="main">
      <Stack align="center" maw={500}>
        <Title order={2}>Editar artista</Title>

        <EditArtistForm defaultName="Tayeong" />
      </Stack>
    </Center>
  );
}
