/// <reference types="cypress" />
import { RoutesConfig } from "../../../src/router/routes";

const addPostUrl = Cypress.config().baseUrl + RoutesConfig.newPost;

describe.only("Add post form on desktop", () => {
  beforeEach(() => {
    cy.visit(addPostUrl);
    cy.viewport("macbook-16");
  });

  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("Add post form on mobile", () => {
  beforeEach(() => {
    cy.visit(addPostUrl);
    cy.viewport("iphone-xr");
  });

  it("should pass", () => {
    expect(true).to.equal(true);
  });
});
