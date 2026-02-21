import { STTProvider } from './sttProvider';

/*
 * This function converts an audio file to text using Mistral STT
 * Calls /v1/audio/transcriptions
 */
export const mistralSTTProvider: STTProvider = {
    async transcribe(file: File): Promise<string> {
        // Your actual Mistral API implementation here
        return "";
    }
};
