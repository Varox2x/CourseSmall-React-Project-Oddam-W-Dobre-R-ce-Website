import React from "react";
import {Container, Wrapper} from "../../../elements/general_global";
import {BackGround, Column, ColumnWrapper} from "../../../elements/home_page/hero_section";

export default () => {

    return (
        <>
            <Container>
                <Wrapper>
                    <ColumnWrapper>
                        <Column><BackGround/></Column>
                        <Column></Column>
                    </ColumnWrapper>
                </Wrapper>
            </Container>
        </>
    )
}