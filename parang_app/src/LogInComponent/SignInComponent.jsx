import React from 'react'
import { Link } from 'react-router-dom'
import MainPage from '../MainComponent/MainPageComponent'
import { NavBarComponent } from '../ComponentList/NavBarComponent'

function SignInComponent() {
  return (

    <div>
      <button>
        <Link to='/'>홈으로 가기 </Link>
      </button>
      로그인 화면 입니다<br />

      아이디없으면 회원가입 하세요
      <button>
        <Link to='/signup'>회원가입 페이지</Link>
      </button>
      <button>
        <Link to='/'>로그인 완료</Link>
      </button>
    </div>

  )
}

export default SignInComponent