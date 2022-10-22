var express = require('express');
var cors = require('cors');
var app = express();
var users = require('./routes/users');
var posts = require('./routes/posts');
var auth = require('./routes/auth');
var social = require('./routes/social');
var comments = require('./routes/comments');
;
app.listen(3001, function () {
    console.log(`\uD83D\uDE80 Server ready at http://localhost:3001`);
});
app.use(express.json());
app.use(cors());
app.use('/user', users);
app.use('/posts', posts);
app.use('/comments', comments);
app.use('/auth', auth);
app.use('/social', social);

app.get('/', function (req, res) {
    res.status(200).send({ server_is: "up" });
});
