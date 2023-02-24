import styled from 'styled-components';
import '../fonts/fonts.css';

const Warpper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    div, th, tr, td, input, h4, h5, li, button, span, option {
        font-family: 'NanumSquareRound';
    } 
`

const Section = styled.section`
    width: 60%;
    min-width: 400px;
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SectionHeader = styled.header`
    width: 60%;
    min-width: 400px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SectionTitle = styled.h3`
    font-family: 'MaplestoryOTFLight';
    font-size: 60px;
    color: rgb(63, 62, 62);
`
const Article = styled.article`
    width: 60%;
    min-width: 400px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Btn = styled.button`
    font-size: small;
    width: ${(props) => props ? props.width : "80px"};
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 3px;
    margin: 20px 0px;
`

export { Warpper, Section, SectionHeader, SectionTitle, Article, Btn }