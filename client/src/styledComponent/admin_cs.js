import styled from "styled-components";

const Article = styled.article`
    width: 900px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
`

const MenuDiv = styled.div`
    width: 100%;
`

const MenuBtn = styled.button`
    background-color: rgb(172, 169, 169);
    border: 0;
    height: 30px;
    margin-right : 10px;
    box-sizing: border-box;
    border-radius: 8%;
    margin-bottom: 10px;
`

const MenuActiveBtn = styled.button`
    background-color: rgb(63, 62, 62);
    color: white;
    border: 0;
    height: 30px;
    margin-right : 10px;
    box-sizing: border-box;
    border-radius: 8%;
    margin-bottom: 10px;
`
const Tr = styled.tr`
    &:last-child {
        border-bottom: 1px solid rgb(200, 200, 200);
    }
    td {
        padding: 12px 5px;
        text-align : center;
    }
    th {
        font-weight: bold;
        padding: 12px 5px;
        background-color: rgb(247, 244, 244);

        &:nth-child(1) {
            width : 17vw;
        }
        &:nth-child(2) {
            width : 15vw;
        }
        &:nth-child(3) {
            width : 20vw;
        }
        &:nth-child(4) {
            width : 20vw;
        }
        &:nth-child(5) {
            width : 10vw;
        }
        &:nth-child(6) {
            width : 10vw;
        }
        &:nth-child(7) {
            width : 10vw;
        }
        &:nth-child(8) {
            width : 10vw;
        }
    }
`

const ProductDiv = styled.div`
    width: 900px;
    height: 500px;
    background-color: rgb(247, 244, 244);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1%;

    table, tr, th, td {
        /* border : 1px solid black; */
        padding: 20px;
    }

    select {
        height: 25px;
        font-size: medium;
    }
    
    input[type=file]::file-selector-button {
        border: 0;
        background-color: rgb(63, 62, 62);
        color: white;
        height: 25px;
        box-sizing: border-box;
        border-radius: 8%;
        font-family: 'NanumSquareRound';
    }
`

const RegisterBtn = styled.button`
        border: 0;
        background-color: rgb(63, 62, 62);
        color: white;
        height: 25px;
        width: 50px;
        box-sizing: border-box;
        border-radius: 8%;
`

export { Article, MenuDiv, MenuBtn, MenuActiveBtn, Tr, ProductDiv, RegisterBtn, }