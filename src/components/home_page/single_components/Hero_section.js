import React from "react";
import {Container, Wrapper} from "../../../elements/general_global";
import decoration from '../../../assets/Decoration.svg'
import {
    BackGround, ButtonHero,
    Column,
    ColumnWrapper, ContentPhoto,
    ContentWrapper,
    ContentWrapperColumn, MainTitle
} from "../../../elements/home_page/hero_section";

export default () => {

    return (
        <>
            <Container>
                <Wrapper>
                    <ColumnWrapper>
                        <Column><BackGround/></Column>
                        <Column>
                            <ContentWrapper>
                                <ContentWrapperColumn>
                                    <MainTitle>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</MainTitle>
                                </ContentWrapperColumn>
                                <ContentWrapperColumn>
                                    <ContentPhoto src={decoration}/>
                                </ContentWrapperColumn>
                                <ContentWrapperColumn>
                                    <ButtonHero>ODDAJ <br/> RZECZY</ButtonHero>
                                    <ButtonHero>ZORGANIZUJ <br/> ZBIÓRKĘ</ButtonHero>
                                </ContentWrapperColumn>
                            </ContentWrapper>
                        </Column>
                    </ColumnWrapper>
                </Wrapper>
            </Container>
        </>
    )
}