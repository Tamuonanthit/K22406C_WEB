const express = require('express');
const app = express();
const port = 3002;
const morgan=require("morgan")


app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const cors=require("cors");
app.use(cors({
    origin: 'http://localhost:4200', 
    credentials: true 
}))
app.listen(port,()=>{
console.log(`My Server listening on port ${port}`)
})
app.get("/",(req,res)=>{
res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");
userCollection =database.collection("User");
app.get("/fashions",cors(),async (req,res)=>{
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
})

app.get("/fashions/:id",cors(),async (req,res)=>{
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray();
    res.send(result[0])
})

// post fashion
app.post("/fashions", cors(), async (req, res) => {
    // put json Fashion into database
    await fashionCollection.insertOne(req.body)
    // send message to client (send all database to client)
    res.send(req.body)
})

app.put("/fashions", cors(), async (req, res) => {
    await fashionCollection.updateOne(
        { _id: new ObjectId(req.body._id) },
        {
            $set: {
                style: req.body.style,
                fashion_subject: req.body.fashion_subject,
                fashion_detail: req.body.fashion_detail,
                fashion_image: req.body.fashion_image
            }
        })

    var o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
})


app.delete("/fashions/:id", cors(), async (req, res) => {
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    await fashionCollection.deleteOne(
        { _id: o_id }
    )
    res.send(result[0])
})
app.get("/create-cookie",cors(),(req,res)=>{
    res.cookie("username","tranduythanh")
    res.cookie("password","123456")
    account={"username":"tranduythanh",
    "password":"123456"}
    res.cookie("account",account)
    res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 +
        Date.now()});
    res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000});
    res.send("cookies are created")
    })

app.get("/read-cookie",cors(),(req,res)=>{
    //cookie is stored in client, so we use req
    username=req.cookies.username
    password=req.cookies.password
    account=req.cookies.account
    infor="username = "+username+"<br/>"
    infor+="password = "+password+"<br/>"
    if(account!=null)
    {
    infor+="account.username = "+account.username+"<br/>"
    infor+="account.password = "+account.password+"<br/>"
    }
    res.send(infor)
    })
app.get("/clear-cookie",cors(),(req,res)=>{
    res.clearCookie("account")
    res.send("[account] Cookie is removed")
    })
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ message: "Username and password are required" });
    }

    try {
        const user = await userCollection.findOne({ username, password });
        if (user) {
            // Lưu cookie khi đăng nhập thành công
            res.cookie("username", username, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
            res.cookie("password", password, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
            res.send({ message: "Login successful" });
        } else {
            res.status(401).send({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error logging in", error });
    }
});
    

app.get("/get-login", (req, res) => {
    const username = req.cookies.username || "";
    const password = req.cookies.password || "";
    
    if (username && password) {
        res.send({
            username: username,
            password: password,
            message: "Login information retrieved from cookie"
        });
    } else {
        res.send({
            username: "",
            password: "",
            message: "No login information found in cookies"
        });
    }
});



app.post("/logout", (req, res) => {
    res.clearCookie("username");
    res.send({ message: "Logged out successfully" });
});