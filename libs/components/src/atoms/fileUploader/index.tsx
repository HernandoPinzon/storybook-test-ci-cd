// components/FileUploader.tsx
import React from 'react'
import './styles.css'

interface FileUploaderProps {
  onFileUpload: (file: File) => void
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      onFileUpload(file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0]
      onFileUpload(file)
    }
  }

  return (
    <div className="fileUploader">
      <div className="dropZone" onDragOver={handleDragOver} onDrop={handleDrop}>
        Drag and drop an icon here or click to select a file.
        <input
          type="file"
          onChange={handleFileChange}
          className="fileInput"
          style={{ display: 'none' }} // Hide the default input element
        />
      </div>
    </div>
  )
}

export default FileUploader
