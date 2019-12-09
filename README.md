# Huge Form project

This project tries to simulate handling of huge amount of form fields within `formik` npm package and external data storage `firebase database` as storage resource for form fields data.

## Fields generator

In [`fieldSchema.js`](./src/fieldSchema.js) file, there is basic configuration that creates field schemas, initialValues, validation handlers for `huge form project` that consists of 500 fields.

Special field schema attribute is `fixed`, which makes all field of that type interconnected for value changes.

## Storing form data

After valid form is submitted, all data are sent to the `firebase database` and initial values are refreshed. On second reload of the page, those data are fetched via firebase API and set as initialValues of the form.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
