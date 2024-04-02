import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import Form from "@/components/Form";

export default function Contact() {
  return (
  <main>
      <Navbar activeTab="Kontakt" />
      <Hero />
      <div className="content">
      <section className="content-section">
          <Form />
      </section>
      </div>
      <Footer />
      <CookieBar />
    </main>
  );
}
