const getPlace = require("./triggers/place");

const findPlace = require("./searches/place");

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers["Authorization"] = `KISI-LOGIN ${bundle.authData.apiKey}`;
  request.headers["Accept"] = "application/json";
  return request;
};

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [getPlace.key]: getPlace,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [findPlace.key]: findPlace,
  },

  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {},
  authentication: {
    type: "custom",
    fields: [{ key: "apiKey", type: "string" }],
    test: (z, bundle) => {
      const promise = z.request(
        `https://api.kisi.io/places/${process.env.KISI_PLACE_ID}`
      );
      return promise.then((response) => {
        if (response.status !== 200) {
          throw new Error("Invalid API Key");
        }
      });
    },
  },
  beforeRequest: [addApiKeyToHeader],
};
