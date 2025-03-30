import styled from 'styled-components';

import { device, fontAvenirNextCyr } from 'resources/constants';

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    position: sticky;
    top: 130px;
    left: 0;
    max-height: 600px;
    z-index: 11;

    ${device.less1300} {
        flex-direction: row;
        gap: 20px;
        width: 100%;
        font-family: ${fontAvenirNextCyr.style.fontFamily};
        border-radius: 20px;
        padding: 0;
        position: relative;
        top: 0;
    }

    ${device.less768} {
        flex-direction: column;
    }
`;
