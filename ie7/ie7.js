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
		'babilonia-comment': '&#xe94d;',
		'babilonia-ordering': '&#xe94c;',
		'babilonia-angle-left': '&#xe92e;',
		'babilonia-angle-right': '&#xe92f;',
		'babilonia-area-solid': '&#xe930;',
		'babilonia-basket-shopping': '&#xe931;',
		'babilonia-bell': '&#xe932;',
		'babilonia-building-wheat': '&#xe933;',
		'babilonia-car': '&#xe934;',
		'babilonia-car-with-a-tree': '&#xe935;',
		'babilonia-checked': '&#xe936;',
		'babilonia-circle-dot': '&#xe937;',
		'babilonia-covered-area': '&#xe938;',
		'babilonia-exclamation-circle': '&#xe939;',
		'babilonia-exclamation-mark': '&#xe93a;',
		'babilonia-eye': '&#xe93b;',
		'babilonia-gift': '&#xe93c;',
		'babilonia-grid': '&#xe93d;',
		'babilonia-hand-holding-dollar': '&#xe93e;',
		'babilonia-hospital': '&#xe93f;',
		'babilonia-location-dot': '&#xe940;',
		'babilonia-price-tag': '&#xe941;',
		'babilonia-restaurant': '&#xe942;',
		'babilonia-right-arrow': '&#xe943;',
		'babilonia-search': '&#xe944;',
		'babilonia-star-regular': '&#xe945;',
		'babilonia-star-solid': '&#xe946;',
		'babilonia-store': '&#xe947;',
		'babilonia-tags': '&#xe948;',
		'babilonia-time': '&#xe949;',
		'babilonia-train': '&#xe94a;',
		'babilonia-tree-city': '&#xe94b;',
		'babilonia-bars-horizontal': '&#xe92d;',
		'babilonia-person': '&#xe92c;',
		'babilonia-facebook': '&#xe92a;',
		'babilonia-google': '&#xe92b;',
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
