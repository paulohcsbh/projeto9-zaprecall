import styled from "styled-components"
export default function Rodape(props){
const {deck, contador} = props
    return(
        <ContainerButton>            
            <Concluidos data-identifier="flashcard-counter">{contador}/{deck.length} CONCLUÍDOS</Concluidos>
        </ContainerButton>
    )
}

const ContainerButton = styled.div`
    width: 374px;
    height: 111px;
    background-color: #ffffff;
    padding-top: 9px; 
    z-index: 10; 
    position: fixed;
    bottom: 0px;
    left: 0px; 
`
const Concluidos = styled.div`
    width: 148px;
    height: 22px;    
    font-size: 18px;
    font-weigth: 400;
    font-family: 'Recursive', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 0 115px;
`


