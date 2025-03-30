import { memo } from 'react';

import { Root, Step, Title } from './AppointmentOverviewStepItem-styles';
import { AppointmentOverviewItemProps } from '../AppointmentOverview-types';

export const AppointmentOverviewStepItem = memo<AppointmentOverviewItemProps>((props) => {
    const { step, title } = props;

    return (
        <Root>
            <Step>{step}</Step>
            <Title>{title}</Title>
        </Root>
    );
});

AppointmentOverviewStepItem.displayName = 'AppointmentOverviewStepItem';
