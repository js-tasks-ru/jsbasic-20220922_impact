function checkSpam(str) {
  if (str.toLowerCase().includes('1xBet'.toLowerCase())) return true
  else if (str.toLowerCase().includes('XXX'.toLowerCase())) return true
  else return false
}
