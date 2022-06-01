describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/login");
  });

  it("Scenario 1: try logging in with wrong (email and password)", () => {
    cy.get("#email").type("ddd@dd.com"); // select email-input field and enter invalid data
    cy.get("#password").type("sdfsfd3GG"); // select password-input field and enter invalid data
    cy.get(".btn").click(); // click on login button
    cy.get(".error").should(
      "have.text",
      "Your email and/or password are incorrect "
    ); // Validate that the error message exists
  });

  it("Scenario 2: try logging in with wrong (password)", () => {
    cy.get("#email").type("mohamed@instabug.com"); // select email-input field and enter valid data
    cy.get("#password").type("sdfsfd3GG"); // select password-input field and enter invalid data
    cy.get(".btn").click(); // click on login button
    cy.get(".error").should(
      "have.text",
      "Your email and/or password are incorrect "
    ); // Validate that the error message exists
  });

  it("Scenario 3: try logging in with correct (email and password)", () => {
    cy.get("#email").type("mohamed@instabug.com"); // select input field and enter valid data
    cy.get("#password").type("A12345678"); // select input field and enter valid data
    cy.get(".btn").click(); // click on login button
    cy.url().should("eq", "http://localhost:8080/welcome"); // Validate that the browser will redirect to the welcome page
  });

  it("Scenario 4: try Validating that the red-validation-message will appear", () => {
    cy.get("#email").type("dddd"); // select input field and enter valid data
    cy.get("#email").blur(); // Unfocus the email-textbox
    cy.get(".form-error").should("have.text", "Enter a valid email address"); // Validate that the error message exists
    cy.get("#email").should("have.css", "border-color", "rgb(242, 66, 32)"); // Validate that the email-textbox border will be red
  });
});
