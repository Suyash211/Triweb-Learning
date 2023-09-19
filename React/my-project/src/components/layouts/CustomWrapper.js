import React from 'react'
import Styles from './CustomWrapper.module.css'

const CustomWrapper = (props) => {
  return (
    <div className={Styles.customWrapper}>
      {props.children};
    </div>
  )
}

export default CustomWrapper
