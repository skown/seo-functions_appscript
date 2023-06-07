/**
 * Gathering related searches from Google SERPs.
 * @constructor
 * @param {string} keyword - For which keyword do you want to check related searches.
 * @return The data results from Google SERPs.
 * @customfunction
 */
function related_searches(keyword) {
  const url = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced";
  const headers = {
    method: "POST",
    "content-type": "application/json",
    headers: {
      Authorization: "Basic " + Utilities.base64Encode("mail" + ":" + "pass"),
    },
    muteHttpExceptions: true,
    payload: JSON.stringify([
      { keyword: keyword, language_code: "pt", location_code: 2076 },
    ]),
  };

  const response = UrlFetchApp.fetch(url, headers);
  const content = JSON.parse(response.getContentText());
  //console.log(content['tasks'][0]['result'][0]['items'])
  const results = content["tasks"][0]["result"][0]["items"];

  for (let i = 0; i < results.length; i++) {
    let obj = results[i];
    if (obj["type"] == "related_searches") {
      return obj["items"];
    }
  }
}

// US 2840 language: en
// BR 2076 language: pt
