import { Center, Stack, Title } from "@mantine/core";
import { SearchParams } from "@/data/types";
import { redirect } from "next/navigation";
import { EditReleaseForm } from "@/components/edit-release-form";

export default async function EditReleasePage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const id = params.id;

  if (!id || !Number(id)) return redirect("/editor/releases/create");

  return (
    <Center component="main">
      <Stack align="center" maw={500}>
        <Title order={2}>Editar lançamento</Title>

        <EditReleaseForm />
      </Stack>
    </Center>
  );
}
