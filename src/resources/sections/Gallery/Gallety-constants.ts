import { Navigation, Pagination } from 'swiper/modules';

export const settingSwiperModules = [Navigation, Pagination];

export const settingSwiperNavigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
};

export const settingSwiperBreakpoints = {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
};
export const settingSwiperBreakpointsMini = {
    320: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
    1300: {
        slidesPerView: 2,
    },
};
