export const LOCALIZED_RELEASE_TYPE_NAMES = {
  single: "Single",
  album: "Álbum",
  ep: "EP",
};

export type ReleaseType = "single" | "album" | "ep";

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
