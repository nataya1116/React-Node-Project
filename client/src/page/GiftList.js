import React from 'react'
import { ListTable } from '../styledComponent/gift_cs';

const GiftList = () => {
  return (
    <ListTable>
        <tr>
        <th>보낸 날짜</th>
        <th>메세지</th>
        <th>보낸 사람</th>
        <th>상태</th>
        </tr>

        <tr>
          <td>보낸 날짜</td>
          <td>메세지</td>
          <td>보낸 사람</td>
          <td>상태</td>
        </tr>
    </ListTable>
  )
}

export default GiftList