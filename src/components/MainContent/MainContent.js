import React from 'react'
import { MainContentWrapper } from "./style"
import Header from "../Header/Header"
import AccountCard from '../AccountCard/AccountCard'
import PayoutTable from '../PayoutTable/PayoutTable'
import {transactions} from "../../assets/mock-data/transaction"


export default function MainContent({switcher}) {
    return (
        <MainContentWrapper>
            <Header switcher={switcher}/>
            <AccountCard />
            <PayoutTable data={transactions}/>
        </MainContentWrapper>
    )
}