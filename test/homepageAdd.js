var homepageAdd = function(){
    
    this.enterArtistName = function(value){
        element(by.model('ArtList.NewArtist.artist')).sendKeys(value);
    };
    this.enterCountry = function(value){
        element(by.model('ArtList.NewArtist.country')).sendKeys(value);
    };
    this.enterPeriod = function(value){
        element(by.model('ArtList.NewArtist.period')).sendKeys(value);
    };
    this.enterGenre = function(value){
        element(by.model('ArtList.NewArtist.genre')).sendKeys(value);
    };
    this.enterClaimedSales = function(value){
        element(by.model('ArtList.NewArtist.claimedsales')).sendKeys(value);
    };

    this.addClick = function(){
        element(by.partialButtonText('Add')).click();
    }
};
module.exports = new homepageAdd();
