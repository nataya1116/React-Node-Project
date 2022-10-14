import { Link } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
    width: 60%;
    min-width: 400px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;

    table {
        width: 900px;
    }
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

    table {
        table-layout: fixed;
    }
`

const BoardLink = styled(Link)`
    text-decoration: none;
    padding: 0px 5px;
    margin: 5px 0px;
    color: black;
`

const Tr = styled.tr`
    &:last-child {
        border-bottom: 1px solid rgb(200, 200, 200);
    }
    td {
        padding: 12px 5px;
        
        &:not(td:nth-child(2)) {
            text-align : center;
        }
        &:nth-child(2) {
            display: block;
            width : 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    th {
        font-weight: bold;
        padding: 12px 5px;

        &:nth-child(1) {
            width : 7.5vw;
        }
        &:nth-child(2) {
            width : 40px;

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


export { Article, Th, Tr, Btn, SearchDiv, PagenationDiv, ActivateLink, BoardLink, Icon }