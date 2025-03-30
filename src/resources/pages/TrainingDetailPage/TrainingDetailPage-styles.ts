import { styled } from 'styled-components';

import { LayoutContainer, Anchor } from 'resources/components';
import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { colors } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div`
    margin-bottom: 100px;
    margin-top: 150px;

    ${device.less1300} {
        margin-top: 30px;
    }

    ${device.less768} {
        margin-bottom: 80px;
        margin-top: 24px;
    }
`;

export const Wrap = styled.div`
    position: relative;
    display: grid;
    row-gap: 80px;
`;

export const Body = styled(LayoutContainer)`
    display: grid;
    row-gap: 100px;
`;

export const MainBanner = styled.div`
    height: 493px;
    margin-top: -276px;

    ${device.less1300} {
        height: 325px;
        margin-top: -150px;
    }

    ${device.less768} {
        margin-top: -224px;
    }

    @media (max-width: 500px) {
        margin-top: -200px;
    }
`;

export const Content = styled.div`
    display: grid;
    row-gap: 60px;
    grid-template-columns: 1fr;

    ${device.less1300} {
        row-gap: 40px;
    }
`;

export const PosterContainer = styled.div`
    width: 100%;
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    height: 460px;

    ${device.less1300} {
        height: 350px;
    }

    ${device.less768} {
        width: 100%;
        height: 240px;
    }
`;

export const ContentInfo = styled.div`
    display: grid;
    width: 50%;
    grid-row: 2;
    grid-column: 1;
    row-gap: 20px;

    ${device.less1300} {
        max-width: 635px;
        width: 100%;
    }
`;

export const ContentParagraph = styled(Text)`
    ${font(16, 400, 1.36)}

    ${device.less1300} {
        ${font(14, 400, 1.36)}
    }
`;

export const ContentActions = styled.div`
    display: grid;
    row-gap: 40px;
    width: 40%;
    grid-row: 2;
    justify-self: end;
    grid-column: 1;

    ${device.less1300} {
        width: 100%;
        max-width: 530px;
        grid-row: 3;
        justify-self: flex-start;
    }
`;

export const Card = styled.div`
    padding: 40px;
    display: grid;
    row-gap: 30px;
    background-color: ${colors.white};
    border: 1px solid ${colors.greenPrimary};
    border-radius: 20px;

    ${device.less768} {
        padding: 30px 20px;
    }
`;

export const Links = styled.div`
    display: grid;
    row-gap: 15px;
`;

export const CardTitle = styled(Text)`
    ${font(24, 500, 1.36)}

    ${device.less768} {
        ${font(20, 500, 1.3)}
    }
`;

export const PosterImage = styled.img`
    width: 100%;
`;

export const SocialBody = styled.div`
    width: 155px;
    justify-self: start;
`;

export const SocialList = styled.div`
    background-color: ${colors.white};
    padding: 15px 22px;
    border-radius: 10px;
    border: 1px solid ${colors.greenPrimary};
`;

export const SocialTitle = styled(Text)`
    ${font(16, 400, 1.36)}
    margin-bottom: 10px;

    ${device.less768} {
        ${font(14, 400, 1.36)}
    }
`;

export const CardAnchor = styled(Anchor)`
    ${font(16, 400, 1.36)}

    ${device.less768} {
        ${font(14, 400, 1.36)}
    }
`;

export const FeedbackContainer = styled.div`
    margin-top: 100px;

    ${device.less1300} {
        margin-top: 40px;
    }

    ${device.less768} {
        margin-top: 80px;
    }
`;
