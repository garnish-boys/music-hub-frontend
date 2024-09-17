// NavItem
export interface NavItem {
    title: string;
    icon: string;
    isActive: boolean;
    routerLink?: string;
    externalLink?: string;
}

// NavLink
export type NavLinkType = 'header' | 'side'