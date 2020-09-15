Page({
	data: {
		backClass: [
			{
				id: 1,
				name: "red",
				class: "red",
			},
			{
				id: 2,
				name: "blue",
				class: "blue",
			},
		],
		currentItemId: 0,
		currentIndex: 0,
		descText: "税务授权",
	},
	swiperChange: function (e) {
		console.log(e);
		var currentItemId = e.detail.currentItemId;
		this.setData({
			currentItemId: currentItemId,
		});
	},
	clickChange: function (e) {
		console.log(e);
		var itemId = e.currentTarget.dataset.itemId;
		this.setData({
			currentItemId: itemId,
		});
	},
	myTab(e) {
		console.log(e);
		this.setData({
			currentIndex: e.detail.currentTarget.dataset.index,
		});
	},
	boxCustomMethod: function () {
        console.log("吞吞吐吐拖拖拖拖拖拖拖拖");
    },
});
