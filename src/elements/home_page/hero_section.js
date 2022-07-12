import styled from "styled-components";
import background from '../../assets/Home-Hero-Image.jpg'

export const ColumnWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    height: 100%;
    width: 50%;
    border: 2px solid orange;
    background: ${props => props.backgroundColor};
`

export const BackGround = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: right;
`

export const ContentWrapper = styled.div`
  
`