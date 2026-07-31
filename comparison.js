const subject = 'Math';
const book = 'compiler design';
console.log(book.toUpperCase())
if(subject === book){
    console.log('aj k ai lesson ta ses kore felbo');
}
else {
    console.log('coding korte moja laga')
    console.log(subject.toUpperCase())
}

const emailUserProvided = 'nayon@maitra.com'
const emailSavedInDatabase = 'nayon@MAITRA.com'
console.log('###:',emailUserProvided.trimStart(), '###')
if(emailUserProvided.toLowerCase() === emailSavedInDatabase.toLowerCase()){
    console.log('Welcome to my arena');
}