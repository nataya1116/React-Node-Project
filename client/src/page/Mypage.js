import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Td, Btn } from '../styledComponent/join_cs';

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

                <Btn>정보 수정</Btn>
            </Div>
        </Article>
    </Section>
  )
}

export default Mypage