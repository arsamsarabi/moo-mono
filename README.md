<img src="./assets/moo-logo.png" alt="Moo logo" style="width:300px">

# moo-mono

## Projects

1. `moo-react-components`
2. `product-configurator-example`

<hr />

## How to

### Note:

In order to run these projects locally you must first install dependencies in the `moo-react-components` folder, And then build and pack the project so that in can be installed in the `product-configurator-example`. As the demo app references this dependency locally. `"moo-react-components": "file:../moo-react-components/moo-react-components-v0.1.11.tgz",`
You can achieve the above by running the `yarn ready` command after you have successfully installed the project dependencies.

### Moo react components

> A React component library hosting the components created and used in the implementation of the requested functionality/ feature. The main component satisfying user stories and providing the requested UI/UX is the `<ProductSelector />` component.

You can use `yarn storybook` to view the stories that were implemented for the `moo-react-components` components, independently of the `product-configurator-example` demo application, on `http://localhost:6006`.

To execute the project's unit tests, cd into the moo-react-components folder and run the `yarn test` command. And similarly for running the linters, use `yarn lint`

### Product configurator example

> A simple application showcasing the `<ProductSelector />` component. Next.js was used to bootstrap this application.

Once you have successfully installed the dependencies of the demo application, you can then run the app by using the command `yarn dev`. This will run the application on `http://localhost:300`.

<hr />

## Potential project roadmap

### Testing

1. Testing coverage could be improved. Adequate test coverage has not yet been achieved due to time constraints.
2. Could implement e2e/ integration/ UI tests/ Performance tests using a tool such as [Cypress](https://www.cypress.io/)

### CI/CD

1. Implement branch protection fo the `main` branch and implement a Github workflow to run the automated tests and linters for each pull request to the `main` branch.
2. Create a new Github workflow to build and deploy the component library to a package repository.

### Storybook stories

More comprehensive stories could be written for `moo-react-components`' Storybook.

### Components improvements

1. Some components in the library could be enhanced to provide more functionality. For example `<Button />` could receive additional props such as `fullWidth: boolean, variant: 'filled' | 'outlined'`
2. Additional components can be implemented to abstract logic and DRY more of the codebase. e.g. `<Text />`
3. Could employ a form component library such as [Formik](https://formik.org/) to simplify implementing forms and form components
4. Could implement Context API to reduce prop-drilling and enhance data flow

<hr />

## Author

👨🏻‍💻 [Arsam Sarabi](https://arsam.dev) <br/>
📧 arsamsarabi@me.com
