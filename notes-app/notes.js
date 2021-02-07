
const fs=require('fs')
const chalk=require('chalk')


//Adding notes to a file
const addNote=(title,body) =>{

   const notes=loadNotes()

   const duplicateNote=notes.find((note)=>note.title===title)

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
       
          })
       
          saveNotes(notes)
          console.log(chalk.green.inverse('New Note added!'))

    } else {

        console.log(chalk.red.inverse('Note title taken!'))

    }


}

//Removing a note
//refactoring to ES6 arrow head functions
const removeNotes=(title)=>{
    console.log(title)
    const notes=loadNotes()
    const filteredNotes=notes.filter((note)=>note.title!=title)
    
    //console.log(filteredNotes.length)

     if(notes.length!=filteredNotes.length)
     {
        console.log(chalk.bgGreen('Notes updated after delete'))
        saveNotes(filteredNotes)
     }
     else
       console.log(chalk.bgRed('No note found'))

}

//listing notes by their titles

const listNotes=()=>{

    const notes=loadNotes()
    console.log(chalk.green('Printing Notes'))
    notes.forEach((note)=>console.log(note.title))

}

//reading the saved notes by matching the title
const readNote=(title)=>{
   const notes=loadNotes()
   const noteToRead=notes.find((note)=>note.title===title)

   if(noteToRead)
   {
      console.log(chalk.blue(noteToRead.title) + ': ' + noteToRead.body ) 
   }
   else
   {
       console.log(chalk.red.inverse('No note found to read'))
   }

}

//saving a note into the file
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

//loading notes from the file
const loadNotes=()=>{

    try {
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch(e){

        return []

    }


}



module.exports={

     addNote: addNote,
     removeNotes: removeNotes,
     listNotes: listNotes,
     readNote: readNote

}