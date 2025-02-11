import { EditSongForm } from "@/components/edit-song-form";
import { SearchParams } from "@/data/types";
import { Stack, Title } from "@mantine/core";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Record Keeper Editor | Editar música",
};

export default async function EditSongPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { id } = params;

  if (!id || typeof id != "string" || !Number(id)) return redirect("/editor/songs/create");

  return (
    <Stack component="main" align="flex-start">
      <Title order={2}>Editar Melt Away</Title>

      <EditSongForm
        songId={Number(id)}
        defaultTitle="Melt Away"
        defaultArtistId={4}
        defaultReleaseId={4}
      />
    </Stack>
  );
}
