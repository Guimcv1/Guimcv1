import React from "react";
import FloatingLines from "../components/FloatingLines";
import ClickSpark from "../components/ClickSpark";
import CardNav from "../components/CardNav";


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

const Home = () => {
  return (
    <div className="flex w-screen h-screen">
      <ClickSpark {...CLICK_SPARK_CONFIG}>
        <div className="relative w-full h-full">
          <FloatingLines {...FLOATING_LINES_CONFIG} />
          <CardNav {...CARD_NAV_CONFIG} />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Home;
