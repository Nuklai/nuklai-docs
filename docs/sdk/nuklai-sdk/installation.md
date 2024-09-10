---
sidebar_position: 2
---

# Installation Instructions

## System Requirements

Before installing the Nuklai SDK, ensure your development environment meets the following requirements:

- **Node.js**: Version `20.x` or later (LTS version recommended)
- **npm**: Version `8.x` or later (comes bundled with Node.js)
- **Operating System**:
  - Linux (Ubuntu 20.04 LTS or later recommended)
  - macOS 11 (Big Sur) or later
  - Windows 10 with WSL2 (Windows Subsystem for Linux 2)
- **CPU**: 64-bit processor, 2 cores or more recommended
- **RAM**: Minimum 4GB, 8GB or more recommended for optimal performance
- **Storage**: At least 1GB of free disk space for the SDK and its dependencies
- **Git**: Version `2.x` or later (for cloning the repository if building from source)

Additional requirements for optimal development experience:

- **TypeScript**: Version `5.x` or later
- **VS Code**: Latest version with TypeScript and ESLint extensions (recommended IDE)

## Installation via npm/yarn

The Nuklai SDK can be easily installed using npm or yarn. Choose the method that best fits your project setup:

### Using npm

```bash
npm install @nuklai/nuklai-sdk
```

This command installs the latest stable version of the Nuklai SDK. For a specific version, use:

```bash
npm install @nuklai/nuklai-sdk@x.y.z
```

Replace `x.y.z` with the desired version number.

### Using yarn

```bash
yarn add @nuklai/nuklai-sdk
```

For a specific version:

```bash
yarn add @nuklai/nuklai-sdk@x.y.z
```

After installation, you can import the SDK in your JavaScript/TypeScript files:

```typescript
import { NuklaiSDK } from '@nuklai/nuklai-sdk';
```

## Building from Source

For developers who need the latest features or want to contribute to the SDK, building from source is recommended:

1. Clone the repository:

   ```bash
   git clone https://github.com/Nuklai/nuklai-js-sdk.git
   cd nuklai-js-sdk
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Build the SDK:

   ```bash
   yarn build
   ```

   This command compiles the TypeScript source files and generates both CommonJS (`.cjs`) and ES Module (`.mjs`) outputs in the `dist` directory.

### Advanced Build Configuration

The build process uses `esbuild` for fast and efficient compilation. You can customize the build by modifying the `build.js` script in the project root. Key configuration options include:

- `entryPoints`: Specify entry files for the build
- `outdir`: Set the output directory for compiled files
- `bundle`: Enable/disable bundling of dependencies
- `minify`: Enable/disable minification of output
- `sourcemap`: Generate source maps for debugging

Example of a custom build configuration:

```javascript
// In build.js
const buildOptions = {
  entryPoints: ['src/index.ts'],
  outdir: 'custom-dist',
  bundle: true,
  minify: process.env.NODE_ENV === 'production',
  sourcemap: true,
  platform: 'node',
  target: ['node20'],
};

build(buildOptions).catch(() => process.exit(1));
```

By building from source, you gain full control over the SDK's compilation process and can easily incorporate the latest changes or custom modifications.
