export class Person {
  constructor(birthday, age) {
  this.birthday = birthday;
  this.age = age;

  
}

  findYearInSeconds(){
    let yearInSeconds = Math.floor(this.age * 365 * 24 * 60 * 60);

    return yearInSeconds;
    }

  getExactAge(){
    const birthday = new Date(this.birthday);
    const timeNow = new Date();
    const exactAge = Math.floor(timeNow - birthday) * 0.001;

    return exactAge;
  }

}
