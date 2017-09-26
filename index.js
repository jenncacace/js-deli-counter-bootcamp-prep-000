var katzDeli = []

function takeANumber (deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var line = []
  for(var i=0; i < katzDeliLine.length; i++){
    line.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  if (!line.length){
    return "The line is currently empty."
  } else {
    return `The line is currently: ${line.join(', ')}`;
  }
}
