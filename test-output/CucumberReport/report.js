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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan\u003e...\u003c/span\u003e is not clickable at point (389, 209). Other element would receive the click: \u003ciframe src\u003d\"https://consent.google.com?hl\u003den-GB\u0026amp;origin\u003dhttps://www.google.com\u0026amp;continue\u003dhttps://www.google.com/search?source%3Dhp%26ei%3DUIO6X6SJIqO5gwfuw6SABQ%26q%3Dhttps://edrete.com/%26oq%3Dhttps://edrete.com/%26gs_lcp%3DCgZwc3ktYWIQA1CJGFjsGGCZGWgAcAB4AIABAIgBAJIBAJgBAKABAaoBB2d3cy13aXo%26sclient%3Dpsy-ab%26ved%3D0ahUKEwik8c-xu5btAhWj3OAKHe4hCVAQ4dUDCAk%26uact%3D5\u0026amp;if\u003d1\u0026amp;m\u003d0\u0026amp;pc\u003ds\u0026amp;wp\u003d-1\u0026amp;gl\u003dGB\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027DESKTOP-AM1L5LL\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61475}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2bcbbd50b3351d80fde2b844114c696a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pages.EduRete.EdureteHomePage.clickTheSearchTextReturned(EdureteHomePage.java:50)\r\n\tat StepDefinitions.Edurete.MyStepdefs.iClickedTheTextLinkOfWebnameOnSearchResult(MyStepdefs.java:33)\r\n\tat ✽.I clicked the text link of webname on search result(file:src/test/resources/features/EduFunctionalTest.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I can see the WebSite home page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iCanSeeTheWebSiteHomePageDisplayed()"
});
formatter.result({
  "status": "skipped"
});
});