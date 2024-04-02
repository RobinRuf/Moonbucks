import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import Image from "next/image";

export default function About() {
  return (
  <main>
      <Navbar activeTab="Über Uns" />
      <Hero />
      <div className="content">
      <section className="content-section">
          <h1 className="title">Über Moonbucks</h1>
          <p className="description">
            Bei Moonbucks Coffee sind wir mehr als nur Kaffee. Seit unserer Gründung im Herzen von Basel
            haben wir uns dem Angebot einzigartiger Kaffeeerlebnisse mit persönlicher Note verschrieben.
            Jede Tasse wird mit Sorgfalt und Leidenschaft für unsere Kunden zubereitet. 
          </p>
          <p className="description">
            Unsere Mission ist es, jeder Gemeinschaft, der wir dienen, einen Ort zu bieten, an dem sich 
            Menschen treffen, Geschichten austauschen und die Aromen unseres sorgfältig ausgewählten und 
            gerösteten Kaffees genießen können. Wir sind stolz darauf, eine nachhaltige und 
            verantwortungsbewusste Geschäftspraxis zu führen, die die Umwelt respektiert und 
            lokale Bauern unterstützt. 
          </p>
          <p className="description">
            Entdecken Sie unsere Vielfalt an Kaffeegetränken, von klassischen Espressos bis hin zu 
            kreativen Signature-Drinks, und erfahren Sie, warum Moonbucks Coffee der bevorzugte Treffpunkt 
            für Kaffeeliebhaber ist.
          </p>
      </section>
        <div className="team-photo-container">
          <Image
            src="/team.png"
            alt="Moonbucks Team"
            width={600}
            height={500}
            objectFit="contain"
          />
      </div>
      </div>
      <Footer />
      <CookieBar />
    </main>
  );
}
