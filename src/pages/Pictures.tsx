import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { albumImages } from './PictureImporter';
import Modal from './Modal';
import blurredPlaceholder from '../photos/blurred/barntårta_s.jpg'; 

const PictureCard: React.FC<{ src: string; alt: string; onClick: () => void }> = 
({ src, alt, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="picture-album-card" onClick={onClick}>
            <div className="-picture-image-wrapper">
                <img src={blurredPlaceholder} alt={`${alt} (low res)`} className="picture-blur-image"/>
                <img 
                    src={src} 
                    alt={alt} 
                    className={`picture-main-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
        </div>
    );
};

const Pictures: React.FC = () => {
    const { albumPath } = useParams<{ albumPath: string }>();
    const navigate = useNavigate();
    const images = albumPath ? albumImages[albumPath as keyof typeof albumImages] || [] : [];

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (img: string):void => {
        setSelectedImage(img);
        setModalOpen(true);
    };

    const closeModal = () :void=> {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="pictures-container">
            {albumPath ? (
                <>
                    <h2>{albumPath.charAt(0).toUpperCase() + albumPath.slice(1)}</h2>
                    <button id='backbutton' onClick={() => navigate(-1)} >
                        {'⬅ Tillbaka'}
                    </button>
                    <div className="albums">
                        {images.map((img, index) => (
                            <PictureCard 
                                key={index}
                                src={img}
                                alt={`Picture ${index + 1}`}
                                onClick={() => openModal(img)}
                            />
                        ))}
                    </div>
                    <Modal 
                        isOpen={isModalOpen} 
                        imageSrc={selectedImage} 
                        onClose={closeModal} 
                    />
                </>
            ) : (
                <p>Tillfälligt fel: Albumet hittades inte</p>
            )}
        </div>
    );
};

export default Pictures;