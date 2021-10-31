export default [
	{
		title: "主页",
		icon: "xxxx",
		path: "/",
		component: "./pages/Home",
	},
	{
		title: "页面一",
		path: "/page1",
		component: "./pages/Page1",
	},
	{
		title: "页面二",
		path: "/page2",
		component: "./pages/Page2",
		children: [
			{
				title: "页面二-Child1",
				path: "/page2/child1",
				component: "./pages/Page2/Child1",
			},
		],
	},
	{
		title: "页面三",
		path: "/page3",
		component: "./pages/Page3",
		children: [
			{
				name: "页面二-Child1",
				path: "/page3/child1",
				component: "./pages/Page3/Child1",
			},
		],
	},
];
