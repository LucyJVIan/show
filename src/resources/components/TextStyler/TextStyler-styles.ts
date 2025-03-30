import { css, styled } from 'styled-components';

import { colors, device, fontAvenirNextCyr } from 'resources/constants';
import { font } from 'resources/utils';

export const Paragraph = styled.p`
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const List = styled.ul<{ type: 'ul' | 'ol' }>`
    list-style: ${(props) => (props.type === 'ul' ? 'circle' : 'decimal')};
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    display: flex;
    flex-direction: column;
    gap: 12px;

    ${(props) =>
        props.type === 'ol' &&
        `
        ${font(14, 400, 1.1)}
    `}
`;

export const Li = styled.li`
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    ${font(16, 400, 1.1)}

    ${device.less1300} {
        font-size: 14px;
    }

    ul {
        padding-left: 20px;
        margin-top: 12px;
    }

    span {
        margin-right: 5px;
    }
`;

export const Span = styled.span`
    ${font(16, 400, 1.1)}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.greenPrimary};
`;

export const Div = styled.div`
    color: ${colors.blackPrimary};
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    ${font(14, 400, 1.1)};
    width: 100%;
`;

export const Italic = styled.i`
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    text-align: left;
    font-style: italic;
`;

export const BaseText = styled.span`
    font-size: 14px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const TableColGroup = styled.colgroup`
    font-size: 14px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const TableCol = styled.col`
    font-size: 14px;
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

export const Header = styled.h1<{ $level: number }>`
    ${(props) => {
        switch (props.$level) {
            case 1:
                return font(48, 600, 1.3);

            case 2:
                return css`
                    ${font(40, 600, 1.3)};

                    ${device.less1300} {
                        font-size: 30px;
                    }

                    ${device.less768} {
                        font-size: 24px;
                    }
                `;

            case 3:
                return font(32, 600, 1.3);
            case 4:
                return font(20, 600, 1.3);
            case 5:
                return css`
                    ${font(20, 400, 1.3)};

                    ${device.less1300} {
                        font-size: 14px;
                    }
                `;
            case 6:
                return font(14, 400, 1.3);
            default:
                return font(14, 400, 1.3);
        }
    }}
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
`;

const baseTableStyle = css`
    font-family: ${fontAvenirNextCyr.style.fontFamily};
    color: ${colors.blackPrimary};
    ${font(14, 400, 1.3)}
`;

export const Table = styled.table`
    ${baseTableStyle};
    border: 1px solid ${colors.blackPrimary};
    border-collapse: collapse;
`;

export const Caption = styled.caption`
    ${font(20, 600, 1.1)};
    text-align: center;
    margin-bottom: 14px;
`;

export const TableHeader = styled.thead`
    ${font(20, 600, 1.3)};
    background-color: ${colors.greenLight};
`;

export const TableBody = styled.tbody`
    ${baseTableStyle};
`;

export const TableFoot = styled.tfoot`
    ${baseTableStyle};
    background-color: ${colors.breezeLight};
`;

export const TableRow = styled.tr`
    ${baseTableStyle};
    border: 1px solid ${colors.blackPrimary};
`;

export const TableHead = styled.th`
    ${baseTableStyle};
    color: ${colors.black};
    border: 1px solid ${colors.blackPrimary};
    padding: 4px;
`;

export const TableData = styled.td`
    ${baseTableStyle};
    border: 1px solid ${colors.blackPrimary};
    padding: 4px;
`;

export const Link = styled.a`
    color: ${colors.greenDark};

    &:hover {
        text-decoration: underline;
    }
`;

export const Sup = styled.sup`
    vertical-align: super;
    color: ${colors.blackPrimary};
`;

export const Sub = styled.sub`
    vertical-align: sub;
    color: ${colors.blackPrimary};
`;

export const Code = styled.code`
    background-color: ${colors.greenDark};
    color: ${colors.white};
`;

export const Pre = styled.pre`
    padding: 10px;
    overflow: auto;
`;

export const Blockquote = styled.blockquote`
    border-left: 4px solid ${colors.blackPrimary};
    background-color: ${colors.grayPrimary};
    color: ${colors.blackPrimary};
`;

export const Mark = styled.mark`
    background-color: ${colors.grayPrimary};
    color: ${colors.blackPrimary};
`;

export const Strikethrough = styled.s`
    text-decoration: line-through;
    color: ${colors.blackPrimary};
`;

export const Strong = styled.strong`
    font-weight: 700;
    color: ${colors.blackPrimary};
`;

export const Emphasis = styled.em`
    font-style: italic;
    color: ${colors.blackPrimary};
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    height: 350px;
`;

export const Video = styled.video`
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    height: 350px;
`;

export const Embed = styled.embed`
    display: block;
    width: 100%;
    border-radius: 20px;
    height: 350px;
`;
