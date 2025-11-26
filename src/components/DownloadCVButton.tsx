"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DownloadCVButtonProps {
  className?: string;
}

export function DownloadCVButton({ className }: DownloadCVButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Optional: Track download count via API
      await fetch("/api/cv-download", { method: "POST" }).catch(() => {
        // Silently fail if tracking endpoint doesn't exist
      });

      // Trigger download
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "CV_Nama_Saya.pdf";
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
