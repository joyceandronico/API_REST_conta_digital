## Descrição geral

O projeto é uma API REST que simula as funcionalidades de um aplicativo de investimento em ações (compra e venda de ativos), além de possibilitar depósitos e saques em uma conta digital.


## Tecnologias usadas

Nodejs, Express e MySQL

## Clonando o projeto

```bash
git@github.com:joyceandronico/API_REST_conta_digital.git
```

## Acesse a pasta do projeto

```bash
cd API_REST_conta_digital
```

## Instalando Dependências

Após clonar o projeto, utilize o comando:

```bash
npm install
```

## Variáveis de Ambiente

Na raiz do projeto, crie um arquivo .env para configurar as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome`, senha `1234` e a porta do MySQL seja a `3306`, o arquivo ficará desta forma:

```bash
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
MYSQL_DATABASE=investimentos
PORT=3306
```

## Executando a aplicação

Para rodar o projeto, utilize o comando:

```bash
npm run start
```

## Requisições

### Compra de ativos

* Para comprar um ativo, o endpoint `POST (/investimentos/comprar)` deve ser acessado

* A compra não será possível se a quantidade a ser comprada for maior que a disponível na corretora
* O corpo da requisição deve ter a seguinte estrutura, onde:

  codCliente: código do cliente que comprará o ativo
  
  codAtivo: código do ativo a ser comprado
  
  quantidade: quantidade do ativo a ser comprada

```bash

 {
 	"codCliente": 4,
	"codAtivo": 4,
	"quantidade": 10
}
```
* Se houver sucesso na compra, a seguinte mensagem será retornada:

```bash

{
	"message": "compra efetuada"
}
```
* Se a quantidade a ser comprada for maior que a disponível na corretora, a seguinte mensagem será retornada:

```bash

{
	"message": "compra não permitida"
}
```

### Venda de ativos

* Para vender um ativo, o endpoint `POST (/investimentos/vender)` deve ser acessado

* A venda não será possível se a quantidade a ser vendida for maior que a disponível na carteira do cliente
* O corpo da requisição deve ter a seguinte estrutura:

```bash

{
    	"codCliente": 4,
	"codAtivo": 4,
	"quantidade": 10
}
```

*  Se houver sucesso na compra, a seguinte mensagem será retornada:

```bash

{
	"message": "venda efetuada"
}
```

* Se a quantidade a ser vendida for maior que a disponível na carteira do cliente, a seguinte mensagem será retornada:

```bash

{
	"message": "venda não permitida"
}
```

### Listar os ativos que o cliente possui

* Para listar os ativos que o cliente possui, devemos acessar o endpoint `GET BY CLIENT(/ativos/{cod-cliente})` passando na URL o código do cliente. Exemplo: `/ativos/codCliente/4`
* A resposta da API terá a seguinte estrutura, onde:

  CodCliente: código do cliente pesquisado (que foi passado na URL)
  
  codAtivo: código do ativo que o cliente possui
  
  valor: valor unitário do ativo
  
  qtdeAtivo: quantidade do ativo que o cliente possui.

```bash
[
	{
		"codCliente": 4,
		"codAtivo": 4,
		"valor": "99.50",
		"qtdeAtivo": 19
	},
	{
		"codCliente": 4,
		"codAtivo": 2,
		"valor": "21.20",
		"qtdeAtivo": 10
	}
]
```

### Listar as informações de cada ativo

* Para exibir as informações de cada ativo, devemos acessar o endpoint `GET BY ASSETS (/ativos/{cod-ativo})` passando na URL o código do ativo. Exemplo: `/ativos/4`
* A resposta da API terá a seguinte estrutura, onde:

  codAtivo: código do ativo pesquisado (que foi passado na URL)
  
  valor: valor unitário do ativo
  
  quantidade: quantidade disponível para compra

```bash
[
	{
		"codAtivo": 4,
		"valor": "99.50",
		"quantidade": 175
	}
]
```

### Depósitos

* Para realizar um depósito, o endpoint `POST (/conta/deposito)` deve ser acessado

*  O corpo da requisição deve ter a seguinte estrutura, onde:

  valor: valor a ser depositado
  
  codCliente: conta que receberá o depósito

```bash
{
	"valor": 5000.00,
	"codCliente": 3
}
```

* Se o depósito for efetuado, a seguinte mensagem será retornada:

```bash
{
	"message": "depósito de 5000 efetuado"
}
```

* Se o valor a ser depositado for 0 ou negativo, a seguinte mensagem será retornada:

```bash
{
	"message": "valor inválido"
}
```


### Saques

* Para realizar um saque, o endpoint `POST (/conta/saque)` deve ser acessado

*  O corpo da requisição deve ter a seguinte estrutura, onde:

  valor: valor a ser depositado
  codCliente: conta que terá o valor sacado

```bash
{
	"valor": 100.80,
	"codCliente": 3
}
```
* Se o saque for efetuado, a seguinte mensagem será retornada:

```bash
{
	"message": "saque de 100.8 efetuado!"
}
```
* Se o valor do saque for 0 ou negativo, a seguinte mensagem será retornada:

```bash
{
	"message": "saque não permitido; valor deve ser maior que 0"
}
```

* Se o valor do saque for maior que o saldo em conta, a seguinte mensagem será retornada:

```bash
{
	"message": "saque não permitido; saldo insuficiente"
}
```


### Exibir saldo do cliente

* Para exibir o saldo do cliente, devemos acessar o endpoint `GET (/conta/{cod-cliente})` passando na URL o código do cliente

* A resposta da API terá a seguinte estrutura, onde:

  codCliente: código do cliente pesquisado
  
  saldo: saldo atual do cliente

```bash
[
	{
		"codCliente": 4,
		"saldo": "11234.50"
	}
]
```




