import Pergunta from "./Pergunta"

export default function Perguntas(props) {
    const { deck, setContador, contador } = props
    
return(
    <>
        {deck.map((d,index) =>
        <Pergunta deck={deck}  setContador={setContador} contador={contador}/>
        )}
        </>
        
)
}   