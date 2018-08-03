export class Person {
  constructor(age, life) {
  this.birdthday = birthday;
  this.age = age;
  this.life = life;
  
}

// Years of age,times 365, times 24, times 60, times 60. Then, number of days between your last birthday, and today. 
// Multiply by 24, 60, and 60. Then the number of hours between your time of birth and now.

  getAgeInSeconds(birthdayInput){
    const birthday = new Date('birthdayInput');
    const timeNow = new Date();
    const ageInSeconds = (timeNow - birthday) * 0.001;

    return ageInSeconds;
  }

  findAgeinSeconds(ageYears){
  ageYears * 365 * 24 * 60
   return line

  }
}
