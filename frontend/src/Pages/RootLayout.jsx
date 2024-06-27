import React, { Fragment, useState } from 'react'
import LeftNav from '../Navigation/LeftNav'
import { Outlet } from 'react-router-dom'
import classNames from 'classnames';

const RootLayout = () => {
    const [close, setClose] = useState(true);
  return (
    <Fragment>
      <LeftNav close={close} setClose={setClose}/>
      <section className={classNames("home-section transition-all duration-500 ease-in-out",{
            "closed": close
        })}>
        <Outlet/>
        </section>
      
    </Fragment>
  )
}

export default RootLayout