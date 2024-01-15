import './hero.scss';
import HeroContent from './heroContent/HeroContent';

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <video autoPlay muted loop className="hero-background">
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
