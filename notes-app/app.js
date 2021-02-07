
  const chalk=require('chalk')
const { string } = require('yargs')
  const yargs=require('yargs')
const { removeNotes, listNotes, addNote } = require('./notes.js')
  const notes=require('./notes.js')

//Customize yargs version

 yargs.version('1.1.0')

 //Create add command
 yargs.command({
 
    command: 'add',
    describe: 'Add a new note',
    builder: {
       title: {
          describe: 'Note Title',
          demandOption: true,
          type: 'string'
       },
       body : {
          describe: 'Note body',
          demandOption: true,
          type: 'string'

       }

    },
    handler(argv) {
      
        notes.addNote(argv.title,argv.body)

    }

 })

 //Create remove command 

 yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{

      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      }
        
  },
  handler(argv) {
    //console.log('Removing the note!')
     notes.removeNotes(argv.title)

  }

 })

 //Creating list command

 yargs.command({
   command: 'list',
   describe: 'List out the notes',
   handler() {
    // console.log('Listing out the notes!')
       notes.listNotes()

      }
   })

   //Create read command

   yargs.command({
      
       command: 'read',
       describe: 'Read a note',
       builder: {
         title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

         }
       },
       handler(argv){
         console.log('Reading a note!')
         notes.readNote(argv.title)
       }
   })


  yargs.parse()


 



 


