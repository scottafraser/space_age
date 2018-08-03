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
    expect(result).toEqual(sample);
  });

  it ('should find age on other planets', function() {
    let sample = ["116.67", "45.16", "14.89", "2.36"];
    let result = scott.getPlanetAges();
    expect(result).toEqual(sample);
  });




});
