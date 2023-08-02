import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className=" m-32">
      <h1 className="text-slate-50 text-2xl font-custom">Contato</h1>
      <p className="text-slate-50 text-justify font-custom">Empresário</p>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default Contact