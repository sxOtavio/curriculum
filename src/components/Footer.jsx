function Footer() {
  return (
    <footer className="footer">
      <h3>© 2026 — Otávio de Siqueira Ximenes</h3>
      <h3>Suporte Técnico • Infraestrutura • Desenvolvimento Back-end</h3>
      <div>
        <a href="mailto:ximenes.otavio@gmail.com">
          📧 ximenes.otavio@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/otavio-ximenes-669483232"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/sxOtavio"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 GitHub
        </a>
        <span>📍 Brasília – DF</span>
      </div>
      <h3 className="footer-techs">
        Linux • Ubuntu Server • Docker • Nginx • Tailscale • Node.js • Next.js • PostgreSQL • MySQL • Troubleshooting
      </h3>
    </footer>
  );
}

export default Footer;
