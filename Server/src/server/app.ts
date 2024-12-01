import * as dotenv from 'dotenv';
import express from 'express';
import router from '../routes/apiRoutes';
import { db } from '../config/db.config';

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

- ⚠ configurar lint

- ⚠ Testar rota /list

- ⚠ Criar essa feat: Cada origem (domínio) deve ter um token de acesso exclusivo, 
    que é recebido via header nas requisições. 
    (criar rota para gerar token por domínio, deixar token de teste no .env)

- ⚠ Validar todos os TODO

- ⚠ Refactor inicial (limpar código etc)

- ⚠ Validar padrão de projeto



- Pegar dados diretamente do Plugin

- testes unitários

*/
