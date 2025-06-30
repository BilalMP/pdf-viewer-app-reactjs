import React from "react";

interface PDFControlProps {
    onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    currentPage: number;
    numPages: number;
    onPreviousPage: () => void;
    onNextPage: () => void;
    zoom: number;
    onZoomIn: () => void;
    onZoomOut: () => void;
    onZoomReset: () => void;
    onDownload: () => void;
    isFileSelected: boolean;
}

const PDFControls: React.FC<PDFControlProps> = ({ onFileChange, currentPage, numPages, onPreviousPage, onNextPage, zoom, onZoomIn, onZoomOut, onZoomReset, onDownload, isFileSelected }) => {
    return (
        <div className="mb-5 space-y-3">
            <input
                type="file"
                accept="application/pdf"
                onChange={onFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:bg-blue-500 file:text-white file:font-semibold file:hover:bg-blue-600 file:cursor-pointer border-none focus:outline-none"
            />
            {
                isFileSelected && (
                    <div className="flex gap-2 items-center justify-center">
                        <button
                            onClick={onPreviousPage}
                            disabled={currentPage <= 1}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                            </svg>
                        </button>
                        <span className="text-gray-600">
                            Page {currentPage} of {numPages}
                        </span>
                        <button
                            onClick={onNextPage}
                            disabled={currentPage >= numPages}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z" />
                            </svg>
                        </button>
                        <button
                            onClick={onZoomOut}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M6.75 8.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" />
                                <path fillRule="evenodd" d="M9 2a7 7 0 1 0 4.391 12.452l3.329 3.328a.75.75 0 1 0 1.06-1.06l-3.328-3.329A7 7 0 0 0 9 2ZM3.5 9a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <span>
                            {(zoom * 100).toFixed(0)}%
                        </span>
                        <button
                            onClick={onZoomIn}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M9 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 9 6Z" />
                                <path fillRule="evenodd" d="M2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Zm7-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button
                            onClick={onZoomReset}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            Reset Zoom
                        </button>
                        <button
                            onClick={onDownload}
                            className="px-4 py- bg-blue-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-blue-600 disabled:cursor-not-allowed"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default PDFControls