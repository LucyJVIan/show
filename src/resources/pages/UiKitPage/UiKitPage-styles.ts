import { css, styled } from 'styled-components';

import { fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

import { ContentRowProps } from './UiKitPage-types';

export const Content = styled.div`
    display: grid;
    width: 900px;
    margin: 0 auto;
    gap: 20px;
    padding: 30px 0;
`;

export const ButtonBody = styled.div`
    width: 250px;
`;

export const ContentLabel = styled.div`
    ${font(20, 500)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
`;

export const ContentRow = styled.div<ContentRowProps>`
    ${(props) =>
        props.display === 'grid'
            ? css`
                  display: grid;
              `
            : css`
                  display: flex;
                  flex-direction: ${props.flexDirection || 'row'};
                  align-items: ${props.alignItems || 'flex-start'};
                  justify-content: ${props.justifyContent || 'space-between'};
              `}
    gap: 20px;
    margin-bottom: 20px;
`;
