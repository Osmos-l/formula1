import LapsPreview from "@/components/LapsPreview";
import MeetingPreview from "@/components/MeetingPreview";
import WeatherPreview from "@/components/WeatherPreview";
import { getLatestMeeting, getLatestSessionFromMeeting } from "@/services/openf1";

export default async function LiveTracking() {
  const meeting = await getLatestMeeting();
  const session = await getLatestSessionFromMeeting(meeting);

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4">
        <div className="row-span-1 col-span-2">
          { meeting && ( <MeetingPreview meeting={meeting} session={session} /> ) }
        </div>
        <div className="row-span-5 col-span-2">
          { session && ( <LapsPreview session={session} /> ) }
        </div>
        <div className="row-span-6 col-span-1">
          { session && ( <WeatherPreview session={session} /> ) }
        </div>
    </div>
  );
}
