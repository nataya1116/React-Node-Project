import styled from 'styled-components';
import '../fonts/fonts.css';


const HeaderWap = styled.header`
    width: 60%;
    min-width: 400px;
    padding-top: 10px;

    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    box-sizing: border-box;
`
const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin: 5px;   
`

const HeaderTitle = styled.h3`
    font-family: 'MaplestoryOTFLight';
    font-size: 60px;
    color: rgb(63, 62, 62);
`

export { HeaderWap, Icon, HeaderTitle }