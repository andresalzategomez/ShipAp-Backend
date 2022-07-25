const sequelize = require('../conection')


const getTypes = async (req, res) =>{
    try {
        const result = await sequelize.query('SELECT * FROM type_ship', {type: sequelize.QueryTypes.SELECT})
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

exports.getTypes = getTypes