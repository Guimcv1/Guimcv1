import React from "react";
import FloatingLines from "../components/FloatingLines";
import ClickSpark from "../components/ClickSpark";
import CardNav from "../components/CardNav";
import GlareHover from "../components/GlareHover";

// Array de certificados - adicione seus certificados aqui
// Os PDFs devem estar em public/certificados/
// image: caminho para a imagem (ex: "certificado1.jpg")
const CERTIFICATES = [
  {
    id: 1,
    title: "Python Essentials",
    file: "Python_Essentials_1.pdf",
    image: "./src/Certificados/imagens/Python.png",
    downloadPath: "/src/Certificados/Python_Essentials_1.pdf",
    issuer: "Python",
  },
  {
    id: 2,
    title: "Conceitos Básicos de Redes",
    file: "Conceitos Básicos de Redes.pdf",
    image: "./src/Certificados/imagens/Redes.png",
    downloadPath: "/src/Certificados/Conceitos Básicos de Redes.pdf",
    issuer: "Redes",
  },
  {
    id: 3,
    title: "Análise de Dados",
    file: "Analis_de_Dados.pdf",
    image: "./src/Certificados/imagens/Analise de dados.png",
    downloadPath: "/src/Certificados/Analis_de_Dados.pdf",
    issuer: "Análise de Dados",
  },
  {
    id: 4,
    title: "Desafios Complexos e Lideranças Impactantes",
    file: "Desafios_Complexos_e_Liderancas_Impactantes.pdf",
    image: "./src/Certificados/imagens/Desafios.png",
    downloadPath:
      "/src/Certificados/Desafios_Complexos_e_Liderancas_Impactantes.pdf",
    issuer: "Desafios Complexos",
  },
  {
    id: 5,
    title: "Certificado SQL",
    file: "Certificado SQL.pdf",
    image: "./src/Certificados/imagens/Certificado SQL.png",
    downloadPath: "/src/Certificados/Certificado SQL.pdf",
    issuer: "SQL",
  },
  {
    id: 6,
    title: "HTML Inicial",
    file: "Html Inicial.pdf",
    image: "./src/Certificados/imagens/Html.png",
    downloadPath: "/src/Certificados/Html Inicial.pdf",
    issuer: "HTML",
  },
  {
    id: 7,
    title: "Cibersegurança",
    file: "Introdução à Cibersegurança.pdf",
    image: "./src/Certificados/imagens/Ciber.png",
    downloadPath: "/src/Certificados/Introdução à Cibersegurança.pdf",
    issuer: "Cibersegurança",
  },
  {
    id: 8,
    title: "Carros Esportivos Fusion 360",
    file: "Fusion 360 Carros Esportivos.pdf",
    image: "./src/Certificados/imagens/Carros Esportivos.png",
    downloadPath: "/src/Certificados/Fusion 360 Carros Esportivos.pdf",
    issuer: "Fusion 360",
  },
  {
    id: 9,
    title: "Prototipagem de Drones Fusion 360",
    file: "Fusion 360 Prototipagem de Drones.pdf",
    image: "./src/Certificados/imagens/Drones.png",
    downloadPath: "/src/Certificados/Fusion 360 Prototipagem de Drones.pdf",
    issuer: "Fusion 360",
  },
  {
    id: 10,
    title: "Certificado Hashtag",
    file: "certificado Hashtag.pdf",
    image: "./src/Certificados/imagens/N8N.png",
    downloadPath: "/src/Certificados/certificado Hashtag.pdf",
    issuer: "Hashtag",
  },
];

// Configuração dos itens de navegação
const NAVIGATION_ITEMS = [
  {
    label: "About me",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      {
        label: "Certificados",
        href: "/certificados",
        ariaLabel: "Certificados",
      },
      { label: "About me", href: "/about", ariaLabel: "About me" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "My projects", href: "/projects", ariaLabel: "My projects" },
      { label: "My team", href: "/team", ariaLabel: "My team" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      {
        label: "Email",
        href: "mailto:guimcvilmar@gmail.com",
        ariaLabel: "Email us",
      },
      {
        label: "Github",
        href: "https://github.com/Guimcv1",
        ariaLabel: "Github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/guilherme-martins-75542928a/",
        ariaLabel: "LinkedIn",
      },
    ],
  },
];

// Configuração do ClickSpark
const CLICK_SPARK_CONFIG = {
  sparkColor: "#fff",
  sparkSize: 10,
  sparkRadius: 15,
  sparkCount: 8,
  duration: 400,
};

// Configuração do FloatingLines
const FLOATING_LINES_CONFIG = {
  enabledWaves: ["top", "middle", "bottom"],
  lineCount: 5,
  lineDistance: 5,
  bendRadius: 5,
  bendStrength: -0.5,
  interactive: true,
  parallax: true,
};

// Configuração do CardNav
const CARD_NAV_CONFIG = {
  logoAlt: "",
  items: NAVIGATION_ITEMS,
  baseColor: "#2A033A",
  menuColor: "#DDDADB",
  buttonBgColor: "#fff",
  buttonTextColor: "#000",
  ease: "power3.out",
  theme: "dark",
};

const Certificados = () => {
  const handleDownload = (downloadPath, fileName) => {
    const link = document.createElement("a");
    link.href = downloadPath;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex w-screen h-screen">
      <ClickSpark {...CLICK_SPARK_CONFIG}>
        <div className="relative w-full h-full">
          {/* FloatingLines como fundo */}
          <FloatingLines {...FLOATING_LINES_CONFIG} />

          {/* CardNav posicionado absoluto */}
          <CardNav {...CARD_NAV_CONFIG} />

          {/* Container dos certificados */}
          <div className="absolute top-0 left-0 right-0 bottom-0 pt-56 flex items-start justify-center overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 py-1 max-w-7xl w-full pb-20">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => handleDownload(cert.downloadPath, cert.file)}
                  className="cursor-pointer"
                >
                  <GlareHover
                    width="410px"
                    height="280px"
                    background="linear-gradient(135deg, #1a0933 0%, #2d0a4a 100%)"
                    borderRadius="15px"
                    borderColor="#6b21a8"
                    glareColor="#a855f7"
                    glareOpacity={0.4}
                    glareAngle={-30}
                    glareSize={280}
                    transitionDuration={800}
                    playOnce={false}
                    className="h-full"
                  >
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-0 overflow-hidden rounded-lg">
                      {/* Imagem do certificado - retangular */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />

                      {/* Fallback se imagem não existir */}
                      <div
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 w-full h-full rounded-lg"
                        style={{ display: "none" }}
                      >
                        <div className="text-5xl mb-4">📄</div>
                        <h3 className="text-white text-lg font-bold text-center mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-purple-200 text-sm text-center mb-4">
                          {cert.issuer}
                        </p>
                        <button className="mt-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </GlareHover>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
};

export default Certificados;
