import React from 'react';
import { ProductDiv, RegisterBtn, } from '../styledComponent/admin_cs';

const ProductRegister = () => {
  // 카데고리 설정하고 이미지, 포인트까지 숫자는 mysql ai 값 (8269090) 
  // 포인트 부분에는 숫자만 받을 수 있도록 처리해줘야 함

  // 이미지 업로드할때 파일명은 카테고리+"-"+Date.now().png이고 DB에 숫자 저장할때는 Date.now()의 앞자리 6자리까지만
  return (
    <ProductDiv>
        <table>
          <tr>
            <th>카테고리</th>
            <td>
              <select>
                <option>-</option>
                <option>black</option>
                <option>color</option>
                <option>gradation</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>이미지</th>
            <td>
              <input type='file' accept='.png,.jpg,.gif'></input>
            </td>
          </tr>

          <tr>
            <th>포인트</th>
            <td>
              <input></input>
              <span>p</span>
            </td>
          </tr>

        </table>
        <RegisterBtn>등록</RegisterBtn>
      
    </ProductDiv>
  )
}

export default ProductRegister