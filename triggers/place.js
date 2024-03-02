// triggers on a new place with a certain tag
const fetchPlace = async (z, bundle) => {
  const response = await z.request({
    url: `https://api.kisi.io/places/${bundle.inputData.placeId}`,
  });
  // this should return an array of objects
  return [response.data];
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#triggerschema
  key: "place",
  noun: "Place",

  display: {
    label: "Fetch Place",
    description: "Fetches data about a place.",
  },

  operation: {
    perform: fetchPlace,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [
      {
        key: "placeId",
        type: "string",
        helpText: "Kisi Place ID",
        required: true,
      },
    ],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    sample: {
      id: 4567,
      name: "Acme",
      description: null,
      address: "10 Bedford Ave, Brooklyn, NY, USA",
      latitude: 40.72,
      longitude: -73.95,
      image: "...",
      time_zone: "America/New_York",
      tz_time_zone: "America/New_York",
      locks_count: 1,
      integrations_count: 0,
      locked_down: false,
      locked_down_since: null,
      created_at: "2022-10-23T16:22:03.746Z",
      updated_at: "2022-11-19T21:05:19.007Z",
      user_id: null,
      organization_id: 1234,
      occupancy_rate: 0.95,
      members_count: 0,
      organization: {
        id: 1234,
        name: "Acme",
        domain: "acme",
      },
      geofence_restriction_enabled: false,
      geofence_restriction_radius: 300,
      primary_device_restriction_enabled: false,
      reader_restriction_enabled: false,
      time_restriction_enabled: false,
      time_restriction_time_zone: null,
      time_restriction_time_slots: null,
      current_user_permissions: {
        share: true,
        manage: false,
      },
      brand_color: null,
      header_image: "...",
      header_image_url: "...",
      transfer_to_id: null,
      color: null,
      logo: null,
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/main/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ],
  },
};
