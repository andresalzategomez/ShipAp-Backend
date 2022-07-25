const sequelize = require('../conection')


const getFeature = async (req, res) =>{
    try {
        const result = await sequelize.query('SELECT * FROM feature', {type: sequelize.QueryTypes.SELECT})
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

const getFeatureById = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM feature
        where id = ${req.params.featureId}`, {type: sequelize.QueryTypes.SELECT})
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


const createFeature = async (req, res) =>{
    const {description} = req.body

    let arrayInsertFeature = [`${description}`]
    
    try {
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

const getFeatureList = async (req, res) =>{
    try {
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

const createFeatureList = async (req, res) =>{
    const {id_ship, id_feature, value} = req.body
    
    let arrayInsertFeatureL = [`${id_ship}`, `${id_feature}`, `${value}`]
    
    try {
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

exports.getFeature = getFeature
exports.getFeatureById = getFeatureById
exports.createFeature = createFeature
exports.getFeatureList = getFeatureList
exports.createFeatureList = createFeatureList