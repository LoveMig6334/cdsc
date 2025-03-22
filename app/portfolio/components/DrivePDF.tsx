import React from 'react';

interface PDFViewerProps {
  fileId: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const GoogleDrivePDFViewer: React.FC<PDFViewerProps> = ({
  fileId,
  width = '100%',
  height = '100%',
  className = ''
}) => {
  function extractGoogleDriveFileId(url: string): string | null {
    const filePattern = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
    const openPattern = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
    const docsPattern = /docs\.google\.com\/\w+\/d\/([a-zA-Z0-9_-]+)/;
    const idParamPattern = /[?&]id=([a-zA-Z0-9_-]+)/;
    
    const fileMatch = url.match(filePattern);
    if (fileMatch && fileMatch[1]) return fileMatch[1];
    
    const openMatch = url.match(openPattern);
    if (openMatch && openMatch[1]) return openMatch[1];
    
    const docsMatch = url.match(docsPattern);
    if (docsMatch && docsMatch[1]) return docsMatch[1];
    
    const idParamMatch = url.match(idParamPattern);
    if (idParamMatch && idParamMatch[1]) return idParamMatch[1];
    
    return null;
  }

  const isUrl = fileId.includes('drive.google.com');
  const extractedId = isUrl ? extractGoogleDriveFileId(fileId) : fileId;
  
  const embedUrl = `https://drive.google.com/file/d/${extractedId}/preview`;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width,
    height: height,
    paddingTop: typeof height === 'string' && height.includes('%') ? height : '56.25%',
    overflow: 'hidden'
  };

  const iframeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none'
  };

  return (
    <div style={containerStyle} className={`pdf-container ${className}`}>
      <iframe
        src={embedUrl}
        style={iframeStyle}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Google Drive PDF Viewer"
      />
    </div>
  );
};

export default GoogleDrivePDFViewer;