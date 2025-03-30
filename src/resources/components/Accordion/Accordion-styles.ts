import styled, { css } from 'styled-components';

import { colors, device } from 'resources/constants';
import { font } from 'resources/utils';

import { AccordionStyleProps } from './Accordion-types';

export const IconWrapper = styled.div<AccordionStyleProps>`
    background-color: ${colors.greenPrimary};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: ${(props) => (props.$isOpen ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%)')};
    display: flex;
    justify-content: center;
    align-items: center;

    ${device.less768} {
        width: 30px;
        height: 30px;
    }
`;

export const List = styled.ul<AccordionStyleProps>`
    color: ${colors.blackPrimary};
    cursor: pointer;

    ${(props) =>
        props.$isSidebar
            ? css`
                  background-color: ${colors.white};
                  padding: 36px 25px;
                  width: 310px;
                  border-radius: ${props.$isSingle ? '20px' : '0'};

                  ${!props.$isSingle &&
                  css`
                      &:first-child {
                          border-radius: 20px 20px 0 0;
                      }

                      &:last-child {
                          border-radius: 0 0 20px 20px;
                      }
                  `}

                  ${device.less1300} {
                      padding: 20px 40px;

                      &:first-child,
                      &:last-child {
                          border-radius: ${props.$isOpen ? '20px 20px 0 0' : '20px'};
                          width: 50%;
                      }
                  }

                  ${device.less768} {
                      &:last-child,
                      &:first-child {
                          width: 100%;
                      }
                  }
              `
            : css`
                  width: 640px;
                  background-color: ${colors.gray};
                  border-radius: 20px;

                  ${device.less768} {
                      width: 100%;
                  }
              `};

    position: relative;
`;

export const Header = styled.div<AccordionStyleProps>`
    ${font(20, 500, 1.1)};
    cursor: pointer;
    position: relative;

    ${(props) =>
        props.$isSidebar
            ? css`
                  padding-left: 15px;

                  ${device.less1300} {
                      ${font(16, 500, 1)};
                  }
              `
            : css`
                  padding: 28px 40px;
                  background-color: ${colors.white};
                  border-radius: 20px;

                  ${device.less1300} {
                      font-size: 18px;
                      padding: 20px 40px;
                  }

                  ${device.less768} {
                      font-size: 16px;
                      padding: 20px;
                  }
              `}
`;

export const Title = styled.p``;

export const ShevronContainer = styled.div<AccordionStyleProps>`
    color: ${colors.greenPrimary};
    position: absolute;
    right: 0;
    left: auto;
    top: 50%;
    transform: translateY(-50%) ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const ElementWrapper = styled.div<AccordionStyleProps>`
    gap: 7px;
    font-size: 16px;

    ${device.less768} {
        font-size: 14px;
        padding: 20px;
    }

    ${(props) =>
        props.$isSidebar
            ? css`
                  padding-top: ${props.$isOpen ? '28px' : '0'};
                  display: flex;
                  flex-direction: column;

                  ${device.less1300} {
                      position: absolute;
                      top: 100%;
                      left: 0;
                      width: 100%;
                      background-color: ${colors.white};
                      z-index: ${props.$isOpen ? 6 : 0};
                      opacity: ${props.$isOpen ? 1 : 0.0001};
                      transition: opacity 0.3s ease;
                      padding: 16px 30px;
                      border-radius: 0 0 20px 20px;
                  }
              `
            : css`
                  display: ${props.$isOpen ? 'flex' : 'none'};
                  flex-direction: column;
                  background-color: ${colors.transparent};
                  padding: ${props.$isOpen ? '20px 40px' : '0'};
              `}
`;
