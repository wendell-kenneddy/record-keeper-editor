"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";

interface ResourceDeleteModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function ResourceDeleteModal({
  opened,
  onConfirm,
  onClose,
  title,
  description,
}: ResourceDeleteModalProps) {
  return (
    <Modal centered opened={opened} onClose={onClose} title={title}>
      <Stack align="flex-start">
        <Text size="sm">{description}</Text>

        <Group w="100%" align="center" justify="space-between">
          <Button w="48%" variant="filled" color="teal" onClick={onClose}>
            Cancelar
          </Button>

          <Button w="48%" variant="outline" color="red" onClick={onConfirm}>
            Confirmar
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
