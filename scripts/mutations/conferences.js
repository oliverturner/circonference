import request from "../request";

const getDate = d =>
  d && d.length
    ? new Date(Date.parse(d)).toISOString()
    : new Date(0).toISOString();

const query = row => `
record: createConference(
  name: ${JSON.stringify(row.name || "")}
  topic: ${JSON.stringify(row.topic || "")}
  url: ${JSON.stringify(row.url || "")}
  twitter: ${JSON.stringify(row.twitter || "")}
  city: ${JSON.stringify(row.city || "")}
  stateProvince: ${JSON.stringify(row.stateProvince || "")}
  country: ${JSON.stringify(row.country || "")}
  eventStartDate: "${getDate(row.eventStartDate)}"
  eventEndDate: "${getDate(row.eventEndDate)}"
  cfpStartDate: "${getDate(row.cfpStartDate)}"
  cfpEndDate: "${getDate(row.cfpEndDate)}"
  codeOfConduct: ${!!row.codeOfConduct}
  latitude: ${row.latitude || 0}
  longitude: ${row.longitude || 0}
) {
  id
  name
  topic
  url
  twitter
  city
  stateProvince
  country
  eventStartDate
  eventEndDate
  cfpStartDate
  cfpEndDate
  codeOfConduct
  latitude
  longitude
}
`;

const createRecord = async record => {
  const result = await request(`mutation {${query(record)}}`);

  return result.record;
};

export default createRecord;
