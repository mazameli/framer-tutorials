// teaches about PageComponent: width, height, backgroundColor, scrollVertical (t/f)
// .addPage(takes-a-layer)
// .snapToPage(layer, animate?)


artboardBackground = new BackgroundLayer ({backgroundColor: "black"})

bg = new Layer({
	width: 750,
	height: 1334,
	image: "images/bg.png"
})

home = new Layer({
	width: 750,
	height: 1334,
	image: "images/home.png"
})

numbers = new Layer({
	width: 750,
	height: 1334,
	image: "images/numbers.png"
})

status = new Layer({
	width: 750,
	height: 40,
	image: "images/status.png"
})

pager = new PageComponent ({
	width: 750,
	height: 1334,
	scrollVertical: false
})

pager.addPage(home);
pager.addPage(numbers);

// make background blur scale and fade
// Layer.on()
// Utils.modulate()
	// translates number ranges
	// Utils.modulate(value to translate, [array of input range], [array of output range], optional limit true/false usually should be set to true)

pager.content.on("change:x", function() {
	bg.scale = Utils.modulate (this.x, [-750,0], [1.1, 1], true); //This makes the bg layer's scale go from 100% (1) to 200% as you swipe
	bg.blur = Utils.modulate (this.x, [-750,0], [20, 1], true);
	bg.opacity = Utils.modulate (this.x, [-750,0], [0.8, 1], true);
});
