import Footer from "../components/Footer";
import Header from "../components/Header"

function About() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col gap-10 w-full">
      <h1 className="text-zinc-200 text-2xl font-custom mt-8">Sobre o Artista</h1>
        <div className="flex justify-center flex-col gap-10 md:w-2/4 sm:w-2/4 w-3/4">
        <p className="text-zinc-200 text-justify font-custom">Sempre influenciado pela música, Tchez iniciou sua carreira em 2018 como DJ e, em 2021, embarcou na jornada de produtor musical.</p>
        <p className="text-zinc-200 text-justify font-custom">Com uma abordagem versátil, ele rapidamente se destacou por sua habilidade em se adaptar a diferentes públicos, navegando entre o techno, minimal techno e progressive house, criando assim sua própria identidade sonora.</p>
        <p className="text-zinc-200 text-justify font-custom">Seu primeiro EP, intitulado "Lunar" (Future Techno), alcançou a impressionante posição de #7 no Top 100 Techno Releases, recebendo apoio de renomados artistas como Bultech, Marco Carola e Richie Hawtin</p>
        <p className="text-zinc-200 text-justify font-custom">Tchez reserva grandes conquistas para um futuro próximo, então fique atento para acompanhar seu caminho promissor.</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default About
