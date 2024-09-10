import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import breadCover from '../photos/bread/finabullar.jpg'; 
import cakesCover from '../photos/cakes/examcake.jpg'; 
import kidcakesCover from '../photos/kidcakes/awesome.jpg'; 
import moreCover from '../photos/more/smallcakes.jpg'; 

import bröd_s from '../photos/blurred/bröd_s.jpg';
import tårta_s from '../photos/blurred/tårta_s.jpg';
import barntårta_s from '../photos/blurred/barntårta_s.jpg';
import övrigt_s from '../photos/blurred/övrigt_s.jpg';

const albumFolders = [
{ name: 'Bröd', cover: breadCover, path: 'bröd', fastpic: bröd_s},
{ name: 'Tårtor', cover: cakesCover, path: 'tårtor' , fastpic: tårta_s},
{ name: 'Barntårtor', cover: kidcakesCover, path: 'barntårtor', fastpic: barntårta_s },
{ name: 'Övrigt', cover: moreCover, path: 'övrigt', fastpic: övrigt_s }
];

const AlbumCard: React.FC<{ name: string; cover: string; fastpic: string; onClick: () => void }> = 
({ name, cover, fastpic, onClick }) => {
const [imageLoaded, setImageLoaded] = useState(false);

return (
    <div className="album-card" onClick={onClick}>
    <div className="image-wrapper">
        <img src={fastpic} alt={`Album ${name} (low res)`} className="blur-image"/>
        <img 
        src={cover} 
        alt={`Album ${name}`} 
        className={`main-image ${imageLoaded ? 'loaded' : ''}`}
        onLoad={() => setImageLoaded(true)}
        />
    </div>
    <p id='albumname'>{name}</p>
    </div>
);
};

const Gallery: React.FC = () => {
const navigate = useNavigate();
const handleAlbumClick = (path: string):void => {
    navigate(`/galleri/${path}`);
};
return (
    <>
    <h2>Galleri</h2>
    <div className='albums'>
        {albumFolders.map((album) => (
        <AlbumCard 
            key={album.name} 
            name={album.name} 
            cover={album.cover}
            fastpic={album.fastpic}
            onClick={() => handleAlbumClick(album.path)}
        />
        ))}
    </div>
    </> 
);
};

export default Gallery;