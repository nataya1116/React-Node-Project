import React from 'react'
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';

import { Article, Tr, Btn, SearchDiv, PagenationDiv, ActivateLink, BoardLink, Icon } from '../styledComponent/board_list_cs'

// import { LeftIcon, RightIcon } from '../img/icon'

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
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                      <th>조회</th>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
                    </Tr>

                    <Tr>
                      <td>1</td>
                      <td><BoardLink to="/gg">제목</BoardLink></td>
                      <td>작성자</td>
                      <td>221008</td>
                      <td>0</td>
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
                  <BoardLink> <Icon src={process.env.PUBLIC_URL+'/img/icon/icon-left.png'}/> </BoardLink>
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
                  <BoardLink> <Icon src={process.env.PUBLIC_URL+'/img/icon/icon-right.png'} /> </BoardLink>
                </PagenationDiv>

            </div>
        </Article>
    </Section>
  )
}

export default BoardList