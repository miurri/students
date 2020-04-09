import React, { Component } from 'react';
import { Layout } from 'antd';
import { PageBlock, StyledHeader, StyledP, GridContiner, } from '../StyledComponents';
import CustomCarousel from '../Carousel';
import 'antd/dist/antd.css'; 
import { ProfileBlock } from '../ProfileBlock';
import logo from '../../images/blue-logo.svg';
import eastwind from '../../images/eastwind.png';
import sberbank from '../../images/sberbank.png';
import urfu from '../../images/urfu.png';
import host from '../../images/host.jpg';
import { CheckOutlined, } from '@ant-design/icons'

const api = 'https://localhost:5001/api';

const checkIcon = <CheckOutlined style={{ color: '#002766', marginRight: '5px' }}/>

export default class Content extends Component {
    state= {
        data: []
    };

    componentDidMount() {
        this.getProfiles();
    }

    getProfiles = () => {
        fetch(`${api}/students`)
        .then(data => data.json())
        .then(json => this.setState({ data: json, }))
    }

    render() {
        const { data, } = this.state;
        const { Content, } = Layout;
        const WHITE_COLOR = '#fff';
        const GRAY_COLOR = '#f0f2f5';
        return (
            <Content style={{ padding: '85px 50px 50px', backgroundColor: 'white' }}>
                <PageBlock color={WHITE_COLOR} pd="0">
                    <CustomCarousel />
                </PageBlock>

                <PageBlock color={WHITE_COLOR}>
                    <StyledHeader id="institute">#институт</StyledHeader>
                    <StyledP>Институт радиоэлектроники и информационных технологий сотрудничает с ведущими предприятиями региона и страны с 
                        целью обеспечения студентов практикой на крупнейших предприятиях Екатеринбурга, области и старны.
                        Среди них Naumen, СКБ-Контур, Яндекс, Тинькофф и другие крупные IT-компании.</StyledP>
                    <StyledP> Помимо 254 преподавателей, обучающих студентов ИРИТ-РТФ есть 14 академиков и членов-корреспондентов различных 
                        академий наук, 27 докторов и 127 кандидатов наук.</StyledP>
                    <StyledP>В настоящее время в ИРИТ-РТФ обучается более 2000 студентов, работает 214 преподавателей, среди которых 14 академиков 
                        и членов-корреспондентов различных академий наук, 27 докторов и 127 кандидатов наук.</StyledP>
                </PageBlock>

                <PageBlock color={GRAY_COLOR}>
                    <StyledHeader id="team">#команда</StyledHeader>
                    <GridContiner gtc="1fr 4fr">
                        <img src={logo} alt="logo" />
                        <div>
                            <StyledP>Daniel's Angels - команда студентов ИРИТ-РтФ УрФУ по направлению подготовки "Информатика и вычислительная техника", 
                                которые занимались разработкой текущего ресурса.</StyledP>
                            <StyledP>Написание странички-визитки было реализовано по всем требованиям проектной разработки:<br/>
                                {checkIcon}Была собрана команда, в которой каждый выполнял свои обязанности для достижения единой целы - выполнения проекта.<br />
                                {checkIcon}Составлено условное техническое задание того, что необходимо сделать.<br />
                                {checkIcon}Составлен календарный план, описывающий временные и человеческие затраты на выполнение подзадач проекта.<br />
                                {checkIcon}Проводились регулярные собрания, в котором отчитывались друг перед другом о проделанной работе и 
                                выбирали задачи на следующие 2 недели разработки.
                            </StyledP>
                        </div>
                    </GridContiner>
                </PageBlock>

                {data && data.map((oneData, index) => {
                    return <PageBlock color={index % 2 === 0 ? WHITE_COLOR : GRAY_COLOR} key={index}>
                        <ProfileBlock data={oneData} getProfiles={this.getProfiles}/>
                </PageBlock>})}
                <ProfileBlock />

                <PageBlock color={GRAY_COLOR}>
                    <StyledHeader id="experience">#опыт</StyledHeader>
                    <StyledP>Студенты, оканчивающие четвертый курс бакалавриата имеют достаточный багаж знаний для легкого и быстрого трудойстройства в
                        компании. Кроме того, университет позволяет совмещать обучение с работой, поэтому можно начать работать еще до окончания обучения.
                        Так, некоторые из наших членов команды уже имеют производственный опыт.</StyledP>
                    <StyledP>Компании, с которыми мы уже работали:</StyledP>
                    <GridContiner gtc="1fr 1fr 1fr 1fr" mr="0 0 20px 0" ai>
                        <img src={urfu} alt="urfu logo" height="80"/>
                        <img src={sberbank} alt="sberbank logo" height="80"/>
                        <img src={host} alt="host logo" height="80"/>
                        <img src={eastwind} alt="eastwind logo" height="80"/>
                    </GridContiner>
                </PageBlock>

                <PageBlock color={WHITE_COLOR}>
                    <StyledHeader id="contacts">#контакты</StyledHeader>
                    <StyledP>По всем вопросам сотрудничества вы можете связаться с членами команды через преподавательский состав ИРИТ-РтФ.
                        Для этого вы можете связаться с представителями департамента информационных технологий и автоматики:</StyledP>
                        <ul>
                            <li key="Спиричева"><StyledP>Спиричева Наталия Рахматулловна, телефон 375-41-45</StyledP></li>
                            <li key="Аксенов"><StyledP>Аксенов Константин Александрович, телефон 375-41-45</StyledP></li>
                            <li key="Зверева"><StyledP>Зверева Ольга Михайловна, телефон 374-14-24</StyledP></li>
                        </ul>

                </PageBlock>
            </Content>
        )
    }
}