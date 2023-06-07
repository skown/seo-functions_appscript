/**
 * Checking if the URL is indexed in Google SERPs -> From Google Search Console.
 * @constructor
 * @param {string} url - The URL that you want to check if it's indexed or not from URL Inspection Tool at Google Search Console.
 * @param {string} domain - The property form which you want to check the indexation, like: https://brainly.com/ -> remember to have "/" at the end!
 * @return The information about URL indexation.
 * @customfunction
 */
function inspectURL(url, domain) {
  //Logger.log(url);

  // var oautToken = ScriptApp.getOAuthToken()
  var api =
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";

  var payload = {
    inspectionUrl: url,
    siteUrl: domain,
  };

  var headers = {
    Authorization: "Bearer " + getService().getAccessToken(),
    "Content-Type": "application/json",
  };

  var options = {
    headers: headers,
    method: "POST",
    muteHttpExceptions: true,
    payload: JSON.stringify(payload),
  };

  var response = UrlFetchApp.fetch(api, options);
  var content = JSON.parse(response.getContentText());
  //Logger.log('content:' + JSON. stringify(content))
  var results =
    content["inspectionResult"]["indexStatusResult"]["coverageState"];
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
