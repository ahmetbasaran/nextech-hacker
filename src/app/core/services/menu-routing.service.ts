import { Injectable } from '@angular/core';

declare const $: any;
declare interface MenuRoutes {
    path: string;
    title: string;
    icon?: string;
    target?: string;
}

const menuRoutes: MenuRoutes[] = [
];

@Injectable()
export class MenuRoutingService {
    public get AllMenuItems(): Array<any> {
        return menuRoutes;
    }
}
