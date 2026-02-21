import getSTTProvider from "@/services/stt/providers";

/*
 * This function converts an audio file to text
 */
export default async function audioFileToText(file: File): Promise<string> {
    const provider = getSTTProvider();
    return provider.transcribe(file);
}