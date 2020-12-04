import React, {useState} from 'react'

import { Wrapper } from "./style"
import SearchIcon from "../../assets/search-icon.svg"
import CustomDate from '../DatePicker/DatePicker'

export default function PayoutTable(data) {
    const [activeItem, activeSetter] = useState(0)
    return (
        <Wrapper>
            <div className="top-layer-flex">
                <h3  className="table-title">
                    Payout table
                </h3>

                <div className="controls">
                    <div className="search-box">
                      <input placeholder="Search something..." className="search"/>
                      <button className="search-button">
                          <img src={SearchIcon} alt="search-icon" className="btn"/>
                      </button>
                    </div>

                    <div className="date-picker-wrap">
                        <div className="date-picker">
                        <CustomDate />
                        </div>

                        <div className="payout">Payout</div>
                    </div>

                </div>
            </div>

            <div className="web-table">
                <div className="table-header">
                    <div className="header-item">
                        Product ID
                    </div>
                    <div className="header-item">
                    Source
                    </div>
                    <div className="header-item">
                    Date
                    </div>
                    <div className="header-item">
                    Amount
                    </div>
                </div>

                {
                    data && data.data.map((item, index) => (
                        <div onClick={() => activeSetter(index)} key={index} className={activeItem === index ? "table-row active" : "table-row"}>
                            <div className="body-item">
                                {item.id}
                            </div>
                            <div className="body-item">
                            {item.source}
                            </div>
                            <div className="body-item">
                            {item.date}
                            </div>
                            <div className="body-item">
                            ${item.amount.toLocaleString()}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="mobile-table">

             {
                 data && data.data.map((item, index) => (
                    <div onClick={() => activeSetter(index)} key={index} className={activeItem === index ? "table-item active" : "table-item"}>
                    <div className="item-row">
                        <div className="item-title">
                           Product Id
                        </div>

                        <div className="item-data">
                        {item.id}
                        </div>
                    </div>
                    <hr className="separator"/>

                    <div className="item-row">
                        <div className="item-title">
                        Source
                        </div>

                        <div className="item-data">
                        {item.source}
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="item-row">
                        <div className="item-title">
                        Date
                        </div>

                        <div className="item-data">
                        {item.date}
                        </div>
                    </div>
                    <hr className="separator"/>
                    <div className="item-row">
                        <div className="item-title">
                        Amount
                        </div>

                        <div className="item-data">
                        ${item.amount.toLocaleString()}
                        </div>
                    </div>
                  
                </div>  
                 ))
             }   
                
            </div>


            <div className="more-button">
                See more
            </div>
        </Wrapper>
    )
}