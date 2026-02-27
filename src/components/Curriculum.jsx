import DownloadButton from "./DownloadButton";
function Curriculum() {

    return (
    
      <div>
    <main class="curriculum">
  
  <header class="cv-header">
    <h1 class="cv-name">Otávio de Siqueira Ximenes</h1>
    <p className="cv-location">Brasília – DF</p>

    <div class="cv-contacts">
      <span class="cv-phone">📞 (61) 99110-9414</span>
      <span class="cv-email">✉️ ximenes.otavio@gmail.com</span>
      <span class="cv-github">
        🔗 GitHub:
        <a href="https://github.com/sxOtavio" target="_blank">
          github.com/sxOtavio
        </a>
      </span>
    </div>
  </header>


  <section class="cv-section">
    <h2 class="cv-title">Perfil Profissional</h2>
    <p class="cv-text">
      Desenvolvedor em formação, com foco em Back-end Java, experiência no
      desenvolvimento de aplicações utilizando Java, Spring Boot e MySQL,
      além de conhecimentos em tecnologias web (HTML, CSS, JavaScript e
      Bootstrap). Busco oportunidade como Desenvolvedor Júnior ou Estagiário
      em TI para aplicar e aprimorar meus conhecimentos em projetos reais.
    </p>
  </section>


  <section class="cv-section">
    <h2 class="cv-title">Conhecimentos Técnicos</h2>

    <ul class="cv-list">
      <li><strong>Back-end:</strong> Java</li>
      <li><strong>Banco de Dados:</strong> MySQL (modelagem, SQL, CRUD)</li>
      <li><strong>Front-end:</strong> HTML5, CSS3, JavaScript</li>
      <li><strong>Frameworks & UI:</strong> Bootstrap</li>
      <li><strong>Outros:</strong> Lógica de programação, versionamento de código, boas práticas</li>
    </ul>
  </section>


  <section class="cv-section">
    <h2 class="cv-title">Formação Acadêmica</h2>

    <div class="cv-item">
      <h3>Graduação em Análise e Desenvolvimento de Sistemas</h3>
      <p>Universidade Católica de Brasília – EAD</p>
      <span class="cv-period">Em andamento</span>
    </div>

    <div class="cv-item">
      <h3>Técnico em Eletromecânica</h3>
      <p>Instituto Federal de Brasília (IFB)</p>
      <span class="cv-period">2015 – 2017</span>
    </div>
  </section>

  
  <section class="cv-section">
    <h2 class="cv-title">Experiência Profissional</h2>

    <div class="cv-item">
      <h3>Atendimento / Estoque / Vendas</h3>
      <ul class="cv-list">
        <li>Controle e organização de estoque</li>
        <li>Atendimento ao cliente</li>
        <li>Apoio em vendas e logística de mercadorias</li>
      </ul>
    </div>

    <div class="cv-item">
      <h3>Auxiliar Administrativo <span class="cv-current">(Atual)</span></h3>
      <ul class="cv-list">
        <li>Organização e controle de documentos e informações</li>
        <li>Apoio em rotinas administrativas e operacionais</li>
        <li>Lançamento e conferência de dados em sistemas e planilhas</li>
        <li>Controle de estoque e apoio a processos internos</li>
      </ul>
    </div>
  </section>

  
  <section class="cv-section">
    <h2 class="cv-title">Idiomas</h2>
    <ul class="cv-list">
      <li>Inglês: leitura, escrita e conversação intermediárias</li>
      <li>Espanhol: conhecimentos básicos</li>
    </ul>
  </section>


  <section class="cv-section">
    <h2 class="cv-title">Atividades Complementares</h2>
    <ul class="cv-list">
      <li>Participação em eventos acadêmicos e tecnológicos pelo IFB e UCB</li>
      <li>Conhecimentos em C++, AutoCAD e CATIA</li>
    </ul>
  </section>

</main>
       </div>
  )
}

export default Curriculum;
