import React from "react";
import {Column, Container, LinkButton, LinkUserDatta, LinkUserPanel} from "../../elements/navigation/navigation";


export default () => {

    return (
        <>
            <Container>
                <Column displayEnd={true}>
                    <LinkUserPanel to="login">Zaloguj</LinkUserPanel>
                    <LinkUserPanel to="register">Załóź konto</LinkUserPanel>
                </Column>
                <Column displayEnd={false}>
                    <LinkButton to="start">Start</LinkButton>
                    <LinkButton to="start">O nas</LinkButton>
                    <LinkButton to="start">O co chodzi?</LinkButton>
                    <LinkButton to="start">Fundacja i organizacja</LinkButton>
                    <LinkButton to="start">Kontakt</LinkButton>
                </Column>
            </Container>
        </>
    )
}