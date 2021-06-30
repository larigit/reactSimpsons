import React, {useState, useEffect} from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import data from '../../service/data'

import './style.css'

const Search = () => {
    const[personagens, setPersonagens] = useState([]);  //lista de repositorios vazia
    const[filterPersonagem, setFilterPersonagem] = useState([]);
    const[searchPersonagem, setSearchPersonagem] = useState('');


    useEffect(() =>{
        setPersonagens(data);
    }, [])

    useEffect(()=>{
        const lowerSearchPersonagem = searchPersonagem.toLowerCase();
        setFilterPersonagem(
            personagens.filter(perso => {
                return perso.name.toLowerCase().includes(lowerSearchPersonagem)
            })
        )
    }, [searchPersonagem, personagens])


    const handleLike = (id) => {
        const newPerso = personagens.map(perso => {
            return perso.id === id ? {...perso, favorite: !perso.favorite} : perso;
        })
        setPersonagens(newPerso);
    }

    return(
        <>
            <Menu/>
            <div className="body">
                <input className="input" placeholder="Type here the character you want" onChange={event=>setSearchPersonagem(event.target.value)}/>
                <div className="personagens">
                    {filterPersonagem.map((data) => (
                        <div className="search__card">
                            <img src={data.image} alt="descrição"/>
                            <p>{data.name}</p>
                            <button style={{ border:"none", backgroundColor:"white"}} onClick = {() => handleLike(data.id)}>{data.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon style={{ color: "black"}}/>}</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Search;

