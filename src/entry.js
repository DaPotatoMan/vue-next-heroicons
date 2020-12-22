import * as Outline from './outline';
import * as Solid from './solid';

export const HeroIcons = {
	icons: [],
	installed: false,

	/**
	 * Register function for global installation
	 * @param {Array} icons - icons to install
	 * @param {Boolean} overwrite - Overwrite registered icons
	 */
	register(icons = [], overwrite = false) {
		const array = typeof icons === 'object' ? Object.values(icons) : icons;

		if (overwrite) {
			this.icons = [...array];
		} else {
			this.icons.push(...array);
		}
	},

	/**
	 * Globally install icons
	 * @param {Object} app - Instance of vue
	 * @param {Object} prefix - Prefix of icon component in `PascalCase`.
	 */
	install(app, { prefix = 'HeroIcon' } = {}) {
		if (this.installed) return;
		this.installed = true;

		Object.entries(this.icons).forEach(([iconName, iconComponent]) => {
			const name = prefix.concat(iconName);
			app.component(name, iconComponent);
		});
	}
};

export { Outline, Solid };
