const Archive = require("./../models/archives");
const Box = require("./../models/box");

class ArchiveService {

    async all(req, res) {
        await Archive.find({}, (err, data) => {
            if(err)
                return res.status(400).send(err);
            
            return res.send(data);
        });
    }

    async upload(req, res){
        const { originalname: name, size, key, location: pathUrl = "" } = req.file;
        const { idBox } = req.params;

        console.log({
            title: name,
            size,
            key,
            box: idBox,
            pathUrl
        });

        const archive = await Archive.create({
            title: name,
            size,
            key,
            box: idBox,
            pathUrl
        });

        const box = await Box.findById(idBox);

        box.archives.push(archive);
        box.save();
        
        return res.send(archive);
    }

    async listFromBox(req, res) {
        const { idBox } = req.params;

        const archives = await Archive.find({ box : idBox });

        return res.send(archives);
    }

    async delete(req, res){
        const { idArchive } = req.params;

        await Archive.findByIdAndRemove(idArchive);

        return res.send();
    }

}

module.exports = new ArchiveService();