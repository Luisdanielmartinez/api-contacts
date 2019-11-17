const routes=require('express').Router();
const contactRepo=require('../repo/contactoRepo');

const contact=new contactRepo();

routes.post('/', async(req,resp) =>{
    try{
        const{ body }=req;
        await contact.create(body).catch((err)=>console.log('error: '+err));
        resp.json({success:true}) 
    }catch(err){
       resp.json({fail:true})
    }
})
routes.get('/',async (req,resp)=>{
    try{
      const contacts=await contact.getAll();
      resp.json(contacts);
    }catch(err){
     resp.json([]);
    }
});

routes.get('/:id',async (req,resp)=>{
   try{
     
      const {id}=req.params;
      const contactFound=await contact.getById(id);
      resp.json(contactFound);
   }catch(err){
     resp.json({error : err.message});
   }
});
module.exports=routes;