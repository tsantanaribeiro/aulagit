/**
 * Aula Sobre GIT App modelo.
 */
var express = require ("express");
var app = express();
var port = 8099;

/**
 * Quando a aplicação estiver ativa e escutando a porta 8099. Quando uma "requisiação" com o verbo GET realizada.
 * a resposta será enviando pelo método "send".
*/
app .get('/', (requisicao, resposta)=>{
    resposta.send('Olá NODE.js !! Estou me esforçando pra um Hello!');
});

/**
 *  Prepara a plicação para escutar a porta indicada na variável "port"
 *  */
 app .listen(port,()=>{
     console.log('Aplicação iniciada e escutando na porta:', port);
 });

 module.exports  = app;