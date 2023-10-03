import React from 'react'
import S from './header.module.css'
// import PlusIcon from '../../../public/icon/plusIcon.svg'
export const Header = () => {
  return (
  <header className = {S.header}>
    <h1 className = {S.logo}>Finanças +</h1>
   {/* <img src={PlusIcon} alt="" /> */}
    <nav>
        <ul className={S.menu}>
            <li><a className={S.link} href="">Home</a></li>
            <li><a className={S.link} href="">Quem Somos</a></li>
            <li><a className={S.link} href="">Entrar</a></li>
            <li><button className={S.btn_entrar}>Criar Conta</button></li>
        </ul>
    </nav>
  </header>
  )
}

export default Header