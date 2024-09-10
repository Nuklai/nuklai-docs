---
sidebar_position: 9
---

# Contributing to the Nuklai SDK

We welcome contributions to both the Nuklai Nuklai JS SDK and its documentation. This guide will help you understand how to contribute effectively.

## How to Contribute

1. **Fork the Repository**: Start by forking the [Nuklai SDK repository](https://github.com/Nuklai/nuklai-js-sdk) on GitHub.

2. **Clone Your Fork**: Clone your fork to your local machine:

   ```
   git clone https://github.com/YOUR_USERNAME/nuklai-js-sdk.git
   cd nuklai-js-sdk
   ```

3. **Create a Branch**: Create a new branch for your contribution:

   ```
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**: Implement your changes, following the coding standards outlined below.

5. **Test Your Changes**: Ensure that your changes pass all existing tests and add new tests if necessary.

6. **Commit Your Changes**: Commit your changes with a clear and descriptive commit message:

   ```
   git commit -m "Add feature: brief description of your changes"
   ```

7. **Push to Your Fork**: Push your changes to your fork on GitHub:

   ```
   git push origin feature/your-feature-name
   ```

8. **Submit a Pull Request**: Go to the Nuklai SDK repository on GitHub and submit a pull request from your branch to the main branch of the original repository.

## Development Setup

1. **Node.js**: Ensure you have Node.js version `20.x` or later installed.

2. **Install Dependencies**: Run the following command in the project root:

   ```
   yarn install
   ```

3. **Build the Project**: Build the SDK using:

   ```
   yarn build
   ```

## Coding Standards

We follow strict coding standards to maintain consistency across the project:

1. **TypeScript**: All code should be written in TypeScript.

2. **Linting**: We use ESLint for linting. Ensure your code passes all linting rules:

   ```
   yarn lint
   ```

3. **Formatting**: We use Prettier for code formatting. Format your code before committing:

   ```
   yarn format
   ```

4. **Naming Conventions**:
   - Use PascalCase for class names and type names.
   - Use camelCase for function names, variable names, and method names.
   - Use UPPER_CASE for constants.

5. **Comments**: Add JSDoc comments for all public APIs.

6. **Error Handling**: Use typed errors and provide informative error messages.

## Pull Request Guidelines

1. **Description**: Provide a clear description of the changes in your pull request.

2. **Issue Reference**: If your PR addresses an existing issue, reference it in the description (e.g., "Fixes #123").

3. **Documentation**: Update the documentation if your changes affect the public API or user-facing functionality.

4. **Tests**: Ensure all tests pass and add new tests for new functionality.

5. **Commits**: Keep your commits atomic and use clear, descriptive commit messages.

6. **Code Review**: Be open to feedback and be responsive during the code review process.

7. **Continuous Integration**: Make sure your changes pass all CI checks.

8. **Changelog**: Update the CHANGELOG.md file with a brief description of your changes under the "Unreleased" section.

By following these guidelines, you help maintain the quality and consistency of the Nuklai SDK.

We appreciate your contributions and look forward to your pull requests!

For any questions or need further clarification, please open an issue in the repository or contact the maintainers directly.

Thank you for contributing to the Nuklai SDK!
