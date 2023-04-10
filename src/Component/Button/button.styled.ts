import styled from "styled-components";
import {colors} from "../Commons/colors";


export const PrimaryButton = styled('button')`
  background-color: ${colors.secondary_color};
  color: ${colors.white};
  font-weight: 600;
  height: 30px;
  width: 80px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`

export const SecondaryButton = styled('button')`
    background-color: ${colors.primary_color};
    color: ${colors.third_color};
    height: 30px;
    border-radius: 3px;
    border: 1px solid ${colors.black};
    font-weight: 600;
    width: 80px;
    cursor: pointer;
`

export const DeleteButton = styled('button')`
    background-color: red;
    color: ${colors.white};
    height: 30px;
    border-radius: 3px;
    border: 1px solid ${colors.black};
    font-weight: 600;
    width: 80px;
    cursor: pointer;
`
