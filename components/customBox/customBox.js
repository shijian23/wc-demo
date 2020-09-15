Component({
	data: {},
	properties: {
		descText: {
			type: String,
			value: "",
		},
	},
	methods: {
		goToNewPage: function () {
			this.triggerEvent("boxCustomMethod", "");
		},
	},
});
