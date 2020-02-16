Feature: amazon

  Scenario: Verify user is able to login into Amazon successfully
    Given verify user is logged out of Amazon
    When user navigate to url "https://www.amazon.ca"
    And "Hello. Sign In Your Account" is displayed
    Then user clicks on "Hello. Sign In. Your Account" button
    And user clicks on "SignIn" button
    Then user SignIn with credentials
    Then user Sign Out from Account

  Scenario: Verify user have the ability to search for an item
    Given user get Sign In to "https://www.amazon.ca"
    When user type "hard hat" in "search bar"
    Then search results appear related to "safety hard hats"

  Scenario: Verify user can lookup review for an product
    Given user get Sign In to "https://www.amazon.ca"
    When user type "Ratchet Hard Hat," in "search bar"
    Then user clicks on "ERB 19451 Americana Vent Cap Style Hard Hat with Mega Ratchet, White" hard hat
    And user lookup customer reviews of product using search criteria "quality"
    Then user will see results filtered by search criteria

  Scenario: Verify user have ability to add item in shopping cart
    Given user get Sign In to "https://www.amazon.ca"
    When user type "safety goggles" in "search bar"
    Then search results appear related to "safety goggles"
    Then user add "" item in shopping cart
    Then user verify ""item is prsent in shopping cart

  Scenario: Verify user have is able to delete item from shopping cart
    Given user get Sign In to "https://www.amazon.ca"
    When user type "fire extinguishers" in "search bar"
    Then search results appear related to "fire extinguishers"
    Then user add "" item in shopping cart
    Then user delete "" item from shopping cart
    Then user verify item "" got deleted from cart successfully
