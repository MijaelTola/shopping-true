import styled from "styled-components";
import { colors } from './colors';

export const Heading = styled('div')`
    font-size: 30px; 
    font-weight: 600;
    color: ${colors.third_color};
    display: flex;
    justify-content: space-between;
`

export const Footer = styled('div')`
    display: flex;
    * {
      margin-right: 8px;
    }
`
