import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";

export default function Home() {
  return (
    <Stack component="main" align="center" justify="center">
      <Stack component="form" gap="md" w="90%" maw={500}>
        <TextInput label="E-mail" required />

        <PasswordInput label="Password" required />

        <Button color="teal" mt="xs">
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
