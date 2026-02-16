export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <main className="page">
        {/* Sumerian cuneiform 7 */}
        <div className="seal" aria-hidden="true">
          &#x1240C;
        </div>

        <h1 className="brand">Box9</h1>

        <p className="tagline">The Physics Engine for Team Intelligence</p>

        <div className="coming-soon">Coming Soon</div>

        <footer className="footer">
          <div className="footer-text">
            Built by{" "}
            <a href="https://lakin.ai" target="_blank" rel="noopener noreferrer">
              lakin.ai
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
