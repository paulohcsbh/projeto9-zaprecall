import { useState } from "react"
import Perguntas from "./Perguntas"
import Rodape from "./Rodape"
import styled from "styled-components"
import logo from "./img/logo.png"


export default function TelaPrincipal({deck}) {    
    const[contador, setContador] = useState(0)
    return (
        <Container>
            <ContainerTopo>
                <Logo src={logo}></Logo>
                <Nome>ZapRecall</Nome>
            </ContainerTopo>
            <Perguntas deck={deck} contador={contador} setContador={setContador}/>
            <Rodape deck={deck} contador={contador}/>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 635px;
    background-color: #fb6b6b;
    border: 1px solid #dbdbdb;
    
`
const ContainerTopo = styled.div`
    display: flex;
    margin-left: 52px;
    margin-bottom: 59px;

`
const Logo = styled.img`
    width: 52px;
    height: 60px;
    margin-top: 42px;

`
const Nome = styled.h1`   
    justify-content: center
    width: 203.18px;
    height: 44px;
    font-size: 36px;    
    margin-top: 48px;
    padding: 5px 20px;
    color: #ffffff;
    font-family: 'Righteous', cursive;
    font-weight: 400;
`

