import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

const LoginLink = styled(Link)`
    font-family: 'Jeju Gothic', sans-serif;
    color: rgb(63, 62, 62);
    margin: 10px 0px;
`

const FindDiv = styled.div`
    display: inline-block;
`

const FindLink = styled(Link)`
    font-family: 'Jeju Gothic', sans-serif;
    color: rgb(63, 62, 62);
    text-decoration: none;
`

export { Btn, LoginLink, FindDiv, FindLink };