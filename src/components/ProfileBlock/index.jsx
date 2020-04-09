import React, { Component } from 'react';
import {  } from 'antd';
import 'antd/dist/antd.css'; 
import { GridContiner, StyledSpan, StyledHeader, StyledEditButton, FlexContainer, } from '../StyledComponents';
import photoSAI from '../../images/SAI.jpeg';
import photoLAS from '../../images/LAS.jpg';
import photoBVA from '../../images/BVA.jpg';
import photoSJuA from '../../images/SJuA.jpeg';
import photoChDA from '../../images/ChDA.PNG';
import { EditTwoTone, } from '@ant-design/icons';
import { PersonModal } from '../PersonModal';

export class ProfileBlock extends Component {
    state = {
        visible: false,
    }

    getHeader = () => {
        const family = this.props.data.family;
        switch(family) {
            case 'Лысенко':
            case 'Черданцев':
                return 'разработчик';
            case 'Соломенникова':
                return 'дизайнер';
            case 'Савельева':
                return 'тестировщик';
            case 'Будевич':
                return 'руководитель';
            default:
                return '';
        }
    }

    getPhotoSrc = () => {
        const family = this.props.data.family;
        switch(family) {
            case 'Лысенко':
                return photoLAS;
            case 'Черданцев':
                return photoChDA;
            case 'Соломенникова':
                return photoSJuA;
            case 'Савельева':
                return photoSAI;
            case 'Будевич':
                return photoBVA;
            default:
                return '';
        }
    }

    handleOpen = () => this.setState({ visible: true, })
    handleClose = () => this.setState({ visible: false, })

    render() {
        const { data, getProfiles, } = this.props;
        const { visible, } = this.state;
        const header = data && this.getHeader();
        const photo = data && this.getPhotoSrc();
        return data ? (
            <>
                <StyledHeader mini>#{header}</StyledHeader>
                <GridContiner gtc="1fr 3fr" pd="15px">
                    <FlexContainer>
                        <img src={photo} alt={data.family} height="360"/>
                        <StyledEditButton onClick={this.handleOpen}><EditTwoTone /></StyledEditButton>
                    </FlexContainer>
                    <div>
                        <GridContiner gtc="180px 1fr" gg="5px 5px">
                            <StyledSpan bl>Фамилия:</StyledSpan>
                            <StyledSpan>{data.family}</StyledSpan>
                            <StyledSpan bl>Имя:</StyledSpan>
                            <StyledSpan>{data.name}</StyledSpan>
                            <StyledSpan bl>Отчество:</StyledSpan>
                            <StyledSpan>{data.patronymic}</StyledSpan>
                            <StyledSpan bl>Пол:</StyledSpan>
                            <StyledSpan>{data.sex ? 'Мужской' : 'Женский' }</StyledSpan>
                            <StyledSpan bl>Группа:</StyledSpan>
                            <StyledSpan>{data.academicGroupNumber}</StyledSpan>
                            <StyledSpan bl>Навыки:</StyledSpan>
                            <StyledSpan>{data.skills}</StyledSpan>
                            <StyledSpan bl>Тема дипломной работы:</StyledSpan>
                            <StyledSpan>{data.temA_DIPLOMA}</StyledSpan>
                        </GridContiner>
                    </div>
                </GridContiner>
                <PersonModal 
                    visible={visible} 
                    handleClose={this.handleClose}
                    data={data}
                    getProfiles={getProfiles}
                />
            </>
        )
        : (<div />)
    }

}