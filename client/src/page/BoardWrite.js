import React from 'react';
import { Section, SectionHeader, SectionTitle } from '../styledComponent/common_cs';

import { Article, TitleDiv, ContentDiv, Btn  } from '../styledComponent/board_write_cs'

const BoardWrite = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Free Boards </SectionTitle>
        </SectionHeader>
        <Article>
            <div>

                <TitleDiv>
                  <input></input>
                </TitleDiv>

                
                <ContentDiv>
                  <div>
                    <textarea></textarea>
                  </div>
                </ContentDiv>
                
                <Btn>저장</Btn>
            </div>
        </Article>
    </Section>
  )
}

export default BoardWrite