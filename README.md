# Calculadora React

Calculadora simples construída com React, usando componentes de classe e função.

## Funcionalidades

- Operações básicas: soma, subtração, multiplicação e divisão
- Suporte a números decimais
- Botão "AC" para limpar a memória
- Encadeamento de operações (ex: `2 + 3 * 4 =`)

## Estrutura do projeto

```
src/
├── Componet/
│   ├── Button.jsx      # Botão individual (dígito, operação ou AC)
│   ├── Button.css
│   ├── Display.jsx     # Visor que mostra o valor atual
│   └── Display.css
└── main/
    ├── Calculator.jsx  # Componente principal, controla o estado da calculadora
    └── Calculator.css
```

## Como rodar

```bash
npm install
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

O projeto abre em `http://localhost:3000`.

## Tecnologias

- React
- CSS puro (CSS Grid para o layout dos botões)
