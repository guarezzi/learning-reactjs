### Executando o projeto ###

O projeto utiliza o json-server para simular operações de backend (REST API) e a base de dados.
Por isso precisamos inicializar o json-server executando:

``

json-server db.json --watch

``

O json-server subirá um server node na porta 3000 e em seguida poderemos subir nosso projeto em outro terminal executando:

``

npm start

``

a execução do cmd vai informar que a porta 3000 já está em uso e questiona se queremos utilizar outra porta, basta teclar Y (ou apenas enter) para continuar.