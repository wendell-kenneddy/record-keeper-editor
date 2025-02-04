import { Center, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Center w="full" h={64} bg="dark">
      <Flex w="100%" maw={1024} align="center" justify="space-between">
        <Link href="/editor/songs" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.svg" alt="Logo" width={106} height={19} priority />
        </Link>
      </Flex>
    </Center>
  );
}
