import { types, Instance } from 'mobx-state-tree'
import Meeting from './Meeting';

const Session = types
  .model('Session', {
    session_key: types.identifierNumber,
    meeting_key: types.number,
    meeting : types.maybeNull(Meeting),
    circuit_short_name: types.string,
    country_code: types.string,
    country_key: types.number,
    country_name: types.string,
    date_start: types.string,
    date_end: types.string,
    gmt_offset: types.string,
    location: types.string,
    year: types.number,
    session_name: types.string,
    session_type: types.string,
  });

  export type SessionInstance = Instance<typeof Session>;

  export default Session;
