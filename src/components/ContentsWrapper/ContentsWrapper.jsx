import React from 'react';
import styled from '@emotion/styled';
import ContentsHeader from './ContentsHeader';
import ContentsBody from './ContentsBody';

const StyledContentsWrapper=styled.div`
    position: absolute;
    width: 100%;
    height: 77%;
    border: 1px solid;
    box-sizing: border-box;
    background-color: white;
    border-radius: 20px;
    margin-top:3%;

`

const ContentsWrapper = ({onCloseContent}) => {
    return (
        <StyledContentsWrapper>
            <ContentsHeader onCloseContent={onCloseContent}/>
            <ContentsBody/>
        </StyledContentsWrapper>
    );
};

export default ContentsWrapper;