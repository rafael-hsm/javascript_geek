# JavaScript Geek
Note to course Programming with JavaScript


## Extension for VSCode
1. Code Runner

# Comandos usados durante a aula sobre Babel
Instalando o babel no modo de Desenvolvimento
```
yarn add @babel/cli -D
```
Instalando o babel preset para que configure a solucao para qualquer ambiente.
```
yarn add @babel/preset-env -D
```

```
yarn add @babel/core -D
yarn add babel-loader -D
```

No arquivo package.json usamos o   
```
"scripts":{
    "dev": "babel ./main.js -o ./bundle.js"
  }
```
para passar o comando que executa o babel, no final se adicionarmos o -w ele fica monitorando cada alteracao no arquivo fonte no exemplo o main.js

# WEBPACK
`yarn add webpack webpack-cli -D`
criar arquivo webpack.config.js

Vamos mudar o script do package.json para executar o Babel via Webpack
```
"scripts":{
    "dev": "webpack --mode=development -w"
  }
```

# Organizando o projeto com WEBPACK SERVER
```
yarn add webpack-dev-server -D
```
Instalando dependencia para organizar as pastas independente de ser Windows ou Linux
```
yarn add path
```

No arqquivo package.json configure o ambiente de produção:
```
  "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "prod": "webpack --mode=production"
  },
```