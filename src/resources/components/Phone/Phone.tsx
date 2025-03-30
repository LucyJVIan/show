import { FC } from 'react';

import { TextPhone } from './Phone-styles';
import { PhoneProps } from './Phone-types';
import { Link } from '../Link';

export const Phone: FC<PhoneProps> = (props) => {
    const { fontSize } = props;

    return (
        <Link href="tel:+79991234567">
            <TextPhone fontSize={fontSize}>+7 999 123-45-67</TextPhone>
        </Link>
    );
};

Phone.displayName = 'Phone';
