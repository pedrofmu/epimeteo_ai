# Guia: componente de subida de audio para "/"

## Objetivo y por que
- Objetivo: agregar un componente en la home que permita subir un archivo de audio y mostrar los temas devueltos por `/api/conversation-to-themes`.
- Por que: tu amigo practica subida de archivos, consumo de APIs con `FormData` y renderizado de datos, todo en castellano y en un contexto real del proyecto.

## Nota rapida sobre el backend mock

- El tipo `Theme` usa `characters: Record<number, string>` para que se serialice bien en JSON.
- El endpoint ya valida que el campo sea `audio` y responde con `themes` y metadata del archivo.

## Pasos a seguir 

1) Crear el componente en `src/components/AudioUpload.tsx`
- Marca el archivo con `"use client"`.
- Usa `useState` para: lista de `themes`, estado de carga (`idle|subiendo|error`) y mensaje de error.
- Coloca un `input type="file" accept="audio/*"` con `label` accesible (`htmlFor/id`).
- En `onChange`, toma el primer archivo, arma un `FormData` con campo `"audio"` y haz `fetch("/api/conversation-to-themes", { method: "POST", body: formData })`.
- Si responde OK, guarda `themes` del JSON; si falla, muestra mensaje de error.
- Renderiza: mensaje de carga, error si aplica, y tarjetas con cada tema (`title`, `time` opcional, `characters` usando `Object.entries`, `content`).

2) Importar en la home `src/app/page.tsx`
- `import AudioUpload from "@/components/AudioUpload";`
- Dentro de `<main className={styles.main}>` renderiza `<AudioUpload />`.

3) Estilos opcionales
- Si no quieres inline, crea `AudioUpload.module.css` y usa `className`.
- Mantén el layout simple (grid/stack) y bordes suaves para las tarjetas.

4) Pruebas rapidas manuales
- Subir un `.mp3/.wav` y confirmar que ves los temas y la metadata en la respuesta (Network tab).
- Probar sin archivo para verificar el mensaje de error del servidor.
- Revisar la consola del navegador que no haya errores.

## Resumen

El endpoint mock ya entrega `themes` y acepta `audio` por `multipart/form-data`. La tarea es crear un componente cliente que suba el archivo con `FormData`, maneje estados de carga/error y muestre los temas devueltos.
