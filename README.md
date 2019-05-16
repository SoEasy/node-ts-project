# Nodejs with Typescript boilerplate

## Overview
Boilerplate project for running, building and WebStorm-compatible running/debugging.

- **Compilation** - webpack with awesome-typescript-loader (because tsconfig paths, arr)
- **CLI run without restart** - ts-node binary thru tsconfig-paths pipe
- **CLI watching** - nodemon
- **WebStorm watching** - ts-node usage over js file

## Commands (npm run)
- **build** - build an application for production usage
- **build:watch** - build an application with monitoring - for WebStorm debugging 
- **start** - start from CL without monitoring changes
- **start:watch** - start from CL with monitoring changes and fail-tolerance in case of throwing errors

## Configure WebStorm
- Open "Run/Debug Configurations" 
- Add NodeJS configuration
- Fill "Node parameters:" with `./node_modules/nodemon/bin/nodemon --config nodemon-webstorm.json`
- Fill "JavaScript file:" with `dist/index.js`
- ...
- Profit!