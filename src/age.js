export class Person {
  constructor(line1, line2, line3) {
  this.line1 = line1.split(' ')
  this.line2 = line2.split(' ')
  this.line3 = line3.split(' ')
}
  removeSilentE(line){
    for (var i = 0 ; i < line.length ; i++){
      if (line[i].endsWith('e')) {
        line[i] = line[i].slice('e', -1);
      }
   }
   return line


  }
}
