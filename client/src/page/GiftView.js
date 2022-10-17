import React from 'react'
import { ViewTable } from '../styledComponent/gift_cs';
import { Btn } from '../styledComponent/common_cs';

const GiftView = () => {
  return (
    <>
    <ViewTable>
      <tr>
        <th>보낸사람</th>
        <th>아이디(닉네임)</th>
      </tr>
      <tr>
        <th>보낸날짜</th>
        <th>2022/10/17</th>
      </tr>

      <tr>
        <td colSpan='2'>
          <img src={require('../img/card/black-7629052.png')} />
          {/* 메세지이다메세지이다adfgagfaeghdfhafdhafdhadhaefdahasdhadfhaedfh */}
        </td>
      </tr>

      <tr>
        <td colSpan='2'>
          메세지이다메세지이다adfgagfaeghdfhafdhafdhadhaefdahasdhadfhaedfh
        </td>
      </tr>

      <tr>
        <td colSpan='2'>
          <Btn>수락</Btn>
          <Btn>거절</Btn>
          <Btn>목록</Btn>
        </td>
      </tr>
    </ViewTable>

    
    </>
  )
}

export default GiftView