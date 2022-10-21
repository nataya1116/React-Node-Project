import styled from 'styled-components';
import '../fonts/fonts.css';

const HeaderWap = styled.header`
    width: 60%;
    min-width: 400px;
    padding-top: 10px;

    flex: 1;
    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
    div {
        display: flex;
        a {
            display: inline-block;
            height: 62px;
            display: flex;
            align-items: center;
            text-decoration: none;
            span {
                color : rgb(63, 62, 62);
                font-size: large;
                font-weight: bold;
            }
        }
    }
`
const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin: 10px;   
`

const HeaderTitle = styled.h3`
    font-family: 'MaplestoryOTFLight';
    font-size: 60px;
    color: rgb(63, 62, 62);
`

export { HeaderWap, Icon, HeaderTitle }