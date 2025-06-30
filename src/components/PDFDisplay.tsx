import { Document, Page } from 'react-pdf'

interface PDFDisplayProps {
    pdfUrl: string;
    currentPage: number;
    zoom: number;
    onLoadSuccess: (pdf: { numPages: number }) => void;
    onLoadErorr: (error: Error) => void;
}

const PDFDisplay: React.FC<PDFDisplayProps> = ({ pdfUrl, currentPage, zoom, onLoadSuccess, onLoadErorr }) => {
    return (
        <div className='overflow-auto max-h-[600px] border border-gray-300 rounded-lg'>
            <Document file={pdfUrl} onLoadSuccess={onLoadSuccess} onLoadError={onLoadErorr}>
                <Page pageNumber={currentPage} scale={zoom} />
            </Document>
        </div>
    )
}

export default PDFDisplay