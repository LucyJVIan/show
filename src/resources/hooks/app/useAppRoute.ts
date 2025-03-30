import { routes } from 'resources/constants';

export const useAppRoute = (key: keyof typeof routes) => {
    return routes[key];
};
