import { createFeature, createReducer, on } from "@ngrx/store";
import { NavActions } from "./nav.actions";
import { NavConfig } from "../nav.model";

interface NavState {
    sidenavOpen: boolean;
    // config: NavConfig;
}

const initialState: NavState = {
    sidenavOpen: false,
    // config: 
}

export const navFeature = createFeature({
    name: 'nav',
    reducer: createReducer(
        initialState,
        on(NavActions.toggleSidenav, (state) => ({
            ...state,
            sidenavOpen: !state.sidenavOpen
        })),
        on(NavActions.setSidenav, (state, { sidenavOpen }) => ({
            ...state,
            sidenavOpen
        }))
    )
})

export const {
    name,
    reducer,
    selectNavState,
    selectSidenavOpen
} = navFeature;