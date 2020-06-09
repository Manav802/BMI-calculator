const exp=require("express");

const bp=require("body-parser");

const app=exp();

app.use(bp.urlencoded({extended:true}));



app.get("/",function(req,res)
{
	res.sendFile(__dirname+"/index.html");
});

app.post("/",function (req,res)
{
	var bmi;
	bmi=Number(req.body.Weight)/Number(req.body.Height);;
	bmi=bmi/Number(req.body.Height);;
	console.log(bmi);
	res.send("Your Bmi is "+bmi);
});

app.listen(3000,function(){console.log("Done")});