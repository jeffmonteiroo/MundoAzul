# End-to-end Testing with Cypress

Sample project to demonstrate end-to-end (e2e) tests written with [Cypress](https://cypress.io) running on GitHub Actions.

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- npm (I've used version `9.5.0` while writing this doc)
- VPN configured and with free access to Mundo Azul environments
-User and password with free access to the modules

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

In the fixtures folder, create a login.json file so you can access the portal.
Example:

> {<br>
        "username": "firstName.lastName", <br>        "password": "password" <br>
}


**Note:** The `login.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

You can use the command:
`npx cypress open`

___

Made with ❤️ by [Jeff Monteiro]().

