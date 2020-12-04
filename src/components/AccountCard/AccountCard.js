import React from 'react'
import { Wrapper } from "./style"

export default function AccountCard() {
    return (
        <Wrapper>
                <div className="total-section">
                    <div className="top-flex">
                        <div className="box-title">
                            Total account balance
                        </div>

                    <div className="currency-wrap">
                        <select value="USD" className="currency">
                            <option value="USD">USD</option>
                            <option value="B">NGN</option>
                            <option value="C">GBP</option>
                        </select>
                    </div>
                    </div>

                    <hr className="line"/>

                    <div className="numbers-section">
                        <div className="data">
                            <div className="amount">
                                $5,332.18
                            </div>

                            <div className="rate">
                                1 USD = 381.97 NGN
                            </div>
                        </div>  

                        <div className="currencies">
                           <div className="cur">
                                KES
                           </div>
                           <div className="cur mid">
                                NGN
                           </div>
                           <div className="cur">
                                GHC
                           </div>
                        </div> 
                    </div>
                </div>

                <div className="funds-on-hold-section">
                <div className="sub-title-box">
                            Funds on hold
                        </div>

                        <div className="on-hold-amount">
                                $5,332.18
                            </div> 
                </div>
            
        </Wrapper>
    )
}
