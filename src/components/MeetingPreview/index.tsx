import { convertToHumanReadableDate, convertToHumanReadableTime } from '@/utils/timestamp';
import { Meeting } from "@/models/openf1/meeting";
import { Session } from '@/models/openf1/session';

interface MeetingPreviewProps {
    meeting: Meeting,
    session: Session
}
export default function MeetingPreview({ meeting, session }: MeetingPreviewProps) {
    return (
        <div className='p-2'>
            <div>
                <h1>Meeting: </h1>
                <p className='px-5'>
                    {meeting?.location} - {meeting?.meeting_name} ({meeting?.meeting_code} {meeting?.year})<br />
                    { session && (
                        <>
                        {session.session_name} session:  ({convertToHumanReadableDate(session.date_start)})<br />
                        At {convertToHumanReadableTime(session.date_start)} to {convertToHumanReadableTime(session.date_end)}
                        </>
                    ) }
                </p>
            </div>
        </div>
    );
}
