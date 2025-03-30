interface Tab {
    label: string;
}

export interface TabSwitchProps {
    tabs: Tab[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}
