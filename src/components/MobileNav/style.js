import styled from "styled-components"

export const Wrapper = styled.div`
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.2);

    .logo-wrap {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }

    .close-btn {
        display: inline;
        float: right;
        margin-right: 10px;
        margin-top: 10px;
        border: 1px solid #8c8888;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
        color: #1d1b1b;
    }

    .main-pages {
        margin-top: 30px;
        margin-left: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 3px;
    }

    .general {
        margin-top: 30px;
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
`