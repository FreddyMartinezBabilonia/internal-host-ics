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
		'babilonia-ruler': '&#xe9b9;',
		'babilonia-list1': '&#xe9b7;',
		'babilonia-lens': '&#xe9b8;',
		'babilonia-dollar': '&#xe9b4;',
		'babilonia-tag': '&#xe9b5;',
		'babilonia-house-center-fill': '&#xe9b6;',
		'babilonia-home-share': '&#xe9b3;',
		'babilonia-collections-fill': '&#xe9b2;',
		'babilonia-clock-solid': '&#xe9b1;',
		'babilonia-trash-solid': '&#xe9af;',
		'babilonia-back-arrow': '&#xe9b0;',
		'babilonia-projects': '&#xe9ae;',
		'babilonia-asterisk': '&#xe9ad;',
		'babilonia-exclamation-solid': '&#xe9ab;',
		'babilonia-circle-exclamation-solid': '&#xe9ac;',
		'babilonia-circle-info': '&#xe9a9;',
		'babilonia-visit': '&#xe9aa;',
		'babilonia-x': '&#xe9a7;',
		'babilonia-question': '&#xe9a8;',
		'babilonia-spin': '&#xe99c;',
		'babilonia-hospital2': '&#xe99e;',
		'babilonia-market': '&#xe99f;',
		'babilonia-store2': '&#xe9a0;',
		'babilonia-train2': '&#xe9a1;',
		'babilonia-park': '&#xe9a2;',
		'babilonia-food': '&#xe9a3;',
		'babilonia-discount': '&#xe9a4;',
		'babilonia-gift2': '&#xe9a5;',
		'babilonia-offert': '&#xe9a6;',
		'babilonia-upload-done': '&#xe99d;',
		'babilonia-google': '&#xe92a;',
		'babilonia-facebook': '&#xe92b;',
		'babilonia-parking-visitors': '&#xe957;',
		'babilonia-parking': '&#xe958;',
		'babilonia-built-area': '&#xe959;',
		'babilonia-square': '&#xe95a;',
		'babilonia-room': '&#xe95b;',
		'babilonia-apartment1': '&#xe95c;',
		'babilonia-arrow-right': '&#xe95d;',
		'babilonia-arrow-simple-left': '&#xe95e;',
		'babilonia-arrow-simple-right': '&#xe95f;',
		'babilonia-arrow-top-square': '&#xe960;',
		'babilonia-bath1': '&#xe961;',
		'babilonia-bed1': '&#xe962;',
		'babilonia-bell1': '&#xe963;',
		'babilonia-calendar': '&#xe964;',
		'babilonia-camera': '&#xe965;',
		'babilonia-check11': '&#xe966;',
		'babilonia-checkbox-checked': '&#xe967;',
		'babilonia-checkbox-unchecked': '&#xe968;',
		'babilonia-checked-circle': '&#xe969;',
		'babilonia-circle-cross': '&#xe96a;',
		'babilonia-clock': '&#xe96b;',
		'babilonia-commercial': '&#xe96c;',
		'babilonia-cross-circle': '&#xe96d;',
		'babilonia-edit': '&#xe96e;',
		'babilonia-elevator': '&#xe96f;',
		'babilonia-exclaim-triangle': '&#xe970;',
		'babilonia-eye': '&#xe971;',
		'babilonia-furniture': '&#xe972;',
		'babilonia-garden': '&#xe973;',
		'babilonia-cross': '&#xe974;',
		'babilonia-gps': '&#xe975;',
		'babilonia-grear': '&#xe976;',
		'babilonia-grill': '&#xe977;',
		'babilonia-gym': '&#xe978;',
		'babilonia-heart1': '&#xe979;',
		'babilonia-heart-filled': '&#xe97a;',
		'babilonia-hottub': '&#xe97b;',
		'babilonia-house1': '&#xe97c;',
		'babilonia-land': '&#xe97d;',
		'babilonia-location': '&#xe97e;',
		'babilonia-map': '&#xe97f;',
		'babilonia-minus': '&#xe980;',
		'babilonia-office': '&#xe981;',
		'babilonia-paw': '&#xe982;',
		'babilonia-pencil': '&#xe983;',
		'babilonia-phone': '&#xe984;',
		'babilonia-pin': '&#xe985;',
		'babilonia-plus': '&#xe986;',
		'babilonia-pool': '&#xe987;',
		'babilonia-radio-checked': '&#xe988;',
		'babilonia-radio-unchecked': '&#xe989;',
		'babilonia-radius': '&#xe98a;',
		'babilonia-search1': '&#xe98b;',
		'babilonia-select-closed': '&#xe98c;',
		'babilonia-select-open': '&#xe98d;',
		'babilonia-share': '&#xe98e;',
		'babilonia-terrace': '&#xe98f;',
		'babilonia-upload': '&#xe990;',
		'babilonia-user': '&#xe991;',
		'babilonia-userpick': '&#xe992;',
		'babilonia-dollar-circle': '&#xe993;',
		'babilonia-all-checked': '&#xe994;',
		'babilonia-warehouse': '&#xe995;',
		'babilonia-listing': '&#xe996;',
		'babilonia-filter': '&#xe997;',
		'babilonia-price': '&#xe998;',
		'babilonia-property': '&#xe999;',
		'babilonia-square-meter': '&#xe99a;',
		'babilonia-area1': '&#xe99b;',
		'babilonia-discount-tag': '&#xe91e;',
		'babilonia-eye-open': '&#xe93b;',
		'babilonia-eye-slash': '&#xe956;',
		'babilonia-plus-more': '&#xe950;',
		'babilonia-link': '&#xe951;',
		'babilonia-file-pdf': '&#xe952;',
		'babilonia-door': '&#xe953;',
		'babilonia-forum': '&#xe954;',
		'babilonia-transaction': '&#xe955;',
		'babilonia-dot': '&#xe94f;',
		'babilonia-close': '&#xe94e;',
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
		'babilonia-check1': '&#xe909;',
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
