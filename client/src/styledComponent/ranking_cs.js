import styled from "styled-components";
import '../fonts/fonts.css';


const Div = styled.div`
    width: 20vw;
    min-width: 400px;
    height: 20vw;
    overflow: auto;

    margin-top: 25px;

    background-color: rgb(247, 244, 244);

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    /* font-family: 'GangwonEduSaeeum_OTFMediumA'; */
    font-family: 'Jeju Gothic', sans-serif;
    font-size: 25px;
    color: rgb(63, 62, 62);
    border-radius: 5%;

    box-sizing: border-box;
`

const Ol = styled.ol`
    margin-left: 20%;
    margin-top: 20%;
    list-style-type: decimal;
`

export { Div, Ol }