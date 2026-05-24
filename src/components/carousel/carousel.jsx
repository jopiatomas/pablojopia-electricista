import React from "react";
import styles from "./carousel.css";

const logos = [
  { name: "Marca A", url: "/assets/brands/logoA.png" },
  { name: "Marca B", url: "/assets/brands/logob.jpg" },
  { name: "Marca C", url: "/assets/brands/logoC.png" },
  { name: "Marca D", url: "/assets/brands/logod.png" },
  { name: "Marca E", url: "/assets/brands/logoe.png" },
  { name: "Marca F", url: "/assets/brands/logof.png" },
  { name: "Marca G", url: "/assets/brands/logog.png" },
  { name: "Marca H", url: "/assets/brands/logoh.png" },
  { name: "Marca I", url: "/assets/brands/logoi.webp" },
  { name: "Marca I", url: "/assets/brands/logoi.png" },
  { name: "Marca J", url: "/assets/brands/logoj.png" },
  { name: "Marca K", url: "/assets/brands/logok.png" },
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
