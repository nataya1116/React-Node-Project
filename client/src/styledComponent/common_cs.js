import styled from 'styled-components';
import '../fonts/fonts.css';

const Warpper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export { Warpper, Section, SectionHeader, SectionTitle, Article }