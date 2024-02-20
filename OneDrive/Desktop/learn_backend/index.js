const express=require('express');
const port=8000;

const app=express();


app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error is present {err}`);
    }

    console.log('server is running at port',port);
});