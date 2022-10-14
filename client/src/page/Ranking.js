import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';

import { Div, Ol } from '../styledComponent/ranking_cs';

const Ranking = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Ranking </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>
                <Ol>
                    <li><span>아이디(닉네임)rkrkrrkrkrkrrkrkrkrkrkrkrkrkrkrk</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                    <li><span>아이디(닉네임)</span> <span>1000회</span> <span>100초</span></li>
                </Ol>
            </Div>
        </Article>
    </Section>
  )
}

export default Ranking