import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import ContentGrid from "@/components/ContentGrid";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";

export default function Home() {
  return (
  <main>
      <Navbar activeTab="Home" />
      <Hero />
      <div className="content">
      <section className="content-section">
        <h1 className="title">Ganz nach deinem Geschmack ☕️</h1>
        <p className="description">
          Entdecke unzählige Möglichkeiten dein Getränk ganz nach deinem Geschmack zu personalisieren.
          Frag einfach deine Barista im nächsten Moonbucks® Coffee House oder bestelle ganz einfach
          im Voraus mit der Moonbucks® App 📲.
        </p>
        <ContentGrid />
      </section>
      </div>
      <Footer />
      <CookieBar />
    </main>
  );
}
