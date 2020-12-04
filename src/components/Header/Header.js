import React from 'react'
import {Wrapper} from "./style"
import NOTIFICATION from "../../assets/notification.svg"
import AVATAR from "../../assets/avatar.svg"

export default function Header({switcher}) {
    return (
        <Wrapper>
            <div className="title-wrap">
            <button className="close-btn" onClick={() => switcher()}>
                <div className="fa fa-bars"></div>
            </button>
            <div>
                <h3>Balances</h3>
                <p>Today, 19th October 2020</p>
            </div>
            </div>

            <div className="user-info">
                <img src={NOTIFICATION} className="notification" alt="notification"/>
                <img src={AVATAR} alt="avatar" className="avatar" />
            </div>
        </Wrapper>
    )
} 