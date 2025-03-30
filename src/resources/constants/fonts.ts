import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const fontAvenirNextCyr = localFont({
    src: [
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-UltraLightItalic.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-Thin.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-ThinItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-Demi.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-DemiItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/AvenirNextCyr/AvenirNextCyr-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-avenir-next-cyr-sans',
});

export const fontRoboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    variable: '--font-roboto-sans',
});
