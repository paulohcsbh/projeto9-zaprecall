import styled from "styled-components"
export default function Answer(props) {
    const { deck, viraResposta, setViraPergunta, setViraResposta,
        setZap, setContador, contador,  } = props
    let layout = []
    for (let i = 0; i < deck.length; i++) {
        layout.push(
            <Resposta sumido={viraResposta} key={i}>
                <Solucao data-identifier="flashcard-answer">{deck}</Solucao>
                <Container>
                    <Botao data-identifier="forgot-btn" onClick={zapRecallDois}>Não lembrei</Botao>
                    <Botao data-identifier="almost-forgot-btn" onClick={zapRecallUm}>Quase não lembrei</Botao>
                    <Botao data-identifier="zap-btn" onClick={zapRecall}>Zap!</Botao>
                </Container>
            </Resposta>
            )
    }

    function zapRecall() {
        setZap(0)
        setViraPergunta(true)
        setViraResposta(true)
        setContador(contador + 1)
        

    }
    function zapRecallUm() {
        setZap(1)
        setViraPergunta(true)
        setViraResposta(true)
        setContador(contador + 1)
        
    }
    function zapRecallDois() {
        setZap(2)
        setViraPergunta(true)
        setViraResposta(true)
        setContador(contador + 1)
        
    }
    return (
        <>
            {layout}
        </>
    )
}
const Resposta = styled.div`
    width: 300px;
    height: 131px;
    background-color: #ffffd4;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 6;
    margin-bottom: 10px;
    border-radius: 6px;
    display: ${props => props.sumido === true ? "none" : "initial"}
    
    
`
const Solucao = styled.p`
    width: 247px;
    height: 44px;
    font-weight:400;
    font-size: 18px;
    font-family: 'Recursive', sans-serif;
    margin: 18px 0 0 15px;
    color: #333333;
`

const Container = styled.div`
    width: 300px;
    height: 37.17px;
    background-color: #ffffff;
    margin-top: 20px ;      
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
`
const Botao = styled.div`
    width: 85.17px;
    height: 37.17px;
    cursor: pointer;     
    color: #ffffff;
    font-size: 12px;
    font-weigth: 400;
    background-color: #ff3030; 
    font-family: 'Recursive', sans-serif;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-child(2){
        background-color: #ff922e;
        padding: 10px;
        text-align: center;       
    }
    &:nth-child(3){       
        background-color: #2fbe34; 
    }
`