export function formatMenus(routes) {
	return routes.reduce((result, { path, component, children, meta }) => {
		if (path && component) {
			const menu = {
				path,
				title: meta?.title ?? component,
			};

			if (children) {
				menu.submenus = formatMenus(children);
			}

			result.push(menu);

			return result;
		}
	}, []);
}
