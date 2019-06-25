(function (compId) {
    var colorMain = '#eec0c0';  // red
    var colorAlt = '#faddb9';   // orange

    var _ = null, y = true, n = false, x13 = 'break-word', e23 = '${TextCopy4}', x2 = '5.0.0', x6 = 'rgba(192,192,192,0)', x4 = 'rgba(0,0,0,0)', g = 'image', e28 = '${TextCopy}', e34 = '${M_logo}', cl = 'clip', e29 = '${RoundRect2Copy2}', x = 'text', e35 = '${RoundRect2}', e33 = '${RoundRect2Copy3}', x7 = 'solid', m = 'rect', ot = 'transform-origin', x11 = 'Roboto', oz = '-moz-transform-origin', i = 'none', x26 = 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', on = 'msTransformOrigin', x3 = '6.0.0.400', om = '-ms-transform-origin', p = 'px', o = 'opacity', e24 = '${back_end2}', e27 = '${Web-site}', oo = '-o-transform-origin', e25 = '${RoundRect2Copy}', or = '-webkit-transform-origin', zy = 'scaleY', e30 = '${TextCopy3}', lf = 'left', e22 = '${Desktop_app}', zx = 'scaleX', l = 'normal', x32 = '@@0@@% @@1@@%', x1 = '6.0.0', e31 = '${Text}', e21 = '${mobile_app}', w = 'width', tp = 'top', x20 = 'rgba(255,255,255,1)', x12 = '300', xc = 'rgba(0,0,0,1)', x10 = '32';
    var g16 = 'mobile_app.png', g14 = 'Desktop_app.png', g8 = 'Web-site.png', g18 = 'back_end.png', g5 = 'M_logo.png';
    var s19 = "<p style=\"margin: 0px; text-align: center;\">​Backend</p>", s9 = "<p style=\"margin: 0px; text-align: center;\">​Websites</p>", s17 = "<p style=\"margin: 0px; text-align: center;\">​Mobile Apps</p>", s15 = "<p style=\"margin: 0px; text-align: center;\">​Desktop Apps</p>";
    var im = '../static/promotions/images_orange/animation/', aud = 'media/', vid = 'media/', js = 'js/', fonts = {'Roboto': '<link href=\'https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic\' rel=\'stylesheet\' type=\'text/css\'>'}, opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    }, resources = [], scripts = [], symbols = {
        "stage": {
            v: x1,
            mv: x2,
            b: x3,
            stf: w,
            cg: i,
            rI: n,
            cn: {
                dom: [{
                    id: 'M_logo',
                    t: g,
                    r: ['868px', '180px', '180px', '180px', 'auto', 'auto'],
                    br: ["90px", "90px", "90px", "90px 90px"],
                    o: '0',
                    f: [x4, im + g5, '0px', '0px'],
                    boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0.28)"]
                }, {
                    id: 'RoundRect2',
                    t: m,
                    r: ['642px', '159px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px", "0px", "0px"],
                    o: '1',
                    f: [x6],
                    s: [3, colorMain, x7]
                }, {
                    id: 'RoundRect2Copy',
                    t: m,
                    r: ['982px', '440px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px", "0px", "0px"],
                    o: '1',
                    f: [x6],
                    s: [3, colorMain, x7],
                    tf: [[], ['180']]
                }, {
                    id: 'RoundRect2Copy3',
                    t: m,
                    r: ['642px', '440px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px 150px", "0px", "0px"],
                    o: '1',
                    f: [x6],
                    s: [3, colorAlt, x7],
                    tf: [[], ['180'], [], ['-1']]
                }, {
                    id: 'RoundRect2Copy2',
                    t: m,
                    r: ['982px', '159px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(110px 294px 110px 296px)',
                    br: ["0px", "150px", "0px", "0px"],
                    o: '1',
                    f: [x6],
                    s: [3, colorAlt, x7],
                    tf: [[], [], [], ['-1']]
                }, {
                    id: 'Web-site',
                    t: g,
                    r: ['1307px', '532px', '270px', '166px', 'auto', 'auto'],
                    cl: 'rect(0px 270px 166px 0px)',
                    f: [x4, im + g8, '0px', '0px'],
                    tf: [[], [], [], ['0', '0']]
                }, {
                    id: 'TextCopy',
                    t: x,
                    r: ['1321px', '698px', '241px', '46px', 'auto', 'auto'],
                    o: '0',
                    text: s9,
                    n: [x11, [x10, p], xc, x12, i, "", x13, l]
                }, {
                    id: 'Desktop_app',
                    t: g,
                    r: ['361px', '509px', '241px', '211px', 'auto', 'auto'],
                    cl: 'rect(0px 241px 211px 0px)',
                    f: [x4, im + g14, '0px', '0px']
                }, {
                    id: 'Text',
                    t: x,
                    r: ['361px', '698px', '241px', '46px', 'auto', 'auto'],
                    o: '0',
                    text: s15,
                    n: [x11, [x10, p], xc, x12, i, "", x13, l]
                }, {
                    id: 'mobile_app',
                    t: g,
                    r: ['1400px', '71px', '84px', '165px', 'auto', 'auto'],
                    cl: 'rect(0px 84px 165px 0px)',
                    f: [x4, im + g16, '0px', '0px']
                }, {
                    id: 'TextCopy4',
                    t: x,
                    r: ['1321px', '248px', '241px', '46px', 'auto', 'auto'],
                    o: '0',
                    text: s17,
                    n: [x11, [x10, p], xc, x12, i, "", x13, l]
                }, {
                    id: 'back_end2',
                    t: g,
                    r: ['401px', '38px', '162px', '232px', 'auto', 'auto'],
                    cl: 'rect(0px 162px 232px 0px)',
                    f: [x4, im + g18, '0px', '0px', '100%', '100%', 'no-repeat']
                }, {
                    id: 'TextCopy3',
                    t: x,
                    r: ['361px', '248px', '241px', '46px', 'auto', 'auto'],
                    o: '0',
                    text: s19,
                    n: [x11, [x10, p], xc, x12, i, "", x13, l]
                }],
                style: {
                    '${Stage1}': {
                        isStage: true,
                        r: ['null', 'null', '1920px', '810px', 'auto', 'auto'],
                        zr: ['768px', '', '', ''],
                        overflow: 'hidden',
                        f: [x20]
                    }
                }
            },
            tt: {
                d: 3750,
                a: y,
                data: [["eid1161", zx, 1475, 1870, "easeOutQuart", e21, '0', '1'], ["eid1185", zy, 1678, 1870, "easeOutQuart", e22, '0', '1'], ["eid2441", o, 1983, 1363, "easeOutQuart", e23, '0', '1'], ["eid1428", zy, 1372, 1870, "easeOutQuart", e24, '0', '1'], ["eid3996", cl, 0, 1314, "easeOutSine", e25, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x26}], ["eid1990", cl, 1314, 444, "easeOutSine", e25, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x26}], ["eid1991", cl, 1758, 242, "easeOutSine", e25, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x26}], ["eid958", zy, 1880, 1870, "easeOutQuart", e27, '0', '1'], ["eid2451", tp, 2387, 1363, "easeOutQuart", e28, '698px', '738px'], ["eid956", zx, 1880, 1870, "easeOutQuart", e27, '0', '1'], ["eid3993", cl, 0, 814, "easeOutSine", e29, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x26}], ["eid1998", cl, 814, 444, "easeOutSine", e29, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x26}], ["eid1999", cl, 1258, 242, "easeOutSine", e29, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x26}], ["eid5017", lf, 1028, 0, "linear", e28, '1321px', '1321px'], ["eid5012", lf, 1028, 0, "linear", e21, '1400px', '1400px'], ["eid5023", lf, 1028, 0, "linear", e22, '361px', '361px'], ["eid5024", lf, 1028, 0, "linear", e24, '401px', '401px'], ["eid2453", tp, 1880, 1363, "easeOutQuart", e30, '248px', '288px'], ["eid5021", lf, 1028, 0, "linear", e30, '361px', '361px'], ["eid5022", lf, 1028, 0, "linear", e31, '361px', '361px'], ["eid2449", tp, 1983, 1363, "easeOutQuart", e23, '248px', '288px'], ["eid5019", lf, 1028, 0, "linear", e23, '1321px', '1321px'], ["eid5018", lf, 1028, 0, "linear", e29, '982px', '982px'], ["eid2445", o, 1880, 1363, "easeOutQuart", e30, '0', '1'], ["eid1429", or, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5238", oz, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5239", om, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5240", on, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5241", oo, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5242", ot, 1372, 1870, "easeOutQuart", e24, [100, 50], [50, 50], {vt: x32}], ["eid5016", lf, 1028, 0, "linear", e33, '642px', '642px'], ["eid1162", zy, 1475, 1870, "easeOutQuart", e21, '0', '1'], ["eid3659", tp, 0, 686, "easeOutSine", e34, '180px', '300px'], ["eid2447", o, 2185, 1363, "easeOutQuart", e31, '0', '1'], ["eid1163", or, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid5243", oz, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid5244", om, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid5245", on, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid5246", oo, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid5247", ot, 1475, 1870, "easeOutQuart", e21, [0, 50], [50, 50], {vt: x32}], ["eid1427", zx, 1372, 1870, "easeOutQuart", e24, '0', '1'], ["eid3997", cl, 0, 686, "easeOutSine", e35, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x26}], ["eid1992", cl, 686, 444, "easeOutSine", e35, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x26}], ["eid1993", cl, 1130, 242, "easeOutSine", e35, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x26}], ["eid5013", lf, 1028, 0, "linear", e34, '868px', '868px'], ["eid3661", "boxShadow.blur", 0, 686, "easeOutSine", e34, '0px', '40px'], ["eid2455", tp, 2185, 1363, "easeOutQuart", e31, '698px', '738px'], ["eid1186", or, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5248", oz, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5249", om, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5250", on, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5251", oo, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5252", ot, 1678, 1870, "easeOutQuart", e22, [100, 50], [50, 50], {vt: x32}], ["eid5020", lf, 1028, 0, "linear", e35, '642px', '642px'], ["eid5015", lf, 1028, 0, "linear", e25, '982px', '982px'], ["eid1184", zx, 1678, 1870, "easeOutQuart", e22, '0', '1'], ["eid3657", o, 0, 686, "easeOutSine", e34, '0', '1'], ["eid960", or, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid5253", oz, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid5254", om, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid5255", on, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid5256", oo, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid5257", ot, 1880, 1870, "easeOutQuart", e27, [0, 50], [50, 50], {vt: x32}], ["eid3994", cl, 0, 1064, "easeOutSine", e33, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x26}], ["eid1996", cl, 1064, 444, "easeOutSine", e33, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x26}], ["eid1997", cl, 1508, 242, "easeOutSine", e33, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x26}], ["eid2443", o, 2387, 1363, "easeOutQuart", e28, '0', '1'], ["eid3663", "boxShadow.offsetV", 0, 686, "easeOutSine", e34, '0px', '20px'], ["eid5014", lf, 1028, 0, "linear", e27, '1307px', '1307px']]
            }
        }
    };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-10513714");
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

    (function (symbolName) {
        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            sym.stopAll(0);

            function isScrolledIntoView(elem) {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                var animationOffset = 250;

                return ((elemBottom >= docViewTop)
                && (elemTop <= docViewBottom - animationOffset)
                && (elemTop >= docViewTop) );
            }

            function onScroll(e) {
                if (isScrolledIntoView(sym.ele)) {
                    sym.play(0);
                    $(window).off("scroll", onScroll);
                }
            }

            if (isScrolledIntoView(sym.ele)) {
                sym.play(0)
            } else {
                $(window).on("scroll", onScroll);
            }
        });
    })("stage");
})($, AdobeEdge, "EDGE-10513714");