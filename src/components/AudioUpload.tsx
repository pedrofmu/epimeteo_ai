"use client"

import { useState } from "react";
import {Theme} from "@/types/theme";

enum UploadStatus {
    IDLE = "idle",
    SUBIENDO = "subiendo",
    ERROR = "error"
}

export default function AudioUpload() {
    const [themes, setThemes] = useState<Theme[]>([]);
    const [status, setStatus] = useState<UploadStatus>(UploadStatus.IDLE);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setStatus(UploadStatus.IDLE);
        setErrorMsg("");
        setThemes([]);

        const formData = new FormData();
        formData.append("audio", file);

        try {
            const res = await fetch("/api/conversation-to-themes", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Error al subir el archivo");
            }

            const data = await res.json();
            setThemes(data.themes || []);
            setStatus(UploadStatus.IDLE);
        } catch (err: any) {
            setErrorMsg(err.message || "Error desconocido");
            setStatus(UploadStatus.ERROR);
        }
    };

    return (
        <div className="audio-upload">
            <label htmlFor="audio-upload-input">Subir archivo de audio:</label>
            <input
                id="audio-upload-input"
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
            />

            {status === "subiendo" && <p>Cargando...</p>}
            {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}

            <div
                className="themes-list"
                style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}
            >
                {themes.map((theme, idx) => (
                    <div
                        key={idx}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "0.5rem",
                            padding: "1rem",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h3>{theme.title}</h3>
                        {theme.time && <p><strong>Tiempo:</strong> {theme.time.toString()}</p>}
                        <div>
                            <strong>Personajes:</strong>
                            <ul>
                                {Object.entries(theme.characters).map(([num, char]) => (
                                    <li key={num}>
                                        {num}: {char}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p>{theme.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
