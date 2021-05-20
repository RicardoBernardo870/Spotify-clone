import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer'
import { PlaylistAdd } from '@material-ui/icons';


export default function Sidebar() {
    const [{playlists}] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='logo'/>
            <SidebarOption Icon= {HomeIcon} title='Home' />
            <SidebarOption Icon= {SearchIcon} title='Search'/>
            <SidebarOption Icon= {LibraryMusicIcon} title='Library'/>

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} key={playlist.id} />
            ))}

            
        </div>
    )
}
