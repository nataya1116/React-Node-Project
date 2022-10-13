import styled from "styled-components";

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0 ,0,0, 0.2);
`;

const Gift = styled.div`
    position  : absolute;
    width: 400px;
    height: 400px;
    /* top: 50px; */
    background-color: white;
    border-radius: 2%;
`;

export { Background, Gift }
