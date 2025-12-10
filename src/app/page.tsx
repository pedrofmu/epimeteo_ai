import AudioUpload from "@/components/AudioUpload";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.shell}>
            <header className={styles.header}>
                <div className={styles.brand}>
                    <span className={styles.brandMark}>Epimeteo</span>
                    <span className={styles.badge}>AI</span>
                </div>
                <p className={styles.subtitle}>Preservando historias familiares sin esfuerzo</p>
            </header>

            <main className={styles.main}>
                {/* Aquí agregamos el componente de subida de audio */}
                <h2>Subida de Audio</h2>
                <AudioUpload />
            </main>
        </div>
    );
}
