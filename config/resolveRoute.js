/**
 * 格式化路由配置，生成vue-router的routes配置项
 * @param {Array} routes
 * @returns
 */
export function formatRoute(routesCfg) {
	return routesCfg.reduce((result, { meta, path, exact, component, children }) => {
		if (path && component) {
			const route = {
				exact,
				path,
				component: webpackRequire(component),
				meta,
			};

			// 子路由
			if (children) {
				result.push(...formatRoute(children));
			}

			result.push(route);
		}

		return result;
	}, []);
}

/**
 * 加载模块
 * @param {string} id 模块路径
 * @returns 模块
 */
function webpackRequire(id) {
	// vue-router的配置项
	const webpackRequire = require.context("../src", true, /.vue/);
	let moduleId = id;
	// 没有指定文件后缀，默认串接 index.vue
	if (!/.vue/.test(moduleId)) {
		moduleId = `${moduleId}/index.vue`;
	}

	return webpackRequire(moduleId).default;
}
