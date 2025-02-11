"use client";

import { Song } from "@/data/types";
import { ActionIcon, Button, Checkbox, Group, NativeSelect, Table, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PlusIcon, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import { ResourceDeleteModal } from "@/components/resource-delete-modal";
import Link from "next/link";

interface SongsPageContentProps {
  songs: Song[];
}

export function SongsPageContent({ songs }: SongsPageContentProps) {
  const [isSongDeleteModalOpen, { open: openSongDeleteModal, close: closeSongDeleteModal }] =
    useDisclosure(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  return (
    <>
      <Group align="flex-end" gap="sm">
        <Link href="/editor/songs/create">
          <ActionIcon
            component="div"
            aria-label="Adicionar música"
            variant="filled"
            color="teal"
            size="input-sm"
          >
            <PlusIcon size={16} />
          </ActionIcon>
        </Link>

        {selectedRows.length > 0 && (
          <ActionIcon
            onClick={openSongDeleteModal}
            aria-label="Deletar música(s)"
            variant="outline"
            color="red"
            size="input-sm"
          >
            <Trash size={16} />
          </ActionIcon>
        )}

        <Group align="flex-end" gap="sm" component="form">
          <TextInput label="Título" name="titleSearch" required minLength={2} />

          <NativeSelect
            label="Artista"
            name="artistSearch"
            required
            data={[
              { label: "Qualquer um", value: "any" },
              { label: "Bring Me The Horizon", value: "1" },
              { label: "NCT 127", value: "2" },
              { label: "Asking Alexandria", value: "3" },
            ]}
          />

          <Button color="teal">Filtrar</Button>
        </Group>
      </Group>

      <Table w="100%" striped highlightOnHover withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Título</Table.Th>
            <Table.Th>Artista</Table.Th>
            <Table.Th>Lançamento</Table.Th>
            <Table.Th>Adicionado em</Table.Th>
            <Table.Th>Atualizado em</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {songs.map(({ id, title, artist, release, createdAt, updatedAt }) => (
            <Table.Tr key={id}>
              <Table.Td>
                <Group align="center" justify="center" gap="sm" w="100%">
                  <Checkbox
                    color="teal"
                    aria-label="Select row"
                    checked={selectedRows.includes(id)}
                    onChange={(event) =>
                      setSelectedRows(
                        event.currentTarget.checked
                          ? [...selectedRows, id]
                          : selectedRows.filter((selectedRowId) => selectedRowId !== id)
                      )
                    }
                  />

                  <Link
                    style={{ display: "flex", alignItems: "center" }}
                    href={`/editor/songs/edit?id=${id}`}
                  >
                    <ActionIcon
                      component="div"
                      size="sm"
                      variant="filled"
                      color="gray"
                      aria-label="Editar música"
                    >
                      <SquarePen />
                    </ActionIcon>
                  </Link>
                </Group>
              </Table.Td>
              <Table.Td>{title}</Table.Td>
              <Table.Td>{artist}</Table.Td>
              <Table.Td>{release}</Table.Td>
              <Table.Td>{createdAt}</Table.Td>
              <Table.Td>{updatedAt}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <ResourceDeleteModal
        opened={isSongDeleteModalOpen}
        onClose={closeSongDeleteModal}
        onConfirm={closeSongDeleteModal}
        title={`Deletar ${selectedRows.length} música${selectedRows.length > 1 ? "s" : ""}?`}
        description="A ação não pode ser revertida."
      />
    </>
  );
}
