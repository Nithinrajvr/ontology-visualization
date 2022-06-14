# Ontology Visualizer

This project is developed as part of an interview task for Stepstone GmbH.
The application takes in given JSON data and renders it into a graph to visualise
the data. It also provides ability to add new data, edit existing data or delete them.

## Available Scripts

Go to the project directory

```bash
  cd ontology-visualization
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npx cypress run
```

Run tests with cypress UI

```bash
  npx cypress open
```

- Then choose E2E testing
- Click on spec.cy

## Implemented Features

- Create a concept
- Create (one or multiple) relations between concepts
- Delete a concept (cascading relations)
- Delete (one or multiple) relations between concepts
- Update concept attributes including tags
- Create relation attributes including tags (with multiple relations together)
- Update relation attributes including tags (with multiple tags)
- Switch graphs into 2D or 3D
- Focus concept on click
- Auto zoom out when idle
- Hover to view details of node and link in the graph and in preview panel
- Instructions to use the application

## Tech Stack

**Client (Frontend):** React, Bootstrap, react-bootstrap

**Graph:** [React-force-graph](https://www.npmjs.com/package/react-force-graph) (2D, 3D with options of VR and AR) 2D - HTML Canvas, 3D - WebGL

**Testing:** Cypress (End to End testing)

**Icons:** React-icons

**Build Tool:** npm (Node package manager)

## Component structure

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
