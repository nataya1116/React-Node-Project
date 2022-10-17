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
    width: 100%;

    tr:last-child {
        border-bottom: 1px solid rgb(200, 200, 200);
    }

    th {
        font-weight: bold;
        padding: 15px 5px;
        background-color: rgb(247, 244, 244);

        &:nth-child(1) {
            width : 10%;
        }
        &:nth-child(2) {
            width : 20%;

        }
        &:nth-child(3) {
            width : 10%;
        }
        &:nth-child(4) {
            width : 5%;
        }
    }

    td {
        padding: 12px 5px;
        
        &:not(td:nth-child(2)) {
            text-align : center;
        }
        &:nth-child(2) {
            display: block;
            width : 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
`;

const ViewTable = styled.table`
    width: 100%;

    tr:last-child {
        border-bottom: 1px solid rgb(200, 200, 200);
    }

    th {
        text-align: left;
        padding: 15px 15px;
        background-color: rgb(247, 244, 244);

        &:first-child {
            width: 10%;
            font-weight: bold;
        }
    }

    tr:nth-child(3) {
        td {
            padding: 30px;
            width: 100%;
            text-align: center;

            img {
                width: 80px;
                height: 80px;
            }
        }
    }

    tr:nth-child(4) {
        td {
            padding: 30px 15px;
        }
    }

    tr:nth-child(5) {
        text-align: center;
        button {
            margin: 20px 5px 30px 5px;
        }
    }
    
`

export { Article, ListTable, ViewTable }