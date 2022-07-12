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
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const BackGround = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: right;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 674px;
  
`

export const ContentWrapperColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

export const MainTitle = styled.h1`
  text-align: center;
  font: normal normal normal 38px/55px Open Sans;
  letter-spacing: -0.76px;
  color: #3C3C3C;
`

export const ContentPhoto = styled.img`
  margin: 50px 0 100px 0;
`

export const ButtonHero = styled.button`
  border: 0.75px solid #3C3C3C;
  height: 120px;
  width: 310px;
  background: transparent;
  text-align: center;
  font: normal normal 300 36px/45px Open Sans;
  letter-spacing: 0px;
`