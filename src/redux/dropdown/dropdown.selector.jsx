import {createSelector} from 'reselect'

const dropdownState=state=>state.dropdown;
export const dropownSelector=createSelector(

    [dropdownState],
    (dropdown)=>dropdown.hidden
)