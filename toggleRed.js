//Toggle Class 'Red' on Tile Title When Mouse Enters/Leaves

var tile = $('.tile');

var title = $('.title');

tile.mouseenter(function(){
	title.toggleClass('red')
});

