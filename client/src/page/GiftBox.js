import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { GiftReceived, GiftSent, GiftList, GiftView } from './index';
import { Section, SectionHeader, SectionTitle,  } from '../styledComponent/common_cs';
import { MenuBtn, MenuActiveBtn, MenuDiv, } from '../styledComponent/admin_cs';
import { Article, } from '../styledComponent/gift_cs';

const GiftBox = () => {
  return (
    <Section>
    <SectionHeader>
        <SectionTitle> Gift Box </SectionTitle>
    </SectionHeader>
    <Article>
        <MenuDiv>
            <MenuActiveBtn onClick={()=>window.location.href='/gift_box/received'}>받은 선물</MenuActiveBtn>
            <MenuBtn onClick={()=>window.location.href='/gift_box/sent'}>보낸 선물</MenuBtn>
        </MenuDiv>

        <Routes>
            {/* 리액트 6부터 path 중첩 안됨 */}
            <Route path='/' element={<GiftList/>} />
            <Route path='/received/' element={<GiftList/>} />
            <Route path='/sent' element={<GiftSent/>} />
            <Route path='/view' element={<GiftView/>} />
        </Routes>
        
    </Article>
  </Section>
  )
}

export default GiftBox