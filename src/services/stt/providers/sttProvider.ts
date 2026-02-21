export default interface STTProvider {
    transcribe(file: File): Promise<string>;
}