import React from 'react';
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Td, LargeBtn } from '../styledComponent/join_cs';

const Mypage = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> My Page </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>

                <table>
                    <tr>
                        <Td>아이디</Td>
                        <Td>아이디</Td>
                    </tr>

                    <tr>
                        <Td>닉네임</Td>
                        <Td>닉네임</Td>
                    </tr>

                </table>

                <LargeBtn>회원 정보 수정</LargeBtn>
                <LargeBtn>카드 스킨 수정</LargeBtn>
            </Div>
        </Article>
    </Section>
  )
}

export default Mypage