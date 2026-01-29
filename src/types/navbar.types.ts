export interface NavItem {
    id: string;
    label: string;
}

export interface MobileMenuProps {
    open: boolean;
    items: NavItem[];
    activeItem: string;
    onClose: () => void;
    logo: string;
}

export interface NavLinksProps {
    items: NavItem[];
    activeItem: string;
}
