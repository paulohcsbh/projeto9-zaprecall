import Pergunta from "./Pergunta"
import styled from "styled-components"

export default function Perguntas(props) {
    const { deck, setContador, contador } = props
    console.log(deck)
    return (
        
        <Geral data-identifier="flashcard">
            
                {deck.map((d, index) =>

                    <Pergunta question={d.question} answer={d.answer} index={index + 1} setContador={setContador} contador={contador} />
                )}

            
        </Geral>
      
        
)
} 

const Geral = styled.div`    
    height: 365px;
    overflow: auto;
`
