import React from 'react';

interface ModalProps {
    isOpen: boolean;
    imageSrc: string | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageSrc, onClose }) => {
    if (!isOpen || !imageSrc) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt="Zoomed" className="modal-image" />
                <button className="modal-close-button" onClick={onClose}>
                    Stäng
                </button>
            </div>
        </div>
    );
};

export default Modal;