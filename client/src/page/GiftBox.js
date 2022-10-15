import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';

const GiftBox = () => {
  return (
    <Section>
    <SectionHeader>
        <SectionTitle> Gift Box </SectionTitle>
    </SectionHeader>
    <Article>
      <div>

        <Routes>
            {/* 리액트 6부터 path 중첩 안됨 */}
            {/* <Route path='/' element={<MypageView/>} />
            <Route path='/view' element={<MypageView/>} />
            <Route path='/modify' element={<MypageModify/>} /> */}
        </Routes>
        
      </div>
    </Article>
  </Section>
  )
}

export default GiftBox