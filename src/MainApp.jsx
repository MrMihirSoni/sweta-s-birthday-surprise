import React from 'react'
import { Navbar } from './components/Navbar'
import { SideDrawer } from './components/SideDrawer'
import { Body } from './components/Body'
import { Message } from './components/Message'

export const MainApp = () => {
  return (
    <>
    <Navbar/>
    <SideDrawer/>
    <Body/>
    <Message/>
    </>
  )
}
