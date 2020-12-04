import React from 'react'
import { Wrapper } from './style'

export default function MainContainer(props) {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}