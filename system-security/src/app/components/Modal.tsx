import React from 'react';
import ReactModal from 'react-modal';


function Modal({ children, isOpen, onRequestClose }: { children: React.ReactNode, isOpen: boolean, onRequestClose: () => void }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}

            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                    backdropFilter: 'blur(5px)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    padding: '2rem',
                    borderRadius: '10px',
                    width: '50%',
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#121212',
                    color: "white"

                },
            }}
        >
            {children}
        </ReactModal>
    );
}

export default Modal;