import React from 'react';

import { Article, TitleDiv, ContentDiv, Btn  } from '../styledComponent/board_write_cs'

const BoardWrite = () => {
  return (
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
  )
}

export default BoardWrite