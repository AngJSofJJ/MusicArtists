var util = require('util');
var homepageAdd = require('./homepageAdd.js');

describe('Music Artists Homepage', function() {

  var listCount = 0;

  beforeEach(function() {
      browser.get('http://localhost:3000/');
    });

    it('should have the title as MUSIC ARTISTS', function() {
      expect(browser.getTitle()).toBe('MUSIC ARTISTS');
    });

    it('Verify the original number of artists', function(){
      var list = element.all(by.repeater('artist in ArtList.musicartists'));
      listCount = list.count();
      expect(listCount).toBe(13);
    });


    it('Should Successfully Add New Artist', function(){
        homepageAdd.enterArtistName('JJ');
        homepageAdd.enterCountry('India');
        homepageAdd.enterPeriod('2020');
        homepageAdd.enterGenre('Classical');
        homepageAdd.enterClaimedSales('100 Million');

        homepageAdd.addClick();

        var newList = element.all(by.repeater('artist in ArtList.musicartists'));
        var newListCount = newList.count();
        expect(newListCount).toEqual(14);
    });

    
});
