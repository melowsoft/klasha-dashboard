import styled from "styled-components"
import { breakpoint } from "../../assets/style-utils"

export const Wrapper = styled.div`
    width: 15%;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.2);

    .brand-logo {
        margin-top: 40px;
        margin-left: 40px;
    }

    .main-pages {
        margin-top: 50px;
        margin-left: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 3px;
    }
    .general {
        margin-top: 40px;
        margin-left: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 3px;
    }

    .sidebar-menu .menu-item {
        width: 100%;
        padding-left: 40px;
        display: flex;
        margin-top: 10px;
        height: 52px;
        align-items: center;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.1px;
        color: #A6ABB2;
        cursor: pointer;
    }

    .sidebar-menu .menu-item .icon {
        margin-right: 12px;
    }

    .sidebar-menu .dashboard {
        background: #FFFFFF;
    }
    .sidebar-menu .balance {
        background: #F5F5F5;
        color:  #2A2A2A;
    }

    ${
        breakpoint.md`
        display: none;
        `
    }
`