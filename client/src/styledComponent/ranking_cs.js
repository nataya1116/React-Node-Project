import styled from "styled-components";
import '../fonts/fonts.css';


const Div = styled.div`
    width: 700px;
    height: 480px;
    overflow: auto;

    padding-left: 110px;

    background-color: rgb(247, 244, 244);

    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* font-family: 'GangwonEduSaeeum_OTFMediumA'; */
    font-family: 'Jeju Gothic', sans-serif;
    font-size: 25px;
    color: rgb(63, 62, 62);
    border-radius: 5%;

    box-sizing: border-box;
`

const Ol = styled.ol`
    list-style-type: decimal;

    span:first-child {
        width: 300px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    span:not(:first-child) {
        width: 120px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export { Div, Ol }