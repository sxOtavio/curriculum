function Curriculum() {
  return (
    <section className="curriculum" id="curriculo">
      {/* ================= HEADER ================= */}
      <header className="cv-header">
        <h1 className="cv-name">OTÁVIO DE SIQUEIRA XIMENES</h1>
        <p className="cv-location">Desenvolvedor Júnior | Brasília - DF</p>
        <div className="cv-contacts">
          <span>(61) 99110-9414</span>
          <a href="mailto:ximenes.otavio@gmail.com">ximenes.otavio@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/otávio-ximenes-669483232"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sxOtavio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://digitalcurriculum-one.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Currículo
          </a>
        </div>
      </header>

      {/* ================= RESUMO ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Resumo Profissional</h2>
        <p className="cv-text">
          Graduando em Análise e Desenvolvimento de Sistemas (conclusão
          jul/2026) com conhecimento em{" "}
          <strong>Java, Spring Boot e MySQL</strong> adquirido em projetos
          acadêmicos e pessoais. Experiência prática com{" "}
          <strong>WordPress</strong> para site comercial e trajetória
          diversificada (administrativo, atendimento) que desenvolveu{" "}
          <strong>comunicação, organização e resolução de problemas</strong>.{" "}
          Inglês e espanhol avançados. Busco oportunidade como Desenvolvedor
          Júnior ou Estagiário.
        </p>
      </section>

      {/* ================= FORMAÇÃO ACADÊMICA ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Formação Acadêmica</h2>

        <div className="cv-item">
          <h3>Análise e Desenvolvimento de Sistemas (4º semestre)</h3>
          <p>Universidade Católica de Brasília</p>
          <p className="cv-period">Previsão de conclusão: julho/2026</p>
        </div>

        <div className="cv-item">
          <h3>Técnico em Eletromecânica</h3>
          <p>Instituto Federal de Brasília (IFB)</p>
          <p className="cv-period">Concluído em 2017</p>
        </div>
      </section>

      {/* ================= EXPERIÊNCIA PROFISSIONAL ================= */}
      <section className="cv-section">
        <h2 className="cv-title">Experiência Profissional</h2>

        <div className="cv-item">
          <h3>Auxiliar Administrativo</h3>
          <p>
            Isaias Silva Prestação de Serviços Ltda. (alocado no Mercado
            Preferido Ltda.)
          </p>
          <p className="cv-period">Out/2025 – atual</p>
          <ul className="cv-list">
            <li>Gerenciamento de sistema contábil e controle de estoque</li>
            <li>
              Atendimento ao cliente e suporte a processos administrativos
            </li>
          </ul>
        </div>

        <div className="cv-item">
          <h3>Atendente</h3>
          <p>Vieira e Camargo Comércio de Açaí e Sorvetes Ltda.</p>
          <p className="cv-period">Jun/2023 – Dez/2023</p>
          <ul className="cv-list">
            <li>Produção e controle de qualidade de alimentos</li>
            <li>Gestão de estoque e atendimento ao cliente</li>
          </ul>
        </div>

        <div className="cv-item">
          <h3>Auxiliar de Estoque</h3>
          <p>Livraria Soletra Ltda.</p>
          <p className="cv-period">Abr/2023 – Mai/2023</p>
          <ul className="cv-list">
            <li>Organização de estantes e reposição de estoque</li>
            <li>Suporte ao atendimento e satisfação do cliente</li>
          </ul>
        </div>
      </section>

      {/* ================= HABILIDADES TÉCNICAS ================= */}
      <section className="cv-section">
        <h2 className="cv-title"> Habilidades Técnicas</h2>
        <ul className="cv-list">
          <li>
            <strong>Back-end:</strong> Java, Spring Boot (estudos), lógica de
            programação, noções de APIs REST
          </li>
          <li>
            <strong>Front-end:</strong> HTML5, CSS3, JavaScript, Node.js, React.js, Bootstrap,
            WordPress (projetos pessoais e profissionais)
          </li>
          <li>
            <strong>Banco de Dados:</strong> MySQL (modelagem, consultas SQL,
            CRUD - projetos acadêmicos) e PostgreSQL (projeto pessoal)
          </li>
          <li>
            <strong>Ferramentas:</strong> Git, GitHub, VS Code
          </li>
          <li>
            <strong>Metodologias:</strong> Noções de Scrum e CI/CD 
          </li>
          <li>
            <strong>Redes:</strong> Noções de protocolos, dispositivos e
            segurança
          </li>
        </ul>
      </section>

      {/* ================= IDIOMAS ================= */}
      <section className="cv-section">
        <h2 className="cv-title"> Idiomas</h2>
        <ul className="cv-list">
          <li>
            <strong>Inglês:</strong> Avançado (leitura, escrita e conversação)
          </li>
          <li>
            <strong>Espanhol:</strong> Avançado
          </li>
        </ul>
      </section>

      {/* ================= PROJETOS ================= */}
      <section className="cv-section">
        <h2 className="cv-title"> Projetos</h2>

        <div className="cv-item">
          <h3>Site Institucional - WordPress</h3>
          <p>
            Desenvolvimento e manutenção de site para negócio local, com
            personalização de temas e ajustes de responsividade. (Profissional)
          </p>
        </div>

        <div className="cv-item">
          <h3>Aplicação CRUD com Java e MySQL</h3>
          <p>
            Sistema de gerenciamento desenvolvido durante estudos, aplicando
            Spring Boot, JPA e boas práticas. (Acadêmico)
          </p>
          <p>
            🔗{" "}
            <a
              href="https://github.com/sxOtavio"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sxOtavio
            </a>
          </p>
        </div>

        <div className="cv-item">
          <h3>Portfólio Pessoal</h3>
          <p>
            Site desenvolvido com HTML, CSS e JavaScript para apresentação de
            projetos e experimentos front-end.
          </p>
          <p>
            🔗{" "}
            <a
              href="https://digitalcurriculum-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              digitalcurriculum-one.vercel.app
            </a>
          </p>
        </div>
      </section>

      {/* ================= OUTRAS EXPERIÊNCIAS ================= */}
      <section className="cv-section">
        <h2 className="cv-title"> Outras Experiências</h2>
        <ul className="cv-list">
          <li>
            <strong>Motorista de aplicativo e motoboy</strong> — desenvolvimento
            de gestão de tempo, resolução de problemas sob pressão e comunicação
            eficaz.
          </li>
          <li>
            <strong>Curso de Engenharia (trancado)</strong> — Universidade de
            Brasília (UnB) com ênfase em Software, Eletrônica e Energia.
          </li>
        </ul>
      </section>

      {/* ================= CURSOS E CERTIFICAÇÕES ================= */}
      <section className="cv-section">
        <h2 className="cv-title">📜 Cursos e Certificações</h2>
        <div className="cv-item">
          <h3>Técnico em Eletromecânica</h3>
          <p>Instituto Federal de Brasília (IFB) — 2017</p>
        </div>
      </section>
    </section>
  );
}

export default Curriculum;
