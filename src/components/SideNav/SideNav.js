import React from 'react'
import { Wrapper } from "./style"
import LOGO from "../../assets/logo.svg"
import MENULOGO from "../../assets/menu-icon.svg"
import WALLETICON from "../../assets/wallet-icon.svg"
import CUSTOMERS from "../../assets/customers.svg";
import ANALYTICS from "../../assets/activity.svg";
import SETTINGS from "../../assets/settings.svg";
import TEAM from "../../assets/star.svg";
import CONTACT from "../../assets/contact.svg";
import LOGOUT from "../../assets/logout.svg";

export default function SideNav() {
    return (
       <Wrapper>
           <img src={LOGO} className="brand-logo"/>

           <div className="main-pages">
               Main pages
           </div>

           <div className="sidebar-menu">
                <div className="menu-item dashboard">
                    <img src={MENULOGO} className="icon" alt="menu logo"/>
                    <div>
                        Dashboard
                    </div>
                </div>

                <div className="menu-item balance">
                     <img src={WALLETICON} className="icon" alt="wallet logo"/>
                    <div>
                    Balances
                    </div>
                </div>
                <div className="menu-item">
                     <img src={CUSTOMERS} className="icon" alt="team logo"/>
                    <div>
                   Customers
                    </div>
                </div>
                <div className="menu-item">
                     <img src={ANALYTICS} className="icon" alt="analytics logo"/>
                    <div>
                    Analytics
                    </div>
                </div>

           </div>
            <div className="general">
              General
           </div>   

           <div className="sidebar-menu">
                <div className="menu-item">
                     <img src={SETTINGS} className="icon" alt="settings logo"/>
                    <div>
                   Settings
                    </div>
                </div>
                <div className="menu-item">
                     <img src={TEAM} className="icon" alt="team logo"/>
                    <div>
                    Team
                    </div>
                </div>
                <div className="menu-item">
                     <img src={CONTACT} className="icon" alt="contact logo"/>
                    <div>
                    Contact
                    </div>
                </div>
                <div className="menu-item">
                     <img src={LOGOUT} className="icon" alt="logout logo"/>
                    <div>
                    Logout
                    </div>
                </div>

           </div>

       </Wrapper>
    )
}