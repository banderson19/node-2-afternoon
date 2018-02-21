module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.create_product()
        .then( ()=> res.status(200).send())
        .catch( () => res.status(500).send() )
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getOne()
        .then( product => res.status(200).send(product))
        .catch( () => res.status(500).send()); 
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAll()
        .then( products => res.status(200).send(products))
        .catch( () => res.status(500).send());
    }, 
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update()
        .then( () => res.status(200).send())
        .catch(() => res.status(500).send());
    }, 
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete() 
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
}