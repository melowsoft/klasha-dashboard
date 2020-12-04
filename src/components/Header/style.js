import styled from "styled-components"


export const Wrapper = styled.div`
   padding-top: 30px;
   display: flex;
   justify-content: space-between;

   .user-info .notification {
       margin-right: 15px
   }

   .title-wrap h3 {
    font-family: Space Grotesk;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    
   }

   .title-wrap {
    display: flex;
   }
   .title-wrap p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #A6ABB2;
    margin-top: 8px;
   }

   .close-btn {
       width: 35px;
       height: 35px;
       margin-right: 5px;
       border: none;
       background: #fff

   }

   .fa-bars {
     font-size: 20px;
   }
   
`