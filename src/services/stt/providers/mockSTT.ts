import { STTProvider } from './sttProvider';

export const mockSTTProvider: STTProvider = {
    async transcribe(file: File): Promise<string> {
        return "Mock transcription for testing";
    }
};