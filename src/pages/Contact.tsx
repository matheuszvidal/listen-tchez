import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <main className="m-28">
        <h1 className="text-zinc-200 text-4xl font-custom mb-10">Contato</h1>
        <address className="text-zinc-200 text-xl text-justify font-custom">
          Email:{" "}
          <a href="mailto:tchezpastorello@gmail.com">
            tchezpastorello@gmail.com
          </a>
          <br />
          Telefone: (65)99605-9859
        </address>
      </main>
      <footer className="flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
