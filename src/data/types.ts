export const LOCALIZED_RELEASE_TYPE_NAMES = {
  single: "Single",
  album: "Álbum",
  ep: "EP",
};

export type ReleaseType = "single" | "album" | "ep";

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export interface Artist {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Release {
  id: number;
  title: string;
  artist: string;
  artistId: number;
  length: number;
  releaseType: ReleaseType;
  releasedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  release: string;
  createdAt: string;
  updatedAt: string;
}
