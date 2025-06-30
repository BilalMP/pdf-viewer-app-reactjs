import { useState, useEffect } from 'react'
import { pdfjs } from 'react-pdf'
import PDFControls from './PDFControls'
import PDFDisplay from './PDFDisplay'
import ErrorMessage from './ErrorMessage';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const PDFViewer: React.FC = () => {
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>('');
    const [numPage, setNumPage] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [zoom, setZoom] = useState<number>(1);
    const [error, setError] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
            setPdfUrl(URL.createObjectURL(file));
            setNumPage(0);
            setCurrentPage(1);
            setZoom(1);
            setError('');
        } else {
            setError('Please select a valid PDF file.');
            setPdfFile(null);
            setPdfUrl(null);
        }
    }

    const handleLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPage(numPages);
        setError("");
    }

    const handleLoadError = (error: Error): void => {
        setError("Failed to load PDF File :" + error.message);
        setPdfUrl(null);
        setPdfFile(null);
        setNumPage(0);
    }

    const handlePreviousPage = (): void => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = (): void => {
        if (currentPage < numPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleZoomIn = (): void => {
        setZoom(Math.min(zoom + 0.1, 2));
    }

    const handleZoomOut = (): void => {
        setZoom(Math.max(zoom - 0.1, 0.5));
    }

    const handleZoomReset = (): void => {
        setZoom(1);
    }

    const handleDownload = (): void => {
        if (pdfFile && pdfUrl) {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = pdfFile.name;
            link.click();
        }
    }

    useEffect(() => {
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        }
    }, [pdfUrl])

    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-100 py-8'>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
                <PDFControls
                    onFileChange={handleFileChange}
                    currentPage={currentPage}
                    numPages={numPage}
                    onPreviousPage={handlePreviousPage}
                    onNextPage={handleNextPage}
                    zoom={zoom}
                    onZoomIn={handleZoomIn}
                    onZoomOut={handleZoomOut}
                    onZoomReset={handleZoomReset}
                    onDownload={handleDownload}
                    isFileSelected={pdfFile !== null}
                />
                {error && <ErrorMessage message={error} />}
                {pdfUrl && (
                    <PDFDisplay
                        pdfUrl={pdfUrl}
                        currentPage={currentPage}
                        zoom={zoom}
                        onLoadSuccess={handleLoadSuccess}
                        onLoadErorr={handleLoadError}
                    />
                )}
            </div>
        </div>
    )
}

export default PDFViewer