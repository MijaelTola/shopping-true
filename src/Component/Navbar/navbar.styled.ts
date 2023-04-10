import styled from "styled-components";
import {Link} from "react-router-dom";
import {colors} from "../Commons/colors";

export const NavStyled = styled('nav')`
    height: 50px;
    width: 100%;
    padding-top: 25px;
    padding-left: 25px;
    display: flex;
`

export const NavItems = styled('div')`
    margin-right: 10px;
    font-size: 20px;
`

export const NavLogo = styled('div')`
  margin-right: 50px;
  font-size: 20px;
`

export const ItemsSections = styled('div')`
    display: flex;
`

export const LinkStyled = styled(Link)`
    margin-right: 20px;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.secondary_color};
    &:hover {
      background-color: lightgoldenrodyellow; 
    }
`
