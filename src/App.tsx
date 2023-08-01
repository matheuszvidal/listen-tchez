import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
}

export default App
