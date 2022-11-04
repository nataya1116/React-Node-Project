import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';
import { BoardView, BoardList, BoardWrite, BoardUpdate } from '../page';
import { useDispatch } from 'react-redux';
import { BOARD_URL } from '../redux/common';

const Board = ({boardName}) => {
  const dispatch = useDispatch();

  const boardUrl = boardName === "Free Board" ? "free_board" : boardName === "Notice Board" ? "notice_board" : null;
  dispatch({type : BOARD_URL, payload:{ boardUrl }});
  
  return (
    <Section>
      <SectionHeader>
          <SectionTitle> {boardName} </SectionTitle>
      </SectionHeader>
      <Routes>
          {/* 리액트 6부터 path 중첩 안됨 */}
          <Route path='/list/:page/:perPage' element={<BoardList/>} />
          <Route path='/list/:page/:perPage/:searchKey/:searchWord' element={<BoardList/>} />
          <Route path='/read/:offset' element={<BoardView/>} />
          <Route path='/read/:offset/:searchKey/:searchWord' element={<BoardView/>} />
          <Route path='/write' element={<BoardWrite/>} />
          <Route path='/update/:offset' element={<BoardUpdate/>} />
          <Route path='/modify' element={<BoardWrite/>} />
      </Routes>
    </Section>
  )
}

export default Board