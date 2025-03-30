import React, { memo, useCallback } from 'react';

import { Button, ModalTrigger } from 'resources/components';
import { useModal } from 'resources/hooks';

import { Root, Content, Body, Title, Description, Actions } from './Banner-styles';
import { BannerProps } from './Banner-types';

export const Banner = memo<BannerProps>((props) => {
    const { title, description, buttonTitle, posterUrl, buttonOnClick, isTraining, isModal } = props;

    const { handleOpen } = useModal();

    const handleOpenClick = useCallback(() => {
        handleOpen('subscribeTraining');
    }, [handleOpen]);

    return (
        <Root $posterUrl={posterUrl}>
            <Body>
                <Content>
                    <Title $isTraining={isTraining} type="h1" dangerouslySetInnerHTML={{ __html: title }} />

                    <Description dangerouslySetInnerHTML={{ __html: description }} />

                    <Actions>
                        {isModal ? (
                            <ModalTrigger onClick={handleOpenClick} asChild>
                                <Button onClick={buttonOnClick}>{buttonTitle}</Button>
                            </ModalTrigger>
                        ) : (
                            <Button onClick={buttonOnClick}>{buttonTitle}</Button>
                        )}
                    </Actions>
                </Content>
            </Body>
        </Root>
    );
});

Banner.displayName = 'Banner';
