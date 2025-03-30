'use client';

import { LayoutContainer } from 'resources/components';
import { galleryTreatments } from 'resources/data/mocks';
import {
    Banner,
    SliderStaff,
    AppointmentOverview,
    GalleryTreatment,
    CosmetologyProgramsBanner,
    ScientificPublications,
    Gallery,
    News,
} from 'resources/sections';

import { slides } from './HomePage-constants';
import { Body, MainBanner } from './HomePage-styles';

export const HomePage = () => {
    return (
        <>
            <MainBanner>
                <Banner
                    title="Эксперт по лазерной<br/>и реконструктивной косметологии Лариса Радецкая"
                    posterUrl="/assets/images/molecules.png"
                    description="Специалист, который поможет быстро и комплексно решить беспокоющую вас проблему"
                    buttonTitle="Подробнее об авторе"
                />
            </MainBanner>

            <Body>
                <SliderStaff slides={slides} isMainRounded />

                <AppointmentOverview />

                <LayoutContainer>
                    <GalleryTreatment items={galleryTreatments} />
                </LayoutContainer>
            </Body>

            <Gallery />

            <Body>
                <CosmetologyProgramsBanner />

                <ScientificPublications />

                <News />
            </Body>
        </>
    );
};

HomePage.displayName = 'HomePage';
