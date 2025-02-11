import { ReleasesPageContent } from "@/components/releases-page-content";
import { mockReleases } from "@/data/mockData";
import { Stack } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper Editor | Lançamentos",
};

export default async function ReleasesPage() {
  return (
    <Stack component="main" align="flex-start" gap="xs">
      <ReleasesPageContent releases={mockReleases} />
    </Stack>
  );
}
