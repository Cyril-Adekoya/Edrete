$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/EduFunctionalTest.feature");
formatter.feature({
  "name": "Edurete Functional Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search present of Website with google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RunEdu1"
    }
  ]
});
formatter.step({
  "name": "I open browser and enter https://www.google.com/ in google",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iOpenBrowserAndEnterWebnameInGoogle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered https://edrete.com/ in search box and send",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iEnteredHttpEdereComInSearchBoxAndSend(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked the text link of webname on search result",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iClickedTheTextLinkOfWebnameOnSearchResult()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the WebSite home page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iCanSeeTheWebSiteHomePageDisplayed()"
});
formatter.result({
  "status": "passed"
});
});