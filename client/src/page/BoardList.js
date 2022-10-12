import React from 'react'
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';

import { Article, Th, Td, Tr, Btn, SearchDiv, PagenationDiv, ActivateLink, BoardLink, Icon } from '../styledComponent/board_cs'

import { LeftIcon, RightIcon } from '../img/icon'

const BoardList = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Free Boards </SectionTitle>
        </SectionHeader>
        <Article>
            <div>

                <table>
                    <Tr>
                      <Th>번호</Th>
                      <Th>제목</Th>
                      <Th>작성자</Th>
                      <Th>작성일</Th>
                      <Th>조회</Th>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>

                    <Tr>
                      <Td>1</Td>
                      <Td><BoardLink to="/gg">제목</BoardLink></Td>
                      <Td>작성자</Td>
                      <Td>221008</Td>
                      <Td>0</Td>
                    </Tr>            
                </table>

                <SearchDiv>
                  <select>
                      <option value="title" >제목</option>
                      <option value="content" >내용</option>
                      <option value="userId" >작성자</option>
                  </select>
                  <input/>
                      <Btn>검색</Btn>
                </SearchDiv>
                
                <PagenationDiv>
                  <BoardLink> <Icon src={LeftIcon}/> </BoardLink>
                  <ActivateLink> 1 </ActivateLink>
                  <BoardLink> 2 </BoardLink>
                  <BoardLink> 3 </BoardLink>
                  <BoardLink> 4 </BoardLink>
                  <BoardLink> 5 </BoardLink>
                  <BoardLink> 6 </BoardLink>
                  <BoardLink> 7 </BoardLink>
                  <BoardLink> 8 </BoardLink>
                  <BoardLink> 9 </BoardLink>
                  <BoardLink> 10 </BoardLink>
                  <BoardLink> <Icon src={RightIcon} /> </BoardLink>
                </PagenationDiv>

            </div>
        </Article>
    </Section>
  )
}

export default BoardList