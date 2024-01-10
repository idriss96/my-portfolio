import './navBar.scss';

function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>Idriss Dev</span>
        <div className="social">
          <a href="">
            <img src="/github.svg" alt="github icon" />
          </a>
          <a href="">
            <img src="/linkedin.svg" alt="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
