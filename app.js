const express = require('express');
const cors = require('cors');
const passwordValidator = require('./validadorPassword'); // Ruta correcta al archivo


const app = express();
app.use(express.json());

// habilitar consultas desde otros dominios
app.use(cors());


app.post('/ValidarPassword', (req, res) => {
  const { passwordActual, passwordNuevo, passwordNuevoRepetido } = req.body;

  console.log(JSON.stringify(req.body))

  // Lógica para validar los passwords
  if (passwordActual && passwordNuevo && passwordNuevoRepetido) {
    if (passwordNuevo === passwordNuevoRepetido) {
      
      // Aquí puedes realizar cualquier validación adicional según tus necesidades      
      var resultadoValidacion = passwordValidator.ValidarPassword(passwordNuevo);

      res.status(200).json(resultadoValidacion);

      // if (resultadoValidacion.Valida) {
      //   // res.status(200).json({ mensaje: 'Passwords válidos' });
      //   res.status(200).json(resultadoValidacion);
      // }      
    } else {
      res.status(400).json({ error: 'El nuevo password no coincide con la repetición' });
    }
  } else {
    res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
});


// ---------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});



