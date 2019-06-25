(function (compId) {
    var _ = null, y = true, n = false, x11 = 'break-word', e29 = '${TextCopy4}', zy = 'scaleY', x2 = '5.0.0', x5 = 'rgba(192,192,192,0)', x18 = 'rgba(0,0,0,0)', e39 = '${RoundRect2}', e38 = '${Text}', tp = 'top', g = 'image', e36 = '${TextCopy}', e37 = '${Backend}', e31 = '${Mobile}', cl = 'clip', e34 = '${TextCopy3}', h = 'height', or = '-webkit-transform-origin', x25 = 'rgba(255,255,255,1)', x = 'text', zx = 'scaleX', x14 = 'open-sans, sans-serif', x6 = 'solid', m = 'rect', e33 = '${RoundRect2Copy3}', on = 'msTransformOrigin', x9 = 'Roboto', x1 = '6.0.0', i = 'none', x28 = 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', oz = '-moz-transform-origin', x3 = '6.0.0.400', e26 = '${Desktop}', o = 'opacity', lf = 'left', e35 = '${IoT}', oo = '-o-transform-origin', c = 'color', fs = 'font-size', e27 = '${RoundRect2Copy5}', e40 = '${TextCopy5}', l = 'normal', x32 = '@@0@@% @@1@@%', om = '-ms-transform-origin', p = 'px', ot = 'transform-origin', w = 'width', e30 = '${RoundRect2Copy4}', x13 = '24', x15 = '400', x10 = '300', xc = 'rgba(0,0,0,1)', x17 = '36', x4 = 'horizontal', x8 = '32';
    var g19 = 'Desktop.png', g21 = 'Mobile.png', g20 = 'IoT.png', g24 = 'Backend.png';
    var s16 = "<p style=\"margin: 0px; text-align: center;\">​<span style=\"text-transform: uppercase;\">Full-cycle</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"text-transform: uppercase;\">development</span></p><p style=\"margin: 0px; text-align: center;\"></p>", s22 = "<p style=\"margin: 0px; text-align: center;\">​Web and</p><p style=\"margin: 0px; text-align: center;\">Desktop Apps</p>", s12 = "<p style=\"margin: 0px; text-align: center;\">​Mobile</p><p style=\"margin: 0px; text-align: center;\">Apps</p>", s7 = "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: open-sans, sans-serif; font-size: 24px; font-weight: 400; color: rgb(8, 40, 62);\">IoT &amp; Hardware</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"font-family: open-sans, sans-serif; font-size: 24px; font-weight: 400; color: rgb(8, 40, 62);\">Integration</span></p>", s23 = "<p style=\"margin: 0px; text-align: center;\">​Infrastructure</p><p style=\"margin: 0px; text-align: center;\">and Backend</p>";
    var im = '../static/promotions/images/animation/', aud = 'media/', vid = 'media/', js = 'js/', fonts = {'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'}, opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    }, resources = [], scripts = [], symbols = {
        "stage": {
            v: x1,
            mv: x2,
            b: x3,
            stf: w,
            cg: x4,
            rI: n,
            cn: {
                dom: [{
                    id: 'RoundRect2',
                    t: m,
                    r: ['640px', '159px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px 150px", "0px", "0px"],
                    o: '1',
                    f: [x5],
                    s: [3, "rgba(189,239,212,1.00)", x6]
                }, {
                    id: 'RoundRect2Copy4',
                    t: m,
                    r: ['980px', '440px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px 150px", "0px", "0px"],
                    o: '1',
                    f: [x5],
                    s: [3, "rgba(189,239,212,1.00)", x6],
                    tf: [[], [], [], ['-1', '-1']]
                }, {
                    id: 'RoundRect2Copy3',
                    t: m,
                    r: ['640px', '440px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px 150px", "0px", "0px"],
                    o: '1',
                    f: [x5],
                    s: [3, "rgba(178,217,242,1.00)", x6],
                    tf: [[], ['180'], [], ['-1']]
                }, {
                    id: 'RoundRect2Copy5',
                    t: m,
                    r: ['980px', '159px', '294px', '174px', 'auto', 'auto'],
                    cl: 'rect(0px 294px 110px 3px)',
                    br: ["0px", "150px 150px", "0px", "0px"],
                    o: '1',
                    f: [x5],
                    s: [3, "rgba(178,217,242,1.00)", x6],
                    tf: [[], ['180'], [], ['1', '-1']]
                }, {
                    id: 'TextCopy',
                    t: x,
                    r: ['1319px', '698px', '241px', '83px', 'auto', 'auto'],
                    o: '0',
                    text: s7,
                    n: [x9, [x8, p], xc, x10, i, "", x11, l]
                }, {
                    id: 'Text',
                    t: x,
                    r: ['359px', '698px', '241px', '83px', 'auto', 'auto'],
                    o: '0',
                    text: s12,
                    n: [x14, [x13, p], "rgba(8,40,62,1.00)", x15, i, "", x11, l]
                }, {
                    id: 'TextCopy5',
                    t: x,
                    r: ['793px', '340px', '334px', '101px', 'auto', 'auto'],
                    o: '0',
                    text: s16,
                    n: [x14, [x17, p], "rgba(8,40,62,1.00)", x15, i, "", x11, l]
                }, {
                    id: 'Desktop',
                    t: g,
                    r: ['1320px', '43px', '240px', '240px', 'auto', 'auto'],
                    f: [x18, im + g19, '0px', '0px']
                }, {
                    id: 'IoT',
                    t: g,
                    r: ['1320px', '480px', '240px', '240px', 'auto', 'auto'],
                    f: [x18, im + g20, '0px', '0px']
                }, {
                    id: 'Mobile',
                    t: g,
                    r: ['360px', '480px', '240px', '240px', 'auto', 'auto'],
                    f: [x18, im + g21, '0px', '0px']
                }, {
                    id: 'TextCopy4',
                    t: x,
                    r: ['1319px', '248px', '241px', '83px', 'auto', 'auto'],
                    o: '0',
                    text: s22,
                    n: [x14, [x13, p], "rgba(8,40,62,1.00)", x15, i, "", x11, l]
                }, {
                    id: 'TextCopy3',
                    t: x,
                    r: ['359px', '248px', '241px', '83px', 'auto', 'auto'],
                    o: '0',
                    text: s23,
                    n: [x14, [x13, p], "rgba(8,40,62,1.00)", x15, i, "", x11, l]
                }, {
                    id: 'Backend',
                    t: g,
                    r: ['360px', '30px', '240px', '240px', 'auto', 'auto'],
                    f: [x18, im + g24, '0px', '0px']
                }],
                style: {
                    '${Stage1}': {
                        isStage: true,
                        r: ['null', 'null', '1920px', '820px', 'auto', 'auto'],
                        zr: ['768px', '1920px', '', ''],
                        overflow: 'hidden',
                        f: [x25]
                    }
                }
            },
            tt: {
                d: 3750,
                a: y,
                data: [["eid4885", zy, 1475, 1870, "easeOutQuart", e26, '0', '1'], ["eid5625", cl, 0, 1064, "easeOutSine", e27, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x28}], ["eid5626", cl, 1064, 444, "easeOutSine", e27, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x28}], ["eid5627", cl, 1508, 242, "easeOutSine", e27, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x28}], ["eid4901", fs, 3750, 0, "easeOutQuart", e29, '24px', '24px'], ["eid5395", cl, 0, 1564, "easeOutSine", e30, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x28}], ["eid5396", cl, 1564, 444, "easeOutSine", e30, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x28}], ["eid5397", cl, 2008, 242, "easeOutSine", e30, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x28}], ["eid2441", o, 1983, 1363, "easeOutQuart", e29, '0', '1'], ["eid4902", c, 3750, 0, "easeOutQuart", e29, 'rgba(8,40,62,1.00)', 'rgba(8,40,62,1.00)'], ["eid4892", or, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid6500", oz, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid6501", om, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid6502", on, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid6503", oo, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid6504", ot, 1678, 1870, "easeOutQuart", e31, [100, 50], [50, 50], {vt: x32}], ["eid4884", zx, 1475, 1870, "easeOutQuart", e26, '0', '1'], ["eid5398", lf, 2250, 0, "easeOutSine", e30, '980px', '980px'], ["eid5462", zx, 0, 0, "linear", e30, '-1', '-1'], ["eid3994", cl, 0, 1194, "easeOutSine", e33, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x28}], ["eid1996", cl, 1194, 444, "easeOutSine", e33, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x28}], ["eid1997", cl, 1638, 242, "easeOutSine", e33, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x28}], ["eid4900", h, 3750, 0, "easeOutQuart", e29, '83px', '83px'], ["eid4903", c, 3750, 0, "easeOutQuart", e34, 'rgba(8,40,62,1.00)', 'rgba(8,40,62,1.00)'], ["eid4895", zx, 1880, 1870, "easeOutQuart", e35, '0', '1'], ["eid4898", h, 3750, 0, "easeOutQuart", e34, '83px', '83px'], ["eid5069", h, 3750, 0, "easeOutQuart", e36, '83px', '83px'], ["eid4879", zy, 1372, 1870, "easeOutQuart", e37, '0', '1'], ["eid4888", tp, 3345, 0, "easeOutQuart", e26, '43px', '43px'], ["eid2445", o, 1880, 1363, "easeOutQuart", e34, '0', '1'], ["eid4893", zy, 1678, 1870, "easeOutQuart", e31, '0', '1'], ["eid2451", tp, 2387, 1363, "easeOutQuart", e36, '698px', '738px'], ["eid4908", fs, 3750, 0, "easeOutQuart", e38, '24px', '24px'], ["eid4896", zy, 1880, 1870, "easeOutQuart", e35, '0', '1'], ["eid5070", h, 3750, 0, "easeOutQuart", e38, '83px', '83px'], ["eid2447", o, 2185, 1363, "easeOutQuart", e38, '0', '1'], ["eid2449", tp, 1983, 1363, "easeOutQuart", e29, '248px', '288px'], ["eid4878", zx, 1372, 1870, "easeOutQuart", e37, '0', '1'], ["eid3997", cl, 0, 686, "easeOutSine", e39, [110, 294, 110, 296], [110, 294, 110, 295], {vt: x28}], ["eid1992", cl, 686, 444, "easeOutSine", e39, [110, 294, 110, 295], [0, 294, 110, 150], {vt: x28}], ["eid1993", cl, 1130, 242, "easeOutSine", e39, [0, 294, 110, 150], [0, 294, 110, 3], {vt: x28}], ["eid4907", c, 3750, 0, "easeOutQuart", e38, 'rgba(8,40,62,1.00)', 'rgba(8,40,62,1.00)'], ["eid5927", o, 0, 686, "easeOutSine", e40, '0', '1'], ["eid2455", tp, 2185, 1363, "easeOutQuart", e38, '698px', '738px'], ["eid4899", fs, 3750, 0, "easeOutQuart", e34, '24px', '24px'], ["eid5463", zy, 0, 0, "linear", e30, '-1', '-1'], ["eid4897", or, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid6505", oz, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid6506", om, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid6507", on, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid6508", oo, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid6509", ot, 1880, 1870, "easeOutQuart", e35, [0, 50], [50, 50], {vt: x32}], ["eid2453", tp, 1880, 1363, "easeOutQuart", e34, '248px', '288px'], ["eid5464", tp, 2250, 0, "linear", e30, '440px', '440px'], ["eid5926", tp, 0, 686, "easeOutSine", e40, '180px', '340px'], ["eid4894", zx, 1678, 1870, "easeOutQuart", e31, '0', '1'], ["eid2443", o, 2387, 1363, "easeOutQuart", e36, '0', '1'], ["eid4886", or, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid6510", oz, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid6511", om, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid6512", on, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid6513", oo, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid6514", ot, 1475, 1870, "easeOutQuart", e26, [0, 50], [50, 50], {vt: x32}], ["eid4880", or, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}], ["eid6515", oz, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}], ["eid6516", om, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}], ["eid6517", on, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}], ["eid6518", oo, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}], ["eid6519", ot, 1372, 1870, "easeOutQuart", e37, [100, 50], [50, 50], {vt: x32}]]
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