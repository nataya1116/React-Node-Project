import styled from "styled-components";

const Article = styled.article`
    width: 60%;
    min-width: 400px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    box-sizing: border-box;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const TitleDiv = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(247, 244, 244);
    box-sizing: border-box;
    padding: 15px 30px;
    input {
        width: 100%;
        height: 100%;
        border: 0;
        background: none;
        border-bottom: 2px solid rgb(172, 169, 169);
    }
`

const ContentDiv = styled.div`
    width: 100%;
    height: 45vh;
    box-sizing: border-box;

    div {
        width: 100%;
        height: 100%;
        border: 0;
        border-bottom: 2px solid rgb(172, 169, 169);
        padding: 30px;
        box-sizing: border-box;

        
        textarea {
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
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

export { Article, TitleDiv, ContentDiv, Btn,  }