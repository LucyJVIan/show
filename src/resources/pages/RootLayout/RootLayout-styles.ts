import { createGlobalStyle, styled } from 'styled-components';

import { colors, device } from 'resources/constants';

export const LayoutRoot = styled.div`
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background: ${colors.whiteGhost};
    ${device.less1300} {
        padding-top: 80px;
    }
`;

export const LayoutHead = styled.header`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.8);
    ${device.less1300} {
        background-color: ${colors.white};
        backdrop-filter: none;
    }
`;

export const LayoutBody = styled.main`
    height: auto;
    flex: 1;
    min-height: 300px;
`;

export const LayoutFoot = styled.footer``;

export const GlobalStyles = createGlobalStyle`
    * {
        border: none;
        outline: 0;
        box-sizing: border-box;
    }

    code, kbd, pre, samp, tt, var {
        font: 12px/14px Consolas, "Courier New", monospace
    }

    body, code, dd, dl, form, pre {
        margin: 0
    }

    code, pre {
        white-space: pre-wrap
    }

    sub, sup {
        position: relative;
        display: inline-block;
        font-size: 11px;
        line-height: 11px
    }

    sub {
        top: 5px;
        vertical-align: middle
    }

    sup {
        top: -2px;
        margin-top: -11px
    }

    abbr, acronym {
        cursor: help;
        border-bottom: 1px dotted #999
    }

    address, cite, dfn {
        font-style: normal
    }

    img {
        vertical-align: bottom
    }

    td, textarea, th {
        vertical-align: top
    }

    button, input, select {
        overflow: visible;
        vertical-align: middle
    }

    legend {
        color: #000;
        margin: 0 0 -2px;
        padding: 0
    }

    li {
        display: block;
        list-style: none
    }

    optgroup option {
        padding-left: 22px
    }

    table {
        border-collapse: collapse
    }

    caption, th {
        text-align: left
    }

    td, th {
        padding: 0
    }

    address, blockquote, fieldset,
    h1, h2, h3, h4, h5, h6, ol, p, ul {
        margin: 0;
        padding: 0
    }

    h1, h2, h3, h4, h5, h6, th {
        font-weight: 400
    }

    q {
        quotes: "\\00ab" "\\00bb" "\\201e" "\\201c"
    }

    q:after {
        content: "\\00bb"
    }

    q:before {
        content: "\\00ab"
    }

    q > q:after {
        content: "\\201c"
    }

    q > q:before {
        content: "\\201e"
    }

    textarea {
        font-size: 100%;
        padding: 0;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
        display: block
    }

    a {
        text-decoration: none;
        color: #252525;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        min-width: 360px;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
    }
`;
