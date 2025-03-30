'use client';

import { memo } from 'react';

import { TabSwitchProps } from 'resources/sections/TabSwitch/TabSwitch-types';

import { Root, Tab } from './TabSwitch-styles';

export const TabSwitch = memo<TabSwitchProps>((props) => {
    const { tabs, activeTab, setActiveTab } = props;

    return (
        <Root>
            {tabs.map((tab, index) => (
                <Tab key={index} onClick={() => setActiveTab(index)} $isActive={activeTab === index}>
                    {tab.label}
                </Tab>
            ))}
        </Root>
    );
});

TabSwitch.displayName = 'TabSwitch';
