import imagemPerfil from "../img/imgProfile.png";
function Profile() {
  return (
    <div className="profile">
      <div>
        <img src={imagemPerfil} alt="Foto do perfil" className="imgProfile" />
      </div>
      <div>
        <h3>
          Sobre Mim Desde pequeno, eu era fascinado por entender como as coisas
          funcionavam. Minha primeira grande descoberta foi com um kit de
          Arduino que ganhei de presente. Lembro da empolgação ao ver um LED
          piscar com algumas linhas de código – ali percebi que programar era
          uma forma de dar vida às ideias. Foi meu primeiro contato com lógica e
          a sensação de criar algo do zero. </h3> <br/>
          
          <h3> No Instituto Federal de Brasília,
          durante o curso técnico em Eletromecânica, essa paixão se aprofundou.
          Ao programar em Ladder para controlar sistemas automatizados, entendi
          como o raciocínio lógico podia resolver problemas do mundo real. Cada
          novo projeto era um desafio que unia teoria e prática, e eu sabia que
          queria seguir por esse caminho. </h3> <br/>
          <h3>Hoje, cursando Análise e
          Desenvolvimento de Sistemas na Universidade Católica de Brasília, e
          tendo passado pela UnB em disciplinas de programação, vejo o quanto
          essas experiências foram fundamentais. A base que construí com Arduino
          e Ladder me deu uma perspectiva única: programação não é só código, é
          solução, criatividade e impacto.</h3><br/>
          <h3>Fora da tecnologia, trabalhei em
          áreas como atendimento e logística, o que me ensinou a me comunicar,
          organizar e resolver problemas sob pressão, habilidades que levo para
          qualquer time. Sou movido por desafios e estou sempre buscando
          aprender algo novo, seja uma linguagem, um framework ou uma forma
          melhor de colaborar. Se você procura alguém com vontade de crescer,
          que já provou ter resiliência e que enxerga a programação como
          ferramenta de transformação, vamos conversar!
        </h3>
      </div>
    </div>
  );
}
export default Profile;
