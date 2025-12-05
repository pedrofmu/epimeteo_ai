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
        <section className={styles.hero}>
          <div>
            <p className={styles.kicker}>De conversación a biografía</p>
            <h1>Convierte una charla grabada en capítulos claros y en una línea de vida.</h1>
            <p className={styles.lead}>
              Epimeteo escucha el audio, reconoce voces y estructura la narrativa para que
              las memorias familiares no se pierdan. Todo con un enfoque local-first pensado
              para privacidad y simplicidad.
            </p>
          </div>

          <div className={styles.actions}>
            <a className={styles.primary} href="#flujo">
              Ver flujo de trabajo
            </a>
            <a className={styles.secondary} href="#detalles">
              Qué incluye
            </a>
          </div>
        </section>

        <section className={styles.showcase} id="flujo">
          <article className={styles.card}>
            <p className={styles.cardLabel}>1. Escucha</p>
            <h3>Transcribe y separa hablantes</h3>
            <p>
              Whisper procesa el audio y detecta quién habla en cada momento para que el
              relato sea más legible que una simple transcripción.
            </p>
          </article>
          <article className={styles.card}>
            <p className={styles.cardLabel}>2. Ordena</p>
            <h3>Detecta temas y contexto temporal</h3>
            <p>
              El contenido se agrupa por temas, personajes y tiempos, identificando al
              entrevistado y los eventos clave que marcan su historia.
            </p>
          </article>
          <article className={styles.card}>
            <p className={styles.cardLabel}>3. Narra</p>
            <h3>Genera capítulos y resúmenes</h3>
            <p>
              Con Llama se redactan capítulos y una línea de vida que puede exportarse a
              formatos como PDF de tipo libro.
            </p>
          </article>
        </section>

        <section className={styles.panels} id="detalles">
          <div className={styles.panel}>
            <h3>Diseñado para conservar memorias</h3>
            <p>
              Epimeteo reduce la fricción de grabar historias familiares: basta con una
              conversación informal para capturar la voz, los momentos y el hilo narrativo
              de una vida.
            </p>
            <ul className={styles.list}>
              <li>Procesa podcasts, grabaciones móviles o charlas improvisadas.</li>
              <li>Construye una línea de vida cronológica con eventos clave.</li>
              <li>Genera resúmenes estructurados listos para publicar.</li>
            </ul>
          </div>

          <div className={`${styles.panel} ${styles.panelAccent}`}>
            <h3>Local y privado por diseño</h3>
            <p>
              El objetivo es mantener el flujo de trabajo en el dispositivo del usuario
              (Whisper + Llama), ideal para familias que buscan preservar recuerdos sin
              depender de la nube.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Whisper STT</span>
              <span className={styles.tag}>Llama local</span>
              <span className={styles.tag}>Next.js + TypeScript</span>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            Epimeteo AI está en evolución: el objetivo final es un flujo simple que transforme
            grabaciones en biografías preservables y compartibles.
          </p>
        </footer>
      </main>
    </div>
  );
}
