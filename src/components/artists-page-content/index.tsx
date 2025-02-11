"use client";

import { Artist } from "@/data/types";
import { ActionIcon, Button, Checkbox, Group, Modal, Stack, Table, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PlusIcon, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import { ResourceDeleteModal } from "../resource-delete-modal";

interface ArtistsPageContentProps {
  artists: Artist[];
}

export function ArtistsPageContent({ artists }: ArtistsPageContentProps) {
  const [isArtistDeleteModalOpen, { open: openArtistDeleteModal, close: closeArtistDeleteModal }] =
    useDisclosure(false);
  const [isArtistUpsertModalOpen, { open: openArtistUpsertModal, close: closeArtistUpsertModal }] =
    useDisclosure(false);
  const [artistToEditID, setartistToEditID] = useState<number | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  function upsertArtist(id: number) {
    setartistToEditID(id);
    openArtistUpsertModal();
  }

  function clearArtistUpsert() {
    closeArtistUpsertModal();
    setartistToEditID(null);
  }

  return (
    <>
      <Group align="flex-end" gap="sm">
        <ActionIcon
          aria-label="Adicionar artista"
          size="input-sm"
          onClick={openArtistUpsertModal}
          variant="filled"
          color="teal"
        >
          <PlusIcon size={16} />
        </ActionIcon>

        {selectedRows.length > 0 && (
          <ActionIcon
            aria-label="Deletar artista(s)"
            size="input-sm"
            variant="outline"
            color="red"
            onClick={openArtistDeleteModal}
          >
            <Trash size={16} />
          </ActionIcon>
        )}

        <Group align="flex-end" gap="sm" component="form">
          <TextInput label="Nome" name="nameSearch" required minLength={2} />

          <Button color="teal">Filtrar</Button>
        </Group>
      </Group>

      <Table w="100%" striped highlightOnHover withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Adicionado em</Table.Th>
            <Table.Th>Atualizado em</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {artists.map(({ id, name, createdAt, updatedAt }) => (
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

                  <ActionIcon
                    onClick={() => upsertArtist(id)}
                    size="sm"
                    variant="filled"
                    color="gray"
                    aria-label="Editar artista"
                  >
                    <SquarePen />
                  </ActionIcon>
                </Group>
              </Table.Td>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{createdAt}</Table.Td>
              <Table.Td>{updatedAt}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Modal
        opened={isArtistUpsertModalOpen}
        centered
        onClose={clearArtistUpsert}
        title={artistToEditID ? "Editar artista" : "Adicionar artista"}
      >
        <Stack component="form" onSubmit={clearArtistUpsert}>
          <TextInput
            defaultValue={String(
              artistToEditID ? artists.find(({ id }) => id == artistToEditID)?.name : ""
            )}
            label="Nome"
            name="name"
            required
            minLength={2}
          />

          <Group align="center" justify="space-between">
            <Button
              w="48%"
              type="button"
              onClick={closeArtistUpsertModal}
              variant="outline"
              color="red"
            >
              Cancelar
            </Button>

            <Button w="48%" type="submit" variant="filled" color="teal">
              {artistToEditID ? "Editar" : "Adicionar"}
            </Button>
          </Group>
        </Stack>
      </Modal>

      <ResourceDeleteModal
        opened={isArtistDeleteModalOpen}
        onClose={closeArtistDeleteModal}
        onConfirm={closeArtistDeleteModal}
        title={`Deletar ${selectedRows.length} artista${selectedRows.length > 1 ? "s" : ""}?`}
        description="Ao deletar um artista, todos os lançamentos associados a ele também serão deletados. A ação não pode ser revertida."
      />
    </>
  );
}
