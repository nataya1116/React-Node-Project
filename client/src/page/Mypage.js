import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MypageView, MypageModify } from './index';
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div } from '../styledComponent/join_cs';

const Mypage = () => {
  return (
    <Section>
      <SectionHeader>
          <SectionTitle> My Page </SectionTitle>
      </SectionHeader>
      <Article>
        <Div>

          <Routes>
              {/* 리액트 6부터 path 중첩 안됨 */}
              <Route path='/' element={<MypageView/>} />
              <Route path='/read' element={<MypageView/>} />
              <Route path='/modify' element={<MypageModify/>} />
          </Routes>
          
        </Div>
      </Article>
    </Section>
    
  )
}

export default Mypage