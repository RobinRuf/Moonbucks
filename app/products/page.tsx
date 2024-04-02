import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import ProductGrid from "@/components/ProductGrid";


export default function Products() {
  return (
    <main>
      <Navbar activeTab="Produkte" />
      <Hero />
      <div className="content">
        <section className="content-section">
          <h1 className="title">Unsere beliebtesten Produkte</h1>
          <p className="description">
            Entdecke unzählige Möglichkeiten dein Getränk ganz nach deinem Geschmack zu personalisieren.
            Frag einfach deine Barista im nächsten Moonbucks® Coffee House oder bestelle ganz einfach
            im Voraus mit der Moonbucks® App 📲.
          </p>
          <ProductGrid />
        </section>
      </div>
      <Footer />
      <CookieBar />
    </main>
  );
}
