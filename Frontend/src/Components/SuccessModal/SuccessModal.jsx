import React from 'react';
import './SuccessModal.css';

export const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="success-icon">✓</div>
                <h2>Order Placed!</h2>
                <p>
                    Thank you for shopping with NovaMobiles. Your order has been successfully placed and is being processed. 
                    You can track your order by calling us or via the confirmation email we've sent you.
                </p>
                <button className="home-btn" onClick={onClose}>
                    Back to Home
                </button>
            </div>
        </div>
    );
};
