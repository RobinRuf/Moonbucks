import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";

export default function Career() {
  return (
  <main>
      <Navbar activeTab="Karriere" />
      <Hero />
      <div className="content">
      <section className="content-section">
          <h1 className="title">Karriere bei Moonbucks</h1>
          <p className="description">
            Du hast eine Leidenschaft für Kaffee und liebst den Umgang mit Menschen?
            Dann könnte eine Karriere bei Moonbucks genau das Richtige für dich sein.
            Wir suchen engagierte Teammitglieder, die unsere Liebe für hochwertigen Kaffee
            und hervorragenden Kundenservice teilen.
          </p>
          <table className="jobTable">
            <thead>
              <tr>
                <th>Position</th>
                <th>Beschreibung</th>
                <th>Standort</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barista</td>
                <td>Kaffeekreationen mit einem Lächeln servieren.</td>
                <td>Basel</td>
                <td><button className="applyButton">Bewerben</button></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Filialleiter</td>
                <td>Leite einen unserer Standorte.</td>
                <td>Basel</td>
                <td><button className="applyButton">Bewerben</button></td>
              </tr>
            </tbody>
          </table>
      </section>
      </div>
      <Footer />
      <CookieBar />
    </main>
  );
}
