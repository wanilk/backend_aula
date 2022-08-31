import app from './src/app.js'
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import YAML from 'yamljs';

// import swaggerDocument from './docs/swagger.json' assert {type: "json"}; //Usando Json
const swaggerDocument = YAML.load('./docs/swagger.yml'); //Usando YAML

// definição de porta condicional do proxy ou na 3000
const port = process.env.PORT || 3030; 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// retorno no terminal com o link
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })

// executar node server.js
// executar npm run dev