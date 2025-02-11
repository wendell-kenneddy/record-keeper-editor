import { ArtistsPageContent } from "@/components/artists-page-content";
import { mockArtists } from "@/data/mockData";
import { Stack } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper Editor | Artistas",
};

export default async function ArtistsPage() {
  return (
    <Stack component="main" align="flex-start" gap="xs">
      <ArtistsPageContent artists={mockArtists} />
    </Stack>
  );
}
