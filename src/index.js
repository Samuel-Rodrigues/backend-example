//Importando o express
const express = require('express');

//Instanciando o express
const app = express();

app.use(express.json());

//Middleware
app.use(logRequests);

//Definir porta para acessar nossa api
app.listen(3333);

{/* 
Esse middleware basicamente vai informar qual o método e url da requisição
*/}
function logRequests(request, response, next){
	const { method, url } = request;
	const logLabel = `[${method.toUpperCase()}] ${url}`;
	console.log(logLabel)

	//retornando o next para que seja chamado a proxima requisição e sair do middleware
	return next();
}

//Método GET: Buscar informações do banck-end
app.get('/users', (request, response) => {

  const { name } = request.query

  return response.json([
    { name: 'Samuel Rodrigues' },
    { name: 'Jose Maria' }
  ])
})

//Método POST: Criar uma informação no back-end
app.post('/users', (request, response) => {
  return response.status(201)
})

//Método PUT: Alterar informação no back-end
app.put('/users/:id', (request, response) => {
  return response.json()
})

//Método DELETE: Delete informação no back-end
app.delete('/users/:id', (request, response) => {
  return response.json()
})



