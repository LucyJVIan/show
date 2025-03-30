import { memo } from 'react';

import { Text } from 'resources/components';

import { procedureBenefitsData } from './ProcedureBenefits-constants';
import { Root, Container, Image, TextBox, Wrapper } from './ProcedureBenefits-style';

export const ProcedureBenefits = memo(() => {
    return (
        <Root>
            <Text mode="h3">Преимущества процедуры</Text>

            <Wrapper>
                {procedureBenefitsData.map((data, i) => (
                    <Container key={i}>
                        <Image src={data.img} alt={data.header}></Image>

                        <TextBox>
                            <Text mode="h4">{data.header}</Text>

                            <Text mode="p">{data.text}</Text>
                        </TextBox>
                    </Container>
                ))}
            </Wrapper>
        </Root>
    );
});

ProcedureBenefits.displayName = 'ProcedureBenefits';
