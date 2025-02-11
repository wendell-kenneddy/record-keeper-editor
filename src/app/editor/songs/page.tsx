import { SongsPageContent } from "@/components/songs-page-content";
import { mockSongs } from "@/data/mockData";
import { Stack } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper Editor | Músicas",
};

export default async function SongsPage() {
  return (
    <Stack component="main" align="flex-start" gap="xs">
      <SongsPageContent songs={mockSongs} />
    </Stack>
  );
}
