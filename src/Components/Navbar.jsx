import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        {/* <img src="/src/Img/Rick_and_Morty.svg.png" className="juntos2"  /> */}
        <img src="/src/Img/RickBannerAzul.gif" className="juntos2"  />
        
      
      <ul className="navbar-links">
      
        <li className="navbar-link">
          <a href="/rick-and-morty/personajes">Personajes</a>
        </li>
        <li className="navbar-link">
          <a href="/rick-and-morty/episodios">Episodios</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
