import React, { useContext } from 'react'
import { NavbarDrawerContext } from '../context/NavbarDrawerContext'

export const Message = () => {
    const { setShowNavMenu } = useContext(NavbarDrawerContext)
    return (
        <div className="message" onMouseEnter={() => setShowNavMenu(false)}>
            <div className="messageContent">Hi Miss. Cute<br />A very Happy Birthday to you &#129395;<br /><br />If I remember correctly...<br />We first met in class 11th<br />And at that time I never expected that<br />We can be a very good friends as now<br /><br />Do you remember<br />the teacher's day celebrations of class 11th?<br />I think at that day<br />we talked for the first time<br />And what we talked<br />"Go and paste this ribbon there" &#128517;<br /><br />But I cannot forget that day<br />I think our friendship started from that day...<br /><br /><br />Also I want to say sorry to you<br />for not adding much photos of you &#128517;<br />Actually I was confused about the layout for this<br />But I hope you liked it.<br /><br /><br />And one last thing ...<br />Where is my Paneer Chilli<br />I am waiting for it for I don't know how many years...<br />Aaj to khilaa do &#129402; &#129402; &#129402;<br /><br /><br />and A very Happy Birthday again &#128522;</div>
        </div>
    )
}
