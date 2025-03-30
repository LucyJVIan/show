import { memo } from 'react';

import { Text } from 'resources/components';

import { procedureArticleData } from './ProcedureArticle-constants';
import { Root, Wrapper, Image, TextWrapper } from './ProcedureArticle-styles';

export const ProcedureArticle = memo(() => {
    return (
        <Root>
            {procedureArticleData.map((data, index) => (
                <Wrapper key={index}>
                    <Text mode="h3">Преимущества процедуры</Text>

                    <Text mode="h5">{data.description}</Text>

                    <Image src={data.image} alt={data.header}></Image>

                    {data.text.map((text, index) => (
                        <TextWrapper key={index}>
                            <Text mode="p">{text}</Text>
                        </TextWrapper>
                    ))}
                </Wrapper>
            ))}
        </Root>
    );
});

ProcedureArticle.displayName = 'ProcedureArticle';
