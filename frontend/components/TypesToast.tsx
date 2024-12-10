"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertOctagon } from 'lucide-react';

const TypesToast = () => {
    const [show, setShow] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Initialize Bootstrap toast if needed
        if (typeof window !== 'undefined') {
            require('bootstrap');
        }
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
                className={`toast ${show ? 'show' : ''}`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-header bg-warning text-white">
                    <strong className="me-auto">Alert <AlertOctagon className='mb-1 ms-2'/></strong>
                    <small>just now</small>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        onClick={() => setShow(false)}
                        aria-label="Close"
                    ></button>
                </div>
                <div className="toast-body bg-warning-subtle text-secondary">
                    <p className="mb-2">This page shows only the available flowers,</p>
                    To see prices and place your order, visit the{' '}
                    <Link href="/prices" className="text-decoration-none">
                        <i className="bi bi-link-45deg fs-5"></i>Price
                    </Link>{' '}
                    section.
                </div>
            </div>
        </div>
    );
};

export default TypesToast;