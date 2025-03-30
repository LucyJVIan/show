import { memo, useCallback } from 'react';

import { TextStylerProps } from 'resources/components/TextStyler/TextStyler-types';
import { useJsonData } from 'resources/hooks/getJsonData/useGetJsonData';
import { ContentItem } from 'resources/types';
import { objectStyleToCss } from 'resources/utils';

import {
    Header,
    Paragraph,
    Span,
    Image,
    BaseText,
    TableHeader,
    TableBody,
    TableFoot,
    TableRow,
    TableHead,
    TableData,
    Table,
    TableColGroup,
    TableCol,
    Sup,
    Sub,
    Code,
    Pre,
    Blockquote,
    Mark,
    Strikethrough,
    Li,
    List,
    Link,
    Video,
    Strong,
    Emphasis,
    Caption,
    Embed,
} from './TextStyler-styles';

export const TextStyler = memo<TextStylerProps>((props) => {
    const { pageName, contentIndex } = props;

    const jsonDataFull = useJsonData(pageName);

    const jsonData = contentIndex !== undefined ? [jsonDataFull[contentIndex]] : jsonDataFull;

    const renderContent = useCallback((item: ContentItem, index: number) => {
        if (!item) {
            return null;
        }

        const inlineStyle = item.style ? objectStyleToCss(item.style) : undefined;

        const renderInnerContent = (content?: (string | ContentItem)[]) => {
            return content?.map((subItem, subIndex) => {
                if (typeof subItem === 'string') {
                    return subItem;
                }
                return renderContent(subItem, subIndex);
            });
        };

        switch (item.tag) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                const level = parseInt(item.tag.charAt(1), 10);
                return (
                    <Header key={index} $level={level} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Header>
                );

            case 'p':
                return (
                    <Paragraph key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Paragraph>
                );

            case 'ul':
            case 'ol':
                let counter = 1;
                return (
                    <List type={item.tag} key={index} style={inlineStyle}>
                        {item.content?.map((liItem, liIndex) =>
                            typeof liItem === 'object' && liItem.tag === 'li' ? (
                                <Li key={liIndex}>
                                    <Span>{item.tag === 'ul' ? '•' : `${counter++}.`}</Span>
                                    {renderInnerContent(liItem.content)}
                                </Li>
                            ) : null,
                        )}
                    </List>
                );

            case 'img':
                return item.attributes ? (
                    <Image key={index} {...item.attributes} style={inlineStyle} alt="index" />
                ) : null;

            case 'video':
                return item.attributes ? (
                    <Video key={index} {...item.attributes} controls style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Video>
                ) : null;

            case 'caption':
                return (
                    <Caption key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Caption>
                );

            case 'embed':
                return item.attributes ? <Embed key={index} {...item.attributes} style={inlineStyle} /> : null;

            case 'a':
                return item.attributes ? (
                    <Link key={index} href={item.attributes?.href || '#'} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Link>
                ) : null;

            case 'strong':
            case 'b':
                return (
                    <Strong key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Strong>
                );

            case 'em':
            case 'i':
                return (
                    <Emphasis key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Emphasis>
                );

            case 'table':
                return (
                    <Table key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Table>
                );

            case 'thead':
                return (
                    <TableHeader key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </TableHeader>
                );

            case 'tbody':
                return (
                    <TableBody key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </TableBody>
                );

            case 'tfoot':
                return (
                    <TableFoot key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </TableFoot>
                );

            case 'tr':
                return <TableRow key={index}>{renderInnerContent(item.content)}</TableRow>;

            case 'th':
                return (
                    <TableHead key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </TableHead>
                );

            case 'td':
                return (
                    <TableData key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </TableData>
                );

            case 'colgroup':
                return (
                    <TableColGroup key={index} style={inlineStyle}>
                        {item.content
                            ?.filter((colItem) => {
                                if (typeof colItem === 'object' && 'tag' in colItem) {
                                    return colItem.tag === 'col';
                                }
                                return false;
                            })
                            .map((colItem, colIndex) => {
                                return renderContent(colItem as ContentItem, colIndex);
                            })}
                    </TableColGroup>
                );

            case 'col':
                return item.attributes ? <TableCol key={index} {...item.attributes} style={inlineStyle} /> : null;

            case 'sup':
                return (
                    <Sup key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Sup>
                );

            case 'sub':
                return (
                    <Sub key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Sub>
                );

            case 'code':
                return (
                    <Code key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Code>
                );

            case 'pre':
                return (
                    <Pre key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Pre>
                );

            case 'blockquote':
                return (
                    <Blockquote key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Blockquote>
                );

            case 'mark':
                return (
                    <Mark key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Mark>
                );

            case 's':
            case 'strike':
            case 'del':
                return (
                    <Strikethrough key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </Strikethrough>
                );

            case 'br':
                return <br key={index} />;

            default:
                return (
                    <BaseText key={index} style={inlineStyle}>
                        {renderInnerContent(item.content)}
                    </BaseText>
                );
        }
    }, []);

    return (
        <>
            {jsonData && jsonData.length > 0 ? (
                jsonData.map((item, index) => renderContent(item, index))
            ) : (
                <p>No data available</p>
            )}
        </>
    );
});

TextStyler.displayName = 'TextStyler';
