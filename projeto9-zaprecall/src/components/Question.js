import styled from "styled-components"
import setinha from "./img/setinha.png"
export default function Question(props){  
    const {deck, viraPergunta, setViraResposta} = props
    let layout = []
    for (let i = 0; i < deck.length; i++) {
        layout.push(
            <Pergunta sumido={viraPergunta} key={i}>
                <Questao data-identifier="flashcard-question">{deck}</Questao>
                <Botao data-identifier="flashcard-turn-btn" src={setinha} onClick={() =>respostaVirada()}></Botao>
            </Pergunta>)
    }

    function respostaVirada(){
        setViraResposta(false)
    }
    
    
    
    return(
    <div>
            {layout}
    </div>    
    )

}

const Pergunta = styled.div`
    width: 300px;
    height: 131px;
    background-color: #ffffd4;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 4;
    margin-bottom: 10px;
    border-radius: 6px;
    display: ${ props => props.sumido === true ? "none" : "initial"}
    
`
const Questao = styled.p`
    width: 122px;
    height: 22px;
    font-weight:400;
    font-size: 18px;
    font-family: 'Recursive', sans-serif;
    margin: 18px 0 0 15px;
    color: #333333;
`
const Botao = styled.img`
    width: 30px;
    height: 20px;
    margin: 65px  0  0 254px;
    cursor: pointer;    
`

