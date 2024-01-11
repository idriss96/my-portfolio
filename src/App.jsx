import './app.scss';
import NavBar from './components/navBar/NavBar';
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
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
