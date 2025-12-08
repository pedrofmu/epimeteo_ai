# Guia: montar Jest + test co-localizado para `AudioUpload`

## Objetivo y por que
- Objetivo (vision): tener una base de pruebas que valide flujos de UI cerca del codigo que testean, empezando con `AudioUpload`.
- Por que: practicar configuracion de Jest en Next + TypeScript y demostrar que una prueba co-localizada protege el caso principal (subir audio y ver temas) de forma repetible.

Pasos en espanol y ordenados:

## 1) Instalar dependencias de testing

```bash
yarn add -D jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom identity-obj-proxy whatwg-fetch
```

## 2) Agregar script de test

En `package.json` suma:

```json
"scripts": {
  "test": "jest"
}
```

## 3) Configuracion de Jest (raiz del repo)

`jest.config.ts`

```ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  testMatch: ["**/*.test.{ts,tsx}"],
};

export default config;
```

`jest.setup.ts`

```ts
import "@testing-library/jest-dom";
import "whatwg-fetch";
```

## 4) Test co-localizado junto al componente

Archivo: `src/components/AudioUpload.test.tsx` (mismo folder que el componente).

```tsx
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
```

## 5) Ejecucion

```bash
yarn test
```

## Notas rapidas

- El componente debe ser `use client` para usar `useState` y `fetch`. El test usa `jsdom`.
- Co-located: el test vive al lado de `AudioUpload.tsx`; mantener ese patron para futuros componentes.
- Para que `getByLabelText(/subir audio/i)` funcione, usa una etiqueta accesible: `<label htmlFor="audio-input">Subir audio</label>` y `<input id="audio-input" ... />`.
