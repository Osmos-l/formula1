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
            <h1>{meeting?.location} - {meeting?.meeting_name} ({meeting?.meeting_code} {meeting?.year})</h1>
            <p className='px-5'>
                { session && (
                    <>
                    {session.session_name} session<br />
                    The {convertToHumanReadableDate(session.date_start)} starting at {convertToHumanReadableTime(session.date_start)}
                    </>
                ) }
            </p>
        </div>
    );
}
