"use client";

import { useState } from "react";

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 text-white font-medium"
            style={{ backgroundColor: '#054221' }}
          >
            Download PDF
          </a>
        </div>

        {pdfError ? (
          <div className="border rounded-lg p-8 text-center bg-card">
            <p className="text-muted-foreground mb-4">
              Unable to display PDF in browser.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 text-white font-medium"
              style={{ backgroundColor: '#054221' }}
            >
              Download Resume
            </a>
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden bg-white">
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-[calc(100vh-200px)] min-h-150 md:min-h-200"
              title="Resume PDF"
              onError={() => setPdfError(true)}
            />
          </div>
        )}

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Having trouble viewing? {" "}
            <a
              href="/resume.pdf"
              download
              className="hover:underline font-medium"
              style={{ color: '#054221' }}
            >
              Download the PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
