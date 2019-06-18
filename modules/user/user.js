export default class User {

     getUser (req,res) {
        res.status(200).send(req.body);
    }

}