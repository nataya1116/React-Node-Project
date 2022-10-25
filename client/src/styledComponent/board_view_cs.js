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
`
const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: rgb(247, 244, 244);
    box-sizing: border-box;
    h5 {
        font-size: 20px;
    }
`
const Btn = styled.button`
    background-color: rgb(63, 62, 62);
    border: 0;
    width: 60px;
    height: 30px;
    color: white;
    box-sizing: border-box;
`
const EctDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    
    border-bottom: 1px solid rgb(172, 169, 169);

    div ${Btn} {
        box-sizing: border-box;
        margin-right: 5px;
    }

    div span {
        box-sizing: border-box;
        margin-left: 20px;
    }
`

const ContentDiv = styled.div`
    width: 100%;
    padding: 60px 20px;
    box-sizing: border-box;
`

const ReplyDiv = styled.div`
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;
`

const ReplyWriterDiv = styled.div`
    width: 100%;
    padding: 5px 0;
    box-sizing: border-box;

    div {
        &:first-child{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 20px 5px 5px 5px;
            box-sizing: border-box;
            textarea {
                width: 100%;
                height: 5vh;
                /* padding: 5px; */
                margin: 5px;
                box-sizing: border-box;
            }
        }
        
    }

    div {
        &:last-child{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 5px 5px 5px 20px;
            box-sizing: border-box;
            ${Btn} {
                box-sizing: border-box;
            }
        }
    }
`

const ReplyViewDiv = styled.div`
    width: 100%;
    border-bottom: 1px solid rgb(172, 169, 169);
    div {
        &:first-child {
            width: 100%;
            padding: 20px 5px 5px 5px;
            box-sizing: border-box;
            span {
                box-sizing: border-box;
                margin-right: 5px;
            }
            
        }
    }

    div {
        &:nth-child(2) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 30px 20px;
        }
    }


    div {
        &:last-child {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            box-sizing: border-box;
            padding: 5px;
            ${Btn} {
                margin-right: 5px;
                box-sizing: border-box;
            }

        }
    }
`

const PageNav = styled.div`
    padding: 60px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    
    a {
        text-decoration: none;
        color: #4e4e4e;
        font-size: medium;

        &:nth-child(2) {
            font-weight: bold;
            color: black;
        }
    }
`

export { Article, TitleDiv, EctDiv, ContentDiv, ReplyDiv, ReplyWriterDiv, ReplyViewDiv, Btn, PageNav  }