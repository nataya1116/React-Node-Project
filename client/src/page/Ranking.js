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
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                    <li>가가 횟수1 시간 1초</li>
                </Ol>
            </Div>
        </Article>
    </Section>
  )
}

export default Ranking