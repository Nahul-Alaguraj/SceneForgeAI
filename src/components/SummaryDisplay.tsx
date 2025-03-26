import React from 'react';
import { MeetingSummary } from '../types';
import { Clock, Users, CheckSquare, FileText } from 'lucide-react';

interface SummaryDisplayProps {
  summary: MeetingSummary;
}

export function SummaryDisplay({ summary }: SummaryDisplayProps) {
  if (!summary.title) return null;

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold">{summary.title}</h2>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {summary.duration && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{summary.duration}</span>
          </div>
        )}
        {summary.participants && (
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{summary.participants.join(', ')}</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <FileText className="w-5 h-5" />
            Summary
          </h3>
          <p className="text-gray-700 whitespace-pre-line">{summary.summary}</p>
        </div>

        {summary.actionItems && summary.actionItems.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
              <CheckSquare className="w-5 h-5" />
              Action Items
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {summary.actionItems.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}