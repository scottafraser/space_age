import {Person} from '../src/age';

describe ('Person', function() {
  let scott;
 
  beforeEach(function() {
    scott = new Person("1989,9,11", 28);
  });

  it ('should find year in seconds', function() {
    let sample = 883008000;
    let result = scott.findYearInSeconds();
    expect(result).toEqual(sample);
  });

  it ('should find exact age in seconds', function() {
    let now = new Date ();
    let birthday = new Date(scott.birthday);
    let sample = Math.floor(now - birthday) * 0.001;
    let result = scott.getExactAge();
    expect(Math.trunc(result)).toEqual(Math.trunc(sample));
  });

  it ('should find age on other planets', function() {
    const exactAge = 911832473.47;
    let sample = ["120.48", "46.64", "15.38", "2.44"];
    let result = scott.getPlanetAges(exactAge);
    expect(result).toEqual(sample);
  });




});
