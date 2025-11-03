Feature: WebDriverUniveristy - Contact Us page

Scenario: Valid Contact Us Form Submission

    Given I open the WebDriverUniversity Contact Us page
    When I click on Contact Us button
    And I type a valid first name
    And I type a valid last name
    And I type a valid email address
    And I type a comment
    And I click on the Submit button
    Then I should see a Thank You message

    