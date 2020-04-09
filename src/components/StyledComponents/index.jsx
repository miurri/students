import styled from 'styled-components';

export const PageBlock = styled.div`
    padding: ${props => props.pd ?  props.pd : '15px 10vw'};
    heigth: 600px;
    width: 100%;
    background-color: ${ props => props.color };
`;

export const GridContiner = styled.div`
    display: grid;
    grid-template-columns: ${ props => props.gtc ? props.gtc : '1fr' };
    grid-gap: ${props => props.gg ? props.gg : '0'};
    margin: ${ props => props.mr ? props.mr : '0'};
    padding: ${ props => props.pd ? props.pd : '0' };
    justify-items: ${ props => props.ai ? 'center' : 'start'};
`;

export const StyledSpan = styled.span`
    font-size: 24px;
    color: ${ props => props.bl ? '#0050b3' : '#000'};
`;

export const StyledP = styled.p`
    font-size: 24px;
`;

export const StyledHeader = styled.h1`
    color: #002766;
    font-size: ${ props => props.mini ? '46px' : '56px'};
    margin-bottom: 10px;
`;

export const StyledHiddenA = styled.a`
    display: none;
`;

export const StyledEditButton = styled.div`
    font-size: 38px;
    cursor: pointer;
    width: 60px;
    height: 60px;    
    margin-left: -30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 3px solid #1890ff;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;