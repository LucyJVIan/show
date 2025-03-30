import styled, { css } from 'styled-components';

import { Text } from 'resources/components';
import { device } from 'resources/constants';
import { font } from 'resources/utils';

export const Root = styled.div<{ $isFull?: boolean }>`
    display: grid;
    height: 100%;

    ${(props) =>
        props.$isFull
            ? css`
                  grid-template-columns: 53% 43%;
                  gap: 40px;
                  align-items: center;

                  ${device.less1300} {
                      grid-template-columns: 394px auto;
                  }

                  ${device.less768} {
                      grid-template-columns: 100%;
                      gap: 20px;
                  }
              `
            : css`
                  grid-template-columns: 100%;
                  gap: 30px;

                  ${device.less1300} {
                      gap: 0;
                  }
              `}
`;

export const Info = styled.div<{ $isFull?: boolean }>`
    ${(props) =>
        !props?.$isFull &&
        css`
            ${device.less1300} {
                margin-top: 20px;
            }

            ${device.less768} {
                margin-top: 10px;
            }
        `};

    width: 100%;
`;

export const PosterContainer = styled.div<{ $isFull?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;

    ${(props) =>
        props.$isFull
            ? css`
                  height: 100%;

                  ${device.less768} {
                      aspect-ratio: 33 / 23;
                      width: 100%;
                      height: auto;
                  }
              `
            : css`
                  height: 320px;

                  ${device.less1300} {
                      height: 260px;
                  }

                  ${device.less768} {
                      aspect-ratio: 33 / 23;
                      width: 100%;
                      height: auto;
                  }
              `}
`;

export const Poster = styled.img<{ $isFull?: boolean }>`
    width: 100%;

    ${(props) =>
        props.$isFull
            ? css`
                  height: 360px;
                  object-fit: cover;
              `
            : css``}
`;

export const Title = styled(Text)<{ $isFull?: boolean }>`
    margin-bottom: 10px;

    ${(props) =>
        props.$isFull
            ? css`
                  ${font(32, 500, 1.1)}
                  letter-spacing: -1px;

                  ${device.less1300} {
                      letter-spacing: -0.5px;
                      ${font(24, 500, 1.1)}
                  }

                  ${device.less860} {
                      ${font(16, 500, 1.1)}
                  }
              `
            : css`
                  ${font(20, 500, 1.36)}

                  ${device.less1300} {
                      ${font(18, 500, 1.36)}
                  }

                  ${device.less768} {
                      ${font(16, 500, 1.36)}
                  }
              `}
`;

export const Description = styled(Text)<{ $isFull?: boolean }>`
    ${(props) =>
        props.$isFull
            ? css`
                  width: 45%;
                  ${font(20, 400, 1.36)}

                  ${device.less1300} {
                      ${font(16, 400, 1.36)}
                      width: 70%;
                  }

                  ${device.less860} {
                      ${font(14, 400, 1.36)}
                  }
              `
            : css`
                  width: 70%;
                  ${font(16, 400, 1.36)}
                  ${device.less1300} {
                      ${font(14, 400, 1.36)}
                  }
              `}
`;

export const DateText = styled(Text)<{ $isFull?: boolean }>`
    ${font(14, 400, 1.36)}
    margin-top: 30px;

    ${(props) =>
        !props?.$isFull &&
        css`
            ${device.less768} {
                margin-top: 22px;
            }
        `}
`;
