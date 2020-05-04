$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "7004518328",
        "rajlax40k"
      ],
      "line": 31,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "7406656481",
        "Rudra@123"
      ],
      "line": 32,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "mr.rahul726@gmail.com",
        "Micro@12345"
      ],
      "line": 33,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter valid \"7004518328\" and valid \"rajlax40k\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 8107480810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7004518328",
      "offset": 15
    },
    {
      "val": "rajlax40k",
      "offset": 38
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 212396229,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 11163830327,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 2029013262,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter valid \"7406656481\" and valid \"Rudra@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 6971538488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7406656481",
      "offset": 15
    },
    {
      "val": "Rudra@123",
      "offset": 38
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 224284716,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 17963099258,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 2754329225,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I enter valid \"mr.rahul726@gmail.com\" and valid \"Micro@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 9392437085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mr.rahul726@gmail.com",
      "offset": 15
    },
    {
      "val": "Micro@12345",
      "offset": 49
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 240945595,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3872362253,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 6780695,
  "status": "passed"
});
});