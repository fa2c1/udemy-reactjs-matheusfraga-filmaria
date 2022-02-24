import './styles.css';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';


function Home() {
  
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
      const respomse = await api.get('r-api/?api=filmes')
      setFilmes(respomse.data);
    }

    loadFilmes();

  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}/>
              <Link to="/">Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Home;