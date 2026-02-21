import { mockSTTProvider } from './providers/mockSTT';
import { mistralSTTProvider } from './providers/mistralSTT';
import * as fs from "node:fs";
import path from "node:path";

describe('audioFileToText', () => {
    it('should transcribe an audio file to text', async () => {
        const mockFile = new File(['audio content'], 'test.wav', { type: 'audio/wav' });

        const result = await mockSTTProvider.transcribe(mockFile);

        expect(result).toBe('Mock transcription for testing');
    });

    it('should return a string', async () => {
        const mockFile = new File([''], 'empty.wav', { type: 'audio/wav' });

        const result = await mockSTTProvider.transcribe(mockFile);

        expect(typeof result).toBe('string');
    });

    it('should transcribe a known audio file', async () => {
        const audioPath = path.resolve(__dirname, './test_audio.wav');
        const buffer = fs.readFileSync(audioPath);
        const file = new File([buffer], 'test_audio.wav', { type: 'audio/wav' });

        const result = await mistralSTTProvider.transcribe(file);

        expect(result).toBeTruthy();
        expect(typeof result).toBe('string');
        // Check for expected keywords rather than an exact match,
        // since LLM output can vary slightly between calls
        expect(result.toLowerCase()).toContain('youtube');
    }, 30_000);
});


