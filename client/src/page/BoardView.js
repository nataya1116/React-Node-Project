import React from 'react';
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';

import { Article, TitleDiv, EctDiv, ContentDiv, ReplyDiv, ReplyWriterDiv, ReplyViewDiv, Btn  } from '../styledComponent/board_view_cs'

const BoardList = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Free Boards </SectionTitle>
        </SectionHeader>
        <Article>
            <div>

                <TitleDiv>
                  <h5>제목</h5>
                </TitleDiv>

                
                <ContentDiv>
                  <p>내용</p>
                </ContentDiv>

                <EctDiv>
                  <div>
                      <span>작성자</span>
                      <span>작성날짜</span>
                      <span>조회수</span>
                  </div>
                  <div>
                      <Btn>수정</Btn>
                      <Btn>삭제</Btn>
                  </div>
                </EctDiv>


                <ReplyDiv>
                  <ReplyWriterDiv>
                    <div>
                      <textarea>댓글 작성</textarea>
                    </div>
                    <div>
                      <Btn>작성</Btn>
                    </div>
                  </ReplyWriterDiv>
                </ReplyDiv>

                <div>
                  <ReplyViewDiv>
                    <div>
                        <span>작성자</span>
                        <span>작성날짜</span>
                    </div>
                    
                    <div>
                        <p>
                            내용
                        </p>
                    </div>
                    <div>
                        <Btn>수정</Btn>
                        <Btn>삭제</Btn>
                    </div>
                  </ReplyViewDiv>
                </div>
            </div>
        </Article>
    </Section>
  )
}

export default BoardList