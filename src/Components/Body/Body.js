import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import Header from '../Header/Header'
import './Body.css'
import SongRow from '../SongRow/SongRow'

function Body({ spotify }) {
    const [{discover_weekly}] = useDataLayerValue();
    return (
        <div className='Body'>
            <Header spotify={spotify} />
            <div className='body__info'>
                <img src={discover_weekly?.images[0].url} alt=''/>
                <div className='body__infoText'>
                <strong>PLAYLIST</strong>
                <h2>{discover_weekly.name}</h2>
                <p>{discover_weekly?.description}</p>
                </div>
            </div>
                <div className='body__songs'>
                    <div className='body__icons'>
                        <PlayCircleFilled className='body__shuffle'/>
                        <Favorite fontSize='large'/>
                        <MoreHoriz />
                    </div>
                {discover_weekly?.tracks.items.map((item) => {
                    
                  return  <SongRow  track={item.track} />
                    
                })}
                </div>
            
            
        </div>
    )
}

export default Body
