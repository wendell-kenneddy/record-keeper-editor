import { Center, Group, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Center py="lg" bg="dark">
      <Group w="90%" maw={1024} align="center" justify="space-between">
        <Link href="/editor/songs" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.svg" alt="Logo" width={106} height={19} priority />
        </Link>

        <Group align="center">
          <Text size="sm">
            <Link href="/editor/releases" style={{ color: "inherit", textDecoration: "none" }}>
              Lançamentos
            </Link>
          </Text>

          <Text size="sm">
            <Link href="/editor/artists" style={{ color: "inherit", textDecoration: "none" }}>
              Artistas
            </Link>
          </Text>
        </Group>
      </Group>
    </Center>
  );
}
