/**
 * Checking the resuts from Google Search Console
 * @constructor
 * @param {string} startDate - Start day from which you want the data.
 * @param {string} endDate - End day from which you want to data.
 * @param {string} url - The URL that you want to check data for.
 * @param {string} domain - From which domain this URL come -> remember to put "/" at the end of the domain!
 * @param {string} metric - Metric that you want to check: position, clicks, impressions, ctr.
 * @return The data results from Google Search Console.
 * @customfunction
 */
function gsc_data(startDate, endDate, url, domain, metric) {
  const decode = encodeURIComponent(domain);
  const api = `https://www.googleapis.com/webmasters/v3/sites/${decode}/searchAnalytics/query`;

  const payload = {
    startDate: startDate,
    endDate: endDate,
    dimensionFilterGroups: [
      {
        filters: [
          {
            operator: "CONTAINS",
            dimension: "PAGE",
            expression: url,
          },
        ],
      },
    ],
  };

  const headers = {
    Authorization: "Bearer " + getService().getAccessToken(),
    "Content-Type": "application/json",
  };

  const options = {
    headers: headers,
    method: "POST",
    muteHttpExceptions: true,
    payload: JSON.stringify(payload),
  };

  const response = UrlFetchApp.fetch(api, options);
  Logger.log(response);
  const content = JSON.parse(response.getContentText());
  Logger.log(content);
  const results = content["rows"][0][metric];
  Logger.log(results);
  return results;
}

function getService() {
  var JSON = {
    private_key: "private_key",
    client_email: "client_email",
    client_id: "client_id",
    user_email: "user_email",
  };
  //Logger.log(JSON.private_key)

  return OAuth2.createService("Service Account")
    .setTokenUrl("https://accounts.google.com/o/oauth2/token")
    .setPrivateKey(JSON.private_key)
    .setIssuer(JSON.client_email)
    .setSubject(JSON.user_email)
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setParam("access_type", "offline")
    .setScope("https://www.googleapis.com/auth/webmasters");
}

function reset() {
  var service = getService();
  service.reset();
}
