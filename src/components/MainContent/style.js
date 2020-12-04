import styled from "styled-components"
import {breakpoint} from "../../assets/style-utils"

export const MainContentWrapper = styled.div`
    background: #FFFFFF;
    width: 85%;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    min-width: 320px;
    flex-grow: 1;

    ${
        breakpoint.xs`
            padding-left: 15px;
            padding-right: 15px;
        `
    }
`