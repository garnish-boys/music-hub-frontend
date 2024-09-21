// NavItem
export interface NavItem {
    title: string;
    icon?: string;
    routerLink?: string;
    externalLink?: string;
}

export interface NavConfig {
    headerNavItems: NavItem[];
    sidenavItems: NavItem[];
    showHeaderDrawerToggle: boolean;
    sidenavFixed: boolean;
}

// NavLink
export type NavLinkType = 'header' | 'side'