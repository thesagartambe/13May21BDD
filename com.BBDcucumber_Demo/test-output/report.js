$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application-test;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will be on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 12958216600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username()"
});
formatter.result({
  "duration": 2074995300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_password()"
});
formatter.result({
  "duration": 436236700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_login_button()"
});
formatter.result({
  "duration": 2237347000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_will_be_on_dashboard_page()"
});
formatter.result({
  "duration": 8757500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify a JBK logo",
  "description": "",
  "id": "jbk-offline-application-test;verify-a-jbk-logo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 17719921300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_see_JBK_logo()"
});
formatter.result({
  "duration": 373081900,
  "status": "passed"
});
});