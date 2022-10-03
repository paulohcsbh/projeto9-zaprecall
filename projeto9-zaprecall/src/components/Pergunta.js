import { useState } from "react"
import styled from "styled-components"
import Answer from "./Answer"
import Question from "./Question"
import seta from "./img/play-outline-icon.svg"
import certo from "./img/checkmark-circle-icon.svg"
import errado from "./img/close-circle-icon.svg"
import duvida from "./img/help-circle-icon.svg"

export default function Pergunta(props) {
    const { setContador, contador, index, answer, question } = props
    const icones = [certo, duvida, errado]
    const cores = ["#2fbe34", "#ff922e", "#ff3030"]
    const [viraPergunta, setViraPergunta] = useState(true)
    const [viraResposta, setViraResposta] = useState(true)
    const [zap, setZap] = useState()
    
    console.log(question)
    function qualClicado() {
        setViraPergunta(false)
    }

    return (
        <ContainerPergunta >
            <NumPerg cor={zap !== undefined ? cores[zap] : ""} tachado={zap !== undefined ? "line-through" : "none"} data-identifier="flashcard-index-item">Pergunta {index}</NumPerg>
            <Botao data-identifier="flashcard-show-btn" onClick={() => qualClicado()} src={zap !== undefined ? icones[zap] : seta}></Botao>
            <Question deck={question} viraPergunta={viraPergunta} viraResposta={viraResposta} setViraResposta={setViraResposta} />
            <Answer deck={answer} viraResposta={viraResposta}
                setViraPergunta={setViraPergunta} setViraResposta={setViraResposta}
                setZap={setZap} setContador={setContador}
                contador={contador}  />
        </ContainerPergunta>

    )
}


const NumPerg = styled.p`
    width: 87px;
    height: 19px;
    font-weight:700;
    font-size: 16px;
    font-family: 'Recursive', sans-serif;
    margin: 23px 15px;
    text-decoration: ${props => props.tachado};
    color: ${props => props.cor};
`
const Botao = styled.img`
    width: 20px;
    height: 23px;
    margin: 23px 0 0 125px;
    cursor: pointer;  
       
`
const ContainerPergunta = styled.button`
    width: 300px;
    height: 65px;
    background-color: #ffffff;
    margin: 0 0 25px 37px;
    border: 1px solid #dbdbdb;
    border-radius: 6px; 
    display: flex; 
    justify-content: space-between;
    aligned-items: center;  
    position: relative;
    
`
