import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Header>
          <Link className="logo" to="/">Filmaria</Link>
          <Link className="favoritos" to="/">Salvos</Link>
      </Header>
    );
  }
  
  export default Header;
  