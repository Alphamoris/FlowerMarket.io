export default function LoadingSpinner() {

    return (
        <>
            <div className="text-center bg-info-subtle align-content-center h-100 w-100 loader">
                <div className="text-dark fs-2 fw-bolder ms-4" role="status">
                    <span className="">Loading...</span>
                </div>
                <div className="spinner-grow text-primary ms-4" role="status">
                    <span className="sr-only visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary ms-4" role="status">
                    <span className="sr-only visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success ms-4" role="status">
                    <span className="sr-only visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}