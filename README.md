# skintest-starter

To get started with development:

```sh
git clone https://github.com/codetheflow/skintest-starter.git
cd skintest-starter
npm i
```

In the first terminal:
```sh
npm run build:watch
```

In the second terminal:
```sh
npm run start:watch
```

Copy `src\todomvc` folder to the your `src/<my-project>`folder, modify `skintest.ts` with a new project path, start getting glory from building the awesome ui tests!

### Tags

Use `#now` tag in the feature or scenario name to work with a particular test case.

```typescript
.scenario('#now check the remove button deletes items')
```

### Debugging

The simplest way to start debugging is to enable the `Auto Attach` feature in the vscode:

> `Ctrl+Shift+P` -> `Debug: Toggle Auto Attach` -> `Smart`

https://code.visualstudio.com/docs/nodejs/nodejs-debugging

### Dev tools

Use `__debug`, `__inspect` and `__pause` commands to analyze selectors and test run state.

```typescript
, I.__inspect(todos.list)
```

### Linting

```sh
$ npm run lint
```

It's also a good idea to hook up your editor to an eslint plugin.

To fix lint errors from the command line:

```sh
$ npm run lint -- --fix
```