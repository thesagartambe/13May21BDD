Feature: JBK offline application test

Scenario: login test

@checkLogin
Given user should be on login page
When user enters username
And user enters password
And user clicks login button
Then user will be on dashboard page

@checkLogo
Scenario: verify a JBK logo
Given user should be on login page
Then user should see JBK logo

@register
Scenario: register a new User
Given: user should be on register page
When user fills details
And user clicks submit button 
Then user should be added

@invalidLogin
Scenario Outline: Login test with multiple data

Given: user should be on login page
When: user enters "<uname>" and "<pass>"
Then: user should be on dashboard page
Examples:
|uname|pass|
|kiran@gmail.com  |123456|
|mangesh@gmail.com|12345|
|neelam@gmail.com |123890|

