import React from 'react'
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';
import { Article, MenuBtn, MenuActiveBtn, MenuDiv, } from '../styledComponent/admin_cs'
import { Route, Routes } from 'react-router-dom';
import { AdminUserManagement, ProductRegister } from '../page';


const Admin = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Admin </SectionTitle>
        </SectionHeader>
        <Article>
            <MenuDiv>

                <MenuActiveBtn>유저 관리</MenuActiveBtn>
                <MenuBtn>상품 등록</MenuBtn>
            </MenuDiv>    
                <Routes>
                    <Route path='/' element={<AdminUserManagement/>} />
                    <Route path='/user_management' element={<AdminUserManagement/>} />
                    <Route path='/product_register' element={<ProductRegister/>} />
                </Routes>
            
        </Article>
    </Section>
  )
}

export default Admin