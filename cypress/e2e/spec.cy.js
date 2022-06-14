describe("TESTING -CREATE CONCEPTS", () => {
  it("Visits the particular Host", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Should click choose city buttons and check if data is fetching", () => {
    cy.get("#addNode").click({ force: true });
  });
  it("Should check inputing the details to create new node", () => {
    cy.get("#name").type("testnode-1", { force: true });
    cy.get("#semanticClass").type("testnode-sematic", { force: true });
    cy.get("#relationName").type("testnode-sematic", { force: true });
  });
  it("Testing the Relation Dropdown", () => {
    cy.get("#dropdown-basic-button").click({ force: true });

    // Chooosing  the relation javascript to confirm its presence.
    cy.get(".dropdown-item").each(($el, index, $list) => {
      var relation = $el.text();
      if (relation == "Javascript") {
        cy.wrap($el).click({ force: true });
      }
    });
    cy.get("#add_Relation").click({ force: true });
  });
  it("Tag id test", () => {
    cy.get("#tagId").type(1430, { force: true });
    cy.get("#tags").type("tagName", { force: true });
    cy.get("#addTag").click({ force: true });
  });

  it("Create Concept", () => {
    cy.get(".form-submit-btn").click({ force: true });
  });
  it("Should check Hover state", () => {
    cy.get(".force-graph-container").then(($canvas) => {
      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      const buttonX = canvasCenterX + 27.04;
      const buttonY = canvasCenterY + 156.79;

      cy.wrap($canvas)
        .scrollIntoView()
        .click(buttonX, buttonY, { force: true });
    });
  });

  it("Should Click Node", () => {
    cy.get(".force-graph-container").then(($canvas) => {
      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      const buttonX = canvasCenterX + 30.04;
      const buttonY = canvasCenterY + 162.79;

      cy.wait(4000);
      cy.wrap($canvas)
        .scrollIntoView()
        .click(buttonX, buttonY, { force: true });
    });
  });
});
describe("Testing - Edit Concept", () => {
  it("Should click choose city buttons and check if data is fetching", () => {
    cy.get("#editConcept").click({ force: true });
  });

  it("Checking Concepts", () => {
    cy.get("#concept_name").should("have.text", "Name: IT Backend");
    cy.get("#concept_state").should("have.text", "Is Orthogonal : false");
    cy.get("#concept_ID").should("have.text", "ID : 609655");
  });

  it("Checking Relations", () => {
    cy.get("#Relation_concept").should(
      "have.text",
      "Relation concept : Java Spring Developer"
    );
  });

  it("Checking Relations", () => {
    cy.get("#Relation_name").should(
      "have.text",
      " Relation Name : IS_DISCIPLINE_OF"
    );
  });
});

//Updating Concepts

describe("Testing Update-concepts", () => {
  it("Checking if name of concept is updating", () => {
    cy.get("#editName")
      .clear({ force: true })
      .type("tagName-concept", { force: true });
    cy.get("#form-submit-concept").click({ force: true });
    cy.get("#concept_name").should("have.text", "Name: tagName-concept");
    cy.get("#concept_state").should("have.text", "Is Orthogonal : false");
    cy.get("#concept_ID").should("have.text", "ID : 609655");
  });
});

// Updating relations

describe("Testing Update-relations", () => {
  it("Checking if name of relation is updating", () => {
    cy.get("#relationNames").clear({ force: true });
    cy.get("#relationNames").type("tagName-relation", { force: true });
    cy.get("#update_id").click({ force: true });
    cy.get("#relations-submit-btn").click({ force: true });
    cy.get("#Relation_name").should(
      "have.text",
      " Relation Name : tagName-relation"
    );
    // );
  });
});

describe("Testing Closing Forms back to initial state", () => {
  it("Close Edit form", () => {
    cy.get("#editConcept").click({ force: true });
  });

  it("Close Create form", () => {
    cy.get("#addNode").click({ force: true });
  });
  describe("Testing Deleting node", () => {
    it("Should delete the node", () => {
      cy.get("#delete_node").click({ force: true });
    });
  });
});
