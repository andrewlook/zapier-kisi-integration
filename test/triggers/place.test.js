const zapier = require("zapier-platform-core");

// Use this to make test calls into your app:
const App = require("../../index");
const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("triggers.place", () => {
  it("should run", async () => {
    const apiKey = process.env.KISI_API_KEY;
    const bundle = {
      inputData: { placeId: `${process.env.KISI_PLACE_ID}` },
      authData: { apiKey },
    };

    const results = await appTester(
      App.searches["place"].operation.perform,
      bundle
    );
    console.log({ results });
    expect(results).toBeDefined();
  });
});
