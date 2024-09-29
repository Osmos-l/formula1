import { DEFAULT_LAP, DTOLap } from '@/api/models/lap';
import { DTOSession, DEFAULT_SESSION } from '@/api/models/session';
import { DTOWeather, DEFAULT_WEATHER} from '@/api/models/weather';
import { sendErrorToDashboard } from '@/api/uncaughtException';
import { MeetingInstance } from '@/stores/models/Meeting';

const BASE_URL = 'https://api.openf1.org/v1'

/**
 * Fetch the latest session of the meeting
 * @param meeting the associated meeting
 * @returns the latest session
 */
export const getLatestSessionFromMeeting = async(meeting: MeetingInstance): Promise<DTOSession> => {
    try {
        const res = await fetch(`${BASE_URL}/sessions?meeting_key=${meeting.meeting_key}&session_key=latest`);

        const latestSessionData = await res.json();
        
        return latestSessionData[0];
    } catch (error) {
        sendErrorToDashboard(error);
        return DEFAULT_SESSION;
    }
}

export const getLatestWeatherUpdateFromSession = async(session: DTOSession): Promise<DTOWeather[]> => {
    try {
        const res = await fetch(`${BASE_URL}/weather?meeting_key=${session.meeting_key}&session_key=${session.session_key}`);

        const latestWeatherData = await res.json();
        
        return latestWeatherData.reverse();
    } catch (error) {
        sendErrorToDashboard(error);
        return [DEFAULT_WEATHER];
    }
}

export const getLapsFromSession = async(session: DTOSession): Promise<DTOLap[]> => {
    try {
        const res = await fetch(`${BASE_URL}/laps?meeting_key=${session.meeting_key}&session_key=${session.session_key}`);

        const lapsData = await res.json();
        
        return lapsData.reverse();
    } catch (error) {
        sendErrorToDashboard(error);
        return [DEFAULT_LAP]
    }
}