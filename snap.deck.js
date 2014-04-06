(function(window) {
    "use strict";

    var USAStd = {
        count : 9,
        width:63.5,
        height:88,
        xstops : [12.7, 76.2, 139.7, 203.2],
        ystops : [7.7, 95.7, 183.7, 271.7]
    };

    var snapdeck = {};

    function Deck(cardCount) {
        var pageCount = Math.ceil(cardCount / USAStd.count);
        var page, pageIndex, card, cardIndex;

        this.svg = Snap("8.5in",(pageCount*11)+"in").attr({id:"SnapDeck", style:"display: block;"});

        var plus = this.svg.g(this.svg.path("M -3 0 H 3 M 0 -3 V 3"));
        plus.attr({id:"plus", opacity:".4", stroke:"black", "stroke-width":"0.1"});
        plus.toDefs();

        this.pages = [];
        var pageAttr =  { width:"8.5in", height:"11in", "viewBox" : "0 0 215.9 279.4"};
        for (pageIndex = 1; pageIndex <= pageCount; pageIndex++) {
            page = this.svg.el("svg", pageAttr).attr({ id : "SnapDeckPage"+pageIndex, y : ((pageIndex-1)*11)+"in" });
            this.pages.push(page);
        }

        cardIndex = 1;
        this.cards = [];
        this.pages.forEach(function(page) {
            USAStd.ystops.forEach(function(y, yindex, yarray) {
                USAStd.xstops.forEach(function(x, xindex, xarray) {
                    var p = plus.use().attr({x:x, y:y});
                    page.append(p);

                    if (cardIndex <= cardCount) {
                        var lastx = ((xarray.length - 1) == xindex);
                        var lasty = ((yarray.length - 1) == yindex);

                        if ( !lastx && !lasty ) {
                            card = page.el("svg", {id:"SnapDeckCard"+cardIndex, "x":x, "y":y, width:USAStd.width, height:USAStd.height });
                            this.cards.push(card);

                            cardIndex++;
                        }
                    }
                },this);
            },this);
        },this);

    }

    snapdeck.deck = function (cards) {
        return new Deck(cards);
    };

    snapdeck._dashify = function(attr) {
        return attr.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    };

    snapdeck.defaultAttr = function(attr, defaults) {
        var prop, result = {};
        for (prop in defaults) {
            if (defaults.hasOwnProperty(prop)) {
                result[snapdeck._dashify(prop)] = defaults[prop];
            }
        }
        for (prop in attr) {
            if (attr.hasOwnProperty(prop)) {
                result[snapdeck._dashify(prop)] = attr[prop];
            }
        }
        return result;
    };

    // http://www.w3.org/TR/SVG11/text.html#Introduction
    // SVG performs no automatic line breaking or word wrapping.
    snapdeck.textArea = function (s, x, y, width, textToWrap, attr) {
        if (!textToWrap) return;

        attr = SnapDeck.defaultAttr(attr, {"text-anchor":"start","font-size":3.5, "letter-spacing":-.05, "line-spacing":0, "paragraph-spacing":0});
        var fontSize = attr["font-size"];
        width = width * (fontSize / 3 );
        var yDelta = (fontSize * 1.25) + attr["line-spacing"];
        var tmpSvg, tmpRoot = deck.svg.g().attr(attr).toDefs();
        var g = s.g().attr(attr);
        var line = "", tmpLine = "", linecount = 0;
        var texts = textToWrap.split("\n");
        texts.forEach(function(text) {
            var words = text.split(" ");
            words.forEach(function(word) {
                if (line) {
                    tmpLine = line + " " + word;
                    tmpSvg = tmpRoot.text(0, 0, tmpLine);
                    if (tmpSvg.node.getBoundingClientRect().width > width) {      //clientWidth  or  getBoundingClientRect().width or getComputedTextLength()
                        g.text(x, y /*+ (linecount * yDelta)*/, line);
                        y = y + yDelta;
                        linecount++;
                        line = tmpLine = word;
                    } else {
                        line = line + " " + word;
                    }
                    tmpSvg.remove();
                } else {
                    line = word;
                }
            });

            g.text(x, y /*+ (linecount * yDelta)*/, line);
            y = y + yDelta + attr["paragraph-spacing"];
            linecount++;
            line = tmpLine = "";
        });

        tmpRoot.remove();
        return g;
    };

    snapdeck.pinwheel = function (s, cx, cy, cr, count, background, foreground) {
        var c = s.circle(cx, cy, cr);
        c.attr({"stroke-width" : 0, "fill" : background});

        var deg = 360 / count;
        var offset = -deg/2;
        var i;
        for (i = 0; i < count/2; i++) {
            var start = "M " + cx + " " + cy;

            var rad = (2 * i * deg + offset) * (Math.PI / 180);
            var x = cx + (Math.cos(rad) * cr);
            var y = cy + (Math.sin(rad) * cr);

            var first = " L " + x + " " + y;

            rad = (2 * i * deg + deg + offset) * (Math.PI / 180);
            x = cx + (Math.cos(rad) * cr);
            y = cy + (Math.sin(rad) * cr);

            var second = " A " + cx + " " + cy + " 0 0 1 " + x + " " + y;

            s.path(start + first + second + " Z").attr({"fill":foreground});
        }

        return s;
    };

    window.SnapDeck = snapdeck;
})(window);