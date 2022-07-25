const sequelize = require('../conection')


const getShips = async (req, res) =>{
    try {
        const result = await sequelize.query('SELECT * FROM ship', {type: sequelize.QueryTypes.SELECT})
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


const getShipId = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM ship 
        WHERE id = ${req.params.shipId}`, 
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

const getShipName = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM ship 
        WHERE ${req.params.column} like "%${req.params.shipName}%"`, 
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

const getShipNameInner = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * FROM ship s inner join feature_list f 
        on s.id = f.id_ship WHERE f.id_feature = ${req.params.featureId}`,
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

const createShip = async (req, res) =>{
    const {name, date_creation, date_destruction, id_type} = req.body

    let arrayInsertShip = [`${name}`, `${date_creation}`, `${date_destruction}`, `${id_type}`]
    
    try {
        const result = await sequelize.query('INSERT INTO ship (name, date_creation, date_destruction, id_type) VALUES( ?, ?, ?, ?)',
        {replacements: arrayInsertShip , type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Ship Create',
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


const updateShipById = async (req, res) =>{
    const { name, date_creation, date_destruction, id_type } = req.body
    console.log(name)

    try {
        const result = await sequelize.query(`UPDATE ship 
        SET name = "${name}",  
        date_creation = "${date_creation}",
        date_destruction = "${date_destruction}" ,
        id_type = "${id_type}"
        WHERE id = ${req.params.shipId}`,
        { type: sequelize.QueryTypes.INSERT })
        res.status(200).json({
            message: 'Ship Update',
            result,
    })

    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message: 'error en la actualización'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}

const deleteShipById = async (req, res) =>{
    try {
        const result = await sequelize.query(`DELETE FROM ship WHERE id = ${req.params.shipId}`)
        res.status(200).json({
            message: 'Ship delete',
            result
        })
    } catch (error) {
        if (error.name) {
            res.status(400).json({
                error,
                message: 'error en la eliminación'
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado'
            })
        }
    }
}


exports.getShips = getShips
exports.getShipId = getShipId
exports.getShipName = getShipName
exports.getShipNameInner = getShipNameInner
exports.createShip = createShip
exports.updateShipById = updateShipById
exports.deleteShipById = deleteShipById