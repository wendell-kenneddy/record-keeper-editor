"use client";

import { LOCALIZED_RELEASE_TYPE_NAMES, Release } from "@/data/types";
import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Modal,
  NativeSelect,
  NumberInput,
  Stack,
  Table,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PlusIcon, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import { ResourceDeleteModal } from "@/components/resource-delete-modal";
import { DateInput } from "@mantine/dates";

interface ReleasesPageContentProps {
  releases: Release[];
}

export function ReleasesPageContent({ releases }: ReleasesPageContentProps) {
  const [
    isReleaseDeleteModalOpen,
    { open: openReleaseDeleteModal, close: closeReleaseDeleteModal },
  ] = useDisclosure(false);
  const [
    isReleaseUpsertModalOpen,
    { open: openReleaseUpsertModal, close: closeReleaseUpsertModal },
  ] = useDisclosure(false);
  const [releaseToEditID, setReleaseToEditID] = useState<number | null>(null);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  function upsertRelease(id: number) {
    setReleaseToEditID(id);
    openReleaseUpsertModal();
  }

  function clearReleaseUpsert() {
    closeReleaseUpsertModal();
    setReleaseToEditID(null);
  }

  return (
    <>
      <Group align="flex-end" gap="sm">
        <ActionIcon
          aria-label="Adicionar lançamento"
          onClick={openReleaseUpsertModal}
          variant="filled"
          color="teal"
          size="input-sm"
        >
          <PlusIcon size={16} />
        </ActionIcon>

        {selectedRows.length > 0 && (
          <ActionIcon
            aria-label="Deletar lançamento(s)"
            variant="outline"
            color="red"
            onClick={openReleaseDeleteModal}
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

          <NativeSelect
            label="Tipo de lançamento"
            name="releaseTypeSearch"
            required
            data={[
              { label: "Qualquer um", value: "any" },
              { label: "Álbum", value: "album" },
              { label: "EP", value: "ep" },
              { label: "Single", value: "single" },
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
            <Table.Th>Tamanho</Table.Th>
            <Table.Th>Tipo</Table.Th>
            <Table.Th>Lançado em</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {releases.map(({ id, title, artist, length, releaseType, releasedAt }) => (
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
                    onClick={() => upsertRelease(id)}
                    size="sm"
                    variant="filled"
                    color="gray"
                    aria-label="Editar lançamento"
                  >
                    <SquarePen />
                  </ActionIcon>
                </Group>
              </Table.Td>
              <Table.Td>{title}</Table.Td>
              <Table.Td>{artist}</Table.Td>
              <Table.Td>{length}</Table.Td>
              <Table.Td>{LOCALIZED_RELEASE_TYPE_NAMES[releaseType]}</Table.Td>
              <Table.Td>{releasedAt}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Modal
        opened={isReleaseUpsertModalOpen}
        centered
        onClose={clearReleaseUpsert}
        title={releaseToEditID ? "Editar lançamento" : "Adicionar lançamento"}
      >
        <Stack component="form" onSubmit={clearReleaseUpsert}>
          <TextInput
            defaultValue={
              releaseToEditID ? releases.find(({ id }) => id == releaseToEditID)?.title : ""
            }
            label="Título"
            name="title"
            required
            minLength={2}
          />

          <NativeSelect
            defaultValue={
              releaseToEditID
                ? String(releases.find(({ id }) => id == releaseToEditID)?.artistId)
                : ""
            }
            label="Artista"
            name="artist"
            required
            data={[
              { label: "Bring Me The Horizon", value: "1" },
              { label: "NCT 127", value: "2" },
              { label: "Asking Alexandria", value: "3" },
            ]}
          />

          <NativeSelect
            defaultValue={
              releaseToEditID ? releases.find(({ id }) => id == releaseToEditID)?.releaseType : ""
            }
            label="Tipo"
            name="type"
            required
            data={[
              { label: "Álbum", value: "album" },
              { label: "EP", value: "ep" },
              { label: "Single", value: "single" },
            ]}
          />

          <NumberInput
            defaultValue={
              releaseToEditID ? releases.find(({ id }) => id == releaseToEditID)?.length : 1
            }
            label="Tamanho"
            name="length"
            required
            min={1}
            max={99}
          />

          <DateInput label="Data de lançamento" placeholder="08/01/2025" name="releaseDate" />

          <Group align="center" justify="space-between">
            <Button
              w="48%"
              type="button"
              onClick={closeReleaseUpsertModal}
              variant="outline"
              color="red"
            >
              Cancelar
            </Button>

            <Button w="48%" type="submit" variant="filled" color="teal">
              {releaseToEditID ? "Editar" : "Adicionar"}
            </Button>
          </Group>
        </Stack>
      </Modal>

      <ResourceDeleteModal
        opened={isReleaseDeleteModalOpen}
        onClose={closeReleaseDeleteModal}
        onConfirm={closeReleaseDeleteModal}
        title={`Deletar ${selectedRows.length} lançamento${selectedRows.length > 1 ? "s" : ""}?`}
        description="Ao deletar um lançamento, todos as músicas associados a ele também serão deletadas. A ação não pode ser revertida."
      />
    </>
  );
}
