import { convertToHumanReadableDate, convertToHumanReadableTime } from '@/utils/timestamp';
import { Session } from '@/models/openf1/session';
import { MeetingInstance } from '@/stores/models/Meeting';

interface MeetingPreviewProps {
    meeting: MeetingInstance,
    session: Session
}
export default function MeetingPreview({ meeting, session }: MeetingPreviewProps) {
    return (
        <div className='p-2'>
            { meeting && (
                <h1>{meeting.location} - {meeting.meeting_name} ({meeting.country_code} {meeting.year})</h1>
            )}
            { session && (
                <p className='px-5'>
                    {session.session_name} session<br />
                    The {convertToHumanReadableDate(session.date_start)} starting at {convertToHumanReadableTime(session.date_start)}
                </p>
            ) }
        </div>
    );
}
