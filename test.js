G.AddData({
name:'testmod',
author:'Meguus',
desc:'A simple example mod that adds hot peppers and hot sauce.',
engineVersion:1,
manifest:'modManifest.js',
sheets:{},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Unit({
		name:'smart man',
		desc:'@Big smart guy yes.',
		cost:{'food':500},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0,'culture':0,'faith':0,'science':1,'influence':0}}
		],
		category:'debug',
		req:{'School':true}
	});
	new G.Tech({
		name:'School',
		desc:'@unlocks smart man, and gives sience',
		cost:{'insight':100},
		req:{'oral tradition':true,'steel-making':true},
		effects:[
			{type:'provide res',what:{'education':100}},
		],
		chance:2,
	});
}})
