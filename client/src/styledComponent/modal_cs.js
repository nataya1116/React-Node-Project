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
    width: 500px;
    height: 500px;
    /* top: 50px; */
    background-color: white;
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
/* 
    div {
        border: 1px solid black;
    } */
    
    &>div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0 10px 0;
        box-sizing: border-box;
        position: relative;

        h5 {
            font-size: larger;
            font-weight: bold;
        }

        img {
            position: absolute;
            right: 10px;
        }
    }

    &>div:nth-child(2) {
        flex: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        input {
            width: 80%;
            height: 50%;
            border: 0px;
            border-bottom: 2px solid gray;
            font-size: medium;
            padding: 5px;
            box-sizing: border-box;
        }

        button {
            background : none;
            border: 0;
        }

    }
    
    &>div:nth-child(3) {
        padding: 17px;
        flex: 6.5;
        box-sizing: border-box;
        
        div {
            width: 465px;
            height: 298px;
            overflow: auto;
            box-sizing: border-box;
            li {
                font-size: medium;
                padding : 10px;
            }
        }
        
    }

    &>div:last-child {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 0px 10px 0px;
        box-sizing: border-box;
    }
`;

const ActiveLi = styled.li`
    font-size: medium;
    padding : 10px 0;
    background-color: rgb(247, 244, 244);
    box-sizing: border-box;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin: 5px;
`

const Btn = styled.button`
    font-size: medium;
    width: 40px;
    height: 28px;
    border: 0;
    background-color: rgb(63, 62, 62);
    color: white;
    box-sizing: border-box;
    border-radius: 3px;
    margin-left: 5px;
`

export { Background, Gift, Icon, ActiveLi, Btn, }
