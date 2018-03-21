# openapi-swagger-demo
Demonstrating the use of OpenAPI Spec and Swagger tools to build REST APIs, documentation, and generated SDKs


# Contents

## API

Contains a sample api generated by [swagger-node](https://github.com/swagger-api/swagger-node).

To Run:

```
[sudo] npm install -g swagger
npm install api
swagger project start api
````

To Start OpenAPI Doc Editor:

```
swagger project edit api
```

Sample Query:

```
curl http://localhost:10010/lyrics?name=Paul
```

## Codegen

Contains a compiled version of the codegen cli, as well as a sample install script for generating a typescript client library for our lyrics api.

Note: You'll need to have the api running before building the client library, as it will fetch the swagger info from `http://localhost:10010/swagger`.

Generate a TypeScript Library:

```
./codegen/gen-typescript.sh
```

## ng-demo
Contains an Angular demo app that uses the codegen generated client library to connect to our api.

Note: You'll need the api running.

```
[sudo npm install -g @angular/cli
cd ng-demo
npm install
ng serve --open
```

## Docs

Demo docs site that uses our OpenAPI spec served up via the api. This example uses [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express). Also check out [swagger-ui](https://github.com/swagger-api/swagger-ui).

Note: Need the api running!

```
npm install docs
node docs/app.js
```
Then check out [http://127.0.0.1:3006](http://127.0.0.1:3006)