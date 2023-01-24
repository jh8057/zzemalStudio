// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("http://127.0.0.1:5173/zzemalStudio/");
    cy.contains("h1", "You did it!");
  });
});

export {};
