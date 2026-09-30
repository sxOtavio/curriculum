import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Curriculum() {
  const [searchParams, setSearchParams] = useSearchParams();
  const trackParam = searchParams.get("track");
  const [activeTrack, setActiveTrack] = useState(
    trackParam === "backend" ? "backend" : "infra"
  );

  const handleTrackChange = (track) => {
    setActiveTrack(track);
    setSearchParams({ track });
  };

  const isInfra = activeTrack === "infra";

  return (
    <section className="curriculum" id="curriculo">
      {/* ================= CONTROLE DE TRILHAS (SWITCHER) ================= */}
      <div className="cv-track-switcher-box">
        <span className="cv-track-label">Selecione o perfil desejado:</span>
        <div className="cv-track-buttons">
          <button
            className={`cv-track-btn ${isInfra ? "active" : ""}`}
            onClick={() => handleTrackChange("infra")}
          >
            <span className="cv-track-icon">🛡️</span>
            <span>Suporte Técnico & Infraestrutura</span>
          </button>
          <button
            className={`cv-track-btn ${!isInfra ? "active" : ""}`}
            onClick={() => handleTrackChange("backend")}
          >
            <span className="cv-track-icon">⚡</span>
            <span>Back-end & Infraestrutura Web</span>
          </button>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="cv-header">
        <h1 className="cv-name">OTÁVIO DE SIQUEIRA XIMENES</h1>
        <div className="cv-badge">
          {isInfra
            ? "Analista de Suporte Técnico / Infraestrutura Júnior"
            : "Desenvolvedor Back-end Júnior | Node.js & Infraestrutura Web"}
        </div>

        <div className="cv-contacts">
          <span className="cv-contact-item">
            <span className="cv-icon">📍</span> Brasília, DF
          </span>
          <a href="tel:61991109414" className="cv-contact-item">
            <span className="cv-icon">📱</span> (61) 99110-9414
          </a>
          <a href="mailto:ximenes.otavio@gmail.com" className="cv-contact-item">
            <span className="cv-icon">✉️</span> ximenes.otavio@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/otavio-ximenes-669483232"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-contact-item"
          >
            <span className="cv-icon">💼</span> LinkedIn
          </a>
          <a
            href="https://github.com/sxOtavio"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-contact-item"
          >
            <span className="cv-icon">🐙</span> GitHub
          </a>
        </div>

        {/* Botão de Download Contextual */}
        <div className="cv-download-actions">
          <a
            href={
              isInfra
                ? "/curriculo-suporte-infra.pdf"
                : "/curriculo-backend-dev.pdf"
            }
            download={
              isInfra
                ? "Curriculo_Otavio_Ximenes_Suporte_Infra.pdf"
                : "Curriculo_Otavio_Ximenes_Backend_Infra.pdf"
            }
            className="download-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>
              {isInfra
                ? "Baixar PDF (Suporte & Infra)"
                : "Baixar PDF (Back-end & Infra Web)"}
            </span>
          </a>

          <a
            href={
              isInfra
                ? "/curriculo-backend-dev.pdf"
                : "/curriculo-suporte-infra.pdf"
            }
            download={
              isInfra
                ? "Curriculo_Otavio_Ximenes_Backend_Infra.pdf"
                : "Curriculo_Otavio_Ximenes_Suporte_Infra.pdf"
            }
            className="download-btn-secondary"
            title="Baixar a outra versão em PDF"
          >
            <span>
              {isInfra
                ? "Ou baixar versão Back-end (PDF)"
                : "Ou baixar versão Suporte & Infra (PDF)"}
            </span>
          </a>
        </div>
      </header>

      {/* ================= RESUMO PROFISSIONAL ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Resumo Profissional</h2>
        <div className="cv-card cv-highlight-card">
          <p className="cv-text">
            {isInfra ? (
              <>
                Profissional de tecnologia com sólida base em infraestrutura,
                redes e resolução de incidentes. Combino formação técnica em{" "}
                <strong>Eletromecânica (lógica de falhas)</strong> com
                experiência prática na administração de{" "}
                <strong>
                  servidores Linux, redes virtuais e ambientes conteinerizados
                </strong>
                . Forte histórico em operações de atendimento ao cliente,
                destacando-me pela capacidade de gerenciar crises sob pressão,
                diagnosticar problemas complexos de hardware/software e garantir
                a resolução eficiente de chamados <strong>(SLA/FCR)</strong>.
              </>
            ) : (
              <>
                Desenvolvedor <strong>Node.js / Next.js</strong> com experiência
                em <strong>infraestrutura web e arquitetura distribuída</strong>
                . Possuo vivência real configurando{" "}
                <strong>
                  servidores Linux (Homelab), proxy reverso (Nginx) e
                  conteinerização (Docker)
                </strong>
                . Trago forte raciocínio analítico de operações, traduzindo
                gargalos logísticos em software e gerando economia financeira
                comprovada baseada em dados.
              </>
            )}
          </p>
        </div>
      </section>

      {/* ================= HABILIDADES TÉCNICAS ================= */}
      <section className="cv-section">
        <h2 className="cv-title">
          {isInfra
            ? "Habilidades Técnicas e de Infraestrutura"
            : "Habilidades Técnicas"}
        </h2>

        {isInfra ? (
          <div className="cv-skills-grid">
            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">🌐</span>
                <h3>Sistemas e Redes</h3>
              </div>
              <p className="cv-skill-desc">
                Linux (Ubuntu Server), Windows, Tailscale (VPN/Túneis), Nginx
                (Proxy Reverso).
              </p>
              <div className="cv-tags">
                <span className="cv-tag">Linux Ubuntu</span>
                <span className="cv-tag">Windows</span>
                <span className="cv-tag">Tailscale VPN</span>
                <span className="cv-tag">Nginx Reverse Proxy</span>
              </div>
            </div>

            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">🔧</span>
                <h3>Hardware e Troubleshooting</h3>
              </div>
              <p className="cv-skill-desc">
                Montagem/manutenção de computadores, análise de falhas, lógica
                de CLP.
              </p>
              <div className="cv-tags">
                <span className="cv-tag">Montagem & Manutenção</span>
                <span className="cv-tag">Análise de Falhas</span>
                <span className="cv-tag">Lógica de CLP</span>
              </div>
            </div>

            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">📦</span>
                <h3>DevOps e Ferramentas</h3>
              </div>
              <p className="cv-skill-desc">
                Docker (Conteinerização), Git, VS Code.
              </p>
              <div className="cv-tags">
                <span className="cv-tag">Docker</span>
                <span className="cv-tag">Git</span>
                <span className="cv-tag">VS Code</span>
              </div>
            </div>

            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">🗄️</span>
                <h3>Bancos de Dados</h3>
              </div>
              <p className="cv-skill-desc">
                PostgreSQL, MySQL (Consultas SQL para diagnóstico de erros).
              </p>
              <div className="cv-tags">
                <span className="cv-tag">PostgreSQL</span>
                <span className="cv-tag">MySQL</span>
                <span className="cv-tag">Consultas SQL</span>
                <span className="cv-tag">Diagnóstico de Erros</span>
              </div>
            </div>

            <div className="cv-skill-card cv-skill-card-wide">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">🎯</span>
                <h3>Atendimento e Processos</h3>
              </div>
              <p className="cv-skill-desc">
                Resolução de incidentes (Troubleshooting), FCR (First Contact
                Resolution), Metodologias Ágeis (Kanban).
              </p>
              <div className="cv-tags">
                <span className="cv-tag">Troubleshooting</span>
                <span className="cv-tag">FCR</span>
                <span className="cv-tag">SLA</span>
                <span className="cv-tag">Kanban</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="cv-skills-grid">
            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">⚙️</span>
                <h3>Back-end & Infraestrutura</h3>
              </div>
              <p className="cv-skill-desc">
                Node.js, REST APIs, Docker, Nginx, Linux (Ubuntu), Tailscale,
                Git, PostgreSQL.
              </p>
              <div className="cv-tags">
                <span className="cv-tag">Node.js</span>
                <span className="cv-tag">REST APIs</span>
                <span className="cv-tag">Docker</span>
                <span className="cv-tag">Nginx</span>
                <span className="cv-tag">Linux Ubuntu</span>
                <span className="cv-tag">Tailscale</span>
                <span className="cv-tag">PostgreSQL</span>
                <span className="cv-tag">Git</span>
              </div>
            </div>

            <div className="cv-skill-card">
              <div className="cv-skill-header">
                <span className="cv-skill-icon">💻</span>
                <h3>Front-end & Idiomas</h3>
              </div>
              <p className="cv-skill-desc">
                React.js, Next.js, JavaScript, Tailwind CSS | Inglês
                (Intermediário - B1).
              </p>
              <div className="cv-tags">
                <span className="cv-tag">React.js</span>
                <span className="cv-tag">Next.js</span>
                <span className="cv-tag">JavaScript</span>
                <span className="cv-tag">Tailwind CSS</span>
                <span className="cv-tag">Inglês B1</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ================= EXPERIÊNCIAS / PROJETOS DE ENGENHARIA ================= */}
      <section className="cv-section">
        <h2 className="cv-title">
          {isInfra
            ? "Experiência em Infraestrutura e Suporte Técnico"
            : "Projetos de Engenharia e Infraestrutura"}
        </h2>

        {isInfra ? (
          <div className="cv-timeline">
            {/* Experiência 1 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    Administrador de Infraestrutura Web (Homelab) / Projetos
                    Práticos
                  </h3>
                  <span className="cv-company">
                    Ambiente Prático Pessoal & Servidores
                  </span>
                </div>
                <span className="cv-period-badge">Março/2026 – Presente</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Planejei e configurei um servidor doméstico de alta
                  disponibilidade utilizando hardware de baixo consumo, rodando{" "}
                  <strong>Ubuntu Server</strong>.
                </li>
                <li>
                  Atuo no monitoramento e manutenção contínua da rede,
                  gerenciando tráfego via proxy reverso (<strong>Nginx</strong>)
                  e isolamento de aplicações via <strong>Docker</strong>.
                </li>
                <li>
                  Conduzo rotinas de troubleshooting de conectividade (CORS,
                  latência, túneis criptografados), garantindo o uptime dos
                  serviços hospedados.
                </li>
              </ul>
            </div>

            {/* Experiência 2 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    Gestão de Estoque, Logística e Atendimento
                  </h3>
                  <span className="cv-company">
                    Livraria Soletra & Rei do Açaí
                  </span>
                </div>
                <span className="cv-period-badge">Mar 2020 – Dez 2023</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Responsável pela manutenção preventiva e corretiva dos
                  computadores e sistemas de PDV da loja física, minimizando o
                  tempo de inatividade da operação.
                </li>
                <li>
                  Realizei auditoria e saneamento de banco de dados do sistema de
                  estoque, corrigindo cadastros e eliminando anomalias no
                  inventário de mais de 200 itens.
                </li>
              </ul>
            </div>

            {/* Experiência 3 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">Operações de Dados e Auditoria</h3>
                  <span className="cv-company">Mercado Preferido</span>
                </div>
                <span className="cv-period-badge">Out 2025 – Presente</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Auditoria rigorosa de mais de 300 operações sistêmicas mensais,
                  implementando novos processos de conferência que reduziram
                  erros em 20%.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="cv-timeline">
            {/* Projeto 1 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    Desenvolvedor Web (Projeto Institucional)
                  </h3>
                  <span className="cv-company">
                    <a
                      href="https://ita-estrutural-bsb.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-inline-link"
                    >
                      ita-estrutural-bsb.com.br 🔗
                    </a>{" "}
                    (Fase de Homologação/Beta)
                  </span>
                </div>
                <span className="cv-period-badge">Institucional / Produção</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Desenvolvimento de ponta a ponta da plataforma web do{" "}
                  <strong>Instituto Tempo de Alegria, Projeto Purim</strong>,
                  traduzindo requisitos do cliente em software funcional.
                </li>
                <li>
                  Construção do front-end com <strong>Tailwind CSS</strong> e
                  integração de back-end as a service (<strong>Supabase</strong>)
                  para gestão de dados e autonomia do cliente.
                </li>
              </ul>
            </div>

            {/* Projeto 2 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    Administrador de Infraestrutura / Homelab Contínuo
                  </h3>
                  <span className="cv-company">
                    Ambiente Autônomo & Serviços Distribuídos
                  </span>
                </div>
                <span className="cv-period-badge">Março/2026 – Presente</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Projetei e mantenho servidor de produção (
                  <strong>Ubuntu Server</strong>) focado em alta disponibilidade.
                </li>
                <li>
                  Orquestro serviços via <strong>Docker (PostgreSQL)</strong> e
                  gerencio roteamento criptografado via <strong>Tailscale</strong>{" "}
                  e proxy reverso (<strong>Nginx</strong>) para mitigar falhas de
                  CORS e latência da rede.
                </li>
              </ul>
            </div>

            {/* Projeto 3 */}
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    MMP - E-commerce (Arquitetura Distribuída)
                  </h3>
                  <span className="cv-company">
                    <a
                      href="https://mmp-navy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-inline-link"
                    >
                      mmp-navy.vercel.app 🔗
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/sxOtavio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-inline-link"
                    >
                      GitHub 🐙
                    </a>
                  </span>
                </div>
                <span className="cv-period-badge">Full Stack & Escala</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Desenvolvi plataforma full stack (<strong>Next.js / Node.js</strong>)
                  suportando <strong>4.157 produtos simultâneos</strong>.
                </li>
                <li>
                  Separei front-end (<strong>Vercel</strong>) e API de imagens (
                  <strong>Homelab</strong>) para garantir resiliência sistêmica e
                  performance.
                </li>
                <li>
                  Integrei API do <strong>PagBank</strong>, suportando testes de
                  carga de <strong>20+ transações/minuto</strong> com estabilidade.
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* ================= HISTÓRICO EM OPERAÇÕES (TECNOLOGIA APLICADA) - BACKEND ================= */}
      {!isInfra && (
        <section className="cv-section">
          <h2 className="cv-title">
            Histórico em Operações (Tecnologia Aplicada)
          </h2>
          <div className="cv-timeline">
            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">Auxiliar Administrativo</h3>
                  <span className="cv-company">Mercado Preferido</span>
                </div>
                <span className="cv-period-badge">Out 2025 – Presente</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Desenvolvi do zero uma <strong>Prova de Conceito (PoC)</strong> de
                  catálogo online para modernizar vendas físicas.
                </li>
                <li>
                  Implementei método de auditoria de dados, reduzindo taxa de erro em{" "}
                  <strong>20% em 300+ operações/mês</strong>.
                </li>
              </ul>
            </div>

            <div className="cv-card cv-exp-card">
              <div className="cv-card-header">
                <div>
                  <h3 className="cv-role">
                    Gestão de Estoque e Atendimento
                  </h3>
                  <span className="cv-company">
                    Livraria Soletra & Rei do Açaí
                  </span>
                </div>
                <span className="cv-period-badge">Mar 2020 – Dez 2023</span>
              </div>
              <ul className="cv-bullets">
                <li>
                  Otimizei rotas de entrega via estruturação de dados, gerando{" "}
                  <strong>economia comprovada de R$ 6.240/ano</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ================= FORMAÇÃO ACADÊMICA ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Formação Acadêmica</h2>

        <div className="cv-edu-grid">
          <div className="cv-card cv-edu-card">
            <div className="cv-card-header">
              <h3 className="cv-role">Análise e Desenvolvimento de Sistemas</h3>
              <span className="cv-period-badge">Previsão: Dez/2026</span>
            </div>
            <p className="cv-institution">
              Universidade Católica de Brasília (UCB)
            </p>
          </div>

          <div className="cv-card cv-edu-card">
            <div className="cv-card-header">
              <h3 className="cv-role">Técnico em Eletromecânica</h3>
              <span className="cv-period-badge">
                {isInfra ? "Concluído em 2018" : "Concluído"}
              </span>
            </div>
            <p className="cv-institution">Instituto Federal de Brasília (IFB)</p>
            <p className="cv-edu-emphasis">
              {isInfra
                ? "(Formação técnica com ênfase em resolução de problemas complexos, análise de falhas e manutenção preditiva)"
                : "(Concluído - Lógica CLP e Resolução de Falhas)"}
            </p>
          </div>
        </div>
      </section>

      {/* ================= IDIOMAS ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Idiomas</h2>
        <div className="cv-languages-grid">
          <div className="cv-card cv-lang-card">
            <span className="cv-lang-name">Inglês</span>
            <span className="cv-lang-level">
              {isInfra
                ? "Avançado (leitura, escrita e conversação)"
                : "Intermediário - B1"}
            </span>
          </div>
          {isInfra && (
            <div className="cv-card cv-lang-card">
              <span className="cv-lang-name">Espanhol</span>
              <span className="cv-lang-level">Avançado</span>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Curriculum;
