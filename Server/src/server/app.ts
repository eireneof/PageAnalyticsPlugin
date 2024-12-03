import * as dotenv from 'dotenv';
import express from 'express';
import router from '../routes/apiRoutes';
import { db } from '../config/dbConfig';

dotenv.config();

const app = express();

const port = process.env.PORT || '3000';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

db.then(() => {
  app.listen(port, () => console.log(`Server is listening on port ${port}`));
});

/* Coisas que faltam 

⚠: para coisas que devo implementar ainda nessa branch

- ⚠ Validar todos os TODO

- ⚠ Refactor inicial (limpar código etc)

- ⚠ Validar padrão de projeto



- Pegar dados diretamente do Plugin

- implementar uma rota para remover tokens específicos.
- Adicionar uma lógica para expirar tokens
- armazenar os tokens de maneira segura no banco

- testes unitários

*/
