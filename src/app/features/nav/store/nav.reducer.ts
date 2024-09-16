import { createFeature, createReducer, on } from "@ngrx/store";
import { NavActions } from "./nav.actions";

interface NavState {
    sidenavOpen: boolean;
}

const initialState: NavState = {
    sidenavOpen: false
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