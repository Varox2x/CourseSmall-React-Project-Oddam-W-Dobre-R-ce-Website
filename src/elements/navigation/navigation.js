import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 95px;
    width: 683px;
    border: 2px solid lightpink;
    position: absolute;
    top: 37px;
    right: 0;
`

export const Column = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: ${props => props.displayEnd ? "flex-end" : "space-around"};
    
    flex-direction: row;
`

export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: left;
    font: normal normal normal 18px Open Sans;
    letter-spacing: 0;
    color: #3C3C3C;
    padding: 9px 20px;
  &:hover{
    border: 0.75px solid #3C3C3C;
  }
`

export const  LinkUserPanel = styled(Link)`
  text-decoration: none;
  text-align: right;
  font: normal normal normal 13px Open Sans;
  letter-spacing: 0px;
  color: #737373;
  padding: 9px 10px;
  &:hover{
    border: 0.75px solid #FAD648;
  }
`