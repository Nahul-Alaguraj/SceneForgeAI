import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Video } from 'lucide-react';
import clsx from 'clsx';

interface VideoUploaderProps {
  onFileSelect: (file: File) => void;
  isProcessing: boolean;
}

export function VideoUploader({ onFileSelect, isProcessing }: VideoUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    disabled: isProcessing,
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400',
        isProcessing && 'opacity-50 cursor-not-allowed'
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        {isDragActive ? (
          <Upload className="w-12 h-12 text-blue-500" />
        ) : (
          <Video className="w-12 h-12 text-gray-400" />
        )}
        <div className="text-lg font-medium">
          {isDragActive
            ? 'Drop your video here'
            : 'Drag & drop your meeting recording here'}
        </div>
        <p className="text-sm text-gray-500">
          or click to select a file (MP4, MOV, AVI, WebM)
        </p>
      </div>
    </div>
  );
}