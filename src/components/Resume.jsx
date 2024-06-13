import { pdfjs } from "react-pdf";

const Resume = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.js",
        import.meta.url
    ).toString();

    
    return (
        <>
        Resume
        </>
    )
}

export default Resume;