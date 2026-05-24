import React from "react";
import "./carousel.css";
import logoA from "../../assets/brands/logoA.png";
import logoB from "../../assets/brands/logob.jpg"; // Ojo que este es .jpg y tiene la 'b' minúscula
import logoC from "../../assets/brands/logoC.png";
import logoD from "../../assets/brands/logod.png";
import logoE from "../../assets/brands/logoe.png";
import logoF from "../../assets/brands/logof.png";
import logoG from "../../assets/brands/logog.png";
import logoH from "../../assets/brands/logoh.png";
import logoI from "../../assets/brands/logoi.png";
import logoJ from "../../assets/brands/logoj.png";
import logoK from "../../assets/brands/logok.png";

const logos = [
  { name: "Marca A", url: logoA },
  { name: "Marca B", url: logoB },
  { name: "Marca C", url: logoC },
  { name: "Marca D", url: logoD },
  { name: "Marca E", url: logoE },
  { name: "Marca F", url: logoF },
  { name: "Marca G", url: logoG },
  { name: "Marca H", url: logoH },
  { name: "Marca I", url: logoI },
  { name: "Marca J", url: logoJ },
  { name: "Marca K", url: logoK },
];

export default function LogoCarousel() {
  const doubleLogos = [...logos, ...logos];

  return (
    <section className="logo-section">
      <div className="container">
        <h2>Trabajamos con las mejores marcas</h2>

        <div className="logo-slider">
          <div className="logo-track">
            {doubleLogos.map((logo, index) => (
              <div className="logo-slide" key={index}>
                <img src={logo.url} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
