//declare "mongoose"
const mongoose = require('mongoose')

//declare schema (table design/structure)
//we declare column (field) name + type along with input validation
const vocabSchema = new mongoose.Schema(
   {
      vietnamese: {
         type: String,
         required: true
      },
      english: {
         type: String,
         required: true
      }
   },
   {
      versionKey: false   //ignore "__v" when add new data
   }
)

//declare model
const vocabModel = mongoose.model('vocabs', vocabSchema)  //vocabs: table (collection) name

//export model as a module
module.exports = vocabModel
