const sequelize = require('../conection') // importar la clase par la conexión de la base datos

// Metodo para obtener de la base de datos todas las caracteristicas
const getFeature = async (req, res) =>{
    try {
        // consulta SQL a la tabla feature
        const result = await sequelize.query('SELECT * FROM feature', {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({result}) // respuesta exitossa con datos
    } catch (error) {
        if (error.name) {
            res.status(404).json({ // respuesta fallida sin datos
                error,
                message: 'error en la búsqueda'
            })
        } else {
            res.status(500).json({ // error de la busqueda
                error,
                message : 'Error inesperado'
            })
        }
    }
}

// Metodo para obtener de la base de datos una caracteristica por ID
const getFeatureById = async (req, res) =>{
    try {
        // consulta SQL a la tabla feature
        const result = await sequelize.query(`SELECT * FROM feature
        where id = ${req.params.featureId}`, {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({result}) // respuesta exitossa con datos
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

// Metodo para crear una caracteristica en la base de datos
const createFeature = async (req, res) =>{
    const {description} = req.body

    let arrayInsertFeature = [`${description}`]
    
    try {
         // consulta SQL a la tabla feature
        const result = await sequelize.query('INSERT INTO feature (description) VALUES( ?)',
        {replacements: arrayInsertFeature , type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Feature Create',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message : 'error en la creación'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

// Metodo para obtener por ID la lista de caracteristicas de una nave
const getFeatureList = async (req, res) =>{
    try {
        // consulta SQL a la tabla feature_list
        const result = await sequelize.query(`SELECT * FROM feature_list 
        where id_ship = ${req.params.shipId}`, 
        {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({result})
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}
// Metodo para crear una caracteristica y valor a una nave
const createFeatureList = async (req, res) =>{
    const {id_ship, id_feature, value} = req.body
    
    let arrayInsertFeatureL = [`${id_ship}`, `${id_feature}`, `${value}`]
    
    try {
        // consulta SQL a la tabla feature_list
        const result = await sequelize.query('INSERT INTO feature_list (id_ship, id_feature, value_feature) VALUES( ?, ?, ?)',
        {replacements: arrayInsertFeatureL , type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Feature List Create',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message : 'error en la creación'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

// exponer los metodos a la clase de routes
exports.getFeature = getFeature
exports.getFeatureById = getFeatureById
exports.createFeature = createFeature
exports.getFeatureList = getFeatureList
exports.createFeatureList = createFeatureList