import imagemCalculadora from "../img/calculadora.png";
import imagemTodolist from "../img/to-do-list.png";
import imagemEqualize from "../img/equalize.png";
import imagemMMP from "../img/MMP.png"
import imagemITA from "../img/ITA.png"
import imagemLojaCelulares from "../img/siteCelulares2.png";
import imagemSiteCelulares1 from "../img/siteCelulares1.png";
import imagemProjectA1E5 from "../img/javaProjetctA1E5.png";
import imagemKanBunny from "../img/kanbunny.png";

function Projects() {
  return (
    <>
    <h1>Projetos com foco de PoC, MVP ou Implementado</h1>
      <div className="projectsContainer">
        {/* MMP - E-commerce */}
        <div
          className="projects"
          onClick={() => {
            window.open("https://mmp-navy.vercel.app/", "_blank");
          }}
        >
          <div>
            <h3>MMP - E-commerce (Arquitetura Distribuída)</h3>
          </div>
          <div>
            <img
              src={imagemMMP}
              alt="MMP E-commerce arquitetura distribuída"
            />
          </div>
          <div>
            <h4>
              Plataforma full stack (Next.js/Node.js) suportando 4.157 produtos simultâneos.
              Separação de front-end (Vercel) e API de imagens (Homelab) para garantir resiliência
              sistêmica. Integração com a API do PagBank, suportando testes de carga de 20+
              transações/minuto com estabilidade.
            </h4>
          </div>
        </div>

        {/* Instituto Tempo de Alegria */}
        <div
          className="projects"
          onClick={() => {
            window.open("https://ita-estrutural-bsb.com.br", "_blank");
          }}
        >
          <div>
            <h3>Instituto Tempo de Alegria — Projeto Purim (Next.js)</h3>
          </div>
          <div>
            <img
              src={imagemITA}
              alt="Plataforma Web Instituto Tempo de Alegria"
            />
          </div>
          <div>
            <h4>
              Desenvolvimento de ponta a ponta da plataforma web do Instituto Tempo de Alegria (Projeto Purim),
              traduzindo requisitos reais em software funcional. Front-end construído com Tailwind CSS
              e integração com Back-end as a Service (Supabase) para autonomia na gestão de dados.
            </h4>
          </div>
        </div>

      

        
        <div
          className="projects"
          onClick={() => {
            window.location.href =
              "https://projetocadastrocompras.onrender.com/";
          }}
        >
          <div>
            <h3>Projeto Loja de celulares (Node.js)</h3>
          </div>
          <div>
            <img src={imagemLojaCelulares} alt="" />
          </div>
          <div>
            <h4>
              Site dinâmico que apresenta uma lista de produtos com imagens.
              Inclui painel administrativo protegido por senha (criptografada)
              para cadastro e exclusão de itens. Desenvolvido com Node.js,
              Express, PostgreSQL e EJS, com upload de imagens e deploy na nuvem
              (Render). Solução completa para gerenciamento simples de portfólio
              de produtos.
            </h4>
          </div>
        </div>
                <div
          className="projects"
          onClick={() => {
            window.location.href =
              "https://releitura-trello-react.vercel.app/";
          }}
        >
          <div>
            <h3>kanBunny "Kanban Board" (React.js)</h3>
          </div>
          <div>
            <img src={imagemKanBunny} alt="" srcset="" />
          </div>
          <div>
            <h4>
              Desenvolvi uma aplicação de gerenciamento de tarefas kanban, criado com o objetivo de praticar organização de tarefas, gerenciamento de estado e visualização de produtividade através de gráficos.
              A ideia foi construir algo inspirado em ferramentas reais de gestão, permitindo mover tarefas entre colunas, acompanhar métricas e visualizar o fluxo de trabalho de forma simples e interativa
              furamente o projeto será evoluído para utilizar uma API RESTful com backend em Python mas hoje roda com api em node.js.


            </h4>
          </div>
        </div>
      </div>

{/*------------------------- Tratando projetos de foco academico ------------------------------*/ }


        <h1>Projetos com foco de estudo</h1>
        
        <div className="projectsContainer">

            {/* Projeto Calculadora */}
        <div
          className="projects"
          onClick={() => {
            window.open("https://calculadora-rosy-three.vercel.app/", "_blank");
          }}
        >
          <div>
            <h3>Projeto Calculadora (React.js)</h3>
          </div>
          <div>
            <img
              src={imagemCalculadora}
              alt="Imagem de uma calculadora virtual"
            />
          </div>
          <div>
            <h4>
              Aplicação de calculadora web desenvolvida em React.js, com foco em manipulação
              de estado, layout responsivo e operações matemáticas fundamentais de forma dinâmica.
            </h4>
          </div>
        </div>



{/* Projeto To-do-list */}
        <div
          className="projects"
          onClick={() => {
            window.open("https://to-do-list-react-ecru-sigma.vercel.app", "_blank");
          }}
        >
          <div>
            <h3>Projeto To-do-list (React.js)</h3>
          </div>
          <div>
            <img src={imagemTodolist} alt="Lista de tarefas em React" />
          </div>
          <div>
            <h4>
              Aplicação de gerenciamento de tarefas (To Do List) em React.js, permitindo
              adicionar, editar, concluir e remover tarefas com persistência e interface limpa.
            </h4>
          </div>
        </div>


        <div
          className="projects"
          onClick={() => {
            window.location.href = "https://espacoterapeuticoequalize.blog/";
          }}
        >
          
          <div>
            <h3>Projeto WordPress</h3>
          </div>
          <div>
            <img src={imagemEqualize} alt="" srcset="" />
          </div>
          <div>
            <h4>
              Desenvolvimento de site em WordPress com configuração de domínio,
              DNS e certificado SSL, garantindo segurança e estabilidade da
              aplicação.
            </h4>
          </div>
        </div>
        {/*
        <div
          className="projects"
          onClick={() => {
            window.location.href = "#";
          }}
        >
        
        
          caso eu queira expor projetos de faculdade
        
        <div>
            <h3>Projeto "Programação Orientada a Objetos"</h3>
          </div>
          <div>
            <img src={imagemProjectA1E5} alt="" srcset="https://github.com/sxOtavio/exerciciosFaculdade" />
          </div>
          <div>
            <h4>
              (Terminal simulado)
              <br /> Crie uma classe chamada Funcionario com os atributos (nome,
              cpf e salário). * Crie uma classe Professor, que é um Funcionário
              e, * além dos dados de funcionário, tem a titulação e ...
            </h4>
          </div>
          

        </div>
        */}  
      </div>
    </>
  );
}

export default Projects;
