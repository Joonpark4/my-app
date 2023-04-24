import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Product() {
  useEffect(() => {
    axios.get('http://test.api.weniv.co.kr/mall').then((res) => {
      console.log('axios');
      console.log(res);
      console.log(res.data);
    });
    fetch('http://test.api.weniv.co.kr/mall').then((res) => {
        console.log('fetch')
        console.log(res)
        // console.log(res.json()) // pending됩니다.
        return res.json
    }).then(data =>{
        console.log(data);
    })
  },[]);
  return(
    <div>Product</div>
  )
}

// axios 장점 및 특징
// - HTTP 메서드 지원
// - axios.get(url. conf)
// - axios.delete(url. conf)
// - axios.post(url. conf)
// - axios.put(url. conf)
// - axios.patch(url. conf)

// - 장점
// - 네트워크 상태 체크하여 상황에 따라 연결 여부 결정
// - 인증 지원
// - 보안 토큰 지원
// - 직관적