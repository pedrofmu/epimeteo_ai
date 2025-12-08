import { Theme } from "@/types/theme";

export interface ConversationToThemesRequest {
  audio: File;
}

export interface ThemeCharacterPayload {
  id: number;
  name: string;
}

export interface UploadedFileMeta {
  name: string;
  type: string;
  size: number;
}

export interface ConversationToThemesResponse {
  themes: Theme[];
  receivedFile: UploadedFileMeta;
}
