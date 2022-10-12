import { Link } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
    width: 60%;
    min-width: 400px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
`
const Th = styled.th`
    padding: 15px 5px;
    background-color: rgb(247, 244, 244); 
`

const ActivateLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    padding: 0px 5px;
    margin: 5px 0px;
    color: black;
`

const BoardLink = styled(Link)`
    text-decoration: none;
    padding: 0px 5px;
    margin: 5px 0px;
    color: black;
`

const Td = styled.td`
    padding: 12px 5px;
`


const Tr = styled.tr`
    ${Td} {
        &:not(${Td}:nth-child(2)) {
            text-align : center;
        }
    }
    ${Th} {
        &:nth-child(1) {
            width : 7.5vw;
        }
        &:nth-child(2) {
            width : 40vw;
        }
        &:nth-child(3) {
            width : 15vw;
        }
        &:nth-child(4) {
            width : 20vw;
        }
        &:nth-child(5) {
            width : 7.5vw;
        }
    }
`

const Btn = styled.button`
    background-color: rgb(247, 244, 244);
    border: 0;
    width: 60px;
    height: 30px;
    box-sizing: border-box;
`

const SearchDiv = styled.div`
    display: flex;
    justify-content: right;
    select, input, ${Btn} {
        margin: 15px 2px;
        padding: 3px 5px;
    }
`


const PagenationDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align : center;
`

const Icon = styled.img`
    width: 10px;
    height: 10px;
`

const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h5 {
        font-size: 20px;
    }
`

const EctDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    div button {
        background-color: rgb(63, 62, 62);
        border: 0;
        width: 60px;
        height: 30px;
        box-sizing: border-box;
    }
`

const ContentDiv = styled.div`
    width: 100%;
    padding: 5px;
`

const ReplyDiv = styled.div`
    width: 100%;
    padding: 5px;
`

const ReplyWriterDiv = styled.div`
    width: 100%;
    padding: 5px;

    textarea {
        width: 100%;
        padding: 5px;
    }

    button {
        background-color: rgb(63, 62, 62);
        border: 0;
        width: 60px;
        height: 30px;
        box-sizing: border-box;
    }
`
// const ReplyListDiv = styled.div`
    
// `

const ReplyViewDiv = styled.div`
    div {
        &:last-child {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
        }
    }
`

// const ReplyEctDiv = 

export { Article, Th, Td, Tr, Btn, SearchDiv, PagenationDiv, ActivateLink, BoardLink, Icon }