import React from 'react'
import { Link } from 'react-router-dom'

function SignUpComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기 </Link>
      </button>
      회원가입 화면 입니다<br />

      아이디가 있으면 로그인 하세요
      <button>
        <Link to='/signin'>로그인 페이지</Link>
      </button>
      <br />
      <textarea type='text' placeholder='아이디 입력'></textarea>
      <textarea type='text' placeholder='비밀번호 입력'></textarea>
      <button>
        <Link to='/signin'>회원가입 완료</Link>
      </button>
    </div>
  )
}

export default SignUpComponent