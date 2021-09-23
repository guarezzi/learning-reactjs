### Executando o projeto ###

The project uses json-server to simulate backend operations (REST APIs and store database).
That's why we need to start json-server first running the following command line:

> json-server db.json --watch

The json-server will start a nodejs on 3000 port. So we can start our ReactJS project into another terminal instance:

> npm start

The run will inform you that 3000 port is used and prompt you to use another one. Just type Y or Enter to continue.