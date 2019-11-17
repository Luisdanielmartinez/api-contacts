const mongoCLient=require('mongodb').MongoClient;
const ObjectId=require('mongodb').ObjectID;
const Url='mongodb://localhost:27017';
const DbName='contactdb';
const Collection='contacts';
const client=new mongoCLient(Url,{ useUnifiedTopology: true });

class Contact{
    constructor(){
        this.init();
    }
   async init(){
    await client.connect();
   }
  async create(contact){
      try{
        await client.db(DbName).collection(Collection).insertOne(contact);
      }catch(err){
          throw err;
      }
  }
  async getAll(){
      try{
        const contacts= await client.db(DbName).collection(Collection).find().toArray();
        return contacts;
      }catch(err){
        throw err;
      }
  }
  async getById(id){
      try{
        const contact=await client.db(DbName).collection(Collection).findOne({"_id" : new ObjectId(id)});
        return contact;
      }catch(err){
        throw err;
      }

  }
}

module.exports=Contact;