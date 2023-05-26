/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'babilonia-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'babilonia-list': '&#xe929;',
		'babilonia-apartment': '&#xe928;',
		'babilonia-mail-open-outline': '&#xe925;',
		'babilonia-refresh': '&#xe923;',
		'babilonia-heart-outline': '&#xe924;',
		'babilonia-whatsapp-outline': '&#xe926;',
		'babilonia-phone-outline': '&#xe927;',
		'babilonia-trash': '&#xe91b;',
		'babilonia-phone-2': '&#xe91c;',
		'babilonia-heart': '&#xe91d;',
		'babilonia-eye-open': '&#xe91e;',
		'babilonia-area': '&#xe91f;',
		'babilonia-bath': '&#xe920;',
		'babilonia-bed': '&#xe921;',
		'babilonia-home-2': '&#xe922;',
		'babilonia-home': '&#xe916;',
		'babilonia-people': '&#xe917;',
		'babilonia-collections': '&#xe918;',
		'babilonia-stadistics': '&#xe919;',
		'babilonia-resume': '&#xe91a;',
		'babilonia-medal-plus': '&#xe914;',
		'babilonia-medal-premium': '&#xe915;',
		'babilonia-angle-up': '&#xe912;',
		'babilonia-angle-down': '&#xe913;',
		'babilonia-whatsapp': '&#xe90f;',
		'babilonia-mail': '&#xe910;',
		'babilonia-phone-fill': '&#xe911;',
		'babilonia-current-position': '&#xe90e;',
		'babilonia-check': '&#xe909;',
		'babilonia-star-outline': '&#xe90a;',
		'babilonia-star': '&#xe90b;',
		'babilonia-hand-keys': '&#xe90c;',
		'babilonia-house': '&#xe90d;',
		'babilonia-unpublish-icon': '&#xe903;',
		'babilonia-chart-up-icon': '&#xe904;',
		'babilonia-person-icon': '&#xe905;',
		'babilonia-camera-line-icon': '&#xe906;',
		'babilonia-edit-icon': '&#xe907;',
		'babilonia-share-icon': '&#xe908;',
		'babilonia-360-icon': '&#xe900;',
		'babilonia-video-icon': '&#xe901;',
		'babilonia-camera-icon': '&#xe902;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/babilonia-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
