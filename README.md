# Nodejs with Typescript boilerplate

## Overview
Boilerplate project for running, building and WebStorm-compatible running/debugging.

- **Compilation** - pure tsc
- **CLI run without restart** - ts-node binary
- **CLI watching** - nodemon
- **WebStorm watching** - ts-node usage over js file

## Commands (npm run)
- **build** - build an application for production usage
- **start** - start from CL without monitoring changes
- **start:watch** - start from CL with monitoring changes and fail-tolerance in case of throwing errors

## Configure WebStorm
- Open "Run/Debug Configurations" 
- Add NodeJS configuration
- Fill "Node parameters:" with `./node_modules/nodemon/bin/nodemon`
- Fill "JavaScript file:" with `webstorm_dev.js`
- ...
- Profit!