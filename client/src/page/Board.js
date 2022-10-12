import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { BoardList } from '../page';

const Board = () => {
  return (
    <Routes>
        {/* 리액트 6부터 path 중첩 안됨 */}
        <Route path='/' element={<BoardList/>} />
        <Route path='/list' element={<BoardList/>} />
    </Routes>
  )
}

export default Board