import React from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

import palavras from "./palavras.js"

export default function App(){
    
    let lista = [];
    let a;
    let lista2 = []
     
    
    const underlines = ["_ ", "_ ", "_ ", "_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]      
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [ativar, setAtivar] = React.useState(true);
    const [jogar, setJogar] = React.useState([])
    const [letter,setLetter] = React.useState([])
    const [contagem, setContagem] = React.useState(0)
    const [cor, setCor] = React.useState("")
    const[textoChute, setTextoChute] = React.useState("")
    const [clicados, setClicados] = React.useState([])

    function habilitar(){         
        setCor("")      
        setTextoChute("")
        setAtivar(false);  
        let r = Math.random() * ((palavras.length-1) - 0 + 1);
        r = parseInt(r);          
        lista2.push(palavras[r])
        setJogar(lista2);
        lista = palavras[r].toString().split("") 
        setContagem(0);          
        setLetter(underlines.slice(0,palavras[r].length))  
        setClicados([])                        
    }     

    function renderizar(letra, index){         
        a = jogar.toString().replace(/[ãáâà]/gi, "a")
        a = a.replace(/[êé]/gi, "e")
        a = a.replace(/[ôó]/gi, "o")
        a = a.replace(/[í]/gi, "i")
        a = a.replace(/[ú]/gi, "u")
        a = a.replace(/[ç]/gi, "c")        
        
        lista = a.split("")
        let lista3 = []
        
        const desabilitar = [...clicados, letra]
        setClicados(desabilitar);
        
        
        if(lista.includes(letra)){
            
            for(let i = 0; i < lista.length;i++){
                const item = lista[i]
                if(item === letra){
                    lista3.push(item)
                    letter.splice(i, 1, letra)
                }
            }            
            const novaLetter = [...letter]
            setLetter(novaLetter)
        
        if (novaLetter.toString() === lista.toString()){
            setLetter(jogar)
            setCor("verde")
            setAtivar(true)
        } 

        }else{
            setContagem(contagem + 1)
            if(contagem === 5 ){
                setLetter(jogar)
                setAtivar(true)
                setLetter(lista)
                setCor("vermelho")                
            }
        }
                   
    }

    function palpite(){
        if(textoChute.toLowerCase().trim() === jogar.toString()){
            setCor("verde")
            setLetter(jogar)
            setAtivar(true)
        }else{
            setContagem(6)
            setAtivar(true)
            setLetter(jogar)
            setCor("vermelho")
        }
        
    } 
    return(
       <>
        <div className="cima">
            <div className="forca">
                <img data-identifier="game-image" src={images[contagem]} alt="Imagem Forca"/>
                <div>
                <button className="comecar" data-identifier="choose-word" onClick={habilitar}>Escolher Palavra</button> 
                <div data-identifier="word" className={`gerar-palavra ${cor}`}> {letter}</div>
                </div>      
            </div>       
        </div>

        <div className="jogando">
                <div className="alfabeto" id="alfabeto" >
                    {alfabeto.map((letra, index) => <button data-identifier="letter" key={index} className="letras"  disabled={ativar === true ? true: clicados.includes(letra)? true : false} onClick={() =>renderizar(letra, index)}>{letra.toUpperCase()} </button>)} 
                </div> 
                <div className="chute">
                <span>Já sei a palavra!</span><input data-identifier="type-guess" disabled={ativar} onChange={(e)=> setTextoChute(e.target.value)} value={textoChute} type="text" /><button data-identifier="guess-button" className="chutar" disabled={ativar} onClick={palpite}>Chutar</button>
            </div>              
        </div>
        </>        
    )
}