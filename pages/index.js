import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="#">3D Hoodies</a>
        </h1>

        <p className={styles.description}>
          Get started by looking at <code>{/*pages/index.js*/}the options</code>
        </p>

        <div className={styles.grid}>
          <a href="/index3.html" className={styles.card}>
            <h3>Test Case &rarr;</h3>
            <p>This is a 3D place to move your character</p>
          </a>

          <a href="/index5.html" className={styles.card}>
            <h3>3D Character &rarr;</h3>
            <p>This is an area for you to update your character</p>
          </a>

          <a
            href="/editor/index.html"
            className={styles.card}
          >
            <h3>3D Playground &rarr;</h3>
            <p>Make 3D clothes</p>
          </a>

          <a
            href="/feedback.html"
            className={styles.card}
          >
            <h3>Feedback &rarr;</h3>
            <p>
             Form To Tell Me What you Are Looking For
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/media/nff_logo.jpg" alt="Never Fade Factory" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
