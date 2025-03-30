import { memo } from 'react';

import { Accordion } from 'resources/components';

import { SidebarWrapper } from './Sidebar-styles';
import { SidebarProps } from './Sidebar-types';

export const Sidebar = memo<SidebarProps>((props) => {
    const { items } = props;

    return (
        <SidebarWrapper>
            <Accordion items={items} isSidebar />
        </SidebarWrapper>
    );
});

Sidebar.displayName = 'Sidebar';
