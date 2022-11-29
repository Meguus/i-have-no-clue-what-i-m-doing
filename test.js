G.AddData({
name:'test mod',
author:'meguus',
desc:'no.',
engineVersion:1,
manifest:'modManifest.js',
sheets:{'test':'https://github.com/Meguus/i-have-no-clue-what-i-m-doing/blob/main/basesheet.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
	new G.Unit({
		name:'smart man',
		desc:'@Big smart guy yes.',
		icon:[5,2],
		cost:{'food':500},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0,'culture':0,'faith':0,'science':1,'influence':0}}
		],
		category:'think',
		req:{'School':true}
	});
	new G.Tech({
		name:'School',
		desc:'@unlocks smart man, and gives sience',
		icon:[5,2],
		cost:{'insight':100},
		req:{'oral tradition':true,'steel-making':true},
		effects:[
			{type:'provide res',what:{'education':100}},
		],
		chance:2,
	});
}})
