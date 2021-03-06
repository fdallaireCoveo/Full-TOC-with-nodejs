/*****************************************************************************
* @license Copyright (c) 2005-2014, Coveo Solutions Inc.
*****************************************************************************/
/*****************************************************************************
* NOTE:
*
* We advise against directly modifying this file. Doing so will prevent you
* from updating to later versions. Also, if you modify this file untold number
* of kittens will die.
*
*****************************************************************************/
var secretFeatureVariable1309 = false; // needed so that tsc doesn't completely eliminates this file
var Coveo;
(function (Coveo) {
    Coveo.version = {
        "lib" : "0.9.844.8",
        "product": "0.9.1080.0"
    };
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    Coveo.$ = jQuery;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var pluralRegex = /<pl>(((?!<\/pl>).)*)<\/pl>/g;
    var singularRegex = /<sn>(((?!<\/sn>).)*)<\/sn>/g;
    Coveo.L10N = {
        format: function (key) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var value = key.toLocaleString();
            if (args.length > 0) {
                var last = _.last(args);
                if (_.isNumber(last)) {
                    args.pop();
                    value = Coveo.L10N.formatPlSn(value, last);
                }
                for (var arg in args) {
                    value = value.replace("{" + arg + "}", args[arg]);
                }
            }
            return value;
        },
        formatPlSn: function (value, count) {
            if (count > 1) {
                value = value.replace(pluralRegex, '$1').replace(singularRegex, '');
            } else {
                value = value.replace(pluralRegex, '').replace(singularRegex, '$1');
            }
            return value;
        }
    };
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        Ui.l = {
            WiFi: function () {
                return Coveo.L10N.format("WiFi");
            },
            Reauthenticate: function (params0) {
                return Coveo.L10N.format("Reauthenticate", params0);
            },
            QueryDidntMatchAnyDocuments: function () {
                return Coveo.L10N.format("QueryDidntMatchAnyDocuments");
            },
            exchangedocument: function () {
                return Coveo.L10N.format("exchangedocument");
            },
            ValueDescription: function () {
                return Coveo.L10N.format("ValueDescription");
            },
            Forward: function () {
                return Coveo.L10N.format("Forward");
            },
            ShowMore: function () {
                return Coveo.L10N.format("ShowMore");
            },
            ReplyAll: function () {
                return Coveo.L10N.format("ReplyAll");
            },
            Today: function () {
                return Coveo.L10N.format("Today");
            },
            xml: function () {
                return Coveo.L10N.format("xml");
            },
            CompleteQuery: function () {
                return Coveo.L10N.format("CompleteQuery");
            },
            CELL_2G: function () {
                return Coveo.L10N.format("CELL_2G");
            },
            Exclude: function (params0) {
                return Coveo.L10N.format("Exclude", params0);
            },
            CELL_4G: function () {
                return Coveo.L10N.format("CELL_4G");
            },
            BadUserPass: function () {
                return Coveo.L10N.format("BadUserPass");
            },
            folder: function () {
                return Coveo.L10N.format("folder");
            },
            exchangemessage: function () {
                return Coveo.L10N.format("exchangemessage");
            },
            Reset: function () {
                return Coveo.L10N.format("Reset");
            },
            OpenInOutlookWhenPossible: function () {
                return Coveo.L10N.format("OpenInOutlookWhenPossible");
            },
            Last: function () {
                return Coveo.L10N.format("Last");
            },
            AlwaysOpenInNewWindow: function () {
                return Coveo.L10N.format("AlwaysOpenInNewWindow");
            },
            Of: function () {
                return Coveo.L10N.format("Of");
            },
            mov: function () {
                return Coveo.L10N.format("mov");
            },
            Value: function () {
                return Coveo.L10N.format("Value");
            },
            EnterExpressionToFilterWith: function () {
                return Coveo.L10N.format("EnterExpressionToFilterWith");
            },
            Unexclude: function (params0) {
                return Coveo.L10N.format("Unexclude", params0);
            },
            Or: function () {
                return Coveo.L10N.format("Or");
            },
            GetStarted: function () {
                return Coveo.L10N.format("GetStarted");
            },
            noResultFor: function (params0) {
                return Coveo.L10N.format("noResultFor", params0);
            },
            Less: function () {
                return Coveo.L10N.format("Less");
            },
            AreYouSureDeleteFilter: function (params0, params1) {
                return Coveo.L10N.format("AreYouSureDeleteFilter", params0, params1);
            },
            LoginInProgress: function () {
                return Coveo.L10N.format("LoginInProgress");
            },
            AlphaDescending: function () {
                return Coveo.L10N.format("AlphaDescending");
            },
            ShowingResultsOf: function (params0, params1, params2, count) {
                return Coveo.L10N.format("ShowingResultsOf", params0, params1, params2, count);
            },
            Tab: function () {
                return Coveo.L10N.format("Tab");
            },
            CannotConnect: function () {
                return Coveo.L10N.format("CannotConnect");
            },
            MostRelevantReplies: function () {
                return Coveo.L10N.format("MostRelevantReplies");
            },
            Previous: function () {
                return Coveo.L10N.format("Previous");
            },
            Retry: function () {
                return Coveo.L10N.format("Retry");
            },
            From: function () {
                return Coveo.L10N.format("From");
            },
            Preferences: function () {
                return Coveo.L10N.format("Preferences");
            },
            ShareQuery: function () {
                return Coveo.L10N.format("ShareQuery");
            },
            Create: function () {
                return Coveo.L10N.format("Create");
            },
            ClientDuration: function (params0) {
                return Coveo.L10N.format("ClientDuration", params0);
            },
            Next: function () {
                return Coveo.L10N.format("Next");
            },
            exchangecalendarmessage: function () {
                return Coveo.L10N.format("exchangecalendarmessage");
            },
            Reply: function () {
                return Coveo.L10N.format("Reply");
            },
            ComputedField: function () {
                return Coveo.L10N.format("ComputedField");
            },
            More: function () {
                return Coveo.L10N.format("More");
            },
            Username: function () {
                return Coveo.L10N.format("Username");
            },
            txt: function () {
                return Coveo.L10N.format("txt");
            },
            Collapse: function () {
                return Coveo.L10N.format("Collapse");
            },
            Seconds: function (params0, count) {
                return Coveo.L10N.format("Seconds", params0, count);
            },
            SearchIn: function (params0) {
                return Coveo.L10N.format("SearchIn", params0);
            },
            Ascending: function () {
                return Coveo.L10N.format("Ascending");
            },
            Link: function () {
                return Coveo.L10N.format("Link");
            },
            DisplayingTheOnlyMessage: function () {
                return Coveo.L10N.format("DisplayingTheOnlyMessage");
            },
            EnterTag: function () {
                return Coveo.L10N.format("EnterTag");
            },
            ShowLess: function () {
                return Coveo.L10N.format("ShowLess");
            },
            Me: function () {
                return Coveo.L10N.format("Me");
            },
            Settings: function () {
                return Coveo.L10N.format("Settings");
            },
            LinkOpeningSettings: function () {
                return Coveo.L10N.format("LinkOpeningSettings");
            },
            ShowFacet: function () {
                return Coveo.L10N.format("ShowFacet");
            },
            ShowAllReplies: function () {
                return Coveo.L10N.format("ShowAllReplies");
            },
            ProxyDuration: function (params0) {
                return Coveo.L10N.format("ProxyDuration", params0);
            },
            didYouMean: function (params0) {
                return Coveo.L10N.format("didYouMean", params0);
            },
            CustomDescription: function () {
                return Coveo.L10N.format("CustomDescription");
            },
            ChiSquare: function () {
                return Coveo.L10N.format("ChiSquare");
            },
            MostRelevantItems: function () {
                return Coveo.L10N.format("MostRelevantItems");
            },
            Authenticating: function (params0) {
                return Coveo.L10N.format("Authenticating", params0);
            },
            EthernetConnection: function () {
                return Coveo.L10N.format("EthernetConnection");
            },
            Tabs: function () {
                return Coveo.L10N.format("Tabs");
            },
            xls: function () {
                return Coveo.L10N.format("xls");
            },
            QuickView: function () {
                return Coveo.L10N.format("QuickView");
            },
            activedirperson: function () {
                return Coveo.L10N.format("activedirperson");
            },
            RelativeFrequencyDescription: function () {
                return Coveo.L10N.format("RelativeFrequencyDescription");
            },
            AndOthers: function (params0, count) {
                return Coveo.L10N.format("AndOthers", params0, count);
            },
            EnterExpressionName: function () {
                return Coveo.L10N.format("EnterExpressionName");
            },
            ClearFacetState: function () {
                return Coveo.L10N.format("ClearFacetState");
            },
            ProblemPersists: function () {
                return Coveo.L10N.format("ProblemPersists");
            },
            image: function () {
                return Coveo.L10N.format("image");
            },
            Label: function () {
                return Coveo.L10N.format("Label");
            },
            IndexDuration: function (params0) {
                return Coveo.L10N.format("IndexDuration", params0);
            },
            ErrorReport: function () {
                return Coveo.L10N.format("ErrorReport");
            },
            UnknownConnection: function () {
                return Coveo.L10N.format("UnknownConnection");
            },
            Login: function () {
                return Coveo.L10N.format("Login");
            },
            autoCorrectedQueryTo: function (params0) {
                return Coveo.L10N.format("autoCorrectedQueryTo", params0);
            },
            exchangeappointment: function () {
                return Coveo.L10N.format("exchangeappointment");
            },
            zip: function () {
                return Coveo.L10N.format("zip");
            },
            ClearAllFilters: function () {
                return Coveo.L10N.format("ClearAllFilters");
            },
            exchangenote: function () {
                return Coveo.L10N.format("exchangenote");
            },
            exchangeactivity: function () {
                return Coveo.L10N.format("exchangeactivity");
            },
            ShowAllConversation: function () {
                return Coveo.L10N.format("ShowAllConversation");
            },
            OopsError: function () {
                return Coveo.L10N.format("OopsError");
            },
            Search: function () {
                return Coveo.L10N.format("Search");
            },
            GoBack: function () {
                return Coveo.L10N.format("GoBack");
            },
            RelativeFrequency: function () {
                return Coveo.L10N.format("RelativeFrequency");
            },
            ShowCompleteThread: function () {
                return Coveo.L10N.format("ShowCompleteThread");
            },
            Nosort: function () {
                return Coveo.L10N.format("Nosort");
            },
            Expression: function () {
                return Coveo.L10N.format("Expression");
            },
            exchangeofficecom: function () {
                return Coveo.L10N.format("exchangeofficecom");
            },
            And: function () {
                return Coveo.L10N.format("And");
            },
            ppt: function () {
                return Coveo.L10N.format("ppt");
            },
            ShowOnlyTopMatchingPosts: function () {
                return Coveo.L10N.format("ShowOnlyTopMatchingPosts");
            },
            CompleteThread: function () {
                return Coveo.L10N.format("CompleteThread");
            },
            Done: function () {
                return Coveo.L10N.format("Done");
            },
            Expand: function () {
                return Coveo.L10N.format("Expand");
            },
            Close: function () {
                return Coveo.L10N.format("Close");
            },
            Open: function () {
                return Coveo.L10N.format("Open");
            },
            Tomorrow: function () {
                return Coveo.L10N.format("Tomorrow");
            },
            exchangetask: function () {
                return Coveo.L10N.format("exchangetask");
            },
            FiltersInYourPreferences: function () {
                return Coveo.L10N.format("FiltersInYourPreferences");
            },
            NoNetworkConnection: function () {
                return Coveo.L10N.format("NoNetworkConnection");
            },
            OnlineHelp: function () {
                return Coveo.L10N.format("OnlineHelp");
            },
            ScoreDescription: function () {
                return Coveo.L10N.format("ScoreDescription");
            },
            Custom: function () {
                return Coveo.L10N.format("Custom");
            },
            Score: function () {
                return Coveo.L10N.format("Score");
            },
            SaveFacetState: function () {
                return Coveo.L10N.format("SaveFacetState");
            },
            MoreInfo: function () {
                return Coveo.L10N.format("MoreInfo");
            },
            SwitchTo: function (params0) {
                return Coveo.L10N.format("SwitchTo", params0);
            },
            OccurrencesDescription: function () {
                return Coveo.L10N.format("OccurrencesDescription");
            },
            AllConversation: function () {
                return Coveo.L10N.format("AllConversation");
            },
            AlphaAscending: function () {
                return Coveo.L10N.format("AlphaAscending");
            },
            Yesterday: function () {
                return Coveo.L10N.format("Yesterday");
            },
            CELL: function () {
                return Coveo.L10N.format("CELL");
            },
            SuggestedResults: function () {
                return Coveo.L10N.format("SuggestedResults");
            },
            html: function () {
                return Coveo.L10N.format("html");
            },
            Descending: function () {
                return Coveo.L10N.format("Descending");
            },
            Password: function () {
                return Coveo.L10N.format("Password");
            },
            ShowOnlyMostRelevantReplies: function () {
                return Coveo.L10N.format("ShowOnlyMostRelevantReplies");
            },
            Clear: function (params0) {
                return Coveo.L10N.format("Clear", params0);
            },
            ResultsFilteringExpression: function () {
                return Coveo.L10N.format("ResultsFilteringExpression");
            },
            SkipLogin: function () {
                return Coveo.L10N.format("SkipLogin");
            },
            Remove: function () {
                return Coveo.L10N.format("Remove");
            },
            Caption: function () {
                return Coveo.L10N.format("Caption");
            },
            SelectTab: function () {
                return Coveo.L10N.format("SelectTab");
            },
            SuggestedQueries: function () {
                return Coveo.L10N.format("SuggestedQueries");
            },
            MostRelevantPosts: function () {
                return Coveo.L10N.format("MostRelevantPosts");
            },
            pdf: function () {
                return Coveo.L10N.format("pdf");
            },
            HideFacet: function () {
                return Coveo.L10N.format("HideFacet");
            },
            Unavailable: function () {
                return Coveo.L10N.format("Unavailable");
            },
            PleaseEnterYourCredentials: function (params0) {
                return Coveo.L10N.format("PleaseEnterYourCredentials", params0);
            },
            SearchFor: function (params0) {
                return Coveo.L10N.format("SearchFor", params0);
            },
            doc: function () {
                return Coveo.L10N.format("doc");
            },
            CELL_3G: function () {
                return Coveo.L10N.format("CELL_3G");
            },
            AllItems: function () {
                return Coveo.L10N.format("AllItems");
            },
            LabelDescription: function () {
                return Coveo.L10N.format("LabelDescription");
            },
            Occurrences: function () {
                return Coveo.L10N.format("Occurrences");
            },
            exchangeperson: function () {
                return Coveo.L10N.format("exchangeperson");
            },
            Duration: function (params0) {
                return Coveo.L10N.format("Duration", params0);
            }
        };
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
String["toLocaleString"].call(this, { "en": {
        "WiFi": "WiFi connection",
        "Reauthenticate": "Reauthenticate {0}",
        "QueryDidntMatchAnyDocuments": "Your query did not match any documents.",
        "exchangedocument": "Exchange document",
        "ValueDescription": "Sort on the values of the first computed field",
        "Forward": "Forward",
        "ShowMore": "Show more",
        "ReplyAll": "Reply All",
        "Today": "Today",
        "xml": "XML File",
        "CompleteQuery": "Complete Query",
        "CELL_2G": "Cellular 2G connection",
        "Exclude": "Exclude {0}",
        "CELL_4G": "Cellular 4G connection",
        "BadUserPass": "Password does not match with user name.",
        "folder": "Folder",
        "exchangemessage": "Message",
        "Reset": "Reset",
        "OpenInOutlookWhenPossible": "Open in Outlook (when possible)",
        "Last": "Last",
        "AlwaysOpenInNewWindow": "Always open results in new window",
        "Of": "of",
        "mov": "QuickTime File",
        "Value": "Value",
        "EnterExpressionToFilterWith": "Enter Expression To Filter Results With",
        "Unexclude": "Unexclude {0}",
        "Or": "OR",
        "GetStarted": "Get Started",
        "noResultFor": "No results for {0}",
        "Less": "Fewer",
        "AreYouSureDeleteFilter": "Are you sure you want to delete the filter {0} with the expression {1}",
        "LoginInProgress": "Login in progress, please wait ...",
        "AlphaDescending": "Value Descending",
        "ShowingResultsOf": "Result<pl>s</pl> {0}<pl>-{1} </pl>of {2}",
        "Tab": "Tab",
        "CannotConnect": "Cannot connect to the server address.",
        "MostRelevantReplies": "Most Relevant Replies:",
        "Previous": "Previous",
        "Retry": "Retry",
        "From": "From",
        "Preferences": "Preferences",
        "ShareQuery": "Share Query",
        "Create": "Create",
        "ClientDuration": "Client Duration: {0}",
        "Next": "Next",
        "exchangecalendarmessage": "Calendar message",
        "Reply": "Reply",
        "ComputedField": "Computed Field",
        "More": "More",
        "Username": "Username",
        "txt": "Text",
        "Collapse": "Collapse",
        "Seconds": "in {0} second<pl>s</pl>",
        "SearchIn": "Search in {0}",
        "Ascending": "Ascending",
        "Link": "Link",
        "DisplayingTheOnlyMessage": "Displaying the only message in this conversation",
        "EnterTag": "Add Tag",
        "ShowLess": "Show less",
        "Me": "Me",
        "Settings": "Settings",
        "LinkOpeningSettings": "Link Opening Settings",
        "ShowFacet": "Show Facet",
        "ShowAllReplies": "Show All Replies",
        "ProxyDuration": "Proxy Duration: {0}",
        "didYouMean": "Did you mean: {0}",
        "CustomDescription": "Sort based on a custom order",
        "ChiSquare": "Chi Square",
        "MostRelevantItems": "Most relevant items:",
        "Authenticating": "Authenticating {0}...",
        "EthernetConnection": "Ethernet connection",
        "Tabs": "Tabs",
        "xls": "Excel Document",
        "QuickView": "Quick View",
        "activedirperson": "Active Directory user",
        "RelativeFrequencyDescription": "Sort based on the relative frequency of values. Less common values will appear higher",
        "AndOthers": "and {0} other<pl>s</pl>",
        "EnterExpressionName": "Enter Expression Name",
        "ClearFacetState": "Clear facet state",
        "ProblemPersists": "If the problem persists contact the administrator.",
        "image": "Image",
        "Label": "Label",
        "IndexDuration": "Index Duration: {0}",
        "ErrorReport": "Error Report",
        "UnknownConnection": "Unknown connection",
        "Login": "Log In",
        "autoCorrectedQueryTo": "Query was automatically corrected to {0}",
        "exchangeappointment": "Appointment",
        "zip": "Zip File",
        "ClearAllFilters": "Clear All Filters",
        "exchangenote": "Note",
        "exchangeactivity": "Activity",
        "ShowAllConversation": "Show All Conversation",
        "OopsError": "Oops! Something went wrong on the server.",
        "Search": "Search",
        "GoBack": "Go Back",
        "RelativeFrequency": "Relative Frequency",
        "ShowCompleteThread": "Show Complete Thread",
        "Nosort": "No Sort",
        "Expression": "Expression",
        "exchangeofficecom": "Communications",
        "And": "AND",
        "ppt": "PowerPoint Document",
        "ShowOnlyTopMatchingPosts": "Show Only Top Matching Posts",
        "CompleteThread": "Complete Thread:",
        "Done": "Done",
        "Expand": "Expand",
        "Close": "Close",
        "Open": "Open",
        "Tomorrow": "Tomorrow",
        "exchangetask": "Task",
        "FiltersInYourPreferences": "Filters in your preferences",
        "NoNetworkConnection": "No network connection",
        "OnlineHelp": "Online Help",
        "ScoreDescription": "The score is computed from the number of occurrences as well as from the position in the result set.",
        "Custom": "Custom",
        "Score": "Score",
        "SaveFacetState": "Save this facet state",
        "MoreInfo": "More Information",
        "SwitchTo": "Switch to {0}",
        "OccurrencesDescription": "Sort by number of occurrences, with values having the highest number appearing first.",
        "AllConversation": "All Conversation:",
        "AlphaAscending": "Value Ascending",
        "Yesterday": "Yesterday",
        "CELL": "Cellular connection",
        "SuggestedResults": "Suggested Results",
        "html": "HTML File",
        "Descending": "Descending",
        "Password": "Password",
        "ShowOnlyMostRelevantReplies": "Show Only Most Relevant Replies",
        "Clear": "Clear {0}",
        "ResultsFilteringExpression": "Results Filtering Expressions",
        "SkipLogin": "Skip login",
        "Remove": "Remove",
        "Caption": "Caption",
        "SelectTab": "Select Tab",
        "SuggestedQueries": "Suggested Queries",
        "MostRelevantPosts": "Most Relevant Posts:",
        "pdf": "PDF File",
        "HideFacet": "Hide Facet",
        "Unavailable": "Unavailable",
        "PleaseEnterYourCredentials": "Please enter your credentials for {0}.",
        "SearchFor": "Search for {0}",
        "doc": "Word Document",
        "CELL_3G": "Cellular 3G connection",
        "AllItems": "All items:",
        "LabelDescription": "Sort alphabetically on the field values.",
        "Occurrences": "Occurrences",
        "exchangeperson": "Exchange user",
        "Duration": "Duration: {0}"
    } });
String["locale"] = "en";

String["defaultLocale"] = "en";

/*
* Globalize Culture en-US
*
* http://github.com/jquery/globalize
*
* Copyright Software Freedom Conservancy, Inc.
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* This file was generated by the Globalize Culture Generator
* Translation: bugs found in this file need to be fixed in the generator
*/
var Globalize = window["Globalize"];

Globalize.addCultureInfo("en-US", "default", {
    name: "en-US",
    englishName: "English (United States)"
});
Globalize.culture("en");
var Coveo;
(function (Coveo) {
    var Logger = (function () {
        function Logger(owner) {
            this.owner = owner;
        }
        Logger.prototype.trace = function () {
            var stuff = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                stuff[_i] = arguments[_i + 0];
            }
            if (Logger.level <= Logger.TRACE) {
                this.log('TRACE', stuff);
            }
        };

        Logger.prototype.debug = function () {
            var stuff = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                stuff[_i] = arguments[_i + 0];
            }
            if (Logger.level <= Logger.DEBUG) {
                this.log('DEBUG', stuff);
            }
        };

        Logger.prototype.info = function () {
            var stuff = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                stuff[_i] = arguments[_i + 0];
            }
            if (Logger.level <= Logger.INFO) {
                this.log('INFO', stuff);
            }
        };

        Logger.prototype.warn = function () {
            var stuff = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                stuff[_i] = arguments[_i + 0];
            }
            if (Logger.level <= Logger.WARN) {
                this.log('WARN', stuff);
            }
        };

        Logger.prototype.error = function () {
            var stuff = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                stuff[_i] = arguments[_i + 0];
            }
            if (Logger.level <= Logger.ERROR) {
                this.log('ERROR', stuff);
            }
        };

        Logger.prototype.log = function (level, stuff) {
            if (window['console'] && console.log) {
                console.log([level, this.owner].concat(stuff));
                if (Logger.executionTime) {
                    console.timeEnd("Execution time");
                    console.time("Execution time");
                }
            }
        };

        Logger.enable = function () {
            Logger.level = Logger.TRACE;
        };

        Logger.disable = function () {
            Logger.level = Logger.NOTHING;
        };
        Logger.TRACE = 1;
        Logger.DEBUG = 2;
        Logger.INFO = 3;
        Logger.WARN = 4;
        Logger.ERROR = 5;
        Logger.NOTHING = 6;

        Logger.level = Logger.INFO;
        Logger.executionTime = false;
        return Logger;
    })();
    Coveo.Logger = Logger;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Options = (function () {
        function Options() {
        }
        Options.prototype.merge = function (provided) {
            return Coveo.$.extend({}, this, provided);
        };

        Options.prototype.mergeDeep = function (provided) {
            return Coveo.$.extend(true, {}, Coveo.Utils.mergeDeep(this, provided));
        };
        return Options;
    })();
    Coveo.Options = Options;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.isUndefined = function (obj) {
            return typeof obj == 'undefined';
        };

        Utils.isNull = function (obj) {
            return obj === null;
        };

        Utils.isNullOrUndefined = function (obj) {
            return Utils.isUndefined(obj) || Utils.isNull(obj);
        };

        Utils.exists = function (obj) {
            return !Utils.isNullOrUndefined(obj);
        };

        Utils.isString = function (obj) {
            return typeof obj == 'string' || (typeof obj == 'object' && obj instanceof String);
        };

        Utils.toNotNullString = function (str) {
            return Utils.isString(str) ? str : "";
        };

        Utils.anyTypeToString = function (value) {
            return value ? value.toString() : '';
        };

        Utils.isNullOrEmptyString = function (str) {
            return Utils.isNullOrUndefined(str) || !Utils.isNonEmptyString(str);
        };

        Utils.isNonEmptyString = function (str) {
            return Utils.isString(str) && str !== '';
        };

        Utils.stringStartsWith = function (str, startWith) {
            return str.slice(0, startWith.length) == startWith;
        };

        Utils.isNumber = function (obj) {
            return typeof obj == 'number';
        };

        Utils.isBoolean = function (obj) {
            return typeof obj == 'boolean';
        };

        Utils.isDate = function (obj) {
            return obj instanceof Date;
        };

        Utils.isObject = function (obj) {
            return _.isObject(obj);
        };

        Utils.isObjectType = function (obj, type) {
            return obj instanceof type;
        };

        Utils.isArray = function (obj) {
            return obj instanceof Array;
        };

        Utils.isNonEmptyArray = function (obj) {
            return Utils.isArray(obj) && obj.length > 0;
        };

        Utils.isEmptyArray = function (obj) {
            return !Utils.isNonEmptyArray(obj);
        };

        Utils.isHtmlElement = function (obj) {
            if (window["HTMLElement"] != undefined) {
                return obj instanceof HTMLElement;
            } else {
                return obj && obj.nodeType && obj.nodeType == 1;
            }
        };

        Utils.mergeDeep = function (target, src) {
            var isArray = _.isArray(src);
            var toReturn = isArray && [] || {};

            if (isArray) {
                target = target || [];
                toReturn = toReturn["concat"](target);
                _.each(src, function (e, i, obj) {
                    if (typeof target[i] === 'undefined') {
                        toReturn[i] = e;
                    } else if (typeof e === 'object') {
                        toReturn[i] = Utils.mergeDeep(target[i], e);
                    } else {
                        if (target.indexOf(e) === -1) {
                            toReturn["push"](e);
                        }
                    }
                });
            } else {
                if (target && typeof target === 'object') {
                    _.each(_.keys(target), function (key) {
                        toReturn[key] = target[key];
                    });
                }
                _.each(_.keys(src), function (key) {
                    if (typeof src[key] !== 'object' || !src[key]) {
                        toReturn[key] = src[key];
                    } else {
                        if (!target[key]) {
                            toReturn[key] = src[key];
                        } else {
                            toReturn[key] = Utils.mergeDeep(target[key], src[key]);
                        }
                    }
                });
            }

            return toReturn;
        };

        Utils.parseIntIfNotUndefined = function (str) {
            if (Utils.isNonEmptyString(str)) {
                return parseInt(str, 10);
            } else {
                return undefined;
            }
        };

        Utils.parseFloatIfNotUndefined = function (str) {
            if (Utils.isNonEmptyString(str)) {
                return parseFloat(str);
            } else {
                return undefined;
            }
        };

        Utils.round = function (num, decimals) {
            return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
        };

        Utils.parseBooleanIfNotUndefined = function (str) {
            if (Utils.isNonEmptyString(str)) {
                switch (str.toLowerCase()) {
                    case 'true':
                    case '1':
                    case 'yes':
                        return true;
                    case 'false':
                    case '0':
                    case 'no':
                        return false;
                    default:
                        return undefined;
                }
            } else {
                return undefined;
            }
        };

        Utils.trim = function (value) {
            if (value == null) {
                return null;
            }
            return value.replace(/^\s+|\s+$/g, '');
        };

        Utils.map = function (values, callback) {
            if (values == null) {
                return null;
            }
            var results = [];
            for (var i = 0; i < values.length; i++) {
                results.push(callback(values[i]));
            }
            return results;
        };

        Utils.filter = function (values, callback) {
            if (values == null) {
                return null;
            }
            var results = [];
            for (var i = 0; i < values.length; i++) {
                if (callback(values[i], i)) {
                    results.push(values[i]);
                }
            }
            return results;
        };

        Utils.arrayEqual = function (array1, array2, sameOrder) {
            if (typeof sameOrder === "undefined") { sameOrder = true; }
            if (sameOrder) {
                return _.isEqual(array1, array2);
            } else {
                var arrays = [array1, array2];
                return _.all(arrays, function (array) {
                    return array.length == arrays[0].length && _.difference(array, arrays[0]).length == 0;
                });
            }
        };

        Utils.objectEqual = function (obj1, obj2) {
            return _.isEqual(obj1, obj2);
        };

        Utils.isCoveoField = function (field) {
            return /^@[a-zA-Z0-9]+$/.test(field);
        };

        Utils.getCoveoFieldKey = function (field) {
            var g = field.match(/^@([a-zA-Z0-9]+)$/);
            Coveo.Assert.check(g != null, field + ' is not a vaild field');
            return g[1].toLowerCase();
        };

        Utils.escapeRegexCharacter = function (str) {
            var ret = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            return ret;
        };

        Utils.throttle = function (func, wait, options, context, args) {
            if (typeof options === "undefined") { options = {}; }
            var result;
            var timeout = null;
            var previous = 0;
            var later = function () {
                previous = options.leading === false ? 0 : new Date().getTime();
                timeout = null;
                result = func.apply(context, args);
            };
            return function () {
                var now = new Date().getTime();
                if (!previous && options.leading === false)
                    previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        };
        return Utils;
    })();
    Coveo.Utils = Utils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Defer = (function () {
        function Defer() {
        }
        Defer.defer = function (code) {
            Defer.functions.push(code);
            Defer.arm();
        };

        Defer.flush = function () {
            while (Defer.popOne()) {
            }
        };

        Defer.arm = function () {
            _.defer(function () {
                if (Defer.popOne())
                    Defer.arm();
            });
        };

        Defer.popOne = function () {
            if (Defer.functions.length > 0) {
                var fun = Defer.functions[0];
                Defer.functions = _.rest(Defer.functions);
                fun();
                return Defer.functions.length > 0;
            } else {
                return false;
            }
        };
        Defer.functions = [];
        return Defer;
    })();
    Coveo.Defer = Defer;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Assert = (function () {
        function Assert() {
        }
        Assert.fail = function (message) {
            Assert.failureHandler(message);
        };

        Assert.check = function (condition, message) {
            if (!condition) {
                Assert.fail(message);
            }
        };

        Assert.isUndefined = function (obj) {
            Assert.check(Coveo.Utils.isUndefined(obj), 'Value should be undefined.');
        };

        Assert.isNotUndefined = function (obj) {
            Assert.check(!Coveo.Utils.isUndefined(obj), 'Value should not be undefined.');
        };

        Assert.isNull = function (obj) {
            Assert.check(Coveo.Utils.isNull(obj), 'Value should be null.');
        };

        Assert.isNotNull = function (obj) {
            Assert.check(!Coveo.Utils.isNull(obj), 'Value should not be null.');
        };

        Assert.exists = function (obj) {
            Assert.check(!Coveo.Utils.isNullOrUndefined(obj), 'Value should not be null or undefined');
        };

        Assert.doesNotExists = function (obj) {
            Assert.check(Coveo.Utils.isNullOrUndefined(obj), 'Value should be null or undefined');
        };

        Assert.isString = function (obj) {
            Assert.check(Coveo.Utils.isString(obj), 'Value should be a string.');
        };

        Assert.stringStartsWith = function (str, start) {
            Assert.isNonEmptyString(str);
            Assert.isNonEmptyString(start);
            Assert.check(str.indexOf(start) == 0, 'Value should start with ' + start);
        };

        Assert.isNonEmptyString = function (str) {
            Assert.check(Coveo.Utils.isNonEmptyString(str), 'Value should be a non-empty string.');
        };

        Assert.isNumber = function (obj) {
            Assert.check(Coveo.Utils.isNumber(obj), 'Value should be a number.');
        };

        Assert.isLargerThan = function (expected, actual) {
            Assert.check(actual > expected, 'Value ' + actual + ' should be larger than ' + expected);
        };

        Assert.isLargerOrEqualsThan = function (expected, actual) {
            Assert.check(actual >= expected, 'Value ' + actual + ' should be larger or equal than ' + expected);
        };

        Assert.isSmallerThan = function (expected, actual) {
            Assert.check(actual < expected, 'Value ' + actual + ' should be smaller than ' + expected);
        };

        Assert.isSmallerOrEqualsThan = function (expected, actual) {
            Assert.check(actual <= expected, 'Value ' + actual + ' should be smaller or equal than ' + expected);
        };
        Assert.logger = new Coveo.Logger('Assert');

        Assert.failureHandler = function (message) {
            Assert.logger.error('Assertion Failed!', message);

            if (console.trace != undefined) {
                console.trace();
            }

            if (Coveo.Utils.isNonEmptyString(message)) {
                throw new PreconditionFailedException(message);
            } else {
                throw new PreconditionFailedException('Assertion Failed!');
            }
        };
        return Assert;
    })();
    Coveo.Assert = Assert;

    var PreconditionFailedException = (function () {
        function PreconditionFailedException(message) {
            this.message = message;
        }
        return PreconditionFailedException;
    })();
    Coveo.PreconditionFailedException = PreconditionFailedException;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var TimeSpan = (function () {
        function TimeSpan(milliseconds) {
            this.milliseconds = milliseconds;
        }
        TimeSpan.prototype.getMilliseconds = function () {
            return this.milliseconds;
        };

        TimeSpan.prototype.getSeconds = function () {
            return this.getMilliseconds() / 1000;
        };

        TimeSpan.prototype.getMinutes = function () {
            return this.getSeconds() / 60;
        };

        TimeSpan.prototype.getHours = function () {
            return this.getMinutes() / 60;
        };

        TimeSpan.prototype.getDays = function () {
            return this.getHours() / 24;
        };

        TimeSpan.prototype.getWeeks = function () {
            return this.getDays() / 7;
        };

        TimeSpan.fromDates = function (from, to) {
            Coveo.Assert.exists(from);
            Coveo.Assert.exists(to);

            return new TimeSpan(to.valueOf() - from.valueOf());
        };
        return TimeSpan;
    })();
    Coveo.TimeSpan = TimeSpan;
})(Coveo || (Coveo = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Coveo;
(function (Coveo) {
    var DefaultDateToStringOptions = (function (_super) {
        __extends(DefaultDateToStringOptions, _super);
        function DefaultDateToStringOptions() {
            _super.apply(this, arguments);
            this.now = new Date();
            this.useTodayYesterdayAndTomorrow = true;
            this.useWeekdayIfThisWeek = true;
            this.omitYearIfCurrentOne = true;
            this.useLongDateFormat = false;
            this.includeTimeIfToday = true;
            this.includeTimeIfThisWeek = true;
            this.alwaysIncludeTime = false;
            this.predefinedFormat = undefined;
        }
        return DefaultDateToStringOptions;
    })(Coveo.Options);

    var DateUtils = (function () {
        function DateUtils() {
        }
        DateUtils.convertFromJsonDateIfNeeded = function (date) {
            if (Coveo.Utils.isDate(date)) {
                return date;
            } else if (Coveo.Utils.isNumber(date)) {
                return new Date(date);
            } else if (Coveo.Utils.isString(date)) {
                return new Date(date.replace("@", " "));
            } else {
                return undefined;
            }
        };

        DateUtils.keepOnlyDatePart = function (date) {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };

        DateUtils.offsetDateByDays = function (date, offset) {
            var newDate = new Date(date.valueOf());
            newDate.setDate(newDate.getDate() + offset);

            return newDate;
        };

        DateUtils.dateToString = function (date, options) {
            if (Coveo.Utils.isNullOrUndefined(date)) {
                return '';
            }

            options = new DefaultDateToStringOptions().merge(options);

            if (Coveo.Utils.isNullOrUndefined(date)) {
                return '';
            }

            var date = DateUtils.keepOnlyDatePart(date);
            var today = DateUtils.keepOnlyDatePart(options.now);
            var tomorrow = DateUtils.offsetDateByDays(today, 1);
            var yesterday = DateUtils.offsetDateByDays(today, -1);
            var isThisWeek = Math.abs(Coveo.TimeSpan.fromDates(date, today).getDays()) < 7;

            if (options.predefinedFormat) {
                return Globalize.format(date, options.predefinedFormat);
            } else if (options.useTodayYesterdayAndTomorrow && date.valueOf() == today.valueOf()) {
                return Coveo.Ui.l.Today();
            } else if (options.useTodayYesterdayAndTomorrow && date.valueOf() == yesterday.valueOf()) {
                return Coveo.Ui.l.Yesterday();
            } else if (options.useTodayYesterdayAndTomorrow && date.valueOf() == tomorrow.valueOf()) {
                return Coveo.Ui.l.Tomorrow();
            } else if (options.useWeekdayIfThisWeek && isThisWeek) {
                if (date.valueOf() > today.valueOf()) {
                    return Coveo.Ui.l.Next() + ' ' + Globalize.format(date, 'dddd');
                } else {
                    return Coveo.Ui.l.Last() + ' ' + Globalize.format(date, 'dddd');
                }
            } else if (options.omitYearIfCurrentOne && date.getFullYear() === today.getFullYear()) {
                return Globalize.format(date, 'M');
            } else if (options.useLongDateFormat) {
                return Globalize.format(date, 'D');
            } else {
                return Globalize.format(date, 'd');
            }
        };

        DateUtils.timeToString = function (date, options) {
            if (Coveo.Utils.isNullOrUndefined(date)) {
                return '';
            }

            return Globalize.format(date, 't');
        };

        DateUtils.dateTimeToString = function (date, options) {
            if (Coveo.Utils.isNullOrUndefined(date)) {
                return '';
            }

            options = new DefaultDateToStringOptions().merge(options);

            var today = Coveo.DateUtils.keepOnlyDatePart(options.now);
            var isThisWeek = Math.abs(Coveo.TimeSpan.fromDates(date, today).getDays()) < 7;
            var datePart = Coveo.DateUtils.dateToString(date, options);
            var dateWithoutTime = Coveo.DateUtils.keepOnlyDatePart(date);

            if (options.alwaysIncludeTime || (options.includeTimeIfThisWeek && isThisWeek) || (options.includeTimeIfToday && dateWithoutTime.valueOf() == today.valueOf())) {
                return datePart + ', ' + Coveo.DateUtils.timeToString(date);
            } else {
                return datePart;
            }
        };
        return DateUtils;
    })();
    Coveo.DateUtils = DateUtils;
})(Coveo || (Coveo = {}));

//Shim for IE8 Date.toISOString
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
if (!Date.prototype.toISOString) {
    (function () {
        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toISOString = function () {
            return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate()) + 'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
        };
    }());
}
var Coveo;
(function (Coveo) {
    var DefaultCurrencyToStringOptions = (function (_super) {
        __extends(DefaultCurrencyToStringOptions, _super);
        function DefaultCurrencyToStringOptions() {
            _super.apply(this, arguments);
            this.decimals = 0;
        }
        return DefaultCurrencyToStringOptions;
    })(Coveo.Options);

    var CurrencyUtils = (function () {
        function CurrencyUtils() {
        }
        CurrencyUtils.currencyToString = function (value, options) {
            if (Coveo.Utils.isNullOrUndefined(value)) {
                return '';
            }

            Coveo.Assert.isNumber(value);

            options = new DefaultCurrencyToStringOptions().merge(options);

            var currency = Globalize.culture().numberFormat.currency;
            var backup = currency.symbol;

            if (Coveo.Utils.isNonEmptyString(options.symbol)) {
                currency.symbol = options.symbol;
            }

            var str = Globalize.format(value, 'c' + options.decimals.toString());
            currency.symbol = backup;

            return str;
        };
        return CurrencyUtils;
    })();
    Coveo.CurrencyUtils = CurrencyUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var EmailUtils = (function () {
        function EmailUtils() {
        }
        EmailUtils.splitSemicolonSeparatedListOfEmailAddresses = function (addresses) {
            var addressesAsList = addresses.split(/\s*;\s*/);
            return _.filter(addressesAsList, function (s) {
                return Coveo.Utils.exists(s) && Coveo.Utils.isNonEmptyString(Coveo.Utils.trim(s));
            });
        };

        EmailUtils.emailAddressesToHyperlinks = function (addresses, companyDomain, me, lengthLimit, truncateName) {
            if (typeof lengthLimit === "undefined") { lengthLimit = 2; }
            if (typeof truncateName === "undefined") { truncateName = false; }
            addresses = _.filter(addresses, function (s) {
                return Coveo.Utils.exists(s) && Coveo.Utils.isNonEmptyString(Coveo.Utils.trim(s));
            });
            var hyperlinks = _.map(addresses, function (item) {
                var emailArray = EmailUtils.parseEmail(item);
                var email = emailArray[1];
                var name = emailArray[0];
                if (Coveo.Utils.exists(me) && email == me) {
                    name = Coveo.Ui.l.Me();
                }
                if (truncateName) {
                    var split = name.split(" ");
                    if (!Coveo.Utils.isNullOrUndefined(split[1])) {
                        name = split[0] + " " + split[1].substring(0, 1) + ".";
                    }
                }
                var domainIndex = email.indexOf('@') >= 0 ? email.indexOf('@') + 1 : 0;
                var domain = email.substr(domainIndex);
                if (Coveo.Utils.exists(companyDomain) && domain != companyDomain) {
                    name += ' (' + domain + ')';
                }

                return '<a title="' + item + '" href="mailto:' + email + '">' + name + '</a>';
            });
            var excess = hyperlinks.length - lengthLimit;
            var andOthers = excess > 0 ? EmailUtils.buildEmailAddressesAndOthers(_.last(hyperlinks, excess)) : "";
            return _.first(hyperlinks, lengthLimit).join(", ") + andOthers;
        };

        EmailUtils.buildEmailAddressesAndOthers = function (excessHyperLinks) {
            return "<span class='coveo-emails-excess-collapsed coveo-active' onclick='Coveo.Ui.TemplateHelpers.getHelper(\"excessEmailToggle\")(this);'> " + Coveo.Ui.l.AndOthers(excessHyperLinks.length.toString(), excessHyperLinks.length) + "</span>" + "<span class='coveo-emails-excess-expanded'> , " + excessHyperLinks.join(" , ") + "</span>";
        };

        EmailUtils.parseEmail = function (email) {
            var email, name;
            var match = email.match(/^\s*(.*)\s+<(.*)>$/);
            if (match != null) {
                name = match[1];
                if (/^".*"|'.*'$/.test(name)) {
                    name = name.substr(1, name.length - 2);
                }
                email = match[2];
            } else {
                name = email;
                email = email;
            }
            return [name, email];
        };
        return EmailUtils;
    })();
    Coveo.EmailUtils = EmailUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var HashUtils = (function () {
        function HashUtils() {
        }
        HashUtils.getHash = function (w) {
            if (typeof w === "undefined") { w = window; }
            Coveo.Assert.exists(w);

            // window.location.hash returns the DECODED hash on Firefox (it's a well known bug),
            // so any & in values will be already unescaped. This breaks our value splitting.
            // The following trick works on all browsers.
            var ret = "#" + (w.location.href.split("#")[1] || "");
            return HashUtils.getAjaxcrawlableHash(ret);
        };

        HashUtils.getValue = function (value, toParse) {
            Coveo.Assert.isNonEmptyString(value);
            Coveo.Assert.exists(toParse);
            toParse = HashUtils.getAjaxcrawlableHash(toParse);
            var paramValue = HashUtils.getRawValue(value, toParse);
            if (paramValue != undefined) {
                paramValue = HashUtils.getValueDependingOnType(paramValue);
            }
            return paramValue;
        };

        HashUtils.encodeValues = function (values) {
            var hash = [];
            _.each(values, function (valueToEncode, key, obj) {
                var encodedValue = "";
                if (Coveo.Utils.isNonEmptyArray(valueToEncode)) {
                    encodedValue = HashUtils.encodeArray(valueToEncode);
                } else if (Coveo.Utils.isObject(valueToEncode) && Coveo.Utils.isNonEmptyArray(_.keys(valueToEncode))) {
                    encodedValue = HashUtils.encodeObject(valueToEncode);
                } else {
                    encodedValue = encodeURIComponent(valueToEncode.toString());
                }
                if (encodedValue != "") {
                    hash.push(key + "=" + encodedValue);
                }
            });

            return hash.join('&');
        };

        HashUtils.getAjaxcrawlableHash = function (hash) {
            if (hash[1] != undefined && hash[1] == "!") {
                return hash.substring(0, 1) + hash.substring(2);
            } else {
                return hash;
            }
        };

        HashUtils.getRawValue = function (value, toParse) {
            Coveo.Assert.exists(value);
            Coveo.Assert.exists(toParse);
            Coveo.Assert.check(toParse.indexOf('#') == 0 || toParse == '');

            var toParseArray = toParse.substr(1).split("&");
            var paramPos = 0;
            var loop = true;
            var paramValue = undefined;
            while (loop) {
                var paramValuePair = toParseArray[paramPos].split("=");
                if (paramValuePair[0] == value) {
                    loop = false;
                    paramValue = paramValuePair[1];
                } else {
                    paramPos++;
                    if (paramPos >= toParseArray.length) {
                        paramPos = undefined;
                        loop = false;
                    }
                }
            }
            return paramValue;
        };

        HashUtils.getValueDependingOnType = function (paramValue) {
            var type = HashUtils.getValueType(paramValue);
            var returnValue;
            if (type == "object") {
                returnValue = HashUtils.decodeObject(paramValue);
            } else if (type == "array") {
                returnValue = HashUtils.decodeArray(paramValue);
            } else {
                returnValue = decodeURIComponent(paramValue);
            }
            return returnValue;
        };

        HashUtils.getValueType = function (paramValue) {
            if (paramValue.substr(0, 1) == HashUtils.Delimiter.objectStart && paramValue.substr(paramValue.length - 1) == HashUtils.Delimiter.objectEnd) {
                return "object";
            } else if (paramValue.substr(0, 1) == HashUtils.Delimiter.arrayStart && paramValue.substr(paramValue.length - 1) == HashUtils.Delimiter.arrayEnd) {
                return "array";
            } else {
                return "other";
            }
        };

        HashUtils.encodeArray = function (array) {
            var arrayReturn = [];
            _.each(array, function (value) {
                arrayReturn.push(encodeURIComponent(value));
            });
            return HashUtils.Delimiter.arrayStart + arrayReturn.join(",") + HashUtils.Delimiter.arrayEnd;
        };

        HashUtils.encodeObject = function (obj) {
            var ret = HashUtils.Delimiter.objectStart;
            var retArray = [];
            _.each(obj, function (val, key, obj) {
                var retValue = "";
                retValue += "\"" + encodeURIComponent(key) + "\"" + " : ";
                if (Coveo.Utils.isArray(val)) {
                    retValue += HashUtils.encodeArray(val);
                } else if (Coveo.Utils.isObject(val)) {
                    retValue += HashUtils.encodeObject(val);
                } else {
                    if (Coveo.Utils.isNumber(val) || Coveo.Utils.isBoolean(val)) {
                        retValue += encodeURIComponent(val);
                    } else {
                        retValue += "\"" + encodeURIComponent(val) + "\"";
                    }
                }
                retArray.push(retValue);
            });
            ret += retArray.join(" , ");
            return ret + HashUtils.Delimiter.objectEnd;
        };

        HashUtils.decodeObject = function (obj) {
            return JSON.parse(decodeURIComponent(obj));
        };

        HashUtils.decodeArray = function (value) {
            value = value.substr(1);
            value = value.substr(0, value.length - 1);
            var array = value.split(",");

            for (var i = 0; i < array.length; i++) {
                var arrayValue = decodeURIComponent(array[i]);
                var testIfNumber = arrayValue[0] == "0" && arrayValue.length > 1 ? NaN : Number(arrayValue);
                var testIfboolean = Coveo.Utils.parseBooleanIfNotUndefined(arrayValue);
                array[i] = arrayValue;
                if (!isNaN(testIfNumber)) {
                    array[i] = testIfNumber;
                } else if (testIfboolean != undefined) {
                    array[i] = testIfboolean;
                }
            }
            return array;
        };
        HashUtils.Delimiter = {
            "objectStart": "{",
            "objectEnd": "}",
            "arrayStart": "[",
            "arrayEnd": "]",
            "objectStartRegExp": "^{",
            "objectEndRegExp": "}+$",
            "arrayStartRegExp": "^[",
            "arrayEndRegExp": "]+$"
        };
        return HashUtils;
    })();
    Coveo.HashUtils = HashUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Hole = (function () {
        function Hole(begin, size, replacementSize) {
            this.begin = begin;
            this.size = size;
            this.replacementSize = replacementSize;
        }
        return Hole;
    })();
    Coveo.Hole = Hole;

    var StringAndHoles = (function () {
        function StringAndHoles() {
        }
        StringAndHoles.replace = function (str, find, replace) {
            var strAndHoles = new StringAndHoles();

            if (Coveo.Utils.isNullOrEmptyString(str)) {
                return strAndHoles;
            }

            var index = str.lastIndexOf(find);
            if (index == -1) {
                strAndHoles.value = str;
                return strAndHoles;
            }

            var holes = [];
            while (index >= 0) {
                var hole = new Hole(index, find.length, replace.length);
                holes.push(hole);
                str = str.slice(0, index) + replace + str.slice(index + find.length);
                index = str.lastIndexOf(find);
            }

            strAndHoles.holes = holes;
            strAndHoles.value = str;
            return strAndHoles;
        };

        StringAndHoles.shortenPath = function (uriOrig, length) {
            var uri = uriOrig;
            var strAndHoles = new StringAndHoles();

            if (Coveo.Utils.isNullOrEmptyString(uri) || (uri.length <= length)) {
                strAndHoles.value = uri;
                return strAndHoles;
            }

            var holes = [];

            var first = -1;
            if (Coveo.Utils.stringStartsWith(uri, "\\\\")) {
                first = uri.indexOf('\\', first + 2);
            } else {
                first = uri.indexOf('\\');
            }

            if (first != -1) {
                var removed = 0;
                var next = uri.indexOf('\\', first + 1);
                while (next != -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
                    removed = next - first - 1;
                    next = uri.indexOf('\\', next + 1);
                }

                if (removed > 0) {
                    uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(removed);
                    var hole = new Hole(first + 1, removed - StringAndHoles.SHORTEN_END.length, StringAndHoles.SHORTEN_END.length);
                    holes.push(hole);
                }
            }

            if (uri.length > length) {
                var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
                var start = uri.length - over;
                uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
                var hole = new Hole(start, over, StringAndHoles.SHORTEN_END.length);
                holes.push(hole);
            }

            strAndHoles.holes = holes;
            strAndHoles.value = uri;
            return strAndHoles;
        };

        StringAndHoles.shortenString = function (toShortenOrig, length, toAppend) {
            var toShorten = toShortenOrig;
            toAppend = Coveo.Utils.toNotNullString(toAppend);
            var strAndHoles = new StringAndHoles();
            if (Coveo.Utils.isNullOrEmptyString(toShorten) || length <= toAppend.length) {
                strAndHoles.value = toShorten;
                return strAndHoles;
            }

            if (toShorten.length <= length) {
                strAndHoles.value = toShorten;
                return strAndHoles;
            }

            var str = toShorten;

            length = length - toAppend.length;
            str = str.slice(0, length);

            if (toShorten.charAt(str.length) != ' ') {
                var pos = str.lastIndexOf(' ');
                if (pos != -1 && str.length - pos < StringAndHoles.WORD_SHORTER) {
                    str = str.slice(0, pos);
                }
            }
            var holes = [];
            holes[0] = new Hole(str.length, toShorten.length - str.length, toAppend.length);
            str += toAppend;
            strAndHoles.value = str;
            strAndHoles.holes = holes;
            return strAndHoles;
        };

        StringAndHoles.shortenUri = function (uri, length) {
            var strAndHoles = new StringAndHoles();
            if (Coveo.Utils.isNullOrEmptyString(uri) || (uri.length <= length)) {
                strAndHoles.value = uri;
                return strAndHoles;
            }

            var holes = [];

            var first = uri.indexOf("//");
            if (first != -1) {
                first = uri.indexOf('/', first + 2);
            }

            if (first != -1) {
                var removed = 0;
                var next = uri.indexOf('/', first + 1);
                while (next != -1 && uri.length - removed + StringAndHoles.SHORTEN_END.length > length) {
                    removed = next - first - 1;
                    next = uri.indexOf('/', next + 1);
                }

                if (removed > 0) {
                    uri = uri.slice(0, first + 1) + StringAndHoles.SHORTEN_END + uri.slice(first + 1 + removed);
                    var hole = new Hole(first + 1, removed, StringAndHoles.SHORTEN_END.length);
                    holes.push(hole);
                }
            }

            if (uri.length > length) {
                var over = uri.length - length + StringAndHoles.SHORTEN_END.length;
                var start = uri.length - over;
                uri = uri.slice(0, start) + StringAndHoles.SHORTEN_END;
                var hole = new Hole(start, over, StringAndHoles.SHORTEN_END.length);
                holes.push(hole);
            }

            strAndHoles.holes = holes;
            strAndHoles.value = uri;
            return strAndHoles;
        };
        StringAndHoles.SHORTEN_END = "...";
        StringAndHoles.WORD_SHORTER = 10;
        return StringAndHoles;
    })();
    Coveo.StringAndHoles = StringAndHoles;

    var HighlightUtils = (function () {
        function HighlightUtils() {
        }
        HighlightUtils.highlightString = function (content, highlights, holes, cssClass) {
            return HighlightUtils.buildHighlightedString(content, highlights, holes, cssClass);
        };

        HighlightUtils.buildHighlightedString = function (content, highlights, holes, cssClass) {
            Coveo.Assert.isNotUndefined(highlights);
            Coveo.Assert.isNotNull(highlights);
            Coveo.Assert.isNonEmptyString(cssClass);
            if (Coveo.Utils.isNullOrEmptyString(content)) {
                return content;
            }
            var last = 0;
            var maxIndex = content.length;
            var highlighted = "";
            for (var i = 0; i < highlights.length; i++) {
                var highlight = highlights[i];
                var start = highlight.offset;
                var end = start + highlight.length;

                if (holes != null) {
                    var skip = false;
                    for (var j = 0; j < holes.length; j++) {
                        var hole = holes[j];
                        var holeBegin = hole.begin;
                        var holeEnd = holeBegin + hole.size;
                        if (start < holeBegin && end >= holeBegin && end < holeEnd) {
                            end = holeBegin;
                        } else if (start >= holeBegin && end < holeEnd) {
                            skip = true;
                            break;
                        } else if (start >= holeBegin && start < holeEnd && end >= holeEnd) {
                            start = holeBegin + hole.replacementSize;
                            end -= hole.size - hole.replacementSize;
                        } else if (start < holeBegin && end >= holeEnd) {
                            end -= hole.size - hole.replacementSize;
                        } else if (start >= holeEnd) {
                            var offset = hole.size - hole.replacementSize;
                            start -= offset;
                            end -= offset;
                        }
                    }
                    if (skip || start == end) {
                        continue;
                    }
                }

                if (end > maxIndex) {
                    break;
                }

                highlighted += _.escape(content.slice(last, start));
                highlighted += "<span class='" + cssClass + "'>";
                highlighted += _.escape(content.slice(start, end));
                highlighted += "</span>";

                last = end;
            }
            if (last != maxIndex) {
                highlighted += _.escape(content.slice(last));
            }
            return highlighted;
        };
        return HighlightUtils;
    })();
    Coveo.HighlightUtils = HighlightUtils;

    var hightlightTemplate = _.template('<% var i = 0; var lowercaseValue = value.toLowerCase(); while(i < value.length) { %>' + '<% var index = lowercaseValue.indexOf(search, i); if(index != -1) { %>' + '<% if(i != index){ %> <span><%- value.substr(i, index) %></span><% } %>' + '<span class="coveo-hightlight"><%- value.substr(index, search.length) %></span>' + '<% i = index + search.length %></span>' + '<% } else { %>' + '<span><%- value.substr(i) %></span>' + '<% i = value.length; %>' + '<% } %>' + '<% } %>');

    function highlightString(value, search) {
        if (_.isEmpty(search))
            return value;
        return hightlightTemplate({ value: value, search: search.toLowerCase() });
    }
    Coveo.highlightString = highlightString;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.javascriptEncode = function (value) {
            Coveo.Assert.isString(value);

            value = value.replace(/\\/g, '\\\\');
            value = value.replace(/'/g, '\\\'');
            value = value.replace(/"/g, '\\"');

            return value;
        };

        StringUtils.htmlEncode = function (value) {
            Coveo.Assert.isString(value);

            return Coveo.$('<div/>').text(value).html();
        };

        StringUtils.splice = function (value, index, remove, toAdd) {
            return value.slice(0, index) + toAdd + value.slice(index + Math.abs(remove));
        };

        StringUtils.removeMiddle = function (value, length, toAdd) {
            if (value.length < length)
                return value;
            var toRemove = value.length - length;
            var index = Math.floor(length / 2);
            return StringUtils.splice(value, index, toRemove, toAdd);
        };

        StringUtils.regexEncode = function (value) {
            Coveo.Assert.isString(value);
            return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };

        StringUtils.wildcardsToRegex = function (value) {
            Coveo.Assert.isString(value);
            var encoded = StringUtils.regexEncode(value);

            encoded = encoded.replace(/\\\*/, '.*');
            encoded = encoded.replace(/\\\?/, '.');

            return encoded;
        };

        StringUtils.getHighlights = function (strToSearch, regexToFind) {
            var match, indexes = [];

            while (match = regexToFind.exec(strToSearch)) {
                var desiredMatch = match[2];
                var undesiredMatch = match[1];
                var offset = match.index + 1;
                if (match.index == 0 && undesiredMatch == "") {
                    offset = 0;
                }
                indexes.push({ offset: offset, length: desiredMatch.length });
                if (!regexToFind.global) {
                    break;
                }
            }
            return _.isEmpty(indexes) ? undefined : indexes;
        };
        return StringUtils;
    })();
    Coveo.StringUtils = StringUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var QueryUtils = (function () {
        function QueryUtils() {
        }
        QueryUtils.createGuid = function () {
            return (typeof (crypto) != 'undefined' && typeof (crypto.getRandomValues) != 'undefined') ? QueryUtils.generateWithCrypto() : QueryUtils.generateWithRandom();
        };

        //This method is a fallback as it's generate a lot of collisions in Chrome.
        QueryUtils.generateWithRandom = function () {
            // http://stackoverflow.com/a/2117523
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        QueryUtils.generateWithCrypto = function () {
            var buf = new Uint16Array(8);
            crypto.getRandomValues(buf);
            var S4 = function (num) {
                var ret = num.toString(16);
                while (ret.length < 4) {
                    ret = "0" + ret;
                }
                return ret;
            };
            return (S4(buf[0]) + S4(buf[1]) + "-" + S4(buf[2]) + "-" + S4(buf[3]) + "-" + S4(buf[4]) + "-" + S4(buf[5]) + S4(buf[6]) + S4(buf[7]));
        };

        QueryUtils.setStateObjectOnQueryResults = function (state, results) {
            QueryUtils.setPropertyOnResult(results, "state", state);
        };

        QueryUtils.setIndexAndUidOnQueryResults = function (query, results, queryUid) {
            Coveo.Assert.exists(query);
            Coveo.Assert.exists(results);
            var index = query.firstResult;
            QueryUtils.setPropertyOnResult(results, "queryUid", queryUid);
            QueryUtils.setPropertyOnResult(results, "index", index, function () {
                return ++index;
            });
        };

        QueryUtils.setTermsToHighlightOnQueryResults = function (query, results) {
            var termsToHighlights = [query.q].concat(results.termsToHighlight).concat(results.phrasesToHighlight);
            QueryUtils.setPropertyOnResult(results, "termsToHighlight", termsToHighlights);
        };

        QueryUtils.splitFlags = function (flags, delimiter) {
            if (typeof delimiter === "undefined") { delimiter = ";"; }
            Coveo.Assert.exists(flags);
            return flags.split(delimiter);
        };

        QueryUtils.isAttachment = function (result) {
            return _.contains(QueryUtils.splitFlags(result.flags), "IsAttachment");
        };

        QueryUtils.containsAttachment = function (result) {
            return _.contains(QueryUtils.splitFlags(result.flags), "ContainsAttachment");
        };

        QueryUtils.hasHTMLVersion = function (result) {
            return _.contains(QueryUtils.splitFlags(result.flags), "HasHtmlVersion");
        };

        QueryUtils.hasThumbnail = function (result) {
            return _.contains(QueryUtils.splitFlags(result.flags), "HasThumbnail");
        };

        QueryUtils.quoteAndEscapeIfNeeded = function (str) {
            Coveo.Assert.isString(str);
            return QueryUtils.isAtomicString(str) || (QueryUtils.isRangeString(str) || QueryUtils.isRangeWithoutOuterBoundsString(str)) ? str : QueryUtils.quoteAndEscape(str);
        };

        QueryUtils.quoteAndEscape = function (str) {
            Coveo.Assert.isString(str);
            return '"' + QueryUtils.escapeString(str) + '"';
        };

        QueryUtils.escapeString = function (str) {
            Coveo.Assert.isString(str);
            return str.replace(/"/g, ' ');
        };

        QueryUtils.isAtomicString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?$|^[\d\w]+$/.test(str);
        };

        QueryUtils.isRangeString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?\.\.\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}\.\.\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
        };

        QueryUtils.isRangeWithoutOuterBoundsString = function (str) {
            Coveo.Assert.isString(str);
            return /^\d+(\.\d+)?$|^\d{4}\/\d{2}\/\d{2}@\d{2}:\d{2}:\d{2}$/.test(str);
        };

        QueryUtils.buildFieldExpression = function (field, operator, values) {
            Coveo.Assert.isNonEmptyString(field);
            Coveo.Assert.stringStartsWith(field, '@');
            Coveo.Assert.isNonEmptyString(operator);
            Coveo.Assert.isLargerOrEqualsThan(1, values.length);

            if (values.length == 1) {
                return field + operator + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
            } else {
                return field + operator + '(' + _.map(values, function (str) {
                    return QueryUtils.quoteAndEscapeIfNeeded(str);
                }).join(',') + ')';
            }
        };

        QueryUtils.buildFieldNotEqualExpression = function (field, values) {
            Coveo.Assert.isNonEmptyString(field);
            Coveo.Assert.stringStartsWith(field, '@');
            Coveo.Assert.isLargerOrEqualsThan(1, values.length);

            var filter;
            if (values.length == 1) {
                filter = field + "==" + QueryUtils.quoteAndEscapeIfNeeded(values[0]);
            } else {
                filter = field + "==" + '(' + _.map(values, function (str) {
                    return QueryUtils.quoteAndEscapeIfNeeded(str);
                }).join(',') + ')';
            }

            return "(NOT " + filter + ")";
        };

        QueryUtils.mergeQueryString = function (url, queryString) {
            var queryStringPosition = url.indexOf("?");
            if (queryStringPosition != -1) {
                url += "&" + queryString;
            } else {
                url += "?" + queryString;
            }
            return url;
        };

        QueryUtils.mergePath = function (url, path) {
            var urlSplit = url.split("?");
            return urlSplit[0] + path + "?" + (urlSplit[1] || "");
        };

        QueryUtils.setPropertyOnResult = function (results, property, value, afterOneLoop) {
            _.each(results.results, function (result) {
                result[property] = value;
                _.each(result.childResults, function (child) {
                    child[property] = value;
                });
                if (!Coveo.Utils.isNullOrUndefined(result.parentResult)) {
                    result.parentResult[property] = value;
                }
                value = afterOneLoop ? afterOneLoop() : value;
            });
        };
        return QueryUtils;
    })();
    Coveo.QueryUtils = QueryUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (KEYBOARD) {
        KEYBOARD[KEYBOARD["BACKSPACE"] = 8] = "BACKSPACE";
        KEYBOARD[KEYBOARD["TAB"] = 9] = "TAB";
        KEYBOARD[KEYBOARD["ENTER"] = 13] = "ENTER";
        KEYBOARD[KEYBOARD["SHIFT"] = 16] = "SHIFT";
        KEYBOARD[KEYBOARD["CTRL"] = 17] = "CTRL";
        KEYBOARD[KEYBOARD["ALT"] = 18] = "ALT";
        KEYBOARD[KEYBOARD["ESCAPE"] = 27] = "ESCAPE";
        KEYBOARD[KEYBOARD["SPACEBAR"] = 32] = "SPACEBAR";
        KEYBOARD[KEYBOARD["PAGE_UP"] = 33] = "PAGE_UP";
        KEYBOARD[KEYBOARD["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KEYBOARD[KEYBOARD["HOME"] = 36] = "HOME";
        KEYBOARD[KEYBOARD["LEFT_ARROW"] = 37] = "LEFT_ARROW";
        KEYBOARD[KEYBOARD["UP_ARROW"] = 38] = "UP_ARROW";
        KEYBOARD[KEYBOARD["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
        KEYBOARD[KEYBOARD["DOWN_ARROW"] = 40] = "DOWN_ARROW";
        KEYBOARD[KEYBOARD["INSERT"] = 45] = "INSERT";
        KEYBOARD[KEYBOARD["DELETE"] = 46] = "DELETE";
    })(Coveo.KEYBOARD || (Coveo.KEYBOARD = {}));
    var KEYBOARD = Coveo.KEYBOARD;

    var KeyboardUtils = (function () {
        function KeyboardUtils() {
        }
        KeyboardUtils.keysEqual = function (key, code) {
            if (!Coveo.Utils.isNullOrUndefined(key.keyCode)) {
                return key.keyCode == code;
            } else if (!Coveo.Utils.isNullOrUndefined(key.which)) {
                return key.which == code;
            }
            return false;
        };

        KeyboardUtils.isAllowedKeyForOmniBox = function (e) {
            var keycode = e.keyCode;
            var valid = (KeyboardUtils.isNumberKeyPushed(keycode)) || (keycode == 32 || keycode == 13) || (KeyboardUtils.isLetterKeyPushed(keycode)) || (keycode > 95 && keycode < 112) || (keycode > 185 && keycode < 193) || (keycode > 218 && keycode < 223) || (keycode == 8 /* BACKSPACE */ || keycode == 46 /* DELETE */) || (KeyboardUtils.isArrowKeyPushed(keycode));

            return valid;
        };

        KeyboardUtils.isDeleteOrBackspace = function (e) {
            return KeyboardUtils.keysEqual(e, 8 /* BACKSPACE */) || KeyboardUtils.keysEqual(e, 46 /* DELETE */);
        };

        KeyboardUtils.isArrowKeyPushed = function (keycode) {
            return keycode == 37 /* LEFT_ARROW */ || keycode == 38 /* UP_ARROW */ || keycode == 39 /* RIGHT_ARROW */ || keycode == 40 /* DOWN_ARROW */;
        };

        KeyboardUtils.isNumberKeyPushed = function (keycode) {
            return keycode > 47 && keycode < 58;
        };

        KeyboardUtils.isLetterKeyPushed = function (keycode) {
            return keycode > 64 && keycode < 91;
        };
        return KeyboardUtils;
    })();
    Coveo.KeyboardUtils = KeyboardUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var HTMLUtils = (function () {
        function HTMLUtils() {
        }
        HTMLUtils.buildAttributeString = function (options) {
            var ret = [];
            _.each(options, function (val, key, obj) {
                if (val != undefined) {
                    ret.push(key + "=" + JSON.stringify(val.toString()));
                }
            });
            return ret.join(" ");
        };
        return HTMLUtils;
    })();
    Coveo.HTMLUtils = HTMLUtils;

    var AnchorUtils = (function () {
        function AnchorUtils() {
        }
        AnchorUtils.buildAnchor = function (href, options) {
            var text;
            if (!options || !options.text) {
                text = href;
            } else {
                text = options.text;
                options.text = undefined;
            }
            return "<a href='" + href + "'" + HTMLUtils.buildAttributeString(options) + ">" + text + "</a>";
        };
        return AnchorUtils;
    })();
    Coveo.AnchorUtils = AnchorUtils;

    var ImageUtils = (function () {
        function ImageUtils() {
        }
        ImageUtils.buildImage = function (src, options) {
            var ret = "<img ";
            ret += src ? "src='" + src + "' " : "";
            ret += HTMLUtils.buildAttributeString(options) + "/>";
            return ret;
        };

        ImageUtils.selectImageFromResult = function (result) {
            return Coveo.$("img[data-coveo-sys-uri-hash='" + result.raw["sysurihash"] + "']");
        };

        ImageUtils.buildImageWithDirectSrcAttribute = function (endpoint, result) {
            var image = new Image();
            var dataStreamUri = endpoint.getViewAsDatastreamUri(result.uniqueId, '$Thumbnail$');
            image.onload = function () {
                ImageUtils.selectImageFromResult(result).attr('src', dataStreamUri);
            };
            image.src = dataStreamUri;
        };

        ImageUtils.buildImageWithBase64SrcAttribute = function (endpoint, result) {
            endpoint.getRawDataStream(result.uniqueId, '$Thumbnail$').done(function (response) {
                var rawBinary = String.fromCharCode.apply(null, new Uint8Array(response));
                ImageUtils.selectImageFromResult(result).attr("src", "data:image/png;base64, " + btoa(rawBinary));
            }).fail(function (response) {
                ImageUtils.selectImageFromResult(result).remove();
            });
        };

        ImageUtils.buildImageFromResult = function (result, endpoint, options) {
            var options = options ? options : {};

            var img = ImageUtils.buildImage(undefined, Coveo.$.extend(options, { "data-coveo-sys-uri-hash": result.raw["sysurihash"] }));
            if (endpoint.isJsonp() || Coveo.Ui.Device.isIE8or9()) {
                //For jsonp and IE8-9 (XDomain) we can't GET/POST for binary data. We are limited to only setting the src attribute directly on the img.
                ImageUtils.buildImageWithDirectSrcAttribute(endpoint, result);
            } else {
                //Base 64 img allows us to GET/POST the image as raw binary, so that we can also pass the credential of the user
                //Useful for phonegap.
                ImageUtils.buildImageWithBase64SrcAttribute(endpoint, result);
            }
            return img;
        };
        return ImageUtils;
    })();
    Coveo.ImageUtils = ImageUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (FeatureDetectionUtils) {
        function supportSVG() {
            return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
        }
        FeatureDetectionUtils.supportSVG = supportSVG;
    })(Coveo.FeatureDetectionUtils || (Coveo.FeatureDetectionUtils = {}));
    var FeatureDetectionUtils = Coveo.FeatureDetectionUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var EmailActionsUtils = (function () {
            function EmailActionsUtils() {
            }
            EmailActionsUtils.buildMailToString = function (options) {
                var mailTo = options.to ? "mailto:" + encodeURIComponent(options.to) : "mailto:";
                var parameters = EmailActionsUtils.buildMailToParametersString(options.subject, options.cc, options.bcc, options.body, mailTo);
                if (parameters) {
                    mailTo += "?" + parameters;
                }
                return mailTo;
            };

            EmailActionsUtils.buildMailToParametersString = function (subject, cc, bcc, body, mailTo) {
                var parametersArray = [];
                if (subject) {
                    parametersArray.push(EmailActionsUtils.buildMailToParameter("subject", subject));
                }
                if (cc) {
                    parametersArray.push(EmailActionsUtils.buildMailToParameter("cc", cc));
                }
                if (bcc) {
                    parametersArray.push(EmailActionsUtils.buildMailToParameter("bcc", bcc));
                }
                if (body) {
                    var shortenBody = EmailActionsUtils.getShortenBody(body, mailTo + "?" + parametersArray.join('&'));
                    if (shortenBody) {
                        parametersArray.push(EmailActionsUtils.buildMailToParameter("body", shortenBody));
                    }
                }
                return parametersArray.join('&');
            };

            EmailActionsUtils.getShortenBody = function (body, mailTo) {
                var shortenBody = body;
                if (mailTo.length < Ui.MailTo.maxLength) {
                    var maxBodyLength = Ui.MailTo.maxLength - mailTo.length - "&body=".length;
                    shortenBody = EmailActionsUtils.shortenString(body, maxBodyLength);
                }
                return shortenBody;
            };

            EmailActionsUtils.buildMailToParameter = function (name, param) {
                return param ? encodeURIComponent(name) + '=' + encodeURIComponent(param) : '';
            };

            EmailActionsUtils.shortenString = function (str, maxLength, encodeShortenBodyIndication) {
                if (typeof encodeShortenBodyIndication === "undefined") { encodeShortenBodyIndication = false; }
                /* There is a size limit on mailto url,
                * Depending on the browser, the mailto will not open if too large. */
                var shortenBodyIndicator = encodeShortenBodyIndication ? encodeURIComponent(Ui.MailTo.shortenBodyIndicator) : Ui.MailTo.shortenBodyIndicator;
                maxLength = maxLength - Ui.MailTo.shortenBodyIndicator.length;
                var sliced = str.length > maxLength ? true : false;
                var shortenStr = str.substring(0, maxLength);
                shortenStr += sliced ? shortenBodyIndicator : '';
                return shortenStr;
            };

            EmailActionsUtils.appendShortenBodyToMailToString = function (mailTo, body) {
                var shortenBody = EmailActionsUtils.getShortenBody(body, mailTo);
                return mailTo.indexOf('?') >= 0 ? mailTo + "&body=" + shortenBody : mailTo + "?body=" + shortenBody;
            };

            EmailActionsUtils.removeCurrentUserEmailFromString = function (currentUserEmail, str) {
                if (str && currentUserEmail) {
                    return _.filter(str.split(";"), function (email) {
                        return email.indexOf(currentUserEmail) == -1;
                    }).join(";");
                } else {
                    return str;
                }
            };

            EmailActionsUtils.buildReplyMailToFromResult = function (result, currentUserEmail) {
                return new Ui.MailTo({
                    currentUserEmail: currentUserEmail,
                    originalFrom: result.raw.sysfrom,
                    to: result.raw.sysfrom,
                    subject: result.raw.sysconversationsubject
                });
            };

            EmailActionsUtils.buildReplyAllMailToFromResult = function (result, currentUserEmail) {
                return new Ui.MailTo({
                    currentUserEmail: currentUserEmail,
                    originalFrom: result.raw.sysfrom,
                    to: result.raw.sysfrom + ";" + result.raw.systo,
                    subject: result.raw.sysconversationsubject,
                    cc: result.raw.syscc
                });
            };

            EmailActionsUtils.buildForwardMailToFromResult = function (result, currentUserEmail) {
                return new Ui.MailTo({
                    currentUserEmail: currentUserEmail,
                    originalFrom: result.raw.sysfrom,
                    subject: result.raw.sysconversationsubject
                });
            };

            EmailActionsUtils.encodeMailToBody = function (body) {
                var linesArray = body.split('\n');
                _.each(linesArray, function (line, index) {
                    linesArray[index] = encodeURIComponent(linesArray[index]);
                });
                return linesArray.join(Ui.MailTo.enter);
            };
            return EmailActionsUtils;
        })();
        Ui.EmailActionsUtils = EmailActionsUtils;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var AjaxUtils = (function () {
        function AjaxUtils() {
        }
        AjaxUtils.ajaxBasicAuth = function (type, url, username, password, doneCallback, failCallBack) {
            Coveo.$.ajax({
                type: type,
                timeout: 5000,
                url: url,
                beforeSend: function (xhr) {
                    if (username != null && password != null) {
                        xhr.setRequestHeader('Authorization', AjaxUtils.getBasicAuthBase64(username, password));
                        if (Coveo.Ui.Device.isPhonegap()) {
                            xhr.setRequestHeader('Basic-Auth-Challenge-Client', 'Phonegap');
                        }
                    }
                }
            }).fail(function (data) {
                if (failCallBack) {
                    failCallBack(data);
                }
            }).done(function (data) {
                doneCallback(data);
            });
        };

        AjaxUtils.getBasicAuthBase64 = function (username, password) {
            return 'Basic ' + btoa(username + ":" + password);
        };
        return AjaxUtils;
    })();
    Coveo.AjaxUtils = AjaxUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultMailToOptions = (function (_super) {
            __extends(DefaultMailToOptions, _super);
            function DefaultMailToOptions() {
                _super.apply(this, arguments);
                this.currentUserEmail = "";
                this.originalFrom = "";
                this.to = "";
                this.subject = "";
                this.cc = "";
                this.bcc = "";
                this.body = "";
                this.bodyIsHTML = Ui.Device.isPhonegap();
            }
            return DefaultMailToOptions;
        })(Coveo.Options);
        Ui.DefaultMailToOptions = DefaultMailToOptions;

        var MailTo = (function () {
            function MailTo(options) {
                this.options = options;
                this.bodyHeader = "";
                this.options = new DefaultMailToOptions().merge(options);
                this.removeCurrentUserFromParameters();
                if (Ui.Device.isPhonegap()) {
                    this.setRecipientsArrays();
                }
                if (this.options.originalFrom) {
                    this.bodyHeader = this.options.bodyIsHTML ? "<p><br/><br/><br/>" + Ui.l.From() + ": " + this.options.originalFrom + "<hr></p>" : "\n\n\n" + Ui.l.From() + ": " + this.options.originalFrom + "\n_________________________________\n";
                }
            }
            MailTo.prototype.removeCurrentUserFromParameters = function () {
                this.options.to = Ui.EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.to);
                this.options.cc = Ui.EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.cc);
                this.options.bcc = Ui.EmailActionsUtils.removeCurrentUserEmailFromString(this.options.currentUserEmail, this.options.bcc);
            };

            MailTo.prototype.setRecipientsArrays = function () {
                this.toArray = this.options.to ? this.options.to.split(';') : [];
                this.ccArray = this.options.cc ? this.options.cc.split(';') : [];
                this.bccArray = this.options.bcc ? this.options.bcc.split(';') : [];
            };

            MailTo.prototype.open = function () {
                if (Ui.Device.isPhonegap()) {
                    var shortenBody = !this.options.bodyIsHTML ? Ui.EmailActionsUtils.shortenString(this.body, MailTo.phonegapMaxLength) : this.body;
                    var emailOpenerObject = window.plugin.email.open(this.getEmailOpenerObject(shortenBody));
                } else {
                    this.ensureValueIsSet();
                    window.location.href = this.value;
                }
            };

            MailTo.prototype.getEmailOpenerObject = function (shortenBody) {
                var obj = {
                    to: this.toArray,
                    cc: this.ccArray,
                    bcc: this.bccArray,
                    subject: this.options.subject,
                    body: shortenBody,
                    isHtml: this.options.bodyIsHTML
                };
                console.log(obj);
                return obj;
            };

            MailTo.prototype.ensureValueIsSet = function () {
                if (!this.value) {
                    this.setValue();
                } else if (!this.valueBodyIsSet()) {
                    this.setValueBody();
                }
            };

            MailTo.prototype.setValue = function () {
                this.value = Ui.EmailActionsUtils.buildMailToString(this.options);
                if (this.value && !this.valueBodyIsSet()) {
                    this.setValueBody();
                }
            };

            MailTo.prototype.setValueBody = function () {
                this.value = Ui.EmailActionsUtils.appendShortenBodyToMailToString(this.value, this.body);
            };

            MailTo.prototype.setMailToBodyFromText = function (text) {
                this.body = text ? this.bodyHeader + text : "";
                if (!Ui.Device.isPhonegap()) {
                    this.body = Ui.EmailActionsUtils.encodeMailToBody(this.body);
                }
            };

            MailTo.prototype.valueBodyIsSet = function () {
                return this.value.indexOf('body=') >= 0;
            };

            MailTo.prototype.bodyIsSet = function () {
                return this.body ? true : false;
            };
            MailTo.enter = '%0D%0A';
            MailTo.shortenBodyIndicator = '\r\n\r\n...';

            MailTo.maxLength = 1000;
            MailTo.phonegapMaxLength = 15000;
            return MailTo;
        })();
        Ui.MailTo = MailTo;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var LocalStorageUtils = (function () {
        function LocalStorageUtils(id) {
            this.id = id;
            Coveo.Assert.exists(window.localStorage);
        }
        LocalStorageUtils.prototype.save = function (data) {
            localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(data));
        };

        LocalStorageUtils.prototype.load = function () {
            var value = localStorage.getItem(this.getLocalStorageKey());
            return value && JSON.parse(value);
        };

        LocalStorageUtils.prototype.remove = function (key) {
            if (key == undefined) {
                localStorage.removeItem(this.getLocalStorageKey());
            } else {
                var oldObj = this.load();
                delete oldObj[key];
                this.save(oldObj);
            }
        };

        LocalStorageUtils.prototype.getLocalStorageKey = function () {
            return "coveo-" + this.id;
        };
        return LocalStorageUtils;
    })();
    Coveo.LocalStorageUtils = LocalStorageUtils;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var Cache = (function () {
        function Cache(onEmpty) {
            this.onEmpty = onEmpty;
            this.cache = [];
        }
        Cache.prototype.get = function () {
            if (this.cache.length == 0) {
                return this.onEmpty();
            } else {
                return this.cache.pop();
            }
        };

        Cache.prototype.push = function (value) {
            this.cache.push(value);
        };
        return Cache;
    })();
    Coveo.Cache = Cache;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    var DefaultStreamHighlightOptions = (function (_super) {
        __extends(DefaultStreamHighlightOptions, _super);
        function DefaultStreamHighlightOptions(cssClass, shorten, regexFlags) {
            if (typeof cssClass === "undefined") { cssClass = "coveo-highlight"; }
            if (typeof shorten === "undefined") { shorten = 0; }
            if (typeof regexFlags === "undefined") { regexFlags = "gi"; }
            _super.call(this);
            this.cssClass = cssClass;
            this.shorten = shorten;
            this.regexFlags = regexFlags;
        }
        return DefaultStreamHighlightOptions;
    })(Coveo.Options);

    function highlightStreamHTML(stream, termsToHighlight, options) {
        var sortedTerms = termsToHighlight.sort().reverse();
        var opts = new DefaultStreamHighlightOptions().merge(options);
        var container = createStreamHTMLContainer(stream);

        container.find("*").each(function (i, elem) {
            var text = Coveo.$(elem).text();
            Coveo.$(elem).html(Coveo.HighlightUtils.highlightString(text, getRestHighlightsForAllTerms(text, sortedTerms, opts), [], opts.cssClass));
        });
        return container.html();
    }
    Coveo.highlightStreamHTML = highlightStreamHTML;

    function highlightStreamText(stream, termsToHighlight, options) {
        var sortedTerms = termsToHighlight.sort(function (first, second) {
            return second.length - first.length;
        });
        var opts = new DefaultStreamHighlightOptions().merge(options);
        return Coveo.HighlightUtils.highlightString(stream, getRestHighlightsForAllTerms(stream, sortedTerms, opts), [], opts.cssClass);
    }
    Coveo.highlightStreamText = highlightStreamText;

    function createRegexWithTerm(term, opts) {
        //This regex might need tweaking : it may be a bit too simplistic and might not cover all corner case
        return new RegExp("([^a-zA-Z]|^)(" + term + "(?![a-zA-Z]))", opts.regexFlags);
    }

    function getRestHighlightsForAllTerms(toHighlight, sortedTerms, opts) {
        var indexes = [];
        sortedTerms = _.compact(sortedTerms);
        _.each(sortedTerms, function (term) {
            indexes.push(Coveo.StringUtils.getHighlights(toHighlight, createRegexWithTerm(term, opts)));
        });
        return _.flatten(_.compact(indexes)).sort(function (first, second) {
            return first.offset - second.offset;
        });
    }

    function createStreamHTMLContainer(stream) {
        var container = Coveo.$("<div />");
        container.get(0).innerHTML = stream;
        return container;
    }
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var AjaxError = (function () {
            function AjaxError(message, status) {
                this.message = message;
                this.status = status;
                Coveo.Assert.exists(message);
                Coveo.Assert.exists(status);
                this.type = "Ajax Error (status: " + status + ")";
            }
            return AjaxError;
        })();
        Rest.AjaxError = AjaxError;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var MissingAuthenticationError = (function () {
            function MissingAuthenticationError(provider) {
                this.provider = provider;
                this.isMissingAuthentication = true;
                this.type = this.message = "Missing Authentication (provider: " + provider + ")";
            }
            return MissingAuthenticationError;
        })();
        Rest.MissingAuthenticationError = MissingAuthenticationError;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var QueryError = (function () {
            function QueryError(errorResponse) {
                this.status = errorResponse.statusCode;
                this.message = errorResponse.data.message;
                this.type = errorResponse.data.type;
                this.queryExecutionReport = errorResponse.data.executionReport;

                Coveo.Assert.isNumber(this.status);
                Coveo.Assert.isNonEmptyString(this.message);
                Coveo.Assert.isNonEmptyString(this.type);
            }
            return QueryError;
        })();
        Rest.QueryError = QueryError;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var ACCESS_IS_DENIED = -2147024891;

        //In ie8, XMLHttpRequest has no status property, so let's use this enum instead
        var XMLHttpRequestStatus;
        (function (XMLHttpRequestStatus) {
            XMLHttpRequestStatus[XMLHttpRequestStatus["OPENED"] = XMLHttpRequest.OPENED || 1] = "OPENED";
            XMLHttpRequestStatus[XMLHttpRequestStatus["DONE"] = XMLHttpRequest.DONE || 4] = "DONE";
        })(XMLHttpRequestStatus || (XMLHttpRequestStatus = {}));

        var EndpointCaller = (function () {
            function EndpointCaller(options) {
                if (typeof options === "undefined") { options = {}; }
                this.options = options;
                this.useJsonp = false;
                this.logger = new Coveo.Logger(this);
            }
            EndpointCaller.prototype.call = function (params) {
                Coveo.Assert.isNonEmptyString(params.url);

                var requestInfo = {
                    url: params.url,
                    queryString: params.errorsAsSuccess ? params.queryString.concat(['errorsAsSuccess=1']) : params.queryString,
                    requestData: params.requestData,
                    deferred: Coveo.$.Deferred(),
                    begun: new Date(),
                    method: params.method
                };

                this.logger.trace('Performing REST request', requestInfo);
                var urlObject = EndpointCaller.parseURL(requestInfo.url);

                //In IE8, hostname and port return "" when we are on the same domain.
                var isLocalHost = (window.location.hostname === urlObject.hostname) || (urlObject.hostname === "");

                var currentPort = (window.location.port != "" ? window.location.port : (window.location.protocol == "https:" ? "443" : "80"));
                var isSamePort = currentPort == urlObject.port;
                var isCrossOrigin = !(isLocalHost && isSamePort);
                if (!this.useJsonp) {
                    if (this.isCORSSupported() || !isCrossOrigin) {
                        this.callUsingXMLHttpRequest(requestInfo, params.responseType);
                    } else if (this.isXDomainRequestSupported()) {
                        this.callUsingXDomainRequest(requestInfo);
                    } else {
                        this.callUsingAjaxJsonP(requestInfo);
                    }
                } else {
                    this.callUsingAjaxJsonP(requestInfo);
                }

                return requestInfo.deferred;
            };

            EndpointCaller.parseURL = function (url) {
                var urlObject = document.createElement('a');
                urlObject.href = url;
                return urlObject;
            };

            EndpointCaller.convertJsonToQueryString = function (json) {
                Coveo.Assert.exists(json);

                var result = [];
                _.each(json, function (value, key) {
                    if (value != null) {
                        if (_.isObject(value)) {
                            result.push(key + '=' + encodeURIComponent(JSON.stringify(value)));
                        } else {
                            result.push(key + '=' + encodeURIComponent(value.toString()));
                        }
                    }
                });

                return result;
            };

            EndpointCaller.convertJsonToFormBody = function (json) {
                return EndpointCaller.convertJsonToQueryString(json).join('&');
            };

            EndpointCaller.prototype.callUsingXMLHttpRequest = function (requestInfo, responseType) {
                var _this = this;
                if (typeof responseType === "undefined") { responseType = "text"; }
                var xmlHttpRequest = new XMLHttpRequest();

                // Beware, most stuff must be set on the event that says the request is OPENED.
                // Otherwise it'll bork on some browsers. Gotta love standards.
                // This sent variable allowed to remove the second call of onreadystatechange with the state OPENED in IE11
                var sent = false;

                xmlHttpRequest.onreadystatechange = function (ev) {
                    if (xmlHttpRequest.readyState == XMLHttpRequestStatus.OPENED && !sent) {
                        sent = true;

                        // We have to enable withCredentials in order for CORS to work with basic & Windows & cookie authentication.
                        // We must NOT set it otherwise because it won't work if Access-Control-Allow-Credentials is not specified
                        // by the server (ex: cloud platform)
                        if (_this.options.anonymous === false) {
                            xmlHttpRequest.withCredentials = true;
                        }

                        // Set authentication depending on what we're using
                        if (_this.options.accessToken) {
                            xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + _this.options.accessToken);
                        } else if (_this.options.username && _this.options.password) {
                            xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + btoa(_this.options.username + ":" + _this.options.password));
                        }

                        // Under Phonegap, we must set this special http header that'll prevent the server
                        // from challenging us for Basic Authentication. This avoids a bug where Phonegap
                        // would simply deadlock trying to show a popup.
                        if (Coveo.Ui.Device.isPhonegap()) {
                            xmlHttpRequest.setRequestHeader('Basic-Auth-Challenge-Client', 'Phonegap');
                        }
                        if (requestInfo.method == "GET") {
                            xmlHttpRequest.send();
                        } else {
                            xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=\"UTF-8\"");
                            xmlHttpRequest.send(EndpointCaller.convertJsonToFormBody(requestInfo.requestData));
                        }
                        xmlHttpRequest.responseType = responseType;
                    } else if (xmlHttpRequest.readyState == XMLHttpRequestStatus.DONE) {
                        var status = xmlHttpRequest.status;
                        var data;
                        if (responseType == "text") {
                            data = _this.tryParseResponseText(xmlHttpRequest.responseText, xmlHttpRequest.getResponseHeader("Content-Type"));
                        } else {
                            data = xmlHttpRequest.response;
                        }
                        if (_this.isSuccessHttpStatus(status)) {
                            _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data);
                        } else {
                            _this.handleError(requestInfo, xmlHttpRequest.status, undefined);
                        }
                    }
                };

                var queryString = requestInfo.queryString;
                if (requestInfo.method == "GET") {
                    queryString = queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));
                }

                xmlHttpRequest.open(requestInfo.method, this.combineUrlAndQueryString(requestInfo.url, queryString));
            };

            EndpointCaller.prototype.callUsingXDomainRequest = function (requestInfo) {
                var _this = this;
                var queryString = requestInfo.queryString.concat([]);

                // XDomainRequest don't support including stuff in the header, so we must
                // put the access token in the query string if we have one.
                if (this.options.accessToken) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }

                var xDomainRequest = new XDomainRequest();
                if (requestInfo.method == "GET") {
                    queryString = queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));
                }
                xDomainRequest.open(requestInfo.method, this.combineUrlAndQueryString(requestInfo.url, queryString));

                xDomainRequest.onload = function () {
                    var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                    _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data);
                };

                xDomainRequest.onerror = function () {
                    var data = _this.tryParseResponseText(xDomainRequest.responseText, xDomainRequest.contentType);
                    _this.handleError(requestInfo, 0, data);
                };

                // We must set those functions otherwise it will sometime fail in IE
                xDomainRequest.ontimeout = function () {
                    return _this.logger.error('Request timeout', xDomainRequest, requestInfo.requestData);
                };
                xDomainRequest.onprogress = function () {
                    return _this.logger.trace('Request progress', xDomainRequest, requestInfo.requestData);
                };

                // We must open the request in a separate thread, for obscure reasons
                _.defer(function () {
                    if (requestInfo.method == "GET") {
                        xDomainRequest.send();
                    } else {
                        xDomainRequest.send(EndpointCaller.convertJsonToFormBody(requestInfo.requestData));
                    }
                });
            };

            EndpointCaller.prototype.callUsingAjaxJsonP = function (requestInfo) {
                var _this = this;
                var queryString = requestInfo.queryString.concat(EndpointCaller.convertJsonToQueryString(requestInfo.requestData));

                // JSONP don't support including stuff in the header, so we must
                // put the access token in the query string if we have one.
                if (this.options.accessToken) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }

                queryString.push('callback=?');

                Coveo.$.jsonp({
                    url: this.combineUrlAndQueryString(requestInfo.url, queryString),
                    success: function (data) {
                        return _this.handleSuccessfulResponseThatMightBeAnError(requestInfo, data);
                    },
                    error: function () {
                        return _this.handleError(requestInfo, 0, undefined);
                    }
                });
            };

            EndpointCaller.prototype.handleSuccessfulResponseThatMightBeAnError = function (requestInfo, data) {
                if (this.isErrorResponseBody(data)) {
                    this.handleError(requestInfo, data.statusCode, data);
                } else {
                    this.handleSuccess(requestInfo, data);
                }
            };

            EndpointCaller.prototype.handleSuccess = function (requestInfo, data) {
                var querySuccess = {
                    duration: Coveo.TimeSpan.fromDates(requestInfo.begun, new Date()).getMilliseconds(),
                    data: data
                };

                this.logger.trace('REST request successful', data, requestInfo);
                requestInfo.deferred.resolve(querySuccess);
            };

            EndpointCaller.prototype.handleError = function (requestInfo, status, data) {
                var queryError = {
                    statusCode: status,
                    data: data
                };

                this.logger.error('REST request failed', status, data, requestInfo);
                requestInfo.deferred.reject(queryError);
            };

            EndpointCaller.prototype.combineUrlAndQueryString = function (url, queryString) {
                return url + (queryString.length > 0 ? '?' + queryString.join('&') : '');
            };

            EndpointCaller.prototype.isXDomainRequestSupported = function () {
                return "XDomainRequest" in window;
            };

            EndpointCaller.prototype.isCORSSupported = function () {
                return "withCredentials" in new XMLHttpRequest();
            };

            EndpointCaller.prototype.isSuccessHttpStatus = function (status) {
                return status >= 200 && status < 300 || status === 304;
            };

            EndpointCaller.prototype.tryParseResponseText = function (json, contentType) {
                if (contentType != null && contentType.indexOf('application/json') != -1) {
                    if (Coveo.Utils.isNonEmptyString(json)) {
                        try  {
                            return JSON.parse(json);
                        } catch (ex) {
                            return undefined;
                        }
                    } else {
                        return undefined;
                    }
                } else {
                    return json;
                }
            };

            EndpointCaller.prototype.isErrorResponseBody = function (data) {
                if (data && data.statusCode) {
                    return !this.isSuccessHttpStatus(data.statusCode);
                } else {
                    return false;
                }
            };
            return EndpointCaller;
        })();
        Rest.EndpointCaller = EndpointCaller;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var DefaultSearchEndpointOptions = (function () {
            function DefaultSearchEndpointOptions() {
                this.queryStringArguments = {};
                this.anonymous = false;
                this.isOldRestAPI = false;
            }
            return DefaultSearchEndpointOptions;
        })();
        Rest.DefaultSearchEndpointOptions = DefaultSearchEndpointOptions;

        var SearchEndpoint = (function () {
            function SearchEndpoint(options) {
                this.options = options;
                this._batchListFieldValues = [];
                Coveo.Assert.exists(options);

                // For backward compatibility, we set anonymous to true when an access token
                // is specified. This causes withCredentials to NOT be set, allowing pages
                // loaded directly from the filesystem to work with non Windows/Basic/Cookie
                // authentication. If anonymous is explicitly set to false, we'll use withCredentials.
                var defaultOptions = new DefaultSearchEndpointOptions();
                defaultOptions.anonymous = Coveo.Utils.isNonEmptyString(options.accessToken);
                this.options = Coveo.$.extend({}, defaultOptions, options);

                Coveo.$(window).on('beforeunload', Coveo.$.proxy(this.handleUnload, this));
                this.logger = new Coveo.Logger(this);
                this.createEndpointCaller();
            }
            SearchEndpoint.configureSampleEndpoint = function () {
                // This OAuth token points to the workgroup used for samples.
                // It contains a set of harmless content sources.
                SearchEndpoint.endpoints["default"] = new SearchEndpoint({
                    restUri: 'https://cloudplatform.coveo.com/rest/search',
                    accessToken: '52d806a2-0f64-4390-a3f2-e0f41a4a73ec'
                });
            };

            SearchEndpoint.configureCloudEndpoint = function (workgroup, token, uri, otherOptions) {
                if (typeof uri === "undefined") { uri = 'https://cloudplatform.coveo.com/rest/search'; }
                var merged = SearchEndpoint.mergeConfigOptions({
                    restUri: uri,
                    accessToken: token,
                    queryStringArguments: {
                        workgroup: workgroup
                    }
                }, otherOptions);

                SearchEndpoint.endpoints["default"] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
            };

            SearchEndpoint.configureOnPremiseEndpoint = function (uri, token, otherOptions) {
                var merged = SearchEndpoint.mergeConfigOptions({
                    restUri: uri,
                    accessToken: token
                }, otherOptions);

                SearchEndpoint.endpoints["default"] = new SearchEndpoint(SearchEndpoint.removeUndefinedConfigOption(merged));
            };

            SearchEndpoint.removeUndefinedConfigOption = function (config) {
                _.each(_.keys(config), function (key) {
                    if (config[key] == undefined) {
                        delete config[key];
                    }
                });
                return config;
            };

            SearchEndpoint.mergeConfigOptions = function (first, second) {
                first = SearchEndpoint.removeUndefinedConfigOption(first);
                second = SearchEndpoint.removeUndefinedConfigOption(second);
                return Coveo.$.extend({}, first, second);
            };

            SearchEndpoint.prototype.handleUnload = function () {
                this.isRedirecting = true;
            };

            SearchEndpoint.prototype.getBaseUri = function () {
                return this.options.restUri;
            };

            SearchEndpoint.prototype.getAuthenticationProviderUri = function (provider, returnUri, message) {
                var uri = this.buildBaseUri('/login/' + provider) + '?';

                if (Coveo.Utils.isNonEmptyString(returnUri)) {
                    uri += 'redirectUri=' + encodeURIComponent(returnUri);
                } else if (Coveo.Utils.isNonEmptyString(message)) {
                    uri += 'message=' + encodeURIComponent(message);
                }

                return uri;
            };

            SearchEndpoint.prototype.isJsonp = function () {
                return this.caller.useJsonp;
            };

            SearchEndpoint.prototype.search = function (query, callOptions) {
                var _this = this;
                Coveo.Assert.exists(query);

                this.logger.info('Performing REST query', query);

                callOptions = _.extend({}, callOptions);

                var params = {
                    url: this.buildBaseUri('/'),
                    queryString: this.buildBaseQueryString(callOptions),
                    requestData: query,
                    errorsAsSuccess: true,
                    responseType: 'text',
                    method: 'POST'
                };

                var deferred = this.callWithErrorHandling(params);

                deferred.done(function (results) {
                    return _this.logger.info('REST query successful', results, query);
                });

                return deferred;
            };

            SearchEndpoint.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions) {
                var _this = this;
                Coveo.Assert.exists(documentUniqueId);
                callOptions = _.extend({}, callOptions);

                var params = {
                    url: this.buildBaseUri('/datastream'),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueId, callOptions).concat(["dataStream=" + dataStreamType]),
                    requestData: {},
                    errorsAsSuccess: false,
                    method: 'GET',
                    responseType: 'arraybuffer'
                };

                var deferred = this.callWithErrorHandling(params);
                this.logger.info('Performing REST query for datastream ' + dataStreamType + ' on document uniqueID' + documentUniqueId);
                deferred.done(function (results) {
                    return _this.logger.info('REST query successful', results, documentUniqueId);
                });
                return deferred;
            };

            SearchEndpoint.prototype.getDocumentText = function (documentUniqueID, callOptions) {
                callOptions = _.extend({}, callOptions);

                var params = {
                    url: this.buildBaseUri("/text"),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueID, callOptions),
                    method: "GET",
                    requestData: {},
                    responseType: "text",
                    errorsAsSuccess: true
                };

                return this.callWithErrorHandling(params);
            };

            SearchEndpoint.prototype.getDocumentHtml = function (documentUniqueID, callOptions) {
                callOptions = _.extend({}, callOptions);

                var params = {
                    url: this.buildBaseUri('/html'),
                    queryString: this.buildViewAsHtmlQueryString(documentUniqueID, callOptions),
                    method: "GET",
                    requestData: {},
                    responseType: "document",
                    errorsAsSuccess: true
                };

                return this.callWithErrorHandling(params);
            };

            SearchEndpoint.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions) {
                callOptions = _.extend({}, callOptions);
                return this.buildViewAsHtmlUri("/html", documentUniqueID, callOptions);
            };

            SearchEndpoint.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions) {
                callOptions = _.extend({}, callOptions);
                return this.buildViewAsHtmlUri("/datastream", documentUniqueID, callOptions) + '&dataStream=' + encodeURIComponent(dataStreamType);
            };

            SearchEndpoint.prototype.batchFieldValues = function (request, callOptions) {
                var _this = this;
                Coveo.Assert.exists(request);
                callOptions = _.extend({}, callOptions);

                this.logger.info('Listing field values', request);

                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/values'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: "POST",
                    requestData: request,
                    errorsAsSuccess: true,
                    responseType: 'text'
                };

                this.callWithErrorHandling(params).done(function (data) {
                    return deferred.resolve(data.values);
                }).fail(function (data, error) {
                    return deferred.reject(null, error);
                });

                deferred.done(function (fieldValues) {
                    return _this.logger.info('REST list field values successful', fieldValues, request);
                });

                return deferred;
            };

            SearchEndpoint.prototype.listFieldValues = function (request, callOptions) {
                var _this = this;
                Coveo.Assert.exists(request);
                callOptions = _.extend({}, callOptions);

                this.logger.info('Listing field values', request);

                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/values'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: "POST",
                    requestData: request,
                    errorsAsSuccess: true,
                    responseType: 'text'
                };

                this.callWithErrorHandling(params).done(function (data) {
                    return deferred.resolve(data.values);
                }).fail(function (data, error) {
                    return deferred.reject(null, error);
                });

                deferred.done(function (fieldValues) {
                    return _this.logger.info('REST list field values successful', fieldValues, request);
                });

                return deferred;
            };

            SearchEndpoint.prototype.listFields = function (callOptions) {
                callOptions = _.extend({}, callOptions);

                this.logger.info('Listing fields');

                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/fields'),
                    queryString: this.buildBaseQueryString(callOptions),
                    requestData: {},
                    method: "GET",
                    responseType: "text",
                    errorsAsSuccess: true
                };

                this.callWithErrorHandling(params).done(function (data) {
                    return deferred.resolve(data.fields);
                }).fail(function (data, error) {
                    return deferred.reject(null, error);
                });

                return deferred;
            };

            SearchEndpoint.prototype.tagDocument = function (taggingRequest, callOptions) {
                callOptions = _.extend({}, callOptions);

                this.logger.info('Tagging a document', taggingRequest);

                var deferred = Coveo.$.Deferred();
                var params = {
                    url: this.buildBaseUri('/tag'),
                    queryString: this.buildBaseQueryString(callOptions),
                    method: 'POST',
                    requestData: taggingRequest,
                    errorsAsSuccess: false,
                    responseType: "text"
                };

                this.callWithErrorHandling(params).done(function () {
                    return deferred.resolve(true);
                }).fail(function () {
                    return deferred.reject(false);
                });

                return deferred;
            };

            SearchEndpoint.prototype.createEndpointCaller = function () {
                this.caller = new Rest.EndpointCaller(this.options);
            };

            SearchEndpoint.prototype.buildBaseUri = function (path) {
                Coveo.Assert.isString(path);
                var uri = this.options.restUri;
                uri = this.removeTrailingSlash(uri);
                uri += path;
                if (this.options.isOldRestAPI) {
                    uri = this.addTrailingSlash(uri);
                }
                return uri;
            };

            SearchEndpoint.prototype.buildBaseQueryString = function (callOptions) {
                var queryString = [];

                for (var name in this.options.queryStringArguments) {
                    queryString.push(name + '=' + encodeURIComponent(this.options.queryStringArguments[name]));
                }

                if (_.isArray(callOptions.authentication) && callOptions.authentication.length != 0) {
                    queryString.push('authentication=' + callOptions.authentication.join(','));
                }

                return queryString;
            };

            SearchEndpoint.prototype.buildViewAsHtmlUri = function (path, documentUniqueID, callOptions) {
                Coveo.Assert.isNonEmptyString(documentUniqueID);

                var queryString = this.buildViewAsHtmlQueryString(documentUniqueID, callOptions);

                // Since those uri will be loaded in a frame or tab, we must include any
                // authentication token as a query string argument instead of relying on
                // endpoint caller for this.
                if (Coveo.Utils.isNonEmptyString(this.options.accessToken)) {
                    queryString.push('access_token=' + encodeURIComponent(this.options.accessToken));
                }

                var baseUri = this.buildBaseUri(path);

                return baseUri + '?' + queryString.join('&');
            };

            SearchEndpoint.prototype.buildViewAsHtmlQueryString = function (uniqueId, callOptions) {
                var queryString = this.buildBaseQueryString(callOptions);

                queryString.push("uniqueId=" + encodeURIComponent(uniqueId));

                if (callOptions.query != null) {
                    queryString.push("q=" + encodeURIComponent(callOptions.query));
                    queryString.push('enableNavigation=true');
                }

                if (callOptions.requestedOutputSize) {
                    queryString.push("requestedOutputSize=" + encodeURIComponent(callOptions.requestedOutputSize.toString()));
                }

                return queryString;
            };

            SearchEndpoint.prototype.callWithErrorHandling = function (params) {
                var deferred = Coveo.$.Deferred();
                this.performOneCall(params, deferred, true);
                return deferred;
            };

            SearchEndpoint.prototype.performOneCall = function (params, outerDeferred, autoRenewToken) {
                var _this = this;
                this.caller.call(params).done(function (response) {
                    response.data.clientDuration = response.duration;
                    outerDeferred.resolve(response.data, params.requestData);
                }).fail(function (response) {
                    if (autoRenewToken && _this.canRenewAccessToken() && _this.isAccessTokenExpiredStatus(response.statusCode)) {
                        _this.renewAccessToken().done(function () {
                            return _this.performOneCall(params, outerDeferred, false);
                        }).fail(function () {
                            return _this.handleErrorResponse(response, outerDeferred);
                        });
                    } else if (response.statusCode == 0 && _this.isRedirecting) {
                        //The page is getting redirected
                        _.defer(function () {
                            outerDeferred.resolve();
                        });
                    } else {
                        _this.handleErrorResponse(response, outerDeferred);
                    }
                });
            };

            SearchEndpoint.prototype.handleErrorResponse = function (errorResponse, outerDeferred) {
                if (this.isMissingAuthenticationProviderStatus(errorResponse.statusCode)) {
                    outerDeferred.reject(null, new Rest.MissingAuthenticationError(errorResponse.data['provider']));
                } else if (errorResponse.data && errorResponse.data.message) {
                    outerDeferred.reject(null, new Rest.QueryError(errorResponse));
                } else {
                    outerDeferred.reject(null, new Rest.AjaxError("Request Error", errorResponse.statusCode));
                }
            };

            SearchEndpoint.prototype.canRenewAccessToken = function () {
                return Coveo.Utils.isNonEmptyString(this.options.accessToken) && _.isFunction(this.options.renewAccessToken);
            };

            SearchEndpoint.prototype.isAccessTokenExpiredStatus = function (status) {
                return status == 419;
            };

            SearchEndpoint.prototype.renewAccessToken = function () {
                var _this = this;
                this.logger.info("Renewing expired access token");

                return this.options.renewAccessToken().done(function (token) {
                    Coveo.Assert.isNonEmptyString(token);
                    _this.options.accessToken = token;
                    _this.createEndpointCaller();
                }).fail(function (e) {
                    _this.logger.error("Failed to renew access token", e);
                });
            };

            SearchEndpoint.prototype.isMissingAuthenticationProviderStatus = function (status) {
                return status == 402;
            };

            SearchEndpoint.prototype.addTrailingSlash = function (uri) {
                if (!this.hasTrailingSlash(uri)) {
                    uri += "/";
                }
                return uri;
            };

            SearchEndpoint.prototype.removeTrailingSlash = function (uri) {
                if (this.hasTrailingSlash(uri)) {
                    uri = uri.substr(0, uri.length - 1);
                }
                return uri;
            };

            SearchEndpoint.prototype.hasTrailingSlash = function (uri) {
                return uri.charAt(uri.length - 1) == '/';
            };
            SearchEndpoint.endpoints = {};
            return SearchEndpoint;
        })();
        Rest.SearchEndpoint = SearchEndpoint;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var SearchEndpointWithDefaultCallOptions = (function () {
            function SearchEndpointWithDefaultCallOptions(endpoint, callOptions) {
                this.endpoint = endpoint;
                this.callOptions = callOptions;
                this.options = endpoint.options;
            }
            SearchEndpointWithDefaultCallOptions.prototype.getBaseUri = function () {
                return this.endpoint.getBaseUri();
            };

            SearchEndpointWithDefaultCallOptions.prototype.getAuthenticationProviderUri = function (provider, returnUri, message) {
                return this.endpoint.getAuthenticationProviderUri(provider, returnUri, message);
            };

            SearchEndpointWithDefaultCallOptions.prototype.isJsonp = function () {
                return this.endpoint.isJsonp();
            };

            SearchEndpointWithDefaultCallOptions.prototype.search = function (query, callOptions) {
                return this.endpoint.search(query, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.tagDocument = function (taggingRequest, callOptions) {
                return this.endpoint.tagDocument(taggingRequest, this.enrichCallOptions(taggingRequest));
            };

            SearchEndpointWithDefaultCallOptions.prototype.getRawDataStream = function (documentUniqueId, dataStreamType, callOptions) {
                return this.endpoint.getRawDataStream(documentUniqueId, dataStreamType, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.getDocumentText = function (documentUniqueID, callOptions) {
                return this.endpoint.getDocumentText(documentUniqueID, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.getDocumentHtml = function (documentUniqueID, callOptions) {
                return this.endpoint.getDocumentHtml(documentUniqueID, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.getViewAsHtmlUri = function (documentUniqueID, callOptions) {
                return this.endpoint.getViewAsHtmlUri(documentUniqueID, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.getViewAsDatastreamUri = function (documentUniqueID, dataStreamType, callOptions) {
                return this.endpoint.getViewAsDatastreamUri(documentUniqueID, dataStreamType, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.listFieldValues = function (request, callOptions) {
                return this.endpoint.listFieldValues(request, this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.listFields = function (callOptions) {
                return this.endpoint.listFields(this.enrichCallOptions(callOptions));
            };

            SearchEndpointWithDefaultCallOptions.prototype.enrichCallOptions = function (callOptions) {
                return _.extend({}, callOptions, this.callOptions);
            };
            return SearchEndpointWithDefaultCallOptions;
        })();
        Rest.SearchEndpointWithDefaultCallOptions = SearchEndpointWithDefaultCallOptions;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        var AnalyticsEndpoint = (function () {
            function AnalyticsEndpoint(options) {
                this.options = options;
                this.logger = new Coveo.Logger(this);
            }
            AnalyticsEndpoint.prototype.sendSearchEvents = function (searchEvents) {
                if (searchEvents.length > 0) {
                    this.logger.info('Logging analytics search events', searchEvents);
                    this.sendEventToApi(searchEvents, 'searches', 'searchEvents');
                }
            };

            AnalyticsEndpoint.prototype.sendDocumentViewEvent = function (documentViewEvent) {
                Coveo.Assert.exists(documentViewEvent);
                this.logger.info('Logging analytics document view', documentViewEvent);
                this.sendEventToApi(documentViewEvent, 'click', 'clickEvent');
            };

            AnalyticsEndpoint.prototype.sendCustomEvent = function (customEvent) {
                Coveo.Assert.exists(customEvent);
                this.logger.info('Logging analytics custom event', customEvent);
                this.sendEventToApi(customEvent, 'custom', 'customEvent');
            };

            AnalyticsEndpoint.prototype.getTopQueries = function (params) {
                var url = Coveo.QueryUtils.mergePath(this.options.serviceUrl, "/rest/" + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + "/stats/topQueries");
                return this.getFromService(url, params);
            };

            AnalyticsEndpoint.prototype.sendEventToApi = function (data, path, paramName) {
                var url = Coveo.QueryUtils.mergePath(this.options.serviceUrl, '/rest/' + (AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION || AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION) + '/analytics/' + path);
                url = this.appendUrlParamSign(url);
                url += paramName + '=' + encodeURIComponent(JSON.stringify(data));
                if (this.options.token && this.options.token != "") {
                    url += "&access_token=" + encodeURIComponent(this.options.token);
                }

                if (Coveo.Utils.isNonEmptyString(this.options.userId)) {
                    url += "&user=" + encodeURIComponent(this.options.userId);
                }

                return Coveo.$.ajax({
                    url: url,
                    dataType: 'jsonp'
                });
            };

            AnalyticsEndpoint.prototype.appendUrlParamSign = function (url) {
                if (url.charAt(url.length - 1) == "?") {
                    return url;
                } else {
                    return url + "?";
                }
            };

            AnalyticsEndpoint.prototype.getFromService = function (url, params) {
                var paramsToSend = (this.options.token && this.options.token != "") ? Coveo.$.extend({ "access_token": this.options.token }, params) : params;

                return Coveo.$.ajax({
                    url: this.appendUrlParamSign(url) + this.buildQueryStringFromParam(paramsToSend),
                    dataType: 'jsonp'
                });
            };

            AnalyticsEndpoint.prototype.buildQueryStringFromParam = function (params) {
                var linked = _.map(_.pairs(params), function (pair) {
                    return pair[0] + "=" + pair[1];
                });
                return linked.join("&");
            };
            AnalyticsEndpoint.DEFAULT_ANALYTICS_URI = "https://usageanalytics.coveo.com";
            AnalyticsEndpoint.DEFAULT_ANALYTICS_VERSION = "v9";
            AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
            return AnalyticsEndpoint;
        })();
        Rest.AnalyticsEndpoint = AnalyticsEndpoint;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Rest) {
        /*
        Decorates the Analytics Endpoint and triggers specific events for analytics
        */
        var APIAnalyticsBuilder = (function () {
            function APIAnalyticsBuilder() {
            }
            APIAnalyticsBuilder.convertSearchEventToAPI = function (searchEvent) {
                var customMetadatas = {};
                customMetadatas["customMetadata1"] = searchEvent.customMetadata1;
                customMetadatas["customMetadata2"] = searchEvent.customMetadata2;
                customMetadatas["customMetadata3"] = searchEvent.customMetadata3;
                customMetadatas["customMetadata4"] = searchEvent.customMetadata4;
                customMetadatas["customMetadata5"] = searchEvent.customMetadata5;

                var apiSearchEvent = {
                    advancedQuery: searchEvent.advancedQuery,
                    customMetadatas: customMetadatas,
                    device: searchEvent.device,
                    didYouMean: searchEvent.didYouMean,
                    facets: APIAnalyticsBuilder.convertFacetToAPI(searchEvent.facets),
                    language: searchEvent.language,
                    pageNumber: searchEvent.pageNumber,
                    queryText: searchEvent.queryText,
                    responseTime: searchEvent.responseTime,
                    results: APIAnalyticsBuilder.convertResultsToAPI(searchEvent.results),
                    resultsPerPage: searchEvent.resultsPerPage,
                    searchHub: searchEvent.originLevel1,
                    searchInterface: searchEvent.originLevel2,
                    searchQueryUid: searchEvent.searchQueryUid,
                    type: searchEvent.actionType,
                    actionCause: searchEvent.actionCause
                };
                return apiSearchEvent;
            };

            APIAnalyticsBuilder.convertFacetToAPI = function (facets) {
                var apiFacets = _.map(facets, function (facet) {
                    return {
                        fieldName: facet.fieldName,
                        mode: facet.mode,
                        name: facet.name,
                        selections: APIAnalyticsBuilder.convertFacetSelectionToAPI(facet.selections),
                        sort: facet.sort
                    };
                });
                return apiFacets;
            };

            APIAnalyticsBuilder.convertFacetSelectionToAPI = function (facetSelections) {
                var apiFacetSelections = _.map(facetSelections, function (facetSelection) {
                    return {
                        entryName: facetSelection.entryName,
                        status: facetSelection.status
                    };
                });
                return apiFacetSelections;
            };

            APIAnalyticsBuilder.convertResultsToAPI = function (results) {
                var apiResults = _.map(results, function (result) {
                    return {
                        clickUri: result.clickUri,
                        documentUri: result.documentUri,
                        documentUriHash: result.documentUriHash
                    };
                });
                return apiResults;
            };

            APIAnalyticsBuilder.convertDocumentViewToAPI = function (documentView) {
                var customMetadatas = {};
                customMetadatas["customMetadata1"] = documentView.customMetadata1;
                customMetadatas["customMetadata2"] = documentView.customMetadata2;
                customMetadatas["customMetadata3"] = documentView.customMetadata3;
                customMetadatas["customMetadata4"] = documentView.customMetadata4;
                customMetadatas["customMetadata5"] = documentView.customMetadata5;

                var apiDocumentView = {
                    collectionName: documentView.collectionName,
                    device: documentView.device,
                    documentPosition: documentView.documentPosition,
                    title: documentView.customMetadata1,
                    documentClickUri: documentView.customMetadata2,
                    documentUri: documentView.documentUri,
                    documentUriHash: documentView.documentUriHash,
                    language: documentView.language,
                    responseTime: documentView.responseTime,
                    searchHub: documentView.originLevel1,
                    searchInterface: documentView.originLevel2,
                    searchQueryUid: documentView.searchQueryUid,
                    sourceName: documentView.sourceName,
                    viewMethod: documentView.viewMethod,
                    customMetadatas: customMetadatas,
                    actionCause: documentView.actionCause
                };
                return apiDocumentView;
            };

            APIAnalyticsBuilder.convertCustomEventToAPI = function (customEvent) {
                var customMetadatas = {};
                customMetadatas["customMetadata1"] = customEvent.customMetadata1;
                customMetadatas["customMetadata2"] = customEvent.customMetadata2;
                customMetadatas["customMetadata3"] = customEvent.customMetadata3;
                customMetadatas["customMetadata4"] = customEvent.customMetadata4;
                customMetadatas["customMetadata5"] = customEvent.customMetadata5;

                var apiCustomEvent = {
                    actionCause: customEvent.actionCause,
                    actionType: customEvent.actionType,
                    device: customEvent.device,
                    language: customEvent.language,
                    responseTime: customEvent.responseTime,
                    searchHub: customEvent.originLevel1,
                    searchInterface: customEvent.originLevel2,
                    customMetadatas: customMetadatas
                };
                return apiCustomEvent;
            };
            return APIAnalyticsBuilder;
        })();
        Rest.APIAnalyticsBuilder = APIAnalyticsBuilder;
    })(Coveo.Rest || (Coveo.Rest = {}));
    var Rest = Coveo.Rest;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var JsRenderTemplate = (function () {
            function JsRenderTemplate(template) {
                this.template = template;
                Coveo.Assert.check(JsRenderTemplate.isLibraryAvailable(), 'The JsRender library must be loaded within the page');

                Coveo.Assert.exists(template);
                this.logger = new Coveo.Logger(this);
            }
            JsRenderTemplate.prototype.instantiateToString = function (data) {
                return Coveo.$(this.template).render(data);
            };

            JsRenderTemplate.prototype.instantiateToElement = function (data) {
                var html = Coveo.$(this.template).render(data);

                var element = Ui.JQueryUtils.htmlToDom(html);

                this.logger.trace('Instantiated result template', data, element);

                return element;
            };

            JsRenderTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new JsRenderTemplate(element);
            };

            JsRenderTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(Coveo.$['views']);
            };
            JsRenderTemplate.mimeTypes = [
                'text/jsrender',
                'text/jsrender-template',
                'text/x-jsrender',
                'text/x-jsrender-template'
            ];
            return JsRenderTemplate;
        })();
        Ui.JsRenderTemplate = JsRenderTemplate;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        _.templateSettings = {
            evaluate: /(?:<%|{{)([\s\S]+?)(?:%>|}})/g,
            interpolate: /(?:<%|{{)=([\s\S]+?)(?:%>|}})/g,
            escape: /(?:<%|{{)-([\s\S]+?)(?:%>|}})/g
        };

        var UnderscoreTemplate = (function () {
            function UnderscoreTemplate(template) {
                this.logger = new Coveo.Logger(this);

                if (Coveo.Utils.isHtmlElement(template)) {
                    Coveo.Assert.exists(template);
                    var templateString = Coveo.$(template).html();
                    this.template = _.template(templateString);
                } else if (template instanceof Function) {
                    this.template = template;
                }
            }
            UnderscoreTemplate.prototype.instantiateToString = function (data) {
                var extended = _.extend({}, data, UnderscoreTemplate.templateHelpers);
                return this.template(extended);
            };

            UnderscoreTemplate.prototype.instantiateToElement = function (data) {
                var html = this.instantiateToString(data);

                var element = Ui.JQueryUtils.htmlToDom(html);

                this.logger.trace('Instantiated result template', data, element);

                return element;
            };

            UnderscoreTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new UnderscoreTemplate(element);
            };

            UnderscoreTemplate.registerTemplateHelper = function (helperName, helper) {
                UnderscoreTemplate.templateHelpers[helperName] = helper;
            };

            UnderscoreTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(window['_']);
            };
            UnderscoreTemplate.templateHelpers = {};

            UnderscoreTemplate.mimeTypes = [
                'text/underscore',
                'text/underscore-template',
                'text/x-underscore',
                'text/x-underscore-template'
            ];
            return UnderscoreTemplate;
        })();
        Ui.UnderscoreTemplate = UnderscoreTemplate;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HandlebarsTemplate = (function () {
            function HandlebarsTemplate(element) {
                Coveo.Assert.check(HandlebarsTemplate.isLibraryAvailable(), 'The Handlebars library must be loaded within the page');

                Coveo.Assert.exists(element);
                this.logger = new Coveo.Logger(this);

                var templateString = Coveo.$(element).html();
                this.template = Handlebars.compile(templateString);
            }
            HandlebarsTemplate.prototype.instantiateToString = function (data) {
                return this.template(data);
            };

            HandlebarsTemplate.prototype.instantiateToElement = function (data) {
                var html = this.template(data);

                var element = Ui.JQueryUtils.htmlToDom(html);

                this.logger.trace('Instantiated result template', data, element);

                return element;
            };

            HandlebarsTemplate.create = function (element) {
                Coveo.Assert.exists(element);
                return new HandlebarsTemplate(element);
            };

            HandlebarsTemplate.isLibraryAvailable = function () {
                return Coveo.Utils.exists(window['Handlebars']);
            };
            HandlebarsTemplate.mimeTypes = [
                'text/handlebars',
                'text/handlebars-template',
                'text/x-handlebars',
                'text/x-handlebars-template'
            ];
            return HandlebarsTemplate;
        })();
        Ui.HandlebarsTemplate = HandlebarsTemplate;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultTemplate = (function () {
            function DefaultResultTemplate() {
                this.logger = new Coveo.Logger(this);
            }
            DefaultResultTemplate.prototype.instantiateToString = function (queryResult) {
                Coveo.Assert.exists(queryResult);

                var elem = this.instantiateToElement(queryResult);
                return Coveo.$(elem).html();
            };

            DefaultResultTemplate.prototype.instantiateToElement = function (queryResult) {
                Coveo.Assert.exists(queryResult);

                var result = Coveo.$('<div></div>');
                var header = Coveo.$('<div class="coveo-header"></div>').appendTo(result);
                Coveo.$('<a class="coveo-title"></a>').text(queryResult.title).attr('href', queryResult.clickUri).appendTo(header);
                var element = result.get(0);

                this.logger.trace('Instantiated default result template', element);

                return element;
            };
            return DefaultResultTemplate;
        })();
        Ui.DefaultResultTemplate = DefaultResultTemplate;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var TemplateCache = (function () {
            function TemplateCache() {
            }
            TemplateCache.registerTemplate = function (name, template) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(template);
                TemplateCache.templates[name] = template;
            };

            TemplateCache.getTemplate = function (name) {
                Coveo.Assert.exists(TemplateCache.templates[name]);
                return TemplateCache.templates[name];
            };

            TemplateCache.scanAndRegisterTemplates = function () {
                // Here we take care not to scan for templates for which the base library
                // is not available. Case in point: someone was using the JS UI on a page
                // that was also using Handlebars, but our code was initialized before
                // the Handlebars library (loaded through AMD).
                if (Ui.UnderscoreTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterUnderscoreTemplates();
                }
                if (Ui.JsRenderTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterJsRenderTemplates();
                }
                if (Ui.HandlebarsTemplate.isLibraryAvailable()) {
                    TemplateCache.scanAndRegisterHandlebarsTemplates();
                }
            };

            TemplateCache.scanAndRegisterUnderscoreTemplates = function () {
                _.each(Ui.UnderscoreTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.UnderscoreTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), function (data) {
                            return template.instantiateToString(data);
                        });
                    });
                });
            };

            TemplateCache.scanAndRegisterJsRenderTemplates = function () {
                _.each(Ui.JsRenderTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.JsRenderTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), function (data) {
                            return template.instantiateToString(data);
                        });
                    });
                });
            };

            TemplateCache.scanAndRegisterHandlebarsTemplates = function () {
                _.each(Ui.HandlebarsTemplate.mimeTypes, function (type) {
                    Coveo.$("script[id][type='" + type + "']").each(function (index, elem) {
                        var template = new Ui.HandlebarsTemplate(elem);
                        TemplateCache.registerTemplate(Coveo.$(elem).attr('id'), function (data) {
                            return template.instantiateToString(data);
                        });
                    });
                });
            };
            TemplateCache.templates = {};
            return TemplateCache;
        })();
        Ui.TemplateCache = TemplateCache;

        Coveo.$(function () {
            TemplateCache.scanAndRegisterTemplates();
        });
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        

        var TemplateHelpers = (function () {
            function TemplateHelpers() {
            }
            TemplateHelpers.registerTemplateHelper = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);

                if (Ui.UnderscoreTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInUnderscore(name, helper);
                }

                if (Ui.JsRenderTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInJsRender(name, helper);
                }

                if (Ui.HandlebarsTemplate.isLibraryAvailable()) {
                    TemplateHelpers.registerTemplateHelperInHandlebars(name, helper);
                }

                TemplateHelpers.helpers[name] = helper;
            };

            TemplateHelpers.getHelper = function (name) {
                return TemplateHelpers.helpers[name];
            };

            TemplateHelpers.registerTemplateHelperInJsRender = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);

                // We must arrange for our helpers to be called with the data as 'this'
                var dict = {};
                dict[name] = function () {
                    var args = [];
                    for (var _i = 0; _i < (arguments.length - 0); _i++) {
                        args[_i] = arguments[_i + 0];
                    }
                    return helper.apply(this.data, args);
                };

                Coveo.$.views.helpers(dict);
            };

            TemplateHelpers.registerTemplateHelperInHandlebars = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                Coveo.Assert.check(Ui.HandlebarsTemplate.isLibraryAvailable());

                Handlebars.registerHelper(name, function () {
                    var args = [];
                    for (var _i = 0; _i < (arguments.length - 0); _i++) {
                        args[_i] = arguments[_i + 0];
                    }
                    // If the last argument is a "hash", we assume it's an option dictionary
                    // and we move the hash part to the top-level.
                    var lastArgument = args[args.length - 1];
                    if (_.isObject(lastArgument) && Coveo.Utils.exists(lastArgument.hash)) {
                        args[args.length - 1] = lastArgument.hash;
                    }

                    // We must use SafeString to prevent Handlebars from escaping the return value of our helpers.
                    return new Handlebars.SafeString(helper.apply(this, args));
                });
            };

            TemplateHelpers.registerTemplateHelperInUnderscore = function (name, helper) {
                Coveo.Assert.isNonEmptyString(name);
                Coveo.Assert.exists(helper);
                Coveo.Assert.check(Ui.UnderscoreTemplate.isLibraryAvailable());

                Ui.UnderscoreTemplate.registerTemplateHelper(name, helper);
            };
            TemplateHelpers.helpers = {};
            return TemplateHelpers;
        })();
        Ui.TemplateHelpers = TemplateHelpers;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        Ui.TemplateHelpers.registerTemplateHelper('javascriptEncode', function (value) {
            return Coveo.Utils.exists(value) ? Coveo.StringUtils.javascriptEncode(value) : undefined;
        });

        Ui.TemplateHelpers.registerTemplateHelper('shorten', function (content, length, highlights, cssClass) {
            var strAndHoles = Coveo.StringAndHoles.shortenString(content, length, '...');

            if (Coveo.Utils.exists(highlights)) {
                return Coveo.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
            } else {
                return strAndHoles.value;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('shortenPath', function (content, length, highlights, cssClass) {
            var strAndHoles = Coveo.StringAndHoles.shortenPath(content, length);

            if (Coveo.Utils.exists(highlights)) {
                return Coveo.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
            } else {
                return strAndHoles.value;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('shortenUri', function (content, length, highlights, cssClass) {
            var strAndHoles = Coveo.StringAndHoles.shortenUri(content, length);

            if (Coveo.Utils.exists(highlights)) {
                return Coveo.HighlightUtils.highlightString(strAndHoles.value, highlights, strAndHoles.holes, cssClass || 'highlight');
            } else {
                return strAndHoles.value;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('highlight', function (content, highlights, cssClass) {
            if (Coveo.Utils.exists(content)) {
                if (Coveo.Utils.exists(highlights)) {
                    return Coveo.HighlightUtils.highlightString(content, highlights, null, cssClass || 'highlight');
                } else {
                    return content;
                }
            } else {
                return undefined;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('highlightStreamText', function (content, termsToHighlight, opts) {
            if (typeof termsToHighlight === "undefined") { termsToHighlight = resolveQueryResultFromCallStack().termsToHighlight; }
            if (Coveo.Utils.exists(content)) {
                if (Coveo.Utils.isNonEmptyArray(termsToHighlight)) {
                    return Coveo.highlightStreamText(content, termsToHighlight, opts);
                } else {
                    return content;
                }
            } else {
                return undefined;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('highlightStreamHTML', function (content, termsToHighlight, opts) {
            if (typeof termsToHighlight === "undefined") { termsToHighlight = resolveQueryResultFromCallStack().termsToHighlight; }
            if (Coveo.Utils.exists(content)) {
                if (Coveo.Utils.isNonEmptyArray(termsToHighlight)) {
                    return Coveo.highlightStreamHTML(content, termsToHighlight, opts);
                } else {
                    return content;
                }
            } else {
                return undefined;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('number', function (value, options) {
            if (Coveo.Utils.exists(value)) {
                if (_.isString(options)) {
                    return Coveo.StringUtils.htmlEncode(Globalize.format(value, options));
                } else {
                    return Coveo.StringUtils.htmlEncode(value.toString());
                }
            } else {
                return undefined;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('date', function (value, options) {
            return Coveo.DateUtils.dateToString(Coveo.DateUtils.convertFromJsonDateIfNeeded(value), options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('time', function (value, options) {
            return Coveo.DateUtils.timeToString(Coveo.DateUtils.convertFromJsonDateIfNeeded(value), options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('dateTime', function (value, options) {
            return Coveo.DateUtils.dateTimeToString(Coveo.DateUtils.convertFromJsonDateIfNeeded(value), options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('emailDateTime', function (value, options) {
            var defaultOptions = {};
            defaultOptions.includeTimeIfThisWeek = true;
            var optionsToUse = Coveo.$.extend({}, defaultOptions, options);
            return value ? Coveo.DateUtils.dateTimeToString(Coveo.DateUtils.convertFromJsonDateIfNeeded(value), optionsToUse) : undefined;
        });

        Ui.TemplateHelpers.registerTemplateHelper('currency', function (value, options) {
            return Coveo.CurrencyUtils.currencyToString(value, options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('email', function (value, companyDomain, me, lengthLimit, truncateName) {
            if (typeof lengthLimit === "undefined") { lengthLimit = 2; }
            if (typeof truncateName === "undefined") { truncateName = false; }
            if (_.isString(value)) {
                var listOfAddresses = Coveo.EmailUtils.splitSemicolonSeparatedListOfEmailAddresses(value);
                return Coveo.EmailUtils.emailAddressesToHyperlinks(listOfAddresses, companyDomain, me, lengthLimit, truncateName);
            } else if (_.isArray(value)) {
                return Coveo.EmailUtils.emailAddressesToHyperlinks(value, companyDomain, me, lengthLimit, truncateName);
            } else {
                return undefined;
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper("excessEmailToggle", function (target) {
            Coveo.$(target).removeClass("coveo-active");
            if (Coveo.$(target).hasClass("coveo-emails-excess-collapsed")) {
                Coveo.$(target).siblings(".coveo-emails-excess-expanded").addClass("coveo-active");
            } else if (Coveo.$(target).hasClass("coveo-hide-expanded")) {
                Coveo.$(target).parent().addClass("coveo-inactive");
                Coveo.$(target).parent().siblings(".coveo-emails-excess-collapsed").addClass("coveo-active");
            }
            return undefined;
        });

        Ui.TemplateHelpers.registerTemplateHelper('anchor', function (href, options) {
            return Coveo.AnchorUtils.buildAnchor(href, options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('image', function (src, options) {
            return Coveo.ImageUtils.buildImage(src, options);
        });

        Ui.TemplateHelpers.registerTemplateHelper('thumbnail', function (result, endpoint, options) {
            if (typeof result === "undefined") { result = resolveQueryResultFromCallStack(); }
            if (typeof endpoint === "undefined") { endpoint = "default"; }
            if (Coveo.QueryUtils.hasThumbnail(result)) {
                return Coveo.ImageUtils.buildImageFromResult(result, Coveo.Rest.SearchEndpoint.endpoints[endpoint], options);
            }
        });

        Ui.TemplateHelpers.registerTemplateHelper('fromFileTypeToIcon', function (result, options) {
            if (typeof result === "undefined") { result = resolveQueryResultFromCallStack(); }
            if (typeof options === "undefined") { options = {}; }
            var classToUse = 'coveo-icon';
            if (options.classToUse) {
                classToUse += " " + options.classToUse;
            } else if (options.fileTypeToUse) {
                classToUse += " sysfiletype " + options.fileTypeToUse;
            } else {
                var sysfiletype = result.raw["sysfiletype"];

                //Sometimes, sysfiletype begins with a period.
                if (sysfiletype && sysfiletype[0] && sysfiletype[0] == ".") {
                    sysfiletype = sysfiletype.substring(1);
                }
                classToUse += " sysfiletype " + (sysfiletype ? sysfiletype : "");
            }
            return "<span class='" + classToUse + "'></span>";
        });

        Ui.TemplateHelpers.registerTemplateHelper('attrEncode', function (value) {
            return ('' + value).replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        });

        Ui.TemplateHelpers.registerTemplateHelper('loadTemplates', function (templatesToLoad, once) {
            if (typeof once === "undefined") { once = true; }
            var ret = "";
            var data = resolveQueryResultFromCallStack();
            var atLeastOneWasLoaded = false;
            var toLoad = templatesToLoad;
            var defaultTmpl;
            _.each(templatesToLoad, function (value, key, obj) {
                if (value == "default") {
                    defaultTmpl = key;
                }
            });
            if (defaultTmpl != undefined) {
                toLoad = _.omit(templatesToLoad, defaultTmpl);
            }
            _.each(toLoad, function (condition, id, obj) {
                if (!atLeastOneWasLoaded || !once) {
                    atLeastOneWasLoaded = atLeastOneWasLoaded || condition;
                    ret += Ui.TemplateHelpers.getHelper("loadTemplate")(id, condition, data);
                }
            });
            if (!atLeastOneWasLoaded && defaultTmpl != undefined) {
                ret += Ui.TemplateHelpers.getHelper("loadTemplate")(defaultTmpl, true, data);
            }
            return ret;
        });

        Ui.TemplateHelpers.registerTemplateHelper('loadTemplate', function (id, condition, data) {
            if (typeof condition === "undefined") { condition = true; }
            if (Coveo.Utils.isNullOrUndefined(data)) {
                data = resolveQueryResultFromCallStack();
            }
            if (condition) {
                return Ui.TemplateCache.getTemplate(id)(data);
            }
            return "";
        });

        function resolveQueryResultFromCallStack() {
            var calledBy = arguments.callee.caller;
            var queryResult = calledBy.arguments[0];
            var numOfCall = 0;
            while (calledBy != undefined && (queryResult == undefined || queryResult.uri == undefined) && numOfCall < 100) {
                queryResult = calledBy.arguments[0];
                calledBy = calledBy.caller;
                numOfCall++;
            }
            return queryResult;
        }
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var CoveoJQuery = (function () {
            function CoveoJQuery() {
            }
            CoveoJQuery.registerDefaultOptions = function (element, options) {
                var existing = Coveo.$(element).data('CoveoDefaultOptions') || {};
                var updated = Coveo.$.extend(true, {}, existing, options);
                Coveo.$(element).data('CoveoDefaultOptions', updated);
            };

            CoveoJQuery.resolveDefaultOptions = function (element, options) {
                var optionsForThisElement = Coveo.$(element).data('CoveoDefaultOptions');

                var optionsSoFar;
                if (Coveo.Utils.exists(optionsForThisElement)) {
                    optionsSoFar = Coveo.$.extend(true, {}, optionsForThisElement, options);
                } else {
                    optionsSoFar = options;
                }

                if (element.parentElement) {
                    return CoveoJQuery.resolveDefaultOptions(element.parentElement, optionsSoFar);
                } else {
                    return optionsSoFar;
                }
            };

            CoveoJQuery.registerAutoCreateComponent = function (componentClass) {
                Coveo.Assert.exists(componentClass);
                Coveo.Assert.exists(componentClass.ID);
                Coveo.Assert.doesNotExists(CoveoJQuery.autoCreateComponents[componentClass.ID]);
                Coveo.Assert.doesNotExists(CoveoJQuery.namedMethods[componentClass.ID]);
                CoveoJQuery.autoCreateComponents[componentClass.ID] = componentClass;
            };

            CoveoJQuery.isComponentClassIdRegistered = function (componentClassId) {
                return Coveo.Utils.exists(CoveoJQuery.autoCreateComponents[componentClassId]);
            };

            CoveoJQuery.initializeSearchInterface = function (element, options) {
                Coveo.Assert.exists(element);

                this.logger.info("Internal Coveo JQuery version", Coveo.$.fn.jquery);

                if (Ui.Device.isIE8or9())
                    Coveo.$('html').addClass('ie8or9');

                options = CoveoJQuery.resolveDefaultOptions(element, options);

                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.beforeInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.beforeInitialization);

                CoveoJQuery.initComponents(element, options);
                CoveoJQuery.initExternalComponents(element, options);

                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.afterComponentsInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.afterComponentsInitialization);

                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.restoreHistoryState);

                CoveoJQuery.performInitFunctionsOption(options, Coveo.Events.InitializationEvents.afterInitialization);
                Coveo.$(element).trigger(Coveo.Events.InitializationEvents.afterInitialization);

                var searchInterface = Ui.Component.get(element, Ui.SearchInterface);

                // Elements that have the coveo-hide-until-loaded class are hidden by default.
                // Now that we're loaded (and before the first query returns), we can remove
                // the class. Also, we add a class that gives the opportunity for an animation
                // to apply at startup, such as a fade-in that comes in by default.
                Coveo.$('.coveo-hide-until-loaded').removeClass('coveo-hide-until-loaded').addClass('coveo-show-after-loaded');

                if (searchInterface.options.autoTriggerQuery) {
                    Ui.Component.get(element, Coveo.Controllers.QueryController).executeQuery();
                }
            };

            CoveoJQuery.initializeSearchInterfaceForSearchBox = function (element, searchPageUri, options) {
                Coveo.Assert.isNonEmptyString(searchPageUri);

                var searchInterfaceOptions = {};
                searchInterfaceOptions.searchPageUri = searchPageUri;
                searchInterfaceOptions.autoTriggerQuery = false;
                searchInterfaceOptions.hideUntilFirstQuery = false;
                searchInterfaceOptions.enableHistory = false;

                options = _.extend({}, options, { SearchInterface: searchInterfaceOptions });
                CoveoJQuery.initializeSearchInterface(element, options);
            };

            CoveoJQuery.performInitFunctionsOption = function (options, event) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[event]);
                }
            };

            CoveoJQuery.performPreInitFunctions = function (options) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[Coveo.Events.InitializationEvents.beforeInitialization]);
                }
            };

            CoveoJQuery.performPostInitFunction = function (options) {
                if (Coveo.Utils.exists(options)) {
                    CoveoJQuery.performFunctions(options[Coveo.Events.InitializationEvents.afterInitialization]);
                }
            };

            CoveoJQuery.performFunctions = function (option) {
                if (Coveo.Utils.exists(option)) {
                    _.each(option, function (func) {
                        if (typeof func == "function") {
                            func();
                        }
                    });
                }
            };

            CoveoJQuery.initComponents = function (element, options) {
                if (typeof options === "undefined") { options = {}; }
                // Arrange for init options to be remembered by SearchInterface
                options.SearchInterface = options.SearchInterface || {};
                (options.SearchInterface).initOptions = options;

                var searchInterface = new Ui.SearchInterface(element, options.SearchInterface, options.Analytics);
                var initParameters = Coveo.$.extend({}, { options: options }, searchInterface.getBindings());
                CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
            };

            CoveoJQuery.initExternalComponents = function (element, options) {
                if (options && options["externalComponents"]) {
                    var searchInterface = Coveo.$(element).coveo(Coveo.Ui.SearchInterface);
                    var queryStateModel = Coveo.$(element).coveo(Coveo.Models.QueryStateModel);
                    var componentStateModel = Coveo.$(element).coveo(Coveo.Models.ComponentStateModel);
                    var queryController = Coveo.$(element).coveo(Coveo.Controllers.QueryController);
                    var componentOptionsModel = Coveo.$(element).coveo(Coveo.Models.ComponentOptionsModel);
                    var usageAnalytics = searchInterface.usageAnalytics;
                    Coveo.Assert.exists(searchInterface);
                    Coveo.Assert.exists(queryStateModel);
                    Coveo.Assert.exists(queryController);
                    Coveo.Assert.exists(componentStateModel);
                    Coveo.Assert.exists(usageAnalytics);
                    var initParameters = {
                        options: options,
                        searchInterface: searchInterface,
                        queryStateModel: queryStateModel,
                        queryController: queryController,
                        usageAnalytics: usageAnalytics,
                        componentStateModel: componentStateModel,
                        componentOptionsModel: componentOptionsModel,
                        root: element
                    };
                    _.each(options["externalComponents"], function (externalComponent) {
                        var elementToInstantiate = externalComponent;
                        if (elementToInstantiate instanceof Coveo.$) {
                            elementToInstantiate = Coveo.$(elementToInstantiate).get(0);
                        }
                        if (Coveo.Utils.isHtmlElement(elementToInstantiate)) {
                            CoveoJQuery.automaticallyCreateComponentsInside(elementToInstantiate, initParameters);
                        }
                    });
                }
            };

            CoveoJQuery.automaticallyCreateComponentsInside = function (element, initParameters, ignore) {
                Coveo.Assert.exists(element);

                var codeToExecute = [];

                for (var componentClassId in CoveoJQuery.autoCreateComponents) {
                    if (!_.contains(ignore, componentClassId)) {
                        var componentClass = CoveoJQuery.autoCreateComponents[componentClassId];
                        var classname = Ui.Component.computeCssClassNameForType(componentClass.ID);
                        var elements = Coveo.$(element).find('.' + classname);
                        if (Coveo.$(element).hasClass(classname)) {
                            elements = elements.add(element);
                        }
                        if (elements.length != 0) {
                            // Queue the code that will scan the now resolved selector to after we've
                            // finished evaluating all selectors. This ensures that if a component
                            // constructor adds child components under his tags, those won't get auto-
                            // initialize by this invocation of this method. Components inserting child
                            // components are responsible of invoking this method again if they want
                            // child components to be auto-initialized.
                            //
                            // Explanation: If we don't do that, child components for which selector have
                            // already been evaluated won't be initialized, whereas those that are next
                            // in the list will be.
                            //
                            // Oh, and the call to a separate function is to work around JavaScript
                            // shocking lack of block scope. One day it'll support the let keyword.
                            codeToExecute.push(CoveoJQuery.createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters));
                        }
                    }
                }

                // Now that all selectors are executed, let's really initialize the components.
                _.each(codeToExecute, function (code) {
                    return code();
                });
            };

            CoveoJQuery.createFunctionThatInitializesComponentOnElements = function (elements, componentClassId, componentClass, initParameters) {
                return function () {
                    elements.each(function (index, matchingElement) {
                        // If options were provided, lookup options for this component class and
                        // also for the element id. Merge them and pass those to the factory method.
                        var optionsToUse = undefined;
                        if (Coveo.Utils.exists(initParameters.options)) {
                            var optionsForComponentClass = initParameters.options[componentClassId];
                            var optionsForElementId = initParameters.options[matchingElement.id];
                            var initOptions = initParameters.options["initOptions"] ? initParameters.options["initOptions"][componentClassId] : {};
                            optionsToUse = Coveo.$.extend({}, optionsForComponentClass, optionsForElementId, initOptions);
                        }
                        var initParamToUse = Coveo.$.extend({}, initParameters, { options: optionsToUse });
                        CoveoJQuery.createComponentOfThisClassOnElement(componentClass.ID, matchingElement, initParamToUse);
                    });
                };
            };

            CoveoJQuery.createComponentOfThisClassOnElement = function (componentClassId, element, initParameters) {
                Coveo.Assert.isNonEmptyString(componentClassId);
                Coveo.Assert.exists(element);

                var componentClass = CoveoJQuery.autoCreateComponents[componentClassId];
                Coveo.Assert.exists(componentClass);

                var bindings = {};
                var options = {};
                var result = undefined;

                if (initParameters != undefined) {
                    bindings = {
                        queryController: initParameters.queryController,
                        queryStateModel: initParameters.queryStateModel,
                        componentStateModel: initParameters.componentStateModel,
                        root: initParameters.root,
                        searchInterface: initParameters.searchInterface,
                        usageAnalytics: initParameters.usageAnalytics,
                        componentOptionsModel: initParameters.componentOptionsModel
                    };
                    options = initParameters.options;
                    result = initParameters.result;
                }

                CoveoJQuery.logger.trace('Creating component of class ' + componentClassId, element, options);
                return new componentClass(element, options, bindings, result);
            };

            CoveoJQuery.registerNamedMethod = function (methodName, handler) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.doesNotExists(CoveoJQuery.autoCreateComponents[methodName]);
                Coveo.Assert.doesNotExists(CoveoJQuery.namedMethods[methodName]);
                Coveo.Assert.exists(handler);

                CoveoJQuery.namedMethods[methodName] = handler;
            };

            CoveoJQuery.isNamedMethodRegistered = function (methodName) {
                return Coveo.Utils.exists(CoveoJQuery.namedMethods[methodName]);
            };

            CoveoJQuery.dispatchNamedMethodCall = function (methodName, element, args) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(element);

                var namedMethodHandler = CoveoJQuery.namedMethods[methodName];
                Coveo.Assert.exists(namedMethodHandler);

                CoveoJQuery.logger.trace('Dispatching named method call of ' + methodName, element, args);
                return namedMethodHandler.apply(null, [element].concat(args));
            };

            CoveoJQuery.isThereASingleComponentBoundToThisElement = function (element) {
                Coveo.Assert.exists(element);
                return Coveo.Utils.exists(Ui.Component.get(element));
            };

            CoveoJQuery.dispatchMethodCallOnBoundComponent = function (methodName, element, args) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(element);

                var boundComponent = Ui.Component.get(element);
                Coveo.Assert.exists(boundComponent);

                var method = boundComponent[methodName];
                if (Coveo.Utils.exists(method)) {
                    return method.apply(boundComponent, args);
                } else {
                    Coveo.Assert.fail('No method named ' + methodName + ' exist on component ' + boundComponent.type);
                }
            };

            CoveoJQuery.dispatchNamedMethodCallOrComponentCreation = function (token, element, args) {
                Coveo.Assert.isNonEmptyString(token);
                Coveo.Assert.exists(element);

                if (CoveoJQuery.isNamedMethodRegistered(token)) {
                    return CoveoJQuery.dispatchNamedMethodCall(token, element, args);
                } else if (CoveoJQuery.isComponentClassIdRegistered(token)) {
                    return CoveoJQuery.createComponentOfThisClassOnElement(token, element, args[0]);
                } else if (CoveoJQuery.isThereASingleComponentBoundToThisElement(element)) {
                    return CoveoJQuery.dispatchMethodCallOnBoundComponent(token, element, args);
                } else {
                    Coveo.Assert.fail('No method or component named ' + token + ' are registered.');
                }
            };

            CoveoJQuery.monkeyPatchComponentMethod = function (methodName, element, handler) {
                Coveo.Assert.isNonEmptyString(methodName);
                Coveo.Assert.exists(handler);

                var componentClass;
                if (methodName.indexOf('.') > 0) {
                    var splitArg = methodName.split(".");
                    Coveo.Assert.check(splitArg.length == 2, "Invalid method name, correct syntax is CoveoComponent.methodName.");
                    componentClass = splitArg[0];
                    methodName = splitArg[1];
                }

                var boundComponent = Ui.Component.get(element, componentClass);
                Coveo.Assert.exists(boundComponent);
                Coveo.Assert.exists(boundComponent[methodName]);

                var originalMethodName = '__' + methodName;
                if (!Coveo.Utils.exists(boundComponent[originalMethodName])) {
                    boundComponent[originalMethodName] = boundComponent[methodName];
                }

                boundComponent[methodName] = handler;
            };

            CoveoJQuery.noConflict = function () {
                Coveo.$ = jQuery.noConflict(true);
                window["$"].fn.coveo = Coveo.$.fn.coveo;
            };
            CoveoJQuery.logger = new Coveo.Logger('JQuery');
            CoveoJQuery.autoCreateComponents = {};
            CoveoJQuery.namedMethods = {};
            return CoveoJQuery;
        })();
        Ui.CoveoJQuery = CoveoJQuery;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));

$.fn.coveo = function () {
    var args = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        args[_i] = arguments[_i + 0];
    }
    var returnValue;
    this.each(function (index, element) {
        var returnValueForThisElement;
        if (Coveo.Utils.isString(args[0])) {
            var token = args[0];
            returnValueForThisElement = Coveo.Ui.CoveoJQuery.dispatchNamedMethodCallOrComponentCreation(token, element, args.slice(1));
        } else {
            // Invoking with no method name is a shortcut for the 'get' method (from Component).
            returnValueForThisElement = Coveo.Ui.CoveoJQuery.dispatchNamedMethodCall('get', element, args);
        }

        // Keep only the first return value we encounter
        returnValue = returnValue || returnValueForThisElement;
    });

    // If the invocation returned something, use that as a return value.
    // Otherwise, return this to allow chaining to work.
    if (Coveo.Utils.exists(returnValue)) {
        return returnValue;
    } else {
        return this;
    }
};

//http://stackoverflow.com/a/2897510
Coveo.$.fn.getCursorPosition = function () {
    var input = this.get(0);
    if (!input)
        return;
    if ('selectionStart' in input) {
        // Standard-compliant browsers
        return input.selectionStart;
    } else if (document.selection) {
        // IE
        input.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
    }
};

Coveo.Ui.CoveoJQuery.registerNamedMethod('options', function (element, options) {
    Coveo.Ui.CoveoJQuery.registerDefaultOptions(element, options);
});

Coveo.Ui.CoveoJQuery.registerNamedMethod('init', function (element, options) {
    Coveo.Ui.CoveoJQuery.initializeSearchInterface(element, options);
});

Coveo.Ui.CoveoJQuery.registerNamedMethod('initSearchBox', function (element, searchPageUri, options) {
    Coveo.Ui.CoveoJQuery.initializeSearchInterfaceForSearchBox(element, searchPageUri, options);
});

Coveo.Ui.CoveoJQuery.registerNamedMethod('patch', function (element, methodName, handler) {
    Coveo.Ui.CoveoJQuery.monkeyPatchComponentMethod(methodName, element, handler);
});

Coveo.Ui.CoveoJQuery.registerNamedMethod('noConflict', function () {
    Coveo.Ui.CoveoJQuery.noConflict();
});
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FastClick = (function () {
            function FastClick(element, handler, distanceThreshold, timeThreshold) {
                if (typeof distanceThreshold === "undefined") { distanceThreshold = 10; }
                if (typeof timeThreshold === "undefined") { timeThreshold = 500; }
                this.element = element;
                this.handler = handler;
                this.distanceThreshold = distanceThreshold;
                this.timeThreshold = timeThreshold;
                if (element.hasClass(Ui.Component.computeCssClassNameForType(Ui.SearchInterface.ID))) {
                    element.click(handler);
                } else {
                    this.setTouchHandlers();
                    this.preventMouseHandlers();
                }
            }
            FastClick.prototype.setTouchHandlers = function () {
                var _this = this;
                this.element.on("touchstart", function (e) {
                    return _this.handleTouchStart(e);
                });
                this.element.on("touchmove", function (e) {
                    return _this.handleTouchMove(e);
                });
            };

            FastClick.prototype.preventMouseHandlers = function () {
                this.element.on("mousedown", function (e) {
                    return e.preventDefault();
                });
                this.element.on("mouseup", function (e) {
                    return e.preventDefault();
                });
                this.element.on("click", function (e) {
                    return e.preventDefault();
                });
            };

            FastClick.prototype.handleTouchStart = function (startEvent) {
                var _this = this;
                // remove by apare because touch is use by the quickview zoom and stopPropagation on the touch is not required
                // startEvent.stopPropagation();
                this.reset();
                this.initStartVariables(startEvent);
                this.startTarget = startEvent.target;
                this.startElement = this.getStartElement();

                this.element.one("touchend", function (endEvent) {
                    return _this.handleTouchEnd(endEvent);
                });
            };

            FastClick.prototype.handleTouchMove = function (e) {
                this.endX = e["originalEvent"] ? e["originalEvent"]["touches"][0].clientX : 0;
                this.endY = e["originalEvent"] ? e["originalEvent"]["touches"][0].clientY : 0;
                this.moved = true;
            };

            FastClick.prototype.handleTouchEnd = function (endEvent) {
                // remove by apare because touch is use by the quickview zoom and stopPropagation on the touch is not required
                // endEvent.stopPropagation();
                if (this.mustCallHandler(endEvent)) {
                    this.hideIOSKeyboardIfNecessary(endEvent.target);
                    if (!this.isGhostClick(endEvent)) {
                        Ui.MobileUtils.showClickFeedback(this.element, 400);
                    }

                    /*  Warning, do not remove the following line. It's the only way we found to remove the
                    *   300ms delay! It adds a div over the search for 400ms following the touchend event and
                    *   this div catches the click after 300ms. */
                    Ui.MobileUtils.showClickCancelingOverlay(400);
                    endEvent.clientX = this.startX;
                    endEvent.clientY = this.startY;
                    this.handler.call(this, endEvent);
                }
            };

            FastClick.prototype.isGhostClick = function (e) {
                return e["originalEvent"] ? false : true;
            };

            FastClick.prototype.initStartVariables = function (startEvent) {
                this.startTime = new Date().getTime();
                this.startX = startEvent["originalEvent"] ? startEvent["originalEvent"]["touches"][0].clientX : 0;
                this.startY = startEvent["originalEvent"] ? startEvent["originalEvent"]["touches"][0].clientY : 0;
                this.endX = this.startX;
                this.endY = this.startY;
            };

            FastClick.prototype.getStartElement = function () {
                return document.elementFromPoint(this.startX, this.startY);
            };

            FastClick.prototype.mustCallHandler = function (endEvent) {
                return !this.scrolled(endEvent) && !this.held();
            };

            FastClick.prototype.scrolled = function (endEvent) {
                var endTarget = endEvent.target;
                var diffX = Math.abs(this.endX - this.startX);
                var diffY = Math.abs(this.endY - this.startY);
                var endElement = document.elementFromPoint(this.endX, this.endY);
                return !((this.startElement == endElement) && (this.startTarget == endTarget) && (!this.moved || (diffX < this.distanceThreshold && diffY < this.distanceThreshold)));
            };

            FastClick.prototype.held = function () {
                this.endTime = new Date().getTime();
                var diffTime = this.endTime - this.startTime;
                return diffTime >= this.timeThreshold;
            };

            FastClick.prototype.reset = function () {
                this.startX = 0;
                this.startY = 0;
                this.endX = 0;
                this.endY = 0;
                this.startTime = 0;
                this.endTime = 0;
                this.moved = false;
            };

            FastClick.prototype.hideIOSKeyboardIfNecessary = function (target) {
                if (Ui.Device.isMobileDevice() && !Coveo.$(target).is('input[type=text]') && Coveo.$(document.activeElement).is('input[type=text]')) {
                    Ui.MobileUtils.hideIOSKeyboard(document.activeElement);
                }
            };
            return FastClick;
        })();
        Ui.FastClick = FastClick;

        Coveo.$.fn.fastClick = function (handler) {
            if (handler) {
                if (Ui.Device.isMobileDevice()) {
                    var jqueryElement = Coveo.$(this);
                    new FastClick(jqueryElement, handler);
                    return jqueryElement;
                } else {
                    // Provide a dummy href if the element is an hyperlink
                    this.filter('a').data('href', this.filter('a').attr('href')).attr('href', 'javascript:');
                    return this.click(handler);
                }
            } else {
                if (Ui.Device.isMobileDevice()) {
                    this.trigger('touchstart');
                    return this.trigger('touchend');
                } else {
                    return this.click();
                }
            }
        };
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var Component = (function () {
            function Component(element, type, bindings) {
                if (typeof bindings === "undefined") { bindings = {}; }
                var _this = this;
                this.element = element;
                this.type = type;
                this.disabled = false;
                this.bind = new Ui.ComponentEvents(this);
                Coveo.Assert.exists(element);
                Coveo.Assert.isNonEmptyString(type);

                Component.bindComponentToElement(this.element, this);
                this.logger = new Coveo.Logger(this);

                this.root = bindings.root || this.resolveRoot();
                this.queryStateModel = bindings.queryStateModel || this.resolveQueryStateModel();
                this.componentStateModel = bindings.componentStateModel || this.resolveComponentStateModel();
                this.queryController = bindings.queryController || this.resolveQueryController();
                this.searchInterface = bindings.searchInterface || this.resolveSearchInterface();
                this.usageAnalytics = bindings.usageAnalytics || this.resolveUA();
                this.componentOptionsModel = bindings.componentOptionsModel || this.resolveComponentOptionsModel();
                this.ensureDom = _.once(function () {
                    return _this.createDom();
                });

                if (this.searchInterface != null) {
                    this.searchInterface.attachComponent(type, this);
                }
            }
            Component.prototype.getBindings = function () {
                return {
                    root: this.root,
                    queryStateModel: this.queryStateModel,
                    queryController: this.queryController,
                    searchInterface: this.searchInterface,
                    componentStateModel: this.componentStateModel,
                    componentOptionsModel: this.componentOptionsModel,
                    usageAnalytics: this.usageAnalytics
                };
            };

            Component.prototype.enable = function () {
                this.disabled = false;
            };

            Component.prototype.disable = function () {
                this.disabled = true;
            };

            Component.prototype.createDom = function () {
                // By default we do nothing
            };

            Component.prototype.resolveSearchInterface = function () {
                return Component.resolveBinding(this.element, Ui.SearchInterface);
            };

            Component.prototype.resolveRoot = function (defaultValue) {
                var resolvedSearchInterface = Component.resolveBinding(this.element, Ui.SearchInterface);
                return resolvedSearchInterface ? resolvedSearchInterface.element : defaultValue;
            };

            Component.prototype.resolveQueryController = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Controllers.QueryController) || defaultValue;
            };

            Component.prototype.resolveComponentStateModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.ComponentStateModel) || defaultValue;
            };

            Component.prototype.resolveQueryStateModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.QueryStateModel) || defaultValue;
            };

            Component.prototype.resolveComponentOptionsModel = function (defaultValue) {
                return Component.resolveBinding(this.element, Coveo.Models.ComponentOptionsModel) || defaultValue;
            };

            Component.prototype.resolveUA = function () {
                var searchInterface = this.resolveSearchInterface();
                return (searchInterface && searchInterface.usageAnalytics) ? searchInterface.usageAnalytics : new Ui.NoopAnalyticsClient();
            };

            Component.prototype.resolveResult = function () {
                // TODO: We need more generic binding but that'll do for now
                var resultElement = Coveo.$(this.element).closest('.CoveoResult');
                Coveo.Assert.check(resultElement.length == 1);
                return resultElement.get(0)['CoveoResult'];
            };

            Component.get = function (element, componentClass, noThrow) {
                Coveo.Assert.exists(element);

                if (Coveo.Utils.isString(componentClass)) {
                    return element[Component.computeMemberNameForType(componentClass)];
                } else if (Coveo.Utils.exists(componentClass)) {
                    Coveo.Assert.exists(componentClass.ID);
                    return element[Component.computeMemberNameForType(componentClass.ID)];
                } else {
                    // No class specified, but we support returning the bound component
                    // if there is exactly one.
                    var boundComponents = Component.getBoundComponentsForElement(element);
                    if (!noThrow) {
                        Coveo.Assert.check(boundComponents.length <= 1, 'More than one component is bound to this element. You need to specify the component type.');
                    }
                    return boundComponents[0];
                }
            };

            Component.bindComponentToElement = function (element, component) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(component);
                Coveo.Assert.isNonEmptyString(component.type);
                element[Component.computeMemberNameForType(component.type)] = component;
                Coveo.$(element).addClass(Component.computeCssClassNameForType(component.type));
                Component.getBoundComponentsForElement(element).push(component);
            };

            Component.bindResultToElement = function (element, result) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(result);
                Coveo.$(element).addClass('CoveoResult');
                element['CoveoResult'] = result;
            };

            Component.resolveBinding = function (element, componentClass) {
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(componentClass);
                Coveo.Assert.exists(componentClass.ID);

                var foundElement = Coveo.$(element).closest('.' + Component.computeCssClassNameForType(componentClass.ID));
                if (foundElement.length == 0) {
                    return undefined;
                }

                return foundElement.get(0)[Component.computeMemberNameForType(componentClass.ID)];
            };

            Component.computeCssClassNameForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return 'Coveo' + type;
            };

            Component.computeSelectorForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return '.' + Component.computeCssClassNameForType(type);
            };

            Component.computeMemberNameForType = function (type) {
                Coveo.Assert.isNonEmptyString(type);
                return 'Coveo' + type;
            };

            Component.pointElementsToDummyForm = function (selector) {
                selector.add(selector.find('*')).filter('input').attr('form', 'coveo-dummy-form');
            };

            Component.getBoundComponentsForElement = function (element) {
                Coveo.Assert.exists(element);

                if (element.CoveoBoundComponents == null) {
                    element.CoveoBoundComponents = [];
                }

                return element.CoveoBoundComponents;
            };
            return Component;
        })();
        Ui.Component = Component;

        Ui.CoveoJQuery.registerNamedMethod('get', function (element, componentClass) {
            Coveo.Assert.exists(element);
            return Component.get(element, componentClass);
        });
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var ComponentEvents = (function () {
            function ComponentEvents(owner) {
                this.owner = owner;
                Coveo.Assert.exists(owner);
            }
            ComponentEvents.prototype.on = function (selector, event, handler) {
                selector.on(event, this.wrapToCallIfEnabled(handler));
            };

            ComponentEvents.prototype.onRoot = function (event, handler) {
                this.on(Coveo.$(this.owner.root), event, handler);
            };

            ComponentEvents.prototype.fastClick = function (selector, handler) {
                selector.fastClick(this.wrapToCallIfEnabled(handler));
            };

            ComponentEvents.prototype.trigger = function (selector, event, args) {
                this.wrapToCallIfEnabled(function () {
                    selector.trigger(event, args);
                });
            };

            ComponentEvents.prototype.wrapToCallIfEnabled = function (func) {
                var _this = this;
                return function () {
                    var args = [];
                    for (var _i = 0; _i < (arguments.length - 0); _i++) {
                        args[_i] = arguments[_i + 0];
                    }
                    if (!_this.owner.disabled) {
                        return func.apply(_this.owner, args);
                    }
                };
            };
            return ComponentEvents;
        })();
        Ui.ComponentEvents = ComponentEvents;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var ComponentOptions = (function (_super) {
            __extends(ComponentOptions, _super);
            function ComponentOptions(element) {
                _super.call(this);
                this.element = element;
                Coveo.Assert.exists(element);
            }
            ComponentOptions.prototype.loadStringFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);
                var attributeValue = Coveo.$(this.element).attr(attributeName);
                return attributeValue || defaultValue;
            };

            ComponentOptions.prototype.loadLocalizedStringFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);
                var attributeValue = Coveo.$(this.element).attr(attributeName);
                return attributeValue ? attributeValue.toLocaleString() : defaultValue;
            };

            ComponentOptions.prototype.loadNumberFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValueAsNumber = Coveo.Utils.parseIntIfNotUndefined(Coveo.$(this.element).attr(attributeName));
                if (attributeValueAsNumber == undefined) {
                    return defaultValue;
                } else {
                    return attributeValueAsNumber;
                }
            };

            ComponentOptions.prototype.loadFloatFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValueAsNumber = Coveo.Utils.parseFloatIfNotUndefined(Coveo.$(this.element).attr(attributeName));

                return attributeValueAsNumber || defaultValue;
            };

            ComponentOptions.prototype.loadBooleanFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValueAsboolean = Coveo.Utils.parseBooleanIfNotUndefined(Coveo.$(this.element).attr(attributeName));
                return (Coveo.Utils.isNullOrUndefined(attributeValueAsboolean) ? defaultValue : attributeValueAsboolean);
            };

            ComponentOptions.prototype.loadStringArrayFromAttribute = function (attributeName, defaultValue, separator) {
                if (typeof separator === "undefined") { separator = " "; }
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValue = Coveo.$(this.element).attr(attributeName);
                if (Coveo.Utils.isNonEmptyString(attributeValue)) {
                    return attributeValue.split(separator) || defaultValue;
                }

                return defaultValue;
            };

            ComponentOptions.prototype.loadEnumFromAttribute = function (attributeName, _enum, defaultValue) {
                var enumAsString = this.loadStringFromAttribute(attributeName, defaultValue);
                return _enum[enumAsString];
            };

            ComponentOptions.prototype.loadJsonFromAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValue = Coveo.$(this.element).attr(attributeName);
                if (Coveo.Utils.isNonEmptyString(attributeValue)) {
                    try  {
                        return JSON.parse(attributeValue);
                    } catch (e) {
                        return defaultValue;
                    }
                }
                return defaultValue;
            };

            ComponentOptions.prototype.loadHtmlElementFromSelectorAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var attributeValue = Coveo.$(this.element).attr(attributeName);
                if (Coveo.Utils.isNonEmptyString(attributeValue)) {
                    return Coveo.$(attributeValue).get(0);
                } else {
                    return defaultValue;
                }
            };

            ComponentOptions.prototype.loadChildHtmlElementFromSelector = function (selector, defaultValue) {
                Coveo.Assert.isNonEmptyString(selector);

                var foundElement = Coveo.$(this.element).find('*').add(this.element).filter(selector).get(0);
                if (Coveo.Utils.exists(foundElement)) {
                    return foundElement;
                } else {
                    return defaultValue;
                }
            };

            ComponentOptions.prototype.loadResultTemplateFromSelectorAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var templateElement = this.loadHtmlElementFromSelectorAttribute(attributeName);

                if (Coveo.Utils.exists(templateElement)) {
                    return ComponentOptions.createResultTemplateFromElement(templateElement);
                } else {
                    return defaultValue;
                }
            };

            ComponentOptions.prototype.loadResultTemplateFromIdAttribute = function (attributeName, defaultValue) {
                Coveo.Assert.isNonEmptyString(attributeName);

                var templateId = this.loadStringFromAttribute(attributeName);

                if (Coveo.Utils.isNonEmptyString(templateId)) {
                    return new Ui.UnderscoreTemplate(Ui.TemplateCache.getTemplate(templateId));
                } else {
                    return defaultValue;
                }
            };

            ComponentOptions.prototype.loadChildResultTemplateFromSelector = function (selector, defaultValue) {
                Coveo.Assert.isNonEmptyString(selector);

                var foundElement = Coveo.$(this.element).find('*').add(this.element).filter(selector).get(0);
                if (Coveo.Utils.exists(foundElement)) {
                    return ComponentOptions.createResultTemplateFromElement(foundElement);
                } else {
                    return defaultValue;
                }
            };

            ComponentOptions.createResultTemplateFromElement = function (element) {
                Coveo.Assert.exists(element);

                var type = Coveo.$(element).attr('type');
                Coveo.Assert.check(Coveo.Utils.isNonEmptyString(type), 'You must specify the type of template');

                if (_.indexOf(Ui.UnderscoreTemplate.mimeTypes, type) != -1) {
                    return Ui.UnderscoreTemplate.create(element);
                } else if (_.indexOf(Ui.JsRenderTemplate.mimeTypes, type) != -1) {
                    return Ui.JsRenderTemplate.create(element);
                } else if (_.indexOf(Ui.HandlebarsTemplate.mimeTypes, type) != -1) {
                    return Ui.HandlebarsTemplate.create(element);
                } else {
                    Coveo.Assert.fail('Cannot guess template type from attribute: ' + type);
                    return undefined;
                }
            };
            return ComponentOptions;
        })(Coveo.Options);
        Ui.ComponentOptions = ComponentOptions;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var QueryBuilder = (function () {
            function QueryBuilder() {
                this.expression = new Ui.ExpressionBuilder();
                this.advancedExpression = new Ui.ExpressionBuilder();
                this.constantExpression = new Ui.ExpressionBuilder();
                this.disjunctionExpression = new Ui.ExpressionBuilder();
                this.firstResult = 0;
                this.numberOfResults = 10;
                this.enableDidYouMean = false;
                this.enableDebug = true;
                this.sortCriteria = "relevancy";
                this.retrieveFirstSentences = true;
                this.queryUid = Coveo.QueryUtils.createGuid();
                this.queryFunctions = [];
                this.rankingFunctions = [];
                this.groupByRequests = [];
                this.enableDuplicateFiltering = false;
            }
            QueryBuilder.prototype.build = function () {
                var query = {
                    q: this.expression.build(),
                    aq: this.advancedExpression.build(),
                    cq: this.constantExpression.build(),
                    dq: this.disjunctionExpression.build(),
                    wildcards: this.enableWildcards,
                    questionMarks: this.enableQuestionMarks,
                    lowercaseOperators: this.enableLowercaseOperators,
                    partialMatch: this.enablePartialMatch,
                    partialMatchKeywords: this.partialMatchKeywords,
                    partialMatchThreshold: this.partialMatchThreshold,
                    firstResult: this.firstResult,
                    numberOfResults: this.numberOfResults,
                    excerptLength: this.excerptLength,
                    filterField: this.filterField,
                    filterFieldRange: this.filterFieldRange,
                    parentField: this.parentField,
                    childField: this.childField,
                    fieldsToInclude: this.fieldsToInclude,
                    fieldsToExclude: this.fieldsToExclude,
                    enableDidYouMean: this.enableDidYouMean,
                    sortCriteria: this.sortCriteria,
                    sortField: this.sortField,
                    queryFunctions: this.queryFunctions,
                    rankingFunctions: this.rankingFunctions,
                    groupBy: this.groupByRequests,
                    retrieveFirstSentences: this.retrieveFirstSentences,
                    timezone: this.timezone,
                    enableDuplicateFiltering: this.enableDuplicateFiltering
                };

                return query;
            };

            QueryBuilder.prototype.computeCompleteExpression = function () {
                return this.computeCompleteExpressionParts().full;
            };

            QueryBuilder.prototype.computeCompleteExpressionParts = function () {
                var withoutConstant = Ui.ExpressionBuilder.merge(this.expression, this.advancedExpression);

                return {
                    full: Ui.ExpressionBuilder.mergeUsingOr(Ui.ExpressionBuilder.merge(withoutConstant, this.constantExpression), this.disjunctionExpression).build(),
                    withoutConstant: Ui.ExpressionBuilder.mergeUsingOr(withoutConstant, this.disjunctionExpression).build(),
                    constant: Ui.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
                };
            };

            QueryBuilder.prototype.computeCompleteExpressionExcept = function (except) {
                return this.computeCompleteExpressionPartsExcept(except).full;
            };

            QueryBuilder.prototype.computeCompleteExpressionPartsExcept = function (except) {
                var withoutConstantAndExcept = Ui.ExpressionBuilder.merge(this.expression, this.advancedExpression);
                withoutConstantAndExcept.remove(except);

                return {
                    full: Ui.ExpressionBuilder.mergeUsingOr(Ui.ExpressionBuilder.merge(withoutConstantAndExcept, this.constantExpression), this.disjunctionExpression).build(),
                    withoutConstant: Ui.ExpressionBuilder.mergeUsingOr(withoutConstantAndExcept, this.disjunctionExpression).build(),
                    constant: Ui.ExpressionBuilder.mergeUsingOr(this.constantExpression, this.disjunctionExpression).build()
                };
            };
            return QueryBuilder;
        })();
        Ui.QueryBuilder = QueryBuilder;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var ExpressionBuilder = (function () {
            function ExpressionBuilder() {
                this.parts = [];
                this.wrapParts = true;
            }
            ExpressionBuilder.prototype.add = function (expression) {
                Coveo.Assert.isNonEmptyString(expression);
                this.parts.push(expression);
            };

            ExpressionBuilder.prototype.addFieldExpression = function (field, operator, values) {
                Coveo.Assert.isNonEmptyString(field);
                Coveo.Assert.stringStartsWith(field, '@');
                Coveo.Assert.isNonEmptyString(operator);
                Coveo.Assert.isLargerOrEqualsThan(1, values.length);

                this.add(Coveo.QueryUtils.buildFieldExpression(field, operator, values));
            };

            ExpressionBuilder.prototype.addFieldNotEqualExpression = function (field, values) {
                Coveo.Assert.isNonEmptyString(field);
                Coveo.Assert.stringStartsWith(field, '@');
                Coveo.Assert.isLargerOrEqualsThan(1, values.length);

                this.add(Coveo.QueryUtils.buildFieldNotEqualExpression(field, values));
            };

            ExpressionBuilder.prototype.remove = function (expression) {
                Coveo.Assert.isNonEmptyString(expression);
                var index = _.indexOf(this.parts, expression);
                if (index != -1) {
                    this.parts.splice(_.indexOf(this.parts, expression), 1);
                }
            };

            ExpressionBuilder.prototype.isEmpty = function () {
                return this.parts.length == 0;
            };

            ExpressionBuilder.prototype.build = function () {
                if (this.parts.length == 0) {
                    return undefined;
                } else if (this.parts.length == 1) {
                    return this.parts[0];
                } else if (this.wrapParts) {
                    return '(' + this.parts.join(') (') + ')';
                } else {
                    return this.parts.join(' ');
                }
            };

            ExpressionBuilder.merge = function () {
                var builders = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    builders[_i] = arguments[_i + 0];
                }
                var merged = new ExpressionBuilder();
                _.each(builders, function (builder) {
                    merged.parts = merged.parts.concat(builder.parts);
                });

                return merged;
            };

            ExpressionBuilder.mergeUsingOr = function () {
                var builders = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    builders[_i] = arguments[_i + 0];
                }
                var nonEmpty = _.filter(builders, function (b) {
                    return !b.isEmpty();
                });

                var merged = new ExpressionBuilder();

                if (nonEmpty.length == 1) {
                    merged.parts = [].concat(nonEmpty[0].parts);
                } else if (nonEmpty.length > 1) {
                    var parts = _.map(nonEmpty, function (b) {
                        return b.build();
                    });
                    merged.add('(' + parts.join(') OR (') + ')');
                }

                return merged;
            };
            return ExpressionBuilder;
        })();
        Ui.ExpressionBuilder = ExpressionBuilder;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var Images = (function () {
            function Images() {
            }
            Images.WaitAnimation = "data:image/gif;base64,R0lGODlhIAAgAKUAAAQCBISChMTCxERCROTi5KSipGRiZCwqLNTS1PTy9LSytHRydJSWlFRSVBQSFDQ2NIyKjMzKzOzq7KyqrGxqbNza3Pz6/Ly6vHx6fFxaXExKTDQyNJyenBwaHAQGBISGhMTGxOTm5KSmpGRmZCwuLNTW1PT29LS2tHR2dJyanFRWVDw6PIyOjMzOzOzu7KyurGxubNze3Pz+/Ly+vHx+fFxeXExOTBweHP///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQA4ACwAAAAAIAAgAAAG/kCccEgkOgAAR3HJJFYWsuEKuRrKWonmMkHrdGZDA9IwlCgUCIt2WPB2RkMIEjKMvE6K2HoI6zhuLkIKSApCJngKLXtDJhpeKUIlSBVCMQovIGpNCQVRQiEkHQNCMh4emjMKFyZWMZpCLA8oWUIRNx2KOAcHQi4KJ4FCFhEKJUMEDxsbKgRsHXRFJXmMqXe0H8obDwMgQyCeRDLBOBKIZwhDLTQryg8Fi0IVZ78t44wvNcrdexJ3Aq57YnAAp0VGBVrwEq7JAIOFiH+vFMpIEKJCBAEnbNjQoJHjiIhrZFy4dObFmQYcNXBsAANkwRnmzpwwgIFBIgkEE8owISFGxwsQFxQKbRLjhcslMkrYY5LgAo0RFNDxOzOjAkgZCBhQGAFVQEJL8yKE8FSAK9cFlCLlxCEjxBAXF+6c67WVwgeEAmiAwWFBkzw9hgRcOsFKyAsKHF5VoBHALY4JE3qdkWClxQljQyx4ffshAANSKVJ4EnCnsBACRw0xCEAjQq8UDGjFwDMjdREZE2gwLkyAQQrAFsKuXRKBMY0XQxDAloqjxWDAayzMCBAA+ozQe8n9KmG7iIsT4BT4Rk4KgemhQgpw4PAOXhAAIfkECQkANgAsAAAAACAAIACFBAIEhIKExMLEREJE5OLkpKakZGJkLCoslJKU1NLU9PL0dHJ0tLa0VFZUNDY0HBocjIqMzMrM7OrsrK6sbGpsnJqc3Nrc/Pr8fHp8TE5MNDI0vL68XF5cBAYEhIaExMbEREZE5ObkrKqsZGZkLC4slJaU1NbU9Pb0dHZ0vLq8XFpcPDo8HB4cjI6MzM7M7O7stLK0bG5snJ6c3N7c/P78fH58////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BIJB4ej0NxySTOArRhBpkZ0gym5lLRcmg+wwUyNkwBALGXdjjRuFHDErI0bJwB9LUwoHE4FEIpSAxCEh1nHHpDJxxuBUIzSDNCLWcOJ1onE1GFIBoqQhcsLBdCJAAPBFYzpUMVGR6YQgleWTYrA0IfZxtWETC2NiEZxBQhbBoVSzV4ixswEwyANq/EGQ0uQy6cRDQCQxIMMOMwCUMJCNYZE4pCFuPRLmpFFzALxBGKEtAfBNxNBET8a0LDwrR2CNcsCCADRgQCrRLaoKEghIUIAhhQGMGRIwUMEfXQSAEN3riNI1BSqDFQC40N4sjBYIChRYEUJiS0VETjhMuEGS4+pJBIdAmBFDuL0DAxT4uCDwhq1LCgb9wGCyEnWigQoEaAAPnazYjpMAQnGF6lQpgkxN8SGseEvEgRbZw5Gy+6BqjQ1ESJsDRavWNr44QAaAxk2dgQYELEEBUqSBCyoZcNBRNgTBZCwwWDYDYuhJUrowK7ieM4HU5MBKKWCyIqlLClYNy0GVazEkxRooKMViGgbb4QM0JSIgkil7Bs4x0DqkJcZJ5A+HWE0nFtuIB218a+57qbPOV2GMY3zgkUF7WRggGDoe2CAAAh+QQJCQA3ACwAAAAAIAAgAIUEAgSEgoTEwsREQkSkoqTk4uRkYmQsKiyUkpTU0tS0srT08vQUEhRUUlR0cnQ0NjSMiozMysysqqzs6uxsamycmpzc2ty8urz8+vwMCgxMSkw0MjQcGhxcXlwEBgSEhoTExsSkpqTk5uRkZmQsLiyUlpTU1tS0trT09vRUVlR8fnw8OjyMjozMzsysrqzs7uxsbmycnpzc3ty8vrz8/vxMTkwcHhz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCbcEgkDjabQXHJJBYQtKFh8zAMaQ5Lc7mo1GqtYYD0CAxnHI5qsR2eahoNZEh4bAjDUZoTaw9ZcA0vQgJIAkIvNgwcMH5DGA4aNQpCBWQFQhVpGihbKBdRQhMdGhRCNA8PoQMcJCJXLGxDEiMVnUImX1o3KSlCCQw2EUMvDQAOQxMjywETbhohSywc0UIyBwDZuyEUyyMOJkMJoUQ0IG4M2dkjQxYx3SMUJ45CEOoeBgLkQhgCH8sJHJ3I9qCCrC0iQDnC8CEcvYd+PlSQMMPEBAwQrywQYSGCgBMBVKgIOZLFvjY0LihwoWBly5AwR5Y4uQXDjBMtc55gQUABzQgLL2g6ooFigowWIC5kXLpkAgihRWiYGNQGRYIQFSpg8jOh5QwLGMsVuJC1QgmHjmTgbBlBRCgBJcyWCPFKFE0adW+8uOBibcAbC2JkdXFQhgKHNMJaUCBjCAoBK0/cuhGhxAxyXRVQnTFDyAKWzk61OIH2BobSKHB2vkGj5VsFkp2EZWKzZeMbKFrKMqxgxmyUEVqeCCuiZV0MayNAJcLbRRghixXsutGir4vbbU7jDE195d8bXU+AfWiV3EcFh04lmMz0xoUTJ5TSCwIAIfkECQkAOQAsAAAAACAAIACFBAIEhIKExMLEREJEpKKk5OLkZGJkJCIklJKU1NLUtLK09PL0VFJUdHJ0FBIUNDI0jIqMzMrMrKqs7OrsnJqc3NrcvLq8/Pr8XFpcfHp8DAoMTE5MbGpsHBocPDo8BAYEhIaExMbEREZEpKak5ObkZGZkJCYklJaU1NbUtLa09Pb0VFZUdHZ0NDY0jI6MzM7MrK6s7O7snJ6c3N7cvL68/P78XF5cfH58HB4c////AAAAAAAAAAAAAAAAAAAAAAAABv7AnHBIJGI2G0xxySSSCLUhC9kY1gKz5lIlKZVQQwQSMQw9Wq6FdkgrcUqUoWQjUkgfeNh6KPNy1DkRSBFCEx5nN3tDFxAGJTRCBUgFQiN4NhdaKiFRQjENJQFCNQwbnSsPIhNWJ4BCFgEjmUIVb5Q5bkIJDx4vQwsGHYmeATc3JzFDAiV2RRQPekIzAx0dOFk5CjfFASDYORWdRDWEQjQm1R0OGUMFMNw3IYpCJzjVOA3yRRcRFNsVimhU20BAxZ4JNMRpqYEAzLyHe2TAoPFiRoxZEHOoSCAhAIYHDiiIHHlihMI1Fw4AWMnyA4UTL19KxLjnwoMPLFd+GKFAQMSCAgtOzqsxIwWCEgNwZFy6JAYKoUtqoEiGsgINBQpWHcRKowLNHDUmRMCK9dueAlhhpIhAolMCGArUpqCao21UrTlipEhBNoEQFXwV0MBYQYHDGrMKf1MhIG4Kg0JQKHghbgJWqjQg5VgAF2+NFykcCrlgFrDgUXw7NX5MpMDXcVcVYFOBFdAMrq+ZkMOaYhYJrCRGB44AtcjtuL5oYQUo5IVaGGabXEDBF++LuH4LKUjh9eFGcQL4CrCSADLTV3stPAwCACH5BAkJADcALAAAAAAgACAAhQQCBISChMTCxERCRKSipOTi5GRiZCQiJJSSlNTS1LSytPTy9HRydFRSVDQyNBwaHIyKjMzKzKyqrOzq7JyanNza3Ly6vPz6/Hx6fExOTGxqbCwqLFxeXDw6PAQGBISGhMTGxERGRKSmpOTm5GRmZCQmJJSWlNTW1LS2tPT29HR2dFRWVDQ2NBweHIyOjMzOzKyurOzu7JyenNze3Ly+vPz+/Hx+fP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJtwSCQySCRGcckkThS14UdDggxriEJzmbLYbJUhAUkYRjIZymJrtgVskqEFaZGiMyj2EPYOpIQJSAlCC3dWekIXJm8gQhNIE0IwaAwXWxcvUYQQNiZCNRoamhoZK5GfBGtDIBQWlkIzbyNCX0IVGQ2DQikMLC5DCxQmFBIxQy8BNEsiGQpDBSsODixaNwLDwzLVNzOaRDW6NxED0tKHNyMCMhTC4XoE0iwdNu67JzDs21sg0hwwf2xiZEJUQ8YMRAgTohAQocKIBd4S3rhwQoELDSE2KNgIY6MCCxHZXGDxoKTJFgpgoOCIgkbISyEOmCzZggaIBDNGpHhJsAC+DRMqVrCQSLRJjBM8i1xQ0UhkBRobT7FBAQBACQizvk2I4FHBQYQUqlbF8ypBR5UojAkZ8bKGVBAPxAIgsWulAhqvblRQcOLTq71fbxRgUdVD4IoDHW1US0PZjQUdpaYwAAADkQuBb6RY6bjGSk0CFKAAKIQC6SU1oHrdtVHVjI14EdbgKvrViI1ZL9iNkJTI65QvhuxVEEbIC5UwMjehuFLqi5ThnqCokFdPigTeBKwUcCXB6aI3LKBAUQdhEAAh+QQJCQA4ACwAAAAAIAAgAIUEAgSEgoTEwsREQkSkoqTk4uRkYmQsLiyUkpTU0tS0srT08vR0cnQUEhRUVlQ8OjyMiozMysysqqzs6uycmpzc2ty8urz8+vx8enwMCgxMSkxsamw0NjQcGhxcXlwEBgSEhoTExsSkpqTk5uRkZmQ0MjSUlpTU1tS0trT09vR0dnRcWlw8PjyMjozMzsysrqzs7uycnpzc3ty8vrz8/vx8fnxMTkwcHhz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCccEgkQmo1SHHJJMIEtCGlFqAMaYRRc3kJUUyFoQKpGCZIG1FqOzx9KZZhKFALSUnoGXs4o/jXOBVUJ0ILG3gxe0MXLyYUCUIwSDBCFngQF1sXMlFCKQQUEkI0AQGdASQMlKMvgEInChGZQiN+E0IIJkIyaBVDKSAaiYUKCi8zricmLksKJAJDIxsaNjZaOAkvKMUot7SdRDS+QhEONtQaVpEu28Xjii/VGg4IkEWbAsXXbC7UDBYL9sDgpIiGhDCKEiZEISBChRELwCnEcaGCBQoYVgwoZoyjBYlsLtgoUYLDAQ4ljbXTNgOkphUsTqLk8GBGiAQyRqRwWXBCxAgRIEjYmEi0CYwTPO8FiLCn4oxi3tjM6NCBhYmooyZE4KhAhkIRN6h2MGBhVjaVKFbhGOGS0RAXB8R2UOGp3YxZgRQQwkFjVg0ASmhpoHoDIQ5YLsBNKLZqhh5sAACg+MWgAQgim4ik2PaYxrZOJQA08DpEzRYaT7t6KhYQh4nIB1rvobFVAYpZI/RF+hDZQVIiMoq9YCakgrshHiIDQKDowoltUV0Ys4djBoAPNVztSZEAnIBt0EYxIF10iAUUKOIkDAIAIfkECQkAOAAsAAAAACAAIACFBAIEhIKExMLEREJEpKKk5OLkZGJkJCIklJKU1NLUtLK09PL0VFJUdHJ0HBocNDI0jIqMzMrMTEpMrKqs7OrsbGpsnJqc3NrcvLq8/Pr8DAoMXFpcfHp8PDo8BAYEhIaExMbEREZEpKak5ObkZGZkLCoslJaU1NbUtLa09Pb0HB4cNDY0jI6MzM7MTE5MrK6s7O7sbG5snJ6c3N7cvL68/P78XF5cfH58////AAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AnHBIJBIsJkJxySQuWrWhwmR5DWsKSnOZSaCyQ5rFQhvObgFUZmtWKF6tYYKaGE7Qtwh72HIr1jgzSAVCCwE3Nwp7VwIvKDOFJjILQiBoFoBMGTNRQikYCmU4NWOdJjcQMFcYKUQnChGZMG6qOBMTQgVohJ4WJLiFbi80rUIzChdLNAF6QhQ3JCQVWjgJjm4o1DgUnUQ1kEInMRXSBiJDMC1fbsmLOBjR0jLtRJsCbiOLJ9EQAplNMDgtqoGBl7uDbFAIiHBhxIJuCO2JYBFjg58XfjBAZJPBgAsXEkC6YPBmnSMaG7dkiMFApISQNEAkmDEiRcqBFPqY4GAAocNPgCduFqmBIA7HCzTcaNsC4sEDBgRqXaEQwY8CcItedHC6ooGATtZKopA6ImUGFHJCPFjh9IOndTQyXVBwwlMxCA5MDKFgY+2KfOEUQNlLS0iJEuEcOBAwJEWAB3qHbCKS4ouoGh48AArhoARWHC+KMamR9KqQCwAA1MVBQPEASgOrKlAj5EVqKzhgqFBsQCiRY2+M4oCQ2q2QGIodyFiU4cQXbTZS2xgCwoGKD6L3pEjQrUPqFVduAP45RIUGDSoOBgEAIfkECQkAOQAsAAAAACAAIACFBAIEhIKExMLEREJEpKKk5OLkZGZkJCYklJKU1NLUtLK09PL0dHZ0FBIUVFJUNDY0jIqMzMrMrKqs7OrsbG5snJqc3NrcvLq8/Pr8XFpcDAoMLC4sfH58HBocPD48BAYEhIaExMbETE5MpKak5ObkbGpslJaU1NbUtLa09Pb0fHp8VFZUPDo8jI6MzM7MrK6s7O7sdHJ0nJ6c3N7cvL68/P78XF5cNDI0HB4c////AAAAAAAAAAAAAAAAAAAAAAAABv7AnHBIJKIUClRxySQuXLWhACkY1miw5hKTOE6GLsUrMSxUKiGMdjhDvlxDS9IyvJgqptMajFSocyRiXzkpZyZVe0I1Ai8oM0ILSClCCSYyL39MGDNRQikXCjSKR50SFTKTimlEJwoRmTBIWTk0ojkTdyRDGBIcF0ORYjSpOW10RREVekIwCBwcAbMJjUgog7edRDW6QhYQ0M9KzC5HSMeJIc8BAS8FWzNTCtxrM9AVLsRNMJyJi9eJAPegEBDBAokF2QLmwFAgAooKIGL0edHnQsI1GFQY2MixhJhyjWhc1IIhAAUDJVCipBEiwQwSKUb2g5HgAoEWKhTq1HdCZr+RGjKWkbRAA8m/Ji5EiCghYZaVCRH6KHgE8IJSpSAidJr2EYVTP1ts5bCQ4aoIBJ7K0cjUAkBOQqkq3CAwZAIFEQMcXGsFpQ4AAHByePDQ7caDELsQiKC7i6qQGQ0AbBCCAQeOPzZuDHBXJ1+RFBv+mujWocMxCTdurPDcpIaDvx9mXWjQQVwKFoYZ+CSC4C+ADEMQlEYrhEPqGyMSpeDwAYBYCqUpgDFcgXWTAhSyiSgtwkqLeTuF3Dhw4EbAIAAh+QQJCQA2ACwAAAAAIAAgAIUEAgSEgoTEwsREQkTk4uSkoqRkYmQkIiTU0tT08vS0srSUlpRUUlR0cnQ0MjQcGhyMiozMysxMSkzs6uysqqzc2tz8+vy8urx8enxsamycnpxcXlw8PjwEBgSEhoTExsRERkTk5uSkpqRkZmQsKizU1tT09vS0trScmpxUVlR0dnQ0NjQcHhyMjozMzsxMTkzs7uysrqzc3tz8/vy8vrx8fnz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEgknhSKU3HJJCZcs6EAKRjOXInm0oI4ToYuRQwxnCARFu1Qhoy5hpVkZRiJHWVqMFKRtoXEXzYmRwpveUIzAnZ4NglIJkJsMR99TBYyUUImFwo0iEeZNAoXkIgIpUIlChGVMEgwQjSeNq4KsEIWFwsfQ45iNKhsc0WqjI0iKMm3CHZIJ4E2E5lEM7c2BBooC9q8QjAuhArDhy7JKBoCIVsyUwrqeQTaMSWVTTCYh1dZh/z8JwIRKoRIMK2fDQsTENCIsQDCnhh7LhRUM6NFgBo1LgYIIIaQHRoTtVhYoDFjRhofEMgIYSJkvgQVPijQ0MKgzSYfMNRrMoPCzLgmEyCQAABASZ4SI0bUuLBviIUTDIgSXdDvQ4akGRYgyDRCKoAHs2xc2GljRjcbMlRkMJC0QKQORFcQGLLggQdcpQq8iNErwIgMGaBhALABlQAWD8jYSMEgkoQXhg5qGMF3iAkURGSQeAAC14oVfRq8SPFOiACylgc8eKAh0goHc22ceJwBFUUDq1ncEuDAwSwTDB57cFlEw+oHI4YUcLCitZAWLx4rOGQCAuKzNV7XGILgBYMCqJmEqDFtA/MNVlBAuynkBQcOEvoFAQAh+QQJCQA3ACwAAAAAIAAgAIUEAgSEgoTEwsREQkSkoqTk4uQkIiRkYmSUkpTU0tS0srT08vQUEhQ0MjR0cnRUVlSMiozMysysqqzs6uycmpzc2ty8urz8+vw8OjwMCgxMSkxsamwcGhx8fnwEBgSEhoTExsSkpqTk5uQsLixkZmSUlpTU1tS0trT09vQ0NjR0dnRcWlyMjozMzsysrqzs7uycnpzc3ty8vrz8/vw8PjxMTkwcHhz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCbcEgknhSKU3HJJC5as6EAKRjOWovm8pI4ToYthSsxnCATF+0whnS1hpVkZRhxHWNqMFKRvonEXzcoRwpveUIzAnZ4NwtIKEJsLiB9TBcxUUIoFgoyiEeZMgoWkIgxlTcmChGVL0gvQjKeN64KsEIXEQomQ45iMqU3bHNFqoyCokhZNwl2SCeBNxOZRDO30oR2ZEIvLYQKxIdxzy3XQ5dTCiKHZpOYeS/veTMVwYf3eQwNKwESCfb4LsRrIcMFDA8AEio0AFDLjBAUIkqkgFAhAA8jUKmZIQFGCQolPlIwQIMEixMFqOG7MWNBAROKQqyc2STCB41MZlgokGdCzAkaHDjMUlOhQwcEIJadk3HARlAbBPC1CNCBqgQTmVQE5cBgRIQhMlTiMnSjAISqVRUIKeCUg4Z1QkI0KIGrlAISFoa8oGA0wDUIHDYEi5CiAa8bG0gIEUFiw+EbFxR0GNpI5hARNFKsQFSjRqYAJBxEu9EC5xAUDwpLWFtDA88bAkiQCNAwp4oGDVIsA9H5a6PEJCiIZSIhd4MOQyS0Xi0EhmwSlJugoIChge8bLFojGGJiwwY++ESwoKZCQw0HViSMpnnjwIMHB/AFAQAh+QQJCQA2ACwAAAAAIAAgAIUEAgSEgoTEwsRERkSkoqTk4uQkIiRkZmSUkpTU0tS0srT08vQUEhR0dnRUVlQ0MjSMiozMysysqqzs6uycmpzc2ty8urz8+vwMCgxMTkxsbmwcGhx8fnw8OjwEBgSEhoTExsSkpqTk5uQsKixsamyUlpTU1tS0trT09vR8enxcXlw0NjSMjozMzsysrqzs7uycnpzc3ty8vrz8/vxUUlQcHhz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEgknhSKU3HJJC5as6EAKRjOWovm8pI4ToYthSsxnCATF+0whnS1hpVkZRhxHWNqMFKRtonEXzYoRwpveUIzAnZ4NgtIKEJsLiB9TAssUUIoFgoyiEeZMgoWkIgxlTYNABmlNmYKL0IynjYvSLFCFxEKJnAAvyOMNmxzRSYKwiiiSFk2JL+/GLSumUQzuK6EdmQ2iSoY0CyHQnFIJy3YQy8UK79KeWaTMdVNCR/0TTMVzeP9aiMDSLDgharfhQUiKrQQcKLGhocQVxTUMoOTizZIHELcUGPAxHwyCO05sYJGgxIy5vmzgmJCjBYgLKycuSQBAnxMZoAIpOUFvgEHDx6AOFSAAoUQCVohEtBgRdAVLvqZMFqCggWVNj4EDTqAmw0QOC/0EjIBBgwKVav46fBghQqeLjIQyFVKAIehmlwYhcGvxAMOlVpkyMCIAweyHAIUs3FBBgW8eYmIcJBBQy4SJPqU4AAhnYmPlwcrIHvgQKAIhkuALjLjw2AazVqU5obiQwAOEnAuUTA4A4QhFkrLFCIhMYcIhy4QoJHBK4UDJGCsCRBAxuoiEyhUg1D6d64T6Wg2wJyiXxAAIfkECQkANwAsAAAAACAAIACFBAIEhIKExMLEREJE5OLkpKKkZGJkJCIk1NLU9PL0tLK0lJKUVFJUdHJ0NDI0HBoczMrM7OrsrKqsbGps3Nrc/Pr8vLq8nJqcXFpcjI6MTEpMLCosfHp8PDo8BAYEhIaExMbE5ObkpKakZGZk1NbU9Pb0tLa0lJaUVFZUNDY0HB4czM7M7O7srK6sbG5s3N7c/P78vL68nJ6cXF5cTE5MLC4sfH58////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv7Am3BIJJoUClNxySSSDLChACkYwlaJ5pLVAACUwpWihRhGkIiKdnjyAlBDSpIyhLSOr/Vw5vVEhCFIIUIlRworekMlKV4ZhEglQi9IMVFNCSeWNwQPADVCMEiWMUlqoC+mQjYPBllCAl4QQjExQixJLEMVEAokQy8qDw8DeUIXAAFLJArFNyWkd64cwsIbtbOaVrlCEYZoQyAuwcIniUJySCYr20QJMjTC12tnLSAv2UwkC/hMMBSu5gKuGYCBwwULFCIJBJUgBIUVAkykSOGAYkUaqfTAsIBkTMcODhzUoNgBQ8Y1MKbcQXKHxogPEkCE4JcIRokIL1aAkLew58IQEgVO9iPB7lKLCRpoINJzRkEMCidhQPhAIykNCwEndYQwU8iJqlVn+BKSZgmMZiwsrFRQ5kYEBkkb/BFiYYQCQqZWXFh6o4KAlQpvFKCRIRWJESMICFmwgNuFE4NAiRlLCOuQEA1eCqkQIIClFhdkANwkVJeNEROusbBhYxuCCxcklDZ7YgJqhSQC2KDj7PEFEzSLxEA84oIUGwGqzHoso+2aCgps877RQneLy6EhzN4iQdMF5MZBgRjtM0NnR+aCAAA7";
            return Images;
        })();
        Ui.Images = Images;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
(function (JQueryUtils) {
            (function (VerticalAlignment) {
                VerticalAlignment[VerticalAlignment["top"] = 0] = "top";
                VerticalAlignment[VerticalAlignment["middle"] = 1] = "middle";
                VerticalAlignment[VerticalAlignment["bottom"] = 2] = "bottom";
                VerticalAlignment[VerticalAlignment["innerTop"] = 3] = "innerTop";
                VerticalAlignment[VerticalAlignment["innerBottom"] = 4] = "innerBottom";
            })(JQueryUtils.VerticalAlignment || (JQueryUtils.VerticalAlignment = {}));
            var VerticalAlignment = JQueryUtils.VerticalAlignment;

            (function (HorizontalAlignment) {
                HorizontalAlignment[HorizontalAlignment["left"] = 0] = "left";
                HorizontalAlignment[HorizontalAlignment["center"] = 1] = "center";
                HorizontalAlignment[HorizontalAlignment["right"] = 2] = "right";
                HorizontalAlignment[HorizontalAlignment["innerLeft"] = 3] = "innerLeft";
                HorizontalAlignment[HorizontalAlignment["innerRight"] = 4] = "innerRight";
            })(JQueryUtils.HorizontalAlignment || (JQueryUtils.HorizontalAlignment = {}));
            var HorizontalAlignment = JQueryUtils.HorizontalAlignment;

            function positionPopup(popUp, nextTo, appendTo, boundary, desiredPosition, checkForBoundary) {
                if (typeof checkForBoundary === "undefined") { checkForBoundary = 0; }
                popUp.appendTo(appendTo);
                desiredPosition.verticalOffset = desiredPosition.verticalOffset ? desiredPosition.verticalOffset : 0;
                desiredPosition.horizontalOffset = desiredPosition.horizontalOffset ? desiredPosition.horizontalOffset : 0;

                var popUpPosition = nextTo.offset();
                basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
                basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition);
                finalAdjustement(popUp.offset(), popUpPosition, popUp, desiredPosition);

                var popUpBoundary = getBoundary(popUp);
                var boundaryPosition = getBoundary(boundary);
                if (checkForBoundary < 2) {
                    var checkBoundary = checkForOutOfBoundary(popUpBoundary, boundaryPosition);
                    if (checkBoundary.vertical != "ok" || checkBoundary.horizontal != "ok") {
                        var newDesiredPosition = alignInsideBoundary(desiredPosition, checkBoundary);
                        positionPopup(popUp, nextTo, appendTo, boundary, newDesiredPosition, checkForBoundary + 1);
                    }
                }
            }
            JQueryUtils.positionPopup = positionPopup;

            function finalAdjustement(popUpOffSet, popUpPosition, popUp, desiredPosition) {
                var position = popUp.position();
                popUp.css({
                    "position": "absolute",
                    "top": (position.top + desiredPosition.verticalOffset) - (popUpOffSet.top - popUpPosition.top) + "px",
                    "left": (position.left + desiredPosition.horizontalOffset) - (popUpOffSet.left - popUpPosition.left) + "px"
                });
            }

            function basicVerticalAlignment(popUpPosition, popUp, nextTo, desiredPosition) {
                switch (desiredPosition.vertical) {
                    case 0 /* top */:
                        popUpPosition.top -= popUp.outerHeight();
                        break;
                    case 2 /* bottom */:
                        popUpPosition.top += nextTo.outerHeight();
                        break;
                    case 1 /* middle */:
                        popUpPosition.top -= popUp.outerHeight() / 3;
                    case 3 /* innerTop */:
                        break;
                    case 4 /* innerBottom */:
                        popUpPosition.top -= popUp.outerHeight() - nextTo.outerHeight();
                        break;
                    default:
                        break;
                }
            }

            function basicHorizontalAlignment(popUpPosition, popUp, nextTo, desiredPosition) {
                switch (desiredPosition.horizontal) {
                    case 0 /* left */:
                        popUpPosition.left -= popUp.outerWidth();
                        break;
                    case 2 /* right */:
                        popUpPosition.left += nextTo.outerWidth();
                        break;
                    case 1 /* center */:
                        popUpPosition.left += offSetToAlignCenter(popUp, nextTo);
                        break;
                    case 3 /* innerLeft */:
                        break;
                    case 4 /* innerRight */:
                        popUpPosition.left -= popUp.outerWidth() - nextTo.outerWidth();
                        break;
                    default:
                        break;
                }
            }

            function alignInsideBoundary(oldPosition, checkBoundary) {
                var newDesiredPosition = oldPosition;
                if (checkBoundary.horizontal == "left") {
                    newDesiredPosition.horizontal = 2 /* right */;
                }
                if (checkBoundary.horizontal == "right") {
                    newDesiredPosition.horizontal = 0 /* left */;
                }
                if (checkBoundary.vertical == "top") {
                    newDesiredPosition.vertical = 2 /* bottom */;
                }
                if (checkBoundary.vertical == "bottom") {
                    newDesiredPosition.vertical = 0 /* top */;
                }
                return newDesiredPosition;
            }

            function offSetToAlignCenter(popUp, nextTo) {
                return (nextTo.outerWidth() - popUp.outerWidth()) / 2;
            }

            function getBoundary(element) {
                var boundaryOffset = element.offset();
                return {
                    top: boundaryOffset.top,
                    left: boundaryOffset.left,
                    right: boundaryOffset.left + element.outerWidth(),
                    bottom: boundaryOffset.top + element.outerHeight()
                };
            }

            function checkForOutOfBoundary(popUpBoundary, boundary) {
                var ret = {
                    vertical: "ok",
                    horizontal: "ok"
                };
                if (popUpBoundary.top < boundary.top) {
                    ret.vertical = "top";
                }
                if (popUpBoundary.bottom > boundary.bottom) {
                    ret.vertical = "bottom";
                }
                if (popUpBoundary.left < boundary.left) {
                    ret.horizontal = "left";
                }
                if (popUpBoundary.right > boundary.right) {
                    ret.horizontal = "right";
                }
                return ret;
            }

            function getPopUpCloseButton(captionForClose, captionForReminder) {
                return "<span class='coveo-close-button'>" + "<span class='coveo-icon coveo-sprites-quickView-close'></span>" + captionForClose + "</span>" + "<span class='coveo-pop-up-reminder' >" + captionForReminder + "</span>";
            }
            JQueryUtils.getPopUpCloseButton = getPopUpCloseButton;

            function getBasicLoadingAnimation() {
                var loadDotClass = 'coveo-loading-dot';
                return Coveo.$("" + "<div class='coveo-first-loading-animation' >" + "<div class='coveo-logo' ></div>" + "<div class='coveo-loading-container'>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "</div>" + "</div>");
            }
            JQueryUtils.getBasicLoadingAnimation = getBasicLoadingAnimation;

            function getBasicLoadingDots() {
                var loadDotClass = 'coveo-loading-dot';
                return Coveo.$("" + "<div class='coveo-generic-loading-animation coveo-loading-animation'>" + "<div class='coveo-loading-container'>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "<div class='" + loadDotClass + "' ></div>" + "</div>" + "</div>");
            }
            JQueryUtils.getBasicLoadingDots = getBasicLoadingDots;

            function addToggleClassOnSearchInterface(direction, isPhonegap) {
                if (typeof isPhonegap === "undefined") { isPhonegap = false; }
                var searchInterfaceClass = "." + Ui.Component.computeCssClassNameForType(Ui.SearchInterface.ID);
                Coveo.$(searchInterfaceClass + ",.coveo-glass").addClass('coveo-' + direction);
                Coveo.$(".coveo-glass").addClass('coveo-active-glass');
                if (isPhonegap && Ui.Device.getDeviceName() == "Android") {
                    Coveo.$(document).on("backbutton", Coveo.$.proxy(JQueryUtils.removeToggleClassOnSearchInterface, this, true));
                }
            }
            JQueryUtils.addToggleClassOnSearchInterface = addToggleClassOnSearchInterface;

            function removeToggleClassOnSearchInterface(isPhonegap) {
                if (typeof isPhonegap === "undefined") { isPhonegap = false; }
                var searchInterfaceClass = "." + Ui.Component.computeCssClassNameForType(Ui.SearchInterface.ID);
                Coveo.$(searchInterfaceClass + ",.coveo-glass").removeClass('coveo-slide-right').removeClass('coveo-slide-left').removeClass('coveo-active-glass');
                Coveo.$('.coveo-tab-section').removeClass('coveo-opened-by-current-tab');
                Coveo.$("." + Ui.Component.computeCssClassNameForType(Ui.CurrentTab.ID)).removeClass('coveo-opening-tab-section');
                if (isPhonegap && Ui.Device.getDeviceName() == "Android") {
                    Coveo.$(document).off("backbutton");
                }
            }
            JQueryUtils.removeToggleClassOnSearchInterface = removeToggleClassOnSearchInterface;

            function highlightElement(initialString, valueToSearch) {
                var regex = new RegExp(Coveo.Utils.escapeRegexCharacter(valueToSearch), "i");
                var firstChar = initialString.search(regex);
                var lastChar = firstChar + valueToSearch.length;
                return Coveo.StringUtils.htmlEncode(initialString.slice(0, firstChar)) + "<span class='coveo-highlight'>" + Coveo.StringUtils.htmlEncode(initialString.slice(firstChar, lastChar)) + "</span>" + Coveo.StringUtils.htmlEncode(initialString.slice(lastChar));
            }
            JQueryUtils.highlightElement = highlightElement;

            function findScrollingParent(element) {
                var currentElement = Coveo.$(element);
                while (!(currentElement.is(document)) && (currentElement.length != 0)) {
                    if (isElementScrollable(currentElement)) {
                        if (!currentElement.is("body")) {
                            return currentElement.get(0);
                        }
                        return Coveo.$(window).get(0);
                    }
                    currentElement = currentElement.parent();
                }
                return Coveo.$(window).get(0);
            }
            JQueryUtils.findScrollingParent = findScrollingParent;

            function isElementScrollable(element) {
                return (element.css("overflow-y") == "scroll");
            }

            Coveo.$.fn.fastToggle = function (visible) {
                return this.css('display', visible ? '' : 'none');
            };

            function htmlToDom(html) {
                var parsedHtml = Coveo.$('<div>').html(html);

                // If the template has a single root element, we return it directly. Otherwise
                // we'll have to wrap this thing in a div as ResultList expects a single element.
                if (parsedHtml.children().length == 1) {
                    return parsedHtml.children().get(0);
                }
                return parsedHtml.get(0);
            }
            JQueryUtils.htmlToDom = htmlToDom;
        })(Ui.JQueryUtils || (Ui.JQueryUtils = {}));
        var JQueryUtils = Ui.JQueryUtils;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
(function (Device) {
            //Not sure about this : In year 2033 who's to say that this list won't be 50 page long !
            var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Urls in Phonegap starts with file:///XXX_asset in android, file:///var/mobile in iOS
            var phonegap = /^file:\/\/\/.*_asset/i.test(document.URL) || /^file:\/\/\/.*var\/mobile/i.test(document.URL);

            function getDeviceName() {
                var userAgent = navigator.userAgent;
                if (userAgent.match(/Android/i))
                    return "Android";
                if (userAgent.match(/BlackBerry/i))
                    return "BlackBerry";
                if (userAgent.match(/iPhone/i))
                    return "iPhone";
                if (userAgent.match(/iPad/i))
                    return "iPad";
                if (userAgent.match(/iPod/i))
                    return "iPod";
                if (userAgent.match(/Opera Mini/i))
                    return "Opera Mini";
                if (userAgent.match(/IEMobile/i))
                    return "IE Mobile";
                if (userAgent.match(/Chrome/i))
                    return "Chrome";
                if (userAgent.match(/MSIE/i) || userAgent.match(/Trident/i))
                    return "IE";
                if (userAgent.match(/Opera/i))
                    return "Opera";
                if (userAgent.match(/Firefox/i))
                    return "Firefox";
                if (userAgent.match(/Safari/i))
                    return "Safari";
                return "Others";
            }
            Device.getDeviceName = getDeviceName;

            function isAndroid() {
                return getDeviceName() == "Android";
            }
            Device.isAndroid = isAndroid;

            function isIos() {
                var deviceName = getDeviceName();
                return deviceName == "iPhone" || deviceName == "iPad" || deviceName == "iPod";
            }
            Device.isIos = isIos;

            function isIE8or9() {
                var myNav = navigator.userAgent.toLowerCase();
                if (myNav.indexOf('msie') == -1)
                    return false;
                return parseInt(myNav.split('msie')[1]) < 10;
            }
            Device.isIE8or9 = isIE8or9;

            function isMobileDevice() {
                return mobile;
            }
            Device.isMobileDevice = isMobileDevice;

            function isPhonegap() {
                return phonegap;
            }
            Device.isPhonegap = isPhonegap;

            function isSmallScreenWidth() {
                return screen.width <= 480;
            }
            Device.isSmallScreenWidth = isSmallScreenWidth;

            function isSmallScreenHeight() {
                return screen.height <= 640;
            }
            Device.isSmallScreenHeight = isSmallScreenHeight;
        })(Ui.Device || (Ui.Device = {}));
        var Device = Ui.Device;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        (function (OS) {
            (function (NAME) {
                NAME[NAME["WINDOWS"] = 0] = "WINDOWS";
                NAME[NAME["MACOSX"] = 1] = "MACOSX";
                NAME[NAME["UNIX"] = 2] = "UNIX";
                NAME[NAME["LINUX"] = 3] = "LINUX";
                NAME[NAME["UNKNOWN"] = 4] = "UNKNOWN";
            })(OS.NAME || (OS.NAME = {}));
            var NAME = OS.NAME;

            function get(nav) {
                if (typeof nav === "undefined") { nav = navigator; }
                var osName;
                if (nav.appVersion.indexOf("Win") != -1) {
                    osName = 0 /* WINDOWS */;
                } else if (nav.appVersion.indexOf("Mac") != -1) {
                    osName = 1 /* MACOSX */;
                } else if (nav.appVersion.indexOf("X11") != -1) {
                    osName = 2 /* UNIX */;
                } else if (nav.appVersion.indexOf("Linux") != -1) {
                    osName = 3 /* LINUX */;
                } else {
                    osName = 4 /* UNKNOWN */;
                }
                return osName;
            }
            OS.get = get;
        })(Ui.OS || (Ui.OS = {}));
        var OS = Ui.OS;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
(function (FacetUtils) {
            function getRegexToUseForFacetSearch(value) {
                return new RegExp(Coveo.Utils.escapeRegexCharacter(value), 'i');
            }
            FacetUtils.getRegexToUseForFacetSearch = getRegexToUseForFacetSearch;

            function getValuesToUseForSearchInFacet(original, facet) {
                var ret = [original];
                var regex = this.getRegexToUseForFacetSearch(original);
                if (facet.options.valueCaption) {
                    _.each(_.filter(_.pairs(facet.options.valueCaption), function (pair) {
                        return regex.test(pair[1]);
                    }), function (match) {
                        ret.push(match[0]);
                    });
                }
                if (facet.options.field == '@sysfiletype') {
                    _.each(_.filter(_.pairs(Ui.TranslatedFacetValues), function (pair) {
                        return regex.test(pair[1]);
                    }), function (match) {
                        ret.push(match[0]);
                    });
                }
                return ret;
            }
            FacetUtils.getValuesToUseForSearchInFacet = getValuesToUseForSearchInFacet;

            function buildFacetSearchPattern(values) {
                values = _.map(values, function (value) {
                    return Coveo.Utils.escapeRegexCharacter(value);
                });
                values[0] = ".*" + values[0] + ".*";
                return values.join("|");
            }
            FacetUtils.buildFacetSearchPattern = buildFacetSearchPattern;

            function needAnotherFacetSearch(currentSearchLength, newSearchLength, oldSearchLength, desiredSearchLength) {
                //Something was removed (currentSearch < newSearch)
                //&& we might want to display more facet search result(currentSearch < desiredSearch)
                //&& the new query returned more stuff than the old one so there's still more results(newLength != oldLength)
                return currentSearchLength < newSearchLength && currentSearchLength < desiredSearchLength && newSearchLength != oldSearchLength;
            }
            FacetUtils.needAnotherFacetSearch = needAnotherFacetSearch;

            function addNoStateCssClassToFacetValues(facet, container) {
                //This takes care of adding the correct css class on each facet value checkbox (empty white box) if at least one value is selected in that facet
                if (facet.values.getSelected().length != 0) {
                    var noStates = container.find("li").not(".coveo-selected");
                    _.each(noStates, function (noState) {
                        Coveo.$(noState).addClass('coveo-no-state');
                    });
                }
            }
            FacetUtils.addNoStateCssClassToFacetValues = addNoStateCssClassToFacetValues;

            function tryToGetTranslatedCaption(value) {
                if (Ui.TranslatedFacetValues[value] != undefined) {
                    return Ui.TranslatedFacetValues[value];
                } else {
                    return value;
                }
            }
            FacetUtils.tryToGetTranslatedCaption = tryToGetTranslatedCaption;

            function clipCaptionsToAvoidOverflowingTheirContainer(facet, forceClip) {
                if (!(facet instanceof Ui.HierarchicalFacet) || forceClip) {
                    facet.logger.trace("Clipping captions");

                    //force facet to show to calculate width
                    var element = Coveo.$(facet.element).show();
                    var captions = element.find('.coveo-caption');
                    for (var i = 0; i < captions.length; i++) {
                        if (captions[i].style.width != '') {
                            captions[i].style.width = '';
                        }
                    }
                    var labels = element.find('.coveo-label');
                    var labelsMaxWidth = [];
                    for (var i = 0; i < labels.length; i++) {
                        var label = labels.get(i);
                        var labelJQuery = Coveo.$(label);

                        var captionJQuery = labelJQuery.find('.coveo-caption');
                        var caption = captionJQuery.get(0);

                        var labelWidth = label.scrollWidth;
                        var labelVisibleWidth = label.clientWidth;

                        var captionWidth = caption.scrollWidth;

                        var crop = Math.max(0, labelWidth - labelVisibleWidth);
                        if (crop) {
                            labelsMaxWidth.push({
                                element: captionJQuery,
                                width: captionWidth,
                                crop: crop,
                                label: labelJQuery
                            });
                        }
                    }

                    //remove the specific css class
                    element.css("display", "");
                    for (var i = 0; i < labelsMaxWidth.length; i++) {
                        var labelMaxWidth = labelsMaxWidth[i];
                        var htmlElement = labelMaxWidth.element.get(0);
                        htmlElement.style.width = labelMaxWidth.width - labelMaxWidth.crop + 'px';
                        var dom = labelMaxWidth.element[0];
                        if (labelMaxWidth.crop > 0) {
                            labelMaxWidth.label.attr('title', labelMaxWidth.element.text());
                        } else {
                            labelMaxWidth.label.attr('title', null);
                        }
                    }
                }
            }
            FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer = clipCaptionsToAvoidOverflowingTheirContainer;
        })(Ui.FacetUtils || (Ui.FacetUtils = {}));
        var FacetUtils = Ui.FacetUtils;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        (function (PhonegapUtils) {
            function bindOpenLinkInPhonegap(element, uri) {
                Coveo.$(element).fastClick(function (ev) {
                    ev.preventDefault();
                    if (uri && uri.indexOf('javascript:') < 0) {
                        PhonegapUtils.openInPhonegap(uri);
                    }
                });
            }
            PhonegapUtils.bindOpenLinkInPhonegap = bindOpenLinkInPhonegap;
            function openInPhonegap(uri) {
                window.open(uri, '_system', 'location=yes');
            }
            PhonegapUtils.openInPhonegap = openInPhonegap;
        })(Ui.PhonegapUtils || (Ui.PhonegapUtils = {}));
        var PhonegapUtils = Ui.PhonegapUtils;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        (function (MobileUtils) {
            var clickCancelingOverlay = Coveo.$(document.createElement('div')).addClass('coveo-click-canceling-overlay');

            function showClickCancelingOverlay(duration) {
                clickCancelingOverlay.addClass('active');
                setTimeout(function () {
                    clickCancelingOverlay.removeClass('active');
                }, duration);
            }
            MobileUtils.showClickCancelingOverlay = showClickCancelingOverlay;

            function showClickFeedback(element, duration) {
                element.addClass('coveo-clicked');
                setTimeout(function () {
                    element.removeClass('coveo-clicked');
                }, duration);
            }
            MobileUtils.showClickFeedback = showClickFeedback;

            function appendClickCancelingOverlay() {
                Coveo.$('.' + Ui.Component.computeCssClassNameForType(Ui.SearchInterface.ID)).append(clickCancelingOverlay);
            }

            function hideIOSKeyboard(activeElement) {
                Coveo.$(window).focus();
                Coveo.$(activeElement).blur();
            }
            MobileUtils.hideIOSKeyboard = hideIOSKeyboard;

            function hideIOSKeyboardOnWindowClick() {
                Coveo.$(window).on('touchstart', function (e) {
                    if (!Coveo.$(e.target).is('input') && Coveo.$(document.activeElement).is('input')) {
                        MobileUtils.hideIOSKeyboard(document.activeElement);
                    }
                });
            }

            function initMobileUtils() {
                if (Coveo.Ui.Device.isMobileDevice()) {
                    Coveo.$(function () {
                        return appendClickCancelingOverlay();
                    });
                    hideIOSKeyboardOnWindowClick();
                }
            }

            initMobileUtils();
        })(Ui.MobileUtils || (Ui.MobileUtils = {}));
        var MobileUtils = Ui.MobileUtils;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var StandaloneResult = (function () {
            function StandaloneResult(searchInterface, resultTemplate, result) {
                this.searchInterface = searchInterface;
                this.result = result;
                this.element = resultTemplate.instantiateToElement(result);
                Coveo.$(this.element).data("CoveoResult", result);
                Ui.Component.bindResultToElement(this.element, result);
            }
            StandaloneResult.prototype.initialize = function () {
                var initOptions = this.searchInterface.options;
                var initParameters = Coveo.$.extend({}, { options: initOptions }, this.searchInterface.getBindings(), { result: this.result });
                Ui.CoveoJQuery.automaticallyCreateComponentsInside(this.element, initParameters);
            };
            return StandaloneResult;
        })();
        Ui.StandaloneResult = StandaloneResult;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Models) {
        var Model = (function (_super) {
            __extends(Model, _super);
            function Model(element, id, attributes, bindings) {
                var _this = this;
                _super.call(this, element, id, bindings);
                this.eventNameSpace = id;

                this.defaultAttributes = Coveo.$.extend(true, {}, this.defaultAttributes, attributes); //Copy to default attributes
                this.attributes = attributes;
                this.logger.debug("Creating model");
                this.bind.onRoot(Coveo.Events.InitializationEvents.afterComponentsInitialization, function () {
                    _this.setMultiple({});
                });
            }
            Model.prototype.set = function (attribute, value, options) {
                var toSet = {};
                toSet[attribute] = value;
                this.setMultiple(toSet, options);
            };

            Model.prototype.setMultiple = function (toSet, options) {
                var _this = this;
                var anythingChanged = false;
                this.preprocessEvent(toSet);
                _.each(toSet, function (value, attribute) {
                    if (!options || !options.customAttribute) {
                        _this.checkIfAttributeExists(attribute);
                    }
                    value = _this.parseToCorrectType(attribute, value);
                    if (!options || options.validateType) {
                        _this.validateType(attribute, value);
                    }
                    if (_this.checkIfAttributeChanged(attribute, value) || (options ? options.silent === false : false)) {
                        _this.attributes[attribute] = value;
                        anythingChanged = true;
                        if (options == null || !options.silent) {
                            _this.attributeHasChangedEvent(attribute);
                        }
                    }
                });
                if (anythingChanged && (options == null || !options.silent)) {
                    this.attributesHasChangedEvent();
                    this.anyEvent();
                }
            };

            Model.prototype.setNewDefault = function (attribute, value, options) {
                if (!options || !options.customAttribute) {
                    this.checkIfAttributeExists(attribute);
                }
                this.defaultAttributes[attribute] = value;
            };

            Model.prototype.setDefault = function (attribute, options) {
                this.set(attribute, this.defaultAttributes[attribute]);
            };

            Model.prototype.get = function (attribute) {
                if (attribute == undefined) {
                    return this.attributes;
                } else {
                    return this.attributes[attribute];
                }
            };

            Model.prototype.getDefault = function (attribute) {
                if (attribute == undefined) {
                    return this.defaultAttributes;
                } else {
                    return this.defaultAttributes[attribute];
                }
            };

            Model.prototype.reset = function () {
                this.setMultiple(this.defaultAttributes);
                this.modelWasResetEvent();
            };

            Model.prototype.registerNewAttribute = function (attribute, defaultValue) {
                this.defaultAttributes[attribute] = defaultValue;
                this.attributes[attribute] = defaultValue;
            };

            Model.prototype.getEventName = function (event) {
                return this.eventNameSpace + ":" + event;
            };

            Model.prototype.attributesHasChangedEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.change), this.createAttributesChangedArgument());
            };

            Model.prototype.attributeHasChangedEvent = function (attr) {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.changeOne) + attr, this.createAttributeChangedArgument(attr));
            };

            Model.prototype.preprocessEvent = function (attributes) {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.preprocess), attributes);
            };

            Model.prototype.modelWasResetEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.reset), this.createModelChangedArgument());
            };

            Model.prototype.anyEvent = function () {
                Coveo.$(this.element).trigger(this.getEventName(Model.eventTypes.all), this.createModelChangedArgument());
            };

            Model.prototype.createAttributeChangedArgument = function (attribute) {
                return { attribute: attribute, value: this.attributes[attribute] };
            };

            Model.prototype.createAttributesChangedArgument = function () {
                return { attributes: this.attributes };
            };

            Model.prototype.createModelChangedArgument = function () {
                return { model: this };
            };

            Model.prototype.checkIfAttributeExists = function (attribute) {
                Coveo.Assert.check(_.has(this.attributes, attribute));
            };

            Model.prototype.validateType = function (attribute, value) {
                if (!Coveo.Utils.isNullOrUndefined(this.attributes[attribute]) && !Coveo.Utils.isUndefined(value)) {
                    if (Coveo.Utils.isNumber(this.attributes[attribute])) {
                        Coveo.Assert.check(Coveo.Utils.isNumber(value) && !isNaN(value), "Non-matching type");
                    } else if (Coveo.Utils.isBoolean(this.attributes[attribute])) {
                        Coveo.Assert.check(Coveo.Utils.isBoolean(value) || Coveo.Utils.parseBooleanIfNotUndefined(value) !== undefined, "Non-matching type");
                    } else {
                        if (!Coveo.Utils.isNullOrUndefined(this.defaultAttributes[attribute])) {
                            Coveo.Assert.check(typeof value === typeof this.defaultAttributes[attribute], "Non-matching type");
                        }
                    }
                }
            };

            Model.prototype.parseToCorrectType = function (attribute, value) {
                if (Coveo.Utils.isNumber(this.attributes[attribute])) {
                    return parseInt(value, 10);
                } else if (Coveo.Utils.isBoolean(this.attributes[attribute])) {
                    if (Coveo.Utils.isBoolean(value)) {
                        return value;
                    } else {
                        return Coveo.Utils.parseBooleanIfNotUndefined(value);
                    }
                }
                return value;
            };

            Model.prototype.checkIfAttributeChanged = function (attribute, newValue) {
                var oldValue = this.attributes[attribute];
                if (Coveo.Utils.isNumber(oldValue) || Coveo.Utils.isString(oldValue) || Coveo.Utils.isBoolean(oldValue)) {
                    return oldValue !== newValue;
                }
                if (Coveo.Utils.isArray(oldValue)) {
                    return !Coveo.Utils.arrayEqual(oldValue, newValue);
                }
                if (Coveo.Utils.isObject(oldValue)) {
                    return !Coveo.Utils.objectEqual(oldValue, newValue);
                }
                return true;
            };
            Model.eventTypes = {
                preprocess: "preprocess",
                changeOne: "change:",
                change: "change",
                reset: "reset",
                all: "all"
            };
            return Model;
        })(Coveo.Ui.Component);
        Models.Model = Model;
    })(Coveo.Models || (Coveo.Models = {}));
    var Models = Coveo.Models;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Models) {
        var QueryStateModel = (function (_super) {
            __extends(QueryStateModel, _super);
            function QueryStateModel(element, attributes, bindings) {
                var merged = _.extend({}, QueryStateModel.defaultAttributes, attributes);
                _super.call(this, element, QueryStateModel.ID, merged, bindings);
            }
            QueryStateModel.getFacetId = function (id, include) {
                if (typeof include === "undefined") { include = true; }
                return 'f:' + id + (include ? '' : ':not');
            };

            QueryStateModel.getFacetOperator = function (id) {
                return 'f:' + id + ':operator';
            };

            QueryStateModel.getFacetLookupValue = function (id) {
                return QueryStateModel.getFacetId(id) + ":lookupvalues";
            };

            QueryStateModel.prototype.set = function (attribute, value, options) {
                this.validate(attribute, value);
                _super.prototype.set.call(this, attribute, value, options);
            };

            QueryStateModel.prototype.validate = function (attribute, value) {
                if (attribute == QueryStateModel.attributesEnum.first) {
                    Coveo.Assert.isLargerOrEqualsThan(0, value);
                }
            };

            QueryStateModel.prototype.getAttributes = function () {
                var _this = this;
                var attributes = {};
                _.each(this.queryStateModel.attributes, function (attribute, key) {
                    if (_.isObject(attribute)) {
                        if (!Coveo.Utils.objectEqual(attribute, _this.queryStateModel.defaultAttributes[key])) {
                            attributes[key] = attribute;
                        }
                    } else if (attribute != _this.queryStateModel.defaultAttributes[key]) {
                        attributes[key] = attribute;
                    }
                });
                return attributes;
            };
            QueryStateModel.ID = "state";

            QueryStateModel.defaultAttributes = {
                q: "",
                first: 0,
                t: "",
                hd: "",
                hq: "",
                sort: "",
                tg: ""
            };

            QueryStateModel.attributesEnum = {
                q: "q",
                first: "first",
                t: "t",
                sort: "sort",
                hd: "hd",
                hq: "hq",
                tg: "tg"
            };
            return QueryStateModel;
        })(Models.Model);
        Models.QueryStateModel = QueryStateModel;

        Coveo.Ui.CoveoJQuery.registerNamedMethod('state', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            Coveo.Assert.exists(element);

            var model = Coveo.Ui.Component.resolveBinding(element, QueryStateModel);
            Coveo.Assert.exists(model);

            if (args.length == 0) {
                // No args means return the model
                return model;
            } else if (args.length == 1 && Coveo.Utils.isNonEmptyString(args[0])) {
                // One string arg means retrieve value from model
                return model.get(args[0]);
            } else if (Coveo.Utils.isObject(args[0])) {
                // One dictionary means set multiple values
                var toSet = args[0];
                var options = Coveo.$.extend({ customAttribute: true }, args[1]);
                return model.setMultiple(toSet, options);
            } else if (args.length > 1) {
                // Otherwise we're setting a value
                var name = args[0];
                var value = args[1];
                var options = Coveo.$.extend({ customAttribute: true }, args[2]);
                Coveo.Assert.isNonEmptyString(name);
                return model.set(name, value, options);
            }
        });
    })(Coveo.Models || (Coveo.Models = {}));
    var Models = Coveo.Models;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Models) {
        var ComponentStateModel = (function (_super) {
            __extends(ComponentStateModel, _super);
            function ComponentStateModel(element, window_) {
                _super.call(this, element, ComponentStateModel.ID, {});
            }
            ComponentStateModel.prototype.registerComponent = function (componentId, component) {
                var currentAttribute = this.attributes[componentId];
                if (currentAttribute == undefined) {
                    this.attributes[componentId] = [component];
                } else {
                    this.attributes[componentId].push(component);
                }
            };
            ComponentStateModel.ID = "ComponentState";
            return ComponentStateModel;
        })(Models.Model);
        Models.ComponentStateModel = ComponentStateModel;
    })(Coveo.Models || (Coveo.Models = {}));
    var Models = Coveo.Models;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Models) {
        var ComponentOptionsModel = (function (_super) {
            __extends(ComponentOptionsModel, _super);
            function ComponentOptionsModel(element, attributes, window_) {
                var merged = _.extend({}, ComponentOptionsModel.defaultAttributes, attributes);
                _super.call(this, element, ComponentOptionsModel.ID, merged);
            }
            ComponentOptionsModel.ID = "ComponentOptions";

            ComponentOptionsModel.defaultAttributes = {
                resultLink: undefined
            };

            ComponentOptionsModel.attributesEnum = {
                resultLink: "resultLink"
            };
            return ComponentOptionsModel;
        })(Models.Model);
        Models.ComponentOptionsModel = ComponentOptionsModel;
    })(Coveo.Models || (Coveo.Models = {}));
    var Models = Coveo.Models;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Controllers) {
        var HistoryController = (function (_super) {
            __extends(HistoryController, _super);
            function HistoryController(element, _window, queryStateModel, queryController) {
                var _this = this;
                _super.call(this, element, HistoryController.ID);
                this._window = _window;
                this.queryStateModel = queryStateModel;
                this.queryController = queryController;
                this.ignoreNextHashChange = false;
                this.initialHashChange = false;
                this.willUpdateHash = false;

                this._window = this._window || window;
                this.queryStateModel = queryStateModel || this.resolveQueryStateModel();
                this.queryController = queryController || this.resolveQueryController();
                Coveo.Assert.exists(this.queryStateModel);
                Coveo.Assert.exists(this.queryController);

                Coveo.$(this.element).on(Coveo.Events.InitializationEvents.restoreHistoryState, function () {
                    return _this.updateModelFromHash();
                });
                Coveo.$(this.element).on(this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.all), function () {
                    return _this.updateHashFromModel();
                });
                Coveo.$(this._window).on('hashchange', Coveo.$.proxy(this.handleHashChange, this));
            }
            HistoryController.prototype.handleHashChange = function () {
                if (this.ignoreNextHashChange) {
                    this.ignoreNextHashChange = false;
                    return;
                }

                this.updateModelFromHash();
                this.queryController.executeQuery();
            };

            HistoryController.prototype.updateHashFromModel = function () {
                var _this = this;
                if (!this.willUpdateHash) {
                    Coveo.Defer.defer(function () {
                        var attributes = _this.queryStateModel.getAttributes();
                        _this.setHashValues(attributes);
                        _this.logger.debug("Saving state to hash", attributes);
                        _this.willUpdateHash = false;
                    });
                    this.willUpdateHash = true;
                }
            };

            HistoryController.prototype.updateModelFromHash = function () {
                var _this = this;
                var toSet = {};
                _.each(this.queryStateModel.attributes, function (value, key, obj) {
                    var valToSet = _this.getHashValue(key);
                    var modelSetOptions = {};

                    if (valToSet == undefined) {
                        valToSet = _this.queryStateModel.defaultAttributes[key];
                    }
                    toSet[key] = valToSet;
                });
                try  {
                    this.initialHashChange = true;
                    this.queryStateModel.setMultiple(toSet);
                } catch (err) {
                    this.logger.error("Error while setting attribute for the query state !", err);
                }
            };

            HistoryController.prototype.getHashValue = function (value) {
                Coveo.Assert.isNonEmptyString(value);

                return Coveo.HashUtils.getValue(value, Coveo.HashUtils.getHash(this._window));
            };

            HistoryController.prototype.setHashValues = function (values) {
                var hash = '#' + Coveo.HashUtils.encodeValues(values);
                this.ignoreNextHashChange = this._window.location.hash != hash;
                if (this.ignoreNextHashChange) {
                    if (this.initialHashChange) {
                        this.initialHashChange = false;
                        this._window.location.replace(hash);
                    } else {
                        this._window.location.hash = hash;
                    }
                }
            };
            HistoryController.ID = 'HistoryController';
            return HistoryController;
        })(Coveo.Ui.Component);
        Controllers.HistoryController = HistoryController;
    })(Coveo.Controllers || (Coveo.Controllers = {}));
    var Controllers = Coveo.Controllers;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Controllers) {
        var DefaultQueryOptions = (function () {
            function DefaultQueryOptions() {
                this.searchAsYouType = false;
            }
            return DefaultQueryOptions;
        })();

        var QueryController = (function (_super) {
            __extends(QueryController, _super);
            function QueryController(element, options) {
                _super.call(this, element, QueryController.ID);
                this.options = options;
                this.searchUidCache = new Coveo.Cache(function () {
                    return Coveo.QueryUtils.createGuid();
                });
                this.showingExecutingQueryAnimation = false;
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(options);
                this.firstQuery = true;
            }
            QueryController.prototype.setEndpoint = function (endpoint) {
                this.overrideEndpoint = endpoint;
                this.logger.debug('Endpoint set', endpoint);
            };

            QueryController.prototype.getEndpoint = function () {
                var endpoint = this.overrideEndpoint || this.options.endpoint;

                // We must wrap the endpoint in a decorator that'll add the call options
                // we obtain by firing the proper event. Those are used for authentication
                // providers, and I guess other stuff later on.
                return new Coveo.Rest.SearchEndpointWithDefaultCallOptions(endpoint, this.getCallOptions());
            };

            QueryController.prototype.executeQuery = function (options) {
                var _this = this;
                Coveo.ModalBox.close(true);

                this.logger.debug('Executing new query', query);

                var options = _.extend(new DefaultQueryOptions(), options);

                this.cancelAnyCurrentPendingQuery();

                if (options.beforeExecuteQuery != null) {
                    options.beforeExecuteQuery();
                }

                if (this.isStandaloneSearchBox()) {
                    this.redirectToSearchPage();
                    return Coveo.$.Deferred();
                }

                this.showExecutingQueryAnimation();

                var deferred = Coveo.$.Deferred();
                this.currentPendingQuery = deferred;

                var queryBuilder = this.createQueryBuilder(options);
                var query = queryBuilder.build();

                if (this.firstQuery) {
                    var firstQueryCause = Coveo.HashUtils.getValue('firstQueryCause', Coveo.HashUtils.getHash());
                    if (firstQueryCause != null) {
                        var meta = Coveo.HashUtils.getValue('firstQueryMeta', Coveo.HashUtils.getHash()) || {};
                        this.usageAnalytics.logSearchEvent(Coveo.Ui.AnalyticsActionCauseList[firstQueryCause], meta);
                    } else {
                        this.usageAnalytics.logSearchEvent(Coveo.Ui.AnalyticsActionCauseList.interfaceLoad, {});
                    }
                }

                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.newQuery, { deferred: deferred });

                var endpointToUse = this.getEndpoint();
                var deferredFromEndpoint = endpointToUse.search(query);
                deferredFromEndpoint.done(function (queryResults) {
                    Coveo.Assert.exists(queryResults);
                    if (_this.firstQuery) {
                        _this.firstQuery = false;
                    }

                    // If our deferred is no longer the current one, then the query
                    // has been cancel. We should do nothing here.
                    if (deferred !== _this.currentPendingQuery) {
                        return;
                    }

                    _this.logger.debug('Query results received', query, queryResults);

                    //if the searchapi returns a searchId, we take that value because it's collision rate is better
                    if (!Coveo.Utils.isNullOrEmptyString(queryResults.searchId)) {
                        _this.searchUidCache.push(queryResults.searchId);
                    }
                    Coveo.QueryUtils.setIndexAndUidOnQueryResults(query, queryResults, _this.getSearchUid());
                    Coveo.QueryUtils.setStateObjectOnQueryResults(_this.queryStateModel.get(), queryResults);
                    Coveo.QueryUtils.setTermsToHighlightOnQueryResults(query, queryResults);

                    var dataToSendOnPreprocessResult = {
                        queryBuilder: queryBuilder,
                        query: query,
                        results: queryResults,
                        searchAsYouType: options.searchAsYouType
                    };
                    _this.preprocessResultsEvent(dataToSendOnPreprocessResult);

                    var dataToSendOnNoResult = {
                        queryBuilder: queryBuilder,
                        query: query,
                        results: queryResults,
                        searchAsYouType: options.searchAsYouType,
                        retryTheQuery: false
                    };
                    if (queryResults.results.length == 0) {
                        _this.noResultEvent(dataToSendOnNoResult);
                    }

                    if (dataToSendOnNoResult.retryTheQuery) {
                        // When retrying the query, we must forward the results to the deferred we
                        // initially returned, in case someone is listening on it.
                        _this.executeQuery().done(function (queryResults) {
                            deferred.resolve(queryResults);
                        }).fail(function (data, error) {
                            deferred.reject(data, error);
                        });
                    } else {
                        _this.lastQueryBuilder = queryBuilder;
                        _this.currentPendingQuery.resolve(queryResults);
                        _this.currentPendingQuery = undefined;

                        var dataToSendOnSuccess = {
                            queryBuilder: queryBuilder,
                            query: query,
                            results: queryResults,
                            searchAsYouType: options.searchAsYouType
                        };
                        _this.querySuccessEvent(dataToSendOnSuccess);

                        Coveo.Defer.defer(function () {
                            _this.deferredQuerySuccessEvent(dataToSendOnSuccess);
                            _this.hideExecutingQueryAnimation();
                        });
                    }
                });

                deferredFromEndpoint.fail(function (data, error) {
                    // If our deferred is no longer the current one, then the query
                    // has been cancel. We should do nothing here.
                    if (deferred !== _this.currentPendingQuery) {
                        return;
                    }

                    _this.logger.error('Query triggered an error', query, error);

                    _this.currentPendingQuery.reject(error);
                    _this.currentPendingQuery = undefined;
                    var dataToSendOnError = {
                        queryBuilder: queryBuilder,
                        endpoint: endpointToUse,
                        query: query,
                        error: error,
                        searchAsYouType: options.searchAsYouType
                    };
                    _this.queryError(dataToSendOnError);

                    _this.hideExecutingQueryAnimation();
                });

                var dataToSendDuringQuery = {
                    queryBuilder: queryBuilder,
                    query: query,
                    deferred: deferred,
                    searchAsYouType: options.searchAsYouType
                };
                this.duringQueryEvent(dataToSendDuringQuery);
                return deferred;
            };

            QueryController.prototype.deferExecuteQuery = function (options) {
                var _this = this;
                this.showExecutingQueryAnimation();
                Coveo.Defer.defer(function () {
                    return _this.executeQuery(options);
                });
            };

            QueryController.prototype.fetchMore = function (count) {
                var _this = this;
                if (this.currentPendingQuery != undefined) {
                    return undefined;
                }

                var deferred = this.currentPendingQuery = Coveo.$.Deferred();

                var queryBuilder = new Coveo.Ui.QueryBuilder();
                this.continueLastQueryBuilder(queryBuilder, count);
                var query = queryBuilder.build();

                deferred = this.getEndpoint().search(query);
                var dataToSendDuringQuery = {
                    queryBuilder: queryBuilder,
                    query: query,
                    deferred: deferred,
                    searchAsYouType: false
                };
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.duringFetchMoreQuery, dataToSendDuringQuery);
                this.lastQueryBuilder = queryBuilder;
                deferred.done(function (results) {
                    Coveo.QueryUtils.setIndexAndUidOnQueryResults(query, results, _this.getSearchUid());
                    Coveo.QueryUtils.setStateObjectOnQueryResults(_this.queryStateModel.get(), results);
                    Coveo.QueryUtils.setTermsToHighlightOnQueryResults(query, results);
                    _this.currentPendingQuery = undefined;
                });

                return deferred;
            };

            QueryController.prototype.isStandaloneSearchBox = function () {
                return Coveo.Utils.isNonEmptyString(this.options.searchPageUri);
            };

            QueryController.prototype.newSearchUid = function () {
                this.searchUid = this.searchUidCache.get();
                return this.searchUid;
            };

            QueryController.prototype.getSearchUid = function () {
                return this.searchUid;
            };

            QueryController.prototype.continueLastQueryBuilder = function (queryBuilder, count) {
                Coveo.$.extend(queryBuilder, this.lastQueryBuilder);
                queryBuilder.firstResult = queryBuilder.firstResult + queryBuilder.numberOfResults;
                queryBuilder.numberOfResults = count;
            };

            QueryController.prototype.createQueryBuilder = function (options) {
                Coveo.Assert.exists(options);

                var queryBuilder = new Coveo.Ui.QueryBuilder();

                //Default values, components will probably override them if they exists
                queryBuilder.firstResult = queryBuilder.firstResult || 0;

                queryBuilder.numberOfResults = this.options.resultsPerPage;
                queryBuilder.filterField = this.options.filterField;
                queryBuilder.excerptLength = this.options.excerptLength;
                if (Coveo.Utils.isNonEmptyString(this.options.hiddenExpression)) {
                    queryBuilder.advancedExpression.add(this.options.hiddenExpression);
                }
                if (Coveo.Utils.isNonEmptyString(this.options.timezone)) {
                    queryBuilder.timezone = this.options.timezone;
                }

                // Allow outside code to customize the query builder. We provide two events,
                // to allow someone to have a peep at the query builder after the first phase
                // and add some stuff depending on what was put in there. The facets are using
                // this mechanism to generate query overrides.
                var dataToSendDuringBuildingQuery = {
                    queryBuilder: queryBuilder,
                    searchAsYouType: options.searchAsYouType
                };
                this.buildingQueryEvent(dataToSendDuringBuildingQuery);
                var dataToSendDuringDoneBuildingQuery = {
                    queryBuilder: queryBuilder,
                    searchAsYouType: options.searchAsYouType
                };
                this.doneBuildingQueryEvent(dataToSendDuringDoneBuildingQuery);

                return queryBuilder;
            };

            QueryController.prototype.cancelAnyCurrentPendingQuery = function () {
                if (Coveo.Utils.exists(this.currentPendingQuery)) {
                    this.logger.debug('Cancelling current pending query');

                    this.currentPendingQuery.reject();
                    this.currentPendingQuery = undefined;
                    return true;
                }
                return false;
            };

            QueryController.prototype.showExecutingQueryAnimation = function () {
                if (!this.showingExecutingQueryAnimation) {
                    Coveo.$(this.root).addClass('coveo-executing-query');
                    this.showingExecutingQueryAnimation = true;
                }
            };

            QueryController.prototype.hideExecutingQueryAnimation = function () {
                if (this.showingExecutingQueryAnimation) {
                    Coveo.$(this.root).removeClass('coveo-executing-query');
                    this.showingExecutingQueryAnimation = false;
                }
            };

            QueryController.prototype.redirectToSearchPage = function () {
                var stateValues = this.queryStateModel.getAttributes();
                var UACauseBy = this.usageAnalytics.getCurrentEventCause();
                if (UACauseBy != null) {
                    stateValues['firstQueryCause'] = UACauseBy;
                }
                var UAMeta = this.usageAnalytics.getCurrentEventMeta();
                if (UAMeta != null) {
                    stateValues['firstQueryMeta'] = UAMeta;
                }
                window.location.href = this.options.searchPageUri + '#' + Coveo.HashUtils.encodeValues(stateValues);
            };

            QueryController.prototype.getCallOptions = function () {
                var args = {
                    options: {
                        authentication: []
                    }
                };

                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.buildingCallOptions, args);

                return args.options;
            };

            QueryController.prototype.buildingQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.buildingQuery, args);
            };

            QueryController.prototype.doneBuildingQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.doneBuildingQuery, args);
            };

            QueryController.prototype.duringQueryEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.duringQuery, args);
            };

            QueryController.prototype.querySuccessEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.querySuccess, args);
            };

            QueryController.prototype.deferredQuerySuccessEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.deferredQuerySuccess, args);
            };

            QueryController.prototype.queryError = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.queryError, args);
            };

            QueryController.prototype.preprocessResultsEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.preprocessResults, args);
            };

            QueryController.prototype.noResultEvent = function (args) {
                Coveo.$(this.element).trigger(Coveo.Events.QueryEvents.noResults, args);
            };
            QueryController.ID = 'QueryController';
            return QueryController;
        })(Coveo.Ui.Component);
        Controllers.QueryController = QueryController;

        Coveo.Ui.CoveoJQuery.registerNamedMethod('executeQuery', function (element) {
            Coveo.Assert.exists(element);

            var queryController = Coveo.Ui.Component.resolveBinding(element, QueryController);
            Coveo.Assert.exists(queryController);
            queryController.executeQuery();
        });
    })(Coveo.Controllers || (Coveo.Controllers = {}));
    var Controllers = Coveo.Controllers;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Controllers) {
        var FacetQueryController = (function () {
            function FacetQueryController(facet) {
                this.facet = facet;
            }
            FacetQueryController.prototype.prepareForNewQuery = function () {
                this.lastGroupByRequestIndex = undefined;
                this.expressionToUseForFacetSearch = undefined;
            };

            FacetQueryController.prototype.computeOurFilterExpression = function () {
                var _this = this;
                Coveo.Assert.check(this.facet.values.hasSelectedOrExcludedValues());

                var builder = new Coveo.Ui.ExpressionBuilder();

                var selected = this.facet.values.getSelected();
                if (selected.length > 0) {
                    if (this.facet.options.useAnd) {
                        _.each(selected, function (value) {
                            builder.addFieldExpression(_this.facet.options.field, '==', [value.value]);
                        });
                    } else {
                        builder.addFieldExpression(this.facet.options.field, '==', _.map(selected, function (value) {
                            return value.value;
                        }));
                    }
                }

                var excluded = this.facet.values.getExcluded();
                if (excluded.length > 0) {
                    builder.addFieldNotEqualExpression(this.facet.options.field, _.map(excluded, function (value) {
                        return value.value;
                    }));
                }

                return builder.build();
            };

            FacetQueryController.prototype.putGroupByIntoQueryBuilder = function (queryBuilder) {
                Coveo.Assert.exists(queryBuilder);

                var allowedValues = this._createGroupByAllowedValues();
                var groupByRequest = this._createBasicGroupByRequest(allowedValues);

                var queryOverrideObject = this.createGroupByQueryOverride(queryBuilder);
                if (!Coveo.Utils.isNullOrUndefined(queryOverrideObject)) {
                    groupByRequest.queryOverride = queryOverrideObject.withoutConstant;
                    groupByRequest.constantQueryOverride = queryOverrideObject.constant;
                    this.expressionToUseForFacetSearch = queryOverrideObject.withoutConstant + (queryOverrideObject.constant ? " " + queryOverrideObject.constant : "");
                } else {
                    this.expressionToUseForFacetSearch = queryBuilder.computeCompleteExpression();
                    if (this.expressionToUseForFacetSearch == null) {
                        this.expressionToUseForFacetSearch = "@sysuri";
                    }
                }
                this.lastGroupByRequestIndex = queryBuilder.groupByRequests.length;
                queryBuilder.groupByRequests.push(groupByRequest);
            };

            FacetQueryController.prototype.searchInFacet = function (numberOfValuesToRequest, valuesToSearch, ignoreAccents) {
                if (typeof ignoreAccents === "undefined") { ignoreAccents = true; }
                var request = this.buildListFieldValuesRequest(numberOfValuesToRequest, valuesToSearch, false);
                return this.createListFieldDeferer(request);
            };

            FacetQueryController.prototype.searchInFacetWithLookupField = function (numberOfValuesToRequest, valuesToSearch, ignoreAccents) {
                if (typeof ignoreAccents === "undefined") { ignoreAccents = true; }
                var query = this.buildGroupByQuery();
                var groupBy = query.groupBy[0];
                groupBy.maximumNumberOfValues = numberOfValuesToRequest;
                groupBy.allowedValues = _.map(valuesToSearch, function (value) {
                    return '*' + value + '*';
                });
                var searchQuery = this.buildSearchQueryForFacetWithLookupField(valuesToSearch);
                if (query.aq == null) {
                    query.aq = searchQuery;
                } else {
                    query.aq += ' ' + searchQuery;
                }
                return this.createSearchDeferer(query);
            };

            FacetQueryController.prototype.recursiveFacetSearch = function (valueToCheckAgainst, numberOfValuesToRequest, oldLength, returnDeferred) {
                var _this = this;
                if (typeof returnDeferred === "undefined") { returnDeferred = Coveo.$.Deferred(); }
                var valuesToSearch = Coveo.Ui.FacetUtils.getValuesToUseForSearchInFacet(valueToCheckAgainst, this.facet);

                var onResult = function (fieldValues) {
                    var newLength = fieldValues.length;
                    fieldValues = _this.checkForFacetSearchValuesToRemove(fieldValues, valueToCheckAgainst);
                    if (Coveo.Ui.FacetUtils.needAnotherFacetSearch(fieldValues.length, newLength, oldLength, 5)) {
                        _this.recursiveFacetSearch(valueToCheckAgainst, numberOfValuesToRequest + numberOfValuesToRequest, newLength, returnDeferred);
                    } else {
                        returnDeferred.resolve(fieldValues);
                    }
                };
                var searchDeferred;
                if (this.facet.options.lookupField == null && this.facet.options.computedField == null) {
                    searchDeferred = this.facet.facetQueryController.searchInFacet(numberOfValuesToRequest, valuesToSearch, false);
                    searchDeferred.done(onResult);
                } else {
                    searchDeferred = this.facet.facetQueryController.searchInFacetWithLookupField(numberOfValuesToRequest, valuesToSearch, false);
                    searchDeferred.done(function (queryResults) {
                        var fieldValues = queryResults.groupByResults.length > 0 ? queryResults.groupByResults[0].values : [];
                        onResult(fieldValues);
                    });
                }

                searchDeferred.fail(function (data, error) {
                    returnDeferred.reject(data, error);
                });

                returnDeferred.fail(function () {
                    searchDeferred.reject();
                });

                return returnDeferred;
            };

            FacetQueryController.prototype.fetchMore = function () {
                var query = this.buildGroupByQuery();
                if (this.facet.values.size() > 0) {
                    query.groupBy.push(this._createBasicGroupByRequest(_.map(this.facet.values.getAll(), function (facetValue) {
                        return facetValue.value;
                    })));
                }
                return this.createSearchDeferer(query);
            };

            FacetQueryController.prototype.searchInFacetToUpdateDelta = function (facetValues) {
                var query = this.buildGroupByQuery();
                query.aq = this.computeOurFilterExpression();
                _.each(facetValues, function (facetValue) {
                    facetValue.waitingForDelta = true;
                });
                query.groupBy = [this._createBasicGroupByRequest(_.map(facetValues, function (facetValue) {
                        return facetValue.value;
                    }))];
                query.groupBy[0].completeFacetWithStandardValues = false;
                return this.createSearchDeferer(query);
            };

            FacetQueryController.prototype.createSearchDeferer = function (query) {
                return this.facet.getEndpoint().search(query);
            };

            FacetQueryController.prototype.createListFieldDeferer = function (request) {
                return this.facet.queryController.getEndpoint().listFieldValues(request);
            };

            FacetQueryController.prototype.buildSearchQueryForFacetWithLookupField = function (valuesToSearch) {
                var fieldToUse = this.facet.options.lookupField ? this.facet.options.lookupField : this.facet.options.field;
                return '(' + valuesToSearch.map(function (value) {
                    return Coveo.QueryUtils.buildFieldExpression(fieldToUse, "*=", ['*' + value + '*']);
                }).join(' OR ') + ')';
            };

            FacetQueryController.prototype.buildListFieldValuesRequest = function (numberOfResult, pattern, ignoreAccents, queryOverride) {
                if (typeof ignoreAccents === "undefined") { ignoreAccents = true; }
                var request = {
                    field: this.facet.options.field,
                    ignoreAccents: ignoreAccents,
                    sortCriteria: 'occurrences',
                    maximumNumberOfValues: numberOfResult,
                    queryOverride: queryOverride || this.expressionToUseForFacetSearch
                };
                if (pattern != null) {
                    request.pattern = FacetQueryController.makeFacetSearchPattern(pattern);
                    request.patternType = 'RegularExpression';
                }
                return request;
            };

            FacetQueryController.prototype.buildGroupByQuery = function (allowedValues) {
                var groupBy = [this._createBasicGroupByRequest(allowedValues)];

                return {
                    q: this.expressionToUseForFacetSearch,
                    enableDidYouMean: false,
                    firstResult: 0,
                    numberOfResults: 0,
                    groupBy: groupBy
                };
            };

            FacetQueryController.prototype._createGroupByAllowedValues = function () {
                // if you want to keep displayed values next time, take all current values as allowed values
                // otherwise take only the selected value
                var allowedFacetValues;
                if (this.facet.options.allowedValues != undefined) {
                    return this.facet.options.allowedValues;
                } else if (this.facet.options.customSort != undefined) {
                    return this.facet.options.customSort;
                } else {
                    if (this.facet.options.useAnd || !this.facet.keepDisplayedValuesNextTime) {
                        var selected = this.facet.values.getSelected();
                        if (selected.length == 0) {
                            return undefined;
                        }
                        allowedFacetValues = this.facet.values.getSelected();
                    } else {
                        allowedFacetValues = this.facet.values.getAll();
                    }
                    return _.map(allowedFacetValues, function (facetValue) {
                        return facetValue.value;
                    });
                }
            };

            FacetQueryController.prototype.createGroupByQueryOverride = function (queryBuilder) {
                if (!this.facet.values.hasSelectedOrExcludedValues() || this.facet.options.useAnd) {
                    return undefined;
                }
                var queryOverrideObject = _.defaults(queryBuilder.computeCompleteExpressionPartsExcept(this.computeOurFilterExpression()), { withoutConstant: "@sysuri" });
                return queryOverrideObject;
            };

            FacetQueryController.prototype._createBasicGroupByRequest = function (allowedValues, addComputedField) {
                if (typeof addComputedField === "undefined") { addComputedField = true; }
                var maximumNumberOfValues = this.facet.numberOfValues + (this.facet.options.enableMoreLess ? 1 : 0);
                var groupByRequest = {
                    field: this.facet.options.field,
                    maximumNumberOfValues: this.facet.numberOfValues + (this.facet.options.enableMoreLess ? 1 : 0),
                    sortCriteria: this.facet.options.sortCriteria,
                    injectionDepth: this.facet.options.injectionDepth,
                    completeFacetWithStandardValues: this.facet.options.allowedValues == undefined ? true : false
                };
                if (this.facet.options.lookupField) {
                    groupByRequest.lookupField = this.facet.options.lookupField;
                }
                if (allowedValues != null) {
                    groupByRequest.allowedValues = allowedValues;
                    groupByRequest.maximumNumberOfValues = Math.max(groupByRequest.maximumNumberOfValues, allowedValues.length);
                }

                if (addComputedField && Coveo.Utils.isNonEmptyString(this.facet.options.computedField)) {
                    groupByRequest.computedFields = [{
                            field: this.facet.options.computedField,
                            operation: this.facet.options.computedFieldOperation
                        }];
                }
                return groupByRequest;
            };

            FacetQueryController.prototype.checkForFacetSearchValuesToRemove = function (fieldValues, valueToCheckAgainst) {
                var _this = this;
                var regex = Coveo.Ui.FacetUtils.getRegexToUseForFacetSearch(valueToCheckAgainst);
                return _.filter(fieldValues, function (fieldValue) {
                    return regex.test(_this.facet.getValueCaption(fieldValue));
                });
            };

            FacetQueryController.makeFacetSearchPattern = function (values) {
                values = _.map(values, function (value) {
                    return Coveo.Utils.escapeRegexCharacter(value);
                });

                values[0] = ".*" + values[0] + ".*";
                return values.join("|");
            };
            return FacetQueryController;
        })();
        Controllers.FacetQueryController = FacetQueryController;
    })(Coveo.Controllers || (Coveo.Controllers = {}));
    var Controllers = Coveo.Controllers;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Controllers) {
        var FacetRangeQueryController = (function (_super) {
            __extends(FacetRangeQueryController, _super);
            function FacetRangeQueryController(facet) {
                var _this = this;
                _super.call(this, facet);
                this.facet = facet;
                this.facet.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, function (e, args) {
                    return _this.handleQuerySuccess(e, args);
                });
            }
            FacetRangeQueryController.prototype.putGroupByIntoQueryBuilder = function (queryBuilder) {
                if (this.facet.options.slider && this.facet.options.slider.graph) {
                    this.putGroupByForGraphIntoQueryBuilder(queryBuilder);
                }
                if (this.facet.options.slider) {
                    this.putGroupByForSliderIntoQueryBuilder(queryBuilder);
                } else {
                    _super.prototype.putGroupByIntoQueryBuilder.call(this, queryBuilder);
                }
            };

            FacetRangeQueryController.prototype._createBasicGroupByRequest = function (allowedValues, addComputedField) {
                if (typeof addComputedField === "undefined") { addComputedField = true; }
                var groupByQuery = _super.prototype._createBasicGroupByRequest.call(this, null, addComputedField);
                groupByQuery.allowedValues = undefined;
                if (this.facet.options.slider && this.facet.options.slider.graph) {
                    groupByQuery = this.buildGroupByQueryForSlider(groupByQuery);
                } else if (this.facet.options.slider) {
                    groupByQuery = this.buildGroupByQueryForAutomaticRanges(groupByQuery);
                } else if (Coveo.Utils.isNonEmptyArray(this.facet.options.ranges)) {
                    groupByQuery = this.buildGroupByQueryForPredefinedRanges(groupByQuery);
                } else if (this.facet.values.hasSelectedOrExcludedValues()) {
                    groupByQuery = this.buildGroupByQueryForSelectedAndExcludedValues(groupByQuery);
                } else {
                    groupByQuery = this.buildGroupByQueryForAutomaticRanges(groupByQuery);
                }
                return groupByQuery;
            };

            FacetRangeQueryController.prototype._createGroupByAllowedValues = function () {
                return undefined;
            };

            FacetRangeQueryController.prototype.computeOurFilterExpression = function (boundary) {
                if (typeof boundary === "undefined") { boundary = [this.facet.startOfSlider, this.facet.endOfSlider]; }
                if (this.facet.options.slider) {
                    var builder = new Coveo.Ui.ExpressionBuilder();
                    if (boundary[0] != undefined && boundary[1] != undefined) {
                        if (this.facet.options.slider.excludeOuterBounds) {
                            this.addFilterExpressionWithOuterBoundsExcluded(boundary[0], boundary[1], builder);
                        } else {
                            this.addFilterExpressionWithOuterBoundsIncluded(boundary[0], boundary[1], builder);
                        }
                    }
                    return builder.build();
                } else {
                    return _super.prototype.computeOurFilterExpression.call(this);
                }
            };

            FacetRangeQueryController.prototype.handleQuerySuccess = function (e, args) {
                var _this = this;
                if (this.facet.options.slider && this.facet.options.slider.graph && this.rangeValuesForGraphToUse == undefined) {
                    this.rangeValuesForGraphToUse = [];
                    var rawValues = args.results.groupByResults[this.graphGroupByQueriesIndex].values;
                    _.each(rawValues, function (rawValue) {
                        var rawSplit = rawValue.value.split("..");
                        _this.rangeValuesForGraphToUse.push({
                            start: _this.facet.options.dateField ? _this.getISOFormat(rawSplit[0].replace("@", " ")) : parseInt(rawSplit[0], 10),
                            end: _this.facet.options.dateField ? _this.getISOFormat(rawSplit[1].replace("@", " ")) : parseInt(rawSplit[1], 10)
                        });
                    });
                }
            };

            FacetRangeQueryController.prototype.addFilterExpressionWithOuterBoundsIncluded = function (start, end, builder) {
                if (start != this.facet.options.slider.start || end != this.facet.options.slider.end) {
                    if (this.facet.options.dateField) {
                        start = this.getFilterDateFormat(start);
                        end = this.getFilterDateFormat(end);
                    }
                    builder.addFieldExpression(this.facet.options.field, '==', [start + ".." + end]);
                }
            };

            FacetRangeQueryController.prototype.addFilterExpressionWithOuterBoundsExcluded = function (start, end, builder) {
                var startCompare = this.facet.options.slider.start;
                var endCompare = this.facet.options.slider.end;
                var startCompared = start;
                var endCompared = end;
                if (this.facet.options.dateField) {
                    startCompared = this.getFilterDateFormat(start);
                    endCompared = this.getFilterDateFormat(end);
                    startCompare = this.getFilterDateFormat(startCompare);
                    endCompare = this.getFilterDateFormat(endCompare);
                } else {
                    startCompared += '';
                    endCompared += '';
                    startCompare += '';
                    endCompare += '';
                }
                if (startCompared != startCompare && endCompared == endCompare) {
                    builder.addFieldExpression(this.facet.options.field, '>=', [startCompared]);
                } else if (startCompared == startCompare && endCompared != endCompare) {
                    builder.addFieldExpression(this.facet.options.field, '<=', [endCompared]);
                } else {
                    this.addFilterExpressionWithOuterBoundsIncluded(start, end, builder);
                }
            };

            FacetRangeQueryController.prototype.buildGroupByQueryForSlider = function (groupByQuery) {
                if (this.facet.options.slider.start != undefined && this.facet.options.slider.end != undefined) {
                    var start = this.facet.options.slider.start;
                    var end = this.facet.options.slider.end;
                    if (this.facet.options.dateField || this.facet.options.dateField) {
                        start = this.getISOFormat(start);
                        end = this.getISOFormat(end);
                    }
                    groupByQuery.rangeValues = [{
                            start: start,
                            end: end,
                            endInclusive: true,
                            label: "Slider"
                        }];
                    return groupByQuery;
                } else {
                    return this.buildGroupByQueryForAutomaticRanges(groupByQuery);
                }
            };

            FacetRangeQueryController.prototype.buildGroupByQueryForAutomaticRanges = function (groupByQuery) {
                groupByQuery.generateAutomaticRanges = true;
                return groupByQuery;
            };

            FacetRangeQueryController.prototype.buildGroupByQueryForPredefinedRanges = function (groupByQuery) {
                groupByQuery.rangeValues = this.facet.options.ranges;
                groupByQuery.maximumNumberOfValues = this.facet.options.ranges.length;
                return groupByQuery;
            };

            FacetRangeQueryController.prototype.putGroupByForGraphIntoQueryBuilder = function (queryBuilder) {
                this.graphGroupByQueriesIndex = queryBuilder.groupByRequests.length;
                var basicGroupByRequestForGraph = this._createBasicGroupByRequest();
                if (basicGroupByRequestForGraph.rangeValues) {
                    var basicRangeRequest = basicGroupByRequestForGraph.rangeValues[0];
                    basicGroupByRequestForGraph.rangeValues = this.createRangeValuesForGraph(basicRangeRequest);
                }
                var filter = this.computeOurFilterExpression(this.facet.getSliderBoundaryForQuery());
                if (filter != undefined) {
                    var queryOverrideObject = queryBuilder.computeCompleteExpressionPartsExcept(filter);
                    basicGroupByRequestForGraph.queryOverride = queryOverrideObject.withoutConstant;
                    basicGroupByRequestForGraph.constantQueryOverride = queryOverrideObject.constant;
                    if (basicGroupByRequestForGraph.queryOverride == undefined) {
                        basicGroupByRequestForGraph.queryOverride = "@sysuri";
                    }
                }
                basicGroupByRequestForGraph.sortCriteria = "nosort";
                basicGroupByRequestForGraph.maximumNumberOfValues = this.facet.options.slider.graph.steps;
                queryBuilder.groupByRequests.push(basicGroupByRequestForGraph);
            };

            FacetRangeQueryController.prototype.putGroupByForSliderIntoQueryBuilder = function (queryBuilder) {
                this.lastGroupByRequestIndex = queryBuilder.groupByRequests.length;
                var basicGroupByRequestForSlider = this._createBasicGroupByRequest();
                basicGroupByRequestForSlider.maximumNumberOfValues = 1;
                basicGroupByRequestForSlider.queryOverride = '@sysuri';
                basicGroupByRequestForSlider.sortCriteria = 'nosort';
                basicGroupByRequestForSlider.generateAutomaticRanges = true;
                basicGroupByRequestForSlider.rangeValues = undefined;
                queryBuilder.groupByRequests.push(basicGroupByRequestForSlider);
            };

            FacetRangeQueryController.prototype.createRangeValuesForGraph = function (basicRangeRequest) {
                if (this.facet.options.slider.graph.steps == undefined) {
                    this.facet.options.slider.graph.steps = 10;
                }
                if (this.facet.options.dateField && isNaN(this.facet.options.slider.start)) {
                    this.facet.options.slider.start = new Date(this.facet.options.slider.start).getTime();
                }
                if (this.facet.options.dateField && isNaN(this.facet.options.slider.end)) {
                    this.facet.options.slider.end = new Date(this.facet.options.slider.end).getTime();
                }
                if (this.rangeValuesForGraphToUse != undefined) {
                    return this.usePrebuiltRange(basicRangeRequest);
                } else {
                    return this.buildRange(basicRangeRequest);
                }
            };

            FacetRangeQueryController.prototype.usePrebuiltRange = function (basicRangeRequest) {
                return _.map(this.rangeValuesForGraphToUse, function (value) {
                    return {
                        start: value.start,
                        end: value.end,
                        endInclusive: basicRangeRequest.endInclusive,
                        label: basicRangeRequest.label
                    };
                });
            };

            FacetRangeQueryController.prototype.buildRange = function (basicRangeRequest) {
                var _this = this;
                var start = this.facet.options.slider.start;
                var end = this.facet.options.slider.end;
                var oneStep = (this.facet.options.slider.end - this.facet.options.slider.start) / this.facet.options.slider.graph.steps;
                return _.map(_.range(0, this.facet.options.slider.graph.steps, 1), function (step) {
                    var newStart = start + (step * oneStep);
                    var newEnd = start + ((step + 1) * oneStep);
                    if (_this.facet.options.dateField) {
                        newStart = _this.getISOFormat(newStart);
                        newEnd = _this.getISOFormat(newEnd);
                    }
                    return {
                        endInclusive: basicRangeRequest.endInclusive,
                        label: basicRangeRequest.label,
                        start: newStart,
                        end: newEnd
                    };
                });
            };

            FacetRangeQueryController.prototype.buildGroupByQueryForSelectedAndExcludedValues = function (groupByQuery) {
                var _this = this;
                groupByQuery.rangeValues = _.map(this.facet.values.getAll(), function (value) {
                    var startEnd = value.value.split('..');
                    var start = startEnd[0];
                    var end = startEnd[1];
                    if (_this.facet.options.dateField) {
                        start = _this.getISOFormat(start);
                        end = _this.getISOFormat(end);
                    }
                    return {
                        start: start,
                        end: end,
                        endInclusive: true,
                        label: value.lookupValue
                    };
                });
                return groupByQuery;
            };

            FacetRangeQueryController.prototype.getISOFormat = function (value) {
                if (value) {
                    return new Date(value).toISOString();
                } else {
                    return undefined;
                }
            };

            FacetRangeQueryController.prototype.getFilterDateFormat = function (rawValue) {
                if (rawValue) {
                    return this.getISOFormat(rawValue).replace("T", "@").replace(".000Z", "").replace(/-/g, "/");
                } else {
                    return undefined;
                }
            };
            return FacetRangeQueryController;
        })(Controllers.FacetQueryController);
        Controllers.FacetRangeQueryController = FacetRangeQueryController;
    })(Coveo.Controllers || (Coveo.Controllers = {}));
    var Controllers = Coveo.Controllers;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Controllers) {
        var HierarchicalFacetQueryController = (function (_super) {
            __extends(HierarchicalFacetQueryController, _super);
            function HierarchicalFacetQueryController(facet) {
                var _this = this;
                _super.call(this, facet);
                this.facet = facet;
                Coveo.$(this.facet.root).on(Coveo.Events.QueryEvents.querySuccess, function (e, args) {
                    if (_this.lastGroupByIndexForCountOf != undefined && _this.facet.options.useAnd) {
                        _this.lastGroupByForCountOf = args.results.groupByResults[_this.lastGroupByIndexForCountOf];
                    }
                });
                Coveo.$(this.facet.root).on(Coveo.Events.QueryEvents.buildingQuery, function () {
                    _this.lastGroupByIndexForCountOf = undefined;
                });
            }
            HierarchicalFacetQueryController.prototype.putGroupByIntoQueryBuilder = function (queryBuilder) {
                _super.prototype.putGroupByIntoQueryBuilder.call(this, queryBuilder);
                var groupBy = _super.prototype._createBasicGroupByRequest.call(this);
                groupBy.queryOverride = "@sysuri";
                this.lastGroupByIndexForCountOf = queryBuilder.groupByRequests.length;
                queryBuilder.groupByRequests.push(groupBy);
            };
            return HierarchicalFacetQueryController;
        })(Controllers.FacetQueryController);
        Controllers.HierarchicalFacetQueryController = HierarchicalFacetQueryController;
    })(Coveo.Controllers || (Coveo.Controllers = {}));
    var Controllers = Coveo.Controllers;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var AnalyticsEvents = (function () {
            function AnalyticsEvents() {
            }
            AnalyticsEvents.searchEvent = "analyticsSearchEvent";
            AnalyticsEvents.documentViewEvent = "analyticsDocumentViewEvent";
            AnalyticsEvents.customEvent = "analyticsCustomEvent";
            AnalyticsEvents.changeAnalyticsCustomData = "changeAnalyticsCustomData";
            return AnalyticsEvents;
        })();
        Events.AnalyticsEvents = AnalyticsEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var QueryEvents = (function () {
            function QueryEvents() {
            }
            QueryEvents.newQuery = "newQuery";
            QueryEvents.buildingQuery = "buildingQuery";
            QueryEvents.doneBuildingQuery = "doneBuildingQuery";
            QueryEvents.duringQuery = "duringQuery";
            QueryEvents.duringFetchMoreQuery = "duringFetchMoreQuery";
            QueryEvents.querySuccess = "querySuccess";
            QueryEvents.deferredQuerySuccess = "deferredQuerySuccess";
            QueryEvents.queryError = "queryError";
            QueryEvents.preprocessResults = "preprocessResults";
            QueryEvents.noResults = "noResults";
            QueryEvents.buildingCallOptions = "buildingCallOptions";
            return QueryEvents;
        })();
        Events.QueryEvents = QueryEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var InitializationEvents = (function () {
            function InitializationEvents() {
            }
            InitializationEvents.beforeInitialization = "beforeInitialization";
            InitializationEvents.afterComponentsInitialization = "afterComponentsInitialization";
            InitializationEvents.restoreHistoryState = "restoreHistoryState";
            InitializationEvents.afterInitialization = "afterInitialization";
            return InitializationEvents;
        })();
        Events.InitializationEvents = InitializationEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var ResultListEvents = (function () {
            function ResultListEvents() {
            }
            ResultListEvents.newResultsDisplayed = "newResultsDisplayed";
            ResultListEvents.newResultDisplayed = "newResultDisplayed";
            return ResultListEvents;
        })();
        Events.ResultListEvents = ResultListEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var ImageResultListEvents = (function () {
            function ImageResultListEvents() {
            }
            ImageResultListEvents.imageResultsLayoutComplete = "imageResultsLayoutComplete";
            return ImageResultListEvents;
        })();
        Events.ImageResultListEvents = ImageResultListEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var BreadcrumbEvents = (function () {
            function BreadcrumbEvents() {
            }
            BreadcrumbEvents.populateBreadcrumb = "populateBreadcrumb";
            BreadcrumbEvents.clearBreadcrumb = "clearBreadcrumb";
            return BreadcrumbEvents;
        })();
        Events.BreadcrumbEvents = BreadcrumbEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var OmniBoxEvents = (function () {
            function OmniBoxEvents() {
            }
            OmniBoxEvents.populateOmniBox = "populateOmniBox";
            OmniBoxEvents.openOmniBox = "openOmniBox";
            OmniBoxEvents.closeOmniBox = "closeOmniBox";
            return OmniBoxEvents;
        })();
        Events.OmniBoxEvents = OmniBoxEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var UserActionEvents = (function () {
            function UserActionEvents() {
            }
            UserActionEvents.enterOnSearchBox = "enterOnSearchBox";
            UserActionEvents.quickViewLoaded = "quickViewLoaded";
            return UserActionEvents;
        })();
        Events.UserActionEvents = UserActionEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var SliderEvents = (function () {
            function SliderEvents() {
            }
            SliderEvents.startSlide = "startSlide";
            SliderEvents.duringSlide = "duringSlide";
            SliderEvents.endSlide = "endSlide";
            SliderEvents.graphValueSelected = "graphValueSelected";
            return SliderEvents;
        })();
        Events.SliderEvents = SliderEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Events) {
        var PreferencesPanelEvents = (function () {
            function PreferencesPanelEvents() {
            }
            PreferencesPanelEvents.savePreferences = "savePreferences";
            PreferencesPanelEvents.exitPreferencesWithoutSave = "exitPreferencesWithoutSave";
            return PreferencesPanelEvents;
        })();
        Events.PreferencesPanelEvents = PreferencesPanelEvents;
    })(Coveo.Events || (Coveo.Events = {}));
    var Events = Coveo.Events;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultSearchInterfaceOptions = (function (_super) {
            __extends(DefaultSearchInterfaceOptions, _super);
            function DefaultSearchInterfaceOptions(element) {
                _super.call(this, element);
                this.searchPageUri = this.loadStringFromAttribute("data-search-page-uri", undefined);
                this.enableHistory = this.loadBooleanFromAttribute("data-enable-history", false);
                this.resultsPerPage = this.loadNumberFromAttribute("data-results-per-page", 10);
                this.excerptLength = this.loadNumberFromAttribute("data-excerpt-length", 200);
                this.hiddenExpression = this.loadStringFromAttribute("data-hidden-expression", "");
                this.filterField = this.loadStringFromAttribute("data-filter-field", "");
                this.hideUntilFirstQuery = this.loadBooleanFromAttribute("data-hide-until-first-query", true);
                this.firstLoadingAnimation = this.loadHtmlElementFromSelectorAttribute("data-first-loading-animation-selector");
                this.firstLoadingAnimation = this.loadChildHtmlElementFromSelector(".coveo-first-loading-animation", this.firstLoadingAnimation);
                this.firstLoadingAnimation = this.firstLoadingAnimation || Ui.JQueryUtils.getBasicLoadingAnimation().get(0);
                this.autoTriggerQuery = this.loadBooleanFromAttribute("data-auto-trigger-query", true);
                var endpoint = this.loadStringFromAttribute("data-endpoint", "default");
                this.endpoint = Coveo.Rest.SearchEndpoint.endpoints[endpoint];
                this.timezone = this.loadStringFromAttribute("data-timezone", jstz.determine().name());
                this.enableDebugInfo = this.loadBooleanFromAttribute("data-enable-debug-info", true);
            }
            return DefaultSearchInterfaceOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultSearchInterfaceOptions = DefaultSearchInterfaceOptions;

        var SearchInterface = (function (_super) {
            __extends(SearchInterface, _super);
            function SearchInterface(element, options, analyticsOptions, _window) {
                if (typeof _window === "undefined") { _window = window; }
                var _this = this;
                _super.call(this, element, SearchInterface.ID);
                this.element = element;
                this.options = options;
                this.analyticsOptions = analyticsOptions;

                this.options = new DefaultSearchInterfaceOptions(element).merge(options);

                Coveo.Assert.exists(element);
                Coveo.Assert.exists(this.options);

                if (this.options.hideUntilFirstQuery) {
                    this.showAndHideFirstQueryAnimation();
                }

                this.root = element;
                this.usageAnalytics = this.initializeAnalytics();
                this.queryStateModel = new Coveo.Models.QueryStateModel(element);
                this.componentStateModel = new Coveo.Models.ComponentStateModel(element);
                this.componentOptionsModel = new Coveo.Models.ComponentOptionsModel(element);
                this.queryController = new Coveo.Controllers.QueryController(element, this.options);
                this.searchInterface = this;

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.preprocess);
                Coveo.$(this.element).on(eventName, function (e, args) {
                    return _this.handlePreprocessQueryStateModel(args);
                });

                if (this.options.enableHistory) {
                    new Coveo.Controllers.HistoryController(element, _window, this.queryStateModel, this.queryController);
                }

                if (this.options.enableDebugInfo) {
                    setTimeout(function () {
                        return new Ui.Debug(element);
                    });
                }

                if (Ui.Device.isMobileDevice()) {
                    var resize = function () {
                        Coveo.$('html, body').height(_window.innerHeight);
                        Coveo.$('html, body').width(_window.innerWidth);

                        /* Fix for iphone scroll. This force redraw after chanfging orientation */
                        Coveo.$('body').removeClass('coveo-portrait coveo-landscape');
                        setTimeout(function () {
                            if (_window.innerHeight > _window.innerWidth) {
                                Coveo.$('body').addClass('coveo-portrait');
                            } else {
                                Coveo.$('body').addClass('coveo-landscape');
                            }
                        });
                    };
                    Coveo.$(_window).one('orientationchange', function () {
                        Coveo.$(_window).on('resize', resize);
                        resize();
                    });
                    resize();
                }
            }
            SearchInterface.prototype.initializeAnalytics = function () {
                var _this = this;
                var selector = Ui.Component.computeSelectorForType(Ui.Analytics.ID);
                var found = Coveo.$(this.element).find(selector);
                if (found.length == 1) {
                    return this.initializeAnalyticsFromComponent(found.get(0));
                } else if (found.length > 1) {
                    return new Ui.MultiAnalyticsClient(_.map(found, function (element) {
                        return _this.initializeAnalyticsFromComponent(element);
                    }));
                } else {
                    // Try again but looking up this time
                    found = Coveo.$(this.element).closest(selector);
                    if (found.length == 1) {
                        return this.initializeAnalyticsFromComponent(found.get(0));
                    } else if (found.length > 1) {
                        return new Ui.MultiAnalyticsClient(_.map(found, function (element) {
                            return _this.initializeAnalyticsFromComponent(element);
                        }));
                    } else {
                        return new Ui.NoopAnalyticsClient();
                    }
                }
            };

            SearchInterface.prototype.initializeAnalyticsFromComponent = function (element) {
                Coveo.Assert.exists(element);

                // Beware, the analytics component can be already initialized, in this case just use it
                var analytics = Ui.Component.get(element, Ui.Analytics, true) || new Ui.Analytics(element, this.analyticsOptions, this);
                return analytics.client;
            };

            SearchInterface.prototype.showAndHideFirstQueryAnimation = function () {
                var _this = this;
                this.displayFirstQueryWaitAnimation();

                // On first query success, wait for call stack to finish, then remove the animation
                Coveo.$(this.element).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    _.defer(function () {
                        return _this.hideFirstQueryWaitAnimation();
                    });
                });
                Coveo.$(this.element).on(Coveo.Events.QueryEvents.queryError, function () {
                    _.defer(function () {
                        return _this.hideFirstQueryWaitAnimation();
                    });
                });
            };

            SearchInterface.prototype.displayFirstQueryWaitAnimation = function () {
                Coveo.$(this.options.firstLoadingAnimation).remove();
                Coveo.$(this.element).addClass('coveo-waiting-for-first-query');
                Coveo.$(this.element).append(this.options.firstLoadingAnimation);
            };

            SearchInterface.prototype.hideFirstQueryWaitAnimation = function () {
                Coveo.$(this.options.firstLoadingAnimation).remove();
                Coveo.$(this.element).removeClass('coveo-waiting-for-first-query');
            };

            SearchInterface.prototype.handlePreprocessQueryStateModel = function (args) {
                var tgFromModel = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.tg);
                var tabFromModel = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t);

                if (args.tg !== undefined || tgFromModel == undefined) {
                    if (args.tg != tgFromModel) {
                        args.t = args.t || Coveo.Models.QueryStateModel.defaultAttributes.t;
                    }
                    args.tg = this.getTabGroupId(args.tg);
                } else {
                    args.tg = tgFromModel;
                }
                if (args.tg == undefined || args.tg == "") {
                    args.tg = this.getTabGroupId(args.tg);
                }

                if (args.t !== undefined || tabFromModel == undefined) {
                    if (args.t == tabFromModel) {
                        args.sort = args.sort || Coveo.Models.QueryStateModel.defaultAttributes.sort;
                    }
                    args.t = this.getTabId(args.tg, args.t);
                } else {
                    args.t = tabFromModel;
                }
                if (args.t == undefined || args.t == "") {
                    args.t = this.getTabId(args.tg, args.t);
                }

                if (args.sort !== undefined) {
                    args.sort = this.getSort(args.t, args.sort);
                }
            };

            SearchInterface.prototype.getTabGroupId = function (tabGroupId) {
                var tabGroups = this.searchInterface.components(Ui.TabGroup.ID);

                // check if the tabgroup is correct
                if (tabGroupId != Coveo.Models.QueryStateModel.defaultAttributes.tg && _.any(tabGroups, function (tabGroup) {
                    return !tabGroup.disabled && tabGroupId == tabGroup.options.id;
                })) {
                    return tabGroupId;
                }

                // select the first tabGroup
                if (tabGroups.length > 0) {
                    return tabGroups[0].options.id;
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.tg;
            };

            SearchInterface.prototype.getTabId = function (tabGroupId, tabId) {
                var tabs = this.searchInterface.components(Ui.Tab.ID);

                // if has a tabGroup
                if (tabGroupId != Coveo.Models.QueryStateModel.defaultAttributes.tg) {
                    var tabGroups = this.searchInterface.components(Ui.TabGroup.ID);
                    var tabGroup = _.find(tabGroups, function (tabGroup) {
                        return tabGroupId == tabGroup.options.id;
                    });

                    // check if the tabgroup contain this tab
                    if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t && _.any(tabs, function (tab) {
                        return tabId == tab.options.uniqueId && tabGroup.isElementIncludedInTabGroup(tab.element);
                    })) {
                        return tabId;
                    }

                    // select the first tab in the tabGroup
                    var tab = _.find(tabs, function (tab) {
                        return tabGroup.isElementIncludedInTabGroup(tab.element);
                    });
                    if (tab != null) {
                        return tab.options.uniqueId;
                    }
                    return Coveo.Models.QueryStateModel.defaultAttributes.t;
                }

                // check if the tab is correct
                if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t && _.any(tabs, function (tab) {
                    return tabId == tab.options.uniqueId;
                })) {
                    return tabId;
                }

                // select the first tab
                if (tabs.length > 0) {
                    return tabs[0].options.uniqueId;
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.t;
            };

            SearchInterface.prototype.getSort = function (tabId, sortId) {
                var sorts = this.searchInterface.components(Ui.Sort.ID);

                // if has a selected tab
                if (tabId != Coveo.Models.QueryStateModel.defaultAttributes.t) {
                    var tabs = this.searchInterface.components(Ui.Tab.ID);
                    var tab = _.find(tabs, function (tab) {
                        return tabId == tab.options.uniqueId;
                    });
                    var sortCriteria = tab.options.sort;

                    // check if the tab contain this sort
                    if (sortId != Coveo.Models.QueryStateModel.defaultAttributes.sort && _.any(sorts, function (sort) {
                        return tab.isElementIncludedInTab(sort.element) && sort.match(sortId);
                    })) {
                        return sortId;
                    } else if (sortCriteria != null) {
                        // if not and tab.options.sort is set apply it
                        return sortCriteria.toString();
                    }

                    // select the first sort in the tab
                    var sort = _.find(sorts, function (sort) {
                        return tab.isElementIncludedInTab(sort.element);
                    });
                    if (sort != null) {
                        return sort.options.sortCriterias[0].toString();
                    }
                    return Coveo.Models.QueryStateModel.defaultAttributes.sort;
                }

                // check if the sort is correct
                if (sortId != Coveo.Models.QueryStateModel.defaultAttributes.sort && _.any(sorts, function (sort) {
                    return sort.match(sortId);
                })) {
                    return sortId;
                }

                // select the first sort
                if (sorts.length > 0) {
                    return sorts[0].options.sortCriterias[0].toString();
                }
                return Coveo.Models.QueryStateModel.defaultAttributes.sort;
            };

            SearchInterface.prototype.attachComponent = function (type, component) {
                this.components(type).push(component);
            };
            SearchInterface.prototype.detachComponent = function (type, component) {
                var components = this.components(type);
                var index = _.indexOf(components, component);
                if (index > -1) {
                    components.splice(index, 1);
                }
            };

            SearchInterface.prototype.components = function (type) {
                if (this.attachedComponents == null) {
                    this.attachedComponents = {};
                }
                if (!(type in this.attachedComponents)) {
                    this.attachedComponents[type] = [];
                }
                return this.attachedComponents[type];
            };
            SearchInterface.ID = 'SearchInterface';
            return SearchInterface;
        })(Ui.Component);
        Ui.SearchInterface = SearchInterface;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultQueryBoxOptions = (function (_super) {
            __extends(DefaultQueryBoxOptions, _super);
            function DefaultQueryBoxOptions(element) {
                _super.call(this, element);
                this.enableSearchAsYouType = this.loadBooleanFromAttribute('data-enable-search-as-you-type', false);
                this.searchAsYouTypeDelay = this.loadNumberFromAttribute('data-search-as-you-type-delay', 500);
                this.disableQuerySyntax = this.loadBooleanFromAttribute('data-disable-query-syntax', false);
                this.enableWildcards = this.loadBooleanFromAttribute('data-enable-wildcards', false);
                this.enableQuestionMarks = this.loadBooleanFromAttribute('data-enable-question-marks', false);
                this.enableLowercaseOperators = this.loadBooleanFromAttribute('data-enable-lowercase-operators', false);
                this.enablePartialMatch = this.loadBooleanFromAttribute('data-enable-partial-match', false);
                this.partialMatchKeywords = this.loadNumberFromAttribute('data-partial-match-keywords', 5);
                this.partialMatchThreshold = this.loadStringFromAttribute('data-partial-match-threshold', '50%');
                this.autoFocus = this.loadBooleanFromAttribute('data-auto-focus', true);
            }
            return DefaultQueryBoxOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultQueryBoxOptions = DefaultQueryBoxOptions;

        var QueryBox = (function (_super) {
            __extends(QueryBox, _super);
            function QueryBox(element, options, bindings) {
                var _this = this;
                _super.call(this, element, QueryBox.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultQueryBoxOptions(element).merge(options);

                Ui.Component.pointElementsToDummyForm(Coveo.$(element));
                Coveo.$(element).change(function (event) {
                    _this._handleChange(event);
                });
                Coveo.$(element).keyup(function (event) {
                    _this._handleKeyUp(event);
                });

                var model = Coveo.Models;
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, Coveo.$.proxy(this._handleNewQuery, this));
                var eventName = this.queryStateModel.getEventName(model.Model.eventTypes.changeOne + model.QueryStateModel.attributesEnum.q);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this._handleQueryStateChanged, this));

                this._clearElement = Coveo.$("<span></span>").addClass('coveo-query-box-clear').hide();
                var clearElementIcon = Coveo.$("<span></span>").addClass('coveo-icon').appendTo(this._clearElement);
                this._clearElement.fastClick(function () {
                    _this.clear();
                    _this._hideClearElement();
                    _this.updateQueryState();
                    if (!Ui.Device.isMobileDevice()) {
                        Coveo.$(_this.element).focus();
                    }

                    // We do not want to redirect on clear on a standalone search box, as it creates a weird interaction.
                    if (!_this.queryController.isStandaloneSearchBox()) {
                        _this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                                return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxClear, {});
                            } });
                    }
                });
                if (Ui.Device.isSmallScreenWidth()) {
                    Coveo.$(this.element).focus(function () {
                        Ui.JQueryUtils.removeToggleClassOnSearchInterface();
                    });
                }
                Coveo.$(this.element).after(this._clearElement);
                if (this.options.autoFocus) {
                    try  {
                        Coveo.$(this.element).focus();
                    } catch (e) {
                    }
                }
            }
            QueryBox.prototype.clear = function () {
                Coveo.$(this.element).val("");
                this.updateQueryState();
            };

            QueryBox.prototype.replace = function (searchValue, newValue) {
                Coveo.$(this.element).val(Coveo.$(this.element).val().replace(searchValue, newValue));
                this.updateQueryState();
            };

            QueryBox.prototype.replaceCurrentExpression = function (newValue) {
                this.replace(this.getCurrentQueryExpression(), newValue);
                this.updateQueryState();
            };

            QueryBox.prototype.clearCurrentExpression = function () {
                this.replace(this.getCurrentQueryExpression(), "");
                this.updateQueryState();
            };

            QueryBox.prototype.getCurrentQueryExpression = function () {
                var cursorPos = Coveo.$(this.element).getCursorPosition();
                var value = Coveo.$(this.element).val();
                var length = value.length;
                var start = cursorPos;
                var end = cursorPos;
                if (value[start] == " ") {
                    start--;
                }
                while (start > 0 && value[start] != " ") {
                    start--;
                }
                while (end < length && value[end] != " ") {
                    end++;
                }
                return value.substring(start, end);
            };

            QueryBox.prototype.insertAt = function (at, toInsert) {
                var oldValue = Coveo.$(this.element).val();
                var newValue = [oldValue.slice(0, at), toInsert, oldValue.slice(at)].join("");
                Coveo.$(this.element).val(newValue);
                this.updateQueryState();
            };

            QueryBox.prototype._handleChange = function (event) {
                this._addClearElement();
                this.updateQueryState();
                return undefined;
            };

            QueryBox.prototype._handleQueryStateChanged = function (e, data) {
                Coveo.Assert.exists(data);
                var q = data.value;
                Coveo.$(this.element).val(q);
                this._addClearElement();
            };

            QueryBox.prototype._handleKeyUp = function (event) {
                Coveo.Assert.exists(event);
                this._addClearElement();
                if (event.which == 13) {
                    this.logger.debug('Performing query because user pressed Enter');
                    this.updateQueryState();
                    this.enterOnSearchBox();
                    event.stopPropagation();
                    if (Ui.Device.isMobileDevice()) {
                        Coveo.$(this.element).blur();
                    }
                } else if (this.options.enableSearchAsYouType && Coveo.KeyboardUtils.isAllowedKeyForOmniBox(event)) {
                    this.startNewSearchAsYouTypeTimeout();
                }
            };

            QueryBox.prototype._addClearElement = function () {
                if (Coveo.$(this.element).val() == "") {
                    this._hideClearElement();
                } else {
                    this._showClearElement();
                }
            };

            QueryBox.prototype._hideClearElement = function () {
                this._clearElement.hide();
            };

            QueryBox.prototype._showClearElement = function () {
                this._clearElement.show();
            };

            QueryBox.prototype.startNewSearchAsYouTypeTimeout = function () {
                var _this = this;
                this.cancelAnyPendingSearchAsYouTypeTimeout();
                this.searchAsYouTypeTimeout = setTimeout(function () {
                    _this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchAsYouType(Ui.AnalyticsActionCauseList.searchboxAsYouType, {});
                    }, true);
                }, this.options.searchAsYouTypeDelay);
            };

            QueryBox.prototype._handleNewQuery = function (e, data) {
                QueryBox.queryBoxIsAlreadyAddedToQuery = false;
            };

            QueryBox.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.queryBuilder);

                var query = Coveo.$(this.element).val();

                if (this.options.enableWildcards) {
                    data.queryBuilder.enableWildcards = true;
                }

                if (this.options.enableQuestionMarks) {
                    data.queryBuilder.enableQuestionMarks = true;
                }

                if (this.options.enableLowercaseOperators) {
                    data.queryBuilder.enableLowercaseOperators = true;
                }

                if (this.options.enablePartialMatch) {
                    data.queryBuilder.enablePartialMatch = true;
                    data.queryBuilder.partialMatchKeywords = this.options.partialMatchKeywords;
                    data.queryBuilder.partialMatchThreshold = this.options.partialMatchThreshold;
                }

                if (Coveo.Utils.isNonEmptyString(query) && !QueryBox.queryBoxIsAlreadyAddedToQuery) {
                    if (this.options.disableQuerySyntax) {
                        data.queryBuilder.expression.add("<@- " + query + " -@>");
                    } else {
                        data.queryBuilder.expression.add(query);
                    }

                    this.logger.trace('Adding query to QueryBuilder', query);
                    QueryBox.queryBoxIsAlreadyAddedToQuery = true;
                }
            };

            QueryBox.prototype.enterOnSearchBox = function () {
                var _this = this;
                Coveo.$(this.element).trigger(Coveo.Events.UserActionEvents.enterOnSearchBox);
                this.triggerNewQuery(function () {
                    return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {});
                }, false);
            };

            QueryBox.prototype.triggerNewQuery = function (beforeExecuteQuery, searchAsYouType) {
                this.cancelAnyPendingSearchAsYouTypeTimeout();
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: beforeExecuteQuery, searchAsYouType: searchAsYouType });
            };

            QueryBox.prototype.updateQueryState = function () {
                var query = Coveo.$(this.element).val();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, query);
            };

            QueryBox.prototype.cancelAnyPendingSearchAsYouTypeTimeout = function () {
                if (Coveo.Utils.exists(this.searchAsYouTypeTimeout)) {
                    clearTimeout(this.searchAsYouTypeTimeout);
                    this.searchAsYouTypeTimeout = undefined;
                }
            };
            QueryBox.ID = 'QueryBox';

            QueryBox.queryBoxIsAlreadyAddedToQuery = false;
            return QueryBox;
        })(Coveo.Ui.Component);
        Ui.QueryBox = QueryBox;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(QueryBox);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultOmniBoxOptions = (function (_super) {
            __extends(DefaultOmniBoxOptions, _super);
            function DefaultOmniBoxOptions(element) {
                _super.call(this, element);
                this.omniBoxDelay = this.loadNumberFromAttribute('data-omnibox-delay', 500);
                this.omniBoxTimeout = this.loadNumberFromAttribute('data-omnibox-timeout', 2000);
                this.omniBoxChangeLimit = this.loadNumberFromAttribute('data-omnibox-change-limit', 3);
                this.omniBoxMinimumLetters = this.loadNumberFromAttribute('data-omnibox-minimum-letters', 1);
            }
            return DefaultOmniBoxOptions;
        })(Ui.DefaultQueryBoxOptions);
        Ui.DefaultOmniBoxOptions = DefaultOmniBoxOptions;

        var OmniBox = (function (_super) {
            __extends(OmniBox, _super);
            function OmniBox(element, options, bindings) {
                var _this = this;
                _super.call(this, element, options, bindings);
                this.element = element;
                this.options = options;
                this.omniBoxHeaderSearchForTemplate = _.template("<div class='coveo-omnibox-selectable coveo-omnibox-section coveo-omnibox-header'>" + "<div class='coveo-text'>" + Ui.l.SearchFor("<strong><%- data %></strong>") + "</div>" + "</div>");
                this.omniBoxIsOpen = false;
                this.isLoadingData = false;

                this.options = new DefaultOmniBoxOptions(element).merge(options);

                Coveo.$(element).keyup(function (event) {
                    return _this._handleKeyUp(event);
                });

                this.renderOmniBoxDiv();
                this.omniBoxDiv.hide();
                this.prepareThrottledCall();

                Coveo.$(this.root).fastClick(function (e) {
                    if (_this.omniBoxIsOpen && !Coveo.$.contains(_this.omniBoxDiv.get(0), Coveo.$(e.target).get(0))) {
                        _this.escapeEvent();
                    }
                });

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.q);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this._handleQueryStateChanged, this));

                Coveo.$(window).on("resize", function () {
                    if (_this.omniBoxIsOpen) {
                        _this.setWidthOnOmniBoxDiv();
                    }
                });
            }
            OmniBox.prototype.close = function () {
                Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.closeOmniBox);
                if (this.omniBoxDiv) {
                    this.omniBoxDiv.children().remove();
                    this.omniBoxDiv.hide();
                }
                this.clearLastOmniBoxRows();
                if (!Coveo.Utils.isNullOrUndefined(this.lastOmniBoxData)) {
                    this.rejectAllPendingDeferred(this.lastOmniBoxData);
                }

                this.resetOmniBoxInternalData();
                this.omniBoxIsOpen = false;
            };

            OmniBox.prototype.open = function () {
                if (Coveo.$(this.element).val() != "" && (this.options.omniBoxMinimumLetters == null || this.options.omniBoxMinimumLetters <= Coveo.$(this.element).val().length)) {
                    this.renderOmniBoxHeader();
                    this.setWidthOnOmniBoxDiv();
                    this.omniBoxDiv.show();
                    this.throttledCallForOmniBoxBody();
                    this.findSelectable().first().addClass('coveo-omnibox-selected');
                    Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.openOmniBox);
                } else {
                    this.escapeEvent();
                }
            };

            OmniBox.prototype.getDataForOmniboxBody = function () {
                this.addSearchAnimation();
                if (!this.isCurrentlyBeingRendered) {
                    var omniBoxRequestObject = this.buildOmniBoxRequestObject();
                    var data = this.requestOmniBoxData(omniBoxRequestObject);
                    this.processNewOmniBoxData(data);
                } else {
                    this.throttledCallForOmniBoxBody();
                }
            };

            OmniBox.prototype.buildOmniBoxRequestObject = function () {
                var _this = this;
                var currentQueryExpression = this.getCurrentQueryExpression();
                var ret = {
                    completeQueryExpression: {
                        word: Coveo.$(this.element).val(),
                        regex: this.getRegexToSearch()
                    },
                    currentQueryExpression: {
                        word: currentQueryExpression,
                        regex: this.getRegexToSearch(currentQueryExpression)
                    },
                    allQueryExpressions: this.getQueryExpressionBreakDown(),
                    cursorPosition: Coveo.$(this.element).getCursorPosition(),
                    clear: function () {
                        return _this.clear();
                    },
                    clearCurrentExpression: function () {
                        return _this.clearCurrentExpression();
                    },
                    replace: function (searchValue, newValue) {
                        return _this.replace(searchValue, newValue);
                    },
                    replaceCurrentExpression: function (newValue) {
                        return _this.replaceCurrentExpression(newValue);
                    },
                    insertAt: function (at, toInsert) {
                        return _this.insertAt(at, toInsert);
                    },
                    closeOmniBox: function () {
                        return _this.close();
                    }
                };
                return ret;
            };

            OmniBox.prototype.prepareThrottledCall = function () {
                this.throttledCallForOmniBoxBody = Coveo.Utils.throttle(this.getDataForOmniboxBody, this.options.omniBoxDelay, undefined, this);
            };

            OmniBox.prototype.requestOmniBoxData = function (dataToSearch) {
                Coveo.Assert.exists(dataToSearch);
                this.logger.info("Requesting omnibox data to all components");
                var eventArgs = Coveo.$.extend({ rows: [] }, dataToSearch);
                Coveo.$(this.root).trigger(Coveo.Events.OmniBoxEvents.populateOmniBox, eventArgs);
                return eventArgs;
            };

            OmniBox.prototype.getQueryExpressionBreakDown = function () {
                var _this = this;
                var ret = [];
                var queryWords = Coveo.$(this.element).val().split(" ");
                _.each(queryWords, function (word) {
                    ret.push({
                        word: word,
                        regex: _this.getRegexToSearch(word)
                    });
                });
                return ret;
            };

            OmniBox.prototype._handleNewQuery = function (e, data) {
                _super.prototype._handleNewQuery.call(this, e, data);
                if (this.omniBoxIsOpen) {
                    e.stopPropagation();
                }
            };

            OmniBox.prototype._handleKeyUp = function (event) {
                var _this = this;
                //block keyup event on QueryBox
                event.stopImmediatePropagation();
                var currentNumberOfLettersInOmniBox = Coveo.$(this.element).val().length;
                if (!Coveo.Utils.isNullOrUndefined(this.lastOmniBoxData) && !Coveo.Utils.isNullOrUndefined(this.lastNumberOfLettersInOmniBox) && Math.abs(currentNumberOfLettersInOmniBox - this.lastNumberOfLettersInOmniBox) > this.options.omniBoxChangeLimit) {
                    this.rejectAllPendingDeferred(this.lastOmniBoxData);
                    this.prepareThrottledCall();
                    this.throttledCallForOmniBoxBody = Coveo.Utils.throttle(this.getDataForOmniboxBody, this.options.omniBoxDelay, undefined, this);
                }

                if (Coveo.KeyboardUtils.keysEqual(event, 27 /* ESCAPE */) && this.omniBoxIsOpen) {
                    this.escapeEvent();
                } else if (Coveo.KeyboardUtils.keysEqual(event, 13 /* ENTER */)) {
                    if (this.omniBoxIsOpen) {
                        this.selectionEvent();
                    } else {
                        this.escapeEvent();
                        this.triggerNewQuery(function () {
                            return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {});
                        });
                    }
                } else if (Coveo.KeyboardUtils.isArrowKeyPushed(event.keyCode) && this.omniBoxIsOpen) {
                    this.navigationEvent(event);
                } else if (Coveo.KeyboardUtils.isAllowedKeyForOmniBox(event)) {
                    if (Coveo.$(this.element).val() == "") {
                        this.escapeEvent();
                    } else {
                        this.open();
                    }
                }
            };

            OmniBox.prototype._handleChange = function (event) {
                //block change event on QueryBox
                event.stopImmediatePropagation();
                return false;
            };

            OmniBox.prototype.handleHover = function (event) {
                var target = this.getCorrectTarget(event);
                if (target) {
                    this.toggleSelected(target);
                }
            };

            OmniBox.prototype.bindOmniBoxEvent = function () {
                this.bindHoverEvent();
            };

            OmniBox.prototype.bindHoverEvent = function () {
                var _this = this;
                Coveo.$(this.omniBoxDiv).find(".coveo-omnibox-selectable").hover(function (e) {
                    _this.handleHover(e);
                });
            };

            OmniBox.prototype.escapeEvent = function () {
                this.clearLastOmniBoxRows();
                this.close();
                this.removeSearchAnimation();
            };

            OmniBox.prototype.selectionEvent = function () {
                var _this = this;
                if (!this.isFirstValueSelected(this.findSelected())) {
                    this.keyBoardSelection();
                } else {
                    this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxSearch, {});
                    });
                }
            };

            OmniBox.prototype.navigationEvent = function (event) {
                var alreadySelected = this.findSelected();
                if (alreadySelected.length == 0) {
                    this.navigationEventWhenNoSelection(event);
                } else {
                    this.navigationEventWhenSelection(event, alreadySelected);
                }
            };

            OmniBox.prototype.navigationEventWhenNoSelection = function (event) {
                if (Coveo.KeyboardUtils.keysEqual(event, 40 /* DOWN_ARROW */)) {
                    this.findSelectable().first().addClass('coveo-omnibox-selected');
                } else {
                    return;
                }
            };

            OmniBox.prototype.navigationEventWhenSelection = function (event, alreadySelected) {
                if (!this.isLoadingData) {
                    switch (event.keyCode) {
                        case 38 /* UP_ARROW */:
                            if (!this.isFirstValueSelected(alreadySelected)) {
                                this.unselectValueInOmnibox(alreadySelected);
                                this.selectValueBeforeAlreadySelected(alreadySelected);
                            }
                            break;
                        case 40 /* DOWN_ARROW */:
                            if (!this.isLastValueSelected(alreadySelected)) {
                                this.unselectValueInOmnibox(alreadySelected);
                                this.selectValueAfterAlreadySelected(alreadySelected);
                            }
                            break;
                        default:
                            break;
                    }
                }
            };

            OmniBox.prototype.keyBoardSelection = function () {
                this.logger.trace("Selecting facet value because of omnibox selection");
                var selectedInOmnibox = this.findSelected();
                selectedInOmnibox.trigger('keyboardSelect');
                this.escapeEvent();
            };

            OmniBox.prototype.triggerNewQuery = function (beforeExecuteQuery) {
                this.logger.info("Triggering new query because of omnibox selection");
                this.escapeEvent();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, Coveo.$(this.element).val());
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: beforeExecuteQuery });
            };

            OmniBox.prototype.processNewOmniBoxData = function (data) {
                this.logger.trace('Processing omnibox data');
                this.isCurrentlyBeingRendered = true;
                this.numberOfPendingQueries = 0;
                this.renderOmniBoxBody(data);
                this.omniBoxIsOpen = true;
            };

            OmniBox.prototype.renderOmniBoxDiv = function () {
                this.omniBoxDiv = Coveo.$("<div class='coveo-omnibox'></div>");
                Coveo.$(this.element).after(this.omniBoxDiv);
            };

            OmniBox.prototype.setWidthOnOmniBoxDiv = function () {
                this.omniBoxDiv.width(this.getWidth());
            };

            OmniBox.prototype.renderOmniBoxHeader = function () {
                var _this = this;
                if (this.omniBoxHeader != undefined) {
                    this.omniBoxHeader.remove();
                }
                this.omniBoxHeader = Coveo.$(this.omniBoxHeaderSearchForTemplate({ data: Coveo.$(this.element).val() }));
                this.omniBoxHeader.fastClick(function () {
                    _this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxSearch, {});
                    });
                });
                this.omniBoxDiv.prepend(this.omniBoxHeader);
            };

            OmniBox.prototype.renderOmniBoxBody = function (data) {
                var _this = this;
                this.omniBoxRows = [];
                this.lastOmniBoxData = data;
                this.lastNumberOfLettersInOmniBox = Coveo.$(this.element).val().length;
                _.each(data.rows, function (row) {
                    if (!Coveo.Utils.isNullOrUndefined(row.element)) {
                        _this.renderOmniBoxForOneElement(row);
                    } else if (!Coveo.Utils.isNullOrUndefined(row.deferred)) {
                        _this.numberOfPendingQueries++;
                        _this.renderOmniBoxForOneElementDeferred(row);
                    }
                });
                if (this.numberOfPendingQueries == 0) {
                    this.allDeferredHaveArrived();
                }
                setTimeout(function () {
                    _this.rejectAllPendingDeferred(data);
                }, this.options.omniBoxTimeout);
            };

            OmniBox.prototype.rejectAllPendingDeferred = function (data) {
                _.each(data.rows, function (row) {
                    if (!Coveo.Utils.isNullOrUndefined(row.deferred) && row.deferred.state() == 'pending') {
                        row.deferred.reject();
                    }
                });
            };

            OmniBox.prototype.allDeferredHaveArrived = function () {
                this.appendOmniBoxSections();
                this.resetOmniBoxInternalData();
                this.removeSearchAnimation();
            };

            OmniBox.prototype.clearLastOmniBoxRows = function () {
                if (this.lastOmniBoxRows != undefined) {
                    _.each(this.lastOmniBoxRows, function (row) {
                        Coveo.$(row.element).remove();
                    });
                }
            };

            OmniBox.prototype.appendOmniBoxSections = function () {
                this.clearLastOmniBoxRows();
                this.omniBoxRows = _.sortBy(this.omniBoxRows, function (row) {
                    return row.zIndex;
                }).reverse();
                for (var i = 0; i < this.omniBoxRows.length; i++) {
                    this.omniBoxDiv.append(this.omniBoxRows[i].element);
                }
                this.bindOmniBoxEvent();
                this.resetOmniBoxInternalData();
            };

            OmniBox.prototype.resetOmniBoxInternalData = function () {
                this.lastOmniBoxRows = this.omniBoxRows;
                this.isCurrentlyBeingRendered = false;
            };

            OmniBox.prototype.renderOmniBoxForOneElement = function (row) {
                var zIndex = row.zIndex || -1;
                Coveo.$(row.element).addClass('coveo-omnibox-section');
                this.omniBoxRows.push({ zIndex: zIndex, element: row.element });
            };

            OmniBox.prototype.renderOmniBoxForOneElementDeferred = function (row) {
                var _this = this;
                row.deferred.done(function (row) {
                    _this.numberOfPendingQueries--;
                    if (!Coveo.Utils.isNullOrUndefined(row.element)) {
                        _this.renderOmniBoxForOneElement(row);
                    }
                    if (_this.numberOfPendingQueries == 0) {
                        _this.allDeferredHaveArrived();
                    }
                });
                row.deferred.fail(function () {
                    _this.numberOfPendingQueries--;
                    if (_this.numberOfPendingQueries == 0) {
                        _this.allDeferredHaveArrived();
                    }
                });
            };

            OmniBox.prototype.isFirstValueSelected = function (selected) {
                return selected.get(0) == this.findSelectable().first().get(0);
            };

            OmniBox.prototype.isLastValueSelected = function (selected) {
                return selected.get(0) == this.findSelectable().last().get(0);
            };

            OmniBox.prototype.unselectValueInOmnibox = function (alreadySelected) {
                alreadySelected.removeClass('coveo-omnibox-selected');
            };

            OmniBox.prototype.selectValueBeforeAlreadySelected = function (alreadySelected) {
                Coveo.$(this.findSelectable().get(this.findPosOfAlreadySelected(alreadySelected) - 1)).addClass('coveo-omnibox-selected');
            };

            OmniBox.prototype.selectValueAfterAlreadySelected = function (alreadySelected) {
                Coveo.$(this.findSelectable().get(this.findPosOfAlreadySelected(alreadySelected) + 1)).addClass('coveo-omnibox-selected');
            };

            OmniBox.prototype.findPosOfAlreadySelected = function (alreadySelected) {
                var alreadySelectedPos = -1;
                var allSelectable = this.findSelectable();
                _.find(allSelectable, function (selectable) {
                    alreadySelectedPos++;
                    return selectable == alreadySelected.get(0);
                });
                return alreadySelectedPos;
            };

            OmniBox.prototype.findSelectable = function () {
                return this.omniBoxDiv.find(".coveo-omnibox-selectable");
            };

            OmniBox.prototype.findSelected = function () {
                return this.findSelectable().closest(".coveo-omnibox-selected");
            };

            OmniBox.prototype.toggleSelected = function (newSelected) {
                this.omniBoxDiv.find(".coveo-omnibox-selected").removeClass('coveo-omnibox-selected');
                newSelected.addClass('coveo-omnibox-selected');
            };

            OmniBox.prototype.getWidth = function () {
                var elem = Coveo.$(this.element);
                return elem.outerWidth() + this.getSearchButtonWidth();
            };

            OmniBox.prototype.getSearchButtonWidth = function () {
                var searchBox = Coveo.$(this.element).closest("." + Ui.Component.computeCssClassNameForType(Ui.SearchBox.ID));
                if (searchBox.length != 0) {
                    var searchBoxComponent = searchBox.coveo(Ui.SearchBox);
                    return searchBoxComponent.searchButton != undefined ? Coveo.$(searchBoxComponent.searchButton.element).outerWidth() : 0;
                }
                return 0;
            };

            OmniBox.prototype.getRegexToSearch = function (strValue) {
                if (typeof strValue === "undefined") { strValue = Coveo.$(this.element).val(); }
                return new RegExp(Coveo.Utils.escapeRegexCharacter(strValue), "i");
            };

            OmniBox.prototype.getCorrectTarget = function (event) {
                var target = Coveo.$(event.target);
                return target.closest(".coveo-omnibox-selectable");
            };

            OmniBox.prototype.addSearchAnimation = function () {
                this._hideClearElement();
                Coveo.$(this.element).addClass('coveo-loading');
                this.isLoadingData = true;
            };

            OmniBox.prototype.removeSearchAnimation = function () {
                Coveo.$(this.element).removeClass('coveo-loading');
                this._addClearElement();
                this.isLoadingData = false;
            };
            OmniBox.ID = 'OmniBox';
            return OmniBox;
        })(Coveo.Ui.QueryBox);
        Ui.OmniBox = OmniBox;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(OmniBox);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultSearchButtonOptions = (function (_super) {
            __extends(DefaultSearchButtonOptions, _super);
            function DefaultSearchButtonOptions(element) {
                _super.call(this, element);
            }
            return DefaultSearchButtonOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultSearchButtonOptions = DefaultSearchButtonOptions;

        var SearchButton = (function (_super) {
            __extends(SearchButton, _super);
            function SearchButton(element, options, bindings) {
                _super.call(this, element, SearchButton.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultSearchButtonOptions(element).merge(options);

                this.bind.fastClick(Coveo.$(element), this.handleClick);

                // Provide a magnifier icon if element contains nothing
                if (Coveo.$.trim(Coveo.$(element).text()) == '') {
                    Coveo.$('<span/>').text(Ui.l.Search()).addClass('coveo-icon').appendTo(element);
                }
            }
            SearchButton.prototype.handleClick = function () {
                var _this = this;
                this.logger.debug('Performing query following button click');
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.searchboxSubmit, {});
                    } });
            };
            SearchButton.ID = 'SearchButton';
            return SearchButton;
        })(Ui.Component);
        Ui.SearchButton = SearchButton;

        Ui.CoveoJQuery.registerAutoCreateComponent(SearchButton);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultSearchBoxOptions = (function (_super) {
            __extends(DefaultSearchBoxOptions, _super);
            function DefaultSearchBoxOptions(element) {
                _super.call(this, element);
                this.activateOmniBox = this.loadBooleanFromAttribute("data-activate-omnibox", false);
                this.enableSearchAsYouType = this.loadBooleanFromAttribute('data-enable-search-as-you-type', false);
                this.searchAsYouTypeDelay = this.loadNumberFromAttribute('data-search-as-you-type-delay', 500);
                this.disableQuerySyntax = this.loadBooleanFromAttribute('data-disable-query-syntax', false);
                this.enableWildcards = this.loadBooleanFromAttribute('data-enable-wildcards', false);
                this.enableQuestionMarks = this.loadBooleanFromAttribute('data-enable-question-marks', false);
                this.enableLowercaseOperators = this.loadBooleanFromAttribute('data-enable-lowercase-operators', false);
                this.enablePartialMatch = this.loadBooleanFromAttribute('data-enable-partial-match', false);
                this.partialMatchKeywords = this.loadNumberFromAttribute('data-partial-match-keywords', 5);
                this.partialMatchThreshold = this.loadStringFromAttribute('data-partial-match-threshold', '50%');
                this.omniBoxDelay = this.loadNumberFromAttribute('data-omnibox-delay', 500);
                this.autoFocus = this.loadBooleanFromAttribute('data-auto-focus', true);
            }
            return DefaultSearchBoxOptions;
        })(Ui.DefaultOmniBoxOptions);
        Ui.DefaultSearchBoxOptions = DefaultSearchBoxOptions;

        var SearchBox = (function (_super) {
            __extends(SearchBox, _super);
            function SearchBox(element, options, bindings) {
                _super.call(this, element, SearchBox.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultSearchBoxOptions(element).merge(options);

                this.searchButton = new Ui.SearchButton(Coveo.$('<a/>').appendTo(this.element).get(0), undefined, bindings);

                var stretch = Coveo.$('<div/>').appendTo(this.element);

                var tag = this.buildInputTag();
                tag.appendTo(stretch);

                if (this.options.activateOmniBox) {
                    this.searchBox = new Ui.OmniBox(tag.get(0), this.options, bindings);
                } else {
                    this.searchBox = new Ui.QueryBox(tag.get(0), this.options, bindings);
                }
            }
            SearchBox.prototype.buildInputTag = function () {
                var _this = this;
                return Coveo.$('<input type="text" autocapitalize="off" autocorrect="off" />').blur(function (event) {
                    _this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, Coveo.$(event.target).val());
                });
            };
            SearchBox.ID = 'SearchBox';
            return SearchBox;
        })(Coveo.Ui.Component);
        Ui.SearchBox = SearchBox;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(SearchBox);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultListOptions = (function (_super) {
            __extends(DefaultResultListOptions, _super);
            function DefaultResultListOptions(element, appendResultContainer, showInfiniteScrollWaitingAnimation) {
                if (typeof appendResultContainer === "undefined") { appendResultContainer = true; }
                if (typeof showInfiniteScrollWaitingAnimation === "undefined") { showInfiniteScrollWaitingAnimation = true; }
                _super.call(this, element);
                if (appendResultContainer) {
                    this.resultContainer = this.loadHtmlElementFromSelectorAttribute('data-result-container-selector');
                    this.resultContainer = this.loadChildHtmlElementFromSelector('.result-container', this.resultContainer);
                    this.resultContainer = this.resultContainer || Coveo.$('<div/>').appendTo(element).get(0);
                }
                this.resultTemplate = this.loadResultTemplateFromSelectorAttribute('data-result-template-selector');
                this.resultTemplate = this.loadResultTemplateFromIdAttribute('data-result-template-id', this.resultTemplate);
                this.resultTemplate = this.loadChildResultTemplateFromSelector('.result-template', this.resultTemplate);
                this.resultTemplate = this.resultTemplate || new Ui.DefaultResultTemplate();
                this.waitAnimation = this.loadStringFromAttribute('data-wait-animation', 'none');
                this.waitAnimationContainer = this.loadHtmlElementFromSelectorAttribute('data-wait-animation-container-selector');
                this.waitAnimationContainer = this.loadChildHtmlElementFromSelector('.waitAnimationContainer', this.waitAnimationContainer);
                this.waitAnimationContainer = this.waitAnimationContainer || this.resultContainer;
                this.enableInfiniteScroll = this.loadBooleanFromAttribute('data-enable-infinite-scroll', false);
                this.infiniteScrollPageSize = this.loadNumberFromAttribute('data-infinite-scroll-page-size', 10);
                this.infiniteScrollContainer = this.loadHtmlElementFromSelectorAttribute('data-infinite-scroll-container-selector');
                this.infiniteScrollContainer = this.loadChildHtmlElementFromSelector('.infiniteScrollContainer', this.infiniteScrollContainer);
                this.infiniteScrollContainer = this.infiniteScrollContainer || Ui.JQueryUtils.findScrollingParent(element);
                this.showInfiniteScrollWaitingAnimation = this.loadBooleanFromAttribute('data-show-infinite-scroll-waiting-animation', showInfiniteScrollWaitingAnimation);
                if (Ui.Device.isMobileDevice()) {
                    this.mobileScrollContainer = this.loadHtmlElementFromSelectorAttribute("data-mobile-scroll-container", Coveo.$(".coveo-results-column").get(0));
                }
            }
            return DefaultResultListOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultListOptions = DefaultResultListOptions;

        var ResultList = (function (_super) {
            __extends(ResultList, _super);
            function ResultList(element, options, bindings, elementClassId) {
                if (typeof elementClassId === "undefined") { elementClassId = ResultList.ID; }
                var _this = this;
                _super.call(this, element, elementClassId, bindings);
                this.element = element;
                this.options = options;
                this.bindings = bindings;
                this.currentlyDisplayedResults = [];
                this.reachedTheEndOfResults = false;
                this.resetList = true;
                this.pageChanged = false;

                this.options = new DefaultResultListOptions(element).merge(options);
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(this.options);
                Coveo.Assert.exists(this.options.resultContainer);
                Coveo.Assert.exists(this.options.resultTemplate);
                Coveo.Assert.exists(this.options.waitAnimationContainer);
                Coveo.Assert.exists(this.options.infiniteScrollContainer);

                this.showOrHideElementsDependingOnState(false, false);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, Coveo.$.proxy(this.handleNewQuery, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.querySuccess, Coveo.$.proxy(this.handleProcessNewQueryResults, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.duringQuery, Coveo.$.proxy(this.handleDuringQuery, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.queryError, function () {
                    _this.hideWaitingAnimation();
                    Coveo.$(_this.options.resultContainer).empty();
                    _this.currentlyDisplayedResults = [];
                });
                if (this.options.enableInfiniteScroll) {
                    Coveo.$(this.options.infiniteScrollContainer).scroll(function (event) {
                        return _this.handleScrollOfResultList(event);
                    });
                }
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.first);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this.handlePageChanged, this));
            }
            ResultList.prototype.handlePageChanged = function () {
                var _this = this;
                Coveo.$(this.root).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    Coveo.$(_this.options.infiniteScrollContainer).scrollTop(0);
                });
            };

            ResultList.prototype.handleNewQuery = function () {
                if (!this.disabled) {
                    Coveo.$(this.element).show();
                }
            };

            ResultList.prototype.displayMoreResults = function (count, triggeredByUser) {
                var _this = this;
                Coveo.Assert.isLargerOrEqualsThan(1, count);
                Coveo.Assert.check(this.hasPotentiallyMoreResultsToDisplay());

                if (this.isCurrentlyFetchingMoreResults()) {
                    this.logger.warn('Ignoring request to display more results since we\'re already doing so');
                    return;
                }
                if (!this.hasPotentiallyMoreResultsToDisplay()) {
                    this.logger.warn('Ignoring request to display more results since we know there aren\'t more to display');
                    return;
                }

                if (this.options.showInfiniteScrollWaitingAnimation) {
                    this.showWaitingAnimationForInfiniteScrolling();
                }

                this.fetchingMoreResults = this.queryController.fetchMore(count);
                this.fetchingMoreResults.done(function (data) {
                    Coveo.Assert.exists(data);

                    var results = data.results;
                    _this.reachedTheEndOfResults = count > data.results.length;
                    _this._buildResults(data);
                    _.each(results, function (result) {
                        _this.currentlyDisplayedResults.push(result);
                    });
                    Coveo.$(_this.element).trigger(Coveo.Events.ResultListEvents.newResultsDisplayed, {});
                });

                this.fetchingMoreResults.always(function () {
                    _this.hideWaitingAnimationForInfiniteScrolling();
                    _this.fetchingMoreResults = undefined;
                    Coveo.Defer.defer(function () {
                        return _this.handleScrollOfResultList();
                    });
                });
            };

            ResultList.prototype._triggerNewResultDisplayed = function (result, resultElement) {
                var args = {
                    result: result,
                    item: resultElement
                };
                Coveo.$(this.element).trigger(Coveo.Events.ResultListEvents.newResultDisplayed, args);
            };

            ResultList.prototype._buildResults = function (results) {
                var _this = this;
                Coveo.$.each(results.results, function (index, result) {
                    var resultElement = _this._instantiateTemplateForResult(result);
                    Coveo.$(resultElement).data("CoveoResult", result);
                    Coveo.$(_this.options.resultContainer).append(resultElement);
                    _this._autoCreateComponentsInsideResult(resultElement, result);
                    _this._triggerNewResultDisplayed(result, resultElement);
                });
            };

            ResultList.prototype._instantiateTemplateForResult = function (result) {
                Coveo.Assert.exists(result);

                var resultElement = this.options.resultTemplate.instantiateToElement(result);
                Ui.Component.bindResultToElement(resultElement, result);

                return resultElement;
            };

            ResultList.prototype._autoCreateComponentsInsideResult = function (element, result) {
                Coveo.Assert.exists(element);

                var initOptions = this.searchInterface.options;
                var initParameters = Coveo.$.extend({}, { options: initOptions }, this.getBindings(), { result: result });
                Ui.CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
            };

            ResultList.prototype.handleDuringQuery = function () {
                this.logger.trace('Emptying the result container');
                this.currentlyDisplayedResults = [];
                this.cancelFetchingMoreResultsIfNeeded();

                this.showWaitingAnimation();
                this.showOrHideElementsDependingOnState(false, false);
            };

            ResultList.prototype.handleProcessNewQueryResults = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.results);
                Coveo.$(this.element).fastToggle(!this.disabled);
                if (!this.disabled) {
                    var results = data.results;
                    this.logger.trace('Received query results from new query', results);

                    this.hideWaitingAnimation();
                    this.options.resultContainer.innerHTML = '';
                    this.currentlyDisplayedResults = [];

                    this._buildResults(results);

                    this.currentlyDisplayedResults = results.results;
                    this.reachedTheEndOfResults = false;

                    this.showOrHideElementsDependingOnState(true, this.currentlyDisplayedResults.length != 0);

                    if (this.options.enableInfiniteScroll && results.results.length == data.queryBuilder.numberOfResults) {
                        // This will check right away if we need to add more results to make the scroll container full & scrolling.
                        this.handleScrollOfResultList();
                    }

                    if (Ui.Device.isMobileDevice() && this.options.mobileScrollContainer != undefined) {
                        this.options.mobileScrollContainer.scrollTop = 0;
                    }

                    Coveo.$(this.element).trigger(Coveo.Events.ResultListEvents.newResultsDisplayed, {});
                }
            };

            ResultList.prototype.reset = function () {
                this.hideWaitingAnimation();
                Coveo.$(this.options.resultContainer).empty();
                this.currentlyDisplayedResults = [];
            };

            ResultList.prototype.handleScrollOfResultList = function (event) {
                if (this.isCurrentlyFetchingMoreResults()) {
                    return;
                }
                if (this.isScrollingOfResultListAlmostAtTheBottom() && this.hasPotentiallyMoreResultsToDisplay()) {
                    this.displayMoreResults(this.options.infiniteScrollPageSize, event != null);
                }
            };

            ResultList.prototype.isCurrentlyFetchingMoreResults = function () {
                return Coveo.Utils.exists(this.fetchingMoreResults);
            };

            ResultList.prototype.isScrollingOfResultListAlmostAtTheBottom = function () {
                //this is in a try catch because the unit test fail otherwise (Window does not exist for phantom js in the console)
                var isWindow;
                try  {
                    isWindow = Coveo.$(this.options.infiniteScrollContainer).get(0) instanceof Window;
                } catch (e) {
                    isWindow = false;
                }
                return isWindow ? this.isScrollAtBottomForWindowElement() : this.isScrollAtBottomForHtmlElement();
            };

            ResultList.prototype.isScrollAtBottomForWindowElement = function () {
                var windowHeight = Coveo.$(window).height();
                var scrollTop = Coveo.$(window).scrollTop();
                var docHeight = Coveo.$(document).height();
                return docHeight - (windowHeight + scrollTop) < windowHeight / 2;
            };

            ResultList.prototype.isScrollAtBottomForHtmlElement = function () {
                var elementHeight = Coveo.$(this.options.infiniteScrollContainer).innerHeight();
                var scrollHeight = Coveo.$(this.options.infiniteScrollContainer).get(0).scrollHeight;
                var bottomPosition = Coveo.$(this.options.infiniteScrollContainer).scrollTop() + elementHeight;

                return (scrollHeight - bottomPosition) < elementHeight / 2;
            };

            ResultList.prototype.hasPotentiallyMoreResultsToDisplay = function () {
                return this.currentlyDisplayedResults.length > 0 && !this.reachedTheEndOfResults;
            };

            ResultList.prototype.cancelFetchingMoreResultsIfNeeded = function () {
                if (this.isCurrentlyFetchingMoreResults()) {
                    this.logger.trace('Cancelling fetching more results');

                    this.fetchingMoreResults.reject();
                    this.fetchingMoreResults = undefined;
                }
            };

            ResultList.prototype.showOrHideElementsDependingOnState = function (hasQuery, hasResults) {
                Coveo.$(this.element).find('.coveo-show-if-query').fastToggle(hasQuery);
                Coveo.$(this.element).find('.coveo-show-if-no-query').fastToggle(!hasQuery);
                Coveo.$(this.element).find('.coveo-show-if-results').fastToggle(hasQuery && hasResults);
                Coveo.$(this.element).find('.coveo-show-if-no-results').fastToggle(hasQuery && !hasResults);
            };

            ResultList.prototype.showWaitingAnimation = function () {
                switch (this.options.waitAnimation.toLowerCase()) {
                    case 'fade':
                        Coveo.$(this.options.waitAnimationContainer).addClass('coveo-fade-out');
                        break;
                    case 'spinner':
                        Coveo.$(this.options.resultContainer).children().hide();
                        if (Coveo.$(this.options.waitAnimationContainer).find('.coveo-wait-animation').length == 0) {
                            Coveo.$(this.options.waitAnimationContainer).append('<img src="' + Ui.Images.WaitAnimation + '" class="coveo-wait-animation"/>');
                        }
                        break;
                }
            };

            ResultList.prototype.hideWaitingAnimation = function () {
                switch (this.options.waitAnimation.toLowerCase()) {
                    case 'fade':
                        Coveo.$(this.options.waitAnimationContainer).removeClass('coveo-fade-out');
                        break;
                    case 'spinner':
                        Coveo.$(this.options.waitAnimationContainer).children('img.coveo-wait-animation').detach();
                        break;
                }
            };

            ResultList.prototype.showWaitingAnimationForInfiniteScrolling = function () {
                Coveo.$(this.options.waitAnimationContainer).append('<img src="' + Ui.Images.WaitAnimation + '" class="coveo-wait-animation"/>');
            };

            ResultList.prototype.hideWaitingAnimationForInfiniteScrolling = function () {
                Coveo.$(this.options.waitAnimationContainer).children('img.coveo-wait-animation').detach();
            };

            ResultList.prototype.getOptions = function () {
                return this.options ? this.options : new DefaultResultListOptions(this.element);
            };
            ResultList.ID = 'ResultList';
            return ResultList;
        })(Ui.Component);
        Ui.ResultList = ResultList;

        Ui.CoveoJQuery.registerAutoCreateComponent(ResultList);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultOmniBoxResultListOptions = (function (_super) {
            __extends(DefaultOmniBoxResultListOptions, _super);
            function DefaultOmniBoxResultListOptions(element) {
                _super.call(this, element);
                this.omniBoxZIndex = this.loadNumberFromAttribute('data-omnibox-z-index', 51);
                this.headerTitle = this.loadStringFromAttribute('data-header-title');
            }
            return DefaultOmniBoxResultListOptions;
        })(Ui.DefaultResultListOptions);
        Ui.DefaultOmniBoxResultListOptions = DefaultOmniBoxResultListOptions;

        var OmniBoxResultList = (function (_super) {
            __extends(OmniBoxResultList, _super);
            function OmniBoxResultList(element, options, bindings) {
                _super.call(this, element, options, bindings, OmniBoxResultList.ID);
                this.element = element;
                this.options = options;
                this.bindings = bindings;
                this.options = new DefaultOmniBoxResultListOptions(element).merge(options);
                this.setupOptions();

                this.bind.onRoot(Coveo.Events.OmniBoxEvents.populateOmniBox, this.handlePopulateOmniBox);
            }
            OmniBoxResultList.prototype._buildResults = function (results) {
                var _this = this;
                if (this.lastOmniboxRequest) {
                    var content = Coveo.$("<div></div>");
                    content.append("<div class='coveo-omnibox-result-list-header'>\
          <span class='coveo-icon-omnibox-result-list'></span> \
          <span class='coveo-caption'>" + (this.options.headerTitle || Ui.l.SuggestedResults()) + "</span> \
        </div>");

                    _.each(results.results, function (result) {
                        var resultElement = _this._instantiateTemplateForResult(result);
                        Coveo.$(resultElement).data("CoveoResult", result).addClass('coveo-omnibox-selectable').appendTo(content);
                        Coveo.$(resultElement).on("keyboardSelect", function () {
                            _this.options.onSelect.call(_this, result, Coveo.$(resultElement), _this.lastOmniboxRequest.omniboxObject);
                        });
                        _this._autoCreateComponentsInsideResult(resultElement, result);
                        _this._triggerNewResultDisplayed(result, resultElement);
                    });
                    this.lastOmniboxRequest.deferred.resolve({ element: content.get(0), zIndex: this.options.omniBoxZIndex });
                }
            };

            OmniBoxResultList.prototype.setupOptions = function () {
                this.logger.info('Disabling infinite scroll for OmniBoxResultList', this);
                this.options.enableInfiniteScroll = false;
                this.options.onSelect = this.options.onSelect || this.onRowSelection;
            };

            OmniBoxResultList.prototype.handlePopulateOmniBox = function (e, args) {
                var _this = this;
                var deferred = Coveo.$.Deferred();
                args.rows.push({
                    deferred: deferred
                });
                this.lastOmniboxRequest = { omniboxObject: args, deferred: deferred };
                this.queryController.executeQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchAsYouType(Ui.AnalyticsActionCauseList.searchboxSubmit, {});
                    } });
            };

            OmniBoxResultList.prototype.onRowSelection = function (result, resultElement, omniboxObject) {
                this.usageAnalytics.logClickEvent(Ui.AnalyticsActionCauseList.documentOpen, { documentTitle: result.title, documentURL: result.clickUri }, result, this.root);
                window.location.href = result.clickUri;
            };
            OmniBoxResultList.ID = 'OmniBoxResultList';
            return OmniBoxResultList;
        })(Ui.ResultList);
        Ui.OmniBoxResultList = OmniBoxResultList;
        Ui.CoveoJQuery.registerAutoCreateComponent(OmniBoxResultList);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultImageResultListOptions = (function (_super) {
            __extends(DefaultImageResultListOptions, _super);
            function DefaultImageResultListOptions(element) {
                _super.call(this, element, false, false);
                this.layoutType = this.loadStringFromAttribute("data-layout-type", "row").toLowerCase();
                this.heightThreshold = this.loadNumberFromAttribute("data-height-threshold", 250);
                this.columnWidth = this.loadNumberFromAttribute("data-column-width", 225);
            }
            DefaultImageResultListOptions.prototype.findScrollParent = function (element) {
            };
            return DefaultImageResultListOptions;
        })(Ui.DefaultResultListOptions);
        Ui.DefaultImageResultListOptions = DefaultImageResultListOptions;

        var ImageResultList = (function (_super) {
            __extends(ImageResultList, _super);
            function ImageResultList(element, options, bindings, elementClassId) {
                if (typeof elementClassId === "undefined") { elementClassId = Coveo.Ui.ResultList.ID; }
                _super.call(this, element, new DefaultImageResultListOptions(element).merge(options), bindings, ImageResultList.ID);
                this.element = element;
                this.columnResultsArray = [];
                this.imagesInCurrentRow = [];
                this.imagesLoaded = 0;
                this.resultIndex = 0;
                this.lastRowHeight = 0;

                this.options = _super.prototype.getOptions.call(this);
                this.lastRowHeight = this.options.heightThreshold;

                Coveo.$(this.root).on(Coveo.Events.ResultListEvents.newResultsDisplayed, Coveo.$.proxy(this.handleProcessNewResultsDisplayed, this));
                this.bindWindowResizeEvent();
            }
            ImageResultList.prototype.getResultsElement = function () {
                return Coveo.$(this.element).find(".CoveoResult");
            };

            ImageResultList.prototype.getResultsElementImages = function () {
                return Coveo.$(this.element).find(".CoveoResult img");
            };

            ImageResultList.prototype.getResultsContainerDiv = function () {
                return Coveo.$(this.element).find("> div");
            };

            ImageResultList.prototype.bindWindowResizeEvent = function () {
                var _this = this;
                var timeout;
                Coveo.$(window).on('resize', function () {
                    clearTimeout(timeout);
                    timeout = setTimeout(_this.retrieveLayoutMethod(), 250);
                });
            };

            ImageResultList.prototype.handleProcessNewResultsDisplayed = function () {
                if (this.disabled) {
                    Coveo.$(this.element).fadeOut();
                } else {
                    Coveo.$(this.element).fadeIn();
                }
                this.onImageProxy(this.retrieveLayoutMethod());
            };

            ImageResultList.prototype.addTransitionAllToElement = function (element) {
                _.defer(function () {
                    element.addClass('coveo-transition-all');
                });
            };

            ImageResultList.prototype.retrieveLayoutMethod = function () {
                var _this = this;
                var oncomplete;
                if (!this.disabled) {
                    if (this.options.layoutType.toLowerCase() == ImageResultList.columnLayoutTypeStr) {
                        return function () {
                            return _this.setupColumns();
                        };
                    } else if (this.options.layoutType.toLowerCase() == ImageResultList.rowLayoutTypeStr) {
                        return function () {
                            return _this.setupRows();
                        };
                    }
                }
                return function () {
                };
            };

            ImageResultList.prototype.onImageProxy = function (callback) {
                var results = this.getResultsElement().each(function (i, e) {
                    if (Coveo.$(e).find('img').length == 0) {
                        Coveo.$(e).detach();
                    }
                });

                var images = this.getResultsElementImages();
                var loaded = 0;
                var onImageLoad = function (image) {
                    if (Coveo.$(image).height() > 0) {
                        if (Coveo.$(image).attr('width') == null && Coveo.$(image).attr('height') == null) {
                            Coveo.$(image).attr('height', Coveo.$(image).height());
                            Coveo.$(image).attr('width', Coveo.$(image).width());
                        }
                        loaded++;
                        if (loaded == images.length) {
                            callback();
                        }
                    } else {
                        Coveo.$(image).parent().detach();
                        images = images.not(image);
                        if (loaded == images.length) {
                            callback();
                        }
                    }
                };
                images.each(function (i, e) {
                    if ((this.src && this.complete) || Coveo.$(e).height() > 0) {
                        onImageLoad(e);
                    } else {
                        Coveo.$(e).off('load').one('load', function () {
                            onImageLoad(e);
                        });
                    }
                });
            };

            ImageResultList.prototype.getHorizontalMargin = function (element) {
                return parseInt(element.css('margin-left')) + parseInt(element.css('margin-right'));
            };

            ImageResultList.prototype.getVerticalMargin = function (element) {
                return parseInt(element.css('margin-top')) + parseInt(element.css('margin-bottom'));
            };

            ImageResultList.prototype.setupColumns = function () {
                var containerWidth = this.getResultsContainerDiv().width();
                var result = this.getResultsElement();
                var colWidth = this.options.columnWidth;
                var margin = this.getHorizontalMargin(result);

                var numberOfColumns = Math.floor(containerWidth / (colWidth + margin));

                this.columnResultsArray = [];
                for (var i = 0; i < numberOfColumns; i++) {
                    this.columnResultsArray.push(margin);
                }

                this.positionColumns(colWidth, margin);
                Coveo.$(this.element).trigger(Coveo.Events.ImageResultListEvents.imageResultsLayoutComplete, {});

                if (this.options.enableInfiniteScroll) {
                    this.adjustNumberOfResults();
                }
            };

            ImageResultList.prototype.positionColumns = function (colWidth, margin) {
                var _this = this;
                var results = this.getResultsElement();

                _.each(results, function (result) {
                    var minTopOffset = _.min(_this.columnResultsArray);
                    var resultIndex = Coveo.$.inArray(minTopOffset, _this.columnResultsArray);
                    var leftOffset = margin + (resultIndex * (colWidth + margin));

                    Coveo.$(result).css({
                        "left": leftOffset + "px",
                        "top": minTopOffset + "px",
                        "width": colWidth + "px"
                    });

                    _this.columnResultsArray[resultIndex] = minTopOffset + Coveo.$(result).outerHeight() + margin;
                });
                this.setResultsContainerHeight(_.max(this.columnResultsArray));

                this.addTransitionAllToElement(results);
            };

            ImageResultList.prototype.setResultsContainerHeight = function (height) {
                Coveo.$(this.element).height(Math.ceil(height));
                Coveo.$(this.element).attr("data-height", Math.ceil(height));
            };

            ImageResultList.prototype.setupRows = function () {
                var results = this.getResultsElement();
                var containerWidth = Coveo.$(this.element).width();
                this.resultIndex = 0;
                var topOffset = 0;

                while (this.resultIndex < results.length) {
                    this.imagesInCurrentRow = [];
                    var rowHeight = this.getCurrentRowHeight(results, containerWidth);
                    this.setCurrentRowImagesDimensions(results, rowHeight, topOffset);
                    topOffset += rowHeight;
                }
                this.setResultsContainerHeight(topOffset);
                Coveo.$(this.element).trigger(Coveo.Events.ImageResultListEvents.imageResultsLayoutComplete, {});
                this.addTransitionAllToElement(results);

                if (this.options.enableInfiniteScroll) {
                    this.adjustNumberOfResults();
                }
            };

            ImageResultList.prototype.getCurrentRowHeight = function (results, containerWidth) {
                var divider = 0;
                var height = null;
                while ((this.resultIndex < results.length) && (height == null || height >= this.options.heightThreshold)) {
                    var imageDimensions = this.getImageDimensionsFromResult(results.eq(this.resultIndex));
                    if (imageDimensions != null) {
                        divider += imageDimensions.width / imageDimensions.height;
                        height = containerWidth / divider;
                    }
                    this.imagesInCurrentRow.push(this.resultIndex);
                    this.resultIndex++;
                }

                // correct height for last element if it can't be as wide as the container
                if (height > this.options.heightThreshold) {
                    height = this.lastRowHeight;
                }
                this.lastRowHeight = height;
                return height;
            };

            ImageResultList.prototype.getImageDimensionsFromResult = function (result) {
                var image = result.find('img');
                var height = parseInt(image.attr('height'));
                var width = parseInt(image.attr('width'));

                return {
                    height: height,
                    width: width
                };
            };

            ImageResultList.prototype.setCurrentRowImagesDimensions = function (images, height, top) {
                var _this = this;
                var leftOffset = 0;
                _.each(this.imagesInCurrentRow, function (imageIndex) {
                    var oldWidth = parseInt(images.eq(imageIndex).find('img').attr('width'));
                    var oldHeight = parseInt(images.eq(imageIndex).find('img').attr('height'));
                    var width = oldWidth * height / oldHeight;
                    var widthMargin = _this.getHorizontalMargin(images.eq(imageIndex));
                    var heightMargin = _this.getVerticalMargin(images.eq(imageIndex));

                    images.eq(imageIndex).css({
                        "height": Math.round(height - heightMargin),
                        "width": Math.round(width - widthMargin),
                        "left": Math.round(leftOffset),
                        "top": Math.round(top)
                    });

                    leftOffset += width;
                });
            };

            ImageResultList.prototype.adjustNumberOfResults = function () {
                var elementHeight = Number(Coveo.$(this.element).attr("data-height"));

                if (Coveo.$.isNumeric(elementHeight) == false) {
                    elementHeight = Coveo.$(this.element).height();
                }

                if ((elementHeight < Coveo.$(this.options.infiniteScrollContainer).height()) && _super.prototype.hasPotentiallyMoreResultsToDisplay.call(this)) {
                    _super.prototype.displayMoreResults.call(this, this.options.infiniteScrollPageSize, false);
                }
            };
            ImageResultList.ID = 'ImageResultList';

            ImageResultList.rowLayoutTypeStr = 'row';
            ImageResultList.columnLayoutTypeStr = 'column';
            return ImageResultList;
        })(Ui.ResultList);
        Ui.ImageResultList = ImageResultList;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(ImageResultList);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultLinkOptions = (function (_super) {
            __extends(DefaultResultLinkOptions, _super);
            function DefaultResultLinkOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute("data-field");
                this.openInOutlook = this.loadBooleanFromAttribute("data-open-in-outlook", false);
                this.openQuickView = this.loadBooleanFromAttribute("data-open-quickview", false);
                this.alwaysOpenInNewWindow = this.loadBooleanFromAttribute("data-always-open-in-new-window", false);
            }
            return DefaultResultLinkOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultLinkOptions = DefaultResultLinkOptions;

        var ResultLink = (function (_super) {
            __extends(ResultLink, _super);
            function ResultLink(element, options, bindings, result, os) {
                _super.call(this, element, ResultLink.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                this.os = os;
                this.options = new DefaultResultLinkOptions(element).merge(options);
                this.options = Coveo.$.extend({}, this.options, this.componentOptionsModel.get(Coveo.Models.ComponentOptionsModel.attributesEnum.resultLink));
                this.result = result || this.resolveResult();
                Coveo.Assert.exists(this.componentOptionsModel);
                Coveo.Assert.exists(this.result);

                Coveo.$(element).on("mousedown touchend", Coveo.$.proxy(this.logOpenDocument, this));

                this.bindOnClickIfNotUndefined() || this.bindOpenQuickViewIfNotUndefined() || this.setHrefIfNotAlready() || this.openLinkThatIsNotAnAnchor();
            }
            ResultLink.prototype.bindOnClickIfNotUndefined = function () {
                var _this = this;
                if (this.options.onClick != undefined) {
                    Coveo.$(this.element).fastClick(function (e) {
                        _this.options.onClick.call(_this, e, _this.result);
                    });
                    return true;
                } else {
                    return false;
                }
            };

            ResultLink.prototype.bindOpenQuickViewIfNotUndefined = function () {
                var _this = this;
                if (this.options.openQuickView) {
                    Coveo.$(this.element).fastClick(function (e) {
                        e.preventDefault();
                        var quickView = Coveo.$(_this.element).parent().find('.CoveoQuickView .coveo-icon-for-quickview');
                        if (quickView.length == 0) {
                            quickView = Coveo.$(_this.element).closest('.CoveoQuickView .coveo-icon-for-quickview');
                        }
                        quickView.fastClick();
                    });
                    return true;
                } else {
                    return false;
                }
            };

            ResultLink.prototype.openLinkThatIsNotAnAnchor = function () {
                var _this = this;
                if (Ui.Device.isPhonegap()) {
                    Ui.PhonegapUtils.bindOpenLinkInPhonegap(this.element, this.getResultUri());
                } else if (!this.elementIsAnAnchor()) {
                    Coveo.$(this.element).fastClick(function (ev) {
                        if (_this.options.alwaysOpenInNewWindow) {
                            if (_this.options.openInOutlook && _this.hasOutlookField()) {
                                window.location.href = _this.getResultUri();
                            } else {
                                window.open(_this.getResultUri(), '_blank');
                            }
                        } else {
                            window.location.href = _this.getResultUri();
                        }
                    });
                }
            };

            ResultLink.prototype.setHrefIfNotAlready = function () {
                if (Ui.Device.isPhonegap() && this.elementIsAnAnchor()) {
                    //In phonegap, we need to open using the inappbrowser plugin
                    //remove the href/target so that the link doesn't open 2 times ( in the external browser + inside the webview)
                    //We still retrieve the url set on the template, if available
                    var uri = Coveo.$(this.element).attr('href');
                    if (uri == undefined || uri == "") {
                        uri = this.getResultUri();
                    }
                    Coveo.$(this.element).removeAttr('href');
                    Coveo.$(this.element).removeAttr('target');
                    Ui.PhonegapUtils.bindOpenLinkInPhonegap(this.element, uri);
                    return true;
                } else {
                    // Do not erase any value put in href by the template, etc. Allows
                    // using custom click urls while still keeping analytics recording
                    // and other behavior brought by the component.
                    if (this.elementIsAnAnchor() && !Coveo.Utils.isNonEmptyString(Coveo.$(this.element).attr('href'))) {
                        Coveo.$(this.element).attr('href', this.getResultUri());
                        if (this.options.alwaysOpenInNewWindow && !(this.options.openInOutlook && this.hasOutlookField())) {
                            Coveo.$(this.element).attr('target', '_blank');
                        }
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            ResultLink.prototype.bindPhonegapClick = function () {
                if (Ui.Device.isPhonegap()) {
                    Ui.PhonegapUtils.bindOpenLinkInPhonegap(this.element, this.getResultUri());
                }
            };

            ResultLink.prototype.logOpenDocument = function (e) {
                this.usageAnalytics.logClickEvent(Ui.AnalyticsActionCauseList.documentOpen, { documentURL: this.result.clickUri, documentTitle: this.result.title }, this.result, this.root);
            };

            ResultLink.prototype.getResultUri = function () {
                if (this.options.field == undefined && this.options.openInOutlook) {
                    this.setField();
                }
                if (this.options.field != undefined) {
                    return this.result.raw[Coveo.Utils.getCoveoFieldKey(this.options.field)];
                } else {
                    return this.result.clickUri;
                }
            };

            ResultLink.prototype.elementIsAnAnchor = function () {
                return this.element.tagName == "A";
            };

            ResultLink.prototype.setField = function () {
                var os = Coveo.Utils.exists(this.os) ? this.os : Ui.OS.get();
                if (os == 1 /* MACOSX */ && this.hasOutlookField()) {
                    this.options.field = "@sysoutlookformacuri";
                } else if (os == 0 /* WINDOWS */ && this.hasOutlookField()) {
                    this.options.field = "@sysoutlookuri";
                }
            };

            ResultLink.prototype.hasOutlookField = function () {
                var os = Coveo.Utils.exists(this.os) ? this.os : Ui.OS.get();
                if (os == 1 /* MACOSX */ && this.result.raw["sysoutlookformacuri"] != undefined) {
                    return true;
                } else if (os == 0 /* WINDOWS */ && this.result.raw["sysoutlookuri"] != undefined) {
                    return true;
                }
                return false;
            };
            ResultLink.ID = 'ResultLink';
            return ResultLink;
        })(Ui.Component);
        Ui.ResultLink = ResultLink;

        Ui.CoveoJQuery.registerAutoCreateComponent(ResultLink);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var SortCriteria = (function () {
            function SortCriteria(sort, direction) {
                if (typeof direction === "undefined") { direction = ''; }
                this.sort = sort;
                this.direction = direction;
                Coveo.Assert.isNonEmptyString(sort);
                Coveo.Assert.check(_.contains(SortCriteria.validSorts, sort) || SortCriteria.sortIsField(sort));
                if (SortCriteria.sortNeedsDirection(sort)) {
                    Coveo.Assert.check(_.contains(SortCriteria.validDirections, direction));
                } else {
                    Coveo.Assert.check(direction == '');
                }
            }
            SortCriteria.prototype.putInQueryBuilder = function (queryBuilder) {
                Coveo.Assert.exists(queryBuilder);

                if (SortCriteria.sortIsField(this.sort)) {
                    queryBuilder.sortCriteria = 'field' + this.direction;
                    queryBuilder.sortField = this.sort;
                } else if (this.direction != '') {
                    queryBuilder.sortCriteria = this.sort + this.direction;
                } else {
                    queryBuilder.sortCriteria = this.sort;
                }
            };

            SortCriteria.prototype.getValueFromResult = function (result) {
                Coveo.Assert.exists(result);

                if (SortCriteria.sortIsField(this.sort)) {
                    Coveo.Assert.stringStartsWith(this.sort, '@');
                    return result.raw[this.sort.substr(1)];
                } else if (this.sort == 'date') {
                    return result.raw['sysdate'];
                } else {
                    Coveo.Assert.fail('Cannot retrieve value: ' + this.sort);
                }
            };

            SortCriteria.prototype.toString = function () {
                if (Coveo.Utils.isNonEmptyString(this.direction)) {
                    return this.sort + ' ' + this.direction;
                } else {
                    return this.sort;
                }
            };

            SortCriteria.prototype.equals = function (criteria) {
                Coveo.Assert.exists(criteria);
                return criteria.sort == this.sort && criteria.direction == this.direction;
            };

            SortCriteria.parse = function (criteria) {
                Coveo.Assert.isNonEmptyString(criteria);
                var split = criteria.split(" ");
                return new SortCriteria(split[0], split[1]);
            };

            SortCriteria.sortIsField = function (criteria) {
                return criteria.substr(0, 1) == "@";
            };

            SortCriteria.sortNeedsDirection = function (sort) {
                return _.contains(SortCriteria.sortsNeedingDirection, sort) || SortCriteria.sortIsField(sort);
            };
            SortCriteria.validSorts = ["relevancy", "date", "qre"];
            SortCriteria.sortsNeedingDirection = ["date"];
            SortCriteria.validDirections = ["ascending", "descending"];
            return SortCriteria;
        })();
        Ui.SortCriteria = SortCriteria;

        var DefaultSortOptions = (function (_super) {
            __extends(DefaultSortOptions, _super);
            function DefaultSortOptions(element) {
                var _this = this;
                _super.call(this, element);
                this.sortCriterias = [];

                var sortCriteriasFromAttribute = this.loadStringFromAttribute('data-sort-criteria');
                _.each(Coveo.$.trim(sortCriteriasFromAttribute).split(','), function (criteria) {
                    _this.sortCriterias.push(SortCriteria.parse(criteria));
                });
            }
            return DefaultSortOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultSortOptions = DefaultSortOptions;

        var Sort = (function (_super) {
            __extends(Sort, _super);
            function Sort(element, options, bindings) {
                _super.call(this, element, Sort.ID, bindings);
                this.element = element;
                this.options = options;
                this.listenToQueryStateChange = true;

                this.options = new DefaultSortOptions(element).merge(options);

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne) + Coveo.Models.QueryStateModel.attributesEnum.sort;
                Coveo.$(this.root).on(eventName, Coveo.$.proxy(this.handleQueryStateChanged, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));

                this.bind.fastClick(Coveo.$(this.element), this.handleClick);

                if (this.isToggle()) {
                    Coveo.$(this.element).append('<span class="coveo-icon" />');
                }

                this.updateAppearance();
            }
            Sort.prototype.select = function (direction, silent) {
                if (typeof silent === "undefined") { silent = false; }
                if (direction) {
                    this.currentCriteria = _.find(this.options.sortCriterias, function (criteria) {
                        return criteria.direction == direction;
                    });
                } else if (Coveo.Utils.exists(this.currentCriteria)) {
                    var indexOfCurrentCriteria = _.indexOf(this.options.sortCriterias, this.currentCriteria);
                    Coveo.Assert.check(indexOfCurrentCriteria >= 0);
                    this.currentCriteria = this.options.sortCriterias[(indexOfCurrentCriteria + 1) % this.options.sortCriterias.length];
                } else {
                    this.currentCriteria = this.options.sortCriterias[0];
                }

                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.sort, this.currentCriteria.toString(), { silent: silent });
            };

            Sort.prototype.disable = function () {
                Coveo.$(this.element).addClass('coveo-tab-disabled');
                _super.prototype.disable.call(this);
            };

            Sort.prototype.enable = function () {
                Coveo.$(this.element).removeClass('coveo-tab-disabled');
                _super.prototype.enable.call(this);
            };

            Sort.prototype.getCurrentCriteria = function () {
                return this.currentCriteria;
            };

            Sort.prototype.handleQueryStateChanged = function (e, data) {
                // Basically, if the criteria in the model fits with one of ours, it'll become our active criteria
                var sortCriteria = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.sort);
                if (Coveo.Utils.isNonEmptyString(sortCriteria)) {
                    var criteriaFromModel = SortCriteria.parse(sortCriteria);
                    this.currentCriteria = _.find(this.options.sortCriterias, function (criteria) {
                        return criteriaFromModel.equals(criteria);
                    });
                } else {
                    this.currentCriteria = null;
                }
                this.updateAppearance();
            };

            Sort.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);

                var sort = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.sort);
                if (sort == Coveo.Models.QueryStateModel.defaultAttributes.sort || this.isSelected()) {
                    if (this.currentCriteria) {
                        this.currentCriteria.putInQueryBuilder(data.queryBuilder);
                    }
                }
            };

            Sort.prototype.handleClick = function () {
                var _this = this;
                var oldCriteria = this.currentCriteria;
                this.select();
                if (oldCriteria != this.currentCriteria) {
                    this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                            return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.resultsSort, { resultsSortBy: _this.currentCriteria.sort + _this.currentCriteria.direction });
                        } });
                }
            };

            Sort.prototype.isToggle = function () {
                return this.options.sortCriterias.length > 1;
            };

            Sort.prototype.isSelected = function () {
                return Coveo.Utils.exists(this.currentCriteria);
            };

            Sort.prototype.updateAppearance = function () {
                Coveo.$(this.element).toggleClass('coveo-selected', this.isSelected());

                if (this.isToggle()) {
                    var direction = this.currentCriteria ? this.currentCriteria.direction : this.options.sortCriterias[0].direction;
                    Coveo.$(this.element).toggleClass('coveo-ascending', direction == "ascending");
                }
            };

            Sort.prototype.match = function (sortId) {
                return _.any(this.options.sortCriterias, function (sortCriteria) {
                    return sortId == sortCriteria.toString();
                });
            };
            Sort.ID = 'Sort';
            return Sort;
        })(Ui.Component);
        Ui.Sort = Sort;

        Ui.CoveoJQuery.registerAutoCreateComponent(Sort);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultPagerOptions = (function (_super) {
            __extends(DefaultPagerOptions, _super);
            function DefaultPagerOptions(element) {
                _super.call(this, element);
                this.numberOfPages = this.loadNumberFromAttribute("data-number-of-pages", 10);
                this.navigationButton = this.loadBooleanFromAttribute("data-show-previous-next", true);
            }
            return DefaultPagerOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultPagerOptions = DefaultPagerOptions;

        var Pager = (function (_super) {
            __extends(Pager, _super);
            function Pager(element, options, bindings) {
                var _this = this;
                _super.call(this, element, Pager.ID, bindings);
                this.element = element;
                this.options = options;
                this.listenToQueryStateChange = true;
                this.needToReset = true;
                this.ignoreNextQuerySuccess = false;
                this.listTemplate = _.template('<ul></ul>');
                this.listItemTemplate = _.template('<li class="<%= _class %>"></li>');
                this.listItemValueTemplate = _.template('<a><%= listItemValue %></a>');
                this.navigationButtonTemplate = _.template('<li class="<%= _class %>"><a><span title="<%= buttonValue %>"/></a></li>');

                this.options = new DefaultPagerOptions(element).merge(options);

                this.currentPage = 1;

                this.bind.onRoot(Coveo.Events.QueryEvents.newQuery, function (e, args) {
                    return _this.handleNewQuery();
                });
                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, function (e, args) {
                    return _this.handleBuildingQuery(e, args);
                });
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, function (e, args) {
                    return _this.handleQuerySuccess(e, args);
                });
                this.bind.onRoot(Coveo.Events.QueryEvents.queryError, function (e, args) {
                    return _this.handleQueryError(e, args);
                });
                this.bind.onRoot(Coveo.Events.QueryEvents.noResults, function (e, args) {
                    return _this.handleNoResults(e, args);
                });

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.first);
                Coveo.$(this.queryStateModel.element).on(eventName, Coveo.$.proxy(this.handleQueryStateModelChanged, this));
            }
            Pager.prototype.setPage = function (pageNumber) {
                Coveo.Assert.exists(pageNumber);
                this.needToReset = false;
                this.currentPage = pageNumber;
                this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage));
                this.queryController.deferExecuteQuery();
            };

            Pager.prototype.previousPage = function () {
                this.needToReset = false;
                this.currentPage = this.currentPage - 1;
                this.currentPage = Math.max(this.currentPage, 1);
                this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage));
                this.queryController.deferExecuteQuery();
            };

            Pager.prototype.nextPage = function () {
                this.needToReset = false;
                this.currentPage = this.currentPage + 1;
                this.currentPage = Math.min(this.currentPage, 1000);
                this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage));
                this.queryController.deferExecuteQuery();
            };

            Pager.prototype.handleNewQuery = function () {
                if (this.needToReset) {
                    this.currentPage = 1;
                    this.updateQueryStateModel(this.getFirstResultNumber(this.currentPage));
                }
                this.needToReset = true;
            };

            Pager.prototype.updateQueryStateModel = function (attrValue) {
                this.listenToQueryStateChange = false;
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.first, attrValue);
                this.listenToQueryStateChange = true;
            };

            Pager.prototype.handleQueryError = function (e, data) {
                this.reset();
            };

            Pager.prototype.handleQuerySuccess = function (e, data) {
                var _this = this;
                this.reset();
                if (this.ignoreNextQuerySuccess) {
                    this.ignoreNextQuerySuccess = false;
                } else {
                    Coveo.Assert.isNotUndefined(data);

                    var firstResult = data.query.firstResult;
                    var count = data.results.totalCount;

                    var pagerBoundary = this.computePagerBoundary(firstResult, count);
                    this.currentPage = pagerBoundary.currentPage;
                    if (pagerBoundary.end - pagerBoundary.start > 0) {
                        var list = Coveo.$(this.listTemplate()).appendTo(this.element);

                        for (var i = pagerBoundary.start; i <= pagerBoundary.end; i++) {
                            var listItemValue = Coveo.$(this.listItemValueTemplate({
                                listItemValue: i
                            }));

                            (function (pageNumber) {
                                var listItem = Coveo.$(_this.listItemTemplate({
                                    _class: (pageNumber == _this.currentPage ? 'coveo-active' : "")
                                })).fastClick(function () {
                                    return _this.handleClickPage(pageNumber);
                                });
                                listItem.append(listItemValue).appendTo(list);
                            })(i);
                        }

                        if (this.options.navigationButton && pagerBoundary.lastResultPage > 1) {
                            this.renderNavigationButton(pagerBoundary, list);
                        }
                    }
                }
            };

            Pager.prototype.handleNoResults = function (e, data) {
                var lastValidPage = this.computePagerBoundary(data.results.totalCount, data.results.totalCount).lastResultPage;
                if (this.currentPage > lastValidPage) {
                    this.ignoreNextQuerySuccess = true;
                    this.setPage(lastValidPage);
                }
            };

            Pager.prototype.reset = function () {
                Coveo.$(this.element).empty();
            };

            Pager.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                var eventArgs = this.getQueryEventArgs();
                data.queryBuilder.firstResult = eventArgs.first;
                data.queryBuilder.numberOfResults = eventArgs.count;
            };

            Pager.prototype.computePagerBoundary = function (firstResult, totalCount) {
                var resultPerPage = this.queryController.options.resultsPerPage;
                var currentPage = Math.floor(firstResult / resultPerPage) + 1;
                var lastPageNumber = Math.ceil(totalCount / resultPerPage);
                lastPageNumber = Math.max(lastPageNumber, 1);
                var halfLength = Math.floor(this.options.numberOfPages / 2);
                var firstPageNumber = currentPage - halfLength;
                firstPageNumber = Math.max(firstPageNumber, 1);
                var endPageNumber = firstPageNumber + this.options.numberOfPages - 1;
                endPageNumber = Math.min(endPageNumber, lastPageNumber);
                return {
                    start: firstPageNumber,
                    end: endPageNumber,
                    lastResultPage: lastPageNumber,
                    currentPage: currentPage
                };
            };

            Pager.prototype.renderNavigationButton = function (pagerBoundary, list) {
                var _this = this;
                if (this.currentPage > 1) {
                    var previous = Coveo.$(this.navigationButtonTemplate({
                        _class: 'coveo-previous',
                        buttonValue: Ui.l.Previous()
                    })).prependTo(list);
                    previous.fastClick(function () {
                        return _this.handleClickPrevious();
                    });
                }

                if (this.currentPage < pagerBoundary.lastResultPage) {
                    var next = Coveo.$(this.navigationButtonTemplate({
                        _class: 'coveo-next',
                        buttonValue: Ui.l.Next()
                    })).appendTo(list);
                    next.fastClick(function () {
                        return _this.handleClickNext();
                    });
                }
            };

            Pager.prototype.handleQueryStateModelChanged = function (e, data) {
                if (!this.listenToQueryStateChange) {
                    return;
                }
                Coveo.Assert.exists(data);
                this.needToReset = false;
                var firstResult = data.value;
                this.currentPage = this.fromFirstResultsToPageNumber(firstResult);
            };

            Pager.prototype.handleClickPage = function (pageNumber) {
                Coveo.Assert.exists(pageNumber);
                this.setPage(pageNumber);
            };

            Pager.prototype.handleClickPrevious = function () {
                this.previousPage();
            };

            Pager.prototype.handleClickNext = function () {
                this.nextPage();
            };

            Pager.prototype.fromFirstResultsToPageNumber = function (firstResult) {
                return (firstResult / this.queryController.options.resultsPerPage) + 1;
            };

            Pager.prototype.getFirstResultNumber = function (pageNumber) {
                if (typeof pageNumber === "undefined") { pageNumber = this.currentPage; }
                return (pageNumber - 1) * this.queryController.options.resultsPerPage;
            };

            Pager.prototype.getQueryEventArgs = function () {
                return {
                    count: this.queryController.options.resultsPerPage,
                    first: this.getFirstResultNumber()
                };
            };
            Pager.ID = 'Pager';
            return Pager;
        })(Ui.Component);
        Ui.Pager = Pager;

        Ui.CoveoJQuery.registerAutoCreateComponent(Pager);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultAggregateOptions = (function (_super) {
            __extends(DefaultAggregateOptions, _super);
            function DefaultAggregateOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute('data-field');
                this.operation = this.loadStringFromAttribute('data-operation', 'sum');
                this.format = this.loadStringFromAttribute('data-format', 'c0');
            }
            return DefaultAggregateOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultAggregateOptions = DefaultAggregateOptions;

        var Aggregate = (function (_super) {
            __extends(Aggregate, _super);
            function Aggregate(element, options, bindings) {
                _super.call(this, element, Aggregate.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultAggregateOptions(element).merge(options);

                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, this.handleBuildingQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, this.handleQuerySuccess);
                Coveo.$(this.element).hide();
            }
            Aggregate.prototype.handleBuildingQuery = function (e, args) {
                var gbr = {
                    field: this.options.field,
                    maximumNumberOfValues: 0,
                    computedFields: [{
                            field: this.options.field,
                            operation: this.options.operation
                        }]
                };

                this.index = args.queryBuilder.groupByRequests.length;
                args.queryBuilder.groupByRequests.push(gbr);
            };

            Aggregate.prototype.handleQuerySuccess = function (e, args) {
                if (Coveo.Utils.isNumber(this.index) && args.results.groupByResults.length != 0) {
                    var gbr = args.results.groupByResults[this.index];
                    var aggregate = gbr.globalComputedFieldResults[0];
                    Coveo.$(this.element).text(Globalize.format(aggregate, this.options.format));
                    Coveo.$(this.element).show();
                } else {
                    Coveo.$(this.element).hide();
                }
            };
            Aggregate.ID = 'Aggregate';
            return Aggregate;
        })(Ui.Component);
        Ui.Aggregate = Aggregate;

        Ui.CoveoJQuery.registerAutoCreateComponent(Aggregate);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetValue = (function () {
            function FacetValue() {
                this.selected = false;
                this.excluded = false;
                this.waitingForDelta = false;
            }
            FacetValue.prototype.reset = function () {
                this.selected = false;
                this.excluded = false;
            };

            FacetValue.prototype.updateCountsFromNewValue = function (newValue) {
                Coveo.Assert.exists(newValue);
                this.occurrences = newValue.occurrences;
                this.delta = newValue.delta;
                this.computedField = newValue.computedField;
            };

            FacetValue.prototype.cloneWithZeroOccurrences = function () {
                this.occurrences = 0;
                this.computedField = 0;
                this.delta = undefined;
                return this;
            };

            FacetValue.prototype.cloneWithDelta = function (count, delta) {
                Coveo.Assert.isLargerOrEqualsThan(0, count);
                var clone = this.cloneWithZeroOccurrences();
                clone.delta = delta;
                clone.occurrences = count;
                return clone;
            };

            FacetValue.prototype.getFormattedCount = function () {
                var count = undefined;
                if (Coveo.Utils.exists(this.delta) && this.delta > 0) {
                    count = '+' + Globalize.format(this.delta, 'n0');
                } else {
                    if (this.occurrences > 0) {
                        count = Globalize.format(this.occurrences, 'n0');
                    }
                }
                return count;
            };

            FacetValue.prototype.getFormattedComputedField = function (format) {
                if (this.computedField != 0) {
                    return Globalize.format(this.computedField, format);
                } else {
                    return undefined;
                }
            };

            FacetValue.create = function (value) {
                if (_.isString(value)) {
                    return FacetValue.createFromValue(value);
                } else if (_.isObject(value)) {
                    if ('computedFieldResults' in value) {
                        return FacetValue.createFromGroupByValue(value);
                    } else {
                        return FacetValue.createFromFieldValue(value);
                    }
                } else {
                    throw new Error('Can\'t create value from ' + value);
                }
            };

            FacetValue.createFromValue = function (value) {
                Coveo.Assert.isNonEmptyString(value);

                var facetValue = new FacetValue();
                facetValue.value = value;
                facetValue.lookupValue = value;

                return facetValue;
            };

            FacetValue.createFromGroupByValue = function (groupByValue) {
                Coveo.Assert.exists(groupByValue);

                Coveo.Assert.exists(groupByValue);

                var facetValue = new FacetValue();
                facetValue.value = groupByValue.value;
                facetValue.lookupValue = Coveo.Utils.exists(groupByValue.lookupValue) ? groupByValue.lookupValue : groupByValue.value;
                facetValue.occurrences = groupByValue.numberOfResults;
                facetValue.computedField = Coveo.Utils.isNonEmptyArray(groupByValue.computedFieldResults) ? groupByValue.computedFieldResults[0] : undefined;
                facetValue.score = groupByValue.score;

                return facetValue;
            };

            FacetValue.createFromFieldValue = function (fieldValue) {
                Coveo.Assert.exists(fieldValue);

                var facetValue = new FacetValue();
                facetValue.value = fieldValue.value;
                facetValue.lookupValue = fieldValue.lookupValue;
                facetValue.occurrences = fieldValue.numberOfResults;

                return facetValue;
            };
            return FacetValue;
        })();
        Ui.FacetValue = FacetValue;

        var FacetValues = (function () {
            function FacetValues(groupByResult) {
                if (Coveo.Utils.exists(groupByResult)) {
                    this.values = _.map(groupByResult.values, function (groupByValue) {
                        return FacetValue.createFromGroupByValue(groupByValue);
                    });
                } else {
                    this.values = [];
                }
            }
            FacetValues.prototype.add = function (facetValue) {
                Coveo.Assert.exists(facetValue);
                Coveo.Assert.check(!this.contains(facetValue.value));
                this.values.push(facetValue);
            };

            FacetValues.prototype.remove = function (value) {
                Coveo.Assert.isNonEmptyString(value);
                this.values = _.filter(this.values, function (elem) {
                    return elem.value != value;
                });
            };

            FacetValues.prototype.size = function () {
                return this.values.length;
            };

            FacetValues.prototype.isEmpty = function () {
                return this.values.length == 0;
            };

            FacetValues.prototype.at = function (index) {
                Coveo.Assert.isLargerOrEqualsThan(0, index);
                Coveo.Assert.isSmallerThan(this.values.length, index);
                return this.values[index];
            };

            FacetValues.prototype.get = function (value) {
                return _.find(this.values, function (elem) {
                    return elem.value == value;
                });
            };

            FacetValues.prototype.contains = function (value) {
                return Coveo.Utils.exists(this.get(value));
            };

            FacetValues.prototype.getAll = function () {
                return this.values;
            };

            FacetValues.prototype.getSelected = function () {
                return _.filter(this.values, function (value) {
                    return value.selected;
                });
            };

            FacetValues.prototype.getExcluded = function () {
                return _.filter(this.values, function (value) {
                    return value.excluded;
                });
            };

            FacetValues.prototype.hasSelectedOrExcludedValues = function () {
                return this.getSelected().length != 0 || this.getExcluded().length != 0;
            };

            FacetValues.prototype.reset = function () {
                _.each(this.values, function (elem) {
                    return elem.reset();
                });
            };

            FacetValues.prototype.importActiveValuesFromOtherList = function (other) {
                var _this = this;
                Coveo.Assert.exists(other);

                _.each(other.getSelected(), function (otherValue) {
                    var myValue = _this.get(otherValue.value);
                    if (Coveo.Utils.exists(myValue)) {
                        myValue.selected = true;
                    } else {
                        _this.values.push(otherValue.cloneWithZeroOccurrences());
                    }
                });

                _.each(other.getExcluded(), function (otherValue) {
                    var myValue = _this.get(otherValue.value);
                    if (Coveo.Utils.exists(myValue)) {
                        myValue.excluded = true;
                    } else {
                        _this.values.push(otherValue.cloneWithZeroOccurrences());
                    }
                });
            };

            FacetValues.prototype.updateCountsFromNewValues = function (newValues) {
                Coveo.Assert.exists(newValues);

                this.values = _.map(this.values, function (myValue) {
                    var newValue = newValues.get(myValue.value);
                    if (Coveo.Utils.exists(newValue)) {
                        myValue.updateCountsFromNewValue(newValue);
                        return myValue;
                    } else {
                        return myValue.cloneWithZeroOccurrences();
                    }
                });
            };

            FacetValues.prototype.updateDeltaWithFilteredFacetValues = function (filtered) {
                Coveo.Assert.exists(filtered);
                _.each(this.values, function (unfilteredValue) {
                    var filteredValue = filtered.get(unfilteredValue.value);
                    unfilteredValue.waitingForDelta = false;
                    if (Coveo.Utils.exists(filteredValue)) {
                        if (unfilteredValue.occurrences - filteredValue.occurrences > 0) {
                            unfilteredValue.delta = unfilteredValue.occurrences - filteredValue.occurrences;
                        } else {
                            unfilteredValue.delta = null;
                        }
                    } else if (!unfilteredValue.selected && !unfilteredValue.excluded) {
                        unfilteredValue.delta = unfilteredValue.occurrences;
                    }
                });
            };

            FacetValues.prototype.mergeWithUnfilteredFacetValues = function (unfiltered) {
                var _this = this;
                Coveo.Assert.exists(unfiltered);

                var values = [];
                _.each(unfiltered.values, function (unfilteredValue) {
                    var filteredValue = _this.get(unfilteredValue.value);
                    if (Coveo.Utils.exists(filteredValue)) {
                        if (filteredValue.occurrences == unfilteredValue.occurrences) {
                            values.push(filteredValue);
                        } else {
                            values.push(unfilteredValue.cloneWithDelta(unfilteredValue.occurrences, unfilteredValue.occurrences - filteredValue.occurrences));
                        }
                    } else {
                        values.push(unfilteredValue.cloneWithDelta(unfilteredValue.occurrences, unfilteredValue.occurrences));
                    }
                });

                var index = 0;
                _.each(this.values, function (value) {
                    var unfilteredValue = unfiltered.get(value.value);
                    if (!Coveo.Utils.exists(unfilteredValue)) {
                        if (value.selected || value.excluded) {
                            values.splice(index, 0, value);
                            index++;
                        }
                    } else {
                        for (var i = 0; i < values.length; i++) {
                            if (values[i].value == value.value) {
                                index = i + 1;
                                break;
                            }
                        }
                    }
                });
                this.values = values;
            };

            FacetValues.prototype.sortValuesDependingOnStatus = function (excludeLastIndex) {
                this.values = _.sortBy(this.values, function (value) {
                    if (value.selected) {
                        return 1;
                    } else if (value.excluded) {
                        return 3;
                    } else {
                        return 2;
                    }
                });
                if (excludeLastIndex != null && excludeLastIndex < this.values.length) {
                    var nbExclude = this.getExcluded().length;
                    var excludes = this.values.splice(this.values.length - nbExclude, nbExclude);
                    Array.prototype.splice.apply(this.values, [excludeLastIndex - nbExclude, 0].concat(excludes));
                }
            };
            return FacetValues;
        })();
        Ui.FacetValues = FacetValues;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetSettings = (function () {
            function FacetSettings(sorts, facet) {
                var _this = this;
                this.facet = facet;
                this.facetSettingsIconTemplate = _.template("<span class='coveo-icon'></span>");
                this.facetSettingsButtonTemplate = _.template("<div title='" + Ui.l.Settings() + "' class='coveo-settings'></div>");
                this.facetSettingsPopupTemplate = _.template('<div class="coveo-settings-popup"></div>');
                this.facetSettingsSectionTemplate = _.template("<div class='coveo-section <%= _class %>'></div>");
                this.facetSettingsSectionIconTemplate = _.template("<div class='coveo-icon'></div>");
                this.facetSettingsItemsTemplate = _.template("<div class='coveo-items'></div>");
                this.facetSettingsItemTemplate = _.template("<div class='coveo-item' title='<%- title %>'><%- label %></div>");
                this.enabledSorts = [];
                this.enabledSortsIgnoreRenderBecauseOfPairs = [];
                this.customSortDirection = "ascending";
                this.customSortDirectionChange = false;
                _.each(sorts, function (sortToActivate) {
                    var newSortToEnable = FacetSettings.availableSorts[sortToActivate.toLowerCase()];
                    if (newSortToEnable != undefined) {
                        _this.enabledSorts.push(newSortToEnable);
                    }
                });
                this.removeEnabledSortsBasedOnFacetType();
                this.filterDuplicateForRendering();
                if (Coveo.Utils.isNonEmptyArray(this.enabledSorts)) {
                    if (this.facet.options.sortCriteria != undefined) {
                        this.activeSort = _.find(this.enabledSorts, function (enabledSort) {
                            return enabledSort.name == _this.facet.options.sortCriteria;
                        });
                    }
                    if (!this.activeSort) {
                        this.activeSort = this.enabledSorts[0];
                    }
                }
            }
            FacetSettings.prototype.build = function () {
                this.settingsButton = Coveo.$(this.facetSettingsButtonTemplate());
                this.settingsIcon = Coveo.$(this.facetSettingsIconTemplate());
                this.settingsPopup = Coveo.$(this.facetSettingsPopupTemplate());
                if (Coveo.Utils.isNonEmptyArray(this.enabledSorts)) {
                    var sortSection = this.buildSortSection();
                    this.directionSection = this.buildDirectionSection();
                }
                this.saveStateSection = this.buildSaveStateSection();
                this.clearStateSection = this.buildClearStateSection();
                this.hideSection = this.buildHideSection();
                this.showSection = this.buildShowSection();
                this.handleMouseEventOnButton(sortSection);
                if (Coveo.Utils.isNonEmptyArray(this.enabledSorts)) {
                    this.settingsPopup.append(sortSection.element, this.directionSection, this.saveStateSection, this.clearStateSection, this.hideSection, this.showSection);
                } else {
                    this.settingsPopup.append(this.saveStateSection, this.clearStateSection, this.hideSection, this.showSection);
                }

                this.settingsButton.append(this.settingsIcon);
                return this.settingsButton;
            };

            FacetSettings.prototype.reorderValues = function (facetValues) {
                if (this.activeSort.name == "custom" && this.facet.options.customSort != undefined) {
                    return this.reorderValuesWithCustomOrder(facetValues);
                } else {
                    return facetValues;
                }
            };

            FacetSettings.prototype.loadSavedState = function () {
                //set the state from the settings only if there is nothing
                //in the query state model for the current facet
                var state = this.facetStateLocalStorage.load();
                var currentStateIncluded = this.facet.queryStateModel.get(this.includedStateAttribute);
                var currentStateExcluded = this.facet.queryStateModel.get(this.excludedStateAttribute);
                var currentStateOperator = this.facet.queryStateModel.get(this.operatorStateAttribute);
                if (!Coveo.Utils.isNullOrUndefined(state) && Coveo.Utils.isEmptyArray(currentStateIncluded) && Coveo.Utils.isEmptyArray(currentStateExcluded) && !Coveo.Utils.isNonEmptyString(currentStateOperator)) {
                    var toSet = {};
                    toSet[this.includedStateAttribute] = state.included;
                    toSet[this.excludedStateAttribute] = state.excluded;
                    toSet[this.operatorStateAttribute] = state.operator;
                    this.facet.queryStateModel.setMultiple(toSet);
                    this.loadedFromSettings = toSet;
                }
            };

            FacetSettings.prototype.removeEnabledSortsBasedOnFacetType = function () {
                if (this.facet instanceof Ui.FacetRange) {
                    var facetRange = this.facet;
                    if (facetRange.options.slider) {
                        this.enabledSorts = [];
                    }
                }
            };

            FacetSettings.prototype.reorderValuesWithCustomOrder = function (facetValues) {
                var _this = this;
                var notFoundIndex = facetValues.length;
                var valueIndexPair = _.map(facetValues, function (facetValue) {
                    var index = _.indexOf(_this.facet.options.customSort, facetValue.lookupValue || facetValue.value);
                    index = index == -1 ? ++notFoundIndex : index;
                    return { facetValue: facetValue, index: index };
                });
                var sorted = _.sortBy(valueIndexPair, "index");
                sorted = this.customSortDirection == "ascending" ? sorted : sorted.reverse();
                return _.pluck(sorted, "facetValue");
            };

            FacetSettings.prototype.buildSortSection = function () {
                var sortSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-sort" }));
                var sortSectionIcon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var sortSectionItems = Coveo.$(this.facetSettingsItemsTemplate());
                var sortItems = this.buildSortSectionItems();
                sortSectionItems.append(sortItems);
                sortSection.append(sortSectionIcon, sortSectionItems);
                return { element: sortSection, sortItems: sortItems };
            };

            FacetSettings.prototype.buildSortSectionItems = function () {
                var _this = this;
                return _.map(this.enabledSorts, function (enabledSort) {
                    if (_.contains(_this.enabledSortsIgnoreRenderBecauseOfPairs, enabledSort)) {
                        return Coveo.$("<div></div>").hide();
                    } else {
                        return Coveo.$(_this.facetSettingsItemTemplate({
                            label: Coveo.L10N.format(enabledSort.label),
                            title: enabledSort.description
                        })).click(function (e) {
                            return _this.handleClickSortButton(e, enabledSort);
                        });
                    }
                });
            };

            FacetSettings.prototype.closePopupAndUpdateSort = function () {
                this.closePopup();
                if (this.activeSort.name != "custom") {
                    this.facet.updateSort(this.activeSort.name);
                } else {
                    this.facet.updateSort("nosort");
                    if (this.customSortDirectionChange) {
                        this.customSortDirectionChange = false;
                        this.facet.queryController.executeQuery();
                    }
                }
            };

            FacetSettings.prototype.closePopup = function () {
                this.settingsPopup.detach();
            };

            FacetSettings.prototype.buildDirectionSection = function () {
                var _this = this;
                var directionSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-direction" }));
                var icon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var directionItems = Coveo.$(this.facetSettingsItemsTemplate());

                var ascending = Coveo.$(this.facetSettingsItemTemplate({
                    label: Ui.l.Ascending(),
                    title: Ui.l.Ascending()
                })).click(function (e) {
                    return _this.handleDirectionClick(e, "ascending");
                });

                var descending = Coveo.$(this.facetSettingsItemTemplate({
                    label: Ui.l.Descending(),
                    title: Ui.l.Descending()
                })).click(function (e) {
                    return _this.handleDirectionClick(e, "descending");
                });

                directionItems.append(ascending, descending);
                directionSection.append(icon, directionItems);
                if (!this.activeSort.directionToggle) {
                    directionSection.addClass("coveo-disabled");
                } else {
                    this.selectItem(this.getItems(directionSection).first());
                }
                return directionSection;
            };

            FacetSettings.prototype.buildSaveStateSection = function () {
                var _this = this;
                var saveStateSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-save-state" }));
                var icon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var saveStateItems = Coveo.$(this.facetSettingsItemsTemplate());

                this.facetStateLocalStorage = new Coveo.LocalStorageUtils('facet-state-' + this.facet.options.uniqueId);
                this.includedStateAttribute = Coveo.Models.QueryStateModel.getFacetId(this.facet.options.uniqueId);
                this.excludedStateAttribute = Coveo.Models.QueryStateModel.getFacetId(this.facet.options.uniqueId, false);
                this.operatorStateAttribute = Coveo.Models.QueryStateModel.getFacetOperator(this.facet.options.uniqueId);

                var saveStateItem = Coveo.$(this.facetSettingsItemTemplate({ label: Ui.l.SaveFacetState(), title: Ui.l.SaveFacetState() })).fastClick(function (e) {
                    return _this.handleSaveStateClick(e);
                }).appendTo(saveStateItems);

                saveStateSection.append(icon, saveStateItems);
                return saveStateSection;
            };

            FacetSettings.prototype.buildClearStateSection = function () {
                var _this = this;
                var clearStateSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-clear-state" }));
                var icon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var clearStateItems = Coveo.$(this.facetSettingsItemsTemplate());

                var clearStateItem = Coveo.$(this.facetSettingsItemTemplate({ label: Ui.l.ClearFacetState(), title: Ui.l.ClearFacetState() })).fastClick(function (e) {
                    return _this.handleClearStateClick(e);
                }).appendTo(clearStateItems);

                clearStateSection.append(icon, clearStateItems);
                return clearStateSection;
            };

            FacetSettings.prototype.buildHideSection = function () {
                var _this = this;
                var hideSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-hide" }));
                var icon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var hideItems = Coveo.$(this.facetSettingsItemsTemplate());
                var hideItem = Coveo.$(this.facetSettingsItemTemplate({ label: Ui.l.Collapse(), title: Ui.l.HideFacet() })).fastClick(function (e) {
                    _this.facet.collapseFacet();
                    _this.settingsPopup.detach();
                }).appendTo(hideItems);

                hideSection.append(icon, hideItems);
                return hideSection;
            };

            FacetSettings.prototype.buildShowSection = function () {
                var _this = this;
                var showSection = Coveo.$(this.facetSettingsSectionTemplate({ _class: "coveo-show" }));
                var icon = Coveo.$(this.facetSettingsSectionIconTemplate());
                var showItems = Coveo.$(this.facetSettingsItemsTemplate());
                var showItem = Coveo.$(this.facetSettingsItemTemplate({ label: Ui.l.Expand(), title: Ui.l.Expand() })).click(function (e) {
                    _this.facet.expandFacet();
                    _this.settingsPopup.detach();
                }).appendTo(showItems);
                showSection.append(icon, showItems);
                return showSection;
            };

            FacetSettings.prototype.handleClickSettingsButtons = function (event, sortSection) {
                var _this = this;
                if (this.settingsPopup.is(':visible')) {
                    this.settingsPopup.detach();
                } else {
                    Ui.JQueryUtils.positionPopup(this.settingsPopup, Coveo.$(event.delegateTarget), Coveo.$(this.facet.root), Coveo.$(this.facet.root), this.getPopupAlignment());

                    this.hideSection.toggle(!Coveo.$(this.facet.element).hasClass("coveo-collapsed"));
                    this.showSection.toggle(Coveo.$(this.facet.element).hasClass("coveo-collapsed"));
                    this.clearStateSection.toggle(!Coveo.Utils.isNullOrUndefined(this.facetStateLocalStorage.load()));

                    _.each(this.enabledSorts, function (criteria, i) {
                        if (_this.activeSort.name.toLowerCase() == criteria.name.toLowerCase()) {
                            _this.selectItem(sortSection.sortItems[i]);
                        } else {
                            _this.unselectItem(sortSection.sortItems[i]);
                        }
                    });
                }
            };

            FacetSettings.prototype.handleClickSortButton = function (e, enabledSort) {
                this.activeSort = enabledSort;
                if (enabledSort.directionToggle && _.contains(this.enabledSorts, FacetSettings.availableSorts[this.activeSort.relatedSort])) {
                    this.activateDirectionSection();
                } else {
                    this.disableDirectionSection();
                }
                this.selectItem(Coveo.$(e.target));
                this.closePopupAndUpdateSort();
            };

            FacetSettings.prototype.handleDirectionClick = function (e, direction) {
                if (!Coveo.$(e.target).parent().parent().hasClass("coveo-disabled") && this.activeSort.name.indexOf(direction) == -1) {
                    this.activeSort = FacetSettings.availableSorts[this.activeSort.relatedSort];

                    this.unselectSection(this.directionSection);
                    this.selectItem(Coveo.$(e.target));
                    if (this.activeSort.name == "custom" && this.customSortDirection != direction) {
                        this.customSortDirection = direction;
                        this.customSortDirectionChange = true;
                    }
                    this.closePopupAndUpdateSort();
                }
            };

            FacetSettings.prototype.handleSaveStateClick = function (e) {
                this.facetStateLocalStorage.save({
                    included: this.facet.queryStateModel.get(this.includedStateAttribute),
                    excluded: this.facet.queryStateModel.get(this.excludedStateAttribute),
                    operator: this.facet.queryStateModel.get(this.operatorStateAttribute)
                });
                this.closePopup();
            };

            FacetSettings.prototype.handleClearStateClick = function (e) {
                var _this = this;
                this.facetStateLocalStorage.remove();
                this.facet.reset();
                this.closePopup();
                this.facet.triggerNewQuery(function () {
                    return _this.facet.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetClearAll, { facetId: _this.facet.options.uniqueId });
                });
            };

            FacetSettings.prototype.handleMouseEventOnButton = function (sortSection) {
                var _this = this;
                var closeTimeout;
                this.settingsButton.click(function (e) {
                    return _this.handleClickSettingsButtons(e, sortSection);
                });
                Coveo.$([this.settingsIcon[0], this.settingsPopup[0]]).mouseleave(function () {
                    return closeTimeout = setTimeout(function () {
                        _this.settingsPopup.detach();
                    }, 300);
                }).mouseenter(function () {
                    return clearTimeout(closeTimeout);
                });
            };

            FacetSettings.prototype.activateDirectionSection = function () {
                this.directionSection.removeClass("coveo-disabled");
                this.unselectSection(this.directionSection);
                this.selectItem(this.getItems(this.directionSection).first());
            };

            FacetSettings.prototype.disableDirectionSection = function () {
                this.directionSection.addClass("coveo-disabled");
                this.unselectSection(this.directionSection);
            };

            FacetSettings.prototype.getItems = function (section) {
                return section.find(".coveo-item");
            };

            FacetSettings.prototype.unselectSection = function (section) {
                this.getItems(section).removeClass("coveo-selected");
            };

            FacetSettings.prototype.selectItem = function (item) {
                item.addClass("coveo-selected");
            };

            FacetSettings.prototype.unselectItem = function (item) {
                item.removeClass("coveo-selected");
            };

            FacetSettings.prototype.filterDuplicateForRendering = function () {
                if (this.hasDuplicate("alphaascending", "alphadescending")) {
                    this.enabledSortsIgnoreRenderBecauseOfPairs.push(FacetSettings.availableSorts["alphadescending"]);
                }
                if (this.hasDuplicate("computedfieldascending", "computedfielddescending")) {
                    this.enabledSortsIgnoreRenderBecauseOfPairs.push(FacetSettings.availableSorts["computedfielddescending"]);
                }
            };

            FacetSettings.prototype.getPopupAlignment = function () {
                var alignmentHorizontal = Ui.Device.isMobileDevice() ? 1 /* center */ : 2 /* right */;
                var alignmentVertical = 2 /* bottom */;
                return {
                    horizontal: alignmentHorizontal,
                    vertical: alignmentVertical
                };
            };

            FacetSettings.prototype.hasDuplicate = function (first, second) {
                var duplicate = _.filter(this.enabledSorts, function (active) {
                    return active.name == first || active.name == second;
                });
                return duplicate != undefined && duplicate.length == 2;
            };
            FacetSettings.availableSorts = {
                score: {
                    label: Ui.l.Score(),
                    directionToggle: false,
                    description: Ui.l.ScoreDescription(),
                    name: "score"
                },
                occurrences: {
                    label: Ui.l.Occurrences(),
                    directionToggle: false,
                    description: Ui.l.OccurrencesDescription(),
                    name: "occurrences"
                },
                alphaascending: {
                    label: Ui.l.Label(),
                    directionToggle: true,
                    description: Ui.l.LabelDescription(),
                    name: "alphaascending",
                    relatedSort: "alphadescending"
                },
                alphadescending: {
                    label: Ui.l.Label(),
                    directionToggle: true,
                    description: Ui.l.LabelDescription(),
                    name: "alphadescending",
                    relatedSort: "alphaascending"
                },
                computedfieldascending: {
                    label: Ui.l.Value(),
                    directionToggle: true,
                    description: Ui.l.ValueDescription(),
                    name: "computedfieldascending",
                    relatedSort: "computedfielddescending"
                },
                computedfielddescending: {
                    label: Ui.l.Value(),
                    directionToggle: true,
                    description: Ui.l.ValueDescription(),
                    name: "computedfielddescending",
                    relatedSort: "computedfieldascending"
                },
                chisquare: {
                    label: Ui.l.RelativeFrequency(),
                    directionToggle: false,
                    description: Ui.l.RelativeFrequencyDescription(),
                    name: "chisquare"
                },
                custom: {
                    label: Ui.l.Custom(),
                    directionToggle: true,
                    description: Ui.l.CustomDescription(),
                    name: "custom",
                    relatedSort: "custom"
                }
            };
            return FacetSettings;
        })();
        Ui.FacetSettings = FacetSettings;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetSearch = (function () {
            function FacetSearch(facet, facetSearchValuesListKlass) {
                var _this = this;
                this.facet = facet;
                this.facetSearchValuesListKlass = facetSearchValuesListKlass;
                this.showingFacetSearchWaitAnimation = false;
                this.searchTemplate = _.template("<div class='coveo-search'></div>");
                this.magnifierTemplate = _.template("<div class='coveo-magnifier'></div>");
                this.waitTemplate = _.template("<div class='coveo-wait-animation'></div>");
                this.clearIconTemplate = _.template("<span class='coveo-icon'></span>");
                this.clearTemplate = _.template("<div title='" + Ui.l.Clear(Ui.l.Search()) + "' class='coveo-clear'></div>");
                this.middleTemplate = _.template("<div class='coveo-middle'></div>");
                this.inputTemplate = _.template("<input type='text' autocapitalize='off' autocorrect='off' placeholder='<%- placeholder %>'/>");
                this.searchResultsTemplate = _.template('<ul class="coveo-search-results"/>');
                this.searchResults = Coveo.$(this.searchResultsTemplate());
                Coveo.$(window).resize(function () {
                    if (!Ui.Device.isMobileDevice()) {
                        _this.positionSearchResults();
                    }
                });
            }
            FacetSearch.prototype.build = function () {
                if (Ui.Device.isMobileDevice()) {
                    return this.buildSearchMobile();
                } else {
                    return this.buildBaseSearch();
                }
            };

            FacetSearch.prototype.positionSearchResults = function () {
                if (this.searchResults != null && this.searchResults.is(':visible')) {
                    if (Ui.Device.isMobileDevice()) {
                        this.searchResults.insertAfter(this.search);
                    } else {
                        var resultsBorderAndPadding = this.searchResults.outerWidth() - this.searchResults.innerWidth();
                        this.searchResults.outerWidth(this.search.outerWidth() - resultsBorderAndPadding);
                        this.searchResults.show();
                        Ui.JQueryUtils.positionPopup(this.searchResults, this.search, Coveo.$(this.facet.element), Coveo.$(this.facet.root), { vertical: 2 /* bottom */, horizontal: 1 /* center */ });
                    }
                }
            };

            FacetSearch.prototype.completelyDismissSearch = function () {
                this.cancelAnyPendingSearchOperation();
                this.facet.unfadeInactiveValuesInMainList();
                this.search.removeClass('coveo-no-results');
                this.hideSearchResultsElement();
                this.input.val('');
            };

            FacetSearch.prototype.buildBaseSearch = function () {
                var _this = this;
                this.search = Coveo.$(this.searchTemplate());

                this.magnifier = Coveo.$(this.magnifierTemplate()).appendTo(this.search);
                this.wait = Coveo.$(this.waitTemplate()).hide().appendTo(this.search);
                this.clearIcon = Coveo.$(this.clearIconTemplate());
                this.clear = Coveo.$(this.clearTemplate()).appendTo(this.search).hide().append(this.clearIcon);

                // This is needed to establish a new BFC for the input.
                // http://colinaarts.com/articles/the-magic-of-overflow-hidden/#making-room-for-floats
                this.middle = Coveo.$(this.middleTemplate()).appendTo(this.search);

                this.input = Coveo.$(this.inputTemplate({ placeholder: Ui.l.SearchIn(this.facet.options.title) })).appendTo(this.middle);
                Ui.Component.pointElementsToDummyForm(this.input);

                this.input.keyup(function (event) {
                    return _this.handleFacetSearchKeyUp(event);
                });
                this.clear.fastClick(function (e) {
                    return _this.handleFacetSearchClear();
                });
                this.input.focus(function (e) {
                    return _this.handleFacetSearchFocus(e);
                });
                this.input.blur(function (e) {
                    return _this.handleFacetSearchBlur();
                });

                return this.search;
            };

            FacetSearch.prototype.buildSearchMobile = function () {
                var _this = this;
                var button = Coveo.$("<div class='coveo-search-button-mobile'>" + Ui.l.SearchIn(this.facet.options.title) + "</div>");
                this.search = this.buildBaseSearch();
                button.fastClick(function () {
                    var modalbox = Coveo.ModalBox.open(Coveo.$('<div />').append(_this.search), {
                        title: Ui.JQueryUtils.getPopUpCloseButton(Ui.l.Close(), Ui.l.SearchIn(_this.facet.options.title)),
                        validation: function () {
                            _this.completelyDismissSearch();
                            return true;
                        },
                        className: 'coveo-mobile-facet-search'
                    });
                    Coveo.$(modalbox.wrapper.find('.coveo-title')).fastClick(function () {
                        return modalbox.close();
                    });
                    _this.input.val('').keyup().focus();
                });
                return button;
            };

            FacetSearch.prototype.handleFacetSearchKeyUp = function (event) {
                Coveo.Assert.exists(event);
                var isEmpty = this.input.val() == '';
                this.showOrHideClearElement(isEmpty);

                if (!Ui.Device.isMobileDevice()) {
                    this.handleKeyboardNavigation(event, isEmpty);
                } else {
                    this.startNewSearchTimeout();
                }
            };

            FacetSearch.prototype.handleFacetSearchFocus = function (e) {
                if (this.getValueInInputForFacetSearch() != '' && !Ui.Device.isMobileDevice()) {
                    this.startNewSearchTimeout();
                }
                if (Ui.Device.isSmallScreenWidth()) {
                    Ui.JQueryUtils.addToggleClassOnSearchInterface("slide-left");
                }
            };

            FacetSearch.prototype.handleFacetSearchBlur = function () {
                var _this = this;
                // Give the browser time to trigger the click event on a search item if that's what
                // triggered the loss of focus.
                setTimeout(function () {
                    if (!Ui.Device.isMobileDevice()) {
                        _this.completelyDismissSearch();
                    }
                }, 250);
            };

            FacetSearch.prototype.handleFacetSearchClear = function () {
                this.input.val('');
                this.clear.hide();
                this.completelyDismissSearch();
            };

            FacetSearch.prototype.showOrHideClearElement = function (isEmpty) {
                if (!isEmpty) {
                    this.clear.show();
                } else {
                    this.clear.hide();
                    this.search.removeClass('coveo-no-results');
                }
            };

            FacetSearch.prototype.handleKeyboardNavigation = function (event, isEmpty) {
                switch (event.which) {
                    case 13 /* ENTER */:
                        this.keyboardNavigationEnterPressed(event, isEmpty);
                        break;
                    case 46 /* DELETE */:
                        this.keyboardNavigationDeletePressed(event);
                        break;
                    case 27 /* ESCAPE */:
                        this.completelyDismissSearch();
                        break;
                    case 40 /* DOWN_ARROW */:
                        this.moveCurrentResultDown();
                        break;
                    case 38 /* UP_ARROW */:
                        this.moveCurrentResultUp();
                        break;
                    default:
                        this.highlightCurrentQueryWithinSearchResults();
                        this.startNewSearchTimeout();
                        break;
                }
            };

            FacetSearch.prototype.keyboardNavigationEnterPressed = function (event, isEmpty) {
                if (event.shiftKey) {
                    this.triggerNewFacetSearch();
                } else {
                    // The second condition in the following IF is for UTs, since the
                    // element is not really visible when running under QUnit.
                    if (this.searchResults.is(':visible') || this.searchResults.css('display') == 'block') {
                        this.performSelectActionOnCurrentSearchResult();
                        this.completelyDismissSearch();
                    } else if (!this.search.is('.coveo-no-results') && !isEmpty) {
                        this.selectAllValuesMatchingSearch();
                    }
                }
            };

            FacetSearch.prototype.keyboardNavigationDeletePressed = function (event) {
                if (event.shiftKey) {
                    this.performExcludeActionOnCurrentSearchResult();
                    this.completelyDismissSearch();
                    this.input.val('');
                }
            };

            FacetSearch.prototype.triggerNewFacetSearch = function (numberOfValuesInFacetSearch, oldLength) {
                var _this = this;
                if (typeof numberOfValuesInFacetSearch === "undefined") { numberOfValuesInFacetSearch = this.facet.options.numberOfValuesInFacetSearch; }
                this.cancelAnyPendingSearchOperation();
                this.showFacetSearchWaitingAnimation();

                this.facet.logger.info('Triggering new facet search');
                var valueInInput = this.getValueInInputForFacetSearch();
                var valueToUseForFacetSearch = Ui.FacetUtils.getValuesToUseForSearchInFacet(valueInInput, this.facet);
                this.facetSearchDeferred = this.facet.facetQueryController.recursiveFacetSearch(valueInInput, this.facet.options.numberOfValuesInFacetSearch);
                this.facetSearchDeferred.done(function (fieldValues) {
                    _this.facet.usageAnalytics.logCustomEvent(Ui.AnalyticsActionCauseList.facetSearch, { facetId: _this.facet.options.uniqueId }, _this.facet.root);
                    _this.facet.logger.debug('Received field values', fieldValues);
                    _this._processNewFacetSearchResults(fieldValues.slice(0, _this.facet.options.numberOfValuesInFacetSearch + 1));
                    _this.hideFacetSearchWaitingAnimation();
                    _this.facetSearchDeferred = undefined;
                });

                this.facetSearchDeferred.fail(function (data, error) {
                    // The request might be normally cancelled if another search is triggered.
                    // In this case we do not hide the animation to prevent flicking.
                    if (Coveo.Utils.exists(error)) {
                        _this.facet.logger.error('Error while retrieving facet values', error);
                        _this.hideFacetSearchWaitingAnimation();
                    }
                    _this.facetSearchDeferred = undefined;
                });
            };

            FacetSearch.prototype.startNewSearchTimeout = function () {
                var _this = this;
                this.cancelAnyPendingSearchOperation();
                this.facetSearchTimeout = setTimeout(function () {
                    if (_this.getValueInInputForFacetSearch() != '') {
                        _this.triggerNewFacetSearch();
                    } else {
                        _this.completelyDismissSearch();
                    }
                }, this.facet.options.facetSearchDelay);
            };

            FacetSearch.prototype.cancelAnyPendingSearchOperation = function () {
                if (Coveo.Utils.exists(this.facetSearchTimeout)) {
                    clearTimeout(this.facetSearchTimeout);
                    this.facetSearchTimeout = undefined;
                }
                if (Coveo.Utils.exists(this.facetSearchDeferred)) {
                    this.facetSearchDeferred.reject();
                    this.facetSearchDeferred = undefined;
                }

                this.hideFacetSearchWaitingAnimation();
            };

            FacetSearch.prototype._processNewFacetSearchResults = function (fieldValues) {
                Coveo.Assert.exists(fieldValues);

                if (fieldValues.length > 0) {
                    this.search.removeClass('coveo-no-results');
                    this.facet.fadeInactiveValuesInMainList(this.facet.options.facetSearchDelay);
                    this.rebuildSearchResults(fieldValues);
                    this.showSearchResultsElement();
                    this.highlightCurrentQueryWithinSearchResults();
                    Ui.FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer(this.facet, true);
                    this.makeFirstSearchResultTheCurrentOne();
                } else {
                    this.hideSearchResultsElement();
                    this.search.addClass('coveo-no-results');
                }
            };

            FacetSearch.prototype.rebuildSearchResults = function (fieldValues) {
                var _this = this;
                Coveo.Assert.exists(fieldValues);

                this.searchResults.empty();

                var selectAll = Coveo.$('<li class="coveo-selectable coveo-select-all"/>').text('Select All').appendTo(this.searchResults);
                selectAll.fastClick(function () {
                    return _this.selectAllValuesMatchingSearch();
                });

                var facetValues = _.map(fieldValues, function (fieldValue) {
                    return Ui.FacetValue.create(fieldValue);
                });
                new this.facetSearchValuesListKlass(this.facet, Ui.FacetValueElement).build(facetValues).appendTo(this.searchResults);

                this.searchResults.find('.coveo-selectable').each(function (i, e) {
                    Coveo.$(e).mousemove(function () {
                        _this.makeCurrentResult(Coveo.$(e));
                    });
                });
            };

            FacetSearch.prototype.showSearchResultsElement = function () {
                this.searchResults.appendTo(this.facet.root);
                this.positionSearchResults();
            };

            FacetSearch.prototype.hideSearchResultsElement = function () {
                this.searchResults.remove();
            };

            FacetSearch.prototype.highlightCurrentQueryWithinSearchResults = function () {
                var _this = this;
                Coveo.$(this.searchResults).find('.coveo-caption').each(function (index, captionElement) {
                    var search = _this.getValueInInputForFacetSearch();
                    var regex = new RegExp('(' + Coveo.StringUtils.wildcardsToRegex(search) + ')', 'ig');

                    var text = Coveo.$(captionElement).text();
                    var highlighted = text.replace(regex, '<span class="coveo-highlight">$1</span>');
                    Coveo.$(captionElement).html(highlighted);
                });
            };

            FacetSearch.prototype.makeFirstSearchResultTheCurrentOne = function () {
                this.makeCurrentResult(this.getSelectables().first());
            };

            FacetSearch.prototype.makeCurrentResult = function (result) {
                this.getSelectables().removeClass('coveo-current');
                this.getSelectables().first().addClass('coveo-current');
            };

            FacetSearch.prototype.moveCurrentResultDown = function () {
                var current = this.searchResults.find(".coveo-current");
                this.getSelectables().removeClass('coveo-current');

                var next = current.next('.coveo-selectable').first();
                if (next.length > 0) {
                    next.addClass('coveo-current');
                } else {
                    current.siblings('.coveo-selectable').first().addClass('coveo-current');
                }
            };

            FacetSearch.prototype.moveCurrentResultUp = function () {
                var current = this.searchResults.find('.coveo-current');
                this.searchResults.find('.coveo-selectable').removeClass('coveo-current');

                var previous = current.prev('.coveo-selectable').first();
                if (previous.length > 0) {
                    previous.addClass('coveo-current');
                } else {
                    current.siblings('.coveo-selectable').last().addClass('coveo-current');
                }
            };

            FacetSearch.prototype.getSelectables = function (target) {
                if (typeof target === "undefined") { target = this.searchResults; }
                return target.find(".coveo-selectable");
            };

            FacetSearch.prototype.performSelectActionOnCurrentSearchResult = function () {
                var current = this.searchResults.find('.coveo-current');
                Coveo.Assert.check(current.length == 1);

                var checkbox = current.find('input[type="checkbox"]');
                if (checkbox.length > 0) {
                    checkbox.prop('checked', true);
                    checkbox.change();
                } else {
                    current.fastClick();
                }
            };

            FacetSearch.prototype.performExcludeActionOnCurrentSearchResult = function () {
                var current = this.searchResults.find('.coveo-current');
                Coveo.Assert.check(current.length == 1);
                current.find('.coveo-exclude').fastClick();
            };

            FacetSearch.prototype.getValueInInputForFacetSearch = function () {
                return this.input.val();
            };

            FacetSearch.prototype.selectAllValuesMatchingSearch = function () {
                var _this = this;
                this.facet.showWaitingAnimation();

                var valueInInput = this.getValueInInputForFacetSearch();
                var valueToUseForSearch = Ui.FacetUtils.getValuesToUseForSearchInFacet(valueInInput, this.facet);
                var deferred = this.facet.facetQueryController.searchInFacet(1000, valueToUseForSearch);
                deferred.done(function (fieldValues) {
                    _this.completelyDismissSearch();
                    var facetValues = _.map(fieldValues, function (fieldValue) {
                        var facetValue = _this.facet.values.get(fieldValue.value);
                        if (!Coveo.Utils.exists(facetValue)) {
                            facetValue = Ui.FacetValue.create(fieldValue);
                        }
                        facetValue.selected = true;
                        facetValue.excluded = false;
                        return facetValue;
                    });
                    _this.facet.processFacetSearchAllResultsSelected(facetValues);
                });
                this.completelyDismissSearch();
            };

            FacetSearch.prototype.showFacetSearchWaitingAnimation = function () {
                var _this = this;
                Coveo.Defer.defer(function () {
                    if (!_this.showingFacetSearchWaitAnimation) {
                        _this.wait.width(_this.magnifier.width());
                        _this.wait.height(_this.magnifier.height());
                        _this.magnifier.hide();
                        _this.wait.show();
                        _this.showingFacetSearchWaitAnimation = true;
                    }
                });
            };

            FacetSearch.prototype.hideFacetSearchWaitingAnimation = function () {
                if (this.showingFacetSearchWaitAnimation) {
                    this.magnifier.show();
                    this.wait.hide();
                    this.showingFacetSearchWaitAnimation = false;
                }
            };
            return FacetSearch;
        })();
        Ui.FacetSearch = FacetSearch;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalFacetSearch = (function (_super) {
            __extends(HierarchicalFacetSearch, _super);
            function HierarchicalFacetSearch() {
                _super.apply(this, arguments);
            }
            return HierarchicalFacetSearch;
        })(Ui.FacetSearch);
        Ui.HierarchicalFacetSearch = HierarchicalFacetSearch;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetValuesList = (function () {
            function FacetValuesList(facet, facetValueElementKlass) {
                this.facet = facet;
                this.facetValueElementKlass = facetValueElementKlass;
                this.valueList = {};
            }
            FacetValuesList.prototype.build = function () {
                this.valueContainer = Coveo.$('<ul class="coveo-values"/>');
                return this.valueContainer;
            };

            FacetValuesList.prototype.get = function (value) {
                var getter;
                if (value instanceof Ui.FacetValue) {
                    getter = value.value;
                } else {
                    value = Coveo.Utils.anyTypeToString(value);
                    getter = value;
                }
                this.ensureFacetValueIsInList(value);
                return this.valueList[getter];
            };

            FacetValuesList.prototype.select = function (value) {
                var valueElement = this.get(value);
                valueElement.select();
                return valueElement;
            };

            FacetValuesList.prototype.unselect = function (value) {
                var valueElement = this.get(value);
                valueElement.unselect();
                return valueElement;
            };

            FacetValuesList.prototype.exclude = function (value) {
                var valueElement = this.get(value);
                valueElement.exclude();
                return valueElement;
            };

            FacetValuesList.prototype.unExclude = function (value) {
                var valueElement = this.get(value);
                valueElement.unexclude();
                return valueElement;
            };

            FacetValuesList.prototype.toggleSelect = function (value) {
                var valueElement = this.get(value);
                if (valueElement.facetValue.selected) {
                    valueElement.unselect();
                } else {
                    valueElement.select();
                }
                return valueElement;
            };

            FacetValuesList.prototype.toggleExclude = function (value) {
                var valueElement = this.get(value);
                if (valueElement.facetValue.excluded) {
                    valueElement.unexclude();
                } else {
                    valueElement.exclude();
                }
                return valueElement;
            };

            FacetValuesList.prototype.rebuild = function (numberOfValues) {
                var _this = this;
                this.valueContainer.empty();
                var allValues = this._getValuesToBuildWith();
                _.each(allValues, function (facetValue, index, list) {
                    if (_this.facetValueShouldBeRemoved(facetValue)) {
                        _this.facet.values.remove(facetValue.value);
                    } else if (index < numberOfValues) {
                        var valueElement = new _this.facetValueElementKlass(_this.facet, facetValue, true);
                        _this.valueList[facetValue.value] = valueElement;
                        var valueListElement = valueElement.build().listElement;
                        _this.valueContainer.append(valueListElement);
                    }
                });
                Ui.FacetUtils.addNoStateCssClassToFacetValues(this.facet, this.valueContainer);
                Ui.FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer(this.facet);
            };

            FacetValuesList.prototype._getValuesToBuildWith = function () {
                return this.facet.facetSettings ? this.facet.facetSettings.reorderValues(this.facet.values.getAll()) : this.facet.values.getAll();
            };

            FacetValuesList.prototype.facetValueShouldBeRemoved = function (facetValue) {
                return facetValue.occurrences == 0 && (facetValue.delta == 0 || facetValue.delta == undefined) && !facetValue.selected && !facetValue.excluded && !this.facet.keepDisplayedValuesNextTime;
            };

            FacetValuesList.prototype.ensureFacetValueIsInList = function (value) {
                var facetValue = value instanceof Ui.FacetValue ? value : Ui.FacetValue.createFromValue(value);
                Coveo.Assert.exists(facetValue);
                if (!this.facet.values.contains(facetValue.value)) {
                    this.facet.values.add(facetValue);
                    this.valueList[facetValue.value] = new Ui.FacetValueElement(this.facet, facetValue, true);
                    this.valueList[facetValue.value].build();
                }
                if (this.valueList[facetValue.value] == undefined) {
                    this.valueList[facetValue.value] = new Ui.FacetValueElement(this.facet, facetValue, true);
                    this.valueList[facetValue.value].build();
                }
            };

            FacetValuesList.prototype.addNoStateCssClassToFacetValues = function () {
                if (this.facet.values.getSelected().length != 0) {
                    var noStates = this.valueContainer.find("li").not(".coveo-selected");
                    _.each(noStates, function (noState) {
                        Coveo.$(noState).addClass('coveo-no-state');
                    });
                }
            };
            return FacetValuesList;
        })();
        Ui.FacetValuesList = FacetValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        Ui.TranslatedFacetValues = {
            "image": Ui.l.image(),
            "txt": Ui.l.txt(),
            "zip": Ui.l.zip(),
            "pdf": Ui.l.pdf(),
            "html": Ui.l.html(),
            "xml": Ui.l.xml(),
            "doc": Ui.l.doc(),
            "xls": Ui.l.xls(),
            "ppt": Ui.l.ppt(),
            "mov": Ui.l.mov(),
            "folder": Ui.l.folder(),
            "exchangemessage": Ui.l.exchangemessage(),
            "exchangeappointment": Ui.l.exchangeappointment(),
            "exchangenote": Ui.l.exchangenote(),
            "exchangetask": Ui.l.exchangetask(),
            "exchangeperson": Ui.l.exchangeperson(),
            "activedirperson": Ui.l.activedirperson(),
            "exchangeactivity": Ui.l.exchangeactivity(),
            "exchangecalendarmessage": Ui.l.exchangecalendarmessage(),
            "exchangedocument": Ui.l.exchangedocument(),
            "exchangeofficecom": Ui.l.exchangeofficecom()
        };
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalFacetValuesList = (function (_super) {
            __extends(HierarchicalFacetValuesList, _super);
            function HierarchicalFacetValuesList(facet, facetValueElementKlass) {
                _super.call(this, facet, facetValueElementKlass);
                this.facet = facet;
                this.facetValueElementKlass = facetValueElementKlass;
            }
            HierarchicalFacetValuesList.prototype._getValuesToBuildWith = function () {
                return this.hierarchyFacetValues;
            };
            return HierarchicalFacetValuesList;
        })(Ui.FacetValuesList);
        Ui.HierarchicalFacetValuesList = HierarchicalFacetValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var OmniboxValuesList = (function () {
            function OmniboxValuesList(facet, facetValues, omniboxObject, omniBoxValueElementKlass) {
                this.facet = facet;
                this.facetValues = facetValues;
                this.omniboxObject = omniboxObject;
                this.omniBoxValueElementKlass = omniBoxValueElementKlass;
            }
            OmniboxValuesList.prototype.build = function () {
                var _this = this;
                var rows = [];
                _.each(this.facetValues, function (facetValue) {
                    rows.push(_this.buildOmniBoxForOneRow(facetValue, _this.omniboxObject));
                });
                return this.buildFinalOmniBoxElement(rows);
            };

            OmniboxValuesList.prototype.buildOmniBoxForOneRow = function (facetValue, omniboxObject) {
                var omniboxValueElement = new this.omniBoxValueElementKlass(this.facet, facetValue, omniboxObject);
                var omniBoxRowContent = omniboxValueElement.build().listElement;

                var regex = omniboxObject.completeQueryExpression.regex;
                var valueToSearch = omniboxObject.completeQueryExpression.word;
                omniBoxRowContent.find(".coveo-caption").html(this.highlightOmniBoxMatch(this.facet.getValueCaption(facetValue), regex, valueToSearch));

                var omniBoxRow = Coveo.$("<div class='coveo-omnibox-selectable coveo-omnibox-facet-value'></div>").append(omniBoxRowContent);
                omniBoxRow.on("keyboardSelect", function () {
                    omniBoxRowContent.find('input[type=checkbox]').change();
                });
                return omniBoxRow;
            };

            OmniboxValuesList.prototype.buildFinalOmniBoxElement = function (rows) {
                var header = this.buildOmniBoxHeader();
                if (Coveo.Utils.isEmptyArray(rows)) {
                    return undefined;
                } else {
                    var ret = Coveo.$("<div></div>").append(header, rows);
                    Ui.FacetUtils.addNoStateCssClassToFacetValues(this.facet, ret);
                    return ret;
                }
            };

            OmniboxValuesList.prototype.buildOmniBoxHeader = function () {
                var icon = Coveo.$("<span class='coveo-icon " + this.facet.options.field.substr(1) + "'></span>");
                var title = this.facet.options.title;
                return Coveo.$("<div class='coveo-omnibox-facet-header'></div>").append(icon, title);
            };

            OmniboxValuesList.prototype.highlightOmniBoxMatch = function (orignalStr, regex, valueToSearch) {
                var firstChar = orignalStr.search(regex);
                var lastChar = firstChar + valueToSearch.length;
                return orignalStr.slice(0, firstChar) + "<span class='coveo-highlights'>" + orignalStr.slice(firstChar, lastChar) + "</span>" + orignalStr.slice(lastChar);
            };

            OmniboxValuesList.prototype.omniBoxCloseEvent = function (eventArg) {
                eventArg.closeOmniBox();
                eventArg.clear();
            };
            return OmniboxValuesList;
        })();
        Ui.OmniboxValuesList = OmniboxValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var OmniboxHierarchicalValuesList = (function (_super) {
            __extends(OmniboxHierarchicalValuesList, _super);
            function OmniboxHierarchicalValuesList(facet, facetValues, omniboxObject) {
                _super.call(this, facet, facetValues, omniboxObject, Ui.OmniboxHierarchicalValueElement);
                this.facet = facet;
                this.facetValues = facetValues;
                this.omniboxObject = omniboxObject;
            }
            return OmniboxHierarchicalValuesList;
        })(Ui.OmniboxValuesList);
        Ui.OmniboxHierarchicalValuesList = OmniboxHierarchicalValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var BreadcrumbValueList = (function () {
            function BreadcrumbValueList(facet, facetValues, breadcrumbValueElementKlass) {
                this.facet = facet;
                this.facetValues = facetValues;
                this.breadcrumbValueElementKlass = breadcrumbValueElementKlass;
                this.setExpandedAndCollapsed();
                this.elem = Coveo.$('<div/>').addClass('coveo-facet-breadcrumb');
                var title = Ui.Device.isMobileDevice() ? Coveo.$("<div/>") : Coveo.$("<span/>");
                title.addClass('coveo-title').text(this.facet.options.title + (Ui.Device.isMobileDevice() ? '' : ':')).appendTo(this.elem);
                this.valueContainer = Coveo.$('<span/>').addClass('coveo-values').appendTo(this.elem);
            }
            BreadcrumbValueList.prototype.build = function () {
                this.buildExpanded();
                if (this.collapsed.length != 0) {
                    this.buildCollapsed();
                }
                return this.elem;
            };

            BreadcrumbValueList.prototype.buildExpanded = function () {
                var _this = this;
                _.each(this.expanded, function (value, index, list) {
                    if (index != 0 && !Ui.Device.isMobileDevice()) {
                        Coveo.$('<span/>').addClass('coveo-separator').text(', ').appendTo(_this.valueContainer);
                    }
                    new _this.breadcrumbValueElementKlass(_this.facet, value).build().appendTo(_this.valueContainer);
                });
            };

            BreadcrumbValueList.prototype.buildCollapsed = function () {
                var _this = this;
                var numberOfSelected = _.filter(this.collapsed, function (value) {
                    return value.selected;
                }).length;
                var numberOfExcluded = _.filter(this.collapsed, function (value) {
                    return value.excluded;
                }).length;
                Coveo.Assert.check(numberOfSelected + numberOfExcluded == this.collapsed.length);

                var elem = Coveo.$('<div/>').addClass('coveo-value');
                if (!Ui.Device.isMobileDevice()) {
                    Coveo.$('<span/>').addClass('coveo-separator').text(', ').appendTo(elem);
                }
                if (numberOfSelected > 0) {
                    Coveo.$('<span/>').addClass('coveo-multi-count').text(Globalize.format(numberOfSelected, 'n0')).appendTo(elem);
                    Coveo.$('<div/>').addClass('coveo-selected').addClass('coveo-multi-icon').appendTo(elem);
                }
                if (numberOfExcluded > 0) {
                    Coveo.$('<span/>').addClass('coveo-multi-count').text(Globalize.format(numberOfExcluded, 'n0')).appendTo(elem);
                    Coveo.$('<div />').addClass('coveo-excluded').addClass('coveo-multi-icon').appendTo(elem);
                }

                var valueElements = _.map(this.collapsed, function (facetValue) {
                    return new _this.breadcrumbValueElementKlass(_this.facet, facetValue);
                });
                var toolTips = _.map(valueElements, function (valueElement) {
                    return valueElement.getBreadcrumbTooltip();
                });

                elem.attr('title', toolTips.join('\n'));

                elem.fastClick(function () {
                    var elements = [];
                    _.forEach(valueElements, function (valueElement) {
                        if (!Ui.Device.isMobileDevice()) {
                            elements.push(Coveo.$('<span/>').addClass('coveo-separator').text(', ')[0]);
                        }
                        elements.push(valueElement.build(false).get(0));
                    });
                    Coveo.$(elements).insertBefore(elem);
                    elem.detach();
                });

                this.valueContainer.append(elem);
            };

            BreadcrumbValueList.prototype.setExpandedAndCollapsed = function () {
                if (this.facetValues.length > this.facet.options.numberOfValuesInBreadcrumb) {
                    this.collapsed = _.rest(this.facetValues, this.facet.options.numberOfValuesInBreadcrumb - 1);
                    this.expanded = _.first(this.facetValues, this.facet.options.numberOfValuesInBreadcrumb - 1);
                } else {
                    this.collapsed = [];
                    this.expanded = this.facetValues;
                }
            };
            return BreadcrumbValueList;
        })();
        Ui.BreadcrumbValueList = BreadcrumbValueList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalBreadcrumbValueList = (function (_super) {
            __extends(HierarchicalBreadcrumbValueList, _super);
            function HierarchicalBreadcrumbValueList(facet, facetValues, valueHierarchy) {
                _super.call(this, facet, facetValues, Ui.HierarchicalBreadcrumbValueElement);
                this.facet = facet;
                this.facetValues = facetValues;
                this.valueHierarchy = valueHierarchy;
            }
            return HierarchicalBreadcrumbValueList;
        })(Ui.BreadcrumbValueList);
        Ui.HierarchicalBreadcrumbValueList = HierarchicalBreadcrumbValueList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetSearchValuesList = (function () {
            function FacetSearchValuesList(facet, facetValueElementKlass) {
                this.facet = facet;
                this.facetValueElementKlass = facetValueElementKlass;
            }
            FacetSearchValuesList.prototype.build = function (facetValues) {
                var _this = this;
                var valuesToBuildWith = _.map(facetValues, function (facetValue) {
                    return _.find(_this.facet.values.getAll(), function (valueAlreadyInFacet) {
                        return valueAlreadyInFacet.value == facetValue.value;
                    }) || facetValue;
                });
                return _.reduce(_.map(valuesToBuildWith, function (facetValue) {
                    return new _this.facetValueElementKlass(_this.facet, facetValue, _this.facet.keepDisplayedValuesNextTime).build().listElement;
                }), function (memo, element) {
                    return memo.add(element);
                });
            };
            return FacetSearchValuesList;
        })();
        Ui.FacetSearchValuesList = FacetSearchValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalFacetSearchValuesList = (function (_super) {
            __extends(HierarchicalFacetSearchValuesList, _super);
            function HierarchicalFacetSearchValuesList(facet) {
                _super.call(this, facet, Ui.HierarchicalFacetSearchValueElement);
                this.facet = facet;
            }
            return HierarchicalFacetSearchValuesList;
        })(Ui.FacetSearchValuesList);
        Ui.HierarchicalFacetSearchValuesList = HierarchicalFacetSearchValuesList;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var ValueElement = (function () {
            function ValueElement(facet, facetValue) {
                this.facet = facet;
                this.facetValue = facetValue;
            }
            ValueElement.prototype.build = function () {
                this.listElement = Coveo.$('<li class="coveo-value coveo-selectable"/>');
                this.listElement.data('value', this.facetValue.value);
                if (!this.facetValue.excluded) {
                    this.excludeIcon = this._buildExcludeIcon().appendTo(this.listElement);
                }
                this.label = Coveo.$('<label/>').appendTo(this.listElement);
                if (Coveo.Utils.exists(this.facetValue.computedField)) {
                    this.computedField = this._buildValueComputedField().appendTo(this.label);
                    this.label.addClass("coveo-with-computed-field");
                }
                var labelDiv = Coveo.$('<div class="coveo-label"/>').appendTo(this.label);
                this.checkbox = this._buildValueCheckbox().appendTo(labelDiv);
                this.stylishCheckbox = this._buildValueStylishCheckbox().appendTo(labelDiv);
                if (this.facet.options.showIcon) {
                    this.icon = this._buildValueIcon().appendTo(labelDiv);
                }
                this.valueCaption = this._buildValueCaption().appendTo(labelDiv);
                this.valueCount = this._buildValueCount().appendTo(labelDiv);

                this._setCssClassOnListValueElement();
                this.bindEvent({ displayNextTime: true, pinFacet: this.facet.options.preservePosition });
                return this;
            };

            ValueElement.prototype.bindEvent = function (eventBindings) {
                if (!Coveo.Utils.isNullOrUndefined(eventBindings.omniboxObject)) {
                    this.isOmnibox = true;
                } else {
                    this.isOmnibox = false;
                }
                this._handleEventForCheckboxChange(eventBindings);
                if (this.facetValue.excluded) {
                    this._handleEventForExcludedValueElement(eventBindings);
                } else {
                    this._handleEventForValueElement(eventBindings);
                }
            };

            ValueElement.prototype.select = function () {
                this.facetValue.selected = true;
                this.facetValue.excluded = false;
                this._setCssClassOnListValueElement();
            };

            ValueElement.prototype.unselect = function () {
                this.facetValue.selected = false;
                this.facetValue.excluded = false;
                this._setCssClassOnListValueElement();
            };

            ValueElement.prototype.exclude = function () {
                this.facetValue.selected = false;
                this.facetValue.excluded = true;
                this._setCssClassOnListValueElement();
            };

            ValueElement.prototype.unexclude = function () {
                this.facetValue.selected = false;
                this.facetValue.excluded = false;
                this._setCssClassOnListValueElement();
            };

            ValueElement.prototype._buildExcludeIcon = function () {
                return Coveo.$('<div />').attr('title', Ui.l.Exclude(this.facet.getValueCaption(this.facetValue))).addClass('coveo-exclude');
            };

            ValueElement.prototype._buildValueComputedField = function () {
                var computedField = this.facetValue.getFormattedComputedField(this.facet.options.computedFieldFormat);
                if (Coveo.Utils.isNonEmptyString(computedField)) {
                    return Coveo.$('<span/>').addClass('coveo-computed-field').text(computedField);
                } else {
                    return Coveo.$([]);
                }
            };

            ValueElement.prototype._buildValueCheckbox = function () {
                var checkbox = Coveo.$('<input type="checkbox"/>');
                checkbox.prop('checked', this.facetValue.selected);
                checkbox.prop('disabled', this.facetValue.excluded);
                Ui.Component.pointElementsToDummyForm(checkbox);
                return checkbox;
            };

            ValueElement.prototype._buildValueStylishCheckbox = function () {
                var checkbox = Coveo.$('<div/>').addClass('coveo-checkbox');
                Coveo.$('<span/>').appendTo(checkbox);
                return checkbox;
            };

            ValueElement.prototype._buildValueIcon = function () {
                var icon = this._getValueIcon();
                if (Coveo.Utils.exists(icon)) {
                    return Coveo.$('<img class="coveo-icon"/>').prop('src', this._getValueIcon());
                } else {
                    return this._buildValueIconFromSprite();
                }
            };

            ValueElement.prototype._getValueIcon = function () {
                if (Coveo.Utils.exists(this.facet.options.valueIcon)) {
                    return this.facet.options.valueIcon(this.facetValue);
                } else {
                    return undefined;
                }
            };

            ValueElement.prototype._buildValueIconFromSprite = function () {
                return Coveo.$('<div />').addClass('coveo-icon').addClass(this.facet.options.field.substr(1)).addClass(this.facetValue.value);
            };

            ValueElement.prototype._buildValueCaption = function () {
                return Coveo.$('<span class="coveo-caption"/>').text(this.facet.getValueCaption(this.facetValue));
            };

            ValueElement.prototype._buildValueCount = function () {
                var count = this.facetValue.getFormattedCount();
                if (Coveo.Utils.isNonEmptyString(count)) {
                    var countElement = Coveo.$('<span/>').addClass('coveo-count').text(count);
                    return countElement;
                } else {
                    return Coveo.$([]);
                }
            };

            ValueElement.prototype._handleSelectValue = function (eventBindings) {
                var _this = this;
                this.facet.keepDisplayedValuesNextTime = eventBindings.displayNextTime && !this.facet.options.useAnd;
                var actionCause;
                if (this.facetValue.excluded) {
                    actionCause = Ui.AnalyticsActionCauseList.facetUnexclude;
                    this.facet.unexcludeValue(this.facetValue);
                } else {
                    if (this.facetValue.selected) {
                        actionCause = Ui.AnalyticsActionCauseList.facetDeselect;
                    } else {
                        actionCause = Ui.AnalyticsActionCauseList.facetSelect;
                    }
                    this.facet.toggleSelectValue(this.facetValue);
                }
                if (this.isOmnibox) {
                    actionCause = Ui.AnalyticsActionCauseList.omniboxFacet;
                }
                this.facet.triggerNewQuery(function () {
                    return _this.facet.usageAnalytics.logSearchEvent(actionCause, _this.getAnalyticsFacetMeta());
                });
            };

            ValueElement.prototype._handleExcludeClick = function (eventBindings) {
                var _this = this;
                this.facet.keepDisplayedValuesNextTime = eventBindings.displayNextTime && !this.facet.options.useAnd;
                this.facet.toggleExcludeValue(this.facetValue);
                var actionCause = this.isOmnibox ? Ui.AnalyticsActionCauseList.omniboxFacet : Ui.AnalyticsActionCauseList.facetExclude;
                this.facet.triggerNewQuery(function () {
                    return _this.facet.usageAnalytics.logSearchEvent(actionCause, _this.getAnalyticsFacetMeta());
                });
            };

            ValueElement.prototype._handleEventForExcludedValueElement = function (eventBindings) {
                var _this = this;
                this.label.fastClick(function (event) {
                    if (eventBindings.pinFacet) {
                        _this.facet.pinFacetPosition();
                    }
                    if (eventBindings.omniboxObject) {
                        _this._omniBoxCloseEvent(eventBindings.omniboxObject);
                    }
                    _this._handleSelectValue(eventBindings);
                    event.stopPropagation();
                });
            };

            ValueElement.prototype._handleEventForValueElement = function (eventBindings) {
                var _this = this;
                this.excludeIcon.fastClick(function (event) {
                    if (eventBindings.omniboxObject) {
                        _this._omniBoxCloseEvent(eventBindings.omniboxObject);
                    }
                    _this._handleExcludeClick(eventBindings);
                    event.stopPropagation();
                });
                this.label.fastClick(function (event) {
                    if (eventBindings.pinFacet) {
                        _this.facet.pinFacetPosition();
                    }
                    event.preventDefault();
                    _this.checkbox.change();
                });
            };

            ValueElement.prototype._handleEventForCheckboxChange = function (eventBindings) {
                var _this = this;
                this.checkbox.change(function (event) {
                    if (eventBindings.omniboxObject) {
                        _this._omniBoxCloseEvent(eventBindings.omniboxObject);
                    }

                    _this._handleSelectValue(eventBindings);
                    if (Ui.Device.isMobileDevice()) {
                        Coveo.Defer.defer(function () {
                            Coveo.ModalBox.close(true);
                            _this.facet.facetSearch.completelyDismissSearch();
                        });
                    }
                });
            };

            ValueElement.prototype._omniBoxCloseEvent = function (eventArg) {
                eventArg.closeOmniBox();
                eventArg.clear();
            };

            ValueElement.prototype._setCssClassOnListValueElement = function () {
                this.listElement.toggleClass('coveo-selected', this.facetValue.selected);
                this.listElement.toggleClass('coveo-excluded', this.facetValue.excluded);
            };

            ValueElement.prototype.getAnalyticsFacetMeta = function () {
                return {
                    facetId: this.facet.options.uniqueId,
                    facetValue: this.facetValue.value
                };
            };
            return ValueElement;
        })();
        Ui.ValueElement = ValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var FacetValueElement = (function (_super) {
            __extends(FacetValueElement, _super);
            function FacetValueElement(facet, facetValue, keepDisplayedValueNextTime) {
                var _this = this;
                _super.call(this, facet, facetValue);
                this.facet = facet;
                this.facetValue = facetValue;
                this.keepDisplayedValueNextTime = keepDisplayedValueNextTime;
                this.firstQuery = true;

                //The analytics code expect a first query to be made to link the user action with a query UID
                Coveo.$(facet.root).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    _this.firstQuery = false;
                });
            }
            FacetValueElement.prototype.bindEvent = function () {
                _super.prototype.bindEvent.call(this, { displayNextTime: this.keepDisplayedValueNextTime, pinFacet: this.facet.options.preservePosition });
            };
            return FacetValueElement;
        })(Ui.ValueElement);
        Ui.FacetValueElement = FacetValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var OmniBoxValueElement = (function (_super) {
            __extends(OmniBoxValueElement, _super);
            function OmniBoxValueElement(facet, facetValue, eventArg) {
                _super.call(this, facet, facetValue);
                this.facet = facet;
                this.facetValue = facetValue;
                this.eventArg = eventArg;
            }
            OmniBoxValueElement.prototype.bindEvent = function () {
                _super.prototype.bindEvent.call(this, { displayNextTime: false, pinFacet: false, omniboxObject: this.eventArg });
            };
            return OmniBoxValueElement;
        })(Ui.ValueElement);
        Ui.OmniBoxValueElement = OmniBoxValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var OmniboxHierarchicalValueElement = (function (_super) {
            __extends(OmniboxHierarchicalValueElement, _super);
            function OmniboxHierarchicalValueElement(facet, facetValue, eventArg) {
                _super.call(this, facet, facetValue, eventArg);
                this.facet = facet;
                this.facetValue = facetValue;
                this.eventArg = eventArg;
            }
            OmniboxHierarchicalValueElement.prototype._handleSelectValue = function (eventBindings) {
                this.facet.open(this.facetValue);
                _super.prototype._handleSelectValue.call(this, eventBindings);
            };

            OmniboxHierarchicalValueElement.prototype._handleExcludeClick = function (eventBindings) {
                this.facet.open(this.facetValue);
                _super.prototype._handleExcludeClick.call(this, eventBindings);
            };
            return OmniboxHierarchicalValueElement;
        })(Ui.OmniBoxValueElement);
        Ui.OmniboxHierarchicalValueElement = OmniboxHierarchicalValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalFacetValueElement = (function (_super) {
            __extends(HierarchicalFacetValueElement, _super);
            function HierarchicalFacetValueElement(facet, facetValue, keepDisplayedValueNextTime) {
                _super.call(this, facet, facetValue, keepDisplayedValueNextTime);
                this.facet = facet;
                this.facetValue = facetValue;
                this.keepDisplayedValueNextTime = keepDisplayedValueNextTime;
            }
            HierarchicalFacetValueElement.prototype.build = function () {
                var build = _super.prototype.build.call(this);
                build.label.append(build.excludeIcon);
                return build;
            };

            HierarchicalFacetValueElement.prototype.buildXOfYCountText = function (currentCount) {
                var _this = this;
                var controller = this.facet.facetQueryController;
                var groupByValueThatMatchThisElement = _.find(controller.lastGroupByForCountOf.values, function (value) {
                    return value.value == _this.facetValue.value;
                });
                if (groupByValueThatMatchThisElement) {
                    var formattedCount = Globalize.format(groupByValueThatMatchThisElement.numberOfResults, "n0");
                    if (formattedCount != currentCount) {
                        return currentCount + " " + Ui.l.Of() + " " + formattedCount;
                    } else {
                        return currentCount;
                    }
                } else {
                    return currentCount;
                }
            };
            return HierarchicalFacetValueElement;
        })(Ui.FacetValueElement);
        Ui.HierarchicalFacetValueElement = HierarchicalFacetValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalFacetSearchValueElement = (function (_super) {
            __extends(HierarchicalFacetSearchValueElement, _super);
            function HierarchicalFacetSearchValueElement(facet, facetValue, keepDisplayedValueNextTime) {
                _super.call(this, facet, facetValue, keepDisplayedValueNextTime);
                this.facet = facet;
                this.facetValue = facetValue;
                this.keepDisplayedValueNextTime = keepDisplayedValueNextTime;
            }
            HierarchicalFacetSearchValueElement.prototype._handleSelectValue = function (eventBindings) {
                this.facet.open(this.facetValue);
                _super.prototype._handleSelectValue.call(this, eventBindings);
            };

            HierarchicalFacetSearchValueElement.prototype._handleExcludeClick = function (eventBindings) {
                this.facet.open(this.facetValue);
                _super.prototype._handleExcludeClick.call(this, eventBindings);
            };
            return HierarchicalFacetSearchValueElement;
        })(Ui.FacetValueElement);
        Ui.HierarchicalFacetSearchValueElement = HierarchicalFacetSearchValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var BreadcrumbValueElement = (function () {
            function BreadcrumbValueElement(facet, facetValue) {
                this.facet = facet;
                this.facetValue = facetValue;
            }
            BreadcrumbValueElement.prototype.build = function (tooltip) {
                var _this = this;
                if (typeof tooltip === "undefined") { tooltip = true; }
                Coveo.Assert.exists(this.facetValue);

                var elem = Ui.Device.isMobileDevice() ? Coveo.$("<div/>") : Coveo.$("<span/>");
                elem.addClass('coveo-value');
                elem.toggleClass('coveo-selected', this.facetValue.selected);
                elem.toggleClass('coveo-excluded', this.facetValue.excluded);
                elem.attr('title', this.getBreadcrumbTooltip());

                Coveo.$('<span/>').addClass('coveo-caption').text(this.facet.getValueCaption(this.facetValue)).appendTo(elem);
                Coveo.$('<span/>').addClass('coveo-clear').appendTo(elem);

                var clicked = false;

                elem.fastClick(function () {
                    if (!clicked) {
                        clicked = true;
                        if (_this.facetValue.excluded) {
                            _this.facet.unexcludeValue(_this.facetValue.value);
                        } else {
                            _this.facet.deselectValue(_this.facetValue.value);
                        }
                        _this.facet.triggerNewQuery(function () {
                            return _this.facet.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.breadcrumbFacet, { facetId: _this.facet.options.uniqueId, facetValue: _this.facetValue.value });
                        });
                    }
                });

                return elem;
            };

            BreadcrumbValueElement.prototype.getBreadcrumbTooltip = function () {
                var tooltipParts = [this.facet.getValueCaption(this.facetValue), this.facetValue.getFormattedCount(), this.facetValue.getFormattedComputedField(this.facet.options.computedFieldFormat)];
                return _.compact(tooltipParts).join(' ');
            };
            return BreadcrumbValueElement;
        })();
        Ui.BreadcrumbValueElement = BreadcrumbValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HierarchicalBreadcrumbValueElement = (function (_super) {
            __extends(HierarchicalBreadcrumbValueElement, _super);
            function HierarchicalBreadcrumbValueElement(facet, facetValue) {
                _super.call(this, facet, facetValue);
                this.facet = facet;
                this.facetValue = facetValue;
            }
            HierarchicalBreadcrumbValueElement.prototype.build = function () {
                var build = _super.prototype.build.call(this);
                build.addClass('coveo-hierarchical-facet-value');
                build.find('.coveo-caption').html(this.facetValue.value.split(this.facet.options.delimitingCharacter).join("<span class='coveo-hierarchical-breadcrumb-separator'></span>"));
                return build;
            };
            return HierarchicalBreadcrumbValueElement;
        })(Ui.BreadcrumbValueElement);
        Ui.HierarchicalBreadcrumbValueElement = HierarchicalBreadcrumbValueElement;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultTabOptions = (function (_super) {
            __extends(DefaultTabOptions, _super);
            function DefaultTabOptions(element) {
                _super.call(this, element);

                this.icon = this.loadStringFromAttribute("data-icon", "");
                this.caption = this.loadStringFromAttribute("data-caption", "");
                this.expression = this.loadStringFromAttribute("data-expression", "");
                this.constant = this.loadBooleanFromAttribute("data-constant", true);
                this.uniqueId = this.loadStringFromAttribute("data-id", Coveo.$.trim(Coveo.$(this.element).text()));
                var endpoint = this.loadStringFromAttribute("data-endpoint", undefined);
                this.endpoint = Coveo.Rest.SearchEndpoint.endpoints[endpoint];
                var sort = this.loadStringFromAttribute("data-sort");
                if (sort != undefined) {
                    this.sort = Ui.SortCriteria.parse(sort);
                }
            }
            return DefaultTabOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultTabOptions = DefaultTabOptions;

        var Tab = (function (_super) {
            __extends(Tab, _super);
            function Tab(element, options, bindings) {
                _super.call(this, element, Tab.ID, bindings);
                this.element = element;
                this.options = options;
                this.iconTemplate = _.template("<span class='coveo-icon <%= icon %>'></span>");
                this.tabTemplate = _.template("<%= icon %><%= caption %>");
                this.isFirstQuery = true;

                this.options = new DefaultTabOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.t);
                Coveo.$(this.root).on(eventName, Coveo.$.proxy(this.handleQueryStateChanged, this));

                this.render();
                Coveo.$(this.element).fastClick(Coveo.$.proxy(this.handleClick, this));
            }
            Tab.prototype.select = function () {
                this.queryStateModel.setMultiple({
                    t: this.options.uniqueId,
                    sort: Coveo.Models.QueryStateModel.defaultAttributes.sort
                });
            };

            Tab.prototype.handleClick = function (e) {
                var _this = this;
                e.preventDefault();
                this.select();
                if (Ui.Device.isMobileDevice()) {
                    Ui.JQueryUtils.removeToggleClassOnSearchInterface();
                }
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.interfaceChange, { interfaceChangeTo: _this.options.uniqueId });
                    } });
            };

            Tab.prototype.render = function () {
                var icon = this.options.icon;
                var iconHTML = "";
                if (icon != "") {
                    iconHTML = this.iconTemplate({ icon: icon });
                } else {
                    var child = Coveo.$(this.element).children()[0];
                    if (child != undefined) {
                        iconHTML = child.outerHTML;
                    }
                }

                var caption = this.options.caption;
                var captionHTML = "";
                if (caption == "") {
                    captionHTML = Coveo.$.trim(Coveo.$(this.element).text());
                } else {
                    captionHTML = caption;
                }

                captionHTML = captionHTML.toLocaleString();
                Coveo.$(this.element).html("");
                var elementHTML = this.tabTemplate({ icon: iconHTML, caption: captionHTML });
                Coveo.$(this.element).append(elementHTML);
            };

            Tab.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                this.isFirstQuery = false;
                if (this.isSelected() && Coveo.Utils.isNonEmptyString(this.options.expression)) {
                    if (this.options.constant) {
                        data.queryBuilder.constantExpression.add(this.options.expression);
                    } else {
                        data.queryBuilder.advancedExpression.add(this.options.expression);
                    }
                }
            };

            Tab.prototype.handleQueryStateChanged = function (e, data) {
                Coveo.Assert.exists(data);
                if (this.isSelected()) {
                    Coveo.$(this.element).addClass('coveo-selected');
                    this.queryController.setEndpoint(this.options.endpoint);
                    this.showAndHideAppropriateElements();
                } else {
                    Coveo.$(this.element).removeClass('coveo-selected');
                }
            };

            Tab.prototype.isSelected = function () {
                var activeTab = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t);
                return activeTab == this.options.uniqueId;
            };

            Tab.prototype.showAndHideAppropriateElements = function () {
                var _this = this;
                var showElements = [];
                var hideElements = [];

                _.each(Coveo.$(this.root).find('[data-tab],[data-tab-not]'), function (element) {
                    if (_this.isElementIncludedInTab(element)) {
                        _this.toggleAllComponentsUnder(element, true);
                        showElements.push(element);
                    } else {
                        _this.toggleAllComponentsUnder(element, false);
                        hideElements.push(element);
                    }
                });

                Coveo.$(this.root).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    _.each(showElements, function (elem) {
                        return Coveo.$(elem).removeClass('coveo-tab-disabled');
                    });
                    _.each(hideElements, function (elem) {
                        return Coveo.$(elem).addClass('coveo-tab-disabled');
                    });
                });
            };

            Tab.prototype.isElementIncludedInTab = function (element) {
                Coveo.Assert.exists(element);

                var includedTabs = this.splitListOfTabs(Coveo.$(element).attr('data-tab'));
                var excludedTabs = this.splitListOfTabs(Coveo.$(element).attr('data-tab-not'));
                Coveo.Assert.check(!(includedTabs.length != 0 && excludedTabs.length != 0), 'You cannot both explicity include and exclude an element from tabs');

                return (includedTabs.length != 0 && _.indexOf(includedTabs, this.options.uniqueId) != -1) || (excludedTabs.length != 0 && _.indexOf(excludedTabs, this.options.uniqueId) == -1) || (includedTabs.length == 0 && excludedTabs.length == 0);
            };

            Tab.prototype.splitListOfTabs = function (value) {
                if (Coveo.Utils.exists(value)) {
                    return _.map(value.split(','), function (tab) {
                        return Coveo.Utils.trim(tab);
                    });
                } else {
                    return [];
                }
            };

            Tab.prototype.toggleAllComponentsUnder = function (element, enable) {
                Coveo.Assert.exists(element);

                Coveo.$(element).find("*").addBack().each(function (index, elem) {
                    var component = Ui.Component.get(elem, undefined, true);
                    if (component) {
                        if (enable) {
                            component.enable();
                        } else {
                            component.disable();
                        }
                    }
                });
            };

            Tab.prototype.enable = function () {
                _super.prototype.enable.call(this);
                Coveo.$(this.element).css('display', '');
            };

            Tab.prototype.disable = function () {
                _super.prototype.disable.call(this);
                Coveo.$(this.element).css('display', 'none');
            };
            Tab.ID = 'Tab';
            return Tab;
        })(Ui.Component);
        Ui.Tab = Tab;

        Ui.CoveoJQuery.registerAutoCreateComponent(Tab);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultQuickViewOptions = (function (_super) {
            __extends(DefaultQuickViewOptions, _super);
            function DefaultQuickViewOptions(element) {
                _super.call(this, element);

                this.title = this.loadStringFromAttribute("data-title", undefined);
                this.showLoadingAnimation = this.loadBooleanFromAttribute('data-show-loading-animation', true);
                this.contentTemplate = this.loadResultTemplateFromSelectorAttribute('data-template-selector');
                this.contentTemplate = this.loadResultTemplateFromIdAttribute('data-template-id', this.contentTemplate);
                this.contentTemplate = this.loadChildResultTemplateFromSelector('.content-template', this.contentTemplate);
                this.loadingAnimation = this.getLoadingAnimationOption();
            }
            DefaultQuickViewOptions.prototype.getLoadingAnimationOption = function () {
                var loadingAnimation = this.loadHtmlElementFromSelectorAttribute("data-loading-animation-selector");
                if (!loadingAnimation) {
                    var loadingAnimationTemplate = this.loadResultTemplateFromIdAttribute('data-loading-animation-template-id');
                    if (loadingAnimationTemplate) {
                        loadingAnimation = loadingAnimationTemplate.instantiateToElement();
                    }
                } else {
                    Coveo.$(loadingAnimation).remove();
                }
                loadingAnimation = loadingAnimation || Ui.JQueryUtils.getBasicLoadingAnimation().get(0);
                return loadingAnimation;
            };
            return DefaultQuickViewOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultQuickViewOptions = DefaultQuickViewOptions;

        var QuickView = (function (_super) {
            __extends(QuickView, _super);
            function QuickView(element, options, bindings, result) {
                var _this = this;
                _super.call(this, element, QuickView.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                this.childsElements = [];
                this.options = new DefaultQuickViewOptions(element).merge(options);

                if (this.options.contentTemplate == null) {
                    Coveo.$(this.root).one(Coveo.Events.ResultListEvents.newResultsDisplayed, function (e) {
                        _this.dialogBoxContent = Coveo.$(_this.element).children().detach();
                        _this.createLinkAndAppendItToDom(result);
                    });
                } else {
                    if (this.element.innerHTML.match(/^\s*$/)) {
                        this.createLinkAndAppendItToDom(result);
                    }
                }
                this.bindClick(result);
            }
            QuickView.prototype.open = function () {
                var openerObject = this.prepareOpenQuickViewObject();
                this.createModalBox(openerObject);
                this.bindQuickViewEvents(openerObject);
                this.animateAndOpen();
            };

            QuickView.prototype.close = function () {
                this.modalbox.close();
                if (Ui.Device.isAndroid() && Ui.Device.isPhonegap()) {
                    Coveo.$(document).off("backbutton");
                }
            };

            QuickView.prototype.createLinkAndAppendItToDom = function (result) {
                if (typeof result.hasHtmlVersion == 'undefined' || result.hasHtmlVersion) {
                    this.link = Coveo.$(QuickView.quickViewLinkTemplate());
                    Coveo.$(this.element).append(this.link);
                }
            };

            QuickView.prototype.bindClick = function (result) {
                if (typeof result.hasHtmlVersion == 'undefined' || result.hasHtmlVersion) {
                    Coveo.$(this.element).fastClick(Coveo.$.proxy(this.open, this));
                } else {
                    Coveo.$(this.element).css('display', 'none');
                }
            };

            QuickView.prototype.bindQuickViewEvents = function (openerObject) {
                var _this = this;
                if (Ui.Device.isAndroid() && Ui.Device.isPhonegap()) {
                    Coveo.$(document).on("backbutton", function () {
                        _this.close();
                    });
                }
                Coveo.$(this.modalbox.wrapper.find('.coveo-title')).fastClick(function () {
                    return _this.close();
                });
                Coveo.$(window).on('resize orientationchange', openerObject.resizeHandler);
                this.modalbox.content.on(Coveo.Events.UserActionEvents.quickViewLoaded, function () {
                    Coveo.$(openerObject.loadingAnimation).remove();
                });
            };

            QuickView.prototype.animateAndOpen = function () {
                var _this = this;
                var animationDuration = this.modalbox.wrapper.css('animation-duration');
                if (animationDuration) {
                    var duration = /^(.+)(ms|s)$/.exec(animationDuration);
                    var durationMs = Number(duration[1]) * (duration[2] == 's' ? 1000 : 1);

                    //open the QuickViewDocument
                    setTimeout(function () {
                        Coveo.$(_this.modalbox.modalBox.find("." + Ui.Component.computeCssClassNameForType(Ui.QuickViewDocument.ID))).coveo('open');
                        _this.resizeIFrame();
                    }, durationMs);
                } else {
                    Coveo.$(this.modalbox.modalBox.find("." + Ui.Component.computeCssClassNameForType(Ui.QuickViewDocument.ID))).coveo('open');
                    this.resizeIFrame();
                }
            };

            QuickView.prototype.createModalBox = function (openerObject) {
                var _this = this;
                if (openerObject.content) {
                    this.dialogBoxContent = openerObject.content;
                }
                var computedModalBoxContent = Coveo.$("<div/>").append(this.dialogBoxContent);
                if (this.options.title) {
                    computedModalBoxContent.prepend(Coveo.$('<div class="coveo-title" />').html(this.options.title));
                }
                this.modalbox = Coveo.ModalBox.open(computedModalBoxContent, {
                    overlayClose: true,
                    title: Ui.JQueryUtils.getPopUpCloseButton(Ui.l.Close(), Ui.l.QuickView()),
                    className: 'coveo-quick-view',
                    validation: function () {
                        Coveo.$(window).off('resize orientationchange', openerObject.resizeHandler);
                        _this.modalbox = null;
                        return true;
                    }
                });
            };

            QuickView.prototype.prepareOpenQuickViewObject = function () {
                var _this = this;
                var resizeHandler = function () {
                    _this.resizeIFrame();
                };
                var loadingAnimation = this.options.loadingAnimation;
                return {
                    resizeHandler: resizeHandler,
                    loadingAnimation: loadingAnimation,
                    content: this.options.contentTemplate != undefined ? this.prepareQuickViewContent(loadingAnimation) : undefined
                };
            };

            QuickView.prototype.prepareQuickViewContent = function (loadingAnimation) {
                var content = Coveo.$(this.options.contentTemplate.instantiateToElement(this.result));
                var initOptions = this.searchInterface.options;
                var initParameters = Coveo.$.extend({}, { options: initOptions }, this.getBindings(), { result: this.result });
                Ui.CoveoJQuery.automaticallyCreateComponentsInside(content.get(0), initParameters);
                if (content.find("." + Ui.Component.computeCssClassNameForType(Ui.QuickViewDocument.ID)).length != 0 && this.options.showLoadingAnimation) {
                    content.prepend(loadingAnimation);
                }
                return content;
            };

            QuickView.prototype.resizeIFrame = function () {
                var quickViewDocument = this.modalbox.content.find("." + Ui.Component.computeCssClassNameForType(Ui.QuickViewDocument.ID)).find("iframe");
                if (quickViewDocument.length != 0) {
                    var scrollHeight = this.modalbox.content.get(0).scrollHeight - this.modalbox.content.outerHeight();
                    var scrollWidth = this.modalbox.content.get(0).scrollWidth - this.modalbox.content.outerWidth();
                    if (scrollHeight > 0) {
                        quickViewDocument.height(quickViewDocument.height() - scrollHeight);
                    } else {
                        quickViewDocument.css("height", "");
                    }
                    if (scrollWidth > 0) {
                        quickViewDocument.width(quickViewDocument.width() - scrollWidth - 5);
                    } else {
                        quickViewDocument.css("width", "");
                    }
                }
            };
            QuickView.ID = 'QuickView';

            QuickView.quickViewLinkTemplate = _.template("<div class='coveo-icon-for-quickview'>" + Ui.l.QuickView() + "</div>");
            return QuickView;
        })(Ui.Component);
        Ui.QuickView = QuickView;

        Ui.CoveoJQuery.registerAutoCreateComponent(QuickView);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var HIGHLIGHT_PREFIX = "CoveoHighlight";

        var DefaultQuickViewDocumentOptions = (function (_super) {
            __extends(DefaultQuickViewDocumentOptions, _super);
            function DefaultQuickViewDocumentOptions(element) {
                _super.call(this, element);
                this.maximumDocumentSize = this.loadNumberFromAttribute("data-maximum-document-size", 0);
                this.allowedZoom = this.loadBooleanFromAttribute("data-allowed-zoom", true);
                this.minimumZoom = this.loadNumberFromAttribute("data-minimum-zoom", 0.5);
                this.maximumZoom = this.loadNumberFromAttribute("data-maximum-zoom", 4);
            }
            return DefaultQuickViewDocumentOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultQuickViewDocumentOptions = DefaultQuickViewDocumentOptions;

        var QuickViewDocument = (function (_super) {
            __extends(QuickViewDocument, _super);
            function QuickViewDocument(element, options, bindings, result) {
                _super.call(this, element, QuickViewDocument.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;

                this.options = new DefaultQuickViewDocumentOptions(element).merge(options);
                this.result = result || this.resolveResult();
                Coveo.Assert.exists(this.result);
            }
            QuickViewDocument.prototype.createDom = function () {
                this.header = this.buildHeader().appendTo(Coveo.$(this.element));
                this.iframe = this.buildIFrame().appendTo(Coveo.$(this.element));
            };

            QuickViewDocument.prototype.open = function () {
                var _this = this;
                this.ensureDom();
                this.usageAnalytics.logClickEvent(Ui.AnalyticsActionCauseList.documentQuickView, { documentTitle: this.result.title, documentURL: this.result.clickUri }, this.result, this.queryController.element);
                var beforeLoad = (new Date()).getTime();
                var iframe = this.iframe.find('iframe')[0];
                iframe.src = "about:blank";
                var endpoint = this.queryController.getEndpoint();

                var callOptions = {
                    query: this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q),
                    requestedOutputSize: this.options.maximumDocumentSize
                };

                endpoint.getDocumentHtml(this.result.uniqueId, callOptions).done(function (html) {
                    _this.renderHTMLDocument(iframe, html);
                    _this.triggerQuickviewLoaded(beforeLoad);
                }).fail(function (html, error) {
                    if (error.status != 0) {
                        _this.renderErrorReport(iframe);
                        _this.triggerQuickviewLoaded(beforeLoad);
                    } else {
                        iframe.onload = function () {
                            _this.triggerQuickviewLoaded(beforeLoad);
                        };
                        iframe.src = endpoint.getViewAsHtmlUri(_this.result.uniqueId, _this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q));
                    }
                });
            };

            QuickViewDocument.prototype.renderHTMLDocument = function (iframe, html) {
                var _this = this;
                iframe.onload = function () {
                    _this.onReceivingMessage(iframe.contentWindow);
                };
                this.writeToIFrame(iframe, html);
                this.wrapPreElementsInIframe(iframe);
                if (Ui.Device.isMobileDevice()) {
                    this.bindOpenIframeLinksInPhonegap(iframe);
                }
            };

            QuickViewDocument.prototype.renderErrorReport = function (iframe) {
                var errorMessage = "<html><body style='font-family: Arimo, \"Helvetica Neue\", Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none;'>" + Ui.l.OopsError() + "</body></html>";
                this.writeToIFrame(iframe, errorMessage);
            };

            QuickViewDocument.prototype.writeToIFrame = function (iframe, content) {
                var toWrite = content;

                //This sucks because we can't do instanceof HTMLDocument
                //lib.d.ts declare HTMLDocument as an interface, not an actual object
                if (typeof content == "object") {
                    toWrite = content.getElementsByTagName("html")[0].outerHTML;
                }
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(toWrite);
                iframe.contentWindow.document.close();
            };

            QuickViewDocument.prototype.bindOpenIframeLinksInPhonegap = function (iframe) {
                try  {
                    var iframeLinks = Coveo.$(iframe.contentWindow.document).find('a');
                    _.each(iframeLinks, function (link) {
                        var href = link["href"];
                        link["href"] = 'javascript:';
                        Ui.PhonegapUtils.bindOpenLinkInPhonegap(link, href);
                    });
                } catch (e) {
                    // if not allowed
                }
            };

            QuickViewDocument.prototype.wrapPreElementsInIframe = function (iframe) {
                var _this = this;
                try  {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    var cssText = "html pre { white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;} body, html {Arimo, \"Helvetica Neue\", Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none; margin:0; padding:0; transform-origin:0 0; -ms-transform-origin:0 0; -webkit-transform-origin:0 0;} * { max-width: 100%; -webkit-text-size-adjust: none; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;} html body {height: auto; width: auto;}";

                    if (style.styleSheet) {
                        style.styleSheet.cssText = cssText;
                    } else {
                        style.appendChild(document.createTextNode(cssText));
                    }
                    var head = iframe.contentWindow.document.head;
                    head.appendChild(style);

                    if (Ui.Device.isMobileDevice() && this.options.allowedZoom) {
                        // Handle zoom in iframe
                        // Android
                        // The iframe take the width of the page. The body is the scroll and the scale element
                        // iphone/ipad
                        // The iframe take the size of the body. We have to wrap the iframe in a containner. This containner will manage the scroll and the iframe element will be the scale
                        var scrollElement = Ui.Device.isIos() ? this.iframe.get(0) : iframe.contentWindow.document.body;
                        var scaleElement = Ui.Device.isIos() ? iframe : iframe.contentWindow.document.body.firstChild;

                        Coveo.$(scrollElement).css('overflow', 'scroll');

                        // we got a initial state to compare the current state
                        // do not update the initialState at each tick because it will create imprecision because of the float in javacript
                        // last state
                        var touchEventObject = {
                            scaleElement: scaleElement,
                            scrollElement: scrollElement,
                            scale: 1,
                            scroll: {
                                left: 0,
                                top: 0
                            },
                            initialState: undefined
                        };
                        Coveo.$(scrollElement).on("touchstart", function (event) {
                            _this.handleTouchStart(event, touchEventObject);
                        }).on("touchmove", function (event) {
                            _this.handleTouchMove(event, touchEventObject);
                        }).on("touchend", function (event) {
                            _this.handleTouchEnd(event, touchEventObject);
                        });

                        this.iframeSizeCalculation(iframe);
                        Coveo.$(window).on('orientationchange', function () {
                            _this.iframeSizeCalculation(iframe);
                            Coveo.$(touchEventObject.scrollElement).animate({
                                scrollLeft: 0,
                                scrollTop: 0
                            }, 0);
                        });
                    }
                } catch (e) {
                    // if not allowed
                }
            };

            QuickViewDocument.prototype.handleTouchStart = function (event, object) {
                var _this = this;
                var touches = _.map(event.originalEvent['touches'], function (mouseEvent) {
                    return _this.mouseEventToPoint(mouseEvent, object.scrollElement);
                });

                // starting tranform
                object.initialState = {
                    scale: object.scale,
                    touches: touches,
                    centerClient: {
                        x: this.getMeanValue(touches, "x"),
                        y: this.getMeanValue(touches, "y")
                    },
                    scroll: {
                        left: object.scrollElement.scrollLeft,
                        top: object.scrollElement.scrollTop
                    },
                    distance: touches.length == 2 ? this.distance(touches[0], touches[1]) : 0
                };
            };

            QuickViewDocument.prototype.handleTouchMove = function (event, object) {
                var _this = this;
                var touches = _.map(event.originalEvent['touches'], function (mouseEvent) {
                    return _this.mouseEventToPoint(mouseEvent, object.scrollElement);
                });

                //only run code if the user has two fingers touching
                if (object.initialState != null) {
                    if (touches.length === 2) {
                        // the distance is use for the scale
                        var currentDistance = this.distance(touches[0], touches[1]);
                        object.scale = Math.max(this.options.minimumZoom, Math.min(this.options.maximumZoom, currentDistance / object.initialState.distance * object.initialState.scale));
                    }

                    // Fancy calculation to have the right scroll to reproduce native behavior
                    // Trust me I know what I'm doing
                    object.scroll = {
                        left: (object.initialState.scroll.left + object.initialState.centerClient.x) / object.initialState.scale * object.scale - this.getMeanValue(touches, "x"),
                        top: (object.initialState.scroll.top + object.initialState.centerClient.y) / object.initialState.scale * object.scale - this.getMeanValue(touches, "y")
                    };

                    this.updateScaleScroll(object.scrollElement, object.scaleElement, object.scale, object.scroll, false);
                    event.preventDefault();
                    return false;
                }
            };

            QuickViewDocument.prototype.handleTouchEnd = function (event, object) {
                var touches = event.originalEvent["touches"];
                this.updateScaleScroll(object.scrollElement, object.scaleElement, object.scale, object.scroll, true);
                if (Ui.Device.isIos()) {
                    this.overlaps.css({
                        '-ms-transform': 'scale(' + object.scale + ',' + object.scale + ') translate(0, 0)',
                        '-webkit-transform': 'scale(' + object.scale + ',' + object.scale + ') translate(0, 0)',
                        'transform': 'scale(' + object.scale + ',' + object.scale + ') translate(0, 0)',
                        'transform-origin': '0 0',
                        '-ms-transform-origin': '0 0',
                        '-webkit-transform-origin': '0 0'
                    });
                }
                object.initialState = null;
            };

            QuickViewDocument.prototype.iframeSizeCalculation = function (iframe) {
                var width = Coveo.$(iframe.contentWindow.document.body).width();
                var height = Coveo.$(iframe.contentWindow.document.body).height();
                Coveo.$(iframe.contentWindow.document.body).width(width);
                Coveo.$(iframe.contentWindow.document.body).height(height);
                if (Ui.Device.isMobileDevice()) {
                    this.resizeIframe();
                }
                if (Ui.Device.isIos()) {
                    // Yes i know... but other wise the mouse event will not be at the right place. Don't blame me, blame ios.
                    if (this.overlaps) {
                        this.overlaps.remove();
                    }
                    this.overlaps = Coveo.$('<div />').css({ top: 0, left: 0, width: Math.max(window.innerWidth, width), height: Math.max(window.innerHeight, height), position: 'absolute' }).appendTo(this.iframe);
                    this.overlaps.fastClick(function (e) {
                        var offset = Coveo.$(iframe).offset();
                        Coveo.$(iframe.contentWindow.document.elementFromPoint(e.clientX - offset.left, e.clientY - offset.top)).fastClick();
                    });
                    Coveo.$(this.iframe).css({ 'position': 'relative' });
                }
            };

            QuickViewDocument.prototype.getMeanValue = function (touches, toGet) {
                if (touches.length == 1) {
                    return touches[0][toGet];
                }
                return _.reduce(touches, function (memo, touch) {
                    return memo[toGet] + touch[toGet];
                }) / touches.length;
            };

            QuickViewDocument.prototype.mouseEventToPoint = function (event, scrollElement) {
                var offset = Coveo.$(scrollElement).offset();
                return { x: event.clientX - offset.left, y: event.clientY - offset.top };
            };

            QuickViewDocument.prototype.distance = function (a, b) {
                return Math.ceil(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)));
            };

            QuickViewDocument.prototype.updateScaleScroll = function (scrollElement, scaleElement, scale, scroll, useScroll) {
                if (typeof useScroll === "undefined") { useScroll = true; }
                // we use scroll only at the end because scroll take too mutch process and the zoom would be slow
                if (useScroll) {
                    var transform = 'scale(' + scale + ',' + scale + ') translate(0, 0)';
                    Coveo.$(scaleElement).css({
                        '-ms-transform': transform,
                        '-webkit-transform': transform,
                        'transform': transform,
                        'transform-origin': '0 0',
                        '-ms-transform-origin': '0 0',
                        '-webkit-transform-origin': '0 0'
                    });
                    Coveo.$(scrollElement).animate({
                        scrollLeft: scroll.left,
                        scrollTop: scroll.top
                    }, 0);
                } else {
                    Coveo.$(scrollElement).animate({
                        scrollLeft: 0,
                        scrollTop: 0
                    }, 0);

                    // divide the scroll by the scale because transforme scale affect the translate
                    var transform = 'scale(' + scale + ',' + scale + ') translate(' + (-1 * scroll.left / scale) + 'px, ' + (-1 * scroll.top / scale) + 'px)';
                    Coveo.$(scaleElement).css({
                        '-ms-transform': transform,
                        '-webkit-transform': transform,
                        'transform': transform,
                        'transform-origin': '0 0',
                        '-ms-transform-origin': '0 0',
                        '-webkit-transform-origin': '0 0'
                    });
                }
            };

            QuickViewDocument.prototype.triggerQuickviewLoaded = function (beforeLoad) {
                var afterLoad = (new Date()).getTime();
                var eventArgs = { duration: afterLoad - beforeLoad };
                Coveo.$(this.element).trigger(Coveo.Events.UserActionEvents.quickViewLoaded, eventArgs);
            };

            QuickViewDocument.prototype.onReceivingMessage = function (window) {
                var _this = this;
                this.header.empty();

                var words = {};
                this.keywordsState = [];
                var highlights = Coveo.$(window.document.body).find('[id^=' + HIGHLIGHT_PREFIX + ']');
                if (highlights.length == 0) {
                    this.header.css("min-height", 0);
                }
                for (var i = 0; i < highlights.length; i++) {
                    var highlight = highlights[i];

                    var wordInfo = highlight.id.substr(HIGHLIGHT_PREFIX.length + 1).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
                    if (wordInfo != null) {
                        var wordIndex = wordInfo[1];
                        var wordNumber = wordInfo[2];

                        if (words[wordIndex]) {
                            words[wordIndex].count = Math.max(words[wordIndex].count, Number(wordNumber));
                        } else {
                            words[wordIndex] = { text: highlight.innerHTML, count: 1, index: wordIndex };
                        }
                    }
                }
                var keys = _.keys(words);

                for (var i = 0; i < keys.length; i++) {
                    var wordIndex = keys[i];
                    var word = words[wordIndex];
                    var element = Coveo.$(window.document.body).find('[id^="' + HIGHLIGHT_PREFIX + ':' + wordIndex + '.1"]')[0];
                    var color = element.style.backgroundColor;
                    this.keywordsState.push({ word: word, color: color, currentIndex: 0, index: Number(word.index) });
                }

                Coveo.$.each(this.keywordsState, function (index, stateItem) {
                    _this.header.append(_this.buildWordButton(stateItem, window));
                });
            };

            QuickViewDocument.prototype.buildWordButton = function (wordState, window) {
                var _this = this;
                var wordHtml = Coveo.$('<span/>').addClass('coveo-term');
                wordHtml.append(Coveo.$('<span/>').addClass('coveo-term-left-arrow').append(Coveo.$('<span/>').addClass('coveo-term-left-arrow-icon')).click(function () {
                    _this.navigate(wordState, true, window);
                }));
                wordHtml.append(Coveo.$('<span/>').addClass('coveo-term-name').text(wordState.word.text).click(function () {
                    _this.navigate(wordState, false, window);
                }));
                wordHtml.append(Coveo.$('<span/>').addClass('coveo-term-right-arrow').append(Coveo.$('<span/>').addClass('coveo-term-right-arrow-icon')).click(function () {
                    _this.navigate(wordState, false, window);
                }));
                wordHtml.css('background-color', wordState.color);

                return wordHtml;
            };

            QuickViewDocument.prototype.navigate = function (state, backward, window) {
                var fromIndex = state.currentIndex;
                var toIndex;
                if (!backward) {
                    toIndex = fromIndex == state.word.count ? 1 : fromIndex + 1;
                } else {
                    toIndex = fromIndex <= 1 ? state.word.count : fromIndex - 1;
                }

                var body = Coveo.$(window.document.body);

                var element = body.find('[id^="' + HIGHLIGHT_PREFIX + ':' + state.word.index + '.' + toIndex + '"]')[0];

                var offset = Coveo.$(element).offset();

                var bodyElement = body.get(0);

                body.stop(true).animate({
                    scrollLeft: offset.left - bodyElement.clientWidth / 2 + Coveo.$(element).width() / 2,
                    scrollTop: offset.top - bodyElement.clientHeight / 2 + Coveo.$(element).height() / 2
                });

                this.iframe.stop(true).animate({
                    scrollLeft: offset.left - this.iframe.width() / 2 + Coveo.$(element).width() / 2,
                    scrollTop: offset.top - this.iframe.height() / 2 + Coveo.$(element).height() / 2
                });

                var selectedElenment = body.find('[id^="' + HIGHLIGHT_PREFIX + ':' + state.word.index + '.' + fromIndex + '"]')[0];
                if (selectedElenment != null) {
                    selectedElenment.style.border = "";
                }
                element.style.border = "1px dotted #333";
                state.currentIndex = toIndex;
            };

            QuickViewDocument.prototype.buildHeader = function () {
                return Coveo.$('<div/>').addClass('coveo-quickview-header');
            };

            QuickViewDocument.prototype.buildIFrame = function () {
                return Coveo.$('<div class="coveo-iframeWrapper"><iframe/></div>');
            };

            QuickViewDocument.prototype.resizeIframe = function () {
                var otherHeight = _.reduce(Coveo.$('.coveo-modalBox .coveo-title, .coveo-modalBox .coveo-quick-view-header, .coveo-modalBox .' + Ui.Component.computeCssClassNameForType(Ui.EmailAction.ID)), function (memo, element) {
                    return memo + Coveo.$(element).height();
                }, 0) + 20;
                Coveo.$(this.iframe).height(Coveo.$('.coveo-modalBox .coveo-body').height() - otherHeight);
            };
            QuickViewDocument.ID = 'QuickViewDocument';
            return QuickViewDocument;
        })(Ui.Component);
        Ui.QuickViewDocument = QuickViewDocument;

        Ui.CoveoJQuery.registerAutoCreateComponent(QuickViewDocument);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultFacetOptions = (function (_super) {
            __extends(DefaultFacetOptions, _super);
            function DefaultFacetOptions(element) {
                _super.call(this, element);

                this.title = this.loadStringFromAttribute('data-title', 'No Title');
                this.field = this.loadStringFromAttribute('data-field');
                this.isMultiValueField = this.loadBooleanFromAttribute('data-is-multi-value-field', false);
                this.numberOfValues = this.loadNumberFromAttribute('data-number-of-values', 5);
                this.morePageSize = this.loadNumberFromAttribute('data-page-size', 10);
                this.availableSorts = this.loadStringFromAttribute('data-available-sorts', 'occurrences,score,alphaAscending,alphaDescending').split(',');
                this.sortCriteria = this.loadStringFromAttribute('data-sort-criteria', (this.availableSorts.length > 0 ? this.availableSorts[0] : 'occurrences'));
                this.injectionDepth = this.loadNumberFromAttribute('data-injection-depth', 1000);
                this.showIcon = this.loadBooleanFromAttribute('data-show-icon', false);
                this.headerIcon = this.loadStringFromAttribute('data-header-icon');
                this.useAnd = this.loadBooleanFromAttribute('data-use-and', false);
                this.enableCollapse = this.loadBooleanFromAttribute('data-enable-collapse', true);
                this.allowTogglingOperator = this.loadBooleanFromAttribute('data-allow-toggling-operator', false);
                this.enableMoreLess = this.loadBooleanFromAttribute('data-enable-more-less', true);
                this.lookupField = this.loadStringFromAttribute('data-lookup-field');
                this.enableFacetSearch = this.loadBooleanFromAttribute('data-enable-facet-search', true);
                this.facetSearchDelay = this.loadNumberFromAttribute('data-facet-search-delay', 100);
                this.numberOfValuesInFacetSearch = this.loadNumberFromAttribute('data-number-of-values-in-facet-search', 15);
                this.includeInBreadcrumb = this.loadBooleanFromAttribute('data-include-in-breadcrumb', true);
                this.includeInOmniBox = this.loadBooleanFromAttribute('data-include-in-omnibox', this.enableFacetSearch);
                this.numberOfValuesInBreadcrumb = this.loadNumberFromAttribute('data-number-of-values-in-breadcrumb', Ui.Device.isMobileDevice() ? 3 : 5);
                this.numberOfValuesInOmniBox = this.loadNumberFromAttribute('data-number-of-values-in-omnibox', 5);
                this.numberOfValuesInBreadcrumb = this.loadNumberFromAttribute('data-number-of-values-in-breadcrumb', 5);
                this.uniqueId = this.loadStringFromAttribute('data-id', this.field);
                this.computedField = this.loadStringFromAttribute('data-computed-field');
                this.computedFieldOperation = this.loadStringFromAttribute('data-computed-field-operation', 'sum');
                this.computedFieldFormat = this.loadStringFromAttribute('data-computed-field-format', 'c0');
                this.computedFieldCaption = this.loadStringFromAttribute('data-computed-field-caption', Ui.l.ComputedField());
                this.preservePosition = this.loadBooleanFromAttribute('data-preserve-position', true);
                this.scrollContainer = this.loadHtmlElementFromSelectorAttribute('data-scroll-container', Ui.JQueryUtils.findScrollingParent(element));
                this.paddingContainer = this.loadHtmlElementFromSelectorAttribute('data-padding-container', this.element.parentElement);
                this.customSort = this.loadStringArrayFromAttribute("data-custom-sort", undefined, ",");
                this.enableSettings = this.loadBooleanFromAttribute("data-enable-settings", true);
                this.allowedValues = this.loadStringArrayFromAttribute("data-allowed-values", undefined, ",");
            }
            return DefaultFacetOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultFacetOptions = DefaultFacetOptions;

        var Facet = (function (_super) {
            __extends(Facet, _super);
            function Facet(element, options, bindings, facetClassId) {
                if (typeof facetClassId === "undefined") { facetClassId = Facet.ID; }
                var _this = this;
                _super.call(this, element, facetClassId, bindings);
                this.element = element;
                this.options = options;
                this.keepDisplayedValuesNextTime = false;
                this.values = new Ui.FacetValues();
                this.firstQuery = true;
                this.canFetchMore = true;
                this.showingWaitAnimation = false;
                this.listenToQueryStateChange = true;

                this.options = new DefaultFacetOptions(element).merge(options);

                Coveo.Assert.check(Coveo.Utils.isCoveoField(this.options.field), this.options.field + ' is not a valid field');

                this.options.field = this.options.field.toLowerCase();

                if (this.options.valueCaption != null) {
                    this.options.availableSorts = _.filter(this.options.availableSorts, function (sort) {
                        return !/^alpha.*$/.test(sort);
                    });
                }

                // Serves as a way to render facet in the omnibox in the order in which they are instantiated
                this._omniBoxZIndex = Facet.omniboxIndex;
                Facet.omniboxIndex--;

                this._checkForComputedFieldAndSort();
                this._checkForValueCaptionType();
                this._checkForAllowedValuesOption();
                this._checkForCustomSort();
                this._initFacetQueryController();
                this._initQueryEvents();
                this._initQueryStateEvents();
                this._initComponentStateEvents();
                this._initOmniBoxEvents();
                this._initBreadCrumbEvents();

                this.numberOfValues = this.options.numberOfValues;

                Coveo.$(window).resize(function () {
                    if (!_this.disabled) {
                        Ui.FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer(_this);
                    }
                });

                this._updateAppearanceDependingOnState();

                Coveo.$(this.root).one(Coveo.Events.QueryEvents.querySuccess, function () {
                    _this.firstQuery = false;
                });
            }
            Facet.prototype.createDom = function () {
                var _this = this;
                this._initBottomAndTopSpacer();
                this._buildFacetContent();
                this._updateAppearanceDependingOnState();

                //After the facet has been created (and before the first query is applied)
                //If there is an history event that will be trigerred, the facet setting state will be loaded at that time, in order to not clash with what could come from the url
                //Otherwise, do it immediately.
                if (this.facetSettings) {
                    if (this.searchInterface.options.enableHistory) {
                        this.bind.onRoot(Coveo.Events.InitializationEvents.restoreHistoryState, function () {
                            _this.facetSettings.loadSavedState();
                        });
                    } else {
                        this.facetSettings.loadSavedState();
                    }
                }
            };

            Facet.prototype.selectValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Selecting facet value', this.facetValuesList.select(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.selectMultipleValues = function (values) {
                var _this = this;
                Coveo.Assert.exists(values);
                this.ensureDom();
                _.each(values, function (value) {
                    _this.logger.info('Selecting facet value', _this.facetValuesList.select(value));
                });
                this._facetValueHasChanged();
            };

            Facet.prototype.deselectValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Deselecting facet value', this.facetValuesList.unselect(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.deselectMultipleValues = function (values) {
                var _this = this;
                Coveo.Assert.exists(values);
                this.ensureDom();
                _.each(values, function (value) {
                    _this.logger.info('Deselecting facet value', _this.facetValuesList.unselect(value));
                });
                this._facetValueHasChanged();
            };

            Facet.prototype.excludeValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Excluding facet value', this.facetValuesList.exclude(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.excludeMultipleValues = function (values) {
                var _this = this;
                Coveo.Assert.exists(values);
                this.ensureDom();
                _.each(values, function (value) {
                    _this.logger.info('Excluding facet value', _this.facetValuesList.exclude(value));
                });
                this._facetValueHasChanged();
            };

            Facet.prototype.unexcludeValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Unexcluding facet value', this.facetValuesList.unExclude(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.unexcludeMultipleValues = function (values) {
                var _this = this;
                Coveo.Assert.exists(values);
                this.ensureDom();
                _.each(values, function (value) {
                    _this.logger.info('Unexcluding facet value', _this.facetValuesList.unExclude(value));
                });
                this._facetValueHasChanged();
            };

            Facet.prototype.toggleSelectValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Toggle select facet value', this.facetValuesList.toggleSelect(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.toggleExcludeValue = function (value) {
                Coveo.Assert.exists(value);
                this.ensureDom();
                this.logger.info('Toggle exclude facet value', this.facetValuesList.toggleExclude(value));
                this._facetValueHasChanged();
            };

            Facet.prototype.getDisplayedValues = function () {
                this.ensureDom();
                return _.first(_.pluck(this.values.getAll(), "value"), this.numberOfValues);
            };

            Facet.prototype.getSelectedValues = function () {
                this.ensureDom();
                return _.map(this.values.getSelected(), function (value) {
                    return value.value;
                });
            };

            Facet.prototype.getExcludedValues = function () {
                this.ensureDom();
                return _.map(this.values.getExcluded(), function (value) {
                    return value.value;
                });
            };

            Facet.prototype.reset = function () {
                this.ensureDom();
                this.values.reset();
                this._rebuildValueElements();
                this._updateAppearanceDependingOnState();
                this._updateQueryStateModel();
            };

            Facet.prototype.switchToAnd = function () {
                this.ensureDom();
                this.logger.info('Switching to AND');

                this.options.useAnd = true;
                this._rebuildOperatorToggle();
                this._updateOperatorQueryStateModel();
            };

            Facet.prototype.getEndpoint = function () {
                return this.queryController.getEndpoint();
            };

            Facet.prototype.switchToOr = function () {
                this.ensureDom();
                this.logger.info('Switching to OR');

                this.options.useAnd = false;
                this._rebuildOperatorToggle();
                this._updateOperatorQueryStateModel();
            };

            Facet.prototype.updateSort = function (criteria) {
                var _this = this;
                if (this.options.sortCriteria != criteria) {
                    this.options.sortCriteria = criteria;
                    this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetSortValues, { facetId: _this.options.uniqueId, facetSortBy: criteria });
                    });
                }
            };

            Facet.prototype.collapseFacet = function () {
                this.collapseElement.hide();
                this.excludeElement.show();
                Coveo.$(this.element).addClass('coveo-collapsed');
            };

            Facet.prototype.expandFacet = function () {
                this.excludeElement.hide();
                this.collapseElement.show();
                Coveo.$(this.element).removeClass('coveo-collapsed');
                Ui.FacetUtils.clipCaptionsToAvoidOverflowingTheirContainer(this);
            };

            Facet.prototype.unfadeInactiveValuesInMainList = function () {
                Coveo.$(this.element).removeClass('coveo-fade');
            };

            Facet.prototype.fadeInactiveValuesInMainList = function (delay) {
                Coveo.$(this.element).addClass('coveo-fade');
            };

            Facet.prototype.showWaitingAnimation = function () {
                var _this = this;
                Coveo.Defer.defer(function () {
                    if (!_this.showingWaitAnimation) {
                        _this.headerElement.find('.coveo-icon').first().css('display', 'none');
                        _this.headerElement.find('.coveo-wait-animation').css('display', '');
                        _this.showingWaitAnimation = true;
                    }
                });
            };

            Facet.prototype.hideWaitingAnimation = function () {
                var _this = this;
                Coveo.Defer.defer(function () {
                    if (_this.showingWaitAnimation) {
                        _this.headerElement.find('.coveo-icon').css('display', '');
                        _this.headerElement.find('.coveo-wait-animation').css('display', 'none');
                        _this.showingWaitAnimation = false;
                    }
                });
            };

            Facet.prototype.processFacetSearchAllResultsSelected = function (facetValues) {
                var _this = this;
                var valuesForAnalytics = [];
                _.each(facetValues, function (facetValue) {
                    _this._ensureFacetValueIsInList(facetValue);
                    valuesForAnalytics.push(facetValue.value);
                });
                this._updateQueryStateModel();
                this.triggerNewQuery(function () {
                    return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetSelectAll, { facetId: _this.options.uniqueId });
                });
            };

            Facet.prototype.pinFacetPosition = function () {
                this.pinnedViewportPosition = this.element.getBoundingClientRect().top;
            };

            Facet.prototype.getValueCaption = function (facetValue) {
                Coveo.Assert.exists(facetValue);
                var lookupValue = facetValue.lookupValue || facetValue.value;
                var ret = lookupValue;
                ret = Ui.FacetUtils.tryToGetTranslatedCaption(lookupValue);

                if (Coveo.Utils.exists(this.options.valueCaption)) {
                    if (typeof this.options.valueCaption == "object") {
                        ret = this.options.valueCaption[lookupValue] || ret;
                    }
                    if (typeof this.options.valueCaption == "function") {
                        this.values.get(lookupValue);
                        ret = this.options.valueCaption.call(this, this.facetValuesList.get(lookupValue).facetValue);
                    }
                }
                return ret;
            };

            Facet.prototype.enable = function () {
                _super.prototype.enable.call(this);
            };

            Facet.prototype.disable = function () {
                _super.prototype.disable.call(this);
            };

            Facet.prototype.triggerNewQuery = function (beforeExecuteQuery) {
                var _this = this;
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: beforeExecuteQuery });

                Coveo.Defer.defer(function () {
                    return _this.showWaitingAnimation();
                });
            };

            Facet.prototype._checkForComputedFieldAndSort = function () {
                if (this.options.sortCriteria.toLowerCase().indexOf("computedfield") != -1 && Coveo.Utils.isNullOrUndefined(this.options.computedField)) {
                    this.logger.warn("Sort criteria is specified as ComputedField, but the facet uses no computed field. Facet will always be empty !", this);
                }
            };

            Facet.prototype._checkForValueCaptionType = function () {
                if (this.options.valueCaption && typeof this.options.valueCaption == "function") {
                    this.options.enableFacetSearch = false;
                    this.options.includeInOmniBox = false;
                    this.logger.warn("Using a function as valueCaption is now deprecated. Use a json key value pair instead. Facet search and omnibox has been disabled for this facet", this);
                }
            };

            Facet.prototype._checkForAllowedValuesOption = function () {
                if (this.options.allowedValues != undefined) {
                    this.logger.info("Allowed values option set on facet : Disabling more/less", this);
                    this.options.enableMoreLess = false;
                    this.logger.info("Allowed values options set on facet : Number of values set to lenght of allowed values : " + this.options.allowedValues.length, this);
                    this.options.numberOfValues = this.options.allowedValues.length;
                    this.logger.info("Allowed values options set in facet : Disabling facet search", this);
                    this.options.enableFacetSearch = false;
                }
            };

            Facet.prototype._checkForCustomSort = function () {
                if (this.options.customSort != undefined && !_.contains(this.options.availableSorts, "custom")) {
                    this.options.availableSorts.unshift("custom");
                }
                if (this.options.availableSorts[0] == "custom") {
                    this.options.sortCriteria = "nosort";
                }
            };

            Facet.prototype._initQueryEvents = function () {
                this.bind.onRoot(Coveo.Events.QueryEvents.duringQuery, this._handleDuringQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, this._handleBuildingQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.doneBuildingQuery, this._handleDoneBuildingQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, this._handleDeferredQuerySuccess);
            };

            Facet.prototype._initQueryStateEvents = function () {
                this.includedAttributeId = Coveo.Models.QueryStateModel.getFacetId(this.options.uniqueId);
                this.excludedAttributeId = Coveo.Models.QueryStateModel.getFacetId(this.options.uniqueId, false);
                this.operatorAttributeId = Coveo.Models.QueryStateModel.getFacetOperator(this.options.uniqueId);
                this.lookupValueAttributeId = Coveo.Models.QueryStateModel.getFacetLookupValue(this.options.uniqueId);

                var changedEventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.change);
                var includedChangeEventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + this.includedAttributeId);
                var excludedChangeEventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + this.excludedAttributeId);
                this.queryStateModel.registerNewAttribute(this.includedAttributeId, []);
                this.queryStateModel.registerNewAttribute(this.excludedAttributeId, []);
                this.queryStateModel.registerNewAttribute(this.operatorAttributeId, "");
                this.queryStateModel.registerNewAttribute(this.lookupValueAttributeId, {});

                this.bind.onRoot(changedEventName, this._handleQueryStateChanged);
            };

            Facet.prototype._initComponentStateEvents = function () {
                this.componentStateId = Coveo.Models.QueryStateModel.getFacetId(this.options.uniqueId);
                this.componentStateModel.registerComponent(this.componentStateId, this);
            };

            Facet.prototype._initOmniBoxEvents = function () {
                if (this.options.includeInOmniBox) {
                    this.bind.onRoot(Coveo.Events.OmniBoxEvents.populateOmniBox, this._handlePopulateOmnibox);
                }
            };

            Facet.prototype._initBreadCrumbEvents = function () {
                if (this.options.includeInBreadcrumb) {
                    this.bind.onRoot(Coveo.Events.BreadcrumbEvents.populateBreadcrumb, this._handlePopulateBreadcrumb);
                    this.bind.onRoot(Coveo.Events.BreadcrumbEvents.clearBreadcrumb, this._handleClearBreadcrumb);
                }
            };

            Facet.prototype._initBottomAndTopSpacer = function () {
                var _this = this;
                var bottomSpace = Coveo.$(this.options.paddingContainer).children('.coveo-bottomSpace');
                var topSpace = Coveo.$(this.options.paddingContainer).children('.coveo-topSpace');
                if (this.options.preservePosition) {
                    Coveo.$(this.options.paddingContainer).mouseleave(function () {
                        return _this._unpinFacetPosition();
                    });

                    this.pinnedTopSpace = topSpace;
                    this.pinnedBottomSpace = bottomSpace;
                    if (this.pinnedTopSpace.length == 0) {
                        this.pinnedTopSpace = Coveo.$('<div />').addClass('coveo-topSpace').prependTo(this.options.paddingContainer);
                    }
                    if (this.pinnedBottomSpace.length == 0) {
                        this.pinnedBottomSpace = Coveo.$('<div />').addClass('coveo-bottomSpace').appendTo(this.options.paddingContainer);
                    }
                }
            };

            Facet.prototype._initFacetQueryController = function () {
                this.facetQueryController = new Coveo.Controllers.FacetQueryController(this);
            };

            Facet.prototype._initFacetValuesList = function () {
                this.facetValuesList = new Ui.FacetValuesList(this, Ui.FacetValueElement);
                Coveo.$(this.element).append(this.facetValuesList.build());
            };

            Facet.prototype._initFacetSearch = function () {
                this.facetSearch = new Ui.FacetSearch(this, Ui.FacetSearchValuesList);
                Coveo.$(this.element).append(this.facetSearch.build());
            };

            Facet.prototype._updateIncludedQueryStateModel = function () {
                var selectedValues = {
                    included: this.getSelectedValues(),
                    title: this.includedAttributeId
                };
                this.queryStateModel.set(this.includedAttributeId, selectedValues.included);
            };

            Facet.prototype._facetValueHasChanged = function () {
                var _this = this;
                this._updateQueryStateModel();
                this._rebuildValueElements();
                Coveo.Defer.defer(function () {
                    _this._updateAppearanceDependingOnState();
                });
            };

            Facet.prototype._updateExcludedQueryStateModel = function () {
                var excludedValues = {
                    title: this.excludedAttributeId,
                    excluded: this.getExcludedValues()
                };

                this.queryStateModel.set(this.excludedAttributeId, excludedValues.excluded);
            };

            Facet.prototype._updateOperatorQueryStateModel = function () {
                if (this.options.allowTogglingOperator) {
                    var valueToSet = "";
                    if (this.getSelectedValues().length != 0 || this.getExcludedValues().length != 0) {
                        valueToSet = this.options.useAnd ? "and" : "or";
                    }
                    this.queryStateModel.set(this.operatorAttributeId, valueToSet);
                }
            };

            Facet.prototype._updateLookupValueQueryStateModel = function () {
                if (this.options.lookupField) {
                    var valueToSet = {};
                    _.each(this.values.getSelected().concat(this.values.getExcluded()), function (value) {
                        valueToSet[value.value] = value.lookupValue;
                    });
                    this.queryStateModel.set(this.lookupValueAttributeId, valueToSet);
                }
            };

            Facet.prototype._handleQueryStateChangedOperator = function (operator) {
                if (operator == "and") {
                    this.switchToAnd();
                } else if (operator == "or") {
                    this.switchToOr();
                }
            };

            Facet.prototype._handleQueryStateChangedIncluded = function (includedChanged) {
                var toUnSelect = _.difference(this.getSelectedValues(), includedChanged);
                if (Coveo.Utils.isNonEmptyArray(toUnSelect)) {
                    this.deselectMultipleValues(toUnSelect);
                }
                if (!Coveo.Utils.arrayEqual(this.getSelectedValues(), includedChanged, false)) {
                    this.selectMultipleValues(includedChanged);
                }
            };

            Facet.prototype._handleQueryStateChangedExcluded = function (excludedChanged) {
                var toUnExclude = _.difference(this.getExcludedValues(), excludedChanged);
                if (Coveo.Utils.isNonEmptyArray(toUnExclude)) {
                    this.unexcludeMultipleValues(toUnExclude);
                }
                if (!Coveo.Utils.arrayEqual(this.getExcludedValues(), excludedChanged, false)) {
                    this.excludeMultipleValues(excludedChanged);
                }
            };

            Facet.prototype._handleLookupvalueChanged = function (lookupFieldChanged) {
                var _this = this;
                _.each(lookupFieldChanged, function (lookupvalue, value) {
                    _this.facetValuesList.get(decodeURIComponent(value)).facetValue.lookupValue = decodeURIComponent(lookupvalue);
                });
            };

            Facet.prototype._handleQueryStateChanged = function (e, data) {
                Coveo.Assert.exists(data);
                this.ensureDom();

                var queryStateAttributes = data.attributes;
                var includedChanged = queryStateAttributes[this.includedAttributeId];
                var excludedChanged = queryStateAttributes[this.excludedAttributeId];
                var operator = queryStateAttributes[this.operatorAttributeId];
                var lookupValueChanged = queryStateAttributes[this.lookupValueAttributeId];
                if (this.listenToQueryStateChange) {
                    if (!Coveo.Utils.isNullOrEmptyString(operator)) {
                        this._handleQueryStateChangedOperator(operator);
                    }
                    if (!Coveo.Utils.isNullOrUndefined(includedChanged)) {
                        this._handleQueryStateChangedIncluded(includedChanged);
                    }
                    if (!Coveo.Utils.isNullOrUndefined(excludedChanged)) {
                        this._handleQueryStateChangedExcluded(excludedChanged);
                    }
                    if (!Coveo.Utils.isNullOrUndefined(lookupValueChanged)) {
                        this._handleLookupvalueChanged(lookupValueChanged);
                    }
                }
            };

            Facet.prototype._handlePopulateOmnibox = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.completeQueryExpression);

                if (this.canFetchMore) {
                    this._handleOmniBoxWithSearchInFacet(data);
                } else {
                    this._handleOmniBoxWithStaticValue(data);
                }
            };

            Facet.prototype._handleOmniBoxWithStaticValue = function (eventArg) {
                var _this = this;
                var regex = eventArg.completeQueryExpression.regex;
                var valueToSearch = eventArg.completeQueryExpression.word;
                var match = _.first(_.filter(this.getDisplayedValues(), function (displayedValue) {
                    return regex.test(_this.getValueCaption(_this.facetValuesList.get(displayedValue).facetValue));
                }), this.options.numberOfValuesInOmniBox);
                var facetValues = _.map(match, function (gotAMatch) {
                    return _this.facetValuesList.get(gotAMatch).facetValue;
                });
                var element = new Ui.OmniboxValuesList(this, facetValues, eventArg, Ui.OmniBoxValueElement).build();
                eventArg.rows.push({
                    element: (element ? element.get(0) : undefined),
                    zIndex: this._omniBoxZIndex
                });
            };

            Facet.prototype._handleOmniBoxWithSearchInFacet = function (eventArg) {
                var _this = this;
                var regex = eventArg.completeQueryExpression.regex;
                var deferred = Coveo.$.Deferred();
                eventArg.rows.push({ deferred: deferred });

                var deferredRequestForOmnibox = this.facetQueryController.recursiveFacetSearch(eventArg.completeQueryExpression.word, this.options.numberOfValuesInOmniBox);

                deferredRequestForOmnibox.done(function (fieldValues) {
                    var facetValues = _.map(fieldValues, function (fieldValue) {
                        return _this.values.get(fieldValue.lookupValue) || Ui.FacetValue.create(fieldValue);
                    });
                    var element = new Ui.OmniboxValuesList(_this, facetValues, eventArg, Ui.OmniBoxValueElement).build();
                    deferred.resolve({
                        element: (element ? element.get(0) : undefined),
                        zIndex: _this._omniBoxZIndex
                    });
                });

                deferredRequestForOmnibox.fail(function () {
                    deferred.resolve({ element: undefined });
                });
            };

            Facet.prototype._handleDuringQuery = function () {
                this.ensureDom();

                if (!this.keepDisplayedValuesNextTime) {
                    this.fadeInactiveValuesInMainList(this.options.facetSearchDelay);
                }
            };

            Facet.prototype._handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.queryBuilder);
                this.facetQueryController.prepareForNewQuery();
                if (this.values.hasSelectedOrExcludedValues()) {
                    var expression = this.facetQueryController.computeOurFilterExpression();
                    this.logger.trace('Putting filter in query', expression);
                    data.queryBuilder.advancedExpression.add(expression);
                }
            };

            Facet.prototype._handleDoneBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.queryBuilder);
                var queryBuilder = data.queryBuilder;
                this.facetQueryController.putGroupByIntoQueryBuilder(queryBuilder);
            };

            Facet.prototype._handleDeferredQuerySuccess = function (e, data) {
                Coveo.Assert.exists(data);
                this.unfadeInactiveValuesInMainList();
                this.hideWaitingAnimation();
                var groupByResult = data.results.groupByResults[this.facetQueryController.lastGroupByRequestIndex];
                if (!groupByResult) {
                    this.keepDisplayedValuesNextTime = false;
                }
                this._processNewGroupByResults(groupByResult);
            };

            Facet.prototype._handlePopulateBreadcrumb = function (e, args) {
                Coveo.Assert.exists(args);

                if (this.values.hasSelectedOrExcludedValues()) {
                    var element = new Ui.BreadcrumbValueList(this, this.values.getSelected().concat(this.values.getExcluded()), Ui.BreadcrumbValueElement).build();
                    args.breadcrumbs.push({
                        element: element.get(0)
                    });
                }
            };

            Facet.prototype._handleClearBreadcrumb = function (e, args) {
                Coveo.Assert.exists(args);
                this.reset();
            };

            Facet.prototype._processNewGroupByResults = function (groupByResult) {
                this.logger.trace('Displaying group by results', groupByResult);
                if (groupByResult != undefined && groupByResult.values != undefined) {
                    this.nbAvailableValues = groupByResult.values.length;
                    this.canFetchMore = this.numberOfValues < this.nbAvailableValues;
                }

                var newFacetValues = new Ui.FacetValues(groupByResult);

                this._updateValues(newFacetValues);
                if (this.numberOfValues > this.nbAvailableValues) {
                    this.numberOfValues = this.nbAvailableValues;
                }

                if (this.values.hasSelectedOrExcludedValues() && !this.options.useAnd && this.options.isMultiValueField) {
                    this._triggerUpdateDeltaQuery(_.filter(this.values.getAll(), function (facetValue) {
                        return !facetValue.selected && !facetValue.excluded;
                    }));
                } else if (this.values.getSelected().length > 0 && !this.options.useAnd) {
                    this.values.updateDeltaWithFilteredFacetValues(new Ui.FacetValues());
                }

                if (!this.values.hasSelectedOrExcludedValues() || this.options.useAnd || !this.options.isMultiValueField) {
                    this._rebuildValueElements();
                    this._updateAppearanceDependingOnState();
                    this._ensurePinnedFacetHasntMoved();
                }

                this.keepDisplayedValuesNextTime = false;
            };

            Facet.prototype._updateValues = function (facetValues) {
                Coveo.Assert.exists(facetValues);
                if (this.keepDisplayedValuesNextTime) {
                    this.values.updateCountsFromNewValues(facetValues);
                } else {
                    facetValues.importActiveValuesFromOtherList(this.values);
                    facetValues.sortValuesDependingOnStatus(this.numberOfValues);
                    this.values = facetValues;
                }
            };

            Facet.prototype._ensureFacetValueIsInList = function (facetValue) {
                Coveo.Assert.exists(facetValue);
                if (!this.values.contains(facetValue.value)) {
                    this.values.add(facetValue);
                }
            };

            Facet.prototype._isAnyValueCurrentlyDisplayed = function () {
                return !this.values.isEmpty();
            };

            Facet.prototype._handleOperatorClick = function () {
                var _this = this;
                if (this.options.useAnd) {
                    this.switchToOr();
                } else {
                    this.switchToAnd();
                }
                if (this.getSelectedValues().length != 0) {
                    var operatorNow = this.options.useAnd ? "AND" : "OR";
                    var operatorBefore = this.options.useAnd ? "OR" : "AND";
                    this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetToggle, {
                            facetId: _this.options.uniqueId,
                            facetOperatorBefore: operatorBefore,
                            facetOperatorAfter: operatorNow
                        });
                    });
                }
            };

            Facet.prototype._handleEraserClick = function () {
                var _this = this;
                this.reset();
                this.triggerNewQuery(function () {
                    return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetClearAll, { facetId: _this.options.uniqueId });
                });
            };

            Facet.prototype._updateQueryStateModel = function () {
                this.listenToQueryStateChange = false;
                this._updateExcludedQueryStateModel();
                this._updateIncludedQueryStateModel();
                this._updateOperatorQueryStateModel();
                this._updateLookupValueQueryStateModel();
                this.listenToQueryStateChange = true;
            };

            Facet.prototype._buildFacetContent = function () {
                this.headerElement = this._buildHeader().appendTo(this.element);

                this._initFacetValuesList();

                if (this.options.enableFacetSearch) {
                    this._initFacetSearch();
                }

                if (this.options.enableMoreLess) {
                    this.footerElement = this._buildFooter().appendTo(this.element);
                    this._moreElement = this._buildMore().appendTo(this.footerElement);
                    this._lessElement = this._buildLess().appendTo(this.footerElement);
                }
            };

            Facet.prototype._buildHeader = function () {
                var header = Coveo.$('<div class="coveo-header"/>');

                this._buildIcon().appendTo(header);
                this._buildWaitAnimation().appendTo(header);
                if (this.options.enableSettings) {
                    this._buildSettingsButtons().appendTo(header);
                }
                if (this.options.enableCollapse) {
                    this.collapseElement = this._buildCollapse().appendTo(header);
                    this.excludeElement = this._buildExpand().appendTo(header);
                }
                this.operatorElement = this._buildOperatorToggle().appendTo(header);
                this.operatorElement.fastToggle(this.options.allowTogglingOperator);
                this._eraserElement = this._buildEraser().appendTo(header);

                this._buildTitle().appendTo(header);

                return header;
            };

            Facet.prototype._buildIcon = function () {
                var cssClassForIcon;
                if (this.options.headerIcon) {
                    cssClassForIcon = 'coveo-icon-custom ' + this.options.headerIcon;
                } else {
                    cssClassForIcon = 'coveo-icon ' + this.options.field.substr(1);
                }
                return Coveo.$('<div></div>').addClass(cssClassForIcon);
            };

            Facet.prototype._buildWaitAnimation = function () {
                return Coveo.$("<div />").addClass('coveo-wait-animation').css('display', 'none');
            };

            Facet.prototype._buildCollapse = function () {
                var _this = this;
                var icon = Coveo.$("<span></span>").addClass('coveo-icon');
                return Coveo.$('<div />').attr('title', Ui.l.Collapse()).addClass('coveo-collapse').append(icon).fastClick(function () {
                    _this.collapseFacet();
                });
            };

            Facet.prototype._buildExpand = function () {
                var _this = this;
                var icon = Coveo.$("<span></span>").addClass('coveo-icon');
                return Coveo.$('<div />').attr('title', Ui.l.Expand()).hide().addClass('coveo-expand').append(icon).fastClick(function () {
                    _this.expandFacet();
                });
            };

            Facet.prototype._buildTitle = function () {
                return Coveo.$('<div class="coveo-title"/>').text(this.options.title);
            };

            Facet.prototype._buildOperatorToggle = function () {
                var _this = this;
                return Coveo.$('<div />').addClass('coveo-' + (this.options.useAnd ? 'and' : 'or')).attr('title', Ui.l.SwitchTo(this.options.useAnd ? Ui.l.Or() : Ui.l.And())).addClass('coveo-operator').fastClick(function () {
                    _this._handleOperatorClick();
                });
            };

            Facet.prototype._buildSettingsButtons = function () {
                this.facetSettings = new Ui.FacetSettings(this.options.availableSorts, this);
                return this.facetSettings.build();
            };

            Facet.prototype._rebuildOperatorToggle = function () {
                var newElement = this._buildOperatorToggle();
                if (this.operatorElement) {
                    this.operatorElement.replaceWith(newElement);
                }
                this.operatorElement = newElement;
            };

            Facet.prototype._buildEraser = function () {
                var _this = this;
                var icon = Coveo.$("<span></span>").addClass('coveo-icon');
                return Coveo.$('<div />').attr('title', Ui.l.Clear(this.options.title)).append(icon).addClass('coveo-eraser').fastClick(function () {
                    _this._handleEraserClick();
                });
            };

            Facet.prototype._updateNumberOfValues = function () {
                this.numberOfValues = Math.max(this.numberOfValues, this.values.getExcluded().length + this.values.getSelected().length);
                this.numberOfValues = Math.min(this.numberOfValues, this.values.size());
                this.numberOfValues = Math.max(this.numberOfValues, this.options.numberOfValues);
            };

            Facet.prototype._rebuildValueElements = function () {
                this._updateNumberOfValues();
                this.facetValuesList.rebuild(this.numberOfValues);
                if (this.options.enableMoreLess) {
                    this._updateMoreLess();
                }
            };

            Facet.prototype._updateMoreLess = function () {
                if (this.values.getExcluded().length + this.values.getSelected().length < this.numberOfValues && this.options.numberOfValues < this.numberOfValues) {
                    this._lessElement.show();
                } else {
                    this._lessElement.hide();
                }
                this._moreElement.toggleClass('coveo-active', this.nbAvailableValues > this.numberOfValues);
            };

            Facet.prototype._buildFooter = function () {
                return Coveo.$('<div class="coveo-footer"/>');
            };

            Facet.prototype._buildMore = function () {
                return Coveo.$('<a class="coveo-more">' + Ui.l.More() + '</a>').fastClick(Coveo.$.proxy(this._handleClickMore, this));
            };

            Facet.prototype._handleClickMore = function () {
                var additionnalValue = this.numberOfValues - this.options.numberOfValues;
                var nbMorePage = Math.floor(additionnalValue / this.options.morePageSize) + 1;
                this.numberOfValues = this.options.numberOfValues + nbMorePage * this.options.morePageSize;
                if (this.values.size() >= this.numberOfValues || !this.canFetchMore) {
                    this._rebuildValueElements();
                } else {
                    this._triggerMoreQuery();
                }
            };

            Facet.prototype._triggerMoreQuery = function () {
                var _this = this;
                this.logger.info('Triggering new facet more query');
                this.showWaitingAnimation();
                this.facetQueryController.fetchMore().done(function (queryResults) {
                    var facetValues = new Ui.FacetValues(queryResults.groupByResults[0]);

                    if (queryResults.groupByResults.length > 1) {
                        _.each(queryResults.groupByResults, function (groupByResult, index) {
                            if (index > 0) {
                                _.each(groupByResult.values, function (groupByValue) {
                                    if (!facetValues.contains(groupByValue.value)) {
                                        facetValues.add(Ui.FacetValue.createFromGroupByValue(groupByValue));
                                    }
                                });
                            }
                        });
                    }

                    facetValues.importActiveValuesFromOtherList(_this.values);
                    facetValues.sortValuesDependingOnStatus(_this.numberOfValues);
                    _this.values = facetValues;

                    _this.nbAvailableValues = _this.values.size();
                    _this.canFetchMore = _this.numberOfValues < _this.nbAvailableValues;

                    if (_this.values.hasSelectedOrExcludedValues() && !_this.options.useAnd && _this.options.isMultiValueField) {
                        _this._triggerUpdateDeltaQuery(_.filter(_this.values.getAll(), function (facetValue) {
                            return !facetValue.selected && !facetValue.excluded;
                        }));
                    } else {
                        if (_this.values.hasSelectedOrExcludedValues() && !_this.options.useAnd) {
                            _this.values.updateDeltaWithFilteredFacetValues(new Ui.FacetValues());
                            _this.hideWaitingAnimation();
                        } else {
                            _this.hideWaitingAnimation();
                        }

                        _this._rebuildValueElements();
                    }
                }).fail(function () {
                    return _this.hideWaitingAnimation();
                });
            };

            Facet.prototype._triggerUpdateDeltaQuery = function (facetValues) {
                var _this = this;
                this.showWaitingAnimation();
                this.facetQueryController.searchInFacetToUpdateDelta(facetValues).done(function (queryResults) {
                    var values = new Ui.FacetValues();
                    _.each(queryResults.groupByResults, function (groupByResult) {
                        _.each(groupByResult.values, function (groupByValue) {
                            if (!values.contains(groupByValue.value)) {
                                values.add(Ui.FacetValue.createFromGroupByValue(groupByValue));
                            }
                        });
                    });
                    _this.values.updateDeltaWithFilteredFacetValues(values);
                    _this._rebuildValueElements();
                    _this.hideWaitingAnimation();
                });
            };

            Facet.prototype._buildLess = function () {
                return Coveo.$('<a class="coveo-less">' + Ui.l.Less() + '</a>').hide().fastClick(Coveo.$.proxy(this._handleClickLess, this));
            };

            Facet.prototype._handleClickLess = function () {
                this._lessElement.hide();
                this.numberOfValues = Math.max(this.options.numberOfValues, this.values.getExcluded().length + this.values.getSelected().length);
                this._moreElement.addClass('coveo-active');
                this.values.sortValuesDependingOnStatus(this.numberOfValues);
                this._rebuildValueElements();
            };

            Facet.prototype._unpinFacetPosition = function () {
                var _this = this;
                if (this._isFacetPinned()) {
                    this.pinnedTopSpace.animate({ height: 0 }, 'fast', function () {
                        if (_this.facetSearch != undefined) {
                            _this.facetSearch.positionSearchResults();
                        }
                    });
                    this.pinnedBottomSpace.animate({ height: 0 }, 'fast', function () {
                        if (_this.facetSearch != undefined) {
                            _this.facetSearch.positionSearchResults();
                        }
                    });
                    this.pinnedViewportPosition = undefined;
                }
            };

            Facet.prototype._isFacetPinned = function () {
                return Coveo.Utils.exists(this.pinnedViewportPosition);
            };

            Facet.prototype._ensurePinnedFacetHasntMoved = function () {
                var _this = this;
                if (this._isFacetPinned()) {
                    Coveo.Assert.exists(this.pinnedViewportPosition);

                    this.pinnedTopSpace.height(0);
                    this.pinnedBottomSpace.height(0);

                    // Under firefox scrolling the body doesn't work, but window does
                    // on all browser, so we substitute those here when needed.
                    var elementToScroll = this.options.scrollContainer == document.body ? window : this.options.scrollContainer;

                    // First try to adjust position by scrolling the page
                    var currentViewportPosition = this.element.getBoundingClientRect().top;
                    var offset = currentViewportPosition - this.pinnedViewportPosition;
                    Coveo.$(elementToScroll).scrollTop(Coveo.$(elementToScroll).scrollTop() + offset);

                    // Then, if not enough, use padding on the scroll container
                    currentViewportPosition = this.element.getBoundingClientRect().top;
                    offset = currentViewportPosition - this.pinnedViewportPosition;
                    if (offset < 0) {
                        this.pinnedTopSpace.height(offset * -1);
                    } else {
                        setTimeout(function () {
                            var currentViewportPosition = _this.element.getBoundingClientRect().top;
                            var offset = currentViewportPosition - _this.pinnedViewportPosition;
                            Coveo.$(elementToScroll).scrollTop(Coveo.$(elementToScroll).scrollTop() + offset);

                            // OK, this is somewhat lazy, but computing right away the amount of
                            // additional padding to add requires many information, and who knows
                            // if it's going to work in all layouts. So just keep on adding spacing
                            // until we realize it's enough (or it's not working).
                            var heightBottom = 0;
                            var attempts = 0;
                            while (offset > 0 && attempts++ < 100) {
                                heightBottom += 100;
                                _this.pinnedBottomSpace.height(heightBottom);
                                currentViewportPosition = _this.element.getBoundingClientRect().top;
                                offset = currentViewportPosition - _this.pinnedViewportPosition;
                                Coveo.$(elementToScroll).scrollTop(Coveo.$(elementToScroll).scrollTop() + offset);
                            }
                        }, 0);
                    }
                }
            };

            Facet.prototype._updateAppearanceDependingOnState = function () {
                Coveo.$(this.element).toggleClass('coveo-active', this.values.hasSelectedOrExcludedValues());
                Coveo.$(this.element).toggleClass('coveo-empty', !this._isAnyValueCurrentlyDisplayed());
                Coveo.$(this._eraserElement).fastToggle(this.values.hasSelectedOrExcludedValues());
            };
            Facet.ID = 'Facet';
            Facet.omniboxIndex = 50;
            return Facet;
        })(Coveo.Ui.Component);
        Ui.Facet = Facet;
        Ui.CoveoJQuery.registerAutoCreateComponent(Facet);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultFacetRangeOptions = (function (_super) {
            __extends(DefaultFacetRangeOptions, _super);
            function DefaultFacetRangeOptions(element) {
                _super.call(this, element);
                this.dateField = this.loadBooleanFromAttribute('data-date-field');
                this.valueCaption = this.loadStringFromAttribute('data-value-caption');
            }
            DefaultFacetRangeOptions.prototype.combineSliderOption = function (options) {
                this.slider = {
                    graph: {},
                    displayAsPercent: {},
                    displayAsValue: {}
                };
                var toSet = options.slider;
                if (toSet == undefined) {
                    toSet = {};
                }
                if (toSet.graph == undefined) {
                    toSet.graph = {};
                }
                if (toSet.displayAsPercent == undefined) {
                    toSet.displayAsPercent = {};
                }
                if (toSet.displayAsValue == undefined) {
                    toSet.displayAsValue = {};
                }

                this.slider.start = this.loadStringFromAttribute('data-slider-start', toSet.start);
                if (this.slider.start != undefined) {
                    this.slider.start = this.dateField ? new Date(this.slider.start).getTime() : parseInt(this.slider.start, 10);
                }
                this.slider.end = this.loadStringFromAttribute('data-slider-end', toSet.end);
                if (this.slider.end != undefined) {
                    this.slider.end = this.dateField ? new Date(this.slider.end).getTime() : parseInt(this.slider.end, 10);
                }
                this.slider.steps = this.loadNumberFromAttribute('data-slider-steps', toSet.steps);
                this.slider.rangeSlider = this.loadBooleanFromAttribute('data-range-slider', toSet.rangeSlider);
                this.slider.excludeOuterBounds = this.loadBooleanFromAttribute('data-slider-exclude-outer-bounds', toSet.excludeOuterBounds);
                this.slider.rounded = this.loadNumberFromAttribute('data-slider-rounded', toSet.rounded);
                this.slider.displayAsValue.unitSign = this.loadStringFromAttribute('data-slider-display-as-value-unit-sign', toSet.displayAsValue.unitSign);
                this.slider.displayAsValue.separator = this.loadStringFromAttribute('data-slider-display-as-value-separator', toSet.displayAsValue.separator);
                this.slider.displayAsPercent.separator = this.loadStringFromAttribute('data-slider-display-as-percent-separator', toSet.displayAsPercent.separator);
                this.slider.dateFormat = this.loadStringFromAttribute('data-slider-date-format', toSet.dateFormat);
                this.slider.graph.steps = this.loadNumberFromAttribute('data-slider-graph-steps', toSet.graph.steps);
                this.slider.graph.animationDuration = this.loadNumberFromAttribute('data-slider-graph-animation-duration', toSet.graph.animationDuration);
                this.slider = this.removeUndefinedOptions(this.slider);
                return this;
            };

            DefaultFacetRangeOptions.prototype.removeUndefinedOptions = function (obj) {
                var _this = this;
                _.each(_.keys(obj), function (key) {
                    if (_.isObject(obj[key])) {
                        _this.removeUndefinedOptions(obj[key]);
                        if (_.keys(obj[key]).length == 0 && key != 'start' && key != 'end') {
                            delete obj[key];
                        }
                    } else if (obj[key] == undefined) {
                        delete obj[key];
                    }
                });
                if (_.keys(obj).length == 0) {
                    obj = undefined;
                }
                return obj;
            };
            return DefaultFacetRangeOptions;
        })(Ui.DefaultFacetOptions);

        var FacetRange = (function (_super) {
            __extends(FacetRange, _super);
            function FacetRange(element, options, bindings) {
                _super.call(this, element, _.extend(new DefaultFacetRangeOptions(element).combineSliderOption(options).merge(options), {
                    enableMoreLess: false,
                    enableFacetSearch: false,
                    isMultiValueField: false,
                    includeInOmniBox: false
                }), bindings, FacetRange.ID);
                this.element = element;
                this.isEmpty = false;
                if (this.options.slider) {
                    this.options.enableFacetSearch = false;
                    this.options.enableSettings = false;
                    this.options.includeInOmniBox = false;
                    if (this.options.slider.graph) {
                        if (!Coveo.FeatureDetectionUtils.supportSVG()) {
                            this.options.slider.graph = undefined;
                            this.logger.info("Your browser does not support SVG. Cannot add graphic to your facet range", this);
                        }
                        if (typeof d3 == "undefined") {
                            this.options.slider.graph = undefined;
                            this.logger.info("Cannot find the required dependencies d3.js. Cannot add graphic to your facet range", this);
                        }
                    }
                    this.handleNoresults();
                }
            }
            FacetRange.prototype.reset = function () {
                if (this.options.slider) {
                    this.slider.initializeState();
                    this.updateQueryState();
                    this.updateFacetStyle();
                } else {
                    _super.prototype.reset.call(this);
                }
            };

            FacetRange.prototype.getSelectedValues = function () {
                if (this.options.slider) {
                    if (this.startOfSlider != undefined && this.endOfSlider != undefined) {
                        return [this.startOfSlider.toString(), this.endOfSlider.toString()];
                    } else {
                        return ["undefined", "undefined"];
                    }
                } else {
                    return _super.prototype.getSelectedValues.call(this);
                }
            };

            FacetRange.prototype.getValueCaption = function (facetValue) {
                var ret = _super.prototype.getValueCaption.call(this, facetValue);
                if (Coveo.Utils.exists(this.options.valueCaption) && typeof this.options.valueCaption == "string") {
                    var startEnd = /^(.*)\.\.(.*)$/.exec(facetValue.value);
                    if (startEnd != null) {
                        var helper = Ui.TemplateHelpers.getHelper(this.options.valueCaption);
                        if (helper != null) {
                            ret = helper.call(this, startEnd[1]) + ' - ' + helper.call(this, startEnd[2]);
                        } else {
                            var start = startEnd[1].match(/^[\+\-]?[0-9]+(\.[0-9]+)?$/) ? Number(startEnd[1]) : Coveo.DateUtils.convertFromJsonDateIfNeeded(startEnd[1]);
                            var end = startEnd[2].match(/^[\+\-]?[0-9]+(\.[0-9]+)?$/) ? Number(startEnd[2]) : Coveo.DateUtils.convertFromJsonDateIfNeeded(startEnd[2]);
                            var ret = Globalize.format(start, this.options.valueCaption) + ' - ' + Globalize.format(end, this.options.valueCaption);
                        }
                    }
                }
                return ret;
            };

            FacetRange.prototype._initFacetValuesList = function () {
                if (!this.options.slider) {
                    _super.prototype._initFacetValuesList.call(this);
                }
            };

            FacetRange.prototype._handlePopulateBreadcrumb = function (e, args) {
                var _this = this;
                if (!this.options.slider) {
                    _super.prototype._handlePopulateBreadcrumb.call(this, e, args);
                } else {
                    if (this.slider && this.sliderIsActive()) {
                        args.breadcrumbs.push({
                            element: this.buildBreadcrumbFacetSlider().get(0),
                            clearAll: function () {
                                return _this.reset();
                            }
                        });
                    }
                }
            };

            FacetRange.prototype.getSliderBoundaryForQuery = function () {
                var needToReturnABoundary = false;
                if (this.options.slider && !this.slider) {
                    needToReturnABoundary = true;
                } else if (this.options.slider && this.slider && this.sliderIsActive()) {
                    needToReturnABoundary = true;
                }
                if (needToReturnABoundary) {
                    return this.generateBoundary();
                } else {
                    return undefined;
                }
            };

            FacetRange.prototype.handleNoresults = function () {
                var _this = this;
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.noResults, function () {
                    _this.isEmpty = true;
                    _this._updateAppearanceDependingOnState();
                });
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, function () {
                    _this.isEmpty = false;
                });
            };

            FacetRange.prototype.sliderIsActive = function () {
                var currentValues = this.queryStateModel.get(this.rangeQueryStateAttribute);
                var toCompare = [this.initialStartOfSlider, this.initialEndOfSlider];
                return currentValues != undefined && !isNaN(currentValues[0]) && !isNaN(currentValues[1]) && !isNaN(this.initialStartOfSlider) && !isNaN(this.initialEndOfSlider) && !Coveo.Utils.arrayEqual(currentValues, toCompare);
            };

            FacetRange.prototype.buildBreadcrumbFacetSlider = function () {
                var _this = this;
                var elem = Coveo.$('<div/>').addClass('coveo-facet-breadcrumb');
                Coveo.$('<span/>').addClass('coveo-title').text(this.options.title + ':').appendTo(elem);
                var values = Coveo.$('<span/>').addClass('coveo-values').appendTo(elem);
                var value = Coveo.$("<span class='coveo-value'>" + this.slider.getCaption() + "</span>").appendTo(values);
                var clear = Coveo.$("<span class='coveo-clear'></span>").appendTo(value);
                value.fastClick(function () {
                    _this.reset();
                    _this.triggerNewQuery(function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetClearAll, { facetId: _this.options.uniqueId });
                    });
                });
                return elem;
            };

            FacetRange.prototype.initSlider = function () {
                this.buildSlider();
                this.slider.initializeState([this.startOfSlider, this.endOfSlider]);
                this.updateFacetStyle();
            };

            FacetRange.prototype._initQueryStateEvents = function () {
                var _this = this;
                if (this.options.slider) {
                    this.rangeQueryStateAttribute = Coveo.Models.QueryStateModel.getFacetId(this.options.uniqueId) + ":range";
                    this.queryStateModel.registerNewAttribute(this.rangeQueryStateAttribute, [undefined, undefined]);
                    var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + this.rangeQueryStateAttribute);
                    this.bind.onRoot(eventName, function (e, args) {
                        _this.slider ? _this.handleRangeQueryStateChanged(e, args) : Coveo.$(_this.root).one(Coveo.Events.QueryEvents.querySuccess, function () {
                            return _this.handleRangeQueryStateChanged(e, args);
                        });
                    });
                } else {
                    _super.prototype._initQueryStateEvents.call(this);
                }
            };

            FacetRange.prototype.handleRangeQueryStateChanged = function (e, args) {
                this.setupSliderIfNeeded(args);
                this.startOfSlider = args.value[0] == undefined ? this.startOfSlider : args.value[0];
                this.endOfSlider = args.value[1] == undefined ? this.endOfSlider : args.value[1];
                this.slider.setValues([this.startOfSlider, this.endOfSlider]);
                this.updateFacetStyle();
            };

            FacetRange.prototype.buildSlider = function () {
                var _this = this;
                var sliderContainer = Coveo.$("<div class='coveo-values coveo-slider-container'></div>");
                if (this.options.slider.graph) {
                    sliderContainer.addClass("coveo-with-graph");
                }
                var sliderDiv = Coveo.$("<div></div>");
                this.slider = new Ui.Slider(sliderDiv, Coveo.$.extend({}, this.options.slider, { dateField: this.options.dateField }));
                sliderDiv.on(Coveo.Events.SliderEvents.endSlide, function (e, args) {
                    _this.handleEndSlide(e, args);
                });
                sliderDiv.on(Coveo.Events.SliderEvents.duringSlide, function (e, args) {
                    _this.handleDuringSlide(e, args);
                });
                if (this.slider.options.graph) {
                    sliderDiv.on(Coveo.Events.SliderEvents.graphValueSelected, function (e, args) {
                        _this.handleGraphValueSelected(e, args);
                    });
                }
                sliderContainer.append(sliderDiv);
                Coveo.$(this.element).append(sliderContainer);
                this.updateFacetStyle();
            };

            FacetRange.prototype._initFacetQueryController = function () {
                this.facetQueryController = new Coveo.Controllers.FacetRangeQueryController(this);
            };

            FacetRange.prototype._handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.queryBuilder);
                var boundary = this.getSliderBoundaryForQuery();
                if (boundary != undefined) {
                    this.facetQueryController.prepareForNewQuery();
                    var expression = this.facetQueryController.computeOurFilterExpression(boundary);
                    if (Coveo.Utils.isNonEmptyString(expression)) {
                        this.logger.trace('Putting filter in query', expression);
                        data.queryBuilder.advancedExpression.add(expression);
                    }
                } else {
                    _super.prototype._handleBuildingQuery.call(this, e, data);
                }
            };

            FacetRange.prototype._processNewGroupByResults = function (groupByResult) {
                var _this = this;
                if (!this.options.slider) {
                    if (groupByResult != null) {
                        if (this.options.ranges == null && (!this.keepDisplayedValuesNextTime || this.values.hasSelectedOrExcludedValues())) {
                            this.keepDisplayedValuesNextTime = false;
                            groupByResult.values.sort(function (valueA, valueB) {
                                var startEndA = valueA.value.split('..');
                                var startEndB = valueB.value.split('..');
                                if (_this.options.dateField) {
                                    return Date.parse(startEndA[0]) - Date.parse(startEndB[0]);
                                }
                                return Number(startEndA[0]) - Number(startEndB[0]);
                            });
                        }
                    }
                    _super.prototype._processNewGroupByResults.call(this, groupByResult);
                } else {
                    this._updateAppearanceDependingOnState();
                }
            };

            FacetRange.prototype._handleDeferredQuerySuccess = function (e, data) {
                _super.prototype._handleDeferredQuerySuccess.call(this, e, data);
                this.setupSliderIfNeeded(data);
                var groupByResults = data.results.groupByResults[this.facetQueryController.lastGroupByRequestIndex];
                if (groupByResults == undefined || groupByResults.values[0] == undefined) {
                    this.isEmpty = true;
                    this._updateAppearanceDependingOnState();
                } else {
                    if (this.options.slider) {
                        if (this.options.slider.graph) {
                            this.renderToSliderGraph(data);
                        }
                    }
                }
            };

            FacetRange.prototype._facetValueShouldBeRemoved = function (facetValue) {
                return false;
            };

            FacetRange.prototype._rebuildValueElements = function () {
                if (!this.options.slider) {
                    _super.prototype._rebuildValueElements.call(this);
                }
            };

            FacetRange.prototype.handleEndSlide = function (e, args) {
                var _this = this;
                var values = args.slider.getValues();
                this.startOfSlider = values[0];
                this.endOfSlider = values[1];
                this.updateQueryState(values);
                this.updateFacetStyle();
                _super.prototype.triggerNewQuery.call(this, function () {
                    return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetRangeSlider, { facetId: _this.options.uniqueId, facetRangeStart: _this.startOfSlider.toString(), facetRangeEnd: _this.endOfSlider.toString() });
                });
            };

            FacetRange.prototype.handleDuringSlide = function (e, args) {
                var values = args.slider.getValues();
                this.startOfSlider = values[0];
                this.endOfSlider = values[1];
                this.updateQueryState([this.startOfSlider, this.endOfSlider], true);
                this.updateFacetStyle();
            };

            FacetRange.prototype.handleGraphValueSelected = function (e, args) {
                var _this = this;
                if (this.options.slider.rangeSlider) {
                    this.startOfSlider = args.start;
                }
                this.endOfSlider = args.end;
                this.slider.setValues([this.startOfSlider, this.endOfSlider]);
                this.updateQueryState();
                _super.prototype.triggerNewQuery.call(this, function () {
                    return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.facetRangeGraph, { facetId: _this.options.uniqueId, facetRangeStart: _this.startOfSlider.toString(), facetRangeEnd: _this.endOfSlider.toString() });
                });
            };

            FacetRange.prototype.updateQueryState = function (values, silent) {
                if (typeof values === "undefined") { values = this.slider.getValues(); }
                if (typeof silent === "undefined") { silent = false; }
                //Creating a copy of the values prevents an unwanted automatic update of the state while sliding
                //That's the cleanest way I found to copy that array correctly
                var copyOfValues = [];
                copyOfValues[0] = values[0] + 0.0;
                copyOfValues[1] = values[1] + 0.0;
                this.queryStateModel.set(this.rangeQueryStateAttribute, copyOfValues, { silent: silent });
            };

            FacetRange.prototype.updateFacetStyle = function () {
                if (!this.sliderIsActive()) {
                    Coveo.$(this.element).addClass('coveo-disabled');
                } else {
                    Coveo.$(this.element).removeClass('coveo-disabled');
                }
            };

            FacetRange.prototype.renderToSliderGraph = function (data) {
                var _this = this;
                var rawGroupByResults = data.results.groupByResults[this.facetQueryController.graphGroupByQueriesIndex];
                var graphData;
                if (rawGroupByResults) {
                    graphData = _.map(rawGroupByResults.values, function (value) {
                        var start = value.value.split("..")[0];
                        var end = value.value.split("..")[1];
                        if (!_this.options.dateField) {
                            start = parseInt(start, 10);
                            end = parseInt(end, 10);
                        } else {
                            start = new Date(start.split("@")[0]).getTime();
                            end = new Date(end.split("@")[0]).getTime();
                        }
                        var y = value.numberOfResults;
                        return {
                            start: start,
                            y: y,
                            end: end,
                            isDate: _this.options.dateField
                        };
                    });
                }
                if (graphData != undefined) {
                    this.slider.drawGraph(graphData);
                }
            };

            FacetRange.prototype._updateAppearanceDependingOnState = function () {
                if (!this.options.slider) {
                    _super.prototype._updateAppearanceDependingOnState.call(this);
                } else {
                    if (this.isEmpty && !this.sliderIsActive()) {
                        Coveo.$(this.element).addClass('coveo-disabled-empty');
                    } else {
                        Coveo.$(this.element).removeClass('coveo-disabled-empty');
                        Coveo.$(this._eraserElement).fastToggle(this.sliderIsActive());
                    }
                }
            };

            FacetRange.prototype.generateBoundary = function () {
                var start, end;
                if (!this.slider) {
                    //If the slider is not initialized, the only boundary we can get is from the state.
                    return this.generateBoundaryFromState();
                } else {
                    //Else, try to get one from the slider itself. If we cant, try to return one from the state.
                    var boundary = this.generateBoundaryFromSlider();
                    if (boundary[0] == undefined && boundary[1] == undefined) {
                        return this.generateBoundaryFromState();
                    } else {
                        return boundary;
                    }
                }
            };

            FacetRange.prototype.generateBoundaryFromSlider = function () {
                var start, end;
                if (this.startOfSlider != undefined) {
                    start = this.startOfSlider;
                }
                if (this.endOfSlider != undefined) {
                    end = this.endOfSlider;
                }
                return [start, end];
            };

            FacetRange.prototype.generateBoundaryFromState = function () {
                var start, end;
                var startFromState = this.queryStateModel.get(this.rangeQueryStateAttribute)[0];
                if (startFromState != undefined) {
                    start = startFromState;
                }
                var endFromState = this.queryStateModel.get(this.rangeQueryStateAttribute)[1];
                if (endFromState != undefined) {
                    end = endFromState;
                }
                if (start != this.queryStateModel.getDefault(this.rangeQueryStateAttribute)[0] || end != this.queryStateModel.getDefault(this.rangeQueryStateAttribute)[1]) {
                    return [start, end];
                } else {
                    return [undefined, undefined];
                }
            };

            FacetRange.prototype.setupSliderIfNeeded = function (data) {
                this.ensureDom();
                if (!Coveo.Utils.isNullOrUndefined(this.options.slider) && Coveo.Utils.isNullOrUndefined(this.slider)) {
                    if (!this.alreadySetBoundary()) {
                        this.trySetSliderBoundaryFromOptions();
                    }
                    if (!this.alreadySetBoundary() && data != undefined) {
                        this.trySetSliderBoundaryFromQueryResult(data);
                    }
                    this.trySetSliderBoundaryFromState();
                    this.setupSliderStateVariables();
                    var isInError = this.verifySetup();
                    if (isInError) {
                        this.logger.warn('Error while trying to initialize slider', this);
                        this.slider = undefined;
                        this.options.slider = undefined;
                    } else {
                        this.initSlider();
                        this.updateQueryState();
                    }
                }
            };

            FacetRange.prototype.verifySetup = function () {
                var isInError = 0;
                isInError += this.initialStartOfSlider == undefined ? 1 : 0;
                isInError += isNaN(this.initialStartOfSlider) ? 1 : 0;
                isInError += this.initialEndOfSlider == undefined ? 1 : 0;
                isInError += isNaN(this.initialEndOfSlider) ? 1 : 0;
                return isInError;
            };

            FacetRange.prototype.setupSliderStateVariables = function () {
                this.initialStartOfSlider = parseInt(this.initialStartOfSlider.toString(), 10);
                this.initialEndOfSlider = parseInt(this.initialEndOfSlider.toString(), 10);
                this.startOfSlider = this.startOfSlider ? parseInt(this.startOfSlider.toString(), 10) : this.initialStartOfSlider;
                this.endOfSlider = this.endOfSlider ? parseInt(this.endOfSlider.toString(), 10) : this.initialEndOfSlider;
                if (this.startOfSlider == this.endOfSlider) {
                    this.endOfSlider += 1;
                }
                if (this.initialStartOfSlider == this.initialEndOfSlider) {
                    this.initialEndOfSlider += 1;
                }
                this.options.slider.start = this.initialStartOfSlider;
                this.options.slider.end = this.initialEndOfSlider;
                this.queryStateModel.setNewDefault(this.rangeQueryStateAttribute, [this.initialStartOfSlider, this.initialEndOfSlider]);
            };

            FacetRange.prototype.alreadySetBoundary = function () {
                return this.startOfSlider != undefined && this.endOfSlider != undefined;
            };

            FacetRange.prototype.trySetSliderBoundaryFromOptions = function () {
                if (!Coveo.Utils.isNullOrUndefined(this.options.slider.start)) {
                    this.setupInitialSliderStateStart(this.options.slider.start);
                }
                if (!Coveo.Utils.isNullOrUndefined(this.options.slider.end)) {
                    this.setupInitialSliderStateEnd(this.options.slider.end);
                }
            };

            FacetRange.prototype.trySetSliderBoundaryFromState = function () {
                var stateValues = this.queryStateModel.get(this.rangeQueryStateAttribute);
                if (stateValues && stateValues[0] != undefined && stateValues[1] != undefined) {
                    this.setupInitialSliderStateStart(stateValues[0]);
                    this.setupInitialSliderStateEnd(stateValues[1]);
                    this.startOfSlider = stateValues[0];
                    this.endOfSlider = stateValues[1];
                }
            };

            FacetRange.prototype.trySetSliderBoundaryFromQueryResult = function (data) {
                var groupByResults = data.results.groupByResults[this.facetQueryController.lastGroupByRequestIndex];
                if (groupByResults && groupByResults.values[0]) {
                    this.setupInitialSliderStateStart(groupByResults.values[0].value.split("..")[0]);
                    this.setupInitialSliderStateEnd(groupByResults.values[groupByResults.values.length - 1].value.split("..")[1]);
                }
            };

            FacetRange.prototype.setupInitialSliderStateStart = function (value) {
                if (this.initialStartOfSlider == undefined) {
                    this.initialStartOfSlider = value;
                    if (this.options.dateField && isNaN(value)) {
                        this.initialStartOfSlider = new Date(value.replace("@", " ")).getTime();
                    }
                }
            };

            FacetRange.prototype.setupInitialSliderStateEnd = function (value) {
                if (this.initialEndOfSlider == undefined) {
                    this.initialEndOfSlider = value;
                    if (this.options.dateField && isNaN((value))) {
                        this.initialEndOfSlider = new Date(value.replace("@", " ")).getTime();
                    }
                }
            };
            FacetRange.ID = 'FacetRange';
            return FacetRange;
        })(Ui.Facet);
        Ui.FacetRange = FacetRange;
        Ui.CoveoJQuery.registerAutoCreateComponent(FacetRange);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultHierarchicalFacetOptions = (function (_super) {
            __extends(DefaultHierarchicalFacetOptions, _super);
            function DefaultHierarchicalFacetOptions(element) {
                _super.call(this, element);
                this.delimitingCharacter = this.loadStringFromAttribute('data-delimiting-character', '|');
                this.levelStart = this.loadNumberFromAttribute('data-level-start', 0);
                this.levelEnd = this.loadNumberFromAttribute('data-level-end');
                this.marginByLevel = this.loadNumberFromAttribute('data-margin-by-level', 10);
            }
            return DefaultHierarchicalFacetOptions;
        })(Ui.DefaultFacetOptions);
        Ui.DefaultHierarchicalFacetOptions = DefaultHierarchicalFacetOptions;

        var HierarchicalFacet = (function (_super) {
            __extends(HierarchicalFacet, _super);
            function HierarchicalFacet(element, options, bindings) {
                _super.call(this, element, _.extend(new DefaultHierarchicalFacetOptions(element).merge(options), {
                    numberOfValues: 10000
                }), bindings, HierarchicalFacet.ID);
                this.element = element;
                this.bindings = bindings;
                this.firstPlacement = true;
                this.numberOfValuesToShow = new DefaultHierarchicalFacetOptions(element).numberOfValues || options.numberOfValues || 5;
                this.originalNumberOfValuesToShow = this.numberOfValuesToShow;
                this.logger.info("Hierarchy facet : Set number of values very high in order to build hierarchy", this.options.numberOfValues, this);
            }
            HierarchicalFacet.prototype.selectValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                var valueHierarchy = this.valueHierarchy[getter];
                if (!this.options.useAnd) {
                    this.selectChilds(valueHierarchy, valueHierarchy.childs);
                }
                this.flagParentForSelection(valueHierarchy);
                _super.prototype.selectValue.call(this, value);
            };

            HierarchicalFacet.prototype.selectMultipleValues = function (values) {
                var _this = this;
                this.ensureDom();
                this.ensureValueHierarchyExists(values);
                _.each(values, function (value) {
                    var getter = value instanceof Ui.FacetValue ? value.value : value;
                    var valueHierarchy = _this.valueHierarchy[getter];
                    _this.flagParentForSelection(valueHierarchy);
                    if (!_this.options.useAnd) {
                        _.each(valueHierarchy.childs, function (child) {
                            _this.logger.info('Selecting facet value', _this.facetValuesList.select(child.facetValue));
                        });
                    }
                });
                _super.prototype.selectMultipleValues.call(this, values);
            };

            HierarchicalFacet.prototype.deselectValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                var valueHierarchy = this.valueHierarchy[getter];
                if (!this.options.useAnd) {
                    var hasChilds = valueHierarchy.childs != undefined;
                    if (hasChilds) {
                        var activeChilds = _.filter(valueHierarchy.childs, function (child) {
                            return child.facetValue.selected || child.facetValue.excluded;
                        });
                        if (activeChilds.length == valueHierarchy.childs.length) {
                            this.deselectChilds(valueHierarchy, valueHierarchy.childs);
                        }
                    }
                }
                this.unflagParentForSelection(valueHierarchy);
                _super.prototype.deselectValue.call(this, value);
            };

            HierarchicalFacet.prototype.excludeValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                var valueHierarchy = this.valueHierarchy[getter];
                if (!this.options.useAnd) {
                    this.excludeChilds(valueHierarchy.childs);
                } else {
                    this.deselectChilds(valueHierarchy, valueHierarchy.childs);
                    this.close(valueHierarchy);
                }
                this.flagParentForSelection(valueHierarchy);
                _super.prototype.excludeValue.call(this, value);
            };

            HierarchicalFacet.prototype.unexcludeValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                var valueHierarchy = this.valueHierarchy[getter];
                if (!this.options.useAnd) {
                    this.unexcludeChilds(valueHierarchy.childs);
                }
                this.unflagParentForSelection(valueHierarchy);
                _super.prototype.unexcludeValue.call(this, value);
            };

            HierarchicalFacet.prototype.deselectMultipleValues = function (values) {
                var _this = this;
                this.ensureDom();
                this.ensureValueHierarchyExists(values);
                _.each(values, function (value) {
                    var getter = value instanceof Ui.FacetValue ? value.value : value;
                    var valueHierarchy = _this.valueHierarchy[getter];
                    _this.unflagParentForSelection(valueHierarchy);
                    if (!_this.options.useAnd) {
                        _.each(valueHierarchy.childs, function (child) {
                            _this.logger.info('Deselecting facet value', _this.facetValuesList.unselect(child.facetValue));
                        });
                    }
                });
                _super.prototype.deselectMultipleValues.call(this, values);
            };

            HierarchicalFacet.prototype.toggleSelectValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                if (this.valueHierarchy[getter].facetValue.selected == false) {
                    this.selectValue(value);
                } else {
                    this.deselectValue(value);
                }
            };

            HierarchicalFacet.prototype.toggleExcludeValue = function (value) {
                this.ensureDom();
                this.ensureValueHierarchyExists([value]);
                var getter = value instanceof Ui.FacetValue ? value.value : value;
                if (this.valueHierarchy[getter].facetValue.excluded == false) {
                    this.excludeValue(value);
                } else {
                    this.unexcludeValue(value);
                }
            };

            HierarchicalFacet.prototype.getValueCaption = function (facetValue) {
                var stringValue = this.getSelf(facetValue);
                var ret = stringValue;
                if (Coveo.Utils.exists(this.options.valueCaption)) {
                    if (typeof this.options.valueCaption == "object") {
                        ret = this.options.valueCaption[stringValue] || ret;
                    }
                    if (typeof this.options.valueCaption == "function") {
                        ret = this.options.valueCaption.call(this, facetValue);
                    }
                }
                return ret;
            };

            HierarchicalFacet.prototype.getDisplayedValues = function () {
                return _.first(_.pluck(this.values.getAll(), "value"), this.numberOfValuesToShow);
            };

            HierarchicalFacet.prototype.updateSort = function (criteria) {
                this.firstPlacement = true;
                _super.prototype.updateSort.call(this, criteria);
            };

            HierarchicalFacet.prototype.open = function (value) {
                var getter = value instanceof Ui.FacetValue ? this.valueHierarchy[value.value] : value;
                this.facetValuesList.get(getter.facetValue).listElement.addClass('coveo-open');
                this.showChilds(getter.childs);
                if (getter.parent != undefined) {
                    this.open(this.valueHierarchy[getter.facetValue.value].parent);
                }
                this.valueHierarchy[getter.facetValue.value].keepOpened = true;
            };

            HierarchicalFacet.prototype.close = function (value) {
                var _this = this;
                var getter = value instanceof Ui.FacetValue ? this.valueHierarchy[value.value] : value;
                this.facetValuesList.get(getter.facetValue).listElement.removeClass('coveo-open');
                this.hideChilds(getter.childs);
                _.each(getter.childs, function (child) {
                    _this.close(_this.valueHierarchy[child.facetValue.value]);
                });
                this.valueHierarchy[getter.facetValue.value].keepOpened = false;
            };

            HierarchicalFacet.prototype.getLevel = function (value) {
                return value.value.split(this.options.delimitingCharacter).length - 1;
            };

            HierarchicalFacet.prototype.reset = function () {
                _.each(this.valueHierarchy, function (valueHierarchy) {
                    valueHierarchy.hasChildSelected = false;
                    valueHierarchy.keepOpened = false;
                });
                _super.prototype.reset.call(this);
            };

            HierarchicalFacet.prototype._isAnyValueCurrentlyDisplayed = function () {
                return _super.prototype._isAnyValueCurrentlyDisplayed.call(this) && Coveo.$(this.element).find('.coveo-value').length != 0;
            };

            HierarchicalFacet.prototype._initFacetSearch = function () {
                this.facetSearch = new Ui.HierarchicalFacetSearch(this, Ui.HierarchicalFacetSearchValuesList);
                Coveo.$(this.element).append(this.facetSearch.build());
            };

            HierarchicalFacet.prototype._handlePopulateBreadcrumb = function (e, args) {
                Coveo.Assert.exists(args);

                if (this.values.hasSelectedOrExcludedValues()) {
                    var element = new Ui.HierarchicalBreadcrumbValueList(this, this.values.getSelected().concat(this.values.getExcluded()), this.valueHierarchy).build();

                    args.breadcrumbs.push({
                        element: element.get(0)
                    });
                }
            };

            HierarchicalFacet.prototype._handleOmniBoxWithStaticValue = function (eventArg) {
                var _this = this;
                var regex = eventArg.completeQueryExpression.regex;
                var valueToSearch = eventArg.completeQueryExpression.word;
                var match = _.first(_.filter(this.valueHierarchy, function (existingValue) {
                    return regex.test(_this.getValueCaption(existingValue.facetValue));
                }), this.options.numberOfValuesInOmniBox);
                var facetValues = _.map(match, function (gotAMatch) {
                    return _this.facetValuesList.get(gotAMatch.facetValue).facetValue;
                });
                var element = new Ui.OmniboxHierarchicalValuesList(this, facetValues, eventArg).build();
                eventArg.rows.push({
                    element: (element ? element.get(0) : undefined),
                    zIndex: this._omniBoxZIndex
                });
            };

            HierarchicalFacet.prototype._rebuildValueElements = function () {
                this.createValueHierarchy();
                this.setValueListContent();
                _super.prototype._rebuildValueElements.call(this);
                this.buildParentChildRelationship();
                this.crop();
            };

            HierarchicalFacet.prototype._initFacetValuesList = function () {
                this.facetValuesList = new Ui.HierarchicalFacetValuesList(this, Ui.HierarchicalFacetValueElement);
                Coveo.$(this.element).append(this.facetValuesList.build());
            };

            HierarchicalFacet.prototype._updateMoreLess = function () {
                this._moreElement.toggleClass('coveo-active', this.topLevelHierarchy.length > this.numberOfValuesToShow);
                if (this.numberOfValuesToShow > this.originalNumberOfValuesToShow) {
                    this._lessElement.show();
                } else {
                    this._lessElement.hide();
                }
            };

            HierarchicalFacet.prototype._handleClickMore = function () {
                this.numberOfValuesToShow += this.originalNumberOfValuesToShow;
                this.numberOfValuesToShow = Math.min(this.numberOfValuesToShow, this.values.size());
                this._rebuildValueElements();
            };

            HierarchicalFacet.prototype._handleClickLess = function () {
                this.numberOfValuesToShow = this.originalNumberOfValuesToShow;
                this._rebuildValueElements();
            };

            HierarchicalFacet.prototype.setValueListContent = function () {
                var _this = this;
                this.facetValuesList.hierarchyFacetValues = _.map(this.valueHierarchy, function (hierarchy) {
                    if (!_this.values.contains(hierarchy.facetValue.value)) {
                        hierarchy.facetValue.occurrences = 0;
                        _this.values.add(hierarchy.facetValue);
                    }
                    return hierarchy.facetValue;
                });
            };

            HierarchicalFacet.prototype.ensureValueHierarchyExists = function (facetValues) {
                var _this = this;
                if (facetValues[0] && typeof facetValues[0] == "string") {
                    facetValues = _.map(facetValues, function (value) {
                        return Ui.FacetValue.createFromValue(value);
                    });
                }
                var atLeastOneDoesNotExists = false;
                _.each(facetValues, function (facetValue) {
                    if (_this.valueHierarchy == undefined || _this.valueHierarchy[facetValue.value] == undefined) {
                        atLeastOneDoesNotExists = true;
                    }
                });
                if (atLeastOneDoesNotExists) {
                    this.createValueHierarchy(facetValues);
                }
            };

            HierarchicalFacet.prototype.crop = function () {
                var _this = this;
                var partition = _.partition(this.topLevelHierarchy, function (hierarchy) {
                    return hierarchy.facetValue.selected || hierarchy.facetValue.excluded;
                });
                _.each(_.last(partition[1], partition[1].length - (this.numberOfValuesToShow - partition[0].length)), function (toHide) {
                    _this.facetValuesList.get(toHide.facetValue).listElement.hide();
                });
            };

            HierarchicalFacet.prototype.placeChildsUnderTheirParent = function (hierarchy, hierarchyElement) {
                var _this = this;
                _.each(hierarchy.childs.reverse(), function (child) {
                    var childElement = _this.facetValuesList.get(child.facetValue).listElement;
                    if (_this.firstPlacement) {
                        childElement.insertAfter(hierarchyElement);
                    }
                });
                if (hierarchy.keepOpened) {
                    this.open(hierarchy);
                    this.showChilds(hierarchy.childs);
                } else {
                    this.hideChilds(hierarchy.childs);
                }
            };

            HierarchicalFacet.prototype.addCssClassToParentAndChilds = function (hierarchy, hierarchyElement) {
                var _this = this;
                hierarchyElement.addClass('coveo-has-childs');
                if (hierarchy.hasChildSelected) {
                    hierarchyElement.addClass("coveo-has-childs-selected");
                }
                var openAndCloseChilds = Coveo.$("<div class='coveo-has-childs-toggle'></div>").fastClick(function () {
                    hierarchyElement.hasClass('coveo-open') ? _this.close(hierarchy) : _this.open(hierarchy);
                });
                hierarchyElement.prepend(openAndCloseChilds);
            };

            HierarchicalFacet.prototype.buildParentChildRelationship = function () {
                var _this = this;
                _.each(this.valueHierarchy, function (hierarchy) {
                    var hierarchyElement = _this.facetValuesList.get(hierarchy.facetValue).listElement;
                    if (Coveo.Utils.isNonEmptyArray(hierarchy.childs)) {
                        _this.placeChildsUnderTheirParent(hierarchy, hierarchyElement);
                        _this.addCssClassToParentAndChilds(hierarchy, hierarchyElement);
                    } else {
                        hierarchyElement.addClass("coveo-no-childs");
                    }
                    hierarchyElement.css('margin-left', _this.options.marginByLevel * (hierarchy.level - _this.options.levelStart));
                });
                if (this.firstPlacement && !this.firstQuery) {
                    this.firstPlacement = false;
                    this.setOriginalPosition();
                } else {
                    _.each(this.originalPosition, function (hierarchy, position) {
                        var hierarchyElement = _this.facetValuesList.get(hierarchy.facetValue).listElement;
                        hierarchyElement.parent().children().eq(position).after(hierarchyElement);
                    });
                }
            };

            HierarchicalFacet.prototype.setOriginalPosition = function () {
                var _this = this;
                this.originalPosition = [];
                _.each(this.valueHierarchy, function (hierarchy) {
                    _this.originalPosition[_this.facetValuesList.get(hierarchy.facetValue).listElement.index()] = hierarchy;
                });
            };

            HierarchicalFacet.prototype.createValueHierarchy = function (facetValues) {
                var _this = this;
                if (typeof facetValues === "undefined") { facetValues = this.values.getAll(); }
                this.valueHierarchy = this.valueHierarchy ? this.valueHierarchy : {};
                if (!this.flatHierarchy || _.keys(this.flatHierarchy).length < _.keys(facetValues).length) {
                    var i = 0;
                    this.flatHierarchy = _.map(facetValues, function (value) {
                        var parent = _this.getParent(value);
                        var self = _this.getSelf(value);

                        return {
                            facetValue: value,
                            level: _this.getLevel(value),
                            parent: parent,
                            self: self
                        };
                    });

                    this.setInHierarchy(this.flatHierarchy);
                    _.each(this.valueHierarchy, function (valueHierarchy) {
                        if (valueHierarchy.facetValue.selected) {
                            _this.flagParentForSelection(valueHierarchy);
                        }
                    });
                } else {
                    _.each(this.values.getAll(), function (value) {
                        if (_this.valueHierarchy[value.value]) {
                            _this.valueHierarchy[value.value].facetValue = value;
                        }
                    });
                }
            };

            HierarchicalFacet.prototype.setInHierarchy = function (flatHierarchy) {
                var _this = this;
                var correctLevels = _.filter(flatHierarchy, function (hierarchy) {
                    var isCorrectMinimumLevel = _this.options.levelStart == undefined || hierarchy.level >= _this.options.levelStart;
                    var isCorrectMaximumLevel = _this.options.levelEnd == undefined || hierarchy.level < _this.options.levelEnd;
                    return isCorrectMinimumLevel && isCorrectMaximumLevel;
                });
                _.each(correctLevels, function (hierarchy) {
                    var childs = _.map(_.filter(correctLevels, function (possibleChild) {
                        return possibleChild.parent == hierarchy.self;
                    }), function (child) {
                        return {
                            facetValue: child.facetValue,
                            level: child.level,
                            keepOpened: false,
                            hasChildSelected: false
                        };
                    });

                    var parent = _.find(correctLevels, function (possibleParent) {
                        return possibleParent.self == hierarchy.parent;
                    });

                    _this.valueHierarchy[hierarchy.facetValue.value] = {
                        childs: childs,
                        parent: parent == undefined ? undefined : {
                            facetValue: parent.facetValue,
                            level: parent.level,
                            keepOpened: false,
                            hasChildSelected: false
                        },
                        facetValue: hierarchy.facetValue,
                        level: hierarchy.level,
                        keepOpened: false,
                        hasChildSelected: false
                    };
                });
                var topLevel = this.options.levelStart || 0;
                this.topLevelHierarchy = _.filter(this.valueHierarchy, function (hierarchy) {
                    return hierarchy.level == topLevel;
                });
            };

            HierarchicalFacet.prototype.getParent = function (value) {
                var lastIndexOfDelimiting = value.value.lastIndexOf(this.options.delimitingCharacter);
                if (lastIndexOfDelimiting != -1) {
                    var secondToLastIndexOfDelimiting = value.value.substring(0, lastIndexOfDelimiting).lastIndexOf(this.options.delimitingCharacter);
                    return value.value.substring(secondToLastIndexOfDelimiting + 1, lastIndexOfDelimiting);
                }
                return undefined;
            };

            HierarchicalFacet.prototype.getSelf = function (value) {
                var parent = this.getParent(value);
                if (parent == undefined) {
                    return value.value;
                } else {
                    var indexOfParent = value.value.indexOf(parent);
                    return value.value.substring(indexOfParent + parent.length + 1);
                }
            };

            HierarchicalFacet.prototype.showFacetValue = function (value) {
                this.facetValuesList.get(value.facetValue).listElement.removeClass('coveo-inactive');
            };

            HierarchicalFacet.prototype.hideFacetValue = function (value) {
                this.facetValuesList.get(value.facetValue).listElement.addClass('coveo-inactive');
            };

            HierarchicalFacet.prototype.hideChilds = function (children) {
                var _this = this;
                _.each(children, function (child) {
                    _this.hideFacetValue(child);
                });
            };

            HierarchicalFacet.prototype.showChilds = function (children) {
                var _this = this;
                _.each(children, function (child) {
                    _this.showFacetValue(child);
                });
            };

            HierarchicalFacet.prototype.hideParent = function (parent) {
                if (parent) {
                    this.hideFacetValue(parent);
                }
            };

            HierarchicalFacet.prototype.showParent = function (parent) {
                if (parent) {
                    this.showFacetValue(parent);
                }
            };

            HierarchicalFacet.prototype.selectChilds = function (parent, children) {
                this.flagParentForSelection(parent);
                this.selectMultipleValues(_.map(children, function (child) {
                    return child.facetValue;
                }));
            };

            HierarchicalFacet.prototype.deselectChilds = function (parent, children) {
                parent.hasChildSelected = false;
                this.deselectMultipleValues(_.map(children, function (child) {
                    return child.facetValue;
                }));
            };

            HierarchicalFacet.prototype.excludeChilds = function (children) {
                this.excludeMultipleValues(_.map(children, function (child) {
                    return child.facetValue;
                }));
            };

            HierarchicalFacet.prototype.unexcludeChilds = function (children) {
                this.unexcludeMultipleValues(_.map(children, function (child) {
                    return child.facetValue;
                }));
            };

            HierarchicalFacet.prototype.selectParent = function (parent) {
                if (parent != undefined) {
                    this.selectValue(parent.facetValue);
                    if (parent.parent) {
                        this.selectParent(this.valueHierarchy[parent.parent.facetValue.value]);
                    }
                }
            };

            HierarchicalFacet.prototype.deselectParent = function (parent) {
                if (parent != undefined) {
                    this.deselectValue(parent.facetValue);
                }
            };

            HierarchicalFacet.prototype.flagParentForSelection = function (valueHierarchy) {
                var parent = valueHierarchy.parent;
                while (parent) {
                    var parentInHierarchy = this.valueHierarchy[parent.facetValue.value];
                    parentInHierarchy.hasChildSelected = true;
                    parent = parentInHierarchy.parent;
                }
            };

            HierarchicalFacet.prototype.unflagParentForSelection = function (valueHierarchy) {
                var _this = this;
                var parent = valueHierarchy.parent;
                var current = valueHierarchy;
                while (parent) {
                    var parentInHierarchy = this.valueHierarchy[parent.facetValue.value];
                    var otherSelectedChilds = _.filter(parentInHierarchy.childs, function (child) {
                        var childInHierarchy = _this.valueHierarchy[child.facetValue.value];
                        return childInHierarchy.facetValue.value != valueHierarchy.facetValue.value && (childInHierarchy.facetValue.selected || childInHierarchy.facetValue.excluded || childInHierarchy.hasChildSelected);
                    });

                    if (otherSelectedChilds.length == 0) {
                        parentInHierarchy.hasChildSelected = false;
                    }
                    parent = parentInHierarchy.parent;
                }
            };
            HierarchicalFacet.ID = "HierarchicalFacet";
            return HierarchicalFacet;
        })(Ui.Facet);
        Ui.HierarchicalFacet = HierarchicalFacet;

        Ui.CoveoJQuery.registerAutoCreateComponent(HierarchicalFacet);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultDidYouMeanOptions = (function (_super) {
            __extends(DefaultDidYouMeanOptions, _super);
            function DefaultDidYouMeanOptions(element) {
                _super.call(this, element);
            }
            return DefaultDidYouMeanOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultDidYouMeanOptions = DefaultDidYouMeanOptions;

        var DidYouMean = (function (_super) {
            __extends(DidYouMean, _super);
            function DidYouMean(element, options, bindings) {
                _super.call(this, element, DidYouMean.ID, bindings);
                this.element = element;
                this.options = options;
                this.bindings = bindings;

                this.options = new DefaultDidYouMeanOptions(element).merge(options);
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(this.options);

                this.hideNext = true;

                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, this.handlePrepareQueryBuilder);
                this.bind.onRoot(Coveo.Events.QueryEvents.querySuccess, this.handleProcessNewQueryResults);
                this.bind.onRoot(Coveo.Events.QueryEvents.noResults, this.handleNoResults);
                this.bind.onRoot(Coveo.Events.QueryEvents.newQuery, this.handleNewQuery);
                Coveo.$(this.element).hide();
            }
            DidYouMean.prototype.handleNewQuery = function () {
                if (this.hideNext) {
                    Coveo.$(this.element).empty();
                    Coveo.$(this.element).hide();
                } else {
                    this.hideNext = true;
                }
            };

            DidYouMean.prototype.handlePrepareQueryBuilder = function (e, data) {
                Coveo.Assert.exists(data);
                data.queryBuilder.enableDidYouMean = true;
            };

            DidYouMean.prototype.handleNoResults = function (e, data) {
                // We do not auto-correct on search-as-you-type queries
                if (Coveo.Utils.isNonEmptyArray(data.results.queryCorrections) && !data.searchAsYouType) {
                    var originalQuery = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q);
                    var correctedQuery = this.buildCorrectedSentence(data.results.queryCorrections[0]);
                    this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, data.results.queryCorrections[0].correctedQuery);
                    data.retryTheQuery = true;
                    this.hideNext = false;
                    var noResult = Coveo.$('<div/>').html(Ui.l.noResultFor("<span class='coveo-highlight'>" + Coveo.StringUtils.htmlEncode(originalQuery) + "</span>")).appendTo(this.element);
                    var queryCorrected = Coveo.$('<div/>').html(Ui.l.autoCorrectedQueryTo("<span class='coveo-highlight'>" + correctedQuery + "</span>")).appendTo(this.element);
                    Coveo.$(this.element).show();
                    this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.didyoumeanAutomatic, {});
                }
            };

            DidYouMean.prototype.handleProcessNewQueryResults = function (e, data) {
                var _this = this;
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.results);

                var results = data.results;
                this.logger.trace('Received query results from new query', results);

                if (Coveo.Utils.isNonEmptyArray(results.queryCorrections)) {
                    var correctedQuery = this.buildCorrectedSentence(results.queryCorrections[0]);
                    var didYouMean = Coveo.$('<div/>').text(Ui.l.didYouMean('')).appendTo(this.element);
                    var searchTerm = Coveo.$('<a/>').html(correctedQuery).appendTo(didYouMean);
                    Coveo.$(searchTerm).fastClick(function () {
                        _this.doQueryWithCorrectedTerm(results.queryCorrections[0].correctedQuery);
                    });
                    Coveo.$(this.element).show();
                }
            };

            DidYouMean.prototype.buildCorrectedSentence = function (correction) {
                var toReturn = [];
                var tagStart = '<span class="coveo-word-correction">';
                var tagEnd = '</span>';
                var currentOffset = 0;
                _.each(correction.wordCorrections, function (wordCorrection) {
                    toReturn.push(Coveo.StringUtils.htmlEncode(correction.correctedQuery.slice(currentOffset, wordCorrection.offset)));
                    currentOffset = wordCorrection.offset;
                    toReturn.push(tagStart);
                    toReturn.push(Coveo.StringUtils.htmlEncode(correction.correctedQuery.slice(currentOffset, wordCorrection.length + currentOffset)));
                    toReturn.push(tagEnd);
                    currentOffset = wordCorrection.offset + wordCorrection.length;
                });
                toReturn.push(Coveo.StringUtils.htmlEncode(correction.correctedQuery.slice(currentOffset)));
                return toReturn.join("");
            };

            DidYouMean.prototype.doQueryWithCorrectedTerm = function (correctedTerm) {
                var _this = this;
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, correctedTerm);
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.didyoumeanClick, {});
                    } });
            };
            DidYouMean.ID = 'DidYouMean';
            return DidYouMean;
        })(Ui.Component);
        Ui.DidYouMean = DidYouMean;

        Ui.CoveoJQuery.registerAutoCreateComponent(DidYouMean);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultCurrentTabOptions = (function (_super) {
            __extends(DefaultCurrentTabOptions, _super);
            function DefaultCurrentTabOptions(element) {
                _super.call(this, element);
                this.tabSectionToOpen = this.loadStringFromAttribute('data-tab-section-to-open');
            }
            return DefaultCurrentTabOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultCurrentTabOptions = DefaultCurrentTabOptions;

        var CurrentTab = (function (_super) {
            __extends(CurrentTab, _super);
            function CurrentTab(element, options, bindings) {
                var _this = this;
                _super.call(this, element, CurrentTab.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultCurrentTabOptions(element).merge(options);

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.t);
                Coveo.$(this.root).on(eventName, Coveo.$.proxy(this.handleTabChange, this));
                if (this.options.tabSectionToOpen) {
                    Coveo.$(this.options.tabSectionToOpen).addClass('coveo-targeted-by-current-tab');
                    Coveo.$(this.element).addClass('coveo-targeting-tab-section');
                    this.bind.fastClick(Coveo.$(this.element), function () {
                        Coveo.$('.coveo-glass').toggleClass("coveo-active-glass").toggleClass('coveo-active-glass-for-current-tab');
                        Coveo.$(_this.element).toggleClass('coveo-opening-tab-section');
                        Coveo.$(_this.options.tabSectionToOpen).toggleClass('coveo-opened-by-current-tab');
                        if (Coveo.$(_this.element).hasClass('coveo-opening-tab-section')) {
                            Coveo.$(_this.options.tabSectionToOpen).css('z-index', '1001');
                            Coveo.$(_this.element).css('z-index', '1001');
                        } else {
                            Coveo.$(_this.options.tabSectionToOpen).css('z-index', undefined);
                            Coveo.$(_this.element).css('z-index', undefined);
                        }
                    });
                }
            }
            CurrentTab.prototype.handleTabChange = function () {
                var _this = this;
                var selectedTabId = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t);
                if (Coveo.Utils.isNonEmptyString(selectedTabId)) {
                    var found = false;
                    Coveo.$(this.root).find(Ui.Component.computeSelectorForType(Ui.Tab.ID)).each(function (index, elem) {
                        var tab = Ui.Component.get(elem, Ui.Tab);
                        if (tab.options.uniqueId == selectedTabId) {
                            Coveo.$(_this.element).html(Coveo.$(tab.element).html());
                            found = true;
                        }
                    });
                    Coveo.Assert.check(found, "Cannot find the currently active tab");
                } else {
                    Coveo.$(this.element).hide();
                }
            };
            CurrentTab.ID = 'CurrentTab';
            return CurrentTab;
        })(Ui.Component);
        Ui.CurrentTab = CurrentTab;

        Ui.CoveoJQuery.registerAutoCreateComponent(CurrentTab);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultBreadcrumbOptions = (function (_super) {
            __extends(DefaultBreadcrumbOptions, _super);
            function DefaultBreadcrumbOptions(element) {
                _super.call(this, element);
            }
            return DefaultBreadcrumbOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultBreadcrumbOptions = DefaultBreadcrumbOptions;

        var Breadcrumb = (function (_super) {
            __extends(Breadcrumb, _super);
            function Breadcrumb(element, options, bindings) {
                var _this = this;
                _super.call(this, element, Breadcrumb.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = new DefaultBreadcrumbOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.querySuccess, function () {
                    return _this.handleQuerySuccess();
                });

                Coveo.$(this.element).hide();
            }
            Breadcrumb.prototype.handleQuerySuccess = function () {
                var _this = this;
                this.element.innerHTML = '';

                var breadcrumbs = this.getBreadcrumbs();
                var clear = Coveo.$('<div />').addClass('coveo-clear-all');
                Coveo.$(this.element).fastToggle(breadcrumbs.length != 0);

                if (!Ui.Device.isMobileDevice()) {
                    Coveo.$(this.element).append(clear);
                }
                for (var i = 0; i < breadcrumbs.length; i++) {
                    Coveo.$(breadcrumbs[i].element).addClass('item').appendTo(this.element);
                }
                if (Ui.Device.isMobileDevice()) {
                    Coveo.$(this.element).append(clear);
                }

                clear.attr("title", Ui.l.ClearAllFilters());
                clear.append(Coveo.$('<div />').addClass('coveo-icon'));
                this.bind.fastClick(clear, function () {
                    _this.clearBreadcrumbs();
                });
            };

            Breadcrumb.prototype.getBreadcrumbs = function () {
                var args = { breadcrumbs: [] };
                Coveo.$(this.root).trigger(Coveo.Events.BreadcrumbEvents.populateBreadcrumb, args);
                this.logger.debug('Retrieved breadcrumbs', args.breadcrumbs);

                return args.breadcrumbs;
            };

            Breadcrumb.prototype.clearBreadcrumbs = function () {
                var _this = this;
                var args = {};
                Coveo.$(this.root).trigger(Coveo.Events.BreadcrumbEvents.clearBreadcrumb, args);
                this.logger.debug('Clearing breadcrumbs');
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.breadcrumbResetAll, {});
                    } });
            };
            Breadcrumb.ID = 'Breadcrumb';
            return Breadcrumb;
        })(Ui.Component);
        Ui.Breadcrumb = Breadcrumb;

        Ui.CoveoJQuery.registerAutoCreateComponent(Breadcrumb);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultHiddenQueryOptions = (function (_super) {
            __extends(DefaultHiddenQueryOptions, _super);
            function DefaultHiddenQueryOptions(element) {
                _super.call(this, element);
            }
            return DefaultHiddenQueryOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultHiddenQueryOptions = DefaultHiddenQueryOptions;

        var HiddenQuery = (function (_super) {
            __extends(HiddenQuery, _super);
            function HiddenQuery(element, options, bindings) {
                _super.call(this, element, HiddenQuery.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultHiddenQueryOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
                Coveo.$(this.root).on(this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.hq), Coveo.$.proxy(this.handleUpdateUi, this));
            }
            HiddenQuery.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);
                var hiddenQuery = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.hq);

                if (Coveo.Utils.isNonEmptyString(hiddenQuery)) {
                    data.queryBuilder.advancedExpression.add(hiddenQuery);
                } else {
                    Coveo.$(this.element).hide();
                }
            };

            HiddenQuery.prototype.handleUpdateUi = function (e, data) {
                Coveo.Assert.exists(data);
                var hq = data.value;
                var hd = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.hd);
                if (Coveo.Utils.isNonEmptyString(hq)) {
                    this.updatePanel(hd);
                    Coveo.$(this.element).show();
                } else {
                    Coveo.$(this.element).hide();
                }
            };

            HiddenQuery.prototype.updatePanel = function (descriptionHtml) {
                var _this = this;
                Coveo.$(this.element).empty();
                var description = Coveo.$("<span></span>").text(descriptionHtml);
                var removeLink = Coveo.$('<a/>').attr("href", "#").text(Ui.l.Remove()).addClass('coveo-remove').fastClick(function () {
                    _this.usageAnalytics.isContextual = false;
                    _this.clearHiddenQuery();
                });
                this.usageAnalytics.isContextual = true;
                Coveo.$(this.element).append(description, removeLink);
            };

            HiddenQuery.prototype.clearHiddenQuery = function () {
                var _this = this;
                var hiddenDescriptionRemoved = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.hd);
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.hd, "");
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.hq, "");
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.contextRemove, { contextName: hiddenDescriptionRemoved });
                    } });
            };
            HiddenQuery.ID = 'HiddenQuery';
            return HiddenQuery;
        })(Ui.Component);
        Ui.HiddenQuery = HiddenQuery;
        Ui.CoveoJQuery.registerAutoCreateComponent(HiddenQuery);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultQueryDurationOptions = (function (_super) {
            __extends(DefaultQueryDurationOptions, _super);
            function DefaultQueryDurationOptions(element) {
                _super.call(this, element);
            }
            return DefaultQueryDurationOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultQueryDurationOptions = DefaultQueryDurationOptions;

        var QueryDuration = (function (_super) {
            __extends(QueryDuration, _super);
            function QueryDuration(element, options, bindings) {
                var _this = this;
                _super.call(this, element, QueryDuration.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultQueryDurationOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.querySuccess, Coveo.$.proxy(this.handleQuerySuccess, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.queryError, function () {
                    Coveo.$(_this.element).hide();
                });
                Coveo.$(this.element).hide();
            }
            QueryDuration.prototype.handleQuerySuccess = function (e, data) {
                Coveo.Assert.exists(data);

                var tooltip = Ui.l.Duration(this.formatQueryDuration(data.results.duration)) + '\n' + Ui.l.IndexDuration(this.formatQueryDuration(data.results.indexDuration)) + '\n' + Ui.l.ProxyDuration(this.formatQueryDuration(data.results.proxyDuration)) + '\n' + Ui.l.ClientDuration(this.formatQueryDuration(data.results.clientDuration));

                Coveo.$(this.element).text(this.formatQueryDuration(data.results.duration));
                Coveo.$(this.element).attr('title', tooltip);
                Coveo.$(this.element).show();
            };

            QueryDuration.prototype.formatQueryDuration = function (durationInMillis) {
                if (durationInMillis == undefined) {
                    return Ui.l.Unavailable();
                } else {
                    var seconds = Math.max(durationInMillis / 1000, 0.01);
                    return Ui.l.Seconds(Globalize.format(seconds, 'n2'), seconds);
                }
            };
            QueryDuration.ID = 'QueryDuration';
            return QueryDuration;
        })(Ui.Component);
        Ui.QueryDuration = QueryDuration;
        Ui.CoveoJQuery.registerAutoCreateComponent(QueryDuration);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultQuerySummaryOptions = (function (_super) {
            __extends(DefaultQuerySummaryOptions, _super);
            function DefaultQuerySummaryOptions(element) {
                _super.call(this, element);
            }
            return DefaultQuerySummaryOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultQuerySummaryOptions = DefaultQuerySummaryOptions;

        var QuerySummary = (function (_super) {
            __extends(QuerySummary, _super);
            function QuerySummary(element, options, bindings) {
                var _this = this;
                _super.call(this, element, QuerySummary.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultQuerySummaryOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.querySuccess, Coveo.$.proxy(this.handleQuerySuccess, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.queryError, function () {
                    Coveo.$(_this.element).hide();
                });
                Coveo.$(this.element).hide();
            }
            QuerySummary.prototype.handleQuerySuccess = function (e, data) {
                Coveo.Assert.exists(data);

                Coveo.$(this.element).show();

                if (data.results.results.length > 0) {
                    var first = Globalize.format(data.query.firstResult + 1, 'n0');
                    var last = Globalize.format(data.query.firstResult + data.results.results.length, 'n0');
                    var totalCount = Globalize.format(data.results.totalCount, 'n0');
                    Coveo.$(this.element).html(Ui.l.ShowingResultsOf('<span class="coveo-highlight">' + first + '</span>', '<span class ="coveo-highlight">' + last + '</span>', '<span class ="coveo-highlight">' + totalCount + '</span>', data.results.results.length));
                } else {
                    Coveo.$(this.element).html(Ui.l.QueryDidntMatchAnyDocuments());
                }
            };
            QuerySummary.ID = 'QuerySummary';
            return QuerySummary;
        })(Ui.Component);
        Ui.QuerySummary = QuerySummary;
        Ui.CoveoJQuery.registerAutoCreateComponent(QuerySummary);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultErrorReportOptions = (function (_super) {
            __extends(DefaultErrorReportOptions, _super);
            function DefaultErrorReportOptions(element) {
                _super.call(this, element);
                this.popUp = this.loadBooleanFromAttribute("data-pop-up", false);
                this.showDetailedError = this.loadBooleanFromAttribute("data-show-detailed-error", false);
            }
            return DefaultErrorReportOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultErrorReportOptions = DefaultErrorReportOptions;

        var ErrorReport = (function (_super) {
            __extends(ErrorReport, _super);
            function ErrorReport(element, options, bindings) {
                _super.call(this, element, ErrorReport.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultErrorReportOptions(element).merge(options);

                Coveo.$(this.element).append(Coveo.$("<div />").addClass('coveo-error-title').append("<h3></h3><h4></h4>"));

                var optionsElement = Coveo.$('<div />').addClass('coveo-options').append(this.buildPrevious()).append(this.buildClear()).append(this.buildRetry());

                Coveo.$(this.element).append(optionsElement).append(this.message = Coveo.$("<div class='coveo-error-message'></div>")).hide();

                Coveo.$(this.root).on(Coveo.Events.QueryEvents.newQuery, Coveo.$.proxy(this.handleNewQuery, this));
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.queryError, Coveo.$.proxy(this.handleQueryError, this));
            }
            ErrorReport.prototype.setErrorTitle = function () {
                var errorTitle = {
                    h3: Ui.l.OopsError(),
                    h4: Ui.l.ProblemPersists()
                };
                if (Ui.Device.isPhonegap() && navigator.connection && window.Connection && (navigator.connection.type === window.Connection.NONE || navigator.connection.type === 0)) {
                    errorTitle = {
                        h3: Ui.l.CannotConnect(),
                        h4: Ui.l.NoNetworkConnection()
                    };
                }
                Coveo.$(this.element).find("h3").text(errorTitle.h3);
                Coveo.$(this.element).find("h4").text(errorTitle.h4);
            };

            ErrorReport.prototype.buildPrevious = function () {
                var _this = this;
                return Coveo.$("<span class='coveo-previous' > " + Ui.l.GoBack() + " </span>").fastClick(function () {
                    _this.usageAnalytics.logCustomEvent(Ui.AnalyticsActionCauseList.errorBack, {}, _this.root);
                    _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.errorBack, {});
                    history.back();
                });
            };

            ErrorReport.prototype.buildClear = function () {
                var _this = this;
                return Coveo.$("<span class='coveo-clear'>" + Ui.l.Reset() + "</span>").fastClick(function () {
                    _this.queryStateModel.reset();
                    _this.queryController.deferExecuteQuery({
                        beforeExecuteQuery: function () {
                            _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.errorClearQuery, {});
                            _this.usageAnalytics.logCustomEvent(Ui.AnalyticsActionCauseList.errorClearQuery, {}, _this.root);
                        }
                    });
                });
            };

            ErrorReport.prototype.buildRetry = function () {
                var _this = this;
                return Coveo.$("<span class='coveo-retry'>" + Ui.l.Retry() + "</span>").fastClick(function () {
                    _this.queryController.deferExecuteQuery({
                        beforeExecuteQuery: function () {
                            _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.errorRetry, {});
                            _this.usageAnalytics.logCustomEvent(Ui.AnalyticsActionCauseList.errorRetry, {}, _this.root);
                        }
                    });
                });
            };

            ErrorReport.prototype.handleNewQuery = function () {
                Coveo.$(this.element).hide();
                if (this.closePopup != null) {
                    this.closePopup();
                }
            };

            ErrorReport.prototype.handleQueryError = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.error);

                // Do not display the panel if the error is for missing authentication. The
                // appropriate authentication provider should take care of redirecting.
                if (data.error.isMissingAuthentication) {
                    return;
                }

                this.message.empty();
                this.setErrorTitle();

                if (this.options.showDetailedError) {
                    this.message.append(Coveo.$("<span class='coveo-more-info'>" + Ui.l.MoreInfo() + "</span>").fastClick(function (e) {
                        Coveo.$(e.target).parent().html(_.template('<pre><%- type %>\n<%- message %></pre>', data.error));
                    }));
                }

                Coveo.$(this.element).show();
                if (this.options.popUp) {
                    var modalbox = Coveo.ModalBox.open(Coveo.$(this.element).clone(true, true), {
                        title: Ui.JQueryUtils.getPopUpCloseButton(Ui.l.Close(), Ui.l.ErrorReport()),
                        titleClose: true,
                        overlayClose: true,
                        className: 'coveo-error-report'
                    });
                    this.closePopup = modalbox.close;
                }
            };
            ErrorReport.ID = 'ErrorReport';
            return ErrorReport;
        })(Ui.Component);
        Ui.ErrorReport = ErrorReport;

        Ui.CoveoJQuery.registerAutoCreateComponent(ErrorReport);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultFieldValueOptions = (function (_super) {
            __extends(DefaultFieldValueOptions, _super);
            function DefaultFieldValueOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute('data-field');
                this.facet = this.loadStringFromAttribute('data-facet', this.field);
                this.htmlValue = this.loadBooleanFromAttribute('data-html-value', false);
                this.helper = this.loadStringFromAttribute("data-helper");
                this.helperOptions = this.loadStringFromAttribute("data-helper-options");
                this.splitValues = this.loadBooleanFromAttribute("data-split-values", false);
            }
            return DefaultFieldValueOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultFieldValueOptions = DefaultFieldValueOptions;

        var FieldValue = (function (_super) {
            __extends(FieldValue, _super);
            function FieldValue(element, options, bindings, result) {
                var _this = this;
                _super.call(this, element, FieldValue.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;

                this.options = new DefaultFieldValueOptions(element).merge(options);
                this.result = this.result || this.resolveResult();
                Coveo.Assert.exists(this.result);

                this.options.field = this.options.field.toLowerCase();

                var fieldKey = Coveo.Utils.getCoveoFieldKey(this.options.field);

                var value = this.result.raw[fieldKey];
                if (value == null)
                    value = this.result[fieldKey];

                if (_.isObject(value)) {
                    value = null;
                }

                var values;
                if (this.options.splitValues && value) {
                    values = value.split(";");
                    values = _.map(values, function (value) {
                        return Coveo.$.trim(value);
                    });
                } else {
                    values = [value];
                }
                _.each(values, function (value) {
                    if (value != undefined) {
                        _this.renderOneValue(value);
                    }
                });
            }
            FieldValue.prototype.getHelperOptions = function () {
                if (!this.evaluatedHelperOptions && Coveo.Utils.isNonEmptyString(this.options.helperOptions)) {
                    this.evaluatedHelperOptions = eval("(" + this.options.helperOptions + ")");
                }

                return this.evaluatedHelperOptions;
            };

            FieldValue.prototype.renderOneValue = function (value) {
                var element = Coveo.$("<span></span>");
                var toRender = value;
                if (this.options.helper) {
                    toRender = Ui.TemplateHelpers.getHelper(this.options.helper).call(this, value, this.getHelperOptions());
                }
                if (this.options.htmlValue) {
                    element.html(toRender);
                } else {
                    element.text(toRender);
                }
                Coveo.$(this.element).append(element);
                this.bindEventOnValue(element, value);
            };

            FieldValue.prototype.bindEventOnValue = function (element, value) {
                var _this = this;
                var facetAttributeName = Coveo.Models.QueryStateModel.getFacetId(this.options.facet);
                var facetModel = this.queryStateModel.get(facetAttributeName);
                var facets = this.componentStateModel.get(facetAttributeName);
                var atLeastOneFacetIsEnabled = _.filter(facets, function (value) {
                    return !value.disabled;
                }).length > 0;

                if (facetModel != null && atLeastOneFacetIsEnabled) {
                    Coveo.$(element).on("click", function () {
                        if (_.contains(facetModel, value)) {
                            _this.queryStateModel.set(facetAttributeName, _.without(facetModel, value));
                        } else {
                            _this.queryStateModel.set(facetAttributeName, _.union(facetModel, [value]));
                        }
                        _this.queryController.deferExecuteQuery({
                            beforeExecuteQuery: function () {
                                return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.documentField, { facetId: _this.options.facet, facetValue: value });
                            }
                        });
                    });

                    if (_.contains(facetModel, value)) {
                        Coveo.$(element).addClass('coveo-selected');
                    }
                    Coveo.$(element).addClass('coveo-clickable');
                }
            };
            FieldValue.ID = 'FieldValue';
            return FieldValue;
        })(Ui.Component);
        Ui.FieldValue = FieldValue;

        Ui.CoveoJQuery.registerAutoCreateComponent(FieldValue);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultFieldTableOptions = (function (_super) {
            __extends(DefaultFieldTableOptions, _super);
            function DefaultFieldTableOptions(element) {
                _super.call(this, element);
            }
            return DefaultFieldTableOptions;
        })(Ui.ComponentOptions);

        var FieldTable = (function (_super) {
            __extends(FieldTable, _super);
            function FieldTable(element, options, bindings, result) {
                _super.call(this, element, ValueRow.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultFieldTableOptions(element).merge(options);
                var rows = Coveo.$(this.element).find('tr[data-field]');

                rows.each(function (i, e) {
                    new ValueRow(e, {}, bindings, result);
                });

                if (Coveo.$(element).find('tr').length == 0) {
                    Coveo.$(element).detach();
                }
            }
            FieldTable.ID = 'FieldTable';
            return FieldTable;
        })(Ui.Component);

        Ui.CoveoJQuery.registerAutoCreateComponent(FieldTable);

        var DefaultValueRowOptions = (function (_super) {
            __extends(DefaultValueRowOptions, _super);
            function DefaultValueRowOptions(element) {
                _super.call(this, element);

                this.field = this.loadStringFromAttribute('data-field');
                this.facet = this.loadStringFromAttribute('data-facet', this.field);
                this.caption = this.loadStringFromAttribute('data-caption', this.field.substr(1));
                this.htmlValue = this.loadBooleanFromAttribute('data-html-value', false);
                this.helper = this.loadStringFromAttribute("data-helper");
                this.helperOptions = this.loadStringFromAttribute("data-helper-options");
                this.splitValues = this.loadBooleanFromAttribute("data-split-values", false);
            }
            return DefaultValueRowOptions;
        })(Ui.ComponentOptions);

        var ValueRow = (function (_super) {
            __extends(ValueRow, _super);
            function ValueRow(element, options, bindings, result) {
                _super.call(this, element, ValueRow.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;

                this.options = new DefaultValueRowOptions(element).merge(options);
                this.result = result || this.resolveResult();

                var fieldKey = Coveo.Utils.getCoveoFieldKey(this.options.field);
                if (this.result.raw[fieldKey] != null || this.result[fieldKey] != null) {
                    Coveo.$(element).append('<th class ="CoveoCaption">' + this.options.caption.toLocaleString() + '</th>');
                    var valueElement = Coveo.$('<td />').appendTo(element);
                    new Ui.FieldValue(valueElement[0], {
                        field: this.options.field,
                        facet: this.options.facet,
                        htmlValue: this.options.htmlValue,
                        helper: this.options.helper,
                        helperOptions: this.options.helperOptions,
                        splitValues: this.options.splitValues
                    }, bindings, result);
                } else {
                    Coveo.$(element).detach();
                }
            }
            ValueRow.ID = 'ValueRow';
            return ValueRow;
        })(Ui.Component);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultPrintableUriOptions = (function (_super) {
            __extends(DefaultPrintableUriOptions, _super);
            function DefaultPrintableUriOptions(element) {
                _super.call(this, element);
            }
            return DefaultPrintableUriOptions;
        })(Ui.ComponentOptions);

        var PrintableUri = (function (_super) {
            __extends(PrintableUri, _super);
            function PrintableUri(element, options, bindings, result) {
                _super.call(this, element, PrintableUri.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                var parentsXml = result.raw.sysparents;
                if (parentsXml) {
                    this.renderParentsXml(element, parentsXml);
                } else {
                    this.renderUri(element, result);
                }

                if (Ui.Device.isPhonegap()) {
                    Ui.PhonegapUtils.bindOpenLinkInPhonegap(element, this.uri);
                }
            }
            PrintableUri.prototype.renderParentsXml = function (element, parentsXml) {
                var xmlDoc = Coveo.$.parseXML(parentsXml);
                var parents = xmlDoc.getElementsByTagName("parent");

                var tokens = [];
                var seperators = [];

                for (var i = 0; i < parents.length; i++) {
                    if (i > 0) {
                        var seperator = this.buildSeperator();
                        seperators.push(seperator);
                        element.appendChild(seperator);
                    }

                    var parent = parents.item(i);
                    var token = this.buildHtmlToken(parent.getAttribute('name'), parent.getAttribute('uri'));
                    tokens.push(token);
                    element.appendChild(token);
                }

                if (tokens.length > 1) {
                    var ellipsis = this.buildEllipsis();
                    element.insertBefore(ellipsis, seperators[0]);
                    var ellipsisSeperator = this.buildSeperator();
                    element.insertBefore(ellipsisSeperator, ellipsis);

                    var contentWidth = 0;
                    var tokensWidth = [];
                    for (var i = 0; i < tokens.length; i++) {
                        tokensWidth[i] = tokens[i].offsetWidth;
                        contentWidth += tokensWidth[i];
                    }
                    var seperatorWidth = seperators[0].offsetWidth;
                    var ellipsisWidth = ellipsis.offsetWidth;
                    var availableWidth = element.offsetWidth;

                    if (availableWidth <= contentWidth) {
                        contentWidth += ellipsisWidth + seperatorWidth;
                        var hidden = [];
                        var i = 1;
                        while (i < tokens.length && availableWidth <= contentWidth) {
                            element.removeChild(tokens[i]);
                            element.removeChild(seperators[i - 1]);
                            if (i > 1) {
                                hidden.push(seperators[i - 1]);
                            }
                            hidden.push(tokens[i]);
                            contentWidth -= tokensWidth[i] + seperatorWidth;
                            i++;
                        }
                        ellipsis.onclick = function () {
                            for (var i = 0; i < hidden.length; i++) {
                                element.insertBefore(hidden[i], ellipsis);
                            }
                            element.removeChild(ellipsis);
                        };
                    } else {
                        element.removeChild(ellipsis);
                        element.removeChild(ellipsisSeperator);
                    }
                }
            };

            PrintableUri.prototype.renderUri = function (element, result) {
                this.uri = result.clickUri;
                var stringAndHoles;
                if (result.printableUri.indexOf("\\") == -1) {
                    stringAndHoles = Coveo.StringAndHoles.shortenUri(result.printableUri, Coveo.$(element).width() / 7);
                } else {
                    stringAndHoles = Coveo.StringAndHoles.shortenPath(result.printableUri, Coveo.$(element).width() / 7);
                }
                var uri = Coveo.HighlightUtils.highlightString(stringAndHoles.value, result.printableUriHighlights, stringAndHoles.holes, 'coveo-highlight');
                var link = Coveo.$('<a>').attr('title', result.printableUri).addClass('coveo-printable-uri').html(uri);
                if (!Ui.Device.isPhonegap()) {
                    link.attr('href', result.clickUri);
                }
                link.appendTo(element);
            };

            PrintableUri.prototype.buildSeperator = function () {
                var seperator = document.createElement('span');
                seperator.innerText = ">";
                seperator.className = 'coveo-printable-uri-separator';
                return seperator;
            };

            PrintableUri.prototype.buildEllipsis = function () {
                var ellipsis = document.createElement('span');
                ellipsis.innerText = "...";
                ellipsis.className = 'coveo-printable-uri';
                return ellipsis;
            };

            PrintableUri.prototype.buildHtmlToken = function (name, uri) {
                var modifiedName = name.charAt(0).toUpperCase() + name.slice(1);
                var link = document.createElement('a');
                if (!Ui.Device.isPhonegap()) {
                    link.href = uri;
                }
                this.uri = uri;
                link.className = 'coveo-printable-uri';
                link.innerText = modifiedName;
                return link;
            };
            PrintableUri.ID = 'PrintableUri';
            return PrintableUri;
        })(Ui.Component);
        Ui.PrintableUri = PrintableUri;

        Ui.CoveoJQuery.registerAutoCreateComponent(PrintableUri);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultSettingsOptions = (function (_super) {
            __extends(DefaultSettingsOptions, _super);
            function DefaultSettingsOptions(element) {
                _super.call(this, element);
                this.includeInMenu = this.loadStringArrayFromAttribute("data-include-in-menu", [], ",");
                this.menuDelay = this.loadNumberFromAttribute("data-menu-delay", 300);
            }
            return DefaultSettingsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultSettingsOptions = DefaultSettingsOptions;

        var Settings = (function (_super) {
            __extends(Settings, _super);
            function Settings(element, options, bindings) {
                _super.call(this, element, Settings.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = new DefaultSettingsOptions(element).merge(options);
                Coveo.$(this.root).on(Coveo.Events.InitializationEvents.afterInitialization, Coveo.$.proxy(this.init, this));
            }
            Settings.prototype.init = function () {
                var _this = this;
                this.menu = this.buildMenu();
                Coveo.$('<span/>').addClass('coveo-settings-icon').appendTo(this.element);
                Coveo.$(this.element).fastClick(function () {
                    _this.toggleMenu();
                });
                this.settingsButton = Coveo.$(this.element);
                var closeTimeout;
                Coveo.$([this.settingsButton[0], this.menu[0]]).mouseleave(function () {
                    closeTimeout = setTimeout(function () {
                        _this.menu.detach();
                    }, _this.options.menuDelay);
                }).mouseenter(function () {
                    clearTimeout(closeTimeout);
                });
            };

            Settings.prototype.buildMenu = function () {
                var menu = Coveo.$('<div/>').addClass('coveo-advanced-menu');
                var menuData = _.map(this.options.includeInMenu, function (selector) {
                    return Coveo.$(selector).coveo();
                });
                menu.append(this.buildSection(menuData));
                return menu;
            };

            Settings.prototype.buildSection = function (menuData) {
                var _this = this;
                var toReturn = _.map(menuData, function (menu) {
                    var otherMenus = _.filter(menuData, function (otherMenu) {
                        return !Coveo.Utils.objectEqual(otherMenu, menu);
                    });
                    var section = Coveo.$('<div/>').addClass('coveo-section').addClass(menu.getCssClass());
                    Coveo.$('<div/>').addClass('coveo-icon').appendTo(section);
                    var textsDiv = Coveo.$('<div>').addClass('coveo-items').appendTo(section);
                    _.each(menu.getMenuItems(), function (menuItem) {
                        var otherMenuItems = _.filter(menu.getMenuItems(), function (otherMenuItem) {
                            return otherMenuItem.text != menuItem.text;
                        });
                        textsDiv.append(_this.buildLine(menuItem.text, menuItem.onOpen, otherMenus, otherMenuItems));
                    });
                    return section;
                });
                return _.reduce(toReturn, function (memo, section) {
                    return memo.add(section);
                });
            };

            Settings.prototype.buildLine = function (text, onOpen, otherMenu, otherMenuItems) {
                var _this = this;
                var concat = otherMenuItems.concat(_.flatten(_.map(otherMenu, function (menu) {
                    return menu.getMenuItems();
                }), true));
                return Coveo.$('<div/>').addClass('coveo-item').text(text).fastClick(function () {
                    _this.menu.detach();
                    onOpen();
                    _.invoke(concat, 'onClose');
                });
            };

            Settings.prototype.toggleMenu = function () {
                if (this.menu.is(':visible')) {
                    this.menu.detach();
                } else {
                    Ui.JQueryUtils.positionPopup(this.menu, Coveo.$(this.element), Coveo.$(this.root), Coveo.$(this.root), this.getPopupPositioning());
                }
            };

            Settings.prototype.getPopupPositioning = function () {
                return {
                    horizontal: 4 /* innerRight */,
                    vertical: 2 /* bottom */,
                    verticalOffset: 8
                };
            };
            Settings.ID = 'Settings';
            return Settings;
        })(Ui.Component);
        Ui.Settings = Settings;
        Ui.CoveoJQuery.registerAutoCreateComponent(Settings);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultShareQueryOptions = (function (_super) {
            __extends(DefaultShareQueryOptions, _super);
            function DefaultShareQueryOptions(element) {
                _super.call(this, element);
            }
            return DefaultShareQueryOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultShareQueryOptions = DefaultShareQueryOptions;

        var ShareQuery = (function (_super) {
            __extends(ShareQuery, _super);
            function ShareQuery(element, options, bindings) {
                _super.call(this, element, ShareQuery.ID, bindings);
                this.element = element;
                this.options = options;
                this.dialogBoxContent = this.buildContent();
                Coveo.$(element).append(this.dialogBoxContent);
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.querySuccess, Coveo.$.proxy(this.handleProcessNewQueryResults, this));
            }
            ShareQuery.prototype.open = function () {
                Coveo.$('.' + Ui.Component.computeMemberNameForType(ShareQuery.ID)).height(137);
            };

            ShareQuery.prototype.close = function () {
                Coveo.$(this.element).height(0);
            };

            ShareQuery.prototype.getCssClass = function () {
                return 'coveo-share-query';
            };

            ShareQuery.prototype.getMenuItems = function () {
                var _this = this;
                return [{ text: Ui.l.ShareQuery(), onOpen: function () {
                            return _this.open();
                        }, onClose: function () {
                            return _this.close();
                        } }];
            };

            ShareQuery.prototype.handleProcessNewQueryResults = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.exists(data.results);
                var query = data.query;

                this.linkToThisQuery.val(window.location.href);
                this.completeQuery.val(Coveo.$.trim(this.outputIfNotNull(query.q) + ' ' + this.outputIfNotNull(query.aq) + ' ' + this.outputIfNotNull(query.cq)));

                this.logger.trace('Received query results from new query', query);
            };

            ShareQuery.prototype.outputIfNotNull = function (value) {
                if (value) {
                    return '(' + value + ')';
                }
                return '';
            };

            ShareQuery.prototype.buildContent = function () {
                var _this = this;
                var content = Coveo.$('<div/>').addClass('coveo-query-summary-info');
                content.append(Coveo.$('<span/>').addClass('coveo-query-summary-info-title').text(Ui.l.ShareQuery()));
                var close = Coveo.$('<div/>').addClass('coveo-query-summary-info-close').append('<span/>');
                close.fastClick(function () {
                    return _this.close();
                });
                content.append(close);
                var boxes = Coveo.$('<div/>').addClass('coveo-query-summary-info-boxes');
                this.linkToThisQuery = Coveo.$('<input/>').attr('type', 'text').addClass('coveo-query-summary-info-input');
                this.linkToThisQuery.fastClick(function () {
                    return _this.linkToThisQuery.select();
                });
                this.completeQuery = Coveo.$('<input/>').attr('type', 'text').addClass('coveo-query-summary-info-input');

                boxes.append(this.buildTextBoxWithLabel(Ui.l.Link() + ":", this.linkToThisQuery));
                boxes.append(this.buildTextBoxWithLabel(Ui.l.CompleteQuery() + ":", this.completeQuery));
                boxes.appendTo(content);

                Ui.Component.pointElementsToDummyForm(content);

                return content;
            };

            ShareQuery.prototype.buildTextBoxWithLabel = function (label, input) {
                var labelElement = Coveo.$('<span/>').addClass('coveo-query-summary-info-label').text(label);
                return Coveo.$('<div/>').append(labelElement).append(input);
            };

            ShareQuery.create = function (element, options, root) {
                Coveo.Assert.exists(element);

                return new ShareQuery(element, options, root);
            };
            ShareQuery.ID = 'ShareQuery';
            return ShareQuery;
        })(Ui.Component);
        Ui.ShareQuery = ShareQuery;

        Ui.CoveoJQuery.registerAutoCreateComponent(ShareQuery);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultToggleButtonOptions = (function (_super) {
            __extends(DefaultToggleButtonOptions, _super);
            function DefaultToggleButtonOptions(element) {
                _super.call(this, element);
                this.classToToggle = this.loadStringFromAttribute("data-toggle-class");
                this.target = this.loadStringFromAttribute("data-toggle-target");
                this.activateGlass = this.loadBooleanFromAttribute("data-toggle-glass", false);
            }
            return DefaultToggleButtonOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultToggleButtonOptions = DefaultToggleButtonOptions;

        var ToggleButton = (function (_super) {
            __extends(ToggleButton, _super);
            function ToggleButton(element, options, bindings) {
                var _this = this;
                _super.call(this, element, ToggleButton.ID, bindings);
                this.element = element;
                this.options = options;
                this.options = new DefaultToggleButtonOptions(element).merge(options);
                Coveo.Assert.exists(element);
                Coveo.Assert.exists(this.options);

                this.classToToggle = this.options.classToToggle;
                this.target = this.options.target;
                this.activateGlass = this.options.activateGlass;

                if (this.activateGlass) {
                    this.buildGlass();
                }

                Coveo.$(element).fastClick(function () {
                    return _this.handleClick();
                });

                // Provide a dummy href if the element is an hyperlink
                if (element.tagName == 'A') {
                    Coveo.$(element).attr('href', 'javascript:');
                }

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.t);
                this.bind.onRoot(eventName, this.handleTabChanged);
            }
            ToggleButton.prototype.handleClick = function () {
                if (Coveo.$("." + this.target).hasClass(this.classToToggle)) {
                    this.removeToggleClass();
                } else {
                    this.addToggleClass();
                }
            };

            ToggleButton.prototype.handleTabChanged = function () {
                this.removeToggleClass();
            };

            ToggleButton.prototype.addToggleClass = function () {
                Ui.JQueryUtils.addToggleClassOnSearchInterface(this.classToToggle.substr(6), Ui.Device.isPhonegap());
            };

            ToggleButton.prototype.removeToggleClass = function () {
                Ui.JQueryUtils.removeToggleClassOnSearchInterface(Ui.Device.isPhonegap());
            };

            ToggleButton.prototype.getGlass = function () {
                return Coveo.$(".coveo-glass");
            };

            ToggleButton.prototype.buildGlass = function () {
                if (this.getGlass().length == 0) {
                    var glass = Coveo.$("<div></div>").addClass('coveo-glass');
                    glass.fastClick(function () {
                        Ui.JQueryUtils.removeToggleClassOnSearchInterface();
                    });
                    var searchInterface = Coveo.$("." + Ui.Component.computeCssClassNameForType(Ui.SearchInterface.ID));
                    Coveo.$(searchInterface).append(glass);
                }
            };
            ToggleButton.ID = 'ToggleButton';
            return ToggleButton;
        })(Ui.Component);
        Ui.ToggleButton = ToggleButton;

        Ui.CoveoJQuery.registerAutoCreateComponent(ToggleButton);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultFoldingOptions = (function (_super) {
            __extends(DefaultFoldingOptions, _super);
            function DefaultFoldingOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute("data-field");

                this.childField = this.loadStringFromAttribute("data-child-field", "@systopparentid");
                this.parentField = this.loadStringFromAttribute("data-parent-field", "@syscontainsattachment");

                this.range = this.loadNumberFromAttribute("data-range", 2);
                var rearrange = this.loadStringFromAttribute("data-rearrange");
                if (Coveo.Utils.isNonEmptyString(rearrange)) {
                    this.rearrange = Ui.SortCriteria.parse(rearrange);
                }

                this.enableExpand = this.loadBooleanFromAttribute("data-enable-expand", true);
                this.expandExpression = this.loadStringFromAttribute("data-expand-expression");
                this.maximumExpandedResults = this.loadNumberFromAttribute("data-maximum-expanded-results", 100);
                this.expandFoldingField = this.loadStringFromAttribute("data-expand-folding-field");

                Coveo.Assert.exists(this.field);
                Coveo.Assert.exists(this.field.indexOf('@') == 0);
                Coveo.Assert.exists(this.range);
                Coveo.Assert.exists(this.maximumExpandedResults);
            }
            return DefaultFoldingOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultFoldingOptions = DefaultFoldingOptions;

        var Folding = (function (_super) {
            __extends(Folding, _super);
            function Folding(element, options, bindings) {
                _super.call(this, element, Folding.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultFoldingOptions(element).merge(options);

                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, this.handleBuildingQuery);
                this.bind.onRoot(Coveo.Events.QueryEvents.preprocessResults, this.handlepreprocessResults);
            }
            /**
            * Convert ResultNode to QueryResult
            */
            Folding.resultNodeToQueryResult = function (resultNode) {
                var result = resultNode.result;
                result.attachments = _.map(_.sortBy(resultNode.children, 'score'), Folding.resultNodeToQueryResult);
                result.parentResult = resultNode.parent != null ? resultNode.parent.result : null;
                return result;
            };

            /**
            * Find the node in trees
            */
            Folding.findUniqueId = function (resultNodes, uniqueId) {
                for (var i = 0; i < resultNodes.length; i++) {
                    if (resultNodes[i].result.uniqueId == uniqueId) {
                        return resultNodes[i];
                    }
                    var resultNode = Folding.findUniqueId(resultNodes[i].children, uniqueId);
                    if (resultNode != null) {
                        return resultNode;
                    }
                }
                return null;
            };

            /**
            * From a list of results, return a list of results and their attachments
            * We use parentResult to build a tree of result
            */
            Folding.foldWithParent = function (queryResults) {
                var rootNode = {
                    score: Number.NEGATIVE_INFINITY,
                    children: [],
                    result: {}
                };

                _.each(queryResults, function (queryResult, i) {
                    var resultNode = Folding.findUniqueId(rootNode.children, queryResult.uniqueId);

                    // If he have no parent or is parent is him self, add it to the root
                    if (queryResult.parentResult == null || queryResult.parentResult.uniqueId == queryResult.uniqueId) {
                        // Add it only if he do not exist
                        if (resultNode == null) {
                            resultNode = {
                                result: queryResult,
                                score: i,
                                children: []
                            };
                            rootNode.children.push(resultNode);
                            resultNode.parent = rootNode;
                        }
                    } else {
                        // If the resultNode already exist
                        if (resultNode != null) {
                            resultNode.score = Math.min(i, resultNode.score);

                            // Remove himself from his parent because it will be added in his parent. This allowed to remove duplicate.
                            resultNode.parent.children = _.without(resultNode.parent.children, resultNode);
                        } else {
                            resultNode = {
                                result: queryResult,
                                score: i,
                                children: []
                            };
                        }

                        var parentResult = Folding.findUniqueId(rootNode.children, queryResult.parentResult.uniqueId);

                        // If the parent does not already exist, create it and add it the root
                        if (parentResult == null) {
                            parentResult = {
                                result: queryResult.parentResult,
                                score: Number.POSITIVE_INFINITY,
                                children: []
                            };
                            rootNode.children.push(parentResult);
                            parentResult.parent = rootNode;
                        }

                        // Add the resultNode to parent
                        parentResult.children.push(resultNode);
                        resultNode.parent = parentResult;
                        var parent = parentResult;
                        while (parent != null && resultNode.score < parent.score) {
                            parent.score = resultNode.score;
                            parent = parent.parent;
                        }
                    }
                });
                return Folding.resultNodeToQueryResult(rootNode).attachments;
            };

            /**
            * 99.9% of the folding case will be alright with those default functions.
            * Otherwise use the options getResult and getMoreResults
            */
            Folding.defaultGetResult = function (result) {
                var results = result.childResults || [];

                // Add the top result at the top of the list
                results.unshift(result);

                // Empty childResults just to make it more clean
                result.childResults = [];

                // Fold those results
                results = Folding.foldWithParent(results);

                // The first result is the top one
                var topResult = results.shift();

                // All other the results are childResults
                topResult.childResults = results;
                return topResult;
            };
            Folding.defaultGetMoreResults = function (results) {
                // The result are flat, just do the fold
                return Folding.foldWithParent(results);
            };

            Folding.prototype.handleBuildingQuery = function (e, data) {
                Coveo.Assert.exists(data);

                if (!this.disabled) {
                    data.queryBuilder.childField = this.options.childField;
                    data.queryBuilder.parentField = this.options.parentField;
                    data.queryBuilder.filterField = this.options.field;
                    data.queryBuilder.filterFieldRange = this.options.range;
                }
            };

            Folding.prototype.handlepreprocessResults = function (e, data) {
                Coveo.Assert.exists(data);
                Coveo.Assert.check(!data.results._folded, "Two folding component are active at the same time for the same tab. Can't process result !");
                data.results._folded = true;

                var queryResults = data.results;

                var getResult = this.options.getResult || Folding.defaultGetResult;
                queryResults.results = _.map(queryResults.results, getResult);
                this.addLoadMoreHandler(queryResults.results, data.query);
            };

            Folding.prototype.addLoadMoreHandler = function (results, originalQuery) {
                var _this = this;
                return _.map(results, function (result) {
                    if (_this.options.enableExpand && !Coveo.Utils.isNullOrUndefined(result.raw[_this.options.field.substr(1)])) {
                        result.moreResults = function () {
                            return _this.moreResults(result, originalQuery);
                        };
                    }
                    return result;
                });
            };

            Folding.prototype.moreResults = function (result, originalQuery) {
                var _this = this;
                var deferred = Coveo.$.Deferred();

                var query = new Ui.QueryBuilder();
                query.numberOfResults = this.options.maximumExpandedResults;

                var fieldValue = result.raw[this.options.field.substr(1)];

                if (Coveo.Utils.isNonEmptyString(fieldValue)) {
                    query.advancedExpression.addFieldExpression(this.options.field, '=', [fieldValue]);
                }

                if (Coveo.Utils.isNonEmptyString(originalQuery.q)) {
                    // We add keywords to get the highlight and we add @sysuri to get all results
                    query.expression.add('(' + originalQuery.q + ') OR @sysuri');
                }

                if (Coveo.Utils.isNonEmptyString(this.options.expandExpression)) {
                    query.constantExpression.add(this.options.expandExpression);
                }

                if (this.options.parentField != null) {
                    query.parentField = this.options.parentField;
                }
                if (this.options.childField != null) {
                    query.childField = this.options.childField;
                }

                if (this.options.rearrange) {
                    this.options.rearrange.putInQueryBuilder(query);
                } else {
                    query.sortCriteria = originalQuery.sortCriteria;
                    query.sortField = originalQuery.sortField;
                }

                var builtQuery = query.build();
                this.queryController.getEndpoint().search(builtQuery).done(function (results) {
                    Coveo.QueryUtils.setIndexAndUidOnQueryResults(builtQuery, results, result.queryUid);
                    Coveo.QueryUtils.setStateObjectOnQueryResults(_this.queryStateModel.get(), results);
                    _this.handlePreprocessMoreResults(results);
                    deferred.resolve(results.results);
                });

                return deferred;
            };

            Folding.prototype.handlePreprocessMoreResults = function (queryResults) {
                var getResults = this.options.getMoreResults || Folding.defaultGetMoreResults;
                queryResults.results = getResults(queryResults.results);
            };
            Folding.ID = 'Folding';
            return Folding;
        })(Ui.Component);
        Ui.Folding = Folding;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(Folding);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultFoldingOptions = (function (_super) {
            __extends(DefaultResultFoldingOptions, _super);
            function DefaultResultFoldingOptions(element) {
                _super.call(this, element);
                this.normalCaption = this.loadLocalizedStringFromAttribute("data-normal-caption");
                this.expandedCaption = this.loadLocalizedStringFromAttribute("data-expanded-caption");
                this.moreCaption = this.loadLocalizedStringFromAttribute("data-more-caption", Ui.l.ShowMore());
                this.lessCaption = this.loadLocalizedStringFromAttribute("data-less-caption", Ui.l.ShowLess());
                this.oneResultCaption = this.loadLocalizedStringFromAttribute("data-one-result-caption", Ui.l.DisplayingTheOnlyMessage());

                this.resultTemplate = this.loadResultTemplateFromSelectorAttribute('data-result-template-selector');
                this.resultTemplate = this.loadResultTemplateFromIdAttribute('data-result-template-id', this.resultTemplate);
                this.resultTemplate = this.loadChildResultTemplateFromSelector('.result-template', this.resultTemplate);
                this.resultTemplate = this.resultTemplate || new Ui.DefaultResultTemplate();
                Coveo.Assert.exists(this.resultTemplate);
            }
            return DefaultResultFoldingOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultFoldingOptions = DefaultResultFoldingOptions;

        var ResultFolding = (function (_super) {
            __extends(ResultFolding, _super);
            function ResultFolding(element, options, bindings, result) {
                _super.call(this, element, ResultFolding.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                this.showingMoreResults = false;
                this.options = new DefaultResultFoldingOptions(element).merge(options);
                Coveo.Assert.exists(result);

                this.buildElements();
                this.displayThoseResults(this.result.childResults);
                this.updateElementVisibility();

                if (this.result.childResults.length == 0 && !this.result.moreResults) {
                    Coveo.$(this.element).hide();
                }
            }
            ResultFolding.prototype.showMoreResults = function () {
                var _this = this;
                Coveo.Assert.exists(this.result.moreResults);

                this.cancelAnyPendingShowMore();
                this.moreResultsDeferred = this.result.moreResults();
                this.waitAnimation = Ui.JQueryUtils.getBasicLoadingDots().appendTo(this.results);
                this.updateElementVisibility();

                this.moreResultsDeferred.done(function (results) {
                    _this.showingMoreResults = true;
                    _this.displayThoseResults(results);
                    _this.updateElementVisibility(results.length);
                });

                this.moreResultsDeferred.always(function (results) {
                    _this.moreResultsDeferred = undefined;
                    _this.waitAnimation.detach();
                    _this.waitAnimation = undefined;
                });
            };

            ResultFolding.prototype.showLessResults = function () {
                this.cancelAnyPendingShowMore();
                this.showingMoreResults = false;
                this.displayThoseResults(this.result.childResults);
                this.updateElementVisibility();
                this.scrollToResultElement();
            };

            ResultFolding.prototype.buildElements = function () {
                this.buildHeader();
                this.buildResults();
                this.buildFooter();
            };

            ResultFolding.prototype.buildHeader = function () {
                var header = Coveo.$('<div/>').addClass('coveo-folding-header').appendTo(this.element);
                if (this.options.normalCaption != undefined && this.options.expandedCaption != undefined) {
                    this.normalCaption = Coveo.$('<div/>').addClass('coveo-folding-header-caption').text(this.options.normalCaption).appendTo(header);
                    this.expandedCaption = Coveo.$('<div/>').addClass('coveo-folding-header-caption').text(this.options.expandedCaption).appendTo(header);
                }
                this.onlyOneMessageCaption = Coveo.$('<div/>').addClass('coveo-folding-header-caption').text(this.options.oneResultCaption).appendTo(header);
            };

            ResultFolding.prototype.buildResults = function () {
                this.results = Coveo.$('<div/>').addClass('coveo-folding-results').appendTo(this.element);
            };

            ResultFolding.prototype.buildFooter = function () {
                var _this = this;
                var footer = Coveo.$('<div/>').addClass('coveo-folding-footer').appendTo(this.element.parentElement);

                if (this.result.moreResults) {
                    this.showMore = Coveo.$("<div/>").addClass("coveo-folding-footer-section-for-less").appendTo(footer).fastClick(function () {
                        return _this.showMoreResults();
                    });
                    this.showLess = Coveo.$("<div/>").addClass("coveo-folding-footer-section-for-more").appendTo(footer).fastClick(function () {
                        return _this.showLessResults();
                    });
                    var footerIconShowMore = Coveo.$("<div><span class='coveo-folding-footer-icon'></span></div>").addClass('coveo-more');
                    var footerIconShowLess = Coveo.$("<div><span class='coveo-folding-footer-icon'></span></div>").addClass('coveo-less');
                    var showMoreLink = Coveo.$('<a/>').addClass('coveo-folding-show-more').text(this.options.moreCaption);
                    var showLessLink = Coveo.$('<a/>').addClass('coveo-folding-show-less').text(this.options.lessCaption);
                    this.showMore.append(showMoreLink);
                    this.showLess.append(showLessLink);
                    this.showMore.append(footerIconShowMore);
                    this.showLess.append(footerIconShowLess);
                }
            };

            ResultFolding.prototype.updateElementVisibility = function (subResultsLength) {
                if (this.normalCaption) {
                    this.normalCaption.fastToggle(!this.showingMoreResults && this.result.childResults.length > 0);
                }
                if (this.expandedCaption) {
                    this.expandedCaption.fastToggle(this.showingMoreResults);
                }
                this.onlyOneMessageCaption.fastToggle(subResultsLength && subResultsLength == 1);

                if (this.showMore) {
                    this.showMore.fastToggle(!this.showingMoreResults && !Coveo.Utils.exists(this.moreResultsDeferred));
                    this.showLess.fastToggle(this.showingMoreResults);
                }

                Coveo.$(this.element).find('.coveo-show-if-normal').fastToggle(!this.showingMoreResults);
                Coveo.$(this.element).find('.coveo-show-if-expanded').fastToggle(this.showingMoreResults);
            };

            ResultFolding.prototype.scrollToResultElement = function () {
                var elementOffset = Coveo.$(this.element).closest('.CoveoResult').offset();
                var resultListElement = Coveo.$(this.root).find("." + Ui.Component.computeCssClassNameForType(Ui.ResultList.ID));
                var wasScrolled = false;
                if (resultListElement.length != 0) {
                    var resultList = resultListElement.coveo();
                    var resultListScrollContainer = resultList.options.mobileScrollContainer || resultList.options.infiniteScrollContainer;
                    var resultListIsScrollable = resultListScrollContainer.scrollHeight > Coveo.$(resultListScrollContainer).height();
                    if (resultListIsScrollable) {
                        wasScrolled = true;
                        Coveo.$(resultListScrollContainer).animate({
                            scrollTop: resultListScrollContainer.scrollTop + elementOffset.top - (Ui.Device.isMobileDevice() ? 50 : 0)
                        });
                    }
                }
                if (elementOffset.top < Coveo.$(window).scrollTop() && !wasScrolled) {
                    Coveo.$("html, body").animate({
                        scrollTop: elementOffset.top
                    });
                }
            };

            ResultFolding.prototype.displayThoseResults = function (results) {
                var _this = this;
                this.results.empty();
                _.each(results, function (result) {
                    _this.renderChildResult(result);
                });
            };

            ResultFolding.prototype.renderChildResult = function (childResult) {
                var oneChild = Coveo.$(this.options.resultTemplate.instantiateToElement(childResult)).addClass('coveo-child-result').appendTo(this.results);
                oneChild.toggleClass('coveo-normal-child-result', !this.showingMoreResults);
                oneChild.toggleClass('coveo-expanded-child-result', this.showingMoreResults);
                this.autoCreateComponentsInsideResult(oneChild.get(0), childResult);
            };

            ResultFolding.prototype.autoCreateComponentsInsideResult = function (element, result) {
                Coveo.Assert.exists(element);

                var initOptions = this.searchInterface.options;
                var initParameters = Coveo.$.extend({}, { options: initOptions }, this.getBindings(), { result: result });
                Ui.CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters);
            };

            ResultFolding.prototype.cancelAnyPendingShowMore = function () {
                if (this.moreResultsDeferred) {
                    this.moreResultsDeferred.reject();
                }

                Coveo.Assert.doesNotExists(this.moreResultsDeferred);
                Coveo.Assert.doesNotExists(this.waitAnimation);
            };
            ResultFolding.ID = "ResultFolding";
            return ResultFolding;
        })(Ui.Component);
        Ui.ResultFolding = ResultFolding;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(ResultFolding);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultDebugOptions = (function (_super) {
            __extends(DefaultDebugOptions, _super);
            function DefaultDebugOptions(element) {
                _super.call(this, element);
            }
            return DefaultDebugOptions;
        })(Ui.ComponentOptions);

        var Debug = (function (_super) {
            __extends(Debug, _super);
            function Debug(element, options, bindings) {
                var _this = this;
                _super.call(this, element, Debug.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultDebugOptions(element).merge(options);

                Coveo.$(this.root).on(Coveo.Events.ResultListEvents.newResultsDisplayed, function () {
                    return _this.handleNewResultsDisplayed();
                });
            }
            Debug.prototype.handleNewResultsDisplayed = function () {
                var _this = this;
                Coveo.$(this.root).find('.CoveoResult').dblclick(function (e) {
                    return _this.handleResultDoubleClick(e);
                });
            };

            Debug.prototype.handleResultDoubleClick = function (e) {
                var isResultLink = Coveo.$(e.target).hasClass(Ui.Component.computeCssClassNameForType(Ui.ResultLink.ID));
                if (e.altKey && !isResultLink) {
                    var result = Coveo.$(e.currentTarget).data('CoveoResult');
                    var element = this.buildResultInfo(result);
                    var modalbox = Coveo.ModalBox.open(element, { title: 'Debug', className: 'coveo-debug' });
                    Coveo.$(modalbox.wrapper.find('.coveo-title')).fastClick(function () {
                        return modalbox.close();
                    });
                    Coveo.$(modalbox.overlay).fastClick(function () {
                        return modalbox.close();
                    });

                    e.cancelBubble = true;
                    e.result = false;
                }
            };

            Debug.prototype.buildResultInfo = function (result) {
                Coveo.Assert.exists(result);

                var box = Coveo.$('<div/>');

                box.append(Coveo.$('<div/>').append(Coveo.$('<a/>').attr('href', result.clickUri).text(result.title || result.uri)));

                Coveo.$('<div>Properties</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildPropertyTable(result).appendTo(box);

                Coveo.$('<div>Fields</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildFieldTable(result).appendTo(box);

                Coveo.$('<div>Ranking Info</div>').addClass('coveo-debug-title').appendTo(box);
                this.buildRankingInfo(result).appendTo(box);

                return box;
            };

            Debug.prototype.buildPropertyTable = function (result) {
                var _this = this;
                Coveo.Assert.exists(result);

                var table = Coveo.$('<table/>').addClass('coveo-debug-property-table');
                var keys = _.keys(result).sort();
                _.each(keys, function (key) {
                    if (key == 'raw')
                        return;
                    if (key[0] != key.toLowerCase()[0])
                        return;

                    var tr = Coveo.$('<tr/>').appendTo(table);
                    Coveo.$('<td/>').addClass('coveo-debug-property-name').text(key).appendTo(tr);
                    Coveo.$('<td/>').addClass('coveo-debug-property-value').append(_this.formatValue(result[key])).appendTo(tr);
                });

                return table;
            };

            Debug.prototype.buildFieldTable = function (result) {
                var _this = this;
                Coveo.Assert.exists(result);

                var table = Coveo.$('<table/>').addClass('coveo-debug-fields-table');
                var keys = _.keys(result.raw).sort();
                _.each(keys, function (key) {
                    var tr = Coveo.$('<tr/>').appendTo(table);
                    Coveo.$('<td/>').addClass('coveo-debug-field-name').text('@' + key).appendTo(tr);
                    Coveo.$('<td/>').addClass('coveo-debug-field-value').append(_this.formatValue(result.raw[key])).appendTo(tr);
                });

                return table;
            };

            Debug.prototype.buildRankingInfo = function (result) {
                Coveo.Assert.exists(result);

                return Coveo.$('<div/>').addClass('coveo-debug-ranking-info').text(result.rankingInfo);
            };

            Debug.prototype.formatValue = function (value) {
                if (Coveo.Utils.isNonEmptyString(value) && value.indexOf('http') == 0) {
                    return Coveo.$('<a/>').attr('href', value).text(value);
                } else {
                    return Coveo.$('<span/>').text(value);
                }
            };
            Debug.ID = 'Debug';
            return Debug;
        })(Ui.Component);
        Ui.Debug = Debug;

        Ui.CoveoJQuery.registerAutoCreateComponent(Debug);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultTabGroupMenuOptions = (function (_super) {
            __extends(DefaultTabGroupMenuOptions, _super);
            function DefaultTabGroupMenuOptions(element) {
                _super.call(this, element);
                this.menuDelay = this.loadNumberFromAttribute("data-menu-delay", 300);
            }
            return DefaultTabGroupMenuOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultTabGroupMenuOptions = DefaultTabGroupMenuOptions;

        var TabGroupMenu = (function (_super) {
            __extends(TabGroupMenu, _super);
            function TabGroupMenu(element, options, bindings) {
                _super.call(this, element, TabGroupMenu.ID, bindings);
                this.options = options;
                this.menuIsOpen = false;
                this.menuItemsContainerTemplate = _.template("<div class='coveo-menu-item-container'></div>");
                this.activeMenuItemTemplate = _.template("<a class='coveo-menu-item-active'><%= itemIcon %><%= caption %><%= showMoreIcon %> </a>");
                this.activeMenuItemIconTemplate = _.template("<span class='coveo-icon <%= _class %>'></span>");
                this.activeMenuItemCaptionTemplate = _.template("<span class='coveo-caption'><%= text %></span>");
                this.options = new DefaultTabGroupMenuOptions(element).merge(options);
                this.initQueryStateEvents();
                this.initMiscEvents();
            }
            TabGroupMenu.prototype.open = function () {
                this.renderMenu();
                this.menuItemsContainer.css("min-width", this.activeMenuItemDisplay.outerWidth());
                this.menuItemsContainer.show();
                this.activeMenuItemDisplay.addClass('coveo-menu-open');
                this.menuIsOpen = true;
            };

            TabGroupMenu.prototype.close = function () {
                this.menuItemsContainer.hide();
                this.activeMenuItemDisplay.removeClass('coveo-menu-open');
                this.menuIsOpen = false;
            };

            TabGroupMenu.prototype.handleClick = function (e) {
                if (this.targetIsAMenuItem(e)) {
                    this.handleClickOnMenuItem(e);
                } else {
                    this.handleClickOnMenu();
                }
            };

            TabGroupMenu.prototype.handleClickOnMenuItem = function (e) {
                var tabGroupItem = Ui.Component.get(this.getCorrectTarget(e).get(0), Ui.TabGroup);
                this.selectMenuItem(this.getItemInMenuById(tabGroupItem.getId()));
                this.close();
                this.queryController.deferExecuteQuery();
            };

            TabGroupMenu.prototype.handleClickOnMenu = function () {
                if (this.menuIsOpen) {
                    this.close();
                } else {
                    this.open();
                }
            };

            TabGroupMenu.prototype.handleMouseLeave = function (e) {
                this.close();
            };

            TabGroupMenu.prototype.handleAfterInitialization = function () {
                this.initMenuItems();
                var activeTabGroupItemId = this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.tg);
                this.selectMenuItem(this.getItemInMenuById(activeTabGroupItemId));
            };

            TabGroupMenu.prototype.handleQueryStateChange = function (e, args) {
                Coveo.Assert.exists(args);
                this.selectMenuItem(this.getItemInMenuById(args.value));
            };

            TabGroupMenu.prototype.initMenuItems = function () {
                var _this = this;
                this.menuItemsContainer = Coveo.$(this.menuItemsContainerTemplate()).hide();
                this.activeMenuItemDisplay = Coveo.$("<div></div>");
                Coveo.$(this.element).append(this.activeMenuItemDisplay, this.menuItemsContainer);
                this.menuItems = _.map(Coveo.$(this.element).find("." + Ui.Component.computeCssClassNameForType(Ui.TabGroup.ID)), function (elementInside) {
                    _this.menuItemsContainer.append(elementInside);
                    return { tabGroup: Coveo.$(elementInside).coveo(), element: Coveo.$(elementInside) };
                });
            };

            TabGroupMenu.prototype.initQueryStateEvents = function () {
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.tg);
                Coveo.$(this.root).on(eventName, Coveo.$.proxy(this.handleQueryStateChange, this));
            };

            TabGroupMenu.prototype.initMiscEvents = function () {
                var _this = this;
                Coveo.$(this.root).on(Coveo.Events.InitializationEvents.afterInitialization, function () {
                    return _this.handleAfterInitialization();
                });
                Coveo.$(this.element).fastClick(function (e) {
                    _this.handleClick(e);
                });
                Coveo.$(this.element).mouseleave(function (e) {
                    setTimeout(function () {
                        _this.handleMouseLeave(e);
                    }, _this.options.menuDelay);
                });
            };

            TabGroupMenu.prototype.renderDisplayActiveMenuItem = function () {
                this.activeMenuItemDisplay.empty();
                this.activeMenuItemDisplay.html(this.activeMenuItemTemplate({
                    itemIcon: this.activeMenuItemIconTemplate({
                        _class: this.activeMenuItem.tabGroup.getIcon()
                    }),
                    caption: this.activeMenuItemCaptionTemplate({
                        text: this.activeMenuItem.tabGroup.getTitle()
                    }),
                    showMoreIcon: this.activeMenuItemIconTemplate({
                        _class: 'coveo-show-more'
                    })
                }));
            };

            TabGroupMenu.prototype.renderMenu = function () {
                _.each(this.getInactiveMenuItems(), function (inactive) {
                    inactive.element.show();
                });
                this.activeMenuItem.element.hide();
            };

            TabGroupMenu.prototype.selectMenuItem = function (menuItem) {
                if (this.menuItems != undefined) {
                    if (menuItem == undefined) {
                        menuItem = this.menuItems[0];
                    }
                    this.activeMenuItem = menuItem;
                    this.activeMenuItem.tabGroup.select();
                    this.renderDisplayActiveMenuItem();
                }
            };

            TabGroupMenu.prototype.getItemInMenuById = function (id) {
                return _.find(this.menuItems, function (menuItem) {
                    return menuItem.tabGroup.getId() == id;
                });
            };

            TabGroupMenu.prototype.getItemInMenuByElement = function (element) {
                return _.find(this.menuItems, function (menuItem) {
                    return Coveo.Utils.objectEqual(element, menuItem.element);
                });
            };

            TabGroupMenu.prototype.getInactiveMenuItems = function () {
                var _this = this;
                return _.reject(this.menuItems, function (menuItem) {
                    return Coveo.Utils.objectEqual(menuItem, _this.activeMenuItem);
                });
            };

            TabGroupMenu.prototype.getItemMenuClass = function () {
                return Ui.Component.computeCssClassNameForType(Ui.TabGroup.ID);
            };

            TabGroupMenu.prototype.getCorrectTarget = function (e) {
                if (Coveo.$(e.target).parent().hasClass(this.getItemMenuClass())) {
                    return Coveo.$(e.target).parent();
                }
                return Coveo.$(e.target);
            };

            TabGroupMenu.prototype.targetIsAMenuItem = function (e) {
                return this.getCorrectTarget(e).hasClass(this.getItemMenuClass());
            };
            TabGroupMenu.ID = 'TabGroupMenu';
            return TabGroupMenu;
        })(Ui.Component);
        Ui.TabGroupMenu = TabGroupMenu;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TabGroupMenu);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultTabGroupOptions = (function (_super) {
            __extends(DefaultTabGroupOptions, _super);
            function DefaultTabGroupOptions(element) {
                _super.call(this, element);
                this.id = this.loadStringFromAttribute("data-id");
                this.icon = this.loadStringFromAttribute("data-icon", "");
                this.expression = this.loadStringFromAttribute("data-expression");
                Coveo.Assert.exists(this.id);
            }
            return DefaultTabGroupOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultTabGroupOptions = DefaultTabGroupOptions;

        var TabGroup = (function (_super) {
            __extends(TabGroup, _super);
            function TabGroup(element, options, bindings) {
                _super.call(this, element, TabGroup.ID, bindings);
                this.options = options;
                this.isSelected = false;
                this.iconTemplate = _.template("<span class='coveo-icon <%= _class %>'></span>");
                this.options = new DefaultTabGroupOptions(element).merge(options);
                this.title = Coveo.$(this.element).text();

                this.initQueryEvents();
                this.initQueryStateEvents();
                Coveo.$(this.element).prepend(this.iconTemplate({
                    _class: this.options.icon
                }));
            }
            TabGroup.prototype.select = function () {
                this.actionOnSelect();
                this.updateQueryStateModel();
            };

            TabGroup.prototype.getTitle = function () {
                return this.title;
            };

            TabGroup.prototype.getIcon = function () {
                return this.options.icon;
            };

            TabGroup.prototype.getId = function () {
                return this.options.id;
            };

            TabGroup.prototype.actionOnSelect = function () {
                this.hideTabsNotInThisGroup();
                this.isSelected = true;
            };

            TabGroup.prototype.actionOnUnSelect = function () {
                this.isSelected = false;
            };

            TabGroup.prototype.updateQueryStateModel = function () {
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.tg, this.options.id);
            };

            TabGroup.prototype.initQueryEvents = function () {
                Coveo.$(this.root).on(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQueryEvents, this));
            };

            TabGroup.prototype.initQueryStateEvents = function () {
                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.tg);
                Coveo.$(this.root).on(eventName, Coveo.$.proxy(this.handleQueryStateChange, this));
            };

            TabGroup.prototype.handleBuildingQueryEvents = function (e, args, foo) {
                Coveo.Assert.exists(args);
                if (this.isSelected && Coveo.Utils.isNonEmptyString(this.options.expression)) {
                    args.queryBuilder.advancedExpression.add(this.options.expression);
                }
            };

            TabGroup.prototype.handleQueryStateChange = function (e, args) {
                Coveo.Assert.exists(args);
                if (args.value == this.options.id) {
                    this.actionOnSelect();
                } else {
                    this.actionOnUnSelect();
                }
            };

            TabGroup.prototype.hideTabsNotInThisGroup = function () {
                var _this = this;
                var allTabs = this.getAllTabs();
                _.each(allTabs, function (tab) {
                    if (_this.isElementIncludedInTabGroup(tab.element)) {
                        tab.enable();
                    } else {
                        tab.disable();
                    }
                });
            };

            TabGroup.prototype.getAllVisibleTab = function () {
                return _.filter(this.getAllTabs(), function (tab) {
                    return Coveo.$(tab.element).is(":visible");
                });
            };

            TabGroup.prototype.getAllTabs = function () {
                return this.searchInterface.components(Ui.Tab.ID);
            };

            TabGroup.prototype.isElementIncludedInTabGroup = function (element) {
                var tabGroup = Coveo.$(element).attr("data-tab-group");
                return tabGroup == undefined || _.contains(tabGroup.split(','), this.options.id);
            };
            TabGroup.ID = "TabGroup";
            return TabGroup;
        })(Ui.Component);
        Ui.TabGroup = TabGroup;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TabGroup);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultAnalyticsOptions = (function (_super) {
            __extends(DefaultAnalyticsOptions, _super);
            function DefaultAnalyticsOptions(element) {
                _super.call(this, element);
                this.user = this.loadStringFromAttribute("data-user");
                this.endpoint = this.loadStringFromAttribute("data-endpoint", Coveo.Rest.AnalyticsEndpoint.DEFAULT_ANALYTICS_URI);
                this.token = this.loadStringFromAttribute("data-token", DefaultAnalyticsOptions.getDefaultToken());
                this.searchHub = this.loadStringFromAttribute("data-search-hub", "default");
                this.sendToCloud = this.loadBooleanFromAttribute("data-send-to-cloud", true);
            }
            DefaultAnalyticsOptions.getDefaultToken = function () {
                var defaultEndpoint = Coveo.Rest.SearchEndpoint.endpoints['default'];
                if (defaultEndpoint) {
                    return defaultEndpoint.options.accessToken;
                } else {
                    return undefined;
                }
            };
            return DefaultAnalyticsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultAnalyticsOptions = DefaultAnalyticsOptions;

        var Analytics = (function (_super) {
            __extends(Analytics, _super);
            function Analytics(element, options, bindings) {
                _super.call(this, element, Analytics.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultAnalyticsOptions(element).merge(options);
                this.initializeAnalyticsClient();
                Coveo.Assert.exists(this.client);
            }
            Analytics.prototype.initializeAnalyticsClient = function () {
                if (Coveo.Utils.isNonEmptyString(this.options.endpoint)) {
                    var endpoint = new Coveo.Rest.AnalyticsEndpoint({
                        token: this.options.token,
                        userId: this.options.user,
                        serviceUrl: this.options.endpoint
                    });

                    this.client = new Ui.LiveAnalyticsClient(endpoint, this.root || this.element, this.options.searchHub, this.options.sendToCloud);
                } else {
                    this.client = new Ui.NoopAnalyticsClient();
                }
            };
            Analytics.ID = 'Analytics';
            return Analytics;
        })(Ui.Component);
        Ui.Analytics = Analytics;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        Ui.AnalyticsActionCauseList = {
            interfaceLoad: {
                name: "interfaceLoad",
                type: 'interface'
            },
            interfaceChange: {
                name: "interfaceChange",
                type: 'interface',
                metaMap: { interfaceChangeTo: 1 }
            },
            contextRemove: {
                name: "contextRemove",
                type: 'misc',
                metaMap: { contextName: 1 }
            },
            didyoumeanAutomatic: {
                name: "didyoumeanAutomatic",
                type: 'misc'
            },
            didyoumeanClick: {
                name: "didyoumeanClick",
                type: 'misc'
            },
            resultsSort: {
                name: "resultsSort",
                type: 'misc',
                metaMap: { resultsSortBy: 1 }
            },
            searchboxSubmit: {
                name: "searchboxSubmit",
                type: 'search box'
            },
            searchboxClear: {
                name: "searchboxClear",
                type: 'search box'
            },
            searchboxAsYouType: {
                name: "searchboxAsYouType",
                type: 'search box'
            },
            breadcrumbFacet: {
                name: "breadcrumbFacet",
                type: 'breadcrumb',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            breadcrumbResetAll: {
                name: "breadcrumbResetAll",
                type: 'breadcrumb'
            },
            documentTag: {
                name: "documentTag",
                type: 'document',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            documentField: {
                name: "documentField",
                type: 'document',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            documentQuickView: {
                name: "documentQuickView",
                type: 'document',
                metaMap: { documentTitle: 1, documentURL: 2 }
            },
            documentOpen: {
                name: "documentOpen",
                type: 'document',
                metaMap: { documentTitle: 1, documentURL: 2 }
            },
            omniboxSearch: {
                name: "omniboxSearch",
                type: 'omnibox'
            },
            omniboxFacet: {
                name: "omniboxFacet",
                type: 'omnibox',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            omniboxAnalytics: {
                name: "omniboxAnalytics",
                type: 'omnibox'
            },
            omniboxField: {
                name: "omniboxField",
                type: 'omnibox'
            },
            facetClearAll: {
                name: "facetClearAll",
                type: 'facet',
                metaMap: { facetId: 1 }
            },
            facetSearch: {
                name: "facetSearch",
                type: 'facet',
                metaMap: { facetId: 1 }
            },
            facetToggle: {
                name: "facetToggle",
                type: 'facet',
                metaMap: { facetId: 1, facetOperatorBefore: 2, facetOperatorAfter: 3 }
            },
            facetRangeSlider: {
                name: "facetRangeSlider",
                type: 'facet',
                metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
            },
            facetRangeGraph: {
                name: "facetRangeGraph",
                type: 'facet',
                metaMap: { facetId: 1, facetRangeStart: 2, facetRangeEnd: 3 }
            },
            facetSelect: {
                name: "facetSelect",
                type: 'facet',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            facetSelectAll: {
                name: "facetSelectAll",
                type: 'facet',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            facetDeselect: {
                name: "facetDeselect",
                type: 'facet',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            facetExclude: {
                name: "facetExclude",
                type: 'facet',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            facetUnexclude: {
                name: "facetUnexclude",
                type: 'facet',
                metaMap: { facetId: 1, facetValue: 2 }
            },
            facetSortValues: {
                name: "facetSortValues",
                type: 'facet',
                metaMap: { facetId: 1, facetSortBy: 2 }
            },
            errorBack: {
                name: "errorBack",
                type: 'errors'
            },
            errorClearQuery: {
                name: "errorClearQuery",
                type: 'errors'
            },
            errorRetry: {
                name: "errorRetry",
                type: 'errors'
            },
            expandToFullUI: {
                name: "expandToFullUI",
                type: 'interface'
            },
            caseCreate: {
                name: "caseCreate",
                type: "case"
            },
            casecontextAdd: {
                name: "casecontextAdd",
                type: "casecontext",
                metaMap: { caseID: 5 }
            },
            casecontextRemove: {
                name: "casecontextRemove",
                type: "casecontext",
                metaMap: { caseID: 5 }
            },
            preferencesChange: {
                name: "preferencesChange",
                type: 'preferences',
                metaMap: { preferenceName: 1, preferenceType: 2 }
            },
            caseAttach: {
                name: "caseAttach",
                type: 'case',
                metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
            },
            caseDetach: {
                name: "caseDetach",
                type: 'case',
                metaMap: { documentTitle: 1, resultUriHash: 3, articleID: 4, caseID: 5 }
            },
            customfiltersChange: {
                name: "customfiltersChange",
                type: 'customfilters',
                metaMap: { customFilterName: 1, customFilterType: 2, customFilterExpression: 3 }
            }
        };
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultTopFieldSuggestionsOptions = (function (_super) {
            __extends(DefaultTopFieldSuggestionsOptions, _super);
            function DefaultTopFieldSuggestionsOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute("data-field");
                this.queryOverride = this.loadStringFromAttribute("data-query-override", "");
                this.omniboxSuggestionOptions = new Ui.DefaultSuggestionForOmniBoxOptions(element, { headerTitle: Ui.l.SuggestedResults(), omniBoxZIndex: 51 });
            }
            return DefaultTopFieldSuggestionsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultTopFieldSuggestionsOptions = DefaultTopFieldSuggestionsOptions;

        var TopFieldSuggestions = (function (_super) {
            __extends(TopFieldSuggestions, _super);
            function TopFieldSuggestions(element, options, bindings) {
                _super.call(this, element, TopFieldSuggestions.ID, bindings);
                this.options = options;
                this.topFieldElementHeaderTemplate = _.template("<div class='coveo-top-field-suggestion-header'>\
        <span class='coveo-icon-top-field'></span> \
        <span class='coveo-caption'><%= headerTitle %></span> \
      </div>");
                this.topFieldElementRowTemplate = _.template("<div class='coveo-omnibox-selectable coveo-top-field-suggestion-row'> \
        <%= data %> \
      </div>");

                this.options = new DefaultTopFieldSuggestionsOptions(element).mergeDeep(options);

                Coveo.Assert.check(Coveo.Utils.isCoveoField(this.options.field), this.options.field + ' is not a valid field');

                this.options.omniboxSuggestionOptions.onSelect = this.options.omniboxSuggestionOptions.onSelect || this.onRowSelection;
                var suggestionStructure = {
                    header: { template: this.topFieldElementHeaderTemplate, title: this.options.omniboxSuggestionOptions.headerTitle },
                    row: this.topFieldElementRowTemplate
                };
                this.suggestionForOmniBox = new Ui.SuggestionForOmniBox(suggestionStructure, Coveo.$.proxy(this.options.omniboxSuggestionOptions.onSelect, this));

                Coveo.$(this.root).on(Coveo.Events.OmniBoxEvents.populateOmniBox, Coveo.$.proxy(this.handlePopulateOmniBox, this));
            }
            TopFieldSuggestions.prototype.handlePopulateOmniBox = function (e, args) {
                var _this = this;
                Coveo.Assert.exists(args);

                if (!this.disabled) {
                    var valueToSearch = args.completeQueryExpression.word;
                    var deferred = Coveo.$.Deferred();
                    var searchDeferred = this.queryController.getEndpoint().listFieldValues(this.buildListFieldValueRequest(valueToSearch));

                    searchDeferred.done(function (results) {
                        var element = _this.suggestionForOmniBox.buildOmniBoxElement(results, args);
                        deferred.resolve({
                            element: element == undefined ? undefined : element.get(0),
                            zIndex: _this.options.omniboxSuggestionOptions.omniBoxZIndex
                        });
                    });

                    searchDeferred.fail(function () {
                        _this.resolveWithUndefined(deferred);
                    });

                    args.rows.push({
                        deferred: deferred
                    });
                }
            };

            TopFieldSuggestions.prototype.resolveWithUndefined = function (deferred) {
                deferred.resolve({
                    element: undefined
                });
            };

            TopFieldSuggestions.prototype.onRowSelection = function (value, args) {
                var _this = this;
                args.clear();
                args.closeOmniBox();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, value);
                this.queryController.deferExecuteQuery({
                    beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxField, {});
                    }
                });
            };

            TopFieldSuggestions.prototype.buildListFieldValueRequest = function (valueToSearch) {
                return {
                    field: this.options.field,
                    ignoreAccents: true,
                    sortCriteria: 'occurrences',
                    maximumNumberOfValues: this.options.omniboxSuggestionOptions.numberOfSuggestions,
                    patternType: "Wildcards",
                    pattern: "*" + valueToSearch + "*",
                    queryOverride: this.options.queryOverride
                };
            };
            TopFieldSuggestions.ID = "TopFieldSuggestions";
            return TopFieldSuggestions;
        })(Coveo.Ui.Component);
        Ui.TopFieldSuggestions = TopFieldSuggestions;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TopFieldSuggestions);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultTopAnalyticsSuggestionsOptions = (function (_super) {
            __extends(DefaultTopAnalyticsSuggestionsOptions, _super);
            function DefaultTopAnalyticsSuggestionsOptions(element, defaultSuggestionOptions) {
                _super.call(this, element);

                this.omniboxSuggestionOptions = new Ui.DefaultSuggestionForOmniBoxOptions(element, defaultSuggestionOptions);
            }
            return DefaultTopAnalyticsSuggestionsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultTopAnalyticsSuggestionsOptions = DefaultTopAnalyticsSuggestionsOptions;

        var TopAnalyticsSuggestions = (function (_super) {
            __extends(TopAnalyticsSuggestions, _super);
            function TopAnalyticsSuggestions(element, options, bindings) {
                _super.call(this, element, TopAnalyticsSuggestions.ID, bindings);
                this.options = options;
                this.topAnalyticsElementHeaderTemplate = _.template("<div class='coveo-top-analytics-suggestion-header'>\
        <span class='coveo-icon-top-analytics'></span> \
        <span class='coveo-caption'><%= headerTitle %></span> \
      </div>");
                this.topAnalyticsElementRowTemplate = _.template("<div class='coveo-omnibox-selectable coveo-top-analytics-suggestion-row'> \
        <%= data %> \
      </div>");

                this.options = new DefaultTopAnalyticsSuggestionsOptions(element, { headerTitle: Ui.l.SuggestedQueries(), omniBoxZIndex: 52 }).mergeDeep(options);

                this.options.omniboxSuggestionOptions.onSelect = this.options.omniboxSuggestionOptions.onSelect || this.onRowSelection;
                var suggestionStructure = {
                    header: { template: this.topAnalyticsElementHeaderTemplate, title: this.options.omniboxSuggestionOptions.headerTitle },
                    row: this.topAnalyticsElementRowTemplate
                };
                this.suggestionForOmniBox = new Ui.SuggestionForOmniBox(suggestionStructure, Coveo.$.proxy(this.options.omniboxSuggestionOptions.onSelect, this));
                Coveo.$(this.root).on(Coveo.Events.OmniBoxEvents.populateOmniBox, Coveo.$.proxy(this.handlePopulateOmnibox, this));
            }
            TopAnalyticsSuggestions.prototype.handlePopulateOmnibox = function (e, args) {
                var _this = this;
                Coveo.Assert.exists(args);

                if (!this.disabled) {
                    var deferred = Coveo.$.Deferred();
                    var searchDeferred = this.usageAnalytics.getTopQueries({ pageSize: this.options.omniboxSuggestionOptions.numberOfSuggestions, queryText: args.completeQueryExpression.word });

                    searchDeferred.done(function (results) {
                        var resultsToBuildWith = _.map(results, function (result) {
                            return {
                                value: result
                            };
                        });
                        var element = _this.suggestionForOmniBox.buildOmniBoxElement(resultsToBuildWith, args);
                        deferred.resolve({
                            element: element == undefined ? undefined : element.get(0),
                            zIndex: _this.options.omniboxSuggestionOptions.omniBoxZIndex
                        });
                    });
                    searchDeferred.fail(function () {
                        _this.resolveWithUndefined(deferred);
                    });
                    args.rows.push({ deferred: deferred });
                }
            };

            TopAnalyticsSuggestions.prototype.onRowSelection = function (value, args) {
                var _this = this;
                args.clear();
                args.closeOmniBox();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.q, value);
                this.queryController.deferExecuteQuery({ beforeExecuteQuery: function () {
                        return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.omniboxAnalytics, {});
                    } });
            };

            TopAnalyticsSuggestions.prototype.resolveWithUndefined = function (deferred) {
                deferred.resolve({
                    element: undefined
                });
            };
            TopAnalyticsSuggestions.ID = "TopAnalyticsSuggestions";
            return TopAnalyticsSuggestions;
        })(Coveo.Ui.Component);
        Ui.TopAnalyticsSuggestions = TopAnalyticsSuggestions;

        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(TopAnalyticsSuggestions);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
;
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultSuggestionForOmniBoxOptions = (function (_super) {
            __extends(DefaultSuggestionForOmniBoxOptions, _super);
            function DefaultSuggestionForOmniBoxOptions(element, defaultOpts) {
                _super.call(this, element);
                this.headerTitle = this.loadStringFromAttribute("data-header-title", defaultOpts.headerTitle);
                this.omniBoxZIndex = this.loadNumberFromAttribute("data-omnibox-z-index", defaultOpts.omniBoxZIndex);
                this.numberOfSuggestions = this.loadNumberFromAttribute("data-number-of-suggestions", defaultOpts.numberOfSuggestions || 5);
            }
            return DefaultSuggestionForOmniBoxOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultSuggestionForOmniBoxOptions = DefaultSuggestionForOmniBoxOptions;

        var SuggestionForOmniBox = (function () {
            function SuggestionForOmniBox(structure, onSelect) {
                this.structure = structure;
                this.onSelect = onSelect;
            }
            SuggestionForOmniBox.prototype.buildOmniBoxElement = function (results, args) {
                var element;
                if (results.length != 0) {
                    element = Coveo.$("<div></div>");
                    var header = this.buildElementHeader();
                    element.append(header);
                    var rows = this.buildRowElements(results, args);
                    _.each(rows, function (row) {
                        element.append(row);
                    });
                }
                return element;
            };

            SuggestionForOmniBox.prototype.buildElementHeader = function () {
                return Coveo.$(this.structure.header.template({
                    headerTitle: this.structure.header.title
                }));
            };

            SuggestionForOmniBox.prototype.buildRowElements = function (results, args) {
                var _this = this;
                var ret = [];
                _.each(results, function (result) {
                    var row = Coveo.$(_this.structure.row({
                        rawValue: result.value,
                        data: Ui.JQueryUtils.highlightElement(result.value, args.completeQueryExpression.word)
                    }));
                    row.fastClick(function () {
                        _this.onSelect.call(_this, result.value, args);
                    });
                    row.on("keyboardSelect", function () {
                        _this.onSelect.call(_this, result.value, args);
                    });
                    ret.push(row);
                });
                return ret;
            };
            return SuggestionForOmniBox;
        })();
        Ui.SuggestionForOmniBox = SuggestionForOmniBox;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultLoginOptions = (function (_super) {
            __extends(DefaultLoginOptions, _super);
            function DefaultLoginOptions(element) {
                _super.call(this, element);
                this.id = this.loadStringFromAttribute("data-id");
                this.caption = this.loadStringFromAttribute("data-caption", Ui.l.PleaseEnterYourCredentials(Coveo.Rest.SearchEndpoint.endpoints[this.id].getBaseUri()));
                this.autoTriggerQuery = this.loadBooleanFromAttribute("data-auto-trigger-query", true);
            }
            return DefaultLoginOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultLoginOptions = DefaultLoginOptions;

        var Login = (function (_super) {
            __extends(Login, _super);
            function Login(element, options, bindings) {
                _super.call(this, element, Login.ID, bindings);
                this.element = element;
                this.options = options;
                this.settingButtonTemplate = _.template("<div class='coveo-login-tab'>Login</div>");
                this.loginInfoTemplate = _.template("<div class='coveo-login-info'></div>");
                this.loginFormTemplate = _.template("<form class='coveo-login-form'></form>");
                this.userInputTemplate = _.template("<div class='coveo-input-container'>\
        <span class='coveo-username-icon'></span>\
        <input class='coveo-username' type='text' placeholder='" + Ui.l.Username() + "' autocorrect='off' autocapitalize='off' />\
      </div>");
                this.passwordInputTemplate = _.template("<div class='coveo-input-container'>\
        <span class='coveo-password-icon'></span>\
        <input class='coveo-password'  type='password' placeholder='" + Ui.l.Password() + "' autocorrect='off' autocapitalize='off' />\
      </div>");
                this.formSubmitTemplate = _.template("<button class='coveo-submit'type='submit'><div class='coveo-icon coveo-waiting'></div>" + Ui.l.GetStarted() + "</button>");
                this.loginFormContainerTemplate = _.template("<div class='coveo-login-form-container'>\
        <div class='coveo-login-form-container-logo'></div>\
      </div>");
                this.errorMessageTemplate = _.template("<div class='coveo-login-error-message'></div>");
                this.options = new DefaultLoginOptions(element).merge(options);
                Coveo.Assert.exists(this.options.id);
                Coveo.Assert.exists(Coveo.Rest.SearchEndpoint.endpoints[this.options.id]);

                this.isHidden = true;
                this.buildLoginButton();

                this.bind.onRoot(Coveo.Events.QueryEvents.queryError, this.handleQueryError);

                this.updateEndpointWithCredentials();
            }
            Login.prototype.getUser = function () {
                return window.localStorage.getItem(this.getLocalStorageKeyUser());
            };

            Login.prototype.setUser = function (user) {
                window.localStorage.setItem(this.getLocalStorageKeyUser(), user);
            };

            Login.prototype.getPassword = function () {
                return window.localStorage.getItem(this.getLocalStorageKeyPassword());
            };

            Login.prototype.setPassword = function (password) {
                window.localStorage.setItem(this.getLocalStorageKeyPassword(), password);
            };

            Login.prototype.createDom = function () {
                this.buildLoginForm();
                this.setLoginInfoMessage(this.options.caption);
            };

            Login.prototype.handleQueryError = function (e, args) {
                if (this.isAccessDeniedError(args.error)) {
                    this.showLoginPanel();
                }
            };

            Login.prototype.isAccessDeniedError = function (error) {
                return (error.status === 401) || (error.status === 403);
            };

            Login.prototype.handleBackButton = function () {
                this.loginFormContainer.hide();
                Coveo.$(document).off("backbutton");
            };

            Login.prototype.validateCredentials = function () {
                var _this = this;
                this.loginSubmit.addClass("coveo-waiting");
                this.errorMessage.removeClass("coveo-show");
                var url = Coveo.Rest.SearchEndpoint.endpoints[this.options.id].getBaseUri();

                Coveo.AjaxUtils.ajaxBasicAuth("GET", url, this.getUser(), this.getPassword(), function (res) {
                    _this.loginSubmit.removeClass("coveo-waiting");
                    _this.updateEndpointWithCredentials();
                    _this.hideLoginPanel();
                }, function (res) {
                    _this.loginSubmit.removeClass("coveo-waiting");
                    _this.errorMessage.html(Ui.l.BadUserPass()).addClass("coveo-show");
                });
            };

            Login.prototype.getBasicAuthBase64 = function () {
                return 'Basic ' + btoa(this.getUser() + ":" + this.getPassword());
            };

            Login.prototype.buildLoginForm = function () {
                var _this = this;
                this.errorMessage = Coveo.$(this.errorMessageTemplate());
                this.loginForm = Coveo.$(this.loginFormTemplate());
                this.loginInfo = Coveo.$(this.loginInfoTemplate());
                this.loginUser = Coveo.$(this.userInputTemplate());
                this.loginUser.keypress(function (e) {
                    return _this.handleInputKeypress(e);
                });
                this.loginPassword = Coveo.$(this.passwordInputTemplate());
                this.loginPassword.keypress(function (e) {
                    return _this.handleInputKeypress(e);
                });
                this.loginSubmit = Coveo.$(this.formSubmitTemplate());
                this.loginForm.append(this.loginInfo, this.loginUser, this.loginPassword, this.loginSubmit).hide();
                this.getOrCreateLoginFormContainer();
                this.loginFormContainer.append(this.errorMessage, this.loginForm);
                this.loadingAnimation = Coveo.$(this.searchInterface.options.firstLoadingAnimation);
                this.loginForm.submit(function (e) {
                    return _this.handleLoginFormSubmit(e);
                });
                this.loginSubmit.fastClick(function (e) {
                    return _this.handleLoginFormSubmit(e);
                });

                this.loginUser.find("input").val(this.getUser());
                this.loginPassword.find("input").val(this.getPassword());
            };

            Login.prototype.handleInputKeypress = function (e) {
                if (!this.isHidden && (e.keyCode == 13)) {
                    this.handleLoginFormSubmit(e);
                }
            };

            Login.prototype.getOrCreateLoginFormContainer = function () {
                this.loginFormContainer = Coveo.$(this.root).find(".coveo-login-form-container");
                if (this.loginFormContainer.length == 0) {
                    this.loginFormContainer = Coveo.$(this.loginFormContainerTemplate());
                    Coveo.$(this.root).append(this.loginFormContainer);
                }
            };

            Login.prototype.showLoginPanel = function () {
                this.isHidden = false;
                this.ensureDom();
                Ui.JQueryUtils.removeToggleClassOnSearchInterface();
                this.loginForm.show();
                this.loginFormContainer.show();
                if (Ui.Device.isPhonegap()) {
                    Coveo.$(document).on("backbutton", Coveo.$.proxy(this.handleBackButton, this));
                }
            };

            Login.prototype.hideLoginPanel = function () {
                this.isHidden = true;
                this.loginForm.hide();
                if (this.loginFormContainer.find('.coveo-login-form:visible').length == 0) {
                    this.loginFormContainer.hide();
                    this.queryController.executeQuery();
                }
            };

            Login.prototype.buildLoginButton = function () {
                var _this = this;
                if (Coveo.$(this.root).find(".coveo-login-tab").length == 0) {
                    Coveo.$(this.element).append(Coveo.$(this.settingButtonTemplate()));
                    Coveo.$(this.element).fastClick(function () {
                        _this.showLoginPanel();
                    });
                } else {
                    Coveo.$(this.element).hide();
                }
            };

            Login.prototype.handleLoginFormSubmit = function (e) {
                e.preventDefault();
                Ui.MobileUtils.hideIOSKeyboard(document.activeElement);
                this.setUser(this.loginUser.find('input').val());
                this.setPassword(this.loginPassword.find('input').val());
                this.validateCredentials();
            };

            Login.prototype.updateEndpointWithCredentials = function () {
                Coveo.Rest.SearchEndpoint.endpoints[this.options.id].options.password = this.getPassword();
                Coveo.Rest.SearchEndpoint.endpoints[this.options.id].options.username = this.getUser();
            };

            Login.prototype.setLoginInfoMessage = function (html) {
                this.loginInfo.html(html);
            };

            Login.prototype.getLocalStorageKeyUser = function () {
                return "coveo-user-" + this.options.id;
            };

            Login.prototype.getLocalStorageKeyPassword = function () {
                return "coveo-password-" + this.options.id;
            };
            Login.ID = 'Login';
            return Login;
        })(Ui.Component);
        Ui.Login = Login;

        Ui.CoveoJQuery.registerAutoCreateComponent(Login);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultAttachmentsOptions = (function (_super) {
            __extends(DefaultResultAttachmentsOptions, _super);
            function DefaultResultAttachmentsOptions(element) {
                _super.call(this, element);
                this.resultTemplate = this.loadResultTemplateFromSelectorAttribute('data-result-template-selector');
                this.resultTemplate = this.loadResultTemplateFromIdAttribute('data-result-template-id', this.resultTemplate);
                this.resultTemplate = this.loadChildResultTemplateFromSelector('.result-template', this.resultTemplate);
                this.resultTemplate = this.resultTemplate || new Ui.DefaultResultTemplate();
                Coveo.Assert.exists(this.resultTemplate);
                this.subResultTemplate = this.loadResultTemplateFromSelectorAttribute('data-sub-result-template-selector');
                this.subResultTemplate = this.loadResultTemplateFromIdAttribute('data-sub-result-template-id', this.subResultTemplate);
                this.subResultTemplate = this.loadChildResultTemplateFromSelector('.sub-result-template', this.subResultTemplate);
                this.subResultTemplate = this.subResultTemplate || this.resultTemplate;
                this.maximumAttachmentLevel = this.loadNumberFromAttribute("data-maximum-attachment-level", 5);
            }
            return DefaultResultAttachmentsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultAttachmentsOptions = DefaultResultAttachmentsOptions;

        var ResultAttachments = (function (_super) {
            __extends(ResultAttachments, _super);
            function ResultAttachments(element, options, bindings, result, attachmentLevel) {
                if (typeof attachmentLevel === "undefined") { attachmentLevel = 0; }
                _super.call(this, element, ResultAttachments.ID, bindings);
                this.element = element;
                this.options = options;
                this.bindings = bindings;
                this.attachmentLevel = attachmentLevel;
                this.options = new DefaultResultAttachmentsOptions(element).merge(options);

                this.attachments = result.attachments;
                if (Coveo.Utils.isNonEmptyArray(this.attachments)) {
                    this.renderAttachments();
                }
            }
            ResultAttachments.prototype.renderAttachments = function () {
                var _this = this;
                _.each(this.attachments, function (attachment) {
                    var container = _this.attachmentLevel > 0 ? _this.options.subResultTemplate.instantiateToElement(attachment) : _this.options.resultTemplate.instantiateToElement(attachment);

                    _this.autoCreateComponentsInsideResult(container, Coveo.$.extend({}, attachment, { attachments: [] }));
                    Coveo.$(_this.element).append(container);
                    if (_this.attachmentHasSubAttachment(attachment) && _this.attachmentLevel < _this.options.maximumAttachmentLevel) {
                        var childAttachmentContainer = Coveo.$("<div></div>");
                        Coveo.$(container).append(childAttachmentContainer);
                        new ResultAttachments(childAttachmentContainer.get(0), _this.options, _this.bindings, attachment, _this.attachmentLevel + 1);
                    }
                });
            };

            ResultAttachments.prototype.attachmentHasSubAttachment = function (attachment) {
                if (Coveo.Utils.isNonEmptyArray(attachment.attachments)) {
                    return true;
                } else if (Coveo.Utils.isNonEmptyArray(attachment.childResults)) {
                    attachment.attachments = attachment.childResults;
                    return true;
                } else {
                    return false;
                }
            };

            ResultAttachments.prototype.autoCreateComponentsInsideResult = function (element, result) {
                Coveo.Assert.exists(element);
                var initOptions = this.searchInterface.options;
                var initParameters = Coveo.$.extend({}, { options: initOptions }, this.getBindings(), { result: result });
                Ui.CoveoJQuery.automaticallyCreateComponentsInside(element, initParameters, [ResultAttachments.ID]);
            };
            ResultAttachments.ID = 'ResultAttachments';
            return ResultAttachments;
        })(Ui.Component);
        Ui.ResultAttachments = ResultAttachments;

        Ui.CoveoJQuery.registerAutoCreateComponent(ResultAttachments);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        function getCoveoAnalyticsClient(element) {
            var analytics = getCoveoAnalytics(element);
            if (analytics) {
                return analytics.client;
            } else {
                return undefined;
            }
        }

        function getCoveoAnalytics(element) {
            var analyticsElement = Coveo.$(element).find("." + Ui.Component.computeCssClassNameForType(Ui.Analytics.ID));
            if (analyticsElement.length != 0) {
                return analyticsElement.coveo();
            } else {
                return undefined;
            }
        }

        // .coveo('logCustomEvent', actionCause: AnalyticsActionCause, meta);
        Coveo.Ui.CoveoJQuery.registerNamedMethod('logCustomEvent', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var client = getCoveoAnalyticsClient(element);
            if (client) {
                var actionCause = args[0];
                var meta = args[1];
                client.logCustomEvent(actionCause, meta, element);
            }
        });

        // .coveo('logSearchEvent', actionCause: AnalyticsActionCause, meta);
        Coveo.Ui.CoveoJQuery.registerNamedMethod('logSearchEvent', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var client = getCoveoAnalyticsClient(element);
            if (client) {
                var actionCause = args[0];
                var meta = args[1];
                client.logSearchEvent(actionCause, meta);
            }
        });

        // .coveo('logSearchAsYouTypeEvent', actionCause: AnalyticsActionCause, meta);
        Coveo.Ui.CoveoJQuery.registerNamedMethod('logSearchAsYouTypeEvent', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var client = getCoveoAnalyticsClient(element);
            if (client) {
                var actionCause = args[0];
                var meta = args[1];
                client.logSearchAsYouType(actionCause, meta);
            }
        });

        // .coveo('logClickEvent', actionCause: AnalyticsActionCause, meta, result: QueryResult);
        Coveo.Ui.CoveoJQuery.registerNamedMethod('logClickEvent', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var client = getCoveoAnalyticsClient(element);
            if (client) {
                var actionCause = args[0];
                var meta = args[1];
                var result = args[2];
                client.logClickEvent(actionCause, meta, result, element);
            }
        });

        // .coveo('logCustomEventVersion',version, event: Rest.CustomEvent);
        Coveo.Ui.CoveoJQuery.registerNamedMethod('logCustomEventVersion', function (element) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var client = getCoveoAnalyticsClient(element);
            if (client) {
                var clientLive = client;
                Coveo.Rest.AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = args[0];
                clientLive.endpoint.sendCustomEvent(args[1]);
                Coveo.Rest.AnalyticsEndpoint.CUSTOM_ANALYTICS_VERSION = undefined;
            }
        });
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var PendingSearchEvent = (function () {
            function PendingSearchEvent(_root, _endpoint, _templateSearchEvent, _sendToCloud) {
                this._root = _root;
                this._endpoint = _endpoint;
                this._templateSearchEvent = _templateSearchEvent;
                this._sendToCloud = _sendToCloud;
                this.searchDeferred = [];
                this.searchEvents = [];
                this.results = [];
                this.armed = false;
                this._cancelled = false;
                this._finished = false;
                Coveo.Assert.exists(_root);
                Coveo.Assert.exists(_endpoint);
                Coveo.Assert.exists(_templateSearchEvent);

                this.handler = Coveo.$.proxy(this._handleDuringQuery, this);
                this.newQueryHandler = Coveo.$.proxy(this._handleNewQuery, this);
                Coveo.$(_root).on(Coveo.Events.QueryEvents.duringQuery + ' ' + Coveo.Events.QueryEvents.duringFetchMoreQuery, this.handler);
                Coveo.$(_root).on(Coveo.Events.QueryEvents.newQuery, this.newQueryHandler);
            }
            PendingSearchEvent.prototype.getEventCause = function () {
                return this._templateSearchEvent.actionCause;
            };

            PendingSearchEvent.prototype.getEventMeta = function () {
                return this._templateSearchEvent.customData;
            };

            PendingSearchEvent.prototype.cancel = function () {
                this._stopRecording();
                this._cancelled = true;
            };

            //If there is a new analytics event followed by a new query, we need a new SearchUid.
            PendingSearchEvent.prototype._handleNewQuery = function (e, args) {
                // TODO: Maybe a better way to grab the query controller?
                var queryController = Ui.Component.get(e.target, Coveo.Controllers.QueryController);
                Coveo.Assert.exists(queryController);
                queryController.newSearchUid();
            };

            PendingSearchEvent.prototype._handleDuringQuery = function (e, args) {
                var _this = this;
                Coveo.Assert.check(!this._finished);
                Coveo.Assert.check(!this._cancelled);

                // When synchronizing multiple search interfaces under a single search event
                // (think Salesforce boxes), we need to collect all search events and send them
                // in one single batch. So we gather all events until we idle out and then we
                // monitor those before sending the data.
                this.searchDeferred.push(args.deferred);

                // TODO: Maybe a better way to grab the search interface?
                var searchInterface = Ui.Component.get(e.target, Ui.SearchInterface);
                Coveo.Assert.exists(searchInterface);

                // TODO: Maybe a better way to grab the query controller?
                var queryController = Ui.Component.get(e.target, Coveo.Controllers.QueryController);
                Coveo.Assert.exists(queryController);

                args.deferred.done(function (queryResults) {
                    Coveo.Assert.exists(queryResults);
                    Coveo.Assert.check(!_this._finished);

                    var searchEvent = _.extend({}, _this._templateSearchEvent);
                    _this.fillSearchEvent(searchEvent, searchInterface, args.query, queryResults, queryController.getSearchUid());
                    _this.searchEvents.push(searchEvent);
                    _this.results.push(queryResults);
                }).always(function () {
                    var index = _.indexOf(_this.searchDeferred, args.deferred);
                    _this.searchDeferred.splice(index, 1);
                    if (_this.searchDeferred.length == 0) {
                        _this.flush();
                    }
                });
            };

            PendingSearchEvent.prototype._stopRecording = function () {
                if (this.handler) {
                    Coveo.$(this._root).off(Coveo.Events.QueryEvents.duringQuery + ' ' + Coveo.Events.QueryEvents.duringFetchMoreQuery, this.handler);
                    this.handler = undefined;
                }
                if (this.newQueryHandler) {
                    Coveo.$(this._root).off(Coveo.Events.QueryEvents.newQuery, this.newQueryHandler);
                    this.newQueryHandler = undefined;
                }
            };

            PendingSearchEvent.prototype.flush = function () {
                var _this = this;
                if (!this._cancelled) {
                    this._stopRecording();
                    this._finished = true;
                    Coveo.Assert.check(this.searchEvents.length == this.results.length);

                    Coveo.Defer.defer(function () {
                        if (_this._sendToCloud) {
                            _this._endpoint.sendSearchEvents(_this.searchEvents);
                        }
                        var apiSearchEvents = _.map(_this.searchEvents, function (searchEvent) {
                            return Coveo.Rest.APIAnalyticsBuilder.convertSearchEventToAPI(searchEvent);
                        });
                        Coveo.$(_this._root).trigger(Coveo.Events.AnalyticsEvents.searchEvent, { searchEvents: apiSearchEvents });
                    });
                }
            };

            PendingSearchEvent.prototype.fillSearchEvent = function (searchEvent, searchInterface, query, queryResults, queryUid) {
                Coveo.Assert.exists(searchEvent);
                Coveo.Assert.exists(searchInterface);
                Coveo.Assert.exists(query);
                Coveo.Assert.exists(queryResults);

                var currentQuery = searchInterface.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.q);
                var hq = searchInterface.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.hq);

                searchEvent.queryText = currentQuery || query.q || ''; // do not log the query sent to the server if possible; it may contain added syntax depending on options
                searchEvent.advancedQuery = query.aq || '';
                searchEvent.didYouMean = query.enableDidYouMean;
                searchEvent.results = this.convertResults(queryResults);
                searchEvent.responseTime = queryResults.duration;
                searchEvent.pageNumber = (query.firstResult / query.numberOfResults);
                searchEvent.resultsPerPage = query.numberOfResults;
                searchEvent.facets = this.convertFacets();
                searchEvent.searchQueryUid = queryUid;
            };

            PendingSearchEvent.prototype.convertResults = function (results) {
                Coveo.Assert.exists(results);
                var resultsToReturn = [];
                Coveo.$.each(results.results, function (index, result) {
                    resultsToReturn.push({ clickUri: result.clickUri, documentUri: result.uri, documentUriHash: result.raw["sysurihash"] });
                });
                return resultsToReturn;
            };

            PendingSearchEvent.prototype.convertFacets = function () {
                var _this = this;
                var facetsToReturn = [];
                Coveo.$.each(Coveo.$(this.getFacetSelector()), function (index, facet) {
                    var facet = Coveo.$(facet).coveo();
                    if (!facet.disabled) {
                        facetsToReturn.push({
                            fieldName: facet.options.field,
                            mode: facet.options.useAnd ? "and" : "or",
                            name: facet.options.title,
                            sort: facet.options.sortCriteria,
                            selections: _this.convertFacetValues(facet)
                        });
                    }
                });
                return facetsToReturn;
            };

            PendingSearchEvent.prototype.getFacetSelector = function () {
                return [
                    "." + Ui.Component.computeCssClassNameForType(Ui.Facet.ID),
                    "." + Ui.Component.computeCssClassNameForType(Ui.FacetRange.ID)
                ].join(", ");
            };

            PendingSearchEvent.prototype.convertFacetValues = function (facet) {
                Coveo.Assert.exists(facet);

                //var facetRange = facet instanceof FacetRange ? <FacetRange>facet : undefined;
                return this.convertClassicFacetValues(facet);
            };

            PendingSearchEvent.prototype.convertClassicFacetValues = function (facet) {
                var selectedValues = [];
                if (!facet.disabled) {
                    Coveo.$.each(facet.getSelectedValues(), function (index, value) {
                        selectedValues.push({
                            entryName: value,
                            status: 'INCLUDE'
                        });
                    });
                    Coveo.$.each(facet.getExcludedValues(), function (index, value) {
                        selectedValues.push({
                            entryName: value,
                            status: 'EXCLUDE'
                        });
                    });
                }
                return selectedValues;
            };
            return PendingSearchEvent;
        })();
        Ui.PendingSearchEvent = PendingSearchEvent;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var PendingSearchAsYouTypeSearchEvent = (function (_super) {
            __extends(PendingSearchAsYouTypeSearchEvent, _super);
            function PendingSearchAsYouTypeSearchEvent(_root, _endpoint, _templateSearchEvent, _sendToCloud) {
                _super.call(this, _root, _endpoint, _templateSearchEvent, _sendToCloud);
                this._root = _root;
                this._endpoint = _endpoint;
                this._templateSearchEvent = _templateSearchEvent;
                this._sendToCloud = _sendToCloud;
                this.delayBeforeSending = 5000;
                this.armBatchDelay = 50;
                this.beforeUnloadHandler = Coveo.$.proxy(this.onWindowUnload, this);
                Coveo.$(window).on('beforeunload', this.beforeUnloadHandler);
            }
            PendingSearchAsYouTypeSearchEvent.prototype._handleDuringQuery = function (e, args) {
                var _this = this;
                this.toSendRightNow = function () {
                    if (!_this.isCancelledOrFinished()) {
                        _super.prototype._handleDuringQuery.call(_this, e, args);
                    }
                };

                _.delay(function () {
                    _this.toSendRightNow();
                }, this.delayBeforeSending);
            };

            PendingSearchAsYouTypeSearchEvent.prototype.sendRightNow = function () {
                if (this.toSendRightNow) {
                    this.toSendRightNow();
                }
            };

            PendingSearchAsYouTypeSearchEvent.prototype._stopRecording = function () {
                _super.prototype._stopRecording.call(this);
                if (this.beforeUnloadHandler) {
                    Coveo.$(window).off('beforeunload', this.beforeUnloadHandler);
                    this.beforeUnloadHandler = undefined;
                }
            };

            PendingSearchAsYouTypeSearchEvent.prototype.onWindowUnload = function () {
                if (!this.isCancelledOrFinished()) {
                    this.armBatchDelay = 0;
                    this.sendRightNow();
                }
            };

            PendingSearchAsYouTypeSearchEvent.prototype.isCancelledOrFinished = function () {
                if (!this._cancelled) {
                    if (this._finished) {
                        this.cancel();
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }
            };
            return PendingSearchAsYouTypeSearchEvent;
        })(Ui.PendingSearchEvent);
        Ui.PendingSearchAsYouTypeSearchEvent = PendingSearchAsYouTypeSearchEvent;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var LiveAnalyticsClient = (function () {
            function LiveAnalyticsClient(endpoint, rootElement, originLevel1, sendToCloud) {
                this.endpoint = endpoint;
                this.rootElement = rootElement;
                this.originLevel1 = originLevel1;
                this.sendToCloud = sendToCloud;
                this.isContextual = false;
                this.language = String['locale'];
                this.device = Ui.Device.getDeviceName();
                Coveo.Assert.exists(endpoint);
                Coveo.Assert.exists(rootElement);
                Coveo.Assert.isNonEmptyString(this.language);
                Coveo.Assert.isNonEmptyString(this.device);
                Coveo.Assert.isNonEmptyString(this.originLevel1);
            }
            LiveAnalyticsClient.prototype.isActivated = function () {
                return true;
            };

            LiveAnalyticsClient.prototype.getCurrentEventCause = function () {
                if (this.pendingSearchEvent != null) {
                    return this.pendingSearchEvent.getEventCause();
                }
                if (this.pendingSearchAsYouTypeSearchEvent != null) {
                    return this.pendingSearchAsYouTypeSearchEvent.getEventCause();
                }
                return null;
            };

            LiveAnalyticsClient.prototype.getCurrentEventMeta = function () {
                if (this.pendingSearchEvent != null) {
                    return this.pendingSearchEvent.getEventMeta();
                }
                if (this.pendingSearchAsYouTypeSearchEvent != null) {
                    return this.pendingSearchAsYouTypeSearchEvent.getEventMeta();
                }
                return null;
            };

            LiveAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
                var metaObject = this.buildMetaObject(actionCause, meta);
                this.pushSearchEvent(actionCause, metaObject);
            };

            LiveAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
                var metaObject = this.buildMetaObject(actionCause, meta);
                this.pushSearchAsYouTypeEvent(actionCause, metaObject);
            };

            LiveAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
                var metaObject = this.buildMetaObject(actionCause, meta);
                this.pushClickEvent(actionCause, metaObject, result, element);
            };

            LiveAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
                var metaObject = this.buildMetaObject(actionCause, meta);
                this.pushCustomEvent(actionCause, metaObject, element);
            };

            LiveAnalyticsClient.prototype.getTopQueries = function (params) {
                return this.endpoint.getTopQueries(params);
            };

            LiveAnalyticsClient.prototype.sendAllPendingEvents = function () {
                if (this.pendingSearchAsYouTypeSearchEvent) {
                    this.pendingSearchAsYouTypeSearchEvent.sendRightNow();
                }
            };

            LiveAnalyticsClient.prototype.pushCustomEvent = function (actionCause, metaObject, element) {
                var _this = this;
                var customEvent = this.buildCustomEvent(actionCause, metaObject, element);
                this.triggerChangeAnalyticsCustomData("CustomEvent", metaObject, customEvent);
                this.checkToSendAnyPendingSearchAsYouType(actionCause);
                Coveo.Defer.defer(function () {
                    if (_this.sendToCloud) {
                        _this.endpoint.sendCustomEvent(customEvent);
                    }
                    Coveo.$(_this.rootElement).trigger(Coveo.Events.AnalyticsEvents.customEvent, { customEvent: Coveo.Rest.APIAnalyticsBuilder.convertCustomEventToAPI(customEvent) });
                });
            };

            LiveAnalyticsClient.prototype.pushSearchEvent = function (actionCause, metaObject) {
                var _this = this;
                Coveo.Assert.exists(actionCause);
                if (this.pendingSearchEvent && this.pendingSearchEvent.getEventCause() !== actionCause.name) {
                    this.pendingSearchEvent._stopRecording();
                    this.pendingSearchEvent = null;
                }
                this.checkToSendAnyPendingSearchAsYouType(actionCause);

                if (!this.pendingSearchEvent) {
                    var searchEvent = this.buildSearchEvent(actionCause, metaObject);
                    this.triggerChangeAnalyticsCustomData("SearchEvent", metaObject, searchEvent);
                    var pendingSearchEvent = this.pendingSearchEvent = new Ui.PendingSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);

                    Coveo.Defer.defer(function () {
                        // At this point all duringQuery events should have been fired, so we can forget
                        // about the pending search event. It'll finish processing automatically when
                        // all the deferred that were caught terminate.
                        _this.pendingSearchEvent = undefined;
                        pendingSearchEvent._stopRecording();
                    });
                }
            };

            LiveAnalyticsClient.prototype.checkToSendAnyPendingSearchAsYouType = function (actionCause) {
                if (this.eventIsNotRelatedToSearchBox(actionCause.name)) {
                    this.sendAllPendingEvents();
                } else {
                    this.cancelAnyPendingSearchAsYouTypeEvent();
                }
            };

            LiveAnalyticsClient.prototype.pushSearchAsYouTypeEvent = function (actionCause, metaObject) {
                this.cancelAnyPendingSearchAsYouTypeEvent();
                var searchEvent = this.buildSearchEvent(actionCause, metaObject);
                this.triggerChangeAnalyticsCustomData('SearchEvent', metaObject, searchEvent);
                this.pendingSearchAsYouTypeSearchEvent = new Ui.PendingSearchAsYouTypeSearchEvent(this.rootElement, this.endpoint, searchEvent, this.sendToCloud);
            };

            LiveAnalyticsClient.prototype.pushClickEvent = function (actionCause, metaObject, result, element) {
                var _this = this;
                var event = this.buildClickEvent(actionCause, metaObject, result, element);
                this.triggerChangeAnalyticsCustomData("ClickEvent", metaObject, event);
                Coveo.Assert.isNonEmptyString(event.searchQueryUid);
                Coveo.Assert.isNonEmptyString(event.collectionName);
                Coveo.Assert.isNonEmptyString(event.sourceName);
                Coveo.Assert.isNumber(event.documentPosition);
                Coveo.Defer.defer(function () {
                    if (_this.sendToCloud) {
                        _this.endpoint.sendDocumentViewEvent(event);
                    }
                    Coveo.$(_this.rootElement).trigger(Coveo.Events.AnalyticsEvents.documentViewEvent, {
                        documentViewEvent: Coveo.Rest.APIAnalyticsBuilder.convertDocumentViewToAPI(event)
                    });
                });
            };

            LiveAnalyticsClient.prototype.buildAnalyticsEvent = function (actionCause, metaObject) {
                return {
                    actionCause: actionCause.name,
                    actionType: actionCause.type,
                    device: this.device,
                    language: this.language,
                    responseTime: undefined,
                    originLevel1: this.originLevel1,
                    originLevel2: this.resolveActiveTabFromElement(this.rootElement),
                    customData: _.keys(metaObject.metaDataAsString).length > 0 ? metaObject.metaDataAsString : undefined,
                    customMetadata1: metaObject.metaDataAsNumber["customMetadata1"],
                    customMetadata2: metaObject.metaDataAsNumber["customMetadata2"],
                    customMetadata3: metaObject.metaDataAsNumber["customMetadata3"],
                    customMetadata4: metaObject.metaDataAsNumber["customMetadata4"],
                    customMetadata5: metaObject.metaDataAsNumber["customMetadata5"],
                    userAgent: navigator.userAgent
                };
            };

            LiveAnalyticsClient.prototype.buildSearchEvent = function (actionCause, metaObject) {
                return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
                    mobile: Ui.Device.isMobileDevice(),
                    queryText: undefined,
                    advancedQuery: undefined,
                    results: undefined,
                    resultsPerPage: undefined,
                    searchQueryUid: undefined,
                    pageNumber: undefined,
                    didYouMean: undefined,
                    facets: undefined,
                    contextual: this.isContextual
                });
            };

            LiveAnalyticsClient.prototype.buildClickEvent = function (actionCause, metaObject, result, element) {
                return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
                    searchQueryUid: result.queryUid,
                    documentUri: result.uri,
                    documentUriHash: result.raw["sysurihash"],
                    collectionName: result.raw['syscollection'],
                    sourceName: result.raw['syssource'],
                    documentPosition: result.index,
                    responseTime: 0,
                    viewMethod: actionCause.name
                });
            };

            LiveAnalyticsClient.prototype.buildCustomEvent = function (actionCause, metaObject, element) {
                return this.merge(this.buildAnalyticsEvent(actionCause, metaObject), {
                    eventType: actionCause.type,
                    eventValue: actionCause.name,
                    responseTime: 0
                });
            };

            LiveAnalyticsClient.prototype.buildMetaObject = function (actionCause, meta) {
                var metaObject = { metaDataAsNumber: {}, metaDataAsString: {} };
                _.each(meta, function (value, key) {
                    if (actionCause.metaMap != undefined && actionCause.metaMap[key] != undefined) {
                        var numberKey = actionCause.metaMap[key];
                        metaObject.metaDataAsNumber["customMetadata" + numberKey.toString()] = value;
                    }
                    metaObject.metaDataAsString[key] = value;
                });
                metaObject.metaDataAsString["JSUIVersion"] = Coveo.version.lib + ";" + Coveo.version.product;
                return metaObject;
            };

            LiveAnalyticsClient.prototype.cancelAnyPendingSearchEvent = function () {
                if (this.pendingSearchEvent) {
                    this.pendingSearchEvent.cancel();
                    this.pendingSearchEvent = undefined;
                }
            };

            LiveAnalyticsClient.prototype.cancelAnyPendingSearchAsYouTypeEvent = function () {
                if (this.pendingSearchAsYouTypeSearchEvent) {
                    this.pendingSearchAsYouTypeSearchEvent.cancel();
                    this.pendingSearchAsYouTypeSearchEvent = undefined;
                }
            };

            LiveAnalyticsClient.prototype.resolveActiveTabFromElement = function (element) {
                Coveo.Assert.exists(element);
                var queryStateModel = this.resolveQueryStateModel(element);
                return (queryStateModel && queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t)) || "default";
            };

            LiveAnalyticsClient.prototype.resolveQueryStateModel = function (rootElement) {
                return Ui.Component.resolveBinding(rootElement, Coveo.Models.QueryStateModel);
            };

            LiveAnalyticsClient.prototype.eventIsNotRelatedToSearchBox = function (event) {
                return event !== Ui.AnalyticsActionCauseList.searchboxSubmit.name && event !== Ui.AnalyticsActionCauseList.searchboxClear.name;
            };

            LiveAnalyticsClient.prototype.triggerChangeAnalyticsCustomData = function (type, metaObject, event) {
                var changeableAnalyticsDataObject = {
                    language: event.language,
                    originLevel1: event.originLevel1,
                    originLevel2: event.originLevel2,
                    originLevel3: event.originLevel3
                };
                var args = Coveo.$.extend({}, { type: type, metaObject: metaObject }, changeableAnalyticsDataObject);
                Coveo.$(this.rootElement).trigger(Coveo.Events.AnalyticsEvents.changeAnalyticsCustomData, args);
                event.language = args.language;
                event.originLevel1 = args.originLevel1;
                event.originLevel2 = args.originLevel2;
                event.originLevel3 = args.originLevel3;
                event.customData = metaObject.metaDataAsString;
                _.each(_.keys(metaObject.metaDataAsNumber), function (key) {
                    event[key] = metaObject.metaDataAsNumber[key];
                });
            };

            LiveAnalyticsClient.prototype.getChangeableAnalyticsDataObject = function (event) {
                return {
                    language: event.language || undefined,
                    originLevel1: event.originLevel1 || undefined,
                    originLevel2: event.originLevel2 || undefined,
                    originLevel3: event.originLevel3 || undefined
                };
            };

            LiveAnalyticsClient.prototype.merge = function (first, second) {
                return Coveo.$.extend({}, first, second);
            };
            return LiveAnalyticsClient;
        })();
        Ui.LiveAnalyticsClient = LiveAnalyticsClient;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var MultiAnalyticsClient = (function () {
            function MultiAnalyticsClient(analyticsClients) {
                if (typeof analyticsClients === "undefined") { analyticsClients = []; }
                this.analyticsClients = analyticsClients;
                this.isContextual = false;
            }
            MultiAnalyticsClient.prototype.isActivated = function () {
                return _.some(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.isActivated();
                });
            };

            MultiAnalyticsClient.prototype.getCurrentEventCause = function () {
                return _.find(_.map(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.getCurrentEventCause();
                }), function (currentEventCause) {
                    return currentEventCause != null;
                });
            };

            MultiAnalyticsClient.prototype.getCurrentEventMeta = function () {
                return _.find(_.map(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.getCurrentEventMeta();
                }), function (currentEventMeta) {
                    return currentEventMeta != null;
                });
            };

            MultiAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
                _.each(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.logSearchEvent(actionCause, meta);
                });
            };

            MultiAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
                _.each(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.logSearchEvent(actionCause, meta);
                });
            };

            MultiAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
                _.each(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.logClickEvent(actionCause, meta, result, element);
                });
            };

            MultiAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
                _.each(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.logCustomEvent(actionCause, meta, element);
                });
            };

            MultiAnalyticsClient.prototype.getTopQueries = function (params) {
                var _this = this;
                var deferer = Coveo.$.Deferred();
                var results = [];
                _.forEach(this.analyticsClients, function (analyticsClient, i) {
                    analyticsClient.getTopQueries(params).done(function (values) {
                        results[i] = values;
                        var complete = true;
                        for (var i = 0; i < _this.analyticsClients.length && complete; i++) {
                            complete = complete && results[i] != undefined;
                        }
                        if (complete) {
                            deferer.resolve(_this.mergeTopQueries(results, params.pageSize));
                        }
                    });
                });
                return deferer;
            };

            MultiAnalyticsClient.prototype.sendAllPendingEvents = function () {
                _.each(this.analyticsClients, function (analyticsClient) {
                    return analyticsClient.sendAllPendingEvents();
                });
            };

            MultiAnalyticsClient.prototype.mergeTopQueries = function (values, pageSize) {
                var results = [];
                _.each(values, function (valuesToMerge) {
                    return _.each(valuesToMerge, function (value) {
                        return results.push(value);
                    });
                });
                results.length = Math.min(results.length, pageSize);
                return results;
            };
            return MultiAnalyticsClient;
        })();
        Ui.MultiAnalyticsClient = MultiAnalyticsClient;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var NoopAnalyticsClient = (function () {
            function NoopAnalyticsClient() {
                this.isContextual = false;
            }
            NoopAnalyticsClient.prototype.isActivated = function () {
                return false;
            };

            NoopAnalyticsClient.prototype.getCurrentEventCause = function () {
                return null;
            };

            NoopAnalyticsClient.prototype.getCurrentEventMeta = function () {
                return {};
            };

            NoopAnalyticsClient.prototype.logSearchEvent = function (actionCause, meta) {
            };

            NoopAnalyticsClient.prototype.logSearchAsYouType = function (actionCause, meta) {
            };

            NoopAnalyticsClient.prototype.logClickEvent = function (actionCause, meta, result, element) {
            };

            NoopAnalyticsClient.prototype.logCustomEvent = function (actionCause, meta, element) {
            };

            NoopAnalyticsClient.prototype.getTopQueries = function (params) {
                var deferred = Coveo.$.Deferred();
                deferred.resolve([]);
                return deferred;
            };

            NoopAnalyticsClient.prototype.sendAllPendingEvents = function () {
            };
            return NoopAnalyticsClient;
        })();
        Ui.NoopAnalyticsClient = NoopAnalyticsClient;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var Slider = (function () {
            function Slider(element, options) {
                this.element = element;
                this.options = options;
                this.steps = [];
                if (this.options.dateField) {
                    this.options.start = new Date(this.options.start).getTime();
                    this.options.end = new Date(this.options.end).getTime();
                }

                if (this.options.rounded == undefined) {
                    this.options.rounded = 0;
                }

                if (this.options.steps || this.options.getSteps) {
                    this.buildSteps();
                }

                if (this.options.graph) {
                    this.sliderGraph = new SliderGraph(this);
                }

                this.sliderLine = new SliderLine(this);
                this.sliderLine.build().appendTo(this.element);

                if (this.options.rangeSlider) {
                    this.sliderRange = new SliderRange(this);
                    this.sliderRange.build().appendTo(this.element);
                } else {
                    this.sliderButton = new SliderButton(this, 1);
                    this.sliderButton.build().addClass("coveo-no-range-button").appendTo(this.element);
                    this.sliderLine.setActiveWidth(this.sliderButton);
                }

                this.sliderCaption = new SliderCaption(this);
                this.sliderCaption.build().appendTo(this.element);
            }
            Slider.prototype.onMoving = function () {
                if (this.options.rangeSlider) {
                    this.sliderRange.setBoundary();
                    this.sliderLine.setActiveWidth(this.sliderRange.firstButton, this.sliderRange.secondButton);
                } else {
                    this.sliderLine.setActiveWidth(this.sliderButton);
                }
                if (this.options.graph) {
                    this.sliderGraph.draw();
                }
                this.displayCaption();
            };

            Slider.prototype.initializeState = function (values) {
                if (typeof values === "undefined") { values = [this.options.start, this.options.end]; }
                this.currentValues = values;
                if (this.options.rangeSlider) {
                    this.sliderRange.initializeSliderRangeState(values);
                    this.sliderLine.setActiveWidth(this.sliderRange.firstButton, this.sliderRange.secondButton);
                } else {
                    if (values == undefined) {
                        this.sliderButton.toEnd();
                    } else {
                        this.sliderButton.setValue(values[1]);
                    }
                    this.sliderButton.leftBoundary = 0;
                    this.sliderButton.rightBoundary = this.element.width();
                    this.sliderLine.setActiveWidth(this.sliderButton);
                }
                this.displayCaption();
            };

            Slider.prototype.getPosition = function () {
                if (this.options.rangeSlider) {
                    return this.sliderRange.getPosition();
                } else {
                    return [0, this.sliderButton.getPosition()];
                }
            };

            Slider.prototype.getPercentPosition = function () {
                if (this.options.rangeSlider) {
                    return this.sliderRange.getPercentPosition();
                } else {
                    return [0, this.sliderButton.getPercent()];
                }
            };

            Slider.prototype.getValues = function () {
                if (this.currentValues != undefined) {
                    return this.currentValues;
                } else {
                    if (this.options.rangeSlider) {
                        return this.sliderRange.getValue();
                    } else {
                        return [this.options.start, this.sliderButton.getValue()];
                    }
                }
            };

            Slider.prototype.getCaptionFromValue = function (values) {
                return this.sliderCaption.getCaptionFromValues(values);
            };

            Slider.prototype.getCaption = function () {
                return this.sliderCaption.getCaption();
            };

            Slider.prototype.setValues = function (values) {
                if (values != undefined) {
                    values[0] = Math.max(values[0], this.options.start);
                    values[1] = Math.min(values[1], this.options.end);
                }
                this.currentValues = values;
                if (this.options.rangeSlider) {
                    this.sliderRange.setValue(values);
                    this.sliderLine.setActiveWidth(this.sliderRange.firstButton, this.sliderRange.secondButton);
                } else {
                    this.sliderButton.setValue(values[1]);
                    this.sliderLine.setActiveWidth(this.sliderButton);
                }
                this.displayCaption();
            };

            Slider.prototype.drawGraph = function (data) {
                this.sliderGraph.draw(data);
            };

            Slider.prototype.displayCaption = function () {
                if (this.options.valueCaption != undefined) {
                    this.sliderCaption.setFromString(this.options.valueCaption(this.getValues()));
                } else if (this.options.percentCaption != undefined) {
                    this.sliderCaption.setFromString(this.options.percentCaption(this.getPercentPosition()));
                } else if (this.options.displayAsPercent != undefined && this.options.displayAsPercent.separator != undefined) {
                    this.sliderCaption.setAsPercent();
                } else {
                    this.sliderCaption.setAsValue();
                }
            };

            Slider.prototype.buildSteps = function () {
                if (this.options.getSteps) {
                    this.steps = this.options.getSteps(this.options.start, this.options.end);
                } else {
                    var oneStep = (this.options.end - this.options.start) / this.options.steps;
                    var currentStep = this.options.start;
                    while (currentStep <= this.options.end) {
                        this.steps.push(currentStep);
                        currentStep += oneStep;
                    }
                }
            };
            return Slider;
        })();
        Ui.Slider = Slider;

        var SliderLine = (function () {
            function SliderLine(slider) {
                this.slider = slider;
            }
            SliderLine.prototype.build = function () {
                this.backGround = Coveo.$("<div class='coveo-slider-line coveo-background'></div>");
                this.activePart = Coveo.$("<div class='coveo-slider-line coveo-active'></div>");
                return this.backGround.add(this.activePart);
            };

            SliderLine.prototype.setActiveWidth = function (buttonOne, buttonTwo) {
                if (this.slider.options.rangeSlider) {
                    var width = (buttonTwo.getPercent() - buttonOne.getPercent()) * 100;
                    this.activePart.css({
                        "width": width + "%",
                        "left": buttonOne.getPercent() * 100 + "%",
                        "right": buttonTwo.getPercent() * 100 + "%"
                    });
                } else {
                    var width = buttonOne.getPercent() * 100;
                    this.activePart.css({
                        "width": width + "%"
                    });
                }
            };
            return SliderLine;
        })();

        var SliderButton = (function () {
            function SliderButton(slider, which) {
                this.slider = slider;
                this.which = which;
                this.eventMouseDown = Ui.Device.isMobileDevice() ? "touchstart" : "mousedown";
                this.eventMouseMove = Ui.Device.isMobileDevice() ? "touchmove" : "mousemove";
                this.eventMouseUp = Ui.Device.isMobileDevice() ? "touchend" : "mouseup";
            }
            SliderButton.prototype.build = function () {
                this.element = Coveo.$("<div class='coveo-slider-button'></div>");
                this.bindEvents();
                this.element.get(0)["CoveoSliderButton"] = this;
                return this.element;
            };

            SliderButton.prototype.toBeginning = function () {
                this.element.css({
                    left: "0%"
                });
            };

            SliderButton.prototype.toEnd = function () {
                var width = this.slider.element.width();
                this.element.css({
                    left: "100%"
                });
            };

            SliderButton.prototype.setValue = function (value) {
                var percent = this.fromValueToPercent(value);
                this.element.css("left", Math.round(percent * 100) + "%");
            };

            SliderButton.prototype.getPosition = function () {
                var left = this.element.css("left");
                if (left.indexOf("%") != -1) {
                    return (parseFloat(left) / 100) * this.slider.element.width();
                } else {
                    return parseFloat(left);
                }
            };

            SliderButton.prototype.getPercent = function (position) {
                if (typeof position === "undefined") { position = this.getPosition(); }
                return +(position / this.slider.element.width()).toFixed(2);
            };

            SliderButton.prototype.getValue = function () {
                var value = this.getPercent() * (this.slider.options.end - this.slider.options.start) + this.slider.options.start;
                return value;
            };

            SliderButton.prototype.fromValueToPercent = function (value) {
                return 1 - ((this.slider.options.end - value) / (this.slider.options.end - this.slider.options.start));
            };

            SliderButton.prototype.fromPositionToValue = function (position) {
                var percent = this.getPercent(position);
                return this.slider.options.start + (percent * (this.slider.options.end - this.slider.options.start));
            };

            SliderButton.prototype.fromValueToPosition = function (value) {
                var percent = this.fromValueToPercent(value);
                return this.slider.element.width() * percent;
            };

            SliderButton.prototype.bindEvents = function () {
                var _this = this;
                Coveo.$(this.element).on(this.eventMouseDown, function (e) {
                    _this.handleStartSlide(e);
                });
                var doc = this.slider.options.document || document;
                Coveo.$(doc).on(this.eventMouseMove, function (e) {
                    if (_this.eventMouseMove == "touchmove" && _this.isMouseDown) {
                        e.preventDefault();
                    }
                    _this.handleMoving(e);
                });

                Coveo.$(doc).on(this.eventMouseUp, function (e) {
                    _this.handleEndSlide(e);
                });
            };

            SliderButton.prototype.handleStartSlide = function (e) {
                var position = this.getMousePosition(e);
                this.isMouseDown = true;
                this.startPositionX = position.x;
                this.lastElementLeft = this.element.css("left");
                this.origUserSelect = Coveo.$("body").css("user-select");
                this.origCursor = Coveo.$("body").css("cursor");
                Coveo.$("body").css("user-select", "none");
                Coveo.$("body").css("cursor", "pointer");
                Coveo.$(this.element).addClass("coveo-active");
                Coveo.$(this.element).trigger(Coveo.Events.SliderEvents.startSlide, { button: this, slider: this.slider });
            };

            SliderButton.prototype.handleMoving = function (e) {
                if (this.isMouseDown) {
                    this.updatePosition(e);
                    this.slider.onMoving();
                    this.handleButtonNearEnd();
                    this.element.trigger(Coveo.Events.SliderEvents.duringSlide, { button: this, slider: this.slider });
                }
            };

            SliderButton.prototype.handleEndSlide = function (e) {
                if (this.isMouseDown) {
                    Coveo.$("body").css("user-select", this.origUserSelect);
                    Coveo.$("body").css("cursor", this.origCursor);
                    Coveo.$(this.element).removeClass("coveo-active");
                    this.element.trigger(Coveo.Events.SliderEvents.endSlide, { button: this, slider: this.slider });
                }
                this.isMouseDown = false;
            };

            SliderButton.prototype.handleButtonNearEnd = function () {
                if (this.which == 0) {
                    if (this.origZIndex == undefined) {
                        this.origZIndex = this.element.css("z-index");
                    }
                    if (this.currentPos > 90) {
                        this.element.css("z-index", this.origZIndex + 1);
                    } else {
                        this.element.css("z-index", this.origZIndex);
                    }
                }
            };

            SliderButton.prototype.getMousePosition = function (e) {
                var posx = 0;
                var posy = 0;
                if (this.eventMouseMove == "touchmove") {
                    posx = e["originalEvent"]["touches"][0].pageX;
                    posy = e["originalEvent"]["touches"][0].pageY;
                } else if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY;
                } else if (e.clientX || e.clientY) {
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                return { x: posx, y: posy };
            };

            SliderButton.prototype.updatePosition = function (e) {
                var pos = this.getMousePosition(e);
                var spanX = pos.x - this.startPositionX;
                this.currentPos = parseInt(this.lastElementLeft, 10) + spanX;
                if (this.slider.options.steps || this.slider.options.getSteps) {
                    var snapResult = this.snapToStep(spanX);
                    this.currentPos = snapResult.position;
                    var currentValue = snapResult.value;
                }
                this.currentPos = Math.max(this.leftBoundary, this.currentPos);
                this.currentPos = Math.min(this.rightBoundary, this.currentPos);
                this.currentPos = this.getPercent(this.currentPos) * 100;
                this.currentPos = Math.min(this.currentPos, 100);
                this.currentPos = Math.max(this.currentPos, 0);
                this.element.css("left", Math.round(this.currentPos) + "%");
                if (this.slider.options.steps || this.slider.options.getSteps) {
                    this.slider.currentValues[this.which] = currentValue;
                } else {
                    this.slider.currentValues[this.which] = this.getValue();
                }
            };

            SliderButton.prototype.snapToStep = function (spanX) {
                var _this = this;
                var diffs = _.map(this.slider.steps, function (step, i) {
                    return Math.abs(_this.currentPos - _this.fromValueToPosition(_this.slider.steps[i]));
                });
                var diffsNext = _.map(this.slider.steps, function (step, i) {
                    return Math.abs(_this.rightBoundary - _this.fromValueToPosition(_this.slider.steps[i]));
                });
                var diffsPrev = _.map(this.slider.steps, function (step, i) {
                    return Math.abs(_this.leftBoundary - _this.fromValueToPosition(_this.slider.steps[i]));
                });
                var nearest = _.min(diffs);
                var nearestNext = _.min(diffsNext);
                var nearestPrevious = _.min(diffsPrev);
                var currentStep = this.slider.steps[_.indexOf(diffs, nearest)];
                var nextStep = this.slider.steps[_.indexOf(diffsNext, nearestNext)];
                var previousStep = this.slider.steps[_.indexOf(diffsPrev, nearestPrevious)];
                currentStep = Math.min(currentStep, nextStep);
                currentStep = Math.max(currentStep, previousStep);
                return { position: this.fromValueToPosition(currentStep), value: currentStep };
            };
            return SliderButton;
        })();
        Ui.SliderButton = SliderButton;

        var SliderRange = (function () {
            function SliderRange(slider) {
                this.slider = slider;
                this.firstButton = new SliderButton(slider, 0);
                this.secondButton = new SliderButton(slider, 1);
            }
            SliderRange.prototype.build = function () {
                var firstElem = this.firstButton.build();
                var secondElem = this.secondButton.build().addClass("coveo-range-button");
                return firstElem.add(secondElem);
            };

            SliderRange.prototype.initializeSliderRangeState = function (values) {
                if (values == undefined) {
                    this.firstButton.toBeginning();
                    this.secondButton.toEnd();
                } else {
                    this.firstButton.setValue(values[0]);
                    this.secondButton.setValue(values[1]);
                }
                this.setBoundary();
            };

            SliderRange.prototype.setValue = function (values) {
                this.firstButton.setValue(values[0]);
                this.secondButton.setValue(values[1]);
            };

            SliderRange.prototype.setBoundary = function () {
                this.firstButton.leftBoundary = 0;
                this.firstButton.rightBoundary = this.secondButton.getPosition();
                this.secondButton.leftBoundary = this.firstButton.getPosition();
                this.secondButton.rightBoundary = this.slider.element.width();
            };

            SliderRange.prototype.getPosition = function () {
                return [this.firstButton.getPosition(), this.secondButton.getPosition()];
            };

            SliderRange.prototype.getPercentPosition = function () {
                return [this.firstButton.getPercent(), this.secondButton.getPercent()];
            };

            SliderRange.prototype.getValue = function () {
                return [this.firstButton.getValue(), this.secondButton.getValue()];
            };
            return SliderRange;
        })();

        var SliderCaption = (function () {
            function SliderCaption(slider) {
                this.slider = slider;
                this.separator = "-";
                this.unitSign = "";
                if (this.slider.options.displayAsPercent) {
                    this.separator = this.slider.options.displayAsPercent.separator != undefined ? this.slider.options.displayAsPercent.separator : this.separator;
                } else if (this.slider.options.displayAsValue) {
                    this.separator = this.slider.options.displayAsValue.separator != undefined ? this.slider.options.displayAsValue.separator : this.separator;
                    this.unitSign = this.slider.options.displayAsValue.unitSign != undefined ? this.slider.options.displayAsValue.unitSign : this.unitSign;
                }
            }
            SliderCaption.prototype.build = function () {
                this.caption = Coveo.$("<div class='coveo-slider-caption'></div>");
                return this.caption;
            };

            SliderCaption.prototype.getCaption = function () {
                return this.caption.text();
            };

            SliderCaption.prototype.getCaptionFromValues = function (values) {
                return this.getValueCaption(values);
            };

            SliderCaption.prototype.getCaptionFromValuesAsPercent = function (values) {
                return this.getValueCaption(values);
            };

            SliderCaption.prototype.setAsValue = function () {
                this.caption.text(this.getValueCaption());
            };

            SliderCaption.prototype.setAsPercent = function () {
                var values = this.slider.getPercentPosition();
                this.caption.text([(values[0] * 100).toFixed(this.slider.options.rounded), "%", this.separator, (values[1] * 100).toFixed(this.slider.options.rounded), "%"].join(" "));
            };

            SliderCaption.prototype.setFromString = function (str) {
                this.caption.text(str);
            };

            SliderCaption.prototype.getValueCaption = function (values) {
                if (typeof values === "undefined") { values = this.slider.getValues(); }
                var first = values[0];
                var second = values[1];

                if (this.slider.options.dateField) {
                    var firstAsDate = new Date(first);
                    var secondAsDate = new Date(second);
                    firstAsDate.setHours(0, 0, 0, 0);
                    secondAsDate.setHours(0, 0, 0, 0);
                    first = Globalize.format(firstAsDate, this.slider.options.dateFormat || "MMM dd, yyyy");
                    second = Globalize.format(secondAsDate, this.slider.options.dateFormat || "MMM dd, yyyy");
                    this.unitSign = "";
                } else {
                    first = first.toFixed(this.slider.options.rounded);
                    second = second.toFixed(this.slider.options.rounded);
                }
                return [first, this.unitSign, this.separator, second, this.unitSign].join(" ");
            };
            return SliderCaption;
        })();

        var SliderGraph = (function () {
            function SliderGraph(slider) {
                var _this = this;
                this.slider = slider;
                this.svg = d3.select(slider.element.get(0)).append("svg").append("g");
                this.x = d3.scale.ordinal();
                this.y = d3.scale.linear();
                this.slider.options.graph.margin = Coveo.Utils.mergeDeep({ top: 20, right: 0, left: 0, bottom: 20 }, this.slider.options.graph.margin || {});
                this.slider.options.graph.animationDuration = this.slider.options.graph.animationDuration || 500;
                Coveo.$(window).resize(function () {
                    _this.draw();
                });
                this.tooltip = Coveo.$("<div></div>").css({
                    "display": "none"
                }).addClass("coveo-slider-tooltip");
                this.slider.element.append(this.tooltip);
                this.slider.options.graph.steps = this.slider.options.graph.steps || 10;
            }
            SliderGraph.prototype.draw = function (data) {
                if (typeof data === "undefined") { data = this.oldData; }
                var sliderOuterWidth = this.slider.element.outerWidth();
                var sliderOuterHeight = this.slider.element.outerHeight();
                var width = sliderOuterWidth - this.slider.options.graph.margin.left - this.slider.options.graph.margin.right;
                var height = sliderOuterHeight - this.slider.options.graph.margin.top - this.slider.options.graph.margin.bottom;

                this.applyTransformOnSvg(width, height);
                this.setXAndYRange(width, height);
                this.setXAndYDomain(data);

                var bars = this.svg.selectAll(".coveo-bar").data(data);
                var currentSliderValues = this.slider.getValues();
                this.renderGraphBars(bars, width, height, currentSliderValues);
                this.setGraphBarsTransition(bars, height, currentSliderValues);
                this.oldData = data;
            };

            SliderGraph.prototype.setXAndYRange = function (width, height) {
                this.x.rangeBands([0, width], 0.2, 0);
                this.y.range([height - this.slider.options.graph.margin.top, 0]);
            };

            SliderGraph.prototype.setXAndYDomain = function (data) {
                this.padGraphWithEmptyData(data);
                this.x.domain(_.map(data, function (d) {
                    return d.start;
                }));
                this.y.domain([0, d3.max(data, function (d) {
                        return d.y;
                    })]);
            };

            SliderGraph.prototype.padGraphWithEmptyData = function (data) {
                var oneStepOfGraph = data[0].end - data[0].start;
                this.padBeginningOfGraphWithEmptyData(data, oneStepOfGraph);
                this.padEndOfGraphWithEmptyData(data, oneStepOfGraph);
            };

            SliderGraph.prototype.padBeginningOfGraphWithEmptyData = function (data, oneStepOfGraph) {
                if (data[0].start > this.slider.options.start) {
                    var difToFillAtStart = data[0].start - this.slider.options.start;
                    var nbOfStepsAtStart = Math.round(difToFillAtStart / oneStepOfGraph);
                    var currentStep = data[0].start;
                    for (var i = nbOfStepsAtStart; i > 0; i--) {
                        data.unshift({ start: currentStep - oneStepOfGraph, end: currentStep, y: 0 });
                        currentStep -= oneStepOfGraph;
                    }
                }
            };

            SliderGraph.prototype.padEndOfGraphWithEmptyData = function (data, oneStepOfGraph) {
                var lastDataIndex = data.length - 1;
                if (data[lastDataIndex].end < this.slider.options.end) {
                    var diffToFillAtEnd = this.slider.options.end - data[lastDataIndex].end;
                    var nbOfStepsAtEnd = Math.round(diffToFillAtEnd / oneStepOfGraph);
                    var currentStep = data[lastDataIndex].end;
                    for (var i = 0; i < nbOfStepsAtEnd; i++) {
                        data.push({ start: currentStep, end: currentStep + oneStepOfGraph, y: 0 });
                        currentStep += oneStepOfGraph;
                    }
                }
            };

            SliderGraph.prototype.applyTransformOnSvg = function (width, height) {
                Coveo.$(this.slider.element).find("svg").attr("width", width).attr("height", height);
                this.svg.attr("transform", "translate(" + this.slider.options.graph.margin.left + "," + this.slider.options.graph.margin.top + ")");
            };

            SliderGraph.prototype.renderGraphBars = function (bars, width, height, currentSliderValues) {
                bars.enter().append("rect").attr("class", this.getFunctionForClass(currentSliderValues)).attr("width", this.x.rangeBand()).attr("height", this.getFunctionForHeight(height)).attr("x", this.getFunctionForX()).attr("y", this.getFunctionForY()).on("click", this.getFunctionForClick()).on("mouseover", this.getFunctionForMouseOver(height)).on("mouseout", this.getFunctionForMouseOut());
            };

            SliderGraph.prototype.setGraphBarsTransition = function (bars, height, currentSliderValues) {
                bars.transition().attr("x", this.getFunctionForX()).attr("width", this.x.rangeBand()).attr("class", this.getFunctionForClass(currentSliderValues)).transition().duration(this.slider.options.graph.animationDuration).attr("y", this.getFunctionForY()).attr("height", this.getFunctionForHeight(height));
            };

            SliderGraph.prototype.getBarClass = function (currentSliderValues, d, i) {
                if (d.start >= currentSliderValues[0] && d.end <= currentSliderValues[1]) {
                    return "coveo-active";
                } else if (currentSliderValues[0] == this.slider.options.start && i == 0) {
                    return "coveo-active";
                } else if (currentSliderValues[1] == this.slider.options.end && i == this.slider.options.graph.steps - 1) {
                    return "coveo-active";
                } else {
                    return "";
                }
            };

            SliderGraph.prototype.setTooltip = function (d, height) {
                this.tooltip.html("<span class='coveo-caption'>" + this.slider.getCaptionFromValue([d.start, d.end]) + "</span><span class='coveo-count'>" + d.y + "</span>");
                this.tooltip.css({
                    "display": "block",
                    "left": this.x(d.start) - (0.2 * this.slider.options.graph.steps),
                    "top": this.y(d.y) - height
                });
            };

            SliderGraph.prototype.getFunctionForX = function () {
                var _this = this;
                return function (d) {
                    return _this.x(d.start);
                };
            };

            SliderGraph.prototype.getFunctionForY = function () {
                var _this = this;
                return function (d) {
                    return _this.y(d.y);
                };
            };

            SliderGraph.prototype.getFunctionForHeight = function (height) {
                var _this = this;
                return function (d) {
                    return height - _this.y(d.y);
                };
            };

            SliderGraph.prototype.getFunctionForClass = function (currentSliderValues) {
                var _this = this;
                return function (d, i) {
                    return "coveo-bar " + _this.getBarClass(currentSliderValues, d, i);
                };
            };

            SliderGraph.prototype.getFunctionForClick = function () {
                var _this = this;
                return function (d, i) {
                    _this.slider.element.trigger(Coveo.Events.SliderEvents.graphValueSelected, { start: d.start, end: d.end, value: d.y });
                };
            };

            SliderGraph.prototype.getFunctionForMouseOver = function (height) {
                var _this = this;
                return function (d) {
                    var pageX = d3.event.clientX;
                    var pageY = d3.event.clientY;
                    _this.setTooltip(d, height);
                };
            };

            SliderGraph.prototype.getFunctionForMouseOut = function () {
                var _this = this;
                return function () {
                    _this.tooltip.css("display", "none");
                };
            };
            return SliderGraph;
        })();
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultEmailActionOptions = (function (_super) {
            __extends(DefaultEmailActionOptions, _super);
            function DefaultEmailActionOptions(element) {
                _super.call(this, element);
                this.type = this.loadStringFromAttribute("data-type", "forward");
                this.currentUserEmail = this.loadStringFromAttribute("current-user-email", "");
            }
            return DefaultEmailActionOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultEmailActionOptions = DefaultEmailActionOptions;

        var EmailAction = (function (_super) {
            __extends(EmailAction, _super);
            function EmailAction(element, options, bindings, result) {
                var _this = this;
                _super.call(this, element, EmailAction.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;

                this.options = new Ui.DefaultEmailActionsOptions(this.element).merge(options);
                this.result = result || this.resolveResult();
                this.setMailToFromResult();
                Coveo.$(this.element).fastClick(function () {
                    _this.showWaitingAnimation();
                    if (!_this.mailTo.bodyIsSet()) {
                        _this.appendBodyToMailTo(function () {
                            return _this.openMailTo();
                        });
                    } else {
                        _this.openMailTo();
                    }
                });
            }
            EmailAction.prototype.showWaitingAnimation = function () {
                Coveo.$(this.element).parent().find('.coveo-wait-animation').show();
            };

            EmailAction.prototype.hideWaitingAnimation = function () {
                Coveo.$(this.element).parent().find('.coveo-wait-animation').hide();
            };

            EmailAction.prototype.setMailToFromResult = function () {
                switch (this.options.type) {
                    case EmailAction.reply:
                        this.mailTo = Ui.EmailActionsUtils.buildReplyMailToFromResult(this.result, this.options.currentUserEmail);
                        Coveo.$(this.element).append(Ui.l.Reply);
                        break;
                    case EmailAction.replyAll:
                        this.mailTo = Ui.EmailActionsUtils.buildReplyAllMailToFromResult(this.result, this.options.currentUserEmail);
                        Coveo.$(this.element).append(Ui.l.ReplyAll);
                        break;
                    case EmailAction.forward:
                        Coveo.$(this.element).append(Ui.l.Forward);
                        this.mailTo = Ui.EmailActionsUtils.buildForwardMailToFromResult(this.result, this.options.currentUserEmail);
                        break;
                    default:
                        this.mailTo = new Ui.MailTo({});
                        break;
                }
            };

            EmailAction.prototype.appendBodyToMailTo = function (callback) {
                var _this = this;
                if (!Ui.Device.isPhonegap()) {
                    this.queryController.getEndpoint().getDocumentText(this.result.uniqueId).done(function (res) {
                        return _this.doneRetrieveBody(res, callback);
                    }).fail(function () {
                        return _this.doneRetrieveBody("", callback);
                    });
                } else {
                    var endPoint = this.queryController.getEndpoint();
                    var deferer = Ui.Device.isAndroid() ? endPoint.getDocumentText(this.result.uniqueId) : endPoint.getDocumentHtml(this.result.uniqueId, "");

                    deferer.done(function (res) {
                        return _this.doneRetrieveBody(res, callback);
                    }).fail(function (res) {
                        return _this.doneRetrieveBody('', callback);
                    });
                }
            };

            EmailAction.prototype.doneRetrieveBody = function (res, callback) {
                var text = res.content ? res.content : res;
                this.mailTo.setMailToBodyFromText(text);
                callback(res);
            };

            EmailAction.prototype.openMailTo = function () {
                this.mailTo.open();
                this.hideWaitingAnimation();
            };
            EmailAction.ID = 'EmailAction';
            EmailAction.forward = "forward";
            EmailAction.reply = "reply";
            EmailAction.replyAll = "replyAll";
            return EmailAction;
        })(Coveo.Ui.Component);
        Ui.EmailAction = EmailAction;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultEmailActionsOptions = (function (_super) {
            __extends(DefaultEmailActionsOptions, _super);
            function DefaultEmailActionsOptions(element) {
                _super.call(this, element);
                this.currentUserEmail = '';
                this.reply = true;
                this.replyAll = true;
                this.forward = true;
                this.currentUserEmail = this.loadStringFromAttribute('data-current-user-email', '');
                this.reply = this.loadBooleanFromAttribute('data-reply', true);
                this.replyAll = this.loadBooleanFromAttribute('data-reply-all', true);
                this.forward = this.loadBooleanFromAttribute('data-forward', true);
            }
            return DefaultEmailActionsOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultEmailActionsOptions = DefaultEmailActionsOptions;

        var EmailActions = (function (_super) {
            __extends(EmailActions, _super);
            function EmailActions(element, options, bindings, result) {
                _super.call(this, element, EmailActions.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                this.options = new DefaultEmailActionsOptions(element).merge(options);
                this.result = result || this.resolveResult();
                this.createAndAppendEmailActions();
                this.appendWaitingAnimation();
            }
            EmailActions.prototype.createAndAppendEmailActions = function () {
                if (this.options.reply) {
                    this.reply = new Ui.EmailAction(Coveo.$(document.createElement('div'))[0], {
                        type: Ui.EmailAction.reply,
                        currentUserEmail: this.options.currentUserEmail
                    }, this.getBindings(), this.result);
                    Coveo.$(this.element).append(this.reply.element);
                }
                if (this.options.replyAll) {
                    this.replyAll = new Ui.EmailAction(Coveo.$(document.createElement('div'))[0], {
                        type: Ui.EmailAction.replyAll,
                        currentUserEmail: this.options.currentUserEmail
                    }, this.getBindings(), this.result);
                    Coveo.$(this.element).append(this.replyAll.element);
                }
                if (this.options.forward) {
                    this.forward = new Ui.EmailAction(Coveo.$(document.createElement('div'))[0], {
                        type: Ui.EmailAction.forward,
                        currentUserEmail: this.options.currentUserEmail
                    }, this.getBindings(), this.result);
                    Coveo.$(this.element).append(this.forward.element);
                }
            };

            EmailActions.prototype.appendWaitingAnimation = function () {
                Coveo.$(this.element).append(Coveo.$(document.createElement('div')).addClass('coveo-wait-animation').hide());
            };
            EmailActions.ID = 'EmailActions';
            return EmailActions;
        })(Coveo.Ui.Component);
        Ui.EmailActions = EmailActions;
        Coveo.Ui.CoveoJQuery.registerAutoCreateComponent(EmailActions);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultPreferencesPanelOptions = (function (_super) {
            __extends(DefaultPreferencesPanelOptions, _super);
            function DefaultPreferencesPanelOptions() {
                _super.apply(this, arguments);
            }
            return DefaultPreferencesPanelOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultPreferencesPanelOptions = DefaultPreferencesPanelOptions;

        var PreferencesPanel = (function (_super) {
            __extends(PreferencesPanel, _super);
            function PreferencesPanel(element, options, bindings) {
                _super.call(this, element, PreferencesPanel.ID, bindings);
                this.element = element;
                this.options = options;
                this.buildCloseButton();
                this.buildTitle();
            }
            PreferencesPanel.prototype.getCssClass = function () {
                return "coveo-preference-panel";
            };

            PreferencesPanel.prototype.getMenuItems = function () {
                var _this = this;
                return [{ text: Ui.l.Preferences(), onOpen: function () {
                            return _this.open();
                        }, onClose: function () {
                            return _this.close();
                        } }];
            };

            PreferencesPanel.prototype.open = function () {
                Coveo.$(this.element).addClass("coveo-active");
            };

            PreferencesPanel.prototype.close = function () {
                Coveo.$(this.element).removeClass("coveo-active");
            };

            PreferencesPanel.prototype.save = function () {
                Coveo.$(this.element).trigger(Coveo.Events.PreferencesPanelEvents.savePreferences);
                this.queryController.executeQuery();
            };

            PreferencesPanel.prototype.closeWithoutSave = function () {
                Coveo.$(this.element).trigger(Coveo.Events.PreferencesPanelEvents.exitPreferencesWithoutSave);
            };

            PreferencesPanel.prototype.buildCloseButton = function () {
                var _this = this;
                var closeButton = Coveo.$("<div class='coveo-close'><span class='coveo-icon'></span></div>");
                closeButton.fastClick(function () {
                    _this.closeWithoutSave();
                    _this.close();
                });
                Coveo.$(this.element).prepend(closeButton);
            };

            PreferencesPanel.prototype.buildTitle = function () {
                var title = Coveo.$("<div class='coveo-title'>" + Ui.l.Preferences() + "</div>");
                Coveo.$(this.element).prepend(title);
            };
            PreferencesPanel.ID = 'PreferencesPanel';
            return PreferencesPanel;
        })(Ui.Component);
        Ui.PreferencesPanel = PreferencesPanel;

        Ui.CoveoJQuery.registerAutoCreateComponent(PreferencesPanel);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var PreferencesPanelBoxInput = (function () {
            function PreferencesPanelBoxInput(boxInputToBuild, nameOfInput, type) {
                this.boxInputToBuild = boxInputToBuild;
                this.nameOfInput = nameOfInput;
                this.type = type;
                this.inputs = {};
                this.inputTemplate = _.template("<div class='coveo-choice-container'>\
        <div class='coveo-section coveo-section-input'>\
          <input <%= otherAttribute %> class='coveo-<%= label %>' id='coveo-<%= label %>' type='<%= type %>' name='<%= name%>' value='<%= label %>' ></input><span class='coveo-input-icon'></span><label for='coveo-<%= label %>'><%= label %></label>\
        </div>\
        <div class='coveo-section coveo-section-tab'><%- tab %></div>\
      <div class='coveo-section coveo-section-expression'><%- expression %></div>\
      </div>");
            }
            PreferencesPanelBoxInput.prototype.build = function () {
                var _this = this;
                return _.reduce(_.map(this.boxInputToBuild, function (toBuild) {
                    _this.inputs[toBuild.label] = Coveo.$(_this.inputTemplate({ label: toBuild.label, name: _this.nameOfInput, type: _this.type, otherAttribute: toBuild.otherAttribute, tab: toBuild.tab, expression: toBuild.expression }));
                    return _this.inputs[toBuild.label];
                }), function (memo, input) {
                    return memo.add(input);
                });
            };

            PreferencesPanelBoxInput.prototype.select = function (toSelect) {
                Coveo.Assert.exists(this.inputs[toSelect]);
                this.inputs[toSelect].find("input").prop("checked", true);
                this.inputs[toSelect].find(".coveo-input-icon").addClass("coveo-selected");
            };

            PreferencesPanelBoxInput.prototype.unselect = function (toUnselect) {
                Coveo.Assert.exists(this.inputs[toUnselect]);
                this.inputs[toUnselect].find("input").prop("checked", false);
                this.inputs[toUnselect].find(".coveo-input-icon").removeClass("coveo-selected");
            };

            PreferencesPanelBoxInput.prototype.getSelected = function () {
                var checked = _.find(this.inputs, function (input) {
                    return input.find("input").prop("checked");
                });
                return checked.find("input").val();
            };

            PreferencesPanelBoxInput.prototype.getSelecteds = function () {
                var checkeds = _.filter(this.inputs, function (input) {
                    return input.find("input").prop("checked");
                });

                return _.map(checkeds, function (checked) {
                    return checked.find("input").val();
                });
            };
            return PreferencesPanelBoxInput;
        })();
        Ui.PreferencesPanelBoxInput = PreferencesPanelBoxInput;

        var PreferencesPanelRadioInput = (function (_super) {
            __extends(PreferencesPanelRadioInput, _super);
            function PreferencesPanelRadioInput(radioElementToBuild, name) {
                _super.call(this, radioElementToBuild, name, "radio");
                this.radioElementToBuild = radioElementToBuild;
                this.name = name;
            }
            return PreferencesPanelRadioInput;
        })(PreferencesPanelBoxInput);
        Ui.PreferencesPanelRadioInput = PreferencesPanelRadioInput;

        var PreferencesPanelCheckboxInput = (function (_super) {
            __extends(PreferencesPanelCheckboxInput, _super);
            function PreferencesPanelCheckboxInput(checkboxElementToBuild, name) {
                _super.call(this, checkboxElementToBuild, name, "checkbox");
                this.checkboxElementToBuild = checkboxElementToBuild;
                this.name = name;
            }
            PreferencesPanelCheckboxInput.prototype.build = function () {
                var build = _super.prototype.build.call(this);
                var input = build.find("input");
                var icons = build.find(".coveo-input-icon");
                _.each(icons, function (icon) {
                    var input = Coveo.$(icon).siblings("input");
                    var iconJquery = Coveo.$(icon);
                    input.change(function () {
                        iconJquery.toggleClass("coveo-selected", input.is(":checked"));
                    });
                    iconJquery.fastClick(function () {
                        input.prop("checked", !input.is(":checked"));
                        input.change();
                    });
                });
                return build;
            };
            return PreferencesPanelCheckboxInput;
        })(PreferencesPanelBoxInput);
        Ui.PreferencesPanelCheckboxInput = PreferencesPanelCheckboxInput;

        var PreferencesPanelTextInput = (function () {
            function PreferencesPanelTextInput(textElementToBuild, name) {
                this.textElementToBuild = textElementToBuild;
                this.name = name;
                this.inputs = {};
                this.inputTemplate = _.template("<div class='coveo-choice-container'><input <%= otherAttribute %> class='coveo-<%= label %>' id='coveo-<%= label %>' type='<%= type %>' name='<%= name%>' placeholder='<%= placeholder %>' ></input></div>");
            }
            PreferencesPanelTextInput.prototype.build = function () {
                var _this = this;
                return _.reduce(_.map(this.textElementToBuild, function (toBuild) {
                    _this.inputs[toBuild.label] = Coveo.$(_this.inputTemplate({ label: toBuild.label, name: _this.name, type: "text", otherAttribute: toBuild.otherAttribute, placeholder: toBuild.placeholder || toBuild.label }));
                    return _this.inputs[toBuild.label];
                }), function (memo, input) {
                    return memo.add(input);
                });
            };

            PreferencesPanelTextInput.prototype.getValues = function () {
                var _this = this;
                return _.map(this.inputs, function (input, key) {
                    return _this.getInput(key).val();
                });
            };

            PreferencesPanelTextInput.prototype.setValue = function (input, value) {
                Coveo.Assert.exists(this.inputs[input]);
                this.getInput(input).val(value);
            };

            PreferencesPanelTextInput.prototype.reset = function () {
                _.each(this.inputs, function (input) {
                    input.find("input").val("");
                });
            };

            PreferencesPanelTextInput.prototype.getInput = function (input) {
                Coveo.Assert.exists(this.inputs[input]);
                var found = this.inputs[input].find("input");
                if (found.length == 0) {
                    found = this.inputs[input].find("textarea");
                }
                return found;
            };
            return PreferencesPanelTextInput;
        })();
        Ui.PreferencesPanelTextInput = PreferencesPanelTextInput;

        var PreferencesPanelTextAreaInput = (function (_super) {
            __extends(PreferencesPanelTextAreaInput, _super);
            function PreferencesPanelTextAreaInput() {
                _super.apply(this, arguments);
                this.inputTemplate = _.template("<div class='coveo-choice-container'><textarea <%= otherAttribute %> class='coveo-<%= label %>' id='coveo-<%= label %>' name='<%= name%>' placeholder='<%= placeholder %>' ></textarea></div>");
            }
            PreferencesPanelTextAreaInput.prototype.build = function () {
                var _this = this;
                return _.reduce(_.map(this.textElementToBuild, function (toBuild) {
                    _this.inputs[toBuild.label] = Coveo.$(_this.inputTemplate({ label: toBuild.label, name: _this.name, otherAttribute: toBuild.otherAttribute, placeholder: toBuild.placeholder || toBuild.label }));
                    return _this.inputs[toBuild.label];
                }), function (memo, input) {
                    return memo.add(input);
                });
            };
            return PreferencesPanelTextAreaInput;
        })(PreferencesPanelTextInput);
        Ui.PreferencesPanelTextAreaInput = PreferencesPanelTextAreaInput;

        var PreferencePanelMultiSelectInput = (function () {
            function PreferencePanelMultiSelectInput(toBuild, options, name) {
                this.toBuild = toBuild;
                this.options = options;
                this.name = name;
                this.textInput = new PreferencesPanelTextAreaInput([{ label: toBuild.label, otherAttribute: 'readonly' }], name);
            }
            PreferencePanelMultiSelectInput.prototype.build = function () {
                var _this = this;
                this.select = Coveo.$("<select multiple></select>");
                _.each(this.options, function (option) {
                    _this.select.append(Coveo.$("<option>" + option + "</option>"));
                });
                this.select.change(function () {
                    var values = _this.select.val();
                    if (!Coveo.Utils.isNullOrUndefined(values)) {
                        _this.textInput.setValue(_this.toBuild.label, values.join(","));
                    } else {
                        _this.reset();
                    }
                });
                return this.textInput.build().append(this.select);
            };

            PreferencePanelMultiSelectInput.prototype.getValues = function () {
                return this.textInput.getValues()[0].split(",");
            };

            PreferencePanelMultiSelectInput.prototype.setValues = function (values) {
                this.textInput.setValue(this.toBuild.label, values.join(','));
            };

            PreferencePanelMultiSelectInput.prototype.reset = function () {
                this.textInput.setValue(this.toBuild.label, "");
            };
            return PreferencePanelMultiSelectInput;
        })();
        Ui.PreferencePanelMultiSelectInput = PreferencePanelMultiSelectInput;
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultsPreferencesOptions = (function (_super) {
            __extends(DefaultResultsPreferencesOptions, _super);
            function DefaultResultsPreferencesOptions(element) {
                _super.call(this, element);
                this.loadBooleanFromAttribute("data-show-open-in-outlook", true);
                this.loadBooleanFromAttribute("data-show-open-in-new-window", true);
            }
            return DefaultResultsPreferencesOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultsPreferencesOptions = DefaultResultsPreferencesOptions;

        var ResultsPreferences = (function (_super) {
            __extends(ResultsPreferences, _super);
            function ResultsPreferences(element, options, bindings) {
                var _this = this;
                _super.call(this, element, ResultsPreferences.ID, bindings);
                this.element = element;
                this.options = options;
                this.bindings = bindings;
                this.options = new DefaultResultsPreferencesOptions(element).merge(options);
                this.preferencePanel = Coveo.$(this.element).parents("." + Ui.Component.computeCssClassNameForType(Ui.PreferencesPanel.ID));
                this.preferencePanelLocalStorage = new Coveo.LocalStorageUtils(ResultsPreferences.ID);

                Coveo.Assert.exists(this.componentOptionsModel);
                Coveo.Assert.exists(window.localStorage);
                Coveo.Assert.isLargerOrEqualsThan(1, this.preferencePanel.length);

                this.preferences = new Ui.DefaultResultLinkOptions(this.element).merge(this.preferencePanelLocalStorage.load());
                this.updateComponentOptionsModel();

                this.bind.on(this.preferencePanel, Coveo.Events.PreferencesPanelEvents.savePreferences, function () {
                    return _this.save();
                });
                this.bind.on(this.preferencePanel, Coveo.Events.PreferencesPanelEvents.exitPreferencesWithoutSave, function () {
                    return _this.exitWithoutSave();
                });

                this.buildTitle();
                this.buildCheckboxesInput();
            }
            ResultsPreferences.prototype.save = function () {
                this.fromCheckboxInputToPreferences();
                this.logger.info("Saving preferences", this.preferences);
                this.preferencePanelLocalStorage.save(this.preferences);
                this.updateComponentOptionsModel();
            };

            ResultsPreferences.prototype.exitWithoutSave = function () {
                this.fromPreferencesToCheckboxInput();
            };

            ResultsPreferences.prototype.updateComponentOptionsModel = function () {
                this.componentOptionsModel.set(Coveo.Models.ComponentOptionsModel.attributesEnum.resultLink, this.preferences);
            };

            ResultsPreferences.prototype.buildTitle = function () {
                Coveo.$(this.element).append(Coveo.$("<div class='coveo-title'>" + Ui.l.LinkOpeningSettings() + "</div>"));
            };

            ResultsPreferences.prototype.buildCheckboxesInput = function () {
                var _this = this;
                this.preferencePanelCheckboxInput = new Ui.PreferencesPanelCheckboxInput([{ label: Ui.l.OpenInOutlookWhenPossible() }, { label: Ui.l.AlwaysOpenInNewWindow() }], ResultsPreferences.ID);
                var container = Coveo.$("<div class='coveo-choices-container'></div>");
                container.append(this.preferencePanelCheckboxInput.build());
                container.find('input').change(function (e) {
                    _this.fromPreferenceChangeEventToUsageAnalyticsLog(e);
                    _this.save();
                    _this.queryController.executeQuery();
                });
                Coveo.$(this.element).append(container);
                this.fromPreferencesToCheckboxInput();
            };

            ResultsPreferences.prototype.fromCheckboxInputToPreferences = function () {
                var selected = this.preferencePanelCheckboxInput.getSelecteds();
                this.preferences = {
                    openInOutlook: false,
                    alwaysOpenInNewWindow: false
                };
                if (_.contains(selected, Ui.l.OpenInOutlookWhenPossible())) {
                    this.preferences.openInOutlook = true;
                }
                if (_.contains(selected, Ui.l.AlwaysOpenInNewWindow())) {
                    this.preferences.alwaysOpenInNewWindow = true;
                }
            };

            ResultsPreferences.prototype.fromPreferencesToCheckboxInput = function () {
                if (this.preferences.openInOutlook) {
                    this.preferencePanelCheckboxInput.select(Ui.l.OpenInOutlookWhenPossible());
                }
                if (this.preferences.alwaysOpenInNewWindow) {
                    this.preferencePanelCheckboxInput.select(Ui.l.AlwaysOpenInNewWindow());
                }
            };

            ResultsPreferences.prototype.fromPreferenceChangeEventToUsageAnalyticsLog = function (e) {
                var type = Coveo.$(e.target).is(":checked") ? "selected" : "unselected";
                var preference = Coveo.$(e.target).val();
                this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.preferencesChange, { preferenceName: preference, preferenceType: type });
            };
            ResultsPreferences.ID = "ResultsPreferences";
            return ResultsPreferences;
        })(Ui.Component);
        Ui.ResultsPreferences = ResultsPreferences;

        Ui.CoveoJQuery.registerAutoCreateComponent(ResultsPreferences);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultsFiltersPreferenceOptions = (function (_super) {
            __extends(DefaultResultsFiltersPreferenceOptions, _super);
            function DefaultResultsFiltersPreferenceOptions(element) {
                _super.call(this, element);
                this.includeInBreadcrumb = this.loadBooleanFromAttribute("data-include-in-breadcrumb", true);
                this.showAdvancedFilters = this.loadBooleanFromAttribute("data-show-advanced-filters", true);
            }
            return DefaultResultsFiltersPreferenceOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultsFiltersPreferenceOptions = DefaultResultsFiltersPreferenceOptions;

        var ResultsFiltersPreferences = (function (_super) {
            __extends(ResultsFiltersPreferences, _super);
            function ResultsFiltersPreferences(element, options, bindings) {
                var _this = this;
                _super.call(this, element, ResultsFiltersPreferences.ID, bindings);
                this.element = element;
                this.options = options;
                this.bindings = bindings;
                this.options = new DefaultResultsFiltersPreferenceOptions(element).merge(options);
                this.preferencePanel = Coveo.$(this.element).parents("." + Ui.Component.computeCssClassNameForType(Ui.PreferencesPanel.ID));
                this.preferencePanelLocalStorage = new Coveo.LocalStorageUtils(ResultsFiltersPreferences.ID);
                this.mergeLocalPreferencesWithStaticPreferences();

                this.bindPreferencePanelEvent();
                this.bindBreadcrumbEvent();
                this.bindQueryEvent();
                this.createDom();

                var eventName = this.queryStateModel.getEventName(Coveo.Models.Model.eventTypes.changeOne + Coveo.Models.QueryStateModel.attributesEnum.t);
                Coveo.$(this.root).one(eventName, function () {
                    _this.fromPreferencesToCheckboxInput();
                });
            }
            ResultsFiltersPreferences.prototype.createDom = function () {
                this.buildTitle();
                this.buildCheckboxesInput();
                if (this.options.showAdvancedFilters) {
                    this.buildAdvancedFilters();
                }
            };

            ResultsFiltersPreferences.prototype.save = function () {
                this.fromCheckboxInputToPreferences();
                var toSave = _.omit(this.preferences, 'tab');
                this.logger.info("Saving preferences", toSave);
                this.preferencePanelLocalStorage.save(toSave);
            };

            ResultsFiltersPreferences.prototype.exitWithoutSave = function () {
                this.fromPreferencesToCheckboxInput();
            };

            ResultsFiltersPreferences.prototype.bindPreferencePanelEvent = function () {
                var _this = this;
                this.bind.on(this.preferencePanel, Coveo.Events.PreferencesPanelEvents.savePreferences, function () {
                    return _this.save();
                });
                this.bind.on(this.preferencePanel, Coveo.Events.PreferencesPanelEvents.exitPreferencesWithoutSave, function () {
                    return _this.exitWithoutSave();
                });
            };

            ResultsFiltersPreferences.prototype.bindBreadcrumbEvent = function () {
                if (this.options.includeInBreadcrumb) {
                    this.bind.onRoot(Coveo.Events.BreadcrumbEvents.populateBreadcrumb, Coveo.$.proxy(this.handlePopulateBreadcrumb, this));
                    this.bind.onRoot(Coveo.Events.BreadcrumbEvents.clearBreadcrumb, Coveo.$.proxy(this.handleClearBreadcrumb, this));
                }
            };

            ResultsFiltersPreferences.prototype.bindQueryEvent = function () {
                this.bind.onRoot(Coveo.Events.QueryEvents.buildingQuery, Coveo.$.proxy(this.handleBuildingQuery, this));
            };

            ResultsFiltersPreferences.prototype.handleBuildingQuery = function (e, args) {
                _.each(this.getActiveFilters(), function (filter) {
                    args.queryBuilder.advancedExpression.add(filter.expression);
                });
            };

            ResultsFiltersPreferences.prototype.handlePopulateBreadcrumb = function (e, args) {
                var actives = this.getActiveFilters();
                if (Coveo.Utils.isNonEmptyArray(actives)) {
                    var container = Coveo.$('<div/>').addClass('coveo-results-filter-preferences-breadcrumb');
                    Coveo.$('<span/>').addClass('coveo-title').text(Ui.l.FiltersInYourPreferences() + ":").appendTo(container);
                    var valuesContainer = Coveo.$('<span/>').addClass('coveo-values').appendTo(container);
                    for (var i = 0; i < actives.length; i++) {
                        if (i != 0) {
                            Coveo.$('<span/>').addClass('coveo-separator').text(', ').appendTo(valuesContainer);
                        }
                        this.buildBreadcrumb(actives[i]).appendTo(valuesContainer);
                    }
                    args.breadcrumbs.push({ element: container.get(0) });
                }
            };

            ResultsFiltersPreferences.prototype.handleClearBreadcrumb = function (e, args) {
                _.each(this.getActiveFilters(), function (filter) {
                    filter.selected = false;
                });
                this.fromPreferencesToCheckboxInput();
            };

            ResultsFiltersPreferences.prototype.buildTitle = function () {
                Coveo.$(this.element).append(Coveo.$("<div class='coveo-title'>" + Ui.l.ResultsFilteringExpression() + "</div>"));
            };

            ResultsFiltersPreferences.prototype.buildAdvancedFilters = function () {
                var _this = this;
                this.advancedFilters = Coveo.$("<div>" + Ui.l.Create() + "</div>").addClass("coveo-advanced-filters");
                this.buildAdvancedFilterInput();
                this.buildAdvancedFilterFormValidate();
                this.advancedFiltersBuilder = Coveo.$("<div class='coveo-advanced-filters-builder'></div>");
                this.advancedFiltersBuilder.append(this.advancedFilterFormValidate);
                this.advancedFilters.fastClick(function () {
                    return _this.openAdvancedFilterSectionOrSaveFilters();
                });
                var onlineHelp = Coveo.$("<a href='http://onlinehelp.coveo.com/en/ces/7.0/user/user_help.htm' target='_blank' class='coveo-online-help'>?</a>");
                Coveo.$(this.element).find('.coveo-title').first().after(onlineHelp, this.advancedFilters);
                Coveo.$(this.element).append(this.advancedFiltersBuilder);
            };

            ResultsFiltersPreferences.prototype.buildAdvancedFilterInput = function () {
                this.advancedFiltersTextInputCaption = new Ui.PreferencesPanelTextAreaInput([{
                        label: Ui.l.Caption(),
                        placeholder: Ui.l.EnterExpressionName(),
                        otherAttribute: "required"
                    }], ResultsFiltersPreferences.ID + "-advanced-caption");
                this.advancedFiltersTextInputExpression = new Ui.PreferencesPanelTextAreaInput([{
                        label: Ui.l.Expression(),
                        placeholder: Ui.l.EnterExpressionToFilterWith(),
                        otherAttribute: "required"
                    }], ResultsFiltersPreferences.ID + "-advanced-expression");
                this.advancedFiltersTabSelect = new Ui.PreferencePanelMultiSelectInput({
                    label: Ui.l.Tab(),
                    placeholder: Ui.l.SelectTab()
                }, this.getAllTabs(), ResultsFiltersPreferences.ID + "-multiselect");
            };

            ResultsFiltersPreferences.prototype.buildAdvancedFilterFormValidate = function () {
                var _this = this;
                this.advancedFilterFormValidate = Coveo.$("<form></form>");
                var formSubmit = Coveo.$("<input type='submit' />");
                var saveFormButton = Coveo.$("<span class='coveo-save'></span>");
                var closeFormButton = Coveo.$("<span class='coveo-close'></span>");
                var saveAndCloseContainer = Coveo.$("<div class='coveo-choice-container coveo-close-and-save'></div>").append(saveFormButton, closeFormButton);

                this.advancedFilterFormValidate.append(this.advancedFiltersTextInputCaption.build().addClass("coveo-caption"), this.advancedFiltersTabSelect.build().addClass("coveo-tab"), this.advancedFiltersTextInputExpression.build().addClass("coveo-expression"), saveAndCloseContainer, formSubmit);

                saveFormButton.fastClick(function () {
                    formSubmit.click();
                });

                closeFormButton.fastClick(function () {
                    _this.advancedFiltersBuilder.toggleClass("coveo-active");
                });

                this.advancedFilterFormValidate.find('textarea').keyup(function (e) {
                    if (e.keyCode == 13 /* ENTER */) {
                        formSubmit.click();
                    }
                });

                this.advancedFilterFormValidate.submit(function (e) {
                    _this.validateAndSaveAdvancedFilter(e);
                });
            };

            ResultsFiltersPreferences.prototype.getAdvancedFiltersTextInputToBuild = function () {
                return [
                    {
                        label: Ui.l.Caption(),
                        otherAttribute: "required"
                    },
                    {
                        label: Ui.l.Expression(),
                        otherAttribute: "required"
                    }
                ];
            };

            ResultsFiltersPreferences.prototype.getAllTabs = function () {
                var tabsElement = Coveo.$(this.root).find("." + Ui.Component.computeCssClassNameForType(Ui.Tab.ID));
                return _.map(tabsElement, function (tabElement) {
                    var tab = Coveo.$(tabElement).coveo();
                    return tab.options.uniqueId;
                });
            };

            ResultsFiltersPreferences.prototype.getPreferencesBoxInputToBuild = function () {
                return _.map(this.preferences, function (filter) {
                    return {
                        label: filter.caption,
                        tab: filter.tab,
                        expression: filter.expression
                    };
                });
            };

            ResultsFiltersPreferences.prototype.buildCheckboxesInput = function () {
                var _this = this;
                if (this.preferenceContainer != undefined) {
                    this.preferenceContainer.remove();
                }
                var toBuild = this.getPreferencesBoxInputToBuild();
                if (Coveo.Utils.isNonEmptyArray(toBuild)) {
                    this.preferencePanelCheckboxInput = new Ui.PreferencesPanelCheckboxInput(toBuild, ResultsFiltersPreferences.ID);
                    this.preferenceContainer = Coveo.$("<div class='coveo-choices-container'></div>");
                    this.preferenceContainer.append(this.preferencePanelCheckboxInput.build());
                    this.preferenceContainer.find('.coveo-choice-container').append("<div class='coveo-section coveo-section-edit-delete'></div>");
                    Coveo.$(this.element).append(this.preferenceContainer);
                    this.buildEditAdvancedFilter();
                    this.buildDeleteAdvancedFilter();
                    this.fromPreferencesToCheckboxInput();
                    this.preferenceContainer.find('input').change(function (e) {
                        _this.save();
                        var filter = _this.preferences[Coveo.$(e.target).val()];
                        _this.fromFilterToAnalyticsEvent(filter, filter.selected ? 'selected' : 'unselected');
                        _this.queryController.executeQuery();
                    });
                }
            };

            ResultsFiltersPreferences.prototype.buildDeleteAdvancedFilter = function () {
                var _this = this;
                _.each(this.preferences, function (filter) {
                    if (filter.custom) {
                        var deleteElement = Coveo.$("<span class='coveo-delete'><span class='coveo-icon'></span></span>");
                        var filterElement = _this.getFilterElementByCaption(filter.caption);
                        var insertInto = filterElement.closest('.coveo-section').siblings('.coveo-section-edit-delete');
                        deleteElement.appendTo(insertInto);
                        deleteElement.fastClick(function () {
                            _this.confirmDelete(filter, filterElement);
                        });
                    }
                });
            };

            ResultsFiltersPreferences.prototype.buildEditAdvancedFilter = function () {
                var _this = this;
                _.each(this.preferences, function (filter) {
                    if (filter.custom) {
                        var editElement = Coveo.$("<span class='coveo-edit'><span class='coveo-icon'></span></span>");
                        var filterElement = _this.getFilterElementByCaption(filter.caption);
                        var insertInto = filterElement.closest('.coveo-section').siblings('.coveo-section-edit-delete');
                        editElement.appendTo(insertInto);
                        editElement.fastClick(function () {
                            _this.editElement(filter, filterElement);
                        });
                    }
                });
            };

            ResultsFiltersPreferences.prototype.buildBreadcrumb = function (filter) {
                var _this = this;
                var elem = Coveo.$('<span/>').addClass('coveo-value');

                Coveo.$('<span/>').addClass('coveo-caption').text(filter.caption).appendTo(elem);
                Coveo.$('<span/>').addClass('coveo-clear').appendTo(elem);

                elem.fastClick(function (e) {
                    filter.selected = false;
                    _this.fromFilterToAnalyticsEvent(filter, 'cleared from breadcrumb');
                    _this.fromPreferencesToCheckboxInput();
                    _this.queryController.executeQuery();
                });

                return elem;
            };

            ResultsFiltersPreferences.prototype.confirmDelete = function (filter, filterElement) {
                if (confirm(Ui.l.AreYouSureDeleteFilter(filter.caption, filter.expression))) {
                    this.deleteFilterPreference(filter, filterElement);
                    this.fromFilterToAnalyticsEvent(filter, 'deleted');
                    this.queryController.executeQuery();
                }
            };

            ResultsFiltersPreferences.prototype.editElement = function (filter, filterElement) {
                var oldCaption = this.preferences[filter.caption].caption;
                var oldTab = this.preferences[filter.caption].tab;
                var oldExpression = this.preferences[filter.caption].expression;
                this.deleteFilterPreference(filter, filterElement);
                this.openAdvancedFilterSectionOrSaveFilters();
                this.populateEditSection({ tab: oldTab, caption: oldCaption, expression: oldExpression });
                this.advancedFiltersBuilder.find('input[type=text]').first().focus();
            };

            ResultsFiltersPreferences.prototype.populateEditSection = function (toPopulate) {
                if (typeof toPopulate === "undefined") { toPopulate = { tab: [""], caption: "", expression: "" }; }
                this.advancedFiltersTextInputCaption.setValue(Ui.l.Caption(), toPopulate.caption);
                this.advancedFiltersTextInputExpression.setValue(Ui.l.Expression(), toPopulate.expression);
                this.advancedFiltersTabSelect.setValues(toPopulate.tab);
            };

            ResultsFiltersPreferences.prototype.deleteFilterPreference = function (filter, filterElement) {
                this.preferencePanelLocalStorage.remove(filter.caption);
                delete this.preferences[filter.caption];
                filterElement.closest('.coveo-choice-container').remove();
            };

            ResultsFiltersPreferences.prototype.openAdvancedFilterSectionOrSaveFilters = function () {
                if (this.advancedFiltersBuilder.hasClass('coveo-active')) {
                    this.advancedFilterFormValidate.find("input[type=submit]").click();
                } else {
                    this.populateEditSection();
                    this.advancedFiltersBuilder.toggleClass("coveo-active");
                }
            };

            ResultsFiltersPreferences.prototype.validateAndSaveAdvancedFilter = function (e) {
                e.preventDefault();
                this.advancedFiltersBuilder.removeClass("coveo-active");
                var caption = this.advancedFiltersTextInputCaption.getValues()[0];
                var expression = this.advancedFiltersTextInputExpression.getValues()[0];
                var tabs = this.advancedFiltersTabSelect.getValues();
                this.preferences[caption] = {
                    caption: caption,
                    custom: true,
                    expression: expression,
                    tab: tabs,
                    selected: true
                };
                this.buildCheckboxesInput();
                this.save();
                this.queryStateModel.set(Coveo.Models.QueryStateModel.attributesEnum.t, this.getActiveTab());
                this.advancedFiltersTextInputCaption.reset();
                this.advancedFiltersTextInputExpression.reset();
                this.advancedFiltersTabSelect.reset();
                this.advancedFiltersBuilder.appendTo(this.element);
                this.fromFilterToAnalyticsEvent(this.preferences[caption], 'saved');
                this.queryController.executeQuery();
            };

            ResultsFiltersPreferences.prototype.fromPreferencesToCheckboxInput = function () {
                var _this = this;
                _.each(this.getActiveFilters(), function (filter) {
                    _this.preferencePanelCheckboxInput.select(filter.caption);
                });
                _.each(this.getInactiveFilters(), function (filter) {
                    _this.preferencePanelCheckboxInput.unselect(filter.caption);
                });
            };

            ResultsFiltersPreferences.prototype.fromCheckboxInputToPreferences = function () {
                var selecteds = this.preferencePanelCheckboxInput.getSelecteds();
                _.each(this.preferences, function (filter) {
                    if (_.contains(selecteds, filter.caption)) {
                        filter.selected = true;
                    } else {
                        filter.selected = false;
                    }
                });
            };

            ResultsFiltersPreferences.prototype.getActiveFilters = function () {
                var _this = this;
                var activeTab = this.getActiveTab();
                return _.filter(this.preferences, function (filter) {
                    return filter.selected && _this.filterIsInActiveTab(filter, activeTab);
                });
            };

            ResultsFiltersPreferences.prototype.getInactiveFilters = function () {
                var _this = this;
                var activeTab = this.getActiveTab();
                return _.filter(this.preferences, function (filter) {
                    return !filter.selected || !_this.filterIsInActiveTab(filter, activeTab);
                });
            };

            ResultsFiltersPreferences.prototype.getActiveTab = function () {
                return this.queryStateModel.get(Coveo.Models.QueryStateModel.attributesEnum.t);
            };

            ResultsFiltersPreferences.prototype.filterIsInActiveTab = function (filter, tab) {
                filter.tab = _.compact(filter.tab);
                return _.contains(filter.tab, tab) || Coveo.Utils.isEmptyArray(filter.tab);
            };

            ResultsFiltersPreferences.prototype.getFilterElementByCaption = function (caption) {
                return this.preferenceContainer.find("input[value='" + caption + "']").parent();
            };

            ResultsFiltersPreferences.prototype.fromResultsFilterOptionToResultsPreferenceInterface = function (filters) {
                if (typeof filters === "undefined") { filters = this.options.filters; }
                var ret = {};
                _.each(this.options.filters, function (filter, caption) {
                    ret[caption] = {
                        expression: filter.expression,
                        tab: filter.tab,
                        selected: false,
                        custom: false,
                        caption: caption
                    };
                });
                return ret;
            };

            ResultsFiltersPreferences.prototype.mergeLocalPreferencesWithStaticPreferences = function () {
                var staticPreferences = this.fromResultsFilterOptionToResultsPreferenceInterface();
                var localPreferences = this.preferencePanelLocalStorage.load();
                var localPreferencesWithoutRemoved = _.filter(localPreferences, function (preference) {
                    var isCustom = preference.custom;
                    var existsInStatic = _.find(staticPreferences, function (staticPreference) {
                        return staticPreference.caption == preference.caption;
                    });
                    return isCustom || existsInStatic != undefined;
                });

                var localToMerge = {};
                _.each(localPreferencesWithoutRemoved, function (filter) {
                    localToMerge[filter.caption] = {
                        expression: filter.expression,
                        tab: filter.tab,
                        selected: filter.selected,
                        custom: filter.custom,
                        caption: filter.caption
                    };
                });
                this.preferences = Coveo.$.extend(true, {}, staticPreferences, localToMerge);
            };

            ResultsFiltersPreferences.prototype.fromFilterToAnalyticsEvent = function (filter, type) {
                this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.customfiltersChange, {
                    customFilterName: filter.caption,
                    customFilterExpression: filter.expression,
                    customFilterType: type });
            };
            ResultsFiltersPreferences.ID = "ResultsFiltersPreferences";
            return ResultsFiltersPreferences;
        })(Ui.Component);
        Ui.ResultsFiltersPreferences = ResultsFiltersPreferences;

        Ui.CoveoJQuery.registerAutoCreateComponent(ResultsFiltersPreferences);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        var DefaultResultTaggingOptions = (function (_super) {
            __extends(DefaultResultTaggingOptions, _super);
            function DefaultResultTaggingOptions(element) {
                _super.call(this, element);
                this.field = this.loadStringFromAttribute('data-field');
                this.suggestBoxSize = this.loadNumberFromAttribute('data-suggested-box-size', 5);
                this.autoCompleteTimer = this.loadNumberFromAttribute('data-auto-complete-timer', 2000);
            }
            return DefaultResultTaggingOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultResultTaggingOptions = DefaultResultTaggingOptions;

        var ResultTagging = (function (_super) {
            __extends(ResultTagging, _super);
            function ResultTagging(element, options, bindings, result, os) {
                _super.call(this, element, ResultTagging.ID, bindings);
                this.element = element;
                this.options = options;
                this.result = result;
                this.os = os;
                this.options = new DefaultResultTaggingOptions(element).merge(options);
                this.options = Coveo.$.extend({}, this.options);
                this.result = result || this.resolveResult();
                Coveo.Assert.exists(this.componentOptionsModel);
                Coveo.Assert.exists(this.result);

                if (!this.options.field) {
                    this.logger.error("You must specify a field to the ResultTagging component");
                }

                this.tags = this.result.raw[Coveo.Utils.getCoveoFieldKey(this.options.field)] || [];
                this.tagZone = Coveo.$('<div></div>').addClass('coveo-tag-zone').appendTo(Coveo.$(element));
                Coveo.$(element).append(this.buildTagIcon());
                this.autoCompleteZone = Coveo.$('<div></div>').addClass('coveo-auto-complete-zone').appendTo(Coveo.$(element));
                Coveo.$(this.autoCompleteZone).append(this.buildTextBox());
                Coveo.$(this.autoCompleteZone).append(this.buildAddIcon());
                Coveo.$(this.autoCompleteZone).append(this.buildClearIcon());
                this.buildExistingTags();
            }
            ResultTagging.prototype.buildExistingTags = function () {
                var _this = this;
                if (this.tags) {
                    _.each(this.tags, function (tag) {
                        Coveo.$(_this.tagZone).append(_this.buildTagValue(tag));
                    });
                }
            };

            ResultTagging.prototype.buildTagIcon = function () {
                var _this = this;
                var tagZone = Coveo.$('<div></div>').addClass('coveo-add-tag');
                var tagTextBox = Coveo.$('<span></span>').text(Ui.l.EnterTag()).addClass('coveo-add-tag-text');
                tagZone.append(Coveo.$('<span></span>').addClass('coveo-add-tag-icon').fastClick(function () {
                    return setTimeout(Coveo.$.proxy(_this.focusOnTextBox, _this), 20);
                }));
                tagZone.append(tagTextBox);
                tagZone.attr('title', Ui.l.EnterTag());
                return tagZone;
            };

            ResultTagging.prototype.focusOnTextBox = function () {
                this.textBox.focus();
            };

            ResultTagging.prototype.buildTagValue = function (tagValue) {
                var _this = this;
                var tag = Coveo.$('<div></div>').addClass('coveo-tag');
                this.buildShortenedTagWithTitle(tagValue).appendTo(tag);
                var deleteIcon = Coveo.$('<span></span>').addClass('coveo-delete-icon').appendTo(tag);
                deleteIcon.fastClick(function () {
                    return _this.doRemoveTag(tag, tagValue.toLowerCase());
                });
                return tag;
            };

            ResultTagging.prototype.buildShortenedTagWithTitle = function (tagValue) {
                var shortenedTag = Coveo.StringUtils.removeMiddle(tagValue, 16, "...");
                var clickableValue = Coveo.$('<a></a>').text(shortenedTag).attr('title', tagValue).attr('href', 'javascript:void;');
                this.bindFacetEventOnValue(clickableValue, tagValue);
                return clickableValue;
            };

            ResultTagging.prototype.buildTextBox = function () {
                var _this = this;
                this.textBox = Coveo.$('<input/>').attr('type', 'text').addClass('coveo-add-tag-textbox').attr('placeholder', Ui.l.EnterTag());
                this.autoCompletePopup = Coveo.$('<div></div>').addClass(ResultTagging.AUTO_COMPLETE_CLASS).appendTo(Coveo.$(this.autoCompleteZone));
                this.manageAutocompleteAutoHide();
                this.textBox.keyup(function (e) {
                    if (e.keyCode == 38 /* UP_ARROW */ || e.keyCode == 40 /* DOWN_ARROW */ || e.keyCode == 13 /* ENTER */) {
                        _this.manageUpDownEnter(e.keyCode);
                    } else if (!Coveo.KeyboardUtils.isArrowKeyPushed(e.keyCode)) {
                        _this.populateSuggestions();
                    }
                    Coveo.$(_this.element).removeClass('coveo-error');
                });
                this.textBox.fastClick(function () {
                    _this.populateSuggestions();
                });
                return this.textBox;
            };

            ResultTagging.prototype.buildAddIcon = function () {
                var _this = this;
                return Coveo.$('<div></div>').addClass('coveo-add-tag-tick-icon').append(Coveo.$('<span></span>')).fastClick(function () {
                    return _this.doAddTag();
                });
            };

            ResultTagging.prototype.buildClearIcon = function () {
                var _this = this;
                return Coveo.$('<div></div>').addClass('coveo-clear-icon').append(Coveo.$('<span></span>')).fastClick(function () {
                    return _this.textBox.val("");
                });
            };

            ResultTagging.prototype.bindFacetEventOnValue = function (element, value) {
                var _this = this;
                var facetAttributeName = Coveo.Models.QueryStateModel.getFacetId(this.options.field);
                var facetModel = this.queryStateModel.get(facetAttributeName);
                var facets = this.componentStateModel.get(facetAttributeName);
                var atLeastOneFacetIsEnabled = _.filter(facets, function (value) {
                    return !value.disabled;
                }).length > 0;

                if (facetModel != null && atLeastOneFacetIsEnabled) {
                    Coveo.$(element).on("click", function () {
                        if (_.contains(facetModel, value)) {
                            _this.queryStateModel.set(facetAttributeName, _.without(facetModel, value));
                        } else {
                            _this.queryStateModel.set(facetAttributeName, _.union(facetModel, [value]));
                        }
                        _this.queryController.deferExecuteQuery({
                            beforeExecuteQuery: function () {
                                return _this.usageAnalytics.logSearchEvent(Ui.AnalyticsActionCauseList.documentTag, { facetId: _this.options.field, facetValue: value });
                            }
                        });
                    });

                    if (_.contains(facetModel, value)) {
                        Coveo.$(element).addClass('coveo-selected');
                    }
                    Coveo.$(element).addClass('coveo-clickable');
                }
            };

            ResultTagging.prototype.clearPopup = function () {
                this.autoCompletePopup.hide();
                this.autoCompletePopup.empty();
            };

            ResultTagging.prototype.showPopup = function () {
                this.autoCompletePopup.show();
            };

            ResultTagging.prototype.populateSuggestions = function () {
                var _this = this;
                this.autoCompletePopup.width(this.textBox.innerWidth());
                var endpoint = this.queryController.getEndpoint();
                var searchText = this.textBox.val();
                var searchOptions = {
                    field: this.options.field,
                    ignoreAccents: true,
                    sortCriteria: 'occurences',
                    maximumNumberOfValues: this.options.suggestBoxSize,
                    queryOverride: '@sysuri',
                    pattern: this.buildRegEx(searchText),
                    patternType: 'RegularExpression'
                };
                var deferred = endpoint.listFieldValues(searchOptions).done(function (fieldValues) {
                    _this.clearPopup();
                    _.each(fieldValues, function (fieldValue) {
                        _this.autoCompletePopup.append(_this.buildSelectableValue(fieldValue.lookupValue));
                    });
                    _this.showPopup();
                });
            };

            ResultTagging.prototype.manageAutocompleteAutoHide = function () {
                var _this = this;
                var timeout;
                this.textBox.on('mouseover', function () {
                    window.clearTimeout(timeout);
                });
                this.autoCompletePopup.mouseout(function (e) {
                    if (Coveo.$(e.target).hasClass(ResultTagging.AUTO_COMPLETE_CLASS)) {
                        timeout = window.setTimeout(Coveo.$.proxy(_this.clearPopup, _this), _this.options.autoCompleteTimer);
                    }
                });
                this.autoCompletePopup.mouseenter(function () {
                    window.clearTimeout(timeout);
                });

                Coveo.$(this.element).mouseenter(function () {
                    _this.clearPopup();
                    Coveo.$(_this.element).addClass('coveo-opened');
                });
                Coveo.$(this.element).closest('.CoveoResult').mouseleave(function () {
                    _this.clearPopup();
                    if (_this.textBox.val() == "") {
                        Coveo.$(_this.element).removeClass('coveo-opened');
                    }
                });
                Coveo.$(this.element).closest('.CoveoResult').focusout(function (e) {
                    if (_this.textBox.val() != "" && (Coveo.$(e.target).closest('.CoveoResult') != Coveo.$(_this.element).closest('.CoveoResult'))) {
                        Coveo.$(_this.element).addClass('coveo-error');
                    }
                });
                Coveo.$(this.element).closest('.CoveoResult').focusin(function () {
                    Coveo.$(_this.element).removeClass('coveo-error');
                });
            };

            /**
            Exclude tags that are already on the result (Since we can tag with the same value twice)
            **/
            ResultTagging.prototype.buildRegEx = function (searchTerm) {
                var _this = this;
                return '(?=.*' + searchTerm + ')' + _.map(this.tags, function (tag) {
                    return _this.buildTermToExclude(tag);
                }).join('') + '.*';
            };

            ResultTagging.prototype.buildTermToExclude = function (term) {
                return "(?!^" + term + "$)";
            };

            ResultTagging.prototype.manageUpDownEnter = function (code) {
                var selectableArray = Coveo.$(this.element).find('.coveo-selectable');
                if (code == 13 /* ENTER */) {
                    this.doAddTag();
                    return;
                }

                if (selectableArray.length > 0) {
                    var newIndex = this.computeNextIndex(code, selectableArray);
                    newIndex = Math.max(0, newIndex);
                    newIndex = Math.min(selectableArray.length - 1, newIndex);
                    var selected = Coveo.$(selectableArray.get(newIndex));
                    selected.addClass('coveo-selected');
                    this.textBox.val(selected.text());
                }
            };

            ResultTagging.prototype.computeNextIndex = function (code, selectableArray) {
                var nextIndex = 0;
                _.each(selectableArray, function (selectable, index) {
                    if (Coveo.$(selectable).hasClass('coveo-selected')) {
                        if (code == 38 /* UP_ARROW */) {
                            nextIndex = index - 1;
                        } else if (code == 40 /* DOWN_ARROW */) {
                            nextIndex = index + 1;
                        }
                        Coveo.$(selectable).removeClass('coveo-selected');
                    }
                });
                return nextIndex;
            };

            ResultTagging.prototype.buildSelectableValue = function (lookupValue) {
                var _this = this;
                var line = Coveo.$('<div></div>').append(this.buildShortenedTagWithTitle(lookupValue));
                line.addClass('coveo-selectable');
                line.fastClick(function () {
                    _this.doAddTagWithValue(lookupValue);
                });
                return line;
            };

            ResultTagging.prototype.doRemoveTag = function (element, tagValue) {
                var _this = this;
                var request = {
                    fieldName: this.options.field,
                    fieldValue: tagValue,
                    doAdd: false,
                    uniqueId: this.result.uniqueId
                };
                var deferred = this.queryController.getEndpoint().tagDocument(request);
                deferred.done(function () {
                    _this.tags.splice(Coveo.$.inArray(tagValue, _this.tags), 1);
                    element.remove();
                });
            };

            ResultTagging.prototype.doAddTagWithValue = function (tagValue) {
                var _this = this;
                _.each(tagValue.split(','), function (tag) {
                    _this.doAddSingleTagValue(tag);
                });
            };

            ResultTagging.prototype.doAddSingleTagValue = function (tagValue) {
                var _this = this;
                this.clearPopup();
                if (Coveo.$.inArray(tagValue, this.tags) > -1) {
                    Coveo.$(this.element).addClass('coveo-error');
                    return;
                }
                this.tags.push(tagValue);
                var request = {
                    fieldName: this.options.field,
                    fieldValue: tagValue,
                    doAdd: true,
                    uniqueId: this.result.uniqueId
                };
                var deferred = this.queryController.getEndpoint().tagDocument(request);
                deferred.done(function () {
                    _this.tagZone.append(_this.buildTagValue(tagValue));
                    _this.textBox.val('');
                    Coveo.$(_this.element).removeClass('coveo-error');
                }).fail(function () {
                    //We do this otherwise it's possible to add the same tag while we wait for the server's response
                    _this.tags = _.without(_this.tags, _.findWhere(_this.tags, tagValue));
                });
            };

            ResultTagging.prototype.doAddTag = function () {
                var tagValue = this.textBox.val().toLowerCase().trim();
                this.doAddTagWithValue(tagValue);
            };
            ResultTagging.ID = 'ResultTagging';
            ResultTagging.AUTO_COMPLETE_CLASS = 'coveo-auto-complete';
            return ResultTagging;
        })(Ui.Component);
        Ui.ResultTagging = ResultTagging;
        Ui.CoveoJQuery.registerAutoCreateComponent(ResultTagging);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
    (function (Ui) {
        if (Ui.Device.isPhonegap()) {
            document.addEventListener("deviceready", function () {
                var statusBar = window["StatusBar"];
                if (statusBar) {
                    statusBar.backgroundColorByHexString("#ECECEC");
                    statusBar.styleDefault();
                }
            });
        }
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
var Coveo;
(function (Coveo) {
(function (Ui) {
        var DefaultAuthenticationProviderOptions = (function (_super) {
            __extends(DefaultAuthenticationProviderOptions, _super);
            function DefaultAuthenticationProviderOptions(element) {
                _super.call(this, element);
                this.name = this.loadStringFromAttribute("data-name");
                this.caption = this.loadLocalizedStringFromAttribute("data-caption", this.name);
                this.useIFrame = this.loadBooleanFromAttribute("data-use-iframe", false);
                this.showIFrame = this.loadBooleanFromAttribute("data-show-iframe", true);
            }
            return DefaultAuthenticationProviderOptions;
        })(Ui.ComponentOptions);
        Ui.DefaultAuthenticationProviderOptions = DefaultAuthenticationProviderOptions;

        var AuthenticationProvider = (function (_super) {
            __extends(AuthenticationProvider, _super);
            function AuthenticationProvider(element, options, bindings) {
                _super.call(this, element, Ui.Analytics.ID, bindings);
                this.element = element;
                this.options = options;

                this.options = new DefaultAuthenticationProviderOptions(element).merge(options);

                this.bind.onRoot(Coveo.Events.QueryEvents.buildingCallOptions, this.handleBuildingCallOptions);
                this.bind.onRoot(Coveo.Events.QueryEvents.queryError, this.handleQueryError);
            }
            AuthenticationProvider.prototype.getCssClass = function () {
                return 'coveo-authentication-provider';
            };

            AuthenticationProvider.prototype.getMenuItems = function () {
                var _this = this;
                return [{ text: Ui.l.Reauthenticate(this.options.caption), onOpen: function () {
                            return _this.authenticateWithProvider();
                        }, onClose: function () {
                            return 0;
                        } }];
            };

            AuthenticationProvider.prototype.handleBuildingCallOptions = function (e, args) {
                args.options.authentication.push(this.options.name);
            };

            AuthenticationProvider.prototype.handleQueryError = function (e, args) {
                if (args.error['provider'] == this.options.name) {
                    this.authenticateWithProvider();
                }
            };

            AuthenticationProvider.prototype.authenticateWithProvider = function () {
                if (this.options.useIFrame) {
                    this.useIFrameToAuthenticate();
                } else {
                    this.redirectToAuthenticationProvider();
                }
            };

            AuthenticationProvider.prototype.redirectToAuthenticationProvider = function () {
                this.logger.info("Redirecting to authentication provider " + this.options.name);
                window.location.href = this.getAuthenticationProviderUriForRedirect();
            };

            AuthenticationProvider.prototype.useIFrameToAuthenticate = function () {
                var _this = this;
                this.logger.info("Using iframe to retrieve authentication for provider " + this.options.name);

                var iframe = Coveo.$('<iframe/>').attr('src', this.getAuthenticationProviderUriForIFrame());

                var modalbox;
                if (this.options.showIFrame) {
                    modalbox = this.createPopupForVisibleIFrame(iframe);
                } else {
                    modalbox = this.createPopupForWaitMessage(iframe);
                }

                Coveo.$(window).one('message', function () {
                    modalbox.close();
                    iframe.detach();
                    _this.logger.info("Got authentication for provider " + _this.options.name + "; retrying query.");
                    _this.queryController.executeQuery();
                });
            };

            AuthenticationProvider.prototype.createPopupForWaitMessage = function (iframe) {
                var popup = Coveo.$('<div/>').addClass('coveo-waiting-for-authentication-popup').append(Ui.JQueryUtils.getBasicLoadingDots());

                iframe.hide().appendTo(document.body);

                return Coveo.ModalBox.open(popup, {
                    title: Ui.l.Authenticating(this.options.caption)
                });
            };

            AuthenticationProvider.prototype.createPopupForVisibleIFrame = function (iframe) {
                var popup = Coveo.$('<div/>');
                iframe.addClass('coveo-authentication-iframe').appendTo(popup);

                return Coveo.ModalBox.open(popup, {
                    //title: l.Authenticating(this.options.caption),
                    className: "coveo-authentication-popup"
                });
            };

            AuthenticationProvider.prototype.getAuthenticationProviderUriForRedirect = function () {
                return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name, window.location.href, undefined);
            };

            AuthenticationProvider.prototype.getAuthenticationProviderUriForIFrame = function () {
                return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name, undefined, 'success');
            };
            AuthenticationProvider.ID = 'AuthenticationProvider';
            return AuthenticationProvider;
        })(Ui.Component);
        Ui.AuthenticationProvider = AuthenticationProvider;

        Ui.CoveoJQuery.registerAutoCreateComponent(AuthenticationProvider);
    })(Coveo.Ui || (Coveo.Ui = {}));
    var Ui = Coveo.Ui;
})(Coveo || (Coveo = {}));
//***** EXTERNAL LIB *****
//***** GEN *****
//***** UTILS *****
// ***** REST *****
//***** UI TEMPLATE *****
//***** UI BASE *****
//***** MODELS *****
//***** CONTROLLERS *****
//***** EVENTS *****
//***** UI COMPONENTS *****
