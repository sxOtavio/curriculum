import imagemPerfil from "../img/imgProfile.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="profile-img-container">
        <img src={imagemPerfil} alt="Otávio de Siqueira Ximenes" className="imgProfile" />
      </div>
      <div className="profile-content">
        <div className="profile-tag">
          Suporte Técnico • Infraestrutura • Back-end & Infra Web
        </div>
        <h2 className="profile-title">
          Olá, eu sou <span>Otávio Ximenes</span>
        </h2>

        <p className="profile-text">
          Profissional de tecnologia com sólida base prática que conecta infraestrutura, redes e engenharia de software. Desenvolvi desde cedo uma mentalidade investigativa focada em análise de falhas e automação.
        </p>

        <p className="profile-text">
          Com formação técnica em <strong>Eletromecânica (IFB)</strong> e graduação em <strong>Análise e Desenvolvimento de Sistemas (UCB)</strong>, atuo tanto na administração de <strong>servidores Linux (Homelab), Docker, Nginx, Tailscale e suporte a incidentes (SLA/FCR)</strong> quanto no desenvolvimento de aplicações full stack e distribuídas com <strong>Node.js, Next.js e PostgreSQL</strong>.
        </p>

        <p className="profile-text">
          Experiência comprovada traduzindo necessidades operacionais em soluções tecnológicas que mitigam falhas, otimizam processos e geram economia real.
        </p>

        <div className="profile-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/curriculum?track=infra")}
          >
            🛡️ CV Suporte & Infra
          </button>
          <button
            className="btn-primary"
            onClick={() => navigate("/curriculum?track=backend")}
          >
            ⚡ CV Back-end & Web
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/projects")}
          >
            💻 Ver Projetos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;


