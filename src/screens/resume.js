import React, { useEffect, useState } from "react";
import { Document,Page,pdfjs  } from "react-pdf";
import NavBar from "../Components/navbar";
import CVpdf from "../assets/CV.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePage =()=>{

    const linKResume = "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
    return(
        <div>
            <NavBar></NavBar>
{/* 
            <Document file={CVpdf}

            // onLoadError={console.error}
            >
                <Page pageNumber={1}  ></Page>
            </Document> */}
        </div>
    );
}

export default ResumePage;