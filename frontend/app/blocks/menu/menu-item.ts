export interface MenuItem {
    label: string;
    routeName?: string;
    submenuItems?: Array<MenuItem>
    active?: boolean
}