// Simple function to test if the related_searches functions works
function test_related_searches() {
  const keyword = "napoleon bonaparte"; // Provide a keyword to test
  const result = related_searches(keyword);

  if (result !== undefined) {
    Logger.log("Test passed!");
  } else {
    Logger.log("Test failed!");
  }
}
