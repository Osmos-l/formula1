import { DEFAULT_LAP, Lap } from '@/models/openf1/lap';
import { Meeting, DEFAULT_MEETING } from '@/models/openf1/meeting';
import { Session, DEFAULT_SESSION } from '@/models/openf1/session';
import { Weather, DEFAULT_WEATHER} from '@/models/openf1/weather';
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
    } catch (error) {
        sendErrorToDashboard(error);
        return DEFAULT_MEETING;
    }
}

/**
 * Fetch the latest session of the meeting
 * @param meeting the associated meeting
 * @returns the latest session
 */
export const getLatestSessionFromMeeting = async(meeting: Meeting): Promise<Session> => {
    try {
        const res = await fetch(`${BASE_URL}/sessions?meeting_key=${meeting.meeting_key}&session_key=latest`);

        const latestSessionData = await res.json();
        
        return latestSessionData[0];
    } catch (error) {
        sendErrorToDashboard(error);
        return DEFAULT_SESSION;
    }
}

export const getLatestWeatherUpdateFromSession = async(session: Session): Promise<Weather[]> => {
    try {
        const res = await fetch(`${BASE_URL}/weather?meeting_key=${session.meeting_key}&session_key=${session.session_key}`);

        const latestWeatherData = await res.json();
        
        return latestWeatherData.reverse();
    } catch (error) {
        sendErrorToDashboard(error);
        return [DEFAULT_WEATHER];
    }
}

export const getLapsFromSession = async(session: Session): Promise<Lap[]> => {
    try {
        const res = await fetch(`${BASE_URL}/laps?meeting_key=${session.meeting_key}&session_key=${session.session_key}`);

        const lapsData = await res.json();
        
        return lapsData.reverse();
    } catch (error) {
        sendErrorToDashboard(error);
        return [DEFAULT_LAP]
    }
}