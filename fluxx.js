var cardData = [];
// Keeper
cardData.push({factory:makeKeeper, title:"JavaScript", sidetitle:"JAVASCRIPT", image:"images/JavaScript-logo.png"});
cardData.push({factory:makeKeeper, title:"HTML5", sidetitle:"HTML5", image:"images/HTML5_Logo_512.png"});
cardData.push({factory:makeKeeper, title:"CSS3", sidetitle:"CSS3", image:"images/css3logo.png"});
cardData.push({factory:makeKeeper, title:"AngularJS", sidetitle:"ANGULARJS", image:"images/angularjs-logo.png"});
cardData.push({factory:makeKeeper, title:"jQuery", sidetitle:"JQUERY", image:"images/jquery_logo.gif"});
cardData.push({factory:makeKeeper, title:"Node.js", sidetitle:"NODE.JS", image:"images/nodejs.png"});
cardData.push({factory:makeKeeper, title:"ASP.NET MVC", sidetitle:"ASP.NET MVC", image:"images/asp.net-logo.gif"});
cardData.push({factory:makeKeeper, title:"TypeScript", sidetitle:"TYPESCRIPT", image:"images/typescript-logo.png"});
cardData.push({factory:makeKeeper, title:"Visual Studio", sidetitle:"VISUAL STUDIO", image:"images/visual_studio.jpg"});
cardData.push({factory:makeKeeper, title:"C#", sidetitle:"C#", image:"images/c%23%23.png"});
cardData.push({factory:makeKeeper, title:"WebMatrix", sidetitle:"WEBMATRIX", image:"images/logo-webmatrix3.png"});
cardData.push({factory:makeKeeper, title:"PHP", sidetitle:"PHP", image:"images/php-logo-big.gif"});

// Goal
cardData.push({factory:makeGoal, title:"Old School", sidetitle:"OLD SCHOOL", keeper1: cardData[4], keeper2: cardData[11]});
cardData.push({factory:makeGoal, title:"New School", sidetitle:"NEW SCHOOL", keeper1: cardData[5], keeper2: cardData[7]});
cardData.push({factory:makeGoal, title:"Single Page App", sidetitle:"SINGLE PAGE APP", keeper1: cardData[1], keeper2: cardData[3]});
cardData.push({factory:makeGoal, title:"Polyglot", sidetitle:"POLYGLOT", keeper1: cardData[9], keeper2: cardData[7]});
cardData.push({factory:makeGoal, title:"Web Platform", sidetitle:"WEB PLATFORM", keeper1: cardData[1], keeper2: cardData[2], keeper3: cardData[0]});
cardData.push({factory:makeGoal, title:"Tool Master", sidetitle:"TOOL MASTER", keeper1: cardData[8], keeper2: cardData[10]});
cardData.push({factory:makeGoal, title:".NET Platform", sidetitle:".NET PLATFORM", keeper1: cardData[6], keeper2: cardData[8]});
cardData.push({factory:makeGoal, title:"Entry Level", sidetitle:"ENTRY LEVEL", keeper1: cardData[11], keeper2: cardData[10]});
cardData.push({factory:makeGoal, title:"Mistaken Identity", sidetitle:"MISTAKEN IDENTITY", keeper1: cardData[4], keeper2: cardData[0]});
cardData.push({factory:makeGoal, title:"Selectors", sidetitle:"SELECTORS", keeper1: cardData[2], keeper2: cardData[4]});
cardData.push({factory:makeGoal, title:"Transpile", sidetitle:"TRANSPILE", keeper1: cardData[0], keeper2: cardData[7]});
cardData.push({factory:makeGoal, title:"Odd Couple", sidetitle:"ODD COUPLE", keeper1: cardData[5], keeper2: cardData[10]});
cardData.push({factory:makeGoal, title:"Double MVC", sidetitle:"DOUBLE MVC", keeper1: cardData[6], keeper2: cardData[3]});
cardData.push({factory:makeGoal, title:"Intellisense", sidetitle:"INTELLISENSE", keeper1: cardData[1], keeper2: cardData[8]});
cardData.push({factory:makeGoal, title:"Edge.js", sidetitle:"EDGE.JS", keeper1: cardData[5], keeper2: cardData[9]});
cardData.push({factory:makeGoal, title:"UI Bootstrap", sidetitle:"UI BOOTSTRAP", keeper1: cardData[2], keeper2: cardData[3]});

// Action
cardData.push({factory:makeAction, title:"Draw 2 and\nuse 'em", sidetitle:"DRAW 2 AND USE 'EM", text:"Set your hand aside.\n\nDraw 2 cards, play them in any order you choose, then pick up your hand and continue with your turn.\n\nThis card, and all cards played because of it, are counted as a single play."});
cardData.push({factory:makeAction, title:"Trash a\nNew Rule", sidetitle:"TRASH A NEW RULE", text: "Select one of the New Rule cards in play and place it in the discard pile."});
cardData.push({factory:makeAction, title:"Exchange\nKeepers", sidetitle:"EXCHANGE KEEPERS", text:"Pick any Keeper another player has on the table and exchange it for one that you have on the table.\n\nIf you have no Keepers in play, or if no one else has a Keeper, nothing happens."});
cardData.push({factory:makeAction, title:"Rules Reset", sidetitle:"RULES RESET", text:"Reset to the Basic Rules\n\nDiscard all New Rule cards, and leave only the Basic Rules in play.\n\nDon't discard the current Goal."});
cardData.push({factory:makeAction, title:"Trade Hands", sidetitle:"TRADE HANDS" ,text:"Trade your hand for the hand of your opponents.\n\nThis is one of those times when you can get something for nothing."});
cardData.push({factory:makeAction, title:"Steal a\nKeeper", sidetitle:"STEAL A KEEPER", text:"Take your choice of any Keeper from in front of another player and place it in front of you."});
cardData.push({factory:makeAction, title:"What Do\nYou Want?", sidetitle:"WHAT DO YOU WANT?", text:"Remove any card you want from the discard pile. If..."});
cardData.push({factory:makeAction, title:"Rollback", sidetitle:"ROLLBACK", text:"All software in play is returned to the hands of their owners, unless someone has Visual Studio in play, in which case that player takes all software in play and adds them to their hand."});

// Rule      basic rules, keeper limit 3, double agenda, draw 2, play 2, hand limit 3
cardData.push({factory:makeRule, title: "Basic Rules", sidetitle: "BASIC RULES"});
cardData.push({factory:makeRule, title: "Keeper Limit 3", sidetitle: "KEEPER LIMIT 3"});
cardData.push({factory:makeRule, title: "Double Agenda", sidetitle: "DOUBLE AGENDA"});
cardData.push({factory:makeRule, title: "Draw 2", sidetitle: "DRAW 2"});
cardData.push({factory:makeRule, title: "Play 2", sidetitle: "PLAY 2"});
cardData.push({factory:makeRule, title: "Hand Limit 3", sidetitle: "HAND LIMIT 3"});

// Creeper
cardData.push({factory:makeCreeper, title: "Patent Troll", sidetitle: "PATENT TROLL"});

// Surprise
cardData.push({factory:makeSurprise, title: "Change Request", sidetitle: "CHANGE REQUEST"});
cardData.push({factory:makeSurprise, title: "CyberCrime", sidetitle: "CYBERCRIME"});


var deck = SnapDeck.deck(cardData.length);     // 45

deck.svg.attr({"font-family":"sans-serif"});

var sidebar = deck.svg.rect(3,3,10,82).attr({ id:"sidebar" }).toDefs();
var hr = deck.svg.rect(15,33,45.5,2).attr({ id:"hr", fill:"black" }).toDefs();
var hrWidth = hr.node.getBoundingClientRect().width;

var arrow = deck.svg.el("symbol").attr({id:"arrow", stroke:"black", "stroke-width":.5});
arrow.append(deck.svg.path("M 8.5 5 l .5 0 l 3 3 l -3 3 l -.5 0 l 0 -1.5 l -4 0 l 0 -3 l 4 0 Z").attr({fill:"black"}));
arrow.append(deck.svg.path("M 9 5 l 3 3 l -3 3 l 0 -1.5 l -4 0 l 0 -3 l 4 0 Z").attr({"stroke-linejoin":"round", fill:"#2EA7DE"}));

var bolt = deck.svg.el("symbol").attr({id:"bolt", stroke:"black", "stroke-width":.5});
bolt.append(deck.svg.path("M 8 5 l -3 3 l 2 0 l -2 2 l 2 0 l -2 3 l 5 -4 l -2 0 l 2 -2 l -2 0 l 2 -2 Z").attr({fill:"white"}));

var check = deck.svg.el("symbol").attr({id:"check", stroke:"black", "stroke-width":1});
check.append(deck.svg.polyline([5, 8, 6, 11, 11, 5]).attr({"stroke-linejoin":"round", "stroke-linecap":"round", fill:"none"}));

var checkbox = deck.svg.el("symbol").attr({id:"checkbox", stroke:"black"});
checkbox.append(deck.svg.rect(6,6,6,6).attr({fill:"black", "stroke-width":0}));
checkbox.append(deck.svg.rect(5,5,6,6).attr({fill:"#D43C82", "stroke-width":.5}));

// stack trace issue when flowerpedal was a symbol
var flowerpedal = deck.svg.g().attr({id:"flowerpedal", stroke:"black", "stroke-width":0}).toDefs();
flowerpedal.append(deck.svg.path("M 8 8 l -.75 3 a .75,.75 0 1 0 1.5 0 Z").attr({fill:"black"}));

var flower = deck.svg.el("symbol").attr({id:"flower", stroke:"black", "stroke-width":0});
flower.append(flowerpedal.use());
flower.append(flowerpedal.use().transform("r60 8 8"));
flower.append(flowerpedal.use().transform("r120 8 8"));
flower.append(flowerpedal.use().transform("r180 8 8"));
flower.append(flowerpedal.use().transform("r240 8 8"));
flower.append(flowerpedal.use().transform("r300 8 8"));

var frown = deck.svg.el("symbol").attr({id:"frown", stroke:"black"});
frown.append(deck.svg.circle(8,8,3.5).attr({fill:"white", "stroke-width":0}));
frown.append(deck.svg.ellipse(7,7,.25,.25).attr({fill:"black", "stroke-width":.5}));
frown.append(deck.svg.ellipse(9,7,.25,.25).attr({fill:"black", "stroke-width":.5}));
frown.append(deck.svg.path("M 6.5 9.75 C 7 8 9 9 9.5 10").attr({fill:"none","stroke-width":.5, "stroke-linecap":"round"}));

var cardTypeTextAttr = {"font-size":9, "letter-spacing":-.5, "font-weight":"bold"};

var textWrap = SnapDeck.textArea;

function textLines(s, lines) {
    var g = s.g().attr({"text-anchor":"start","font-size":3.5, "letter-spacing":-.05});
    lines.forEach(function(line, i) {
        g.text(15, 18 + (i * 4), line);
    });

}

var keeper = deck.svg.g().toDefs();
keeper.attr({id:"keeper"});
keeper.append(sidebar.use().attr({"fill" : "#B3DD1A"})); // greenyellow
keeper.append(check.use());
keeper.text(14.5,11,"KEEPER").attr(cardTypeTextAttr);
keeper.append(hr.use());
textWrap(keeper,15, 18, hrWidth, "To play this card, place it face up on the table in front of you.");
//textLines(keeper, ["To play this card, place it face", "up on the table in front of you."]);

var goal = deck.svg.g().toDefs();
goal.attr({id:"goal"});
goal.append(sidebar.use().attr({"fill" : "#D43C82"})); // pink or E80E92
goal.append(checkbox.use());
goal.text(14.5,11,"GOAL").attr(cardTypeTextAttr);
goal.append(hr.use().attr({y:4}));
textWrap(goal,15, 18, hrWidth, "To play this card, place it face up in the center of the table. Discard previous Goal, if any.");
//textLines(goal,["To play this card, place it face","up in the center of the table.","Discard previous Goal, if any."]);

var action = deck.svg.g().toDefs();
action.attr({id:"action"});
action.append(sidebar.use().attr({"fill" : "#2EA7DE"})); // skyblue
action.append(arrow.use());
action.text(14.5,11,"ACTION").attr(cardTypeTextAttr);
//action.append(hr.use().attr({y:4}));
textWrap(action,15, 18, hrWidth, "To play this card, do whatever it says, then place it on the discard pile.");
//    textLines(action,["To play this card, do whatever","it says, then place it on the<","discard pile."]);

var rule = deck.svg.g().toDefs();
rule.attr({id:"rule"});
rule.append(sidebar.use().attr({"fill" : "#FDE50A"})); // yellow
rule.append(flower.use());
rule.text(14.5,11,"NEW RULE").attr(cardTypeTextAttr);
rule.append(hr.use());

var surprise = deck.svg.g().toDefs();
surprise.attr({id:"surprise"});
surprise.append(sidebar.use().attr({"fill" : "#694CA9"})); //  mediumpurple
surprise.append(bolt.use());
surprise.text(14.5,11,"SURPRISE").attr(cardTypeTextAttr);
surprise.append(hr.use().attr({y:13}));
//textLines(surprise, ["This card can be played at any","time, for one of the functions","described below, or to cancel a","Surprise which another player","has just played."]);
textWrap(surprise,15, 18, hrWidth, "This card can be played at any time, for one of the functions described below, or to cancel a Surprise which another player has just played.");

var creeper = deck.svg.g().toDefs();
creeper.attr({id:"creeper"});
creeper.append(sidebar.use().attr({"fill" : "black"}));
creeper.append(frown.use());
creeper.text(14.5,11,"CREEPER").attr(cardTypeTextAttr);
creeper.append(hr.use().attr({y:13}));
//textLines(creeper,["You cannot hold this card, but","must place it face up in front","of you as soon as you get it.","If you drew it, immediately","draw another card to replace it."]);
textWrap(creeper,15, 18, hrWidth, "You cannot hold this card, but must place it face up in front of you as soon as you get it. If you drew it, immediately draw another card to replace it.");

textWrap(creeper,15, 52, hrWidth, "You can't win if you have this unless the Goal says otherwise.");

textWrap(creeper,15, 66, hrWidth, "If you have any Keepers in play, you must choose one to attach this to. Both cards stay together until discarded.");

function goalText(keeper1, keeper2, keeper3) {
    var text = "";

    if (keeper3) {
        text = "The player who has any 2 of the following Keepers on the table wins: " + keeper1 + ", " + keeper2 + ", " + keeper3;
    } else {
        text = "The player who has " + keeper1 + " and " + keeper2 + " on the table wins."
    }

    return text;
}


function labelCard(s, y, title, sidetitle, fillWhite, attr) {
    //var x = s.text(15,31 + y,title).attr({"font-size":6,"text-anchor":"start"});
    attr = SnapDeck.defaultAttr(attr, {"font-size":5.5,"text-anchor":"start", "font-weight":"bold"});
    var x = textWrap(s, 15, 31 + y, hrWidth, title, attr);
    //console.log(x.node.clientWidth + " " + title);
    var t = s.text(10,15,sidetitle).attr({"font-size":6,"text-anchor":"end", "font-weight":"bold"}).transform("r270 10 15");
    if (fillWhite) {
        t.attr({fill:"white"})
    }

    return x;
}

function makeKeeper(card, data) {
    card.append(keeper.use());

    labelCard(card, 0, data.title, data.sidetitle);

    card.image(data.image, 22, 48, 30, 30).attr({"preserveAspectRatio":"meet"});
}
function makeGoal(card, data) {
    card.append(goal.use());

    labelCard(card, 4, data.title, data.sidetitle);

    textWrap(card, 15, 43, hrWidth, goalText(data.keeper1.title, data.keeper2.title, (data.keeper3 ? data.keeper3.title : null), {"font-size":4}));

    if (data.keeper3) {
        card.image(data.keeper1.image, 15, 59, 15, 15).attr({"preserveAspectRatio":"meet"});
        card.image(data.keeper3.image, 30, 66, 15, 15).attr({"preserveAspectRatio":"meet"});
        card.image(data.keeper2.image, 45, 59, 15, 15).attr({"preserveAspectRatio":"meet"});
    } else {
        card.image(data.keeper1.image, 15, 61, 20, 20).attr({"preserveAspectRatio":"meet"});
        card.image(data.keeper2.image, 39, 51, 20, 20).attr({"preserveAspectRatio":"meet"});

    }
}
function makeAction(card, data) {
    card.append(action.use());
    var labelText = labelCard(card, 4, data.title, data.sidetitle);

    var yDelta = 0;
    if (labelText.node.childNodes.length > 1) {
        yDelta += 6.5;
    }

    card.append(hr.use().attr({y:(4 + yDelta)}));
    textWrap(card, 15, 43 + yDelta, hrWidth, data.text, {"paragraph-spacing":-1.5});
}
function makeRule(card, data) {
    card.append(rule.use());
    labelCard(card, 0, data.title, data.sidetitle);
}
function makeCreeper(card, data) {
    card.append(creeper.use());
    labelCard(card, 13, data.title, data.sidetitle, true);
}
function makeSurprise(card, data) {
    card.append(surprise.use());
    labelCard(card, 13, data.title, data.sidetitle);
}

cardData.forEach(function(data, i) {
   if (data.factory) {
       data.factory(deck.cards[i], data);
   }
});

