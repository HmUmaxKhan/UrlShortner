const UrlShort = require('../models/shortLink');

const handleUrl = async(req,res)=>{

    const {url} = req.body;

    if(!url){
        res.json({res:false,msg:'url is not given'})
    }
    const {nanoid} = await import ('nanoid')
    const id = nanoid(8)
    
    const result = await UrlShort.create({
        shortId:id,
        urlRedirect:url,
    })

    console.log(result);

    if (result){
        res.json({res:true,msg:'url created successfully',data:result})
    }

}

const handlegetUrl = async (req,res)=>{
    const id = req.params.shorturl

    const result = await UrlShort.findOneAndUpdate(
        {shortId:id},
        {$push:{history:{visit:new Date().toISOString()}}}
    )

    console.log(res);

    res.redirect(result.urlRedirect)
}

module.exports={
    handleUrl,
    handlegetUrl
}