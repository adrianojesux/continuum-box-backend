const Box = require('./../models/box');

class BoxService {

    async getAll(req, res) {
        await Box.find({}, (err, data) => {
            console.log('Data')
            if(err)
                return res.status(500).send(err);
            
            return res.send(data);
        });
    }

    async getDetails(req, res) {
        const { idBox } = req.params;

        const box = await Box.findById(idBox).populate('archives');

        res.send(box);
    }

    async createBox(req, res) {
        const { title } = req.body;

        if(!title)
            return res.status(400).send({ message: "Titulo não informado."});
        
        await Box.create(req.body);
        return res.send();
        
    }

    async removeBox(req, res) {
        const {idBox} = req.params;

        await Box.findByIdAndRemove(idBox);

        return res.send();      

    }
}

module.exports = new BoxService();