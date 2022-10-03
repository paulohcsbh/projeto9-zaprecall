import { useState } from "react"
import styled from "styled-components"
import Answer from "./Answer"
import Question from "./Question"
import seta from "./img/play-outline-icon.svg"
import certo from "./img/checkmark-circle-icon.svg"
import errado from "./img/close-circle-icon.svg"
import duvida from "./img/help-circle-icon.svg"

export default function Pergunta(props){
    const { deck, setContador, contador, index, answer, question} = props
    const icones = [certo, duvida, errado]
    const cores = ["#2fbe34", "#ff922e", "#ff3030"]
    const [viraPergunta, setViraPergunta] = useState(true)
    const [viraResposta, setViraResposta] = useState(true)
    const [zap, setZap] = useState()
    const [desabilita, setDesabilita] = useState(false)

    function qualClicado(d) {       
        setViraPergunta(false)
    }

    return (
        <Geral>
            {deck.map((d, i)=>
                <ContainerPergunta >
                <NumPerg cor={zap !== undefined ? cores[zap] : ""} tachado={zap !== undefined ? "line-through" : "none"}>Pergunta {i +1}</NumPerg>
                <Botao onClick={() => qualClicado(i)} src={zap !== undefined ? icones[zap] : seta}></Botao>
                <Question deck={d.question} viraPergunta={viraPergunta} viraResposta={viraResposta} setViraResposta={setViraResposta} />
                <Answer deck={d.answer} viraResposta={viraResposta}
                    setViraPergunta={setViraPergunta} setViraResposta={setViraResposta}
                    setZap={setZap} setContador={setContador}
                    contador={contador} setDesabilita={setDesabilita} />
            </ContainerPergunta>
            
            )}
        </Geral>
    )
}

const Geral = styled.div`    
    height: 365px;
    overflow: auto;
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

