import { CreateReleaseForm } from "@/components/create-release-form";
import { Center, Stack, Title } from "@mantine/core";

export default function CreateReleasePage() {
  return (
    <Center component="main">
      <Stack align="center" maw={500}>
        <Title order={2}>Registre um novo lançamento</Title>

        <CreateReleaseForm />
      </Stack>
    </Center>
  );
}
