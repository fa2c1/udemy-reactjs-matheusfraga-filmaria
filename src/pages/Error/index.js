import './styles.css';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to="/">Veja todos filmes!</Link>
        </div>
    );
}

export default Error;