import styled from "styled-components"
import {breakpoint} from "../../assets/style-utils"

export const Wrapper = styled.div`
        max-width: 685px;
        height: 176px;
        margin-top: 60px;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        
         .total-section {
        width: 55%;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;

        .box-title {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #2C665D;
        }

        .line {
            border: 1px solid #EBEBEB;
        }
    }
     .funds-on-hold-section {
        width: 45%;
        background: #F5F5F5;
        border-left: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 10px;
        padding-top: 25px;
        padding-left: 20px;
        padding-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .total-section .top-flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .currency {
            margin-bottom: 15px;
            background: #F5F5F5;
            border-radius: 4px;
            width: 100%;
            height: 25px;
            padding-left: 10px;
            border: none;
           
        }
    }

    .currency-wrap {
        width: 68px;
       
    }

    .total-section .numbers-section {
        display: flex;
        width: 100%;
        justify-content: space-between;
        position: relative;
       

        .currencies {
            width: 97px;
            height: 99px;
            margin-top: -7px;
            background: #FFFFFF;
            border: 1px solid #EBEBEB;
            box-sizing: border-box;
            border-radius: 4px;

            .cur {
                width: 100%;
                height: 33px;
                padding-top: 5px;
                padding-left: 10px;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
            }

            .mid {
                border-top: 1px solid #EBEBEB;
                border-bottom: 1px solid #EBEBEB;

            }
        }
    }

     .amount {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1px;

    }
     .on-hold-amount {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 43px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1px;
    }

    .rate {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1px;
        color: #A6ABB2;
        margin-top: 8px;
    }

    .sub-title-box {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #2A2A2A;
    }

    .data {
        padding-top: 20px;
    }

    ${
        breakpoint.sm`
            .currencies {
                display: none;
            }

            .amount {
                font-size: 20px;
            }

            .on-hold-amount {
                font-size: 20px;
            }

            .box-title {
                text-align: center;
                margin-bottom: 10px;
            }

            .rate {
                font-size: 13px;
            }

            .data {
                padding-top: 10px;
            }

        `
    }
    ${
        breakpoint.xs`
       .total-section {
           padding: 10px;
       }

       .funds-on-hold-section {
        padding: 10px;
       }

       .rate {
           font-size: 10px;
       }
        `
    }
`