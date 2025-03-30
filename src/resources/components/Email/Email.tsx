import { memo } from 'react';

import { Link } from '../Link';
import { TextEmail } from './Email-styles';

export const Email = memo(() => {
    return (
        <Link href="mailto:info@support.ru">
            <TextEmail>info@support.ru</TextEmail>
        </Link>
    );
});

Email.displayName = 'Email';
