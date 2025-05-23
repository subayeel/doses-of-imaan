/* eslint-disable react/no-unescaped-entities */
// src/app/guide-your-friend/PDFDocument.tsx
"use client";
import React, { ReactNode, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import { Copy, Download, Loader2 } from "lucide-react"; // Assuming you have lucide-react installed for icons
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface PDFDocumentProps {
  children: ReactNode;
  title: string;
  fileName: string;
  url: string;
  // isLoading: boolean; // We'll manage loading internally for the download process
}

export const PDFDocument: React.FC<PDFDocumentProps> = ({
  children,
  fileName,
  url,
  // isLoading, // Removed external isLoading prop
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); // Internal loading state for PDF button

  // A4 dimensions in mm (standard)
  const A4_WIDTH_MM = 210;
  const A4_HEIGHT_MM = 297;

  const generatePDF = async () => {
    if (!contentRef.current || isGeneratingPDF) return; // Prevent multiple clicks

    setIsGeneratingPDF(true); // Start loading state for button

    const contentElement = contentRef.current;
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    try {
      // Capture the whole content into a single canvas
      const canvas = await html2canvas(contentElement, {
        scale: 2, // Increase scale for better resolution
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.9); // Use JPEG with compression for smaller size
      const imgWidth = A4_WIDTH_MM;
      const pageHeight = A4_HEIGHT_MM; // Define page height for iteration
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add subsequent pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight; // Calculate position for the next page
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(fileName);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      alert(
        "Failed to generate PDF. Please try again or check the console for errors."
      );
    } finally {
      setIsGeneratingPDF(false); // End loading state for button
    }
  };

  const handleCopyLink = async () => {
    if (url) {
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Copied!",
          description: "Share link copied to clipboard.",
        });
      } catch (err) {
        console.error("Failed to copy:", err);
        toast({
          title: "Error",
          description: "Failed to copy link. Please try manually.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="pdf-document animate-fadeIn">
      <div className="mb-8 text-center space-y-4 px-8">
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Share this link with your friend:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <Input
            value={url}
            readOnly
            className="flex-grow bg-gray-700 border-gray-600 text-teal-300 text-sm truncate sm:w-auto w-full" // Added truncate and width adjustments
          />
          {/* Highlighted Copy Button */}

          <div className="flex gap-2">
            <Button
              onClick={handleCopyLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200 w-full sm:w-auto"
            >
              <Copy className="mr-2 h-4 w-4 animate-bounce" /> Copy Link
            </Button>

            <Button
              onClick={generatePDF}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold transition duration-200 disabled:opacity-50 disabled:pointer-events-none"
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4 animate-pulse" />
                  Download Guide PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div ref={contentRef}>{children}</div>
      <p className="mt-4 text-sm text-gray-400 text-center">
        Content preview for PDF generation. Click 'Download Guide PDF' above.
      </p>
    </div>
  );
};
