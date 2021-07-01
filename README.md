# my-project

Just start with next:
```sh
yarn skintest
```

### Tags

Use `#now` tag in the feature or scenario name to work with a particular test case.

```typescript
.scenario('#now check the remove button deletes items')
```

### Debugging

The simplest way to start debugging is to enable the `Auto Attach` in the vscode:

> `Ctrl+Shift+P` -> `Debug: Toggle Auto Attach` -> `Smart`

https://code.visualstudio.com/docs/nodejs/nodejs-debugging

### Linting

```sh
$ yarn lint
$ yarn lint --fix
```