import {createSelector} from 'reselect'

const Directoriesstate=state=>state.directory;

export const  directoriesSelector=createSelector(

    [Directoriesstate],
    directory=>directory.directories
)