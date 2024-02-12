import './app.scss';
import NavBar from './components/navBar/NavBar';
import Hero from './components/hero/Hero';
import StarsCanvas from './components/starBackground/StarBackground';
import Parallax from './components/parallax/Parallax';
import Skills from './components/skills/Skills';
const App = () => {
  return (
    <div>
      <StarsCanvas />
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section>
        <Parallax title="Skills" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section>
        <Parallax title="My Projects" />
      </section>
      <section id="Projects">Projects</section>
      <section>
        <Parallax title="Contact Me" />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
