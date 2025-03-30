import { memo } from 'react';

import {
    BaseText,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    Paragraph,
    MarkedList,
    NumberedList,
    List,
    Span,
    Italic,
    Strong,
    Div,
} from './Text-styles';
import { TextProps } from './Text-types';

export const Text = memo<TextProps>((props) => {
    const { mode = 'div', style, align, className, ...restProps } = props;

    switch (mode) {
        case 'h1':
            return <HeadingOne className={className} style={style} {...restProps} />;

        case 'h2':
            return <HeadingTwo className={className} style={style} {...restProps} />;

        case 'h3':
            return <HeadingThree className={className} style={style} {...restProps} />;

        case 'h4':
            return <HeadingFour className={className} style={style} {...restProps} />;

        case 'h5':
            return <HeadingFive className={className} style={style} {...restProps} />;

        case 'p':
            return <Paragraph className={className} style={style} align={align} {...restProps} />;

        case 'div':
            return <Div className={className} style={style} {...restProps} />;

        case 'span':
            return <Span className={className} style={style} {...restProps} />;

        case 'ul':
            return <MarkedList className={className} style={style} {...restProps} />;

        case 'ol':
            return <NumberedList className={className} style={style} {...restProps} />;

        case 'li':
            return <List className={className} style={style} {...restProps} />;

        case 'i':
            return <Italic className={className} style={style} {...restProps} />;

        case 'strong':
            return <Strong className={className} style={style} {...restProps} />;

        default:
            return <BaseText as={mode} className={className} style={style} {...restProps} />;
    }
});

Text.displayName = 'Text';
