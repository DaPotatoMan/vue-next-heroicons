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

	install(app, {
		prefix = 'heroicon',
		lowerCase = true
	} = {}) {
		if (this.installed) return;
		this.installed = true;

		Object.entries(this.icons).forEach(([, iconComponent]) => {
			let { name } = iconComponent;

			if (prefix) name = `${prefix}-${name}`;
			if (lowerCase) name = name.toLowerCase();

			app.component(name, iconComponent);
		});
	}
};

export { Outline, Solid };
