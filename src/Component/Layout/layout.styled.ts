import styled from "styled-components";
import { colors } from '../Commons/colors';

export const PageLayoutStyled = styled('div')`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary_color};
    font-family: "Gill Sans",serif;
  
`

export const LayoutStyled = styled('div')`
    overflow: auto;
    width: 97%;
    padding: 30px;
    height: calc(100vh - 200px);
    background-color: ${colors.white};
`
