import { Meeting, DEFAULT_MEETING } from '@/models/openf1/meeting';
import { DEFAULT_SESSION, Session } from '@/models/openf1/session';
import { sendErrorToDashboard } from '@/services/uncaughtException';

const BASE_URL = 'https://api.openf1.org/v1'

/**
 * Fetch the latest F1 Meeting
 * @returns LatestMeeting: Meeting
 */
export const getLatestMeeting = async(): Promise<Meeting> => {
    try {
        const res = await fetch(`${BASE_URL}/meetings?meeting_key=latest`);

        const latestMeetingData = await res.json();
        
        return latestMeetingData[0];
    } catch (error: any) {
        sendErrorToDashboard(error);
        return DEFAULT_MEETING;
    }
}

export const getLatestSessionFromMeeting = async(meeting: Meeting): Promise<Session> => {
    try {
        const res = await fetch(`${BASE_URL}/sessions?meeting_key=${meeting.meeting_key}&session_key=latest`);

        const latestSessionData = await res.json();
        
        return latestSessionData[0];
    } catch (error: any) {
        sendErrorToDashboard(error);
        return DEFAULT_SESSION;
    }
}