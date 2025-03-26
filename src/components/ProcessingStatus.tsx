import React from 'react';
import { ProcessingStatus as Status } from '../types';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  status: Status;
}

export function ProcessingStatus({ status }: ProcessingStatusProps) {
  const getStatusMessage = () => {
    switch (status.status) {
      case 'uploading':
        return 'Uploading video...';
      case 'transcribing':
        return 'Transcribing audio using Whisper AI...';
      case 'summarizing':
        return 'Generating summary with GPT-4...';
      case 'creating-tasks':
        return 'Creating Trello tasks...';
      case 'completed':
        return 'Processing completed!';
      case 'error':
        return `Error: ${status.error}`;
      default:
        return '';
    }
  };

  if (status.status === 'idle') return null;

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
      {status.status !== 'completed' && status.status !== 'error' && (
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      )}
      <p className="text-lg font-medium">{getStatusMessage()}</p>
      {status.progress !== undefined && (
        <div className="w-full max-w-md">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${status.progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}