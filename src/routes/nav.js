// ==============================|| ROUTES - NAV ||============================== //

/**
 * Extracts sidebar navigation items from a React Router route array.
 * Only includes routes that have handle.nav defined.
 * @param {Array} routes - array of route objects
 * @returns {Array<{ label: string, path: string }>}
 */
export function getNavItems(routes) {
    const items = [];

    for (const route of routes) {
        if (route.handle?.nav) {
            items.push({
                label: route.handle.nav.label,
                path: route.path
            });
        }
    }

    return items;
}
