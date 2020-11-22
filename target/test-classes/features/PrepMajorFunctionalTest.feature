Feature: FunctionalTest PrepMajor
  @Sprint1
  Scenario:Ticket93 Leave Comment on blog post
    Given I am a registered Prepmajor Website user http://prepmajor.com/
    And I select Leave a comment
    And I can see a text field appears
    And I enter about in length in the text field comment box
    When I click the submit button
    And I see Thanks for your comment message popup
    Then I check comment section and my comment is displayed

  @Sprint10
  Scenario: Ticket8 Being Found on Google Search Engine
    Given I lunched browser http://www.google.com/
    When  I entered PrepMajor in search box clicked search icon or press enter key on keyboard
    Then  I can see Prepmajor link from the google search result and I click to get HomePage
  @Sprint1
  Scenario: Ticket20 Email Welcome Message
    Given I am on Prepmajor home http://prepmajor.com/ and want to register as a user
    And I entered correctly required registration details on Prepmajor registration page and submit
    And I received a verification email with email containing a verification link
    And I click on the link in the email message
    And I am redirected to the Prepmajor website login page to login with my details
    When I clicked on submit button after entering correct details
    Then I received a welcome email from Prepmajor
  @Sprint1
  Scenario: Ticket23 Password Strength
    Given I am unregistered user registering new on Prepmajor website
    And I clicked register button and entered my details in required fields on the form before the password requirement
    And I started to enter my unique password in the password text box
    Then I can see password indicator message showing the strength of my password highlighting in colors

  @Sprint1
  Scenario: Ticket92 Search Function
    Given I am a user and on Prepmajor Website landing page
    And I see the the search icon and text box that says Search courses
    When I click into the search text box,the search field will overlay with a blinking text cursor
    And I enter my query into the search field
    And I click the search icon button OR press the enter key on the keyboard
    Then I can see words that match my search query in the search results section

  @Sprint1_Done
  Scenario: Ticket10 Logging into Prepmajor Website
    Given I am a registered user I clicked on Register&SignUp tab on Prepmajor Home
    And I see dialog box and enter my login details in the login text box
    When I click on the green login button
    Then I must be logged on to the Prep Major Website



















