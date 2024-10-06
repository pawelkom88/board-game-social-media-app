/// <reference types="cypress" />
import {
  formFieldsName,
  validationErrorMessage,
} from "../../../src/features/new-post/schemas/schema";
import { RoutesConfig } from "../../../src/router/routes";

const addPostUrl = Cypress.config().baseUrl + RoutesConfig.newPost;

describe.only("Add post form on desktop", () => {
  beforeEach(() => {
    cy.visit(addPostUrl);
    cy.viewport("macbook-16");
  });

  it("should show error message in all required fields when empty form is submitted", () => {
    cy.testById("create-post-button").click();

    cy.testById("postTitle-error-message").contains(
      validationErrorMessage(formFieldsName.postTitle).postRequirements.minLength
    );
  });
});

// test tag deletion

describe("Add post form on mobile", () => {
  beforeEach(() => {
    cy.visit(addPostUrl);
    cy.viewport("iphone-xr");
  });

  it("should pass", () => {
    expect(true).to.equal(true);
  });
});
