import {Person} from '../src/age';

describe ('Haiku', function() {
  let poem;
  let sample;


  beforeEach(function() {
    poem = new Haiku("i mean were looking", "down on waynes basement only", "thats not waynes basement");
 
  });


  it ('should remove silent e', function() {
    sample = "i mean wer looking".split(' ')
    let result = poem.removeSilentE(poem.line1);
    expect(result).toEqual(sample);
  });





});
