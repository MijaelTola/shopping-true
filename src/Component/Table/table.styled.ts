import styled from "styled-components";
import {colors} from "../Commons/colors";

export const TableStyled = styled('table')`
    border: 1px solid ${colors.black};
    border-radius: 3px;
    width: 80%;
`

export const TableHeader = styled('thead')`
    background-color: ${colors.primary_color};
    color: ${colors.secondary_color};
    border-bottom: 1px solid ${colors.black};
    font-weight: 600;
`

export const TableBody = styled('tbody')`
  font-weight: 300;
`

export const Td = styled('td')`
`

export const Th = styled('th')`
`

export const Thb = styled('th')`
  font-weight: 300;
`

export const Tr = styled('tr')`
    height: 50px;
    background-color: ${props => +(props.id ?? '0') % 2 == 0 ? colors.white : colors.light_gray};
`

export const Trh = styled('tr')`
  height: 50px;
`
