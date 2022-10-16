import React from 'react'
import { ListTable } from '../styledComponent/gift_cs';

const GiftReceived = () => {
  return (
    <ListTable>
      <tr>
        <th>상태</th>
        <th>보낸 사람</th>
        <th>카드 스킨</th>
        <th>보낸 날짜</th>
      </tr>
    </ListTable>
  )
}

export default GiftReceived