"use client"
import React, { useState } from 'react';

const CommentToast = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
                className={`toast ${show ? 'show' : ''}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-header bg-warning text-white">
                    <strong className="me-auto"><i className="bi bi-pen-fill"></i>Feedback</strong>
                    <small>just now</small>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setShow(false)}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="toast-body bg-warning-subtle text-secondary">
                    Please mention your feedback in the comment form given below.
                </div>
            </div>
        </div>
    );
};

export default CommentToast;