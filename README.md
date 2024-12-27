## Microservices Architecture with Vite and React

This repository showcases a production-ready microservices architecture built with Vite, React, and Module Federation. The setup features a main application (core) designed to integrate multiple independently deployable micro front-ends. For simplicity, this example includes only one micro front-end (component).

### Key Features

- **Microservices Architecture**: Each micro front-end operates independently, making it deployable and scalable.
- **Module Federation**: Enables seamless sharing of React components and dependencies across applications.
- **Lazy Loading for Micro Frontends**: Micro front-end components are loaded on demand and rendered efficiently on the server.
- **Optimized Build Process**: Utilizes Vite for fast builds and ES module-based optimizations.

### Directory Structure

```
- core/
- component/
```

- `component/`: A standalone application that functions as a micro front-end to be consumed by `core`.
- `core/`: The main application that integrates and renders the micro front-ends. For this setup, `core` consumes `MFEComponent` from `component`.

### Vite Configuration

Key configurations are required in the `vite.config.ts` files within both `core` and `component` directories:
- **`remotes` Attribute**: Defines the remote micro frontends to be consumed by `core`.
- **`exposes` Attribute**: Specifies the modules exposed by `component` for consumption.

### Running the Applications

#### Running the Micro Frontend (`component`)

**Development Mode:**
```bash
cd component
npm install
npm run dev
# Accessible at http://localhost:5173
```

**Build Mode:**
```bash
cd component
npm install
npm run build
npm run preview
# Accessible at http://localhost:4173
```
![MFE_Component](/resources/mfe-component.png)

> <Important:> Keep `npm run preview` running for the `component` application, as its `remoteEntry.js` is consumed by `core`.

#### Running the Main Application (`core`)

**Development Mode:**
```bash
cd core
npm install
npm run dev
# Accessible at http://localhost:5173
```

**Build Mode:**
```bash
cd core
npm install
npm run build
npm run preview
# Accessible at http://localhost:4174
```
![Core](/resources/core.png)

> *Warning:* If `remoteEntry.js` from `component` is unavailable, `core` will display an error message.

![Core_Error](/resources/core_error.png)
