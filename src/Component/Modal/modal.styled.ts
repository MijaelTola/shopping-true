import styled from "styled-components";
import { colors } from '../Commons/colors';

export const ModalBackground = styled('div')`
  display: none; 
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;  
  overflow: auto; 
  background: colors.black;
`

export const ModalContent = styled('div')`
  .modal-content {
    background-color: colors.white;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
`
