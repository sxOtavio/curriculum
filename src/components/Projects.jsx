import imagemCalculadora from "../img/calculadora.png";
import imagemTodolist from "../img/to-do-list.png";
import imagemEqualize from "../img/equalize.png";
import imagemLojaCelulares from "../img/siteCelulares2.png";
import imagemProjectA1E5 from "../img/javaProjetctA1E5.png";


function Projects() {
  return (
    <>
      <div className="projectsContainer">
        <div
          className="projects"
          onClick={() => {
            window.location.href = "https://calculadora-rosy-three.vercel.app/";
          }}
        >
          <div>
            <h3>Projeto calculadora (React.js)</h3>
          </div>
          <div>
            <img
              src={imagemCalculadora}
              alt="Imagem de uma calculadora virtual"
            />
          </div>
          <div>
            <h4>
              Desenvolvi uma aplicação de calculadora web utilizando React.js,
              com foco na prática de conceitos fundamentais de desenvolvimento
              front-end e manipulação de estado. A aplicação realiza operações
              matemáticas básicas (adição, subtração, multiplicação e divisão),
              permitindo ao usuário inserir valores e visualizar o resultado de
              forma dinâmica e responsiva.
            </h4>
          </div>
        </div>
        <div
          className="projects"
          onClick={() => {
            window.location.href =
              "https://to-do-list-react-ecru-sigma.vercel.app";
          }}
        >
          <div>
            <h3>Projeto To-do-list (React.js)</h3>
          </div>
          <div>
            <img src={imagemTodolist} alt="" srcset="" />
          </div>
          <div>
            <h4>
              Desenvolvi uma aplicação de gerenciamento de tarefas (To Do List)
              utilizando React.js, com foco na prática de conceitos essenciais
              de desenvolvimento front-end, manipulação de estado e organização
              de componentes. A aplicação permite adicionar, editar, concluir e
              remover tarefas, oferecendo uma interface simples e intuitiva para
              organização pessoal.
            </h4>
          </div>
        </div>
        <div
          className="projects"
          onClick={() => {
            window.location.href = "#";
          }}
        >
          <div>
            <h3>Projeto Loja de celulares (Node.js)</h3>
          </div>
          <div>
            <img src={imagemLojaCelulares} alt="" />
          </div>
          <div>
            <h4>Não postado ainda</h4>
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
            <h4>Desenvolvimento de site em WordPress com configuração de domínio, DNS e certificado SSL, garantindo segurança e estabilidade da aplicação.</h4>
          </div>
        </div>
        <div
          className="projects"
          onClick={() => {
            window.location.href = "#";
          }}
        >
          <div>
            <h3>Projeto Java</h3>
          </div>
          <div>
            <img src={imagemProjectA1E5} alt="" srcset="" />
          </div>
          <div>
            <h4>
              Crie uma classe chamada Funcionario com os atributos (nome, cpf e
              salário). * Crie uma classe Professor, que é um Funcionário e, *
              além dos dados de funcionário, tem a titulação e ...
            </h4>
          </div>
        </div>
        <div
          className="projects"
          onClick={() => {
            window.location.href = "#";
          }}
        >
          <div>
            <h3>Projeto Java</h3>
          </div>
          <div>
            <img src={imagemProjectA1E5} alt="" srcset="" />
          </div>
          <div>
            <h4>asdasd</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
