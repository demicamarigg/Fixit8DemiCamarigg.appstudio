
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

//let memberNames = ""

btnEnterName.onclick=function() {
  memberNames = inptFirstName.value
  if (members.includes(inptFirstName.value) == True) {
  lblMember.value = "That user is a member!"
} else {
  lblMember.value = "That user is not a member."
  members.push(inptFirstName.value)
  }
}