import imagemPerfil from "../Img/imgProfile.png";
function Profile() {
  return (
    <div className="profile">
      <div>
        <img src={imagemPerfil} alt="Foto do perfil" className="imgProfile" />
      </div>
      <div>
        <h3>
          Sou estudante de Análise e Desenvolvimento de Sistemas, com foco em
          desenvolvimento web e fundamentos de infraestrutura e segurança da
          informação. Tenho experiência prática com Java, Spring Boot, MySQL,
          WordPress, JavaScript, HTML, CSS, wordPress, e Bootstrap, além de
          familiaridade com conceitos de redes, servidores e
          cibersegurança.
        </h3>
        <h3>
          Atualmente atuo como auxiliar administrativo, função que me
          proporcionou forte desenvolvimento em organização, responsabilidade,
          visão de processos e resolução de problemas, habilidades que aplico
          diretamente em ambientes de tecnologia e trabalho em equipe. Tenho
          perfil analítico, sou curioso por novas tecnologias e busco constante
          evolução técnica, tanto no desenvolvimento de sistemas quanto na área
          de infraestrutura e segurança. Meu objetivo é iniciar e consolidar
          minha carreira em TI, contribuindo com soluções eficientes, seguras e
          bem estruturadas.
        </h3>
      </div>
    </div>
  );
}
export default Profile;
