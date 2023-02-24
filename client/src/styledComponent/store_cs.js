import styled from "styled-components";
import { PagenationDiv } from "./board_list_cs";
import { Link } from 'react-router-dom';

const Article = styled.article`
    width: 900px;
    flex: 5;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding-top: 50px;
    box-sizing: border-box;

    ${PagenationDiv} {
        margin-top: 20px;
    }
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    position: relative;
`

const Product = styled.div`
    width: 200px;
    height: 250px;
    margin: 7px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2.5px solid rgb(200, 200, 200);
    border-radius: 5%;
    overflow: hidden;

    div {
        &:first-child {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            background-color: rgb(200, 200, 200);
            ${Link} img {
                width: 20px;
                height: 20px;
                margin : 5px;
            }
        }
    }
`

const Option = styled.div`
    padding-left: 30px;

    select {
        height: 25px;
        margin-right : 5px;
        border: 1px solid rgb(200, 200, 200);
        border-radius: 8%
    }
`

const OptionBtn = styled.button`
    background-color: rgb(200, 200, 200);
    border: 0;
    height: 25px;
    margin-right : 5px;
    box-sizing: border-box;
    border-radius: 3px;
`

const OptionActiveBtn = styled.button`
    background-color: rgb(63, 62, 62);
    color: white;
    border: 0;
    height: 25px;
    margin-right : 5px;
    box-sizing: border-box;
    border-radius: 3px;
`

const Detail = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex : 9;

    &>img {
        width: 80px;
        height: 80px;
        margin-top: 20px;
    }

    h5 {
        font-weight: bold;
        margin-top : 15px;
    }

    span {
        margin-top : 12px;
    }

    button {
        font-size: small;
        width: 40px;
        height: 28px;
        border: 0;
        background-color: rgb(63, 62, 62);
        color: white;
        box-sizing: border-box;
        border-radius: 3px;
        margin : 12px 3.5px 0px 3.5px;
    }
`
export { Article, ProductList, Product, Detail, Option, OptionBtn, OptionActiveBtn, }