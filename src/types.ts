export interface ProcessingStatus {
  status: 'idle' | 'uploading' | 'transcribing' | 'summarizing' | 'creating-tasks' | 'completed' | 'error';
  progress?: number;
  error?: string;
}

export interface MeetingSummary {
  title?: string;
  summary?: string;
  actionItems?: string[];
  participants?: string[];
  duration?: string;
}