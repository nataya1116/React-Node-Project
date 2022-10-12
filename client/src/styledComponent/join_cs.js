import styled from 'styled-components';

const Div = styled.div`
    font-family: 'Jeju Gothic', sans-serif;
    width: 20vw;
    min-width: 400px;
    height: 20vw;

    margin-top: 25px;

    background-color: rgb(247, 244, 244);

    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Td = styled.td`
    padding: 10px 10px;
`

const Input = styled.input`
    width: 200px;
    height: 25px;
    border-radius: 5%;
    border: 0;
    box-sizing: border-box;
`

const Btn = styled.button`
    font-size: small;
    width: 80px;
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 8%;
    margin: 20px 0px;
`

const LargeBtn = styled.button`
    font-size: small;
    width: 120px;
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 8%;
    margin: 10px 0px;
`

const CheckTd = styled.td`
    color: red;
    height: 20px;
`

export { Div, Td, Input, Btn, LargeBtn, CheckTd };