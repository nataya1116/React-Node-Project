import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';

const Main = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Memory </SectionTitle>
            <SectionTitle> Game </SectionTitle>
        </SectionHeader>
        <Article></Article>
    </Section>
  )
}

export default Main