"use client";

import { useState } from "react";

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
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
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Download Resume
            </a>
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden bg-white">
            <iframe
              src="/resume.pdf#view=FitH"
              className="w-full h-[calc(100vh-200px)] min-h-[800px]"
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
              className="text-primary hover:underline"
            >
              Download the PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
