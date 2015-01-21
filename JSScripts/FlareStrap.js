/**
 * Created by fdallaire on 12/15/2014.
 */

/* Initializing JsSearch page */

var ohLocation = window.location;
var ohSearchEndpoint = 'http://vm-fd-w2k12.dev.coveo.com:8090/rest/search';
var ohSearchBoxScope = '@syssource=Help @language=English';
var ohSearchScope = '@syssource="Help" @language=English';
var ohSearchPage = '../SearchPage.htm';

/* Setting the Developers Sitecore space scope to only see the latest space by default. */
/*var ohMainScope = '(@syscfspacename="December 2014") OR (NOT @syscfspacename="sitecore integration")';*/
var a = new Date();
var c = a.getMonth() + 1;
var d = "Month" + c;
d = d.toLocaleString().toLowerCase();
var b = a.getFullYear();
var sitecoreScope = '(@syscfspacename="' + d + " " + b + '") OR (NOT @syscfspacename="sitecore integration")';

if (ohLocation.pathname.toLowerCase().indexOf("/en/ces/7.0/") >= 0)  {
    /*ohSearchScope = '@syssource="ces 7.0" @language=English';*/
    ohSearchScope = '@language=English ';
    if ((ohLocation.pathname.match(/\//g) || []).length == 4) {
        ohSearchPage = 'SearchPage.htm'
    }
}

if (ohLocation.pathname.toLowerCase().indexOf("/en/cloud/") >= 0)  {
    /*ohSearchScope = '@syssource=Cloud @language=English ' + latestSitecoreSpaceOnly;*/
    ohSearchScope = '@syssource=Cloud @language=English ' + sitecoreScope;
    ohSearchPage = 'SearchPage.htm';
}

function initOhFullSearchPage() {
    /*$('#mySearch').coveo('noConflict');*/
    $(window).load(function () {
        var coveoSiteIcons = function(facetValue) {
            var sitesWithNoIcons =["Website","Support KB"];
            if (facetValue.lookupValue.indexOf("New Online Help") > -1) {
                return 'images/Online Help.png';
            } else if (facetValue.lookupValue == 'Developers') {
                return 'images/Developers.png';
            } else if (facetValue.lookupValue == 'Answers (Web)') {
                return 'images/Answers.png';
            } else if (facetValue.lookupValue == 'Technical Blog') {
                return 'images/Source.png';
            } else if (facetValue.lookupValue == 'Coveo Platform 7.0 API') {
                return 'images/API.png';
            } else if (facetValue.lookupValue == 'Website') {
                return 'images/CoveoWebsite.png';
            } else if (sitesWithNoIcons.indexOf(facetValue.lookupValue) > 0) {
                return 'images/CoveoWebsite.png';
            } else {
                return 'images/CoveoWebsite.png';
            }
        };

        /*var g = $("html");
        Coveo.Ui.TemplateHelpers.registerTemplateHelper("resultBreadcrumb", g);*/

        Coveo.Rest.SearchEndpoint.endpoints["default"] = new Coveo.Rest.SearchEndpoint({
            restUri: ohSearchEndpoint
        });

        $("#search").coveo('init', {
            SearchInterface: {
                hiddenExpression: ohSearchScope
            },
            sourceFacet : {
                valueIcon : coveoSiteIcons
            },
            externalComponents: [$('#searchBox')],
            TopFieldSuggestions : {
                omniboxSuggestionOptions : {
                    onSelect : function(valueSelected, populateOmniBoxEventArgs){
                        populateOmniBoxEventArgs.closeOmniBox();
                        Coveo.Rest.SearchEndpoint.endpoints["default"]
                            .search({
                                q:'@=="' + valueSelected + '"',
                                cq: ohSearchBoxScope
                            })
                            .done(function(results){
                                window.location = results.results[0].clickUri;
                            })
                    }
                }

            }
        });
        $('#search').on('buildingQuery', function(e,args) {
            args.queryBuilder.advancedExpression.add(ohSearchScope)
            console.log(ohSearchScope);
        });
   });
}

function initOhStandaloneSearchBox() {
    /*$('#mySearch').coveo('noConflict');*/
    $(function () {
        Coveo.Rest.SearchEndpoint.endpoints["default"] = new Coveo.Rest.SearchEndpoint({
            restUri: ohSearchEndpoint
        });
        $('#searchBox').coveo('initSearchBox', ohSearchPage, {
            TopFieldSuggestions : {
                omniboxSuggestionOptions : {
                    onSelect : function(valueSelected, populateOmniBoxEventArgs){
                        populateOmniBoxEventArgs.closeOmniBox();
                        Coveo.Rest.SearchEndpoint.endpoints["default"]
                            .search({
                                q:'@ohdoctitle=="' + valueSelected + '"',
                                cq: ohSearchBoxScope
                            })
                            .done(function(results){
                                window.location = results.results[0].clickUri;
                            })
                    }
                }
            }
        });
    });
}

// ESC key features
/*$(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESCAPE key released
        Coveo.Ui.QuickView.prototype.close();
        *//*window.close();*//*
    }
});*/

/* function setFocusToSearchBox(){
    var el = document.getElementsByClassName("CoveoQueryBox");
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(el.childNodes[1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    *//*document.getElementsByClassName("CoveoQueryBox").focus();*//*
}*/

/* Related results  from https://developers.coveo.com/x/pgAlAQ */

/*var CoveoRelatedResults = function(element, root, options) {
    this.element = element;
    this.root = root;
    this.options = options;
    this.resultTemplate = _.template(this.options.resultTemplate);
    this.content = $('<div class="CoveoResult"></div>').appendTo($(this.element));
    this.bindEvents();
};

CoveoRelatedResults.prototype.bindEvents = function() {
    var _this = this;
    $(this.root).on(Coveo.Events.QueryEvents.doneBuildingQuery, function(e, args) {
        var expression = args.queryBuilder.expression.build();
        _this.fetchNewResults(expression, args);
    });
};

CoveoRelatedResults.prototype.fetchNewResults = function(expression, args) {
    var _this = this;
    var advancedExpression = _this.options.hiddenExpression;
    var query = {
        q:expression,
        aq:advancedExpression,
        numberOfResults:_this.options.numberOfResults
    };

    *//*Coveo.Rest.SearchEndpoint.endpoints["website"] = new Coveo.Rest.SearchEndpoint({
        restUri: "http://www.coveo.com/rest/search"
    });*//*

    Coveo.Rest.SearchEndpoint.endpoints["techdoc"] = new Coveo.Rest.SearchEndpoint({
        restUri: "https://developers.coveo.com/coveorest/search"
    });

    *//*Coveo.Rest.SearchEndpoint.endpoints["default"] = new Coveo.Rest.SearchEndpoint({
        restUri: ohSearchEndpoint
    });*//*

    Coveo.Rest.SearchEndpoint.endpoints["techdoc"].search(query).done(function(data) {
        _this.content.empty();
        _.each(data.results, function(result, index) {
            _this.content.append(_this.resultTemplate({result:result}));
        });
    });
};

function getRelatedResults() {
    $(function(){
        *//*var myTemplate = "<li><a href='<%- result.clickUri %>'><%= result.title %></a></li>";*//*
        *//*var myTemplate = "<div class='coveo-title'><a class='CoveoResultLink'><%= result.title?highlight(title,titleHighlights):clickUri%></a></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div>";*//*
        var myTemplate = "<div class='coveo-title'><a href='<%- result.clickUri %>' class='CoveoResultLink'><%= result.title%></a></div><div class='coveo-excerpt'><%= result.excerpt%></div><table class='CoveoFieldTable'><tr data-field='<%= result.source%>' data-caption='Source' /><tr data-field='<%= result.raw.language%>' data-caption='Language' /></table>";
        var myHiddenExpr = "@syssource='New Online Help'";
        var relatedDiv = $("#noResultsSuggestions");
        var mainDiv = $("#search");
        var options = {
            resultTemplate : myTemplate,
            hiddenExpression : myHiddenExpr
        };
        new CoveoRelatedResults(relatedDiv, mainDiv, options)
    })
}*/

/* Adjusting page position relative to the header*/

function adjustScrolling() {
    var headerHeight = document.getElementById("ohHeader").scrollHeight;
    var scrollOffset = (headerHeight * -1) - 23;
    var MainSectionPaddingTop = headerHeight + 13;

    var setMainSectionPaddingTop = function() {
        var headerHeight = document.getElementById("ohHeader").scrollHeight;
        var MainSectionPaddingTop = headerHeight + 13;
        if (document.getElementById("MainSection")){
            document.getElementById("MainSection").style.paddingTop = MainSectionPaddingTop +"px";
        }
        if (document.getElementById("SearchContainer")){
            document.getElementById("SearchContainer").style.paddingTop = MainSectionPaddingTop +"px";
        }

    };
    var shiftWindow = function() {
        var headerHeight = document.getElementById("ohHeader").scrollHeight;
        var scrollOffset = (headerHeight * -1) - 23;
        scrollBy(0, scrollOffset)
    };
    window.addEventListener("hashchange", shiftWindow);
    window.addEventListener('load', setMainSectionPaddingTop);
    window.addEventListener('resize', setMainSectionPaddingTop);
    function load() {
        setMainSectionPaddingTop();
        if (window.location.hash) shiftWindow();
    }
}

/* Disqus initialization */

function disqus_config() {
    this.callbacks.afterRender = [function() {
        document.getElementById("no-posts").style.visibility="hidden";
    }];
}

function initializeDisqus() {
    var disqus_shortname = 'cohcomments';
    var disqus_identifier = location.protocol + '//' + location.host + location.pathname;
    var disqus_url = disqus_identifier;
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

    /* Getting and displaying the number of comments */

    /*document.getElementById("disqus-comment-count").setAttribute("data-disqus-identifier", disqus_identifier);*/

    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
}

/* Showing breadcrumb dropdown on the left when cut by the right edge of the page
    Taken from http://codereview.stackexchange.com/questions/31501/adjust-bootstrap-dropdown-menu-based-on-page-width */

window.addEventListener('load', positionDropdownMenu);

function positionDropdownMenu() {
    $('.dropdown').hover(function() {
        var dropdownOffset = $(this).offset();
        var offsetLeft = dropdownOffset.left;
        var dropdownList = $('.dropdown:hover > ul');
        var dropdownWidth = dropdownList.width();
        var docWidth = $(window).width();
        var exceed = docWidth - offsetLeft - dropdownWidth - 3;
        var isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth);
        /*console.log('OffsetLeft= '+ offsetLeft + ' dropDownWidth= ' + dropdownWidth + ' docWidth= ' +docWidth);*/
        if (!isDropdownVisible) {
            /*dropdownList.addClass('dropdown-menu-right');*/
            dropdownList.css({"left": exceed });
        } else {
            dropdownList.css({"left": "0"});
            /*dropdownList.removeClass('dropdown-menu-right');*/
        }
    });
}

/* Creating the siblings TOC in JavaScript */
/*
function createSiblingsToc() {
    $(document).ready(function () {
        var platformRelativePath = $('meta[name=platformRelativePath]').attr("content");
        var currentTopicLink = $('meta[name=TopicRelativeLink]').attr("content");
        var currentTopicLink2 = "/" + currentTopicLink;
        var currentTopicTocId = 0;
        var currentTopicTitle = "This is my Tile";
        require(['../Data/Toc.js', '../Data/Toc_Chunk0.js'], function (toc, chunk) {
            $.each(chunk, function (keyChunkItem, valueChunkItem) {
                if (currentTopicLink2 === keyChunkItem) {
                    currentTopicTocId = valueChunkItem.i[0];
                    currentTopicTitle = valueChunkItem.t[0];
                    console.log(currentTopicTocId, currentTopicTitle);

                    */
/*nodeLink = keyChunkItem;
                     var submenu = parent.append('<li><a href="' + nodeLink + '">' + nodeText + '</a></li>').find("li:last");

                     if (typeof value.n !== "undefined") {
                     submenu = submenu.append('<ul></ul>').find("ul");
                     addNodes(submenu, value.n, value.i);
                     }*//*

                }
            });
            */
/*function addNodes(parent, n, topNode) {
             $.each(n, function (key, value) {
             var nodeText = topNode;
             var nodeLink;
             var TOCid = value.i;

             $.each(chunk, function (keyChunkItem, valueChunkItem) {
             if (value.i === valueChunkItem.i[0]) {
             nodeText = TOCid + " - " + valueChunkItem.t[0];
             nodeLink = keyChunkItem;
             var submenu = parent.append('<li><a href="' + nodeLink + '">' + nodeText + '</a></li>').find("li:last");

             if (typeof value.n !== "undefined") {
             submenu = submenu.append('<ul></ul>').find("ul");
             addNodes(submenu, value.n, value.i);
             }
             }
             });
             });
             }
             addNodes($('#JsSiblinkgs'),toc.tree.n, 'TOC');*//*

        });
        6

    });
}*/
