# my-typescript-starter

nodejs with typescript

## Compile
```shell
tsc main.ts
```

## Run
```shell
node main.js
```


[Ref](https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614/)

* 如何解决：- configuration.module has an unknown property 'loaders'. These properties are valid:

```
modules -> rules
```

* 如何解决：Error: Cannot find module 'typescript'

```shell
npm install -g typescript
npm link typescript
```
