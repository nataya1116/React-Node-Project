import styled from 'styled-components';

const Div = styled.div`
    font-family: 'Jeju Gothic', sans-serif;
    min-width: 300px;
    min-height: 250px;
    padding: 30px;

    margin-top: 25px;

    background-color: rgb(247, 244, 244);

    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CheckTd = styled.td`
    color: red;
    height: 20px;
    padding: 0 10px 10px 10px;
`

const Tr = styled.tr`
    td:not(${CheckTd}) {
        padding: 10px;
        white-space: nowrap;
        height: 25px;
        vertical-align: middle;
    }
    
`

const Input = styled.input`
    width: 200px;
    height: 25px;
    border-radius: 5%;
    border: 0;
    box-sizing: border-box;
    /* color: ${(props) => props ? props.color : "black"}; */
`

const Btn = styled.button`
    font-size: small;
    width: 80px;
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 3px;
    /* margin: 20px 0px; */
`

const LargeBtn = styled.button`
    font-size: small;
    width: 100px;
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 3px;
    margin: 10px 0px;
`

export { Div, Tr, Input, Btn, LargeBtn, CheckTd };