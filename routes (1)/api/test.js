const router = require('express').Router();
const Persona = require('../../models/persona.model')

router.get('/', async function (req, res, next) {
    Persona.find()
        .then(
            personas => res.json(personas))
        .catch((error) => console.log(error.message))
});

router.get('/find', async function (req, res, next) {
    let personas = await Persona.find({ edad: 25 });
    res.json(personas)
});

router.get('/create', async (req, res, next) => {
    const pers = new Persona();

    pers.nombre = 'Lidia';
    pers.apellidos = 'Gomez';
    pers.edad = 48;
    console.log(pers);
    await pers.save();
    console.log(pers);

    res.json(pers)
})

router.get('/createV2', async (req, res, next) => {

    const result = await Persona.create({
        nombre: 'Lorenzo',
        apellidos: 'Martinez',
        edad: 23,
    })

    res.json(result)

})

router.get('/mayores', async (req, res, next) => {
    const personas = await Persona.find({
        edad: { $gt: 25, $lt: 50 }
    });
    res.json(personas)
})

router.get('/nombres', async function (req, res, next) {
    let personas = await Persona.find();
    let nombres = personas.map(persona => persona.nombreCompleto)

    res.json(nombres)

});


module.exports = router;
