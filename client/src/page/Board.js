import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { BoardView, BoardList } from '../page';

const Board = () => {
  return (
    <Routes>
        {/* 리액트 6부터 path 중첩 안됨 */}
        <Route path='/' element={<BoardList/>} />
        <Route path='/list' element={<BoardList/>} />
        <Route path='/view' element={<BoardView/>} />
    </Routes>
  )
}

export default Board