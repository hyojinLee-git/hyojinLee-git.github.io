import React from 'react';
import styled from '@emotion/styled';
import ContentsHeader from './ContentsHeader';
import ContentsBody from './ContentsBody';

const StyledContentsWrapper=styled.div`
    position: absolute;
    width: 100%;
    height: 77%;
    background-color: white;
    border-radius: 20px;
    margin-top:16px;
    padding: 16px;
    box-sizing: border-box;

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