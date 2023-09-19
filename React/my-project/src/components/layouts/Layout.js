import React from 'react'
import MainMenu from './MainMenu'
import Styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={Styles.main}>
        <main> <MainMenu /> </main>
        {props.children}
    </div>
  )
}

export default Layout
