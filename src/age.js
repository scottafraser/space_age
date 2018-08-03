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

  getPlanetAges(exactAge){
    const earthAge = (exactAge)/365/24/60/60;
    const planetYears = [0.24, 0.62, 1.88, 11.86];
    let planetAges = planetYears.map(function(yearValue) {
      return (earthAge / yearValue).toFixed(2);
    });
    return planetAges;
  }

}
