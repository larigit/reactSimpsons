import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import Axios from 'axios'
import './style.css'

const Simpsons = () => {
    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState()
    
    useEffect(()=>{
        const pegaDados = async ()=> {
            const {data} = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            setPersonagem(data)
        }
        pegaDados()
    },[clique])

    return (
        <>
            <Menu />
            <div className="main-simpson">
                {personagem.map(perso => {
                    return(
                        <div className="card">
                            <p>{perso.character}</p>
                            <img src={perso.image} alt="personagem simpson"/>
                        </div>
                        
                    )
                })}
                <button onClick={()=>setClique(personagem)}>Clique para trocar o personagem</button>
            </div>
            <Footer />
        </>
    )
}

export default Simpsons