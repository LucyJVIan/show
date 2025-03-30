import { Button, LayoutContainer, Link } from 'resources/components';

import { BannerSubtitle } from './components/BannerSubtitle/BannerSubtitle';
import { items } from './CosmetologyProgramsBanner-constants';
import {
    Banner,
    BannerBody,
    BannerContainer,
    BannerTitle,
    BannerPoster,
    BannerPosterImage,
    BannerAction,
    Root,
    Title,
} from './CosmetologyProgramsBanner-styles';

export const CosmetologyProgramsBanner = () => {
    return (
        <LayoutContainer>
            <Root>
                <Title>Авторские программы обучения по направлениям косметологии</Title>

                <BannerContainer>
                    {items.map((data) => (
                        <Banner key={data.title}>
                            <BannerBody>
                                <BannerSubtitle Icon={data.subtitle.icon}>{data.subtitle.text}</BannerSubtitle>
                                <BannerTitle>{data.title}</BannerTitle>
                                <BannerAction>
                                    <Link href="https://www.google.com/">
                                        <Button>Расписание</Button>
                                    </Link>
                                </BannerAction>
                            </BannerBody>
                            <BannerPoster>
                                <BannerPosterImage src={data.poster} />
                            </BannerPoster>
                        </Banner>
                    ))}
                </BannerContainer>
            </Root>
        </LayoutContainer>
    );
};

CosmetologyProgramsBanner.displayName = 'CosmetologyProgramsBanner';
