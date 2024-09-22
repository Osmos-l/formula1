import { getLatestMeeting, getLatestSessionFromMeeting } from '@/services/openf1';
import { convertToHumanReadableDate, convertToHumanReadableTime } from '@/utils/timestamp';
import { Meeting } from "@/models/openf1/meeting";
import { Session } from '@/models/openf1/session';
import WeatherPreview from '../WeatherPreview';

export default async function LatestMeetingPreview() {
    const latestMeeting: Meeting = await getLatestMeeting();
    const latestSession: Session = await getLatestSessionFromMeeting(latestMeeting);

    return (
        <div className='p-2 flex justify-around'>
            <div>
                <h1>Meeting: </h1>
                <p className='px-5'>
                    {latestMeeting?.location} - {latestMeeting?.meeting_name} ({latestMeeting?.meeting_code} {latestMeeting?.year})<br />
                    {latestSession.session_name} session:  ({convertToHumanReadableDate(latestSession.date_start)})<br />
                    At {convertToHumanReadableTime(latestSession.date_start)} to {convertToHumanReadableTime(latestSession.date_end)}
                </p>
            </div>
            <div>
                <WeatherPreview session={latestSession} />
            </div>
        </div>
    );
}
