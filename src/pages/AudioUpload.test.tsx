import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AudioUpload from "./AudioUpload";

describe("AudioUpload", () => {
    beforeEach(() => {
        // Mock de fetch para simular el endpoint
        global.fetch = jest.fn(async () =>
            new Response(
                JSON.stringify({
                    themes: [
                        { title: "Tema 1", characters: { 1: "Ana" }, content: "Contenido" },
                    ],
                }),
                { status: 200 }
            )
        ) as typeof fetch;
    });

    it("sube un audio y muestra los temas devueltos", async () => {
        render(<AudioUpload />);

        const input = screen.getByLabelText(/subir audio/i);
        const archivo = new File(["beep"], "voz.wav", { type: "audio/wav" });

        await userEvent.upload(input, archivo);

        await waitFor(() =>
            expect(screen.getByText("Tema 1")).toBeInTheDocument()
        );
        expect(fetch).toHaveBeenCalledWith(
            "/api/conversation-to-themes",
            expect.objectContaining({ method: "POST" })
        );
    });
});