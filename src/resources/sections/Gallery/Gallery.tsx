'use client';

import { memo } from 'react';
import { SwiperSlide } from 'swiper/react';

import { ArrowButton, Button } from 'resources/components';
import { GalleryProps } from 'resources/sections';

import { GalleryItem } from './components/GalleryItem';
import {
    Body,
    Container,
    Header,
    LinkAllExamples,
    LinkAllExamplesMobile,
    MiniGallery,
    Root,
    Swiper,
    Title,
    GalleryButton,
    GalleryContainer,
    SliderWrapper,
} from './Gallery-styles';
import 'swiper/css';
import {
    settingSwiperBreakpoints,
    settingSwiperBreakpointsMini,
    settingSwiperModules,
    settingSwiperNavigation,
} from './Gallety-constants';

export const Gallery = memo<GalleryProps>((props) => {
    const { miniGallery } = props;

    return (
        <Container>
            <Root as={miniGallery ? MiniGallery : Root}>
                <Header $isMiniGallery={miniGallery}>
                    <Title $isMiniGallery={miniGallery}>Галерея</Title>

                    <LinkAllExamples href="/gallery">
                        <Button mode="secondary">Все примеры работ</Button>
                    </LinkAllExamples>
                </Header>
            </Root>

            <GalleryContainer $isMiniGallery={miniGallery}>
                <Body $isMiniGallery={miniGallery}>
                    <SliderWrapper>
                        <GalleryButton $isMiniGallery={miniGallery}>
                            <ArrowButton mode="left" className="swiper-button-prev" />
                        </GalleryButton>

                        <Swiper
                            modules={settingSwiperModules}
                            spaceBetween={20}
                            navigation={settingSwiperNavigation}
                            slidesPerView={3}
                            breakpoints={miniGallery ? settingSwiperBreakpointsMini : settingSwiperBreakpoints}
                            loop
                            allowTouchMove={false}
                            noSwiping={false}
                        >
                            <SwiperSlide>
                                <GalleryItem
                                    firstImage="/assets/images/before.jpg"
                                    secondImage="/assets/images/after.jpg"
                                    title="Название процедуры - Наименование проблемы"
                                    link="/gallery"
                                    miniGallery={miniGallery}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <GalleryItem
                                    firstImage="/assets/images/before.jpg"
                                    secondImage="/assets/images/after.jpg"
                                    title="Название процедуры - Наименование проблемы"
                                    link="/gallery"
                                    miniGallery={miniGallery}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <GalleryItem
                                    firstImage="/assets/images/before.jpg"
                                    secondImage="/assets/images/after.jpg"
                                    title="Название процедуры - Наименование проблемы"
                                    link="/gallery"
                                    miniGallery={miniGallery}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <GalleryItem
                                    firstImage="/assets/images/before.jpg"
                                    secondImage="/assets/images/after.jpg"
                                    title="Название процедуры - Наименование проблемы"
                                    link="/gallery"
                                    miniGallery={miniGallery}
                                />
                            </SwiperSlide>

                            <SwiperSlide>
                                <GalleryItem
                                    firstImage="/assets/images/before.jpg"
                                    secondImage="/assets/images/after.jpg"
                                    title="Название процедуры - Наименование проблемы"
                                    link="/gallery"
                                    miniGallery={miniGallery}
                                />
                            </SwiperSlide>
                        </Swiper>

                        <GalleryButton $isMiniGallery={miniGallery}>
                            <ArrowButton mode="right" className="swiper-button-next" />
                        </GalleryButton>
                    </SliderWrapper>

                    <LinkAllExamplesMobile href="/gallery">
                        <Button mode="secondary">Все примеры работ</Button>
                    </LinkAllExamplesMobile>
                </Body>
            </GalleryContainer>
        </Container>
    );
});

Gallery.displayName = 'Gallery';
