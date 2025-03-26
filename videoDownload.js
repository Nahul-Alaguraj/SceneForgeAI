import { exec } from 'child_process';
import path from 'path';

export function downloadVideo(videoUrl) {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, 'generate_video.py');
        exec(`python "${scriptPath}" "${videoUrl}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error downloading video: ${error.message}`);
                return reject(new Error('Failed to download video'));
            }
            resolve(stdout);
        });
    });
}
