/// <reference types="cypress" />


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given("I open the WebDriverUniversity Contact Us page", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    
    
    });

When("I click on Contact Us button", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();

});

When("I type a valid first name", () => {
    cy.get('input[name="first_name"]').type("John");
});

When("I type a valid last name", () => {
    cy.get('input[name="last_name"]').type("Doe");
});

When("I type a valid email address", () => {
    cy.get('input[name="email"]').type("test@test.com");
});

When("I type a comment", () => {
    cy.get('textarea[name="message"]').type("This is a test comment.");
});

When("I click on the Submit button", () => {
    cy.get('input[type="submit"]').click();
});

Then("I should see a Thank You message", () => {
    cy.get("h1").should("have.text", "Thank You for your Message!");
});