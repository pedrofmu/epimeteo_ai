import { mockSTTProvider } from './mockSTT';
import {mistralSTTProvider} from "@/services/stt/audioToText";
import STTProvider from "@/services/stt/providers/sttProvider";

export default function getSTTProvider(): STTProvider {
    const env = process.env.NODE_ENV;

    switch (env) {
        case 'test':
            return mockSTTProvider;
        case 'development':
        case 'production':
        default:
            return mistralSTTProvider;
    }
}