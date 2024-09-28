import { types, Instance } from 'mobx-state-tree'

const Meeting = types
  .model('Meeting', {
    circuit_key: types.identifierNumber,
    circuit_short_name: types.string,
    country_code: types.string,
    country_key: types.number,
    country_name: types.string,
    date_start: types.string,
    gmt_offset: types.string,
    location: types.string,
    meeting_key: types.identifierNumber,
    meeting_name: types.string,
    meeting_official_name: types.string,
    year: types.number
  });

  export type MeetingInstance = Instance<typeof Meeting>;

  export default Meeting;
