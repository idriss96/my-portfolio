import './app.scss';
import NavBar from './components/navBar/NavBar';
const App = () => {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>Parallax</section>
      <section>Skills</section>
      <section>Parallax</section>
      <section>Projects</section>
      <section>Parallax</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
