import styled from 'styled-components';

import { colors, device } from 'resources/constants';

export const GalleryItemWrapper = styled.div`
    margin-bottom: 40px;

    ${device.less768} {
        justify-items: center;
    }
`;

export const TagsWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const TagsItem = styled.div`
    background-color: ${colors.greenLight};
    padding: 9px 20px;
    border-radius: 50px;
    color: ${colors.blackPrimary};

    ${device.less1300} {
        font-size: 14px;
    }
`;
