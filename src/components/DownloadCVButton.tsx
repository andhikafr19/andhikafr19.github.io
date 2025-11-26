"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getAssetPath } from "@/lib/utils";

interface DownloadCVButtonProps {
  className?: string;
}

export function DownloadCVButton({ className }: DownloadCVButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Trigger download
      const link = document.createElement("a");
      link.href = getAssetPath("/cv.pdf");
      link.download = "CV_Andhika_Firdaus.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      className={className}
      size="lg"
    >
      <Download className="h-5 w-5 mr-2" />
      {isDownloading ? "Mengunduh..." : "Download CV (PDF)"}
    </Button>
  );
}
