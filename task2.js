function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.date = new Date()
    this.from = "angie.chin007@gmail.com"
  }
  
  // Type your code below this line!
  
  const newMail = new Mail(process.argv[2],process.argv[3] )
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
