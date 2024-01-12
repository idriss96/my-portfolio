import './app.scss';
import NavBar from './components/navBar/NavBar';
import Hero from './components/hero/Hero'
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section id="Skills">Skills</section>
      <section>Parallax</section>
      <section id="Projects">Projects</section>
      <section>Parallax</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
