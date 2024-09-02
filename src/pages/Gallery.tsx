import React from 'react';
import { useNavigate } from 'react-router-dom';

import breadCover from '../photos/bread/finabullar.jpg'; 
import cakesCover from '../photos/cakes/examcake.jpg'; 
import kidcakesCover from '../photos/kidcakes/awesome.jpg'; 
import moreCover from '../photos/more/smallcakes.jpg'; 

const albumFolders = [
{ name: 'Bröd', cover: breadCover, path: 'bröd' },
{ name: 'Tårtor', cover: cakesCover, path: 'tårtor' },
{ name: 'Barntårtor', cover: kidcakesCover, path: 'barntårtor' },
{ name: 'Övrigt', cover: moreCover, path: 'övrigt' }
];

const AlbumCard: React.FC<{ name: string; cover: string; onClick: () => void }> = ({ name, cover, onClick }) => (
<div className="album-card" onClick={onClick}>
    <img src={cover} alt={`Album ${name}`} loading='lazy'/>
    <p id='albumname'>{name}</p>
</div>
);
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
            onClick={() => handleAlbumClick(album.path)}
        />
        ))}
    </div>
    </> 
);
};

export default Gallery;