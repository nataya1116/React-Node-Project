import styled from "styled-components";

const Article = styled.article`
    width: 900px;
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
`

const ListTable = styled.table`
    tr:last-child {
        border-bottom: 1px solid rgb(200, 200, 200);
    }

    td {
        padding: 12px 5px;
        
        &:not(td:nth-child(3)) {
            text-align : center;
        }
        &:nth-child(3) {
            display: block;
            width : 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    th {
        font-weight: bold;
        padding: 15px 5px;
        background-color: rgb(247, 244, 244);

        &:nth-child(1) {
            width : 7.5vw;
        }
        &:nth-child(2) {
            width : 40px;

        }
        &:nth-child(3) {
            width : 15vw;
        }
    }
`;

export { Article, ListTable }