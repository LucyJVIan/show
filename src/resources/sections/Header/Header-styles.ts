import styled from 'styled-components';

import { device } from 'resources/constants';

export const Root = styled.header`
    width: 100%;
    padding: 20px 0;
    justify-content: space-between;
    display: flex;

    ${device.less1300} {
        justify-content: space-between;
        padding: 10px 0;
    }
`;

export const Primary = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
`;

export const Secondary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-left: auto;

    ${device.less1300} {
        gap: 40px;
    }

    ${device.less768} {
        gap: 20px;
    }
`;

export const Navigation = styled.div`
    display: flex;
    gap: 25px;

    ${device.less1300} {
        display: none;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 5px;

    ${device.less768} {
        display: none;
    }
`;

export const MobileMenuToggler = styled.div`
    display: none;

    ${device.less1300} {
        display: flex;
        align-items: center;
    }
`;
