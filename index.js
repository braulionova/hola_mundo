const express = require('express')


const app = express()

const PUERTO = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})
