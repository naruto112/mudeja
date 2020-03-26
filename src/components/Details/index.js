import React, { Component } from 'react';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles'
import fretex from '../../assets/frete_img.png'

export default class Details extends Component {
    render() {
        return <Container>
            <TypeTitle>Popular</TypeTitle>
            <TypeDescription>Viajens baratas para o dia a dia</TypeDescription>
            <TypeImage source={fretex} style={{height: 40, width: 40}}/>
            <TypeTitle>Mude Já</TypeTitle>
            <TypeDescription>R$15,00</TypeDescription>
            <RequestButton onPress={() => {}}>
                <RequestButtonText>SOLICITAR FRETEX</RequestButtonText>
            </RequestButton>
        </Container>
    }
}
