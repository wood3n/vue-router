<template>
	<div class="layout">
		<div class="layout-menu">
			<ul>
				<li v-for="menu in menus" :key="menu.path">
					<a href="javascript: void" @click="handleClick(menu.path)">{{ menu.title }}</a>
					<ul v-if="menu.submenus" class="menu-child">
						<li v-for="childMenu in menu.submenus" :key="childMenu.path">
							<a href="javascript: void" @click="handleClick(childMenu.path)">{{
								childMenu.title
							}}</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="layout-main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import routes from "../../config/routes";
import { formatMenus } from "./menus";

const menus = formatMenus(routes);
console.log(menus);

export default {
	data() {
		return {
			menus,
		};
	},
	methods: {
		handleClick(path) {
			this.$router.push(path);
		},
	},
};
</script>

<style scoped>
.layout {
	display: flex;
}

.layout-menu {
	flex-basis: 25%;
	padding: 24px;
}

.layout-main {
	flex-basis: 75%;
	padding: 24px;
}

.menu-child {
	margin-left: 20px;
}
</style>
