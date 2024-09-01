import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { albumImages } from './PictureImporter';
import Modal from './Modal';  

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
                    <div className="pictures-grid">
                        {images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Picture ${index + 1}`} 
                                loading="lazy" 
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