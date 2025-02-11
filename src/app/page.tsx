import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Record Keeper Editor",
  description: "Gerencie e edite seus dados do Record Keeper.",
};

export default function Home() {
  return (
    <Stack component="main" align="center" justify="center">
      <Stack component="form" gap="md" w="90%" maw={500}>
        <TextInput label="E-mail" required />

        <PasswordInput label="Senha" required />

        <Button color="teal" mt="xs">
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
