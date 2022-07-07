import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vagas Edulivre</title>
        <meta name="description" content="Vagas Edulivre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Venha fazer parte do nosso time!</h1>

        <div className={styles.grid}>
          <a
            href="https://drive.google.com/file/d/15kcnFa5S4g6b5Nf9O10xYBBPiKM8ZbXP/view?usp=sharing"
            className={styles.card}
          >
            <h2>Desenvolvedor Front-End - Vue - Pleno ou Sênior</h2>
            <p>Clique aqui e acesse o Edital</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1X8QWh0cgVdkIwfZ3Ia9GTKGh30Yr1-V7/view?usp=sharing"
            className={styles.card}
          >
            <h2>
              Desenvolvedor Back-End - NodeJS e TypeScript - Pleno ou Sênior
            </h2>
            <p>Clique aqui e acesse o Edital</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1l-3ZAmDXby15ROs5pN6EVx9d2YD6af2f/view?usp=sharing"
            className={styles.card}
          >
            <h2>Analista de testes - cypress - Jest - Pleno ou Sênior</h2>
            <p>Clique aqui e acesse o Edital</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1kUMKxwdDnKAfvC-hjZwMWGzbhfK6NDJM/view?usp=sharing"
            className={styles.card}
          >
            <h2>Designer UI/UX - Pleno ou Sênior</h2>
            <p>Clique aqui e acesse o Edital</p>
          </a>
        </div>
      </main>
    </div>
  );
}
