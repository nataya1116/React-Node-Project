import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MypageView, MypageModify } from '.';

const Mypage = () => {
  return (
    <Routes>
        {/* 리액트 6부터 path 중첩 안됨 */}
        <Route path='/' element={<MypageView/>} />
        <Route path='/view' element={<MypageView/>} />
        <Route path='/modify' element={<MypageModify/>} />
    </Routes>
  )
}

export default Mypage