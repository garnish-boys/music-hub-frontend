import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

export const NavActions = createActionGroup({
    source: 'Nav',
    events: {
        'Toggle Sidenav': emptyProps(),
        'Set Sidenav': props<{ sidenavOpen: boolean }>()
    }
});