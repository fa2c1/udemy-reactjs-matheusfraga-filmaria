import './styles.css';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Filme(){

    const { id } = useParams();
    const history = useHistory();
    const [filme, setFlme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setFlme(response.data);
            setLoading(false);
        }

        loadFilmes()

        return () => {
            console.log('COMPONENTE DESMONTADO')
        }

    }, [history, id]);

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />
            <h3>Sinopse</h3>
            {filme.sinopse}
            <div className="button">
                <button onClick={()=>{}} >Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;