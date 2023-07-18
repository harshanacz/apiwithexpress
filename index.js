const express = require ("express");
const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));


const productData = [0];

app.listen(2000, () => {
    console.log("Server running on port 3000");
});

//POST METHOD
app.post("api/add-product", (req, res) => {
    console.log("result ",req.body);

    const pdata = {
        "id": productData.length + 1,
        "pname": req.body.pname,
        "pprice": req.body.pprice,
        "pdesc": req.body.pdesc
    };

    productData.push(pdata);
    console.log("productData ", productData);

    res.status(200).send({
        "status_code": 200,
        "message": "Product added successfully"
     });
});