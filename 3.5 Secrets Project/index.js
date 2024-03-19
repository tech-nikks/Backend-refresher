import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import { connect } from 'http2';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
 var userIsAuthorized = false;
function passwordCheck(req,res,next)
{
    const password = req.body["password"];
    if(password == "ILoveProgramming")
    {
        userIsAuthorized = true;
    }
    next();
}

app.use(passwordCheck);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});