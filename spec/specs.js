describe('numbersToNames', function() {
  it('returns the written "one" when 1 as a digit is entered', function() {
    numbersToNames(1).should.equal("one");
  });

  it('returns the written "two" when 2 as a digit is entered', function() {
    numbersToNames(2).should.equal("two");
  });

  it('returns the written "twenty one" when 21 as a digit is entered', function() {
    numbersToNames(21).should.equal(" twenty one");
  });

  it('returns the written "twenty two" when 22 as a digit is entered', function() {
    numbersToNames(22).should.equal(" twenty two");
  });
  it('returns the written "ninety three" when 93 as a digit is entered', function() {
    numbersToNames(93).should.equal(" ninety three");
  });

  it('returns the written "one hundred" when 100 as a digit is entered', function() {
    numbersToNames(100).should.equal(" one hundred");
  });

  it('returns the written "five hundred" when 500 as a digit is entered', function() {
    numbersToNames(500).should.equal(" five hundred");
  });

  it('returns the written "five hundred five" when 505 as a digit is entered', function() {
    numbersToNames(525).should.equal(" five hundred twenty five");
  });
  it('returns the written "one thousand" when 1000 as a digit is entered', function() {
    numbersToNames(1000).should.equal("one thousand");
  }); 
  it('returns the written "one thousand two hundred thirty four" when 1234 as a digit is entered', function() {
    numbersToNames(1234).should.equal("one thousand two hundred thirty four");
  });    
  it('returns the written "twenty thousand" when 20000 as a digit is entered', function() {
    numbersToNames(20000).should.equal("twenty thousand");
  }); 
   it('returns the written "twenty one thousand two hundred thirty four" when 21234 as a digit is entered', function() {
    numbersToNames(21234).should.equal("twenty one thousand two hundred thirty four");
  });
  it('returns the written "twenty one thousand" when 21234 as a digit is entered', function() {
    numbersToNames(21000).should.equal("twenty one thousand");
  });  
});
  
    
