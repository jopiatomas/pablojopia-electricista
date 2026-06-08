import { useState, useEffect } from "react";
import LogoCarousel from "./components/carousel/carousel";

const services = [
  {
    icon: "🔑",
    title: "Cerrajería",
    description:
      "Apertura de puertas, cambio de combinaciones, colocación de cerraduras mecánicas y electrónicas.",
    badge: "Urgencias 24hs",
  },
  {
    icon: "⚡",
    title: "Electricidad domiciliaria",
    description:
      "Instalaciones domiciliarias e industriales, iluminación, tableros eléctricos, detección de cortocircuitos y mantenimiento.",
    badge: "Matriculado", // "Matriculado" o "Certificado" le da mucha más confianza al cliente
  },
  {
    icon: "🛡️",
    title: "Seguridad electrónica",
    description:
      "Todo tipo de sensores y protección integral para hogares, comercios y empresas.",
    badge: "Protección",
  },
  {
    icon: "🌐",
    title: "Cableado estructurado",
    description:
      "Diseño e instalación de redes de datos IP. Soluciones de conectividad estables para oficinas, viviendas y organizaciones.",
    badge: "Conectividad",
  },
  {
    icon: "🤖",
    title: "Domótica y automatización",
    description:
      "Diseño y automatización de iluminación y escenas inteligentes controladas desde dispositivos móviles o comandos de voz. ",
    badge: "Smart Home",
  },
  {
    icon: "🧵", // O usa "📡" si te gusta más
    title: "Redes de fibra óptica",
    description:
      "Diseño, tendido, fusión y certificación de enlaces de fibra óptica para máxima velocidad y ancho de banda.",
    badge: "Alta Velocidad",
  },
  {
    icon: "🚪",
    title: "Controles de acceso",
    description:
      "Sistemas biométricos, lectoras de tarjetas y cerraduras electromagnéticas con sistemas autónomos o monitoreados remotamente.",
    badge: "Control Eficiente",
  },
  {
    icon: "📹",
    title: "Video vigilancia analógica e IP",
    description:
      "Instalación de cámaras de seguridad (CCTV) con monitoreo remoto en vivo y almacenamiento en la nube.",
    badge: "Monitoreo HD",
  },
  {
    icon: "🖥️",
    title: "Monitoreo de racks y tableros",
    description:
      "Organización, ruteo y mantenimiento de racks. Monitoreo térmico/eléctrico de infraestructura crítica.",
    badge: "Soporte Técnico",
  },
  {
    icon: "🛠️", // Cambié el changuito por herramientas que va más con el rubro
    title: "Productos de calidad",
    description:
      "Provisión y uso de materiales eléctricos, de red y cerrajería de primeras marcas para garantizar máxima durabilidad.",
    badge: "Garantía",
  },
];

const phone = "2235366094";
const whatsappLink = `https://wa.me/54${phone}`;
const callLink = `tel:${phone}`;

function NavBar({ scrolled }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "#0a2540" : "transparent",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            ⚡
          </div>
          <span
            style={{
              color: "#fff",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "-0.3px",
            }}
          >
            Pablo Jopia - LJI Integración Tecnológica
          </span>
        </div>
        <nav style={{ display: "flex", gap: 28 }}>
          {["Servicios", "Zona", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#60A5FA")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.85)")
              }
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #0a2540 0%, #0f3460 45%, #1a5276 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 2rem 60px",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(96,165,250,0.12)",
          top: "10%",
          right: "-10%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(96,165,250,0.08)",
          top: "30%",
          right: "-3%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          border: "1px solid rgba(96,165,250,0.06)",
          bottom: "-25%",
          left: "-15%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, textAlign: "center", position: "relative" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(96,165,250,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              color: "#60A5FA",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            📍 Mar del Plata y alrededores
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
            letterSpacing: "-1px",
          }}
        >
          Electricista & Cerrajero
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #60A5FA, #93C5FD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            de confianza
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 580,
            margin: "0 auto 40px",
          }}
        >
          Más de 25 años de experiencia. Trabajos garantizados, materiales de
          calidad y atención personalizada para tu hogar o negocio.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 28px",
              borderRadius: 12,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(37,211,102,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(37,211,102,0.35)";
            }}
          >
            💬 WhatsApp
          </a>
          
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 64,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "25+", label: "Años de experiencia" },
            { value: "500+", label: "Trabajos realizados" },
            { value: "24hs", label: "Urgencias" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#60A5FA",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a5276" : "#0f3460",
        border: `1px solid ${hovered ? "rgba(96,165,250,0.5)" : "rgba(96,165,250,0.15)"}`,
        borderRadius: 16,
        padding: "32px 28px",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.3)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      <div style={{ fontSize: 36, marginBottom: 16 }}>{service.icon}</div>

      <div
        style={{
          display: "inline-block",
          background: "rgba(59,130,246,0.2)",
          color: "#93C5FD",
          fontSize: 11,
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 100,
          fontFamily: "'Montserrat', sans-serif",
          marginBottom: 12,
          letterSpacing: "0.5px",
        }}
      >
        {service.badge}
      </div>

      <h3
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          color: "#fff",
          marginBottom: 12,
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 15,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      style={{
        background: "#0a2540",
        padding: "100px 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#60A5FA",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Qué hago
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Mis servicios
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Zone() {
  return (
    <section
      id="zona"
      style={{
        background: "linear-gradient(160deg, #0f3460, #0a2540)",
        padding: "100px 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: 60,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: "1 1 360px", maxWidth: 500 }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#60A5FA",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Dónde trabajamos
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 20,
            }}
          >
            Mar del Plata y alrededores
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Brindo servicio en toda la ciudad de Mar del Plata y localidades
            cercanas. Si tenés dudas sobre si llego a tu zona, escribime y te
            confirmo.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Mar del Plata",
              "Batán",
              "Sierra de los Padres",
              "Mar del Plata zona sur y norte",
            ].map((z) => (
              <div
                key={z}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span style={{ color: "#60A5FA", fontSize: 18 }}>✓</span> {z}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative map-like card */}
        <div
          style={{
            flex: "1 1 280px",
            maxWidth: 340,
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(96,165,250,0.2)",
            borderRadius: 20,
            padding: 32,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>📍</div>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Dirección
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 24,
            }}
          >
            Luro 2378, Mar del Plata
          </div>
          <a
            href={`https://maps.google.com/?q=Luro+2378+Mar+del+Plata`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "rgba(96,165,250,0.15)",
              color: "#93C5FD",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: 10,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              border: "1px solid rgba(96,165,250,0.3)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(96,165,250,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(96,165,250,0.15)")
            }
          >
            Ver en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contacto"
      style={{
        background: "#06182d",
        padding: "100px 2rem",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#60A5FA",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Hablemos
        </p>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          Contactá a Pablo
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 48,
            lineHeight: 1.7,
          }}
        >
          Consultá sin cargo. Respondemos a la brevedad y coordinamos una visita
          en el horario que te quede mejor.
        </p>

        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 32px",
              borderRadius: 14,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💬 Escribir por WhatsApp
          </a>
          
        </div>

        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#04111f",
        padding: "28px 2rem",
        borderTop: "1px solid rgba(96,165,250,0.1)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.3)",
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Pablo Jopia — Electricista & Cerrajero ·
        Mar del Plata
      </p>
    </footer>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Inter:wght@400;500&display=swap";
    document.head.appendChild(link2);

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = "#0a2540";
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar scrolled={scrolled} />
      <Hero />
      <Services />
      <LogoCarousel />
      <Zone />
      <Contact />
      <Footer />
    </div>
  );
}
