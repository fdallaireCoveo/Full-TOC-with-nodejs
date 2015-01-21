/// <reference path="../core/lib/jquery.d.ts" />
/// <reference path="../core/lib/underscore.d.ts" />
/// <reference path="../core/lib/globalize.d.ts" />
/// <reference path="../core/lib/fixes.d.ts" />
/// <reference path="../core/lib/handlebars.d.ts" />
/// <reference path="../core/lib/jsrender.d.ts" />
/// <reference path="../core/lib/ModalBox.d.ts" />
/// <reference path="../core/lib/jquery.jsonp.d.ts" />
/// <reference path="../core/lib/jstz.d.ts" />
/// <reference path="../core/lib/d3.d.ts" />
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
declare var secretFeatureVariable1309: boolean;
declare module Coveo {
    var version: {
        "lib": string;
        "product": string;
    };
}
declare module Coveo {
    var $: JQueryStatic;
}
interface String {
    toLocaleString(): string;
}
declare module Coveo {
    var L10N: {
        format: (key: string, ...args: any[]) => string;
        formatPlSn: (value: string, count: number) => string;
    };
}
declare module Coveo.Ui {
    var l: {
        WiFi: () => string;
        Reauthenticate: (params0: string) => string;
        QueryDidntMatchAnyDocuments: () => string;
        exchangedocument: () => string;
        ValueDescription: () => string;
        Forward: () => string;
        ShowMore: () => string;
        ReplyAll: () => string;
        Today: () => string;
        xml: () => string;
        CompleteQuery: () => string;
        CELL_2G: () => string;
        Exclude: (params0: string) => string;
        CELL_4G: () => string;
        BadUserPass: () => string;
        folder: () => string;
        exchangemessage: () => string;
        Reset: () => string;
        OpenInOutlookWhenPossible: () => string;
        Last: () => string;
        AlwaysOpenInNewWindow: () => string;
        Of: () => string;
        mov: () => string;
        Value: () => string;
        EnterExpressionToFilterWith: () => string;
        Unexclude: (params0: string) => string;
        Or: () => string;
        GetStarted: () => string;
        noResultFor: (params0: string) => string;
        Less: () => string;
        AreYouSureDeleteFilter: (params0: string, params1: string) => string;
        LoginInProgress: () => string;
        AlphaDescending: () => string;
        ShowingResultsOf: (params0: string, params1: string, params2: string, count: number) => string;
        Tab: () => string;
        CannotConnect: () => string;
        MostRelevantReplies: () => string;
        Previous: () => string;
        Retry: () => string;
        From: () => string;
        Preferences: () => string;
        ShareQuery: () => string;
        Create: () => string;
        ClientDuration: (params0: string) => string;
        Next: () => string;
        exchangecalendarmessage: () => string;
        Reply: () => string;
        ComputedField: () => string;
        More: () => string;
        Username: () => string;
        txt: () => string;
        Collapse: () => string;
        Seconds: (params0: string, count: number) => string;
        SearchIn: (params0: string) => string;
        Ascending: () => string;
        Link: () => string;
        DisplayingTheOnlyMessage: () => string;
        EnterTag: () => string;
        ShowLess: () => string;
        Me: () => string;
        Settings: () => string;
        LinkOpeningSettings: () => string;
        ShowFacet: () => string;
        ShowAllReplies: () => string;
        ProxyDuration: (params0: string) => string;
        didYouMean: (params0: string) => string;
        CustomDescription: () => string;
        ChiSquare: () => string;
        MostRelevantItems: () => string;
        Authenticating: (params0: string) => string;
        EthernetConnection: () => string;
        Tabs: () => string;
        xls: () => string;
        QuickView: () => string;
        activedirperson: () => string;
        RelativeFrequencyDescription: () => string;
        AndOthers: (params0: string, count: number) => string;
        EnterExpressionName: () => string;
        ClearFacetState: () => string;
        ProblemPersists: () => string;
        image: () => string;
        Label: () => string;
        IndexDuration: (params0: string) => string;
        ErrorReport: () => string;
        UnknownConnection: () => string;
        Login: () => string;
        autoCorrectedQueryTo: (params0: string) => string;
        exchangeappointment: () => string;
        zip: () => string;
        ClearAllFilters: () => string;
        exchangenote: () => string;
        exchangeactivity: () => string;
        ShowAllConversation: () => string;
        OopsError: () => string;
        Search: () => string;
        GoBack: () => string;
        RelativeFrequency: () => string;
        ShowCompleteThread: () => string;
        Nosort: () => string;
        Expression: () => string;
        exchangeofficecom: () => string;
        And: () => string;
        ppt: () => string;
        ShowOnlyTopMatchingPosts: () => string;
        CompleteThread: () => string;
        Done: () => string;
        Expand: () => string;
        Close: () => string;
        Open: () => string;
        Tomorrow: () => string;
        exchangetask: () => string;
        FiltersInYourPreferences: () => string;
        NoNetworkConnection: () => string;
        OnlineHelp: () => string;
        ScoreDescription: () => string;
        Custom: () => string;
        Score: () => string;
        SaveFacetState: () => string;
        MoreInfo: () => string;
        SwitchTo: (params0: string) => string;
        OccurrencesDescription: () => string;
        AllConversation: () => string;
        AlphaAscending: () => string;
        Yesterday: () => string;
        CELL: () => string;
        SuggestedResults: () => string;
        html: () => string;
        Descending: () => string;
        Password: () => string;
        ShowOnlyMostRelevantReplies: () => string;
        Clear: (params0: string) => string;
        ResultsFilteringExpression: () => string;
        SkipLogin: () => string;
        Remove: () => string;
        Caption: () => string;
        SelectTab: () => string;
        SuggestedQueries: () => string;
        MostRelevantPosts: () => string;
        pdf: () => string;
        HideFacet: () => string;
        Unavailable: () => string;
        PleaseEnterYourCredentials: (params0: string) => string;
        SearchFor: (params0: string) => string;
        doc: () => string;
        CELL_3G: () => string;
        AllItems: () => string;
        LabelDescription: () => string;
        Occurrences: () => string;
        exchangeperson: () => string;
        Duration: (params0: string) => string;
    };
}
declare var Globalize: GlobalizeStatic;
interface JQueryStatic {
    proxy<T1, R>(func: (arg1: T1) => R, context: any): (arg1: T1) => R;
    proxy<T1, T2, R>(func: (arg1: T1, arg2: T2) => R, context: any): (arg1: T1, arg2: T2) => R;
    proxy<T1, T2, T3, R>(func: (arg1: T1, arg2: T2, arg3: T3) => R, context: any): (arg1: T1, arg2: T2, arg3: T3) => R;
    proxy<T1, T2, T3, T4, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R;
    proxy<T1, T2, T3, T4, T5, R>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R, context: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R;
}
interface JQuery {
    on<T1>(events: string, handler: (JQueryEventObject: any, arg1: T1) => any): any;
    on<T1, T2>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2) => any): any;
    on<T1, T2, T3>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2) => any): any;
    on<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    on<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    one<T1>(events: string, handler: (JQueryEventObject: any, arg1: T1) => any): any;
    one<T1, T2>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2) => any): any;
    one<T1, T2, T3>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2) => any): any;
    one<T1, T2, T3, T4>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2, arg4: T4) => any): any;
    one<T1, T2, T3, T4, T5>(events: string, handler: (JQueryEventObject: any, arg1: T1, arg2: T2, arg3: T2, arg4: T4, arg5: T5) => any): any;
    focusin(): any;
    focusout(): any;
    getCursorPosition(): number;
}
declare module Coveo {
    class Logger {
        private owner;
        static TRACE: number;
        static DEBUG: number;
        static INFO: number;
        static WARN: number;
        static ERROR: number;
        static NOTHING: number;
        static level: number;
        static executionTime: boolean;
        constructor(owner: any);
        public trace(...stuff: any[]): void;
        public debug(...stuff: any[]): void;
        public info(...stuff: any[]): void;
        public warn(...stuff: any[]): void;
        public error(...stuff: any[]): void;
        private log(level, stuff);
        static enable(): void;
        static disable(): void;
    }
}
declare module Coveo {
    class Options {
        public merge<T>(provided: T): T;
        public mergeDeep<T>(provided: T): T;
    }
}
declare module Coveo {
    class Utils {
        static isUndefined(obj: any): boolean;
        static isNull(obj: any): boolean;
        static isNullOrUndefined(obj: any): boolean;
        static exists(obj: any): boolean;
        static isString(obj: any): boolean;
        static toNotNullString(str: string): string;
        static anyTypeToString(value: any): string;
        static isNullOrEmptyString(str: string): boolean;
        static isNonEmptyString(str: string): boolean;
        static stringStartsWith(str: string, startWith: string): boolean;
        static isNumber(obj: any): boolean;
        static isBoolean(obj: any): boolean;
        static isDate(obj: any): boolean;
        static isObject(obj: any): boolean;
        static isObjectType(obj: any, type: any): boolean;
        static isArray(obj: any): boolean;
        static isNonEmptyArray(obj: any): boolean;
        static isEmptyArray(obj: any): boolean;
        static isHtmlElement(obj: any): boolean;
        static mergeDeep(target: any, src: any): {
            [n: number]: any;
        };
        static parseIntIfNotUndefined(str: string): number;
        static parseFloatIfNotUndefined(str: string): number;
        static round(num: number, decimals: number): number;
        static parseBooleanIfNotUndefined(str: string): boolean;
        static trim(value: string): string;
        static map(values: any[], callback: (value: any) => any): any[];
        static filter(values: any[], callback: (value: any, index: number) => boolean): any[];
        static arrayEqual(array1: any[], array2: any[], sameOrder?: boolean): boolean;
        static objectEqual(obj1: Object, obj2: Object): boolean;
        static isCoveoField(field: string): boolean;
        static getCoveoFieldKey(field: string): string;
        static escapeRegexCharacter(str: string): string;
        static throttle(func: any, wait: any, options?: {
            leading?: boolean;
            trailing?: boolean;
        }, context?: any, args?: any): () => any;
    }
}
declare module Coveo {
    class Defer {
        private static functions;
        static defer(code: () => void): void;
        static flush(): void;
        private static arm();
        private static popOne();
    }
}
declare module Coveo {
    class Assert {
        private static logger;
        static failureHandler: (message?: string) => void;
        static fail(message?: string): void;
        static check(condition: boolean, message?: string): void;
        static isUndefined(obj: any): void;
        static isNotUndefined(obj: any): void;
        static isNull(obj: any): void;
        static isNotNull(obj: any): void;
        static exists(obj: any): void;
        static doesNotExists(obj: any): void;
        static isString(obj: any): void;
        static stringStartsWith(str: string, start: string): void;
        static isNonEmptyString(str: string): void;
        static isNumber(obj: any): void;
        static isLargerThan(expected: number, actual: number): void;
        static isLargerOrEqualsThan(expected: number, actual: number): void;
        static isSmallerThan(expected: number, actual: number): void;
        static isSmallerOrEqualsThan(expected: number, actual: number): void;
    }
    class PreconditionFailedException {
        public message: string;
        constructor(message: string);
    }
}
declare module Coveo {
    class TimeSpan {
        private milliseconds;
        constructor(milliseconds: number);
        public getMilliseconds(): number;
        public getSeconds(): number;
        public getMinutes(): number;
        public getHours(): number;
        public getDays(): number;
        public getWeeks(): number;
        static fromDates(from: Date, to: Date): TimeSpan;
    }
}
declare module Coveo {
    interface DateToStringOptions {
        now?: Date;
        useTodayYesterdayAndTomorrow?: boolean;
        useWeekdayIfThisWeek?: boolean;
        omitYearIfCurrentOne?: boolean;
        useLongDateFormat?: boolean;
        includeTimeIfToday?: boolean;
        includeTimeIfThisWeek?: boolean;
        alwaysIncludeTime?: boolean;
        predefinedFormat?: string;
    }
    class DateUtils {
        static convertFromJsonDateIfNeeded(date: string): Date;
        static convertFromJsonDateIfNeeded(date: number): Date;
        static convertFromJsonDateIfNeeded(date: Date): Date;
        static keepOnlyDatePart(date: Date): Date;
        static offsetDateByDays(date: Date, offset: number): Date;
        static dateToString(date: Date, options?: DateToStringOptions): string;
        static timeToString(date: Date, options?: DateToStringOptions): string;
        static dateTimeToString(date: Date, options?: DateToStringOptions): string;
    }
}
declare module Coveo {
    interface CurrencyToStringOptions {
        decimals?: number;
        symbol?: string;
    }
    class CurrencyUtils {
        static currencyToString(value: number, options?: CurrencyToStringOptions): string;
    }
}
declare module Coveo {
    class EmailUtils {
        static splitSemicolonSeparatedListOfEmailAddresses(addresses: string): string[];
        static emailAddressesToHyperlinks(addresses: string[], companyDomain?: string, me?: string, lengthLimit?: number, truncateName?: boolean): string;
        static buildEmailAddressesAndOthers(excessHyperLinks: string[]): string;
        static parseEmail(email: string): string[];
    }
}
declare module Coveo {
    class HashUtils {
        private static Delimiter;
        static getHash(w?: Window): string;
        static getValue(value: string, toParse: string): any;
        static encodeValues(values: {}): string;
        private static getAjaxcrawlableHash(hash);
        private static getRawValue(value, toParse);
        private static getValueDependingOnType(paramValue);
        private static getValueType(paramValue);
        static encodeArray(array: string[]): string;
        static encodeObject(obj: Object): string;
        private static decodeObject(obj);
        private static decodeArray(value);
    }
}
declare module Coveo {
    class Hole {
        public begin: number;
        public size: number;
        public replacementSize: number;
        constructor(begin: number, size: number, replacementSize: number);
    }
    class StringAndHoles {
        public value: string;
        public holes: Hole[];
        static SHORTEN_END: string;
        static WORD_SHORTER: number;
        static replace(str: string, find: string, replace: string): StringAndHoles;
        static shortenPath(uriOrig: string, length: number): StringAndHoles;
        static shortenString(toShortenOrig: string, length: number, toAppend: string): StringAndHoles;
        static shortenUri(uri: string, length: number): StringAndHoles;
    }
    class HighlightUtils {
        static highlightString(content: string, highlights: Rest.Highlight[], holes: Hole[], cssClass: string): string;
        static buildHighlightedString(content: string, highlights: Rest.Highlight[], holes: Hole[], cssClass: string): string;
    }
    function highlightString(value: string, search: string): string;
}
declare module Coveo {
    class StringUtils {
        static javascriptEncode(value: string): string;
        static htmlEncode(value: string): string;
        static splice(value: string, index: number, remove: number, toAdd: string): string;
        static removeMiddle(value: string, length: number, toAdd: string): string;
        static regexEncode(value: string): string;
        static wildcardsToRegex(value: string): string;
        static getHighlights(strToSearch: string, regexToFind: RegExp): Rest.Highlight[];
    }
}
declare var crypto: any;
declare module Coveo {
    class QueryUtils {
        static createGuid(): string;
        static generateWithRandom(): string;
        static generateWithCrypto(): string;
        static setStateObjectOnQueryResults(state: any, results: Rest.QueryResults): void;
        static setIndexAndUidOnQueryResults(query: Rest.Query, results: Rest.QueryResults, queryUid: string): void;
        static setTermsToHighlightOnQueryResults(query: Rest.Query, results: Rest.QueryResults): void;
        static splitFlags(flags: string, delimiter?: string): string[];
        static isAttachment(result: Rest.QueryResult): boolean;
        static containsAttachment(result: Rest.QueryResult): boolean;
        static hasHTMLVersion(result: Rest.QueryResult): boolean;
        static hasThumbnail(result: Rest.QueryResult): boolean;
        static quoteAndEscapeIfNeeded(str: string): string;
        static quoteAndEscape(str: string): string;
        static escapeString(str: string): string;
        static isAtomicString(str: string): boolean;
        static isRangeString(str: string): boolean;
        static isRangeWithoutOuterBoundsString(str: string): boolean;
        static buildFieldExpression(field: string, operator: string, values: string[]): string;
        static buildFieldNotEqualExpression(field: string, values: string[]): string;
        static mergeQueryString(url: string, queryString: string): string;
        static mergePath(url: string, path: string): string;
        private static setPropertyOnResult(results, property, value, afterOneLoop?);
    }
}
declare module Coveo {
    enum KEYBOARD {
        BACKSPACE = 8,
        TAB = 9,
        ENTER = 13,
        SHIFT = 16,
        CTRL = 17,
        ALT = 18,
        ESCAPE = 27,
        SPACEBAR = 32,
        PAGE_UP = 33,
        PAGE_DOWN = 34,
        HOME = 36,
        LEFT_ARROW = 37,
        UP_ARROW = 38,
        RIGHT_ARROW = 39,
        DOWN_ARROW = 40,
        INSERT = 45,
        DELETE = 46,
    }
    class KeyboardUtils {
        static keysEqual(key: any, code: any): boolean;
        static isAllowedKeyForOmniBox(e: KeyboardEvent): boolean;
        static isDeleteOrBackspace(e: KeyboardEvent): boolean;
        static isArrowKeyPushed(keycode: number): boolean;
        static isNumberKeyPushed(keycode: number): boolean;
        static isLetterKeyPushed(keycode: number): boolean;
    }
}
declare module Coveo {
    interface AnchorUtilsOptions {
        text?: string;
        target?: string;
        class?: string;
    }
    interface ImageUtilsOptions {
        alt?: string;
        height?: string;
        width?: string;
    }
    interface FiletypeUtilsOptions {
        fileTypeToUse?: string;
        classToUse?: string;
    }
    class HTMLUtils {
        static buildAttributeString(options: any): string;
    }
    class AnchorUtils {
        static buildAnchor(href: string, options?: AnchorUtilsOptions): string;
    }
    class ImageUtils {
        static buildImage(src?: string, options?: ImageUtilsOptions): string;
        static selectImageFromResult(result: Rest.QueryResult): JQuery;
        static buildImageWithDirectSrcAttribute(endpoint: Rest.SearchEndpoint, result: Rest.QueryResult): void;
        static buildImageWithBase64SrcAttribute(endpoint: Rest.SearchEndpoint, result: Rest.QueryResult): void;
        static buildImageFromResult(result: Rest.QueryResult, endpoint: Rest.SearchEndpoint, options?: ImageUtilsOptions): string;
    }
}
declare module Coveo.FeatureDetectionUtils {
    function supportSVG(): boolean;
}
declare module Coveo.Ui {
    class EmailActionsUtils {
        static buildMailToString(options: MailToOptions): string;
        static buildMailToParametersString(subject: string, cc: string, bcc: string, body: string, mailTo: string): string;
        static getShortenBody(body: string, mailTo: string): string;
        static buildMailToParameter(name: string, param: string): string;
        static shortenString(str: string, maxLength: number, encodeShortenBodyIndication?: boolean): string;
        static appendShortenBodyToMailToString(mailTo: string, body: string): string;
        static removeCurrentUserEmailFromString(currentUserEmail: string, str: string): string;
        static buildReplyMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): MailTo;
        static buildReplyAllMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): MailTo;
        static buildForwardMailToFromResult(result: Rest.QueryResult, currentUserEmail: string): MailTo;
        static encodeMailToBody(body: string): string;
    }
}
declare module Coveo {
    class AjaxUtils<T> {
        static ajaxBasicAuth<T>(type: string, url: string, username: string, password: string, doneCallback: (data: T) => void, failCallBack?: (data: T) => void): void;
        static getBasicAuthBase64(username: string, password: string): string;
    }
}
declare module Coveo.Ui {
    interface MailToOptions {
        currentUserEmail?: string;
        originalFrom?: string;
        to?: string;
        subject?: string;
        cc?: string;
        bcc?: string;
        body?: string;
        bodyIsHTML?: boolean;
    }
    class DefaultMailToOptions extends Options implements MailToOptions {
        public currentUserEmail: string;
        public originalFrom: string;
        public to: string;
        public subject: string;
        public cc: string;
        public bcc: string;
        public body: string;
        public bodyIsHTML: boolean;
    }
    class MailTo {
        public options: MailToOptions;
        private value;
        private toArray;
        private ccArray;
        private bccArray;
        private body;
        private bodyHeader;
        static enter: string;
        static shortenBodyIndicator: string;
        static maxLength: number;
        static phonegapMaxLength: number;
        constructor(options?: MailToOptions);
        private removeCurrentUserFromParameters();
        private setRecipientsArrays();
        public open(): void;
        private getEmailOpenerObject(shortenBody);
        private ensureValueIsSet();
        private setValue();
        private setValueBody();
        public setMailToBodyFromText(text: string): void;
        private valueBodyIsSet();
        public bodyIsSet(): boolean;
    }
}
declare module Coveo {
    class LocalStorageUtils<T> {
        public id: string;
        constructor(id: string);
        public save(data: T): void;
        public load(): T;
        public remove(key?: string): void;
        private getLocalStorageKey();
    }
}
declare module Coveo {
    class Cache<Type> {
        public onEmpty: () => Type;
        constructor(onEmpty?: () => Type);
        private cache;
        public get(): Type;
        public push(value: Type): void;
    }
}
declare module Coveo {
    interface StreamHighlightOptions {
        cssClass?: string;
        regexFlags?: string;
    }
    function highlightStreamHTML(stream: string, termsToHighlight: string[], options?: StreamHighlightOptions): string;
    function highlightStreamText(stream: string, termsToHighlight: string[], options?: StreamHighlightOptions): string;
}
declare module Coveo.Rest {
    interface EndpointError {
        message: string;
        type: string;
    }
}
declare module Coveo.Rest {
    class AjaxError implements EndpointError {
        public message: string;
        public status: number;
        public type: any;
        constructor(message: string, status: number);
    }
}
declare module Coveo.Rest {
    class MissingAuthenticationError implements EndpointError {
        public provider: string;
        public type: string;
        public message: string;
        public isMissingAuthentication: boolean;
        constructor(provider: string);
    }
}
declare module Coveo.Rest {
    interface UserIdentity {
        name: string;
        provider: string;
        type: string;
    }
}
declare module Coveo.Rest {
    interface ComputedFieldRequest {
        field: string;
        operation: string;
    }
}
declare module Coveo.Rest {
    interface FieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface GroupByRequest {
        field: string;
        lookupField?: string;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        injectionDepth?: number;
        queryOverride?: string;
        constantQueryOverride?: string;
        allowedValues?: string[];
        computedFields?: ComputedFieldRequest[];
        rangeValues?: RangeValue[];
        generateAutomaticRanges?: boolean;
        completeFacetWithStandardValues?: boolean;
    }
}
declare module Coveo.Rest {
    interface GroupByValue extends FieldValue {
        value: string;
        lookupValue?: string;
        numberOfResults: number;
        score: number;
        computedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface Highlight {
        offset: number;
        length: number;
    }
}
declare module Coveo.Rest {
    interface GroupByResult {
        field: string;
        values: GroupByValue[];
        globalComputedFieldResults?: number[];
    }
}
declare module Coveo.Rest {
    interface ListFieldsResult {
        fields: FieldDescription[];
    }
    interface FieldDescription {
        type: string;
        name: string;
        description: string;
        defaultValue: string;
        fieldType: string;
        fieldSourceType: string;
        includeInQuery: boolean;
        includeInResults: boolean;
        groupByField: boolean;
        splitGroupByField: boolean;
        sortByField: boolean;
    }
}
declare module Coveo.Rest {
    interface ListFieldValuesRequest {
        field: string;
        lookupField?: string;
        ignoreAccents?: boolean;
        sortCriteria?: string;
        maximumNumberOfValues?: number;
        queryOverride?: string;
        pattern?: string;
        patternType?: string;
    }
}
declare module Coveo.Rest {
    interface Query {
        q: string;
        aq?: string;
        cq?: string;
        dq?: string;
        wildcards?: boolean;
        questionMarks?: boolean;
        lowercaseOperators?: boolean;
        partialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        firstResult?: number;
        numberOfResults?: number;
        sortCriteria?: string;
        sortField?: string;
        filterField?: string;
        filterFieldRange?: number;
        fieldsToInclude?: string[];
        fieldsToExclude?: string[];
        excerptLength?: number;
        retrieveFirstSentences?: boolean;
        enableDidYouMean?: boolean;
        queryFunctions?: QueryFunction[];
        rankingFunctions?: RankingFunction[];
        groupBy?: GroupByRequest[];
        debug?: boolean;
        timezone?: string;
        enableDuplicateFiltering?: boolean;
    }
}
declare module Coveo.Rest {
    interface QueryCorrection {
        correctedQuery: string;
        wordCorrections: WordCorrection[];
    }
    interface WordCorrection {
        offset: number;
        length: number;
        originalWord: string;
        correctedWord: string;
    }
}
declare module Coveo.Rest {
    class QueryError implements EndpointError {
        public status: number;
        public message: string;
        public type: string;
        public queryExecutionReport: any;
        constructor(errorResponse: ErrorResponse);
    }
}
declare module Coveo.Rest {
    interface QueryException {
        code: number;
        context: string;
    }
}
declare module Coveo.Rest {
    interface QueryResult {
        title: string;
        titleHighlights: Highlight[];
        uri: string;
        printableUri: string;
        printableUriHighlights: Highlight[];
        clickUri: string;
        uniqueId: string;
        excerpt: string;
        excerptHighlights: Highlight[];
        firstSentences: string;
        firstSentencesHighlights: Highlight[];
        hasHtmlVersion: boolean;
        hasMobileHtmlVersion: boolean;
        flags: string;
        summary: string;
        summaryHighlights: Highlight[];
        rankingInfo: string;
        raw: any;
        parentResult: QueryResult;
        childResults: QueryResult[];
        index?: number;
        queryUid?: string;
        moreResults?: () => JQueryDeferred<QueryResult[]>;
        totalNumberOfChildResults?: number;
        attachments?: QueryResult[];
        state: {
            [attribute: string]: any;
        };
        orphan?: boolean;
        termsToHighlight?: string[];
    }
}
declare module Coveo.Rest {
    interface QueryResults {
        error?: {
            message: string;
            type: string;
            executionReport: any;
        };
        executionReport?: any;
        basicExpression?: string;
        advancedExpression?: string;
        constantExpression?: string;
        userIdentities?: UserIdentity[];
        rankingExpressions?: RankingExpression[];
        totalCount: number;
        duration: number;
        indexDuration: number;
        proxyDuration?: number;
        clientDuration: number;
        searchId?: string;
        exception?: QueryException;
        results: QueryResult[];
        groupByResults: GroupByResult[];
        queryCorrections: QueryCorrection[];
        termsToHighlight: string[];
        phrasesToHighlight: string[];
        _folded: boolean;
    }
}
declare module Coveo.Rest {
    interface RangeValue {
        start?: any;
        end?: any;
        label?: string;
        endInclusive?: boolean;
    }
}
declare module Coveo.Rest {
    interface RankingExpression {
        expression: string;
        modifier: string;
    }
}
declare module Coveo.Rest {
    interface EndpointCallParameters {
        url: string;
        queryString: string[];
        requestData: any;
        method: string;
        responseType: string;
        errorsAsSuccess: boolean;
    }
    interface Response<T> {
        data?: any;
    }
    interface SuccessResponse<T> extends Response<T> {
        duration: number;
        data: T;
    }
    interface ErrorResponse extends Response<any> {
        statusCode: number;
        data?: {
            message?: string;
            type?: string;
            executionReport?: string;
            [key: string]: any;
        };
    }
    interface EndpointCallerOptions {
        anonymous?: boolean;
        accessToken?: string;
        username?: string;
        password?: string;
    }
    class EndpointCaller {
        public options: EndpointCallerOptions;
        public logger: Logger;
        public useJsonp: boolean;
        constructor(options?: EndpointCallerOptions);
        public call<T>(params: EndpointCallParameters): JQueryPromise<Response<T>>;
        static parseURL(url: string): HTMLAnchorElement;
        static convertJsonToQueryString(json: {
            [key: string]: any;
        }): string[];
        static convertJsonToFormBody(json: {
            [key: string]: any;
        }): string;
        private callUsingXMLHttpRequest<T>(requestInfo, responseType?);
        private callUsingXDomainRequest<T>(requestInfo);
        private callUsingAjaxJsonP<T>(requestInfo);
        private handleSuccessfulResponseThatMightBeAnError<T>(requestInfo, data);
        private handleSuccess<T>(requestInfo, data);
        private handleError<T>(requestInfo, status, data);
        private combineUrlAndQueryString(url, queryString);
        private isXDomainRequestSupported();
        private isCORSSupported();
        private isSuccessHttpStatus(status);
        private tryParseResponseText(json, contentType);
        private isErrorResponseBody(data);
    }
}
declare module Coveo.Rest {
    interface SearchEndpointOptions extends EndpointCallerOptions {
        restUri?: string;
        queryStringArguments?: any;
        anonymous?: boolean;
        accessToken?: string;
        renewAccessToken?: () => JQueryPromise<string>;
        username?: string;
        password?: string;
        isOldRestAPI?: boolean;
    }
    interface EndpointCallOptions {
        authentication?: string[];
    }
    interface ViewAsHtmlOptions extends EndpointCallOptions {
        query?: string;
        requestedOutputSize?: number;
    }
    interface SearchEndpointInterface {
        options: SearchEndpointOptions;
        getBaseUri(): string;
        getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        isJsonp(): boolean;
        search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
    }
}
declare module Coveo.Rest {
    class DefaultSearchEndpointOptions implements SearchEndpointOptions {
        public restUri: string;
        public queryStringArguments: {};
        public anonymous: boolean;
        public accessToken: string;
        public renewAccessToken: () => JQueryPromise<string>;
        public username: string;
        public password: string;
        public isOldRestAPI: boolean;
    }
    class SearchEndpoint implements SearchEndpointInterface {
        public options: SearchEndpointOptions;
        static endpoints: {
            [endpoint: string]: SearchEndpoint;
        };
        static configureSampleEndpoint(): void;
        static configureCloudEndpoint(workgroup?: string, token?: string, uri?: string, otherOptions?: SearchEndpointOptions): void;
        static configureOnPremiseEndpoint(uri: string, token?: string, otherOptions?: SearchEndpointOptions): void;
        static removeUndefinedConfigOption(config: SearchEndpointOptions): SearchEndpointOptions;
        static mergeConfigOptions(first: SearchEndpointOptions, second: SearchEndpointOptions): SearchEndpointOptions;
        public logger: Logger;
        public isRedirecting: boolean;
        private caller;
        constructor(options?: SearchEndpointOptions);
        private handleUnload();
        public getBaseUri(): string;
        public getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        public isJsonp(): boolean;
        public search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        public getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        public getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        public getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        public getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        public getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        private _batchListFieldValues;
        public batchFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        public listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        public listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        public tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        private createEndpointCaller();
        private buildBaseUri(path);
        private buildBaseQueryString(callOptions?);
        private buildViewAsHtmlUri(path, documentUniqueID, callOptions?);
        private buildViewAsHtmlQueryString(uniqueId, callOptions?);
        private callWithErrorHandling<T>(params);
        private performOneCall<T>(params, outerDeferred, autoRenewToken);
        private handleErrorResponse<T>(errorResponse, outerDeferred);
        private canRenewAccessToken();
        private isAccessTokenExpiredStatus(status);
        private renewAccessToken();
        private isMissingAuthenticationProviderStatus(status);
        private addTrailingSlash(uri);
        private removeTrailingSlash(uri);
        private hasTrailingSlash(uri);
    }
}
declare module Coveo.Rest {
    class SearchEndpointWithDefaultCallOptions implements SearchEndpointInterface {
        private endpoint;
        private callOptions;
        public options: SearchEndpointOptions;
        constructor(endpoint: SearchEndpointInterface, callOptions?: EndpointCallOptions);
        public getBaseUri(): string;
        public getAuthenticationProviderUri(provider: string, returnUri: string, message: string): string;
        public isJsonp(): boolean;
        public search(query: Query, callOptions?: EndpointCallOptions): JQueryDeferred<QueryResults>;
        public tagDocument(taggingRequest: TaggingRequest, callOptions?: EndpointCallOptions): JQueryDeferred<boolean>;
        public getRawDataStream(documentUniqueId: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<ArrayBuffer>;
        public getDocumentText(documentUniqueID: string, callOptions?: EndpointCallOptions): JQueryDeferred<string>;
        public getDocumentHtml(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): JQueryDeferred<HTMLDocument>;
        public getViewAsHtmlUri(documentUniqueID: string, callOptions?: ViewAsHtmlOptions): string;
        public getViewAsDatastreamUri(documentUniqueID: string, dataStreamType: string, callOptions?: ViewAsHtmlOptions): string;
        public listFieldValues(request: ListFieldValuesRequest, callOptions?: EndpointCallOptions): JQueryDeferred<FieldValue[]>;
        public listFields(callOptions?: EndpointCallOptions): JQueryDeferred<FieldDescription[]>;
        private enrichCallOptions<T extends EndpointCallOptions>(callOptions?);
    }
}
declare module Coveo.Rest {
    interface AnalyticsOptions {
        token: string;
        userId?: string;
        serviceUrl: string;
    }
    class AnalyticsEndpoint {
        public options: AnalyticsOptions;
        public logger: Logger;
        static DEFAULT_ANALYTICS_URI: string;
        static DEFAULT_ANALYTICS_VERSION: string;
        static CUSTOM_ANALYTICS_VERSION: any;
        constructor(options: AnalyticsOptions);
        public sendSearchEvents(searchEvents: SearchEvent[]): void;
        public sendDocumentViewEvent(documentViewEvent: ClickEvent): void;
        public sendCustomEvent(customEvent: CustomEvent): void;
        public getTopQueries(params: TopQueries): JQueryPromise<string[]>;
        private sendEventToApi<D, R>(data, path, paramName);
        private appendUrlParamSign(url);
        private getFromService<T>(url, params);
        private buildQueryStringFromParam(params);
    }
}
declare module Coveo.Rest {
    class APIAnalyticsBuilder {
        static convertSearchEventToAPI(searchEvent: SearchEvent): APISearchEvent;
        static convertFacetToAPI(facets: AnalyticsFacet[]): APIAnalyticsFacet[];
        static convertFacetSelectionToAPI(facetSelections: AnalyticsFacetSelection[]): APIAnalyticsFacetSelection[];
        static convertResultsToAPI(results: AnalyticsResult[]): APIAnalyticsResult[];
        static convertDocumentViewToAPI(documentView: ClickEvent): APIDocumentViewEvent;
        static convertCustomEventToAPI(customEvent: CustomEvent): APICustomEvent;
    }
}
declare module Coveo.Rest {
    interface GenericParam {
        [paramName: string]: any;
    }
}
declare module Coveo.Rest {
    interface AnalyticsEvent {
        actionCause: string;
        actionType: string;
        device: string;
        originLevel1: string;
        originLevel2: string;
        originLevel3?: string;
        language: string;
        responseTime: number;
        userAgent?: string;
        userGroups?: string;
        customData?: {
            [key: string]: string;
        };
        customMetadata1?: string;
        customMetadata2?: string;
        customMetadata3?: string;
        customMetadata4?: string;
        customMetadata5?: string;
    }
}
declare module Coveo.Rest {
    interface ClickEvent extends AnalyticsEvent {
        searchQueryUid: string;
        documentUri: string;
        documentUriHash: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        viewMethod: string;
    }
}
declare module Coveo.Rest {
    interface AnalyticsFacet {
        name: string;
        fieldName: string;
        sort: string;
        mode: string;
        selections: AnalyticsFacetSelection[];
    }
}
declare module Coveo.Rest {
    interface AnalyticsFacetSelection {
        entryName: string;
        status: string;
    }
}
declare module Coveo.Rest {
    interface AnalyticsResult {
        clickUri: string;
        documentUri: string;
        documentUriHash: string;
    }
}
declare module Coveo.Rest {
    interface APICustomEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        actionType: string;
        actionCause: string;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo.Rest {
    interface APIDocumentViewEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        searchQueryUid: string;
        title: string;
        documentClickUri: string;
        documentUri: string;
        documentUriHash: string;
        viewMethod: string;
        actionCause: string;
        collectionName: string;
        sourceName: string;
        documentPosition: number;
        customMetadatas: {
            [name: string]: string;
        };
    }
}
declare module Coveo.Rest {
    interface APISearchEvent {
        language: string;
        device: string;
        searchInterface: string;
        searchHub: string;
        responseTime: number;
        customMetadatas: {
            [name: string]: string;
        };
        queryText: string;
        advancedQuery: string;
        didYouMean: boolean;
        results: APIAnalyticsResult[];
        resultsPerPage: number;
        pageNumber: number;
        facets: AnalyticsFacet[];
        type: string;
        actionCause: string;
        searchQueryUid: string;
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsResult {
        clickUri: string;
        documentUri: string;
        documentUriHash: string;
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsFacet {
        name: string;
        fieldName: string;
        sort: string;
        mode: string;
        selections: APIAnalyticsFacetSelection[];
    }
}
declare module Coveo.Rest {
    interface APIAnalyticsFacetSelection {
        entryName: string;
        status: string;
    }
}
declare module Coveo.Rest {
    interface SearchEvent extends AnalyticsEvent {
        mobile?: boolean;
        queryText: string;
        results: AnalyticsResult[];
        responseTime: number;
        resultsPerPage: number;
        pageNumber: number;
        advancedQuery: string;
        searchQueryUid: string;
        didYouMean: boolean;
        facets: AnalyticsFacet[];
        contextual: boolean;
    }
}
declare module Coveo.Rest {
    interface TopQueries extends GenericParam {
        pageSize: number;
        queryText: string;
    }
}
declare module Coveo.Rest {
    interface CustomEvent extends AnalyticsEvent {
        eventType: string;
        eventValue: string;
    }
}
declare module Coveo.Rest {
    interface QueryFunction {
        "function": string;
        fieldName: string;
    }
}
declare module Coveo.Rest {
    interface RankingFunction {
        expression: string;
        normalizeWeight: boolean;
    }
}
declare module Coveo.Rest {
    interface TaggingRequest {
        fieldName: string;
        fieldValue: string;
        doAdd: boolean;
        uniqueId: string;
    }
}
declare module Coveo.Ui {
    interface Template {
        instantiateToString(object?: any): string;
        instantiateToElement(object?: any): HTMLElement;
    }
}
declare module Coveo.Ui {
    class JsRenderTemplate implements Template {
        public template: Element;
        private logger;
        static mimeTypes: string[];
        constructor(template: Element);
        public instantiateToString(data?: any): string;
        public instantiateToElement(data?: any): HTMLElement;
        static create(element: HTMLElement): JsRenderTemplate;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class UnderscoreTemplate implements Template {
        private logger;
        private template;
        private static templateHelpers;
        static mimeTypes: string[];
        constructor(template: Element);
        constructor(template: (any: any) => string);
        public instantiateToString(data?: any): string;
        public instantiateToElement(data?: any): HTMLElement;
        static create(element: HTMLElement): UnderscoreTemplate;
        static registerTemplateHelper(helperName: string, helper: TemplateHelperFunction): void;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class HandlebarsTemplate implements Template {
        private logger;
        private template;
        static mimeTypes: string[];
        constructor(element: Element);
        public instantiateToString(data?: any): string;
        public instantiateToElement(data?: any): HTMLElement;
        static create(element: HTMLElement): HandlebarsTemplate;
        static isLibraryAvailable(): boolean;
    }
}
declare module Coveo.Ui {
    class DefaultResultTemplate implements Template {
        private logger;
        constructor();
        public instantiateToString(queryResult?: Rest.QueryResult): string;
        public instantiateToElement(queryResult?: Rest.QueryResult): HTMLElement;
    }
}
declare module Coveo.Ui {
    class TemplateCache {
        private static templates;
        static registerTemplate(name: string, template: (data: {}) => string): void;
        static getTemplate(name: string): (data: {}) => string;
        static scanAndRegisterTemplates(): void;
        private static scanAndRegisterUnderscoreTemplates();
        private static scanAndRegisterJsRenderTemplates();
        private static scanAndRegisterHandlebarsTemplates();
    }
}
declare module Coveo.Ui {
    interface TemplateHelperFunction {
        (...args: any[]): string;
    }
    class TemplateHelpers {
        private static helpers;
        static registerTemplateHelper<T1>(name: string, helper: (arg1: T1) => string): any;
        static registerTemplateHelper<T1, T2>(name: string, helper: (arg1: T1, arg2: T2) => string): any;
        static registerTemplateHelper<T1, T2, T3>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => string): any;
        static registerTemplateHelper<T1, T2, T3, T4, T5>(name: string, helper: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => string): any;
        static getHelper(name: string): TemplateHelperFunction;
        private static registerTemplateHelperInJsRender(name, helper);
        private static registerTemplateHelperInHandlebars(name, helper);
        private static registerTemplateHelperInUnderscore(name, helper);
    }
}
declare module Coveo.Ui {
}
declare module Coveo.Ui {
    interface InitializationParameters extends ComponentBindings {
        options?: any;
        result?: Rest.QueryResult;
    }
    class CoveoJQuery {
        private static logger;
        private static autoCreateComponents;
        private static namedMethods;
        static registerDefaultOptions(element: HTMLElement, options: {}): void;
        private static resolveDefaultOptions(element, options);
        static registerAutoCreateComponent(componentClass: any): void;
        static isComponentClassIdRegistered(componentClassId: string): boolean;
        static initializeSearchInterface(element: HTMLElement, options?: any): void;
        static initializeSearchInterfaceForSearchBox(element: HTMLElement, searchPageUri: string, options?: any): void;
        private static performInitFunctionsOption(options, event);
        private static performPreInitFunctions(options);
        private static performPostInitFunction(options);
        private static performFunctions(option);
        private static initComponents(element, options?);
        private static initExternalComponents(element, options?);
        static automaticallyCreateComponentsInside(element: HTMLElement, initParameters: InitializationParameters, ignore?: string[]): void;
        private static createFunctionThatInitializesComponentOnElements(elements, componentClassId, componentClass, initParameters);
        static createComponentOfThisClassOnElement(componentClassId: string, element: HTMLElement, initParameters?: InitializationParameters): Component;
        static registerNamedMethod(methodName: string, handler: (element: HTMLElement, ...args: any[]) => any): void;
        static isNamedMethodRegistered(methodName: string): boolean;
        static dispatchNamedMethodCall(methodName: string, element: HTMLElement, args: any[]): any;
        static isThereASingleComponentBoundToThisElement(element: HTMLElement): boolean;
        static dispatchMethodCallOnBoundComponent(methodName: string, element: HTMLElement, args: any[]): any;
        static dispatchNamedMethodCallOrComponentCreation(token: string, element: HTMLElement, args: any[]): any;
        static monkeyPatchComponentMethod(methodName: string, element: HTMLElement, handler: (...args: any[]) => any): void;
        static noConflict(): void;
    }
}
interface JQuery {
    coveo(): Coveo.Ui.Component;
    coveo(method: string): any;
    coveo(method: string, arg1: any): any;
    coveo(method: string, arg1: any, arg2: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any): any;
    coveo(method: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any;
    coveo(componentClass?: any): Coveo.Ui.Component;
    coveo(method: 'init'): any;
    coveo(method: 'patch', methodName?: any, handler?: (...args: any[]) => any): any;
}
declare module Coveo.Ui {
    class FastClick {
        public element: JQuery;
        public handler: (any: any) => any;
        public distanceThreshold: number;
        public timeThreshold: number;
        private startX;
        private startY;
        private endX;
        private endY;
        private startTime;
        private endTime;
        private startTarget;
        private startElement;
        private moved;
        constructor(element: JQuery, handler: (any: any) => any, distanceThreshold?: number, timeThreshold?: number);
        private setTouchHandlers();
        private preventMouseHandlers();
        private handleTouchStart(startEvent);
        private handleTouchMove(e);
        private handleTouchEnd(endEvent);
        private isGhostClick(e);
        private initStartVariables(startEvent);
        private getStartElement();
        private mustCallHandler(endEvent);
        private scrolled(endEvent);
        private held();
        private reset();
        private hideIOSKeyboardIfNecessary(target);
    }
}
interface JQuery {
    fastClick(): JQuery;
    fastClick(handler: (e: JQueryEventObject) => any): JQuery;
}
declare module Coveo.Ui {
    interface ComponentBindings {
        root?: HTMLElement;
        queryStateModel?: Models.QueryStateModel;
        componentStateModel?: Models.ComponentStateModel;
        queryController?: Controllers.QueryController;
        searchInterface?: SearchInterface;
        usageAnalytics?: AnalyticsClient;
        componentOptionsModel?: Models.ComponentOptionsModel;
    }
    class Component implements ComponentBindings {
        public element: HTMLElement;
        public type: string;
        public logger: Logger;
        public disabled: boolean;
        public bind: ComponentEvents;
        public root: HTMLElement;
        public queryStateModel: Models.QueryStateModel;
        public componentStateModel: Models.ComponentStateModel;
        public queryController: Controllers.QueryController;
        public searchInterface: SearchInterface;
        public usageAnalytics: AnalyticsClient;
        public componentOptionsModel: Models.ComponentOptionsModel;
        public ensureDom: Function;
        constructor(element: HTMLElement, type: string, bindings?: ComponentBindings);
        public getBindings(): ComponentBindings;
        public enable(): void;
        public disable(): void;
        public createDom(): void;
        public resolveSearchInterface(): SearchInterface;
        public resolveRoot(defaultValue?: HTMLElement): HTMLElement;
        public resolveQueryController(defaultValue?: Controllers.QueryController): Controllers.QueryController;
        public resolveComponentStateModel(defaultValue?: Models.ComponentStateModel): Models.ComponentStateModel;
        public resolveQueryStateModel(defaultValue?: Models.QueryStateModel): Models.QueryStateModel;
        public resolveComponentOptionsModel(defaultValue?: Models.ComponentOptionsModel): Models.ComponentOptionsModel;
        public resolveUA(): AnalyticsClient;
        public resolveResult(): Rest.QueryResult;
        static get(element: HTMLElement, componentClass?: any, noThrow?: boolean): Component;
        static bindComponentToElement(element: HTMLElement, component: Component): void;
        static bindResultToElement(element: HTMLElement, result: Rest.QueryResult): void;
        static resolveBinding(element: HTMLElement, componentClass: any): Component;
        static computeCssClassNameForType(type: string): string;
        static computeSelectorForType(type: string): string;
        static computeMemberNameForType(type: string): string;
        static pointElementsToDummyForm(selector: JQuery): void;
        private static getBoundComponentsForElement(element);
    }
}
interface JQuery {
    coveo(method: 'get', componentClass?: any): Coveo.Ui.Component;
}
declare module Coveo.Ui {
    class ComponentEvents {
        public owner: Component;
        constructor(owner: Component);
        public on(selector: JQuery, event: string, handler: Function): void;
        public onRoot<T>(event: string, handler: (e: JQueryEventObject, args: T) => any): void;
        public fastClick(selector: JQuery, handler: (e: JQueryEventObject) => any): void;
        public trigger(selector: JQuery, event: string, args?: Object): void;
        private wrapToCallIfEnabled(func);
    }
}
declare module Coveo.Ui {
    class ComponentOptions extends Options {
        public element: HTMLElement;
        constructor(element: HTMLElement);
        public loadStringFromAttribute(attributeName: string, defaultValue?: string): string;
        public loadLocalizedStringFromAttribute(attributeName: string, defaultValue?: string): string;
        public loadNumberFromAttribute(attributeName: string, defaultValue?: number): number;
        public loadFloatFromAttribute(attributeName: string, defaultValue?: number): number;
        public loadBooleanFromAttribute(attributeName: string, defaultValue?: boolean): boolean;
        public loadStringArrayFromAttribute(attributeName: string, defaultValue?: string[], separator?: string): string[];
        public loadEnumFromAttribute(attributeName: string, _enum: any, defaultValue?: any): number;
        public loadJsonFromAttribute(attributeName: string, defaultValue?: any): any;
        public loadHtmlElementFromSelectorAttribute(attributeName: string, defaultValue?: HTMLElement): HTMLElement;
        public loadChildHtmlElementFromSelector(selector: string, defaultValue?: HTMLElement): HTMLElement;
        public loadResultTemplateFromSelectorAttribute(attributeName: string, defaultValue?: Template): Template;
        public loadResultTemplateFromIdAttribute(attributeName: string, defaultValue?: Template): Template;
        public loadChildResultTemplateFromSelector(selector: string, defaultValue?: Template): Template;
        private static createResultTemplateFromElement(element);
    }
}
declare module Coveo.Ui {
    class QueryBuilder {
        public expression: ExpressionBuilder;
        public advancedExpression: ExpressionBuilder;
        public constantExpression: ExpressionBuilder;
        public disjunctionExpression: ExpressionBuilder;
        public enableWildcards: boolean;
        public enableQuestionMarks: boolean;
        public enableLowercaseOperators: boolean;
        public enablePartialMatch: boolean;
        public partialMatchKeywords: number;
        public partialMatchThreshold: string;
        public firstResult: number;
        public numberOfResults: number;
        public excerptLength: number;
        public filterField: string;
        public filterFieldRange: number;
        public parentField: string;
        public childField: string;
        public fieldsToInclude: string[];
        public fieldsToExclude: string[];
        public enableDidYouMean: boolean;
        public enableDebug: boolean;
        public sortCriteria: string;
        public sortField: string;
        public retrieveFirstSentences: boolean;
        public timezone: string;
        public queryUid: string;
        public queryFunctions: Rest.QueryFunction[];
        public rankingFunctions: Rest.RankingFunction[];
        public groupByRequests: Rest.GroupByRequest[];
        public enableDuplicateFiltering: boolean;
        public build(): Rest.Query;
        public computeCompleteExpression(): string;
        public computeCompleteExpressionParts(): {
            full?: string;
            withoutConstant?: string;
            constant?: string;
        };
        public computeCompleteExpressionExcept(except: string): string;
        public computeCompleteExpressionPartsExcept(except: string): {
            full?: string;
            withoutConstant?: string;
            constant?: string;
        };
    }
}
declare module Coveo.Ui {
    class ExpressionBuilder {
        private parts;
        public wrapParts: boolean;
        public add(expression: string): void;
        public addFieldExpression(field: string, operator: string, values: string[]): void;
        public addFieldNotEqualExpression(field: string, values: string[]): void;
        public remove(expression: string): void;
        public isEmpty(): boolean;
        public build(): string;
        static merge(...builders: ExpressionBuilder[]): ExpressionBuilder;
        static mergeUsingOr(...builders: ExpressionBuilder[]): ExpressionBuilder;
    }
}
declare module Coveo.Ui {
    class Images {
        static WaitAnimation: string;
    }
}
declare module Coveo.Ui.JQueryUtils {
    interface PopUpPosition {
        vertical: VerticalAlignment;
        horizontal: HorizontalAlignment;
        verticalOffset?: number;
        horizontalOffset?: number;
    }
    enum VerticalAlignment {
        top = 0,
        middle = 1,
        bottom = 2,
        innerTop = 3,
        innerBottom = 4,
    }
    enum HorizontalAlignment {
        left = 0,
        center = 1,
        right = 2,
        innerLeft = 3,
        innerRight = 4,
    }
    function positionPopup(popUp: JQuery, nextTo: JQuery, appendTo: JQuery, boundary: JQuery, desiredPosition: PopUpPosition, checkForBoundary?: number): void;
    function getPopUpCloseButton(captionForClose: string, captionForReminder: string): string;
    function getBasicLoadingAnimation(): JQuery;
    function getBasicLoadingDots(): JQuery;
    function addToggleClassOnSearchInterface(direction: string, isPhonegap?: boolean): void;
    function removeToggleClassOnSearchInterface(isPhonegap?: boolean): void;
    function highlightElement(initialString: string, valueToSearch: string): string;
    function findScrollingParent(element: HTMLElement): HTMLElement;
    function htmlToDom(html: string): Node;
}
interface JQuery {
    fastToggle(visible: boolean): JQuery;
}
declare module Coveo.Ui.Device {
    function getDeviceName(): string;
    function isAndroid(): boolean;
    function isIos(): boolean;
    function isIE8or9(): boolean;
    function isMobileDevice(): boolean;
    function isPhonegap(): boolean;
    function isSmallScreenWidth(): boolean;
    function isSmallScreenHeight(): boolean;
}
declare module Coveo.Ui.OS {
    enum NAME {
        WINDOWS = 0,
        MACOSX = 1,
        UNIX = 2,
        LINUX = 3,
        UNKNOWN = 4,
    }
    function get(nav?: Navigator): any;
}
declare module Coveo.Ui.FacetUtils {
    function getRegexToUseForFacetSearch(value: string): RegExp;
    function getValuesToUseForSearchInFacet(original: string, facet: Facet): string[];
    function buildFacetSearchPattern(values: string[]): string;
    function needAnotherFacetSearch(currentSearchLength: number, newSearchLength: number, oldSearchLength: number, desiredSearchLength: number): boolean;
    function addNoStateCssClassToFacetValues(facet: Facet, container: JQuery): void;
    function tryToGetTranslatedCaption(value: string): any;
    function clipCaptionsToAvoidOverflowingTheirContainer(facet: Facet, forceClip?: boolean): void;
}
declare module Coveo.Ui.PhonegapUtils {
    function bindOpenLinkInPhonegap(element: HTMLElement, uri: string): void;
    function openInPhonegap(uri: string): void;
}
declare module Coveo.Ui.MobileUtils {
    function showClickCancelingOverlay(duration: number): void;
    function showClickFeedback(element: JQuery, duration: number): void;
    function hideIOSKeyboard(activeElement: any): void;
}
declare module Coveo.Ui {
    class StandaloneResult {
        public searchInterface: SearchInterface;
        public result: Rest.QueryResult;
        public element: HTMLElement;
        constructor(searchInterface: SearchInterface, resultTemplate: Template, result: Rest.QueryResult);
        private initialize();
    }
}
declare module Coveo {
    interface StatusBarPhonegapPlugin {
        overlaysWebView(toggle: boolean): void;
        styleDefault(): void;
        styleLightContent(): void;
        styleBlackTranslucent(): void;
        styleBlackOpaque(): void;
        backgroundColorByName(name: string): void;
        backgroundColorByHexString(hexColor: string): void;
        hide(): void;
        show(): void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1 {
        open: (opener: EmailComposerPhonegapPlugin_0_8_1_opener_object) => void;
    }
    interface EmailComposerPhonegapPlugin_0_8_1_opener_object {
        to?: string[];
        cc?: string[];
        bcc?: string[];
        attachments?: string[];
        subject?: string;
        body?: string;
        isHtml?: boolean;
    }
    interface NetworkNetworkInformationPhonegapPluginState_0_2_7 {
        UNKNOWN: string;
        ETHERNET: string;
        WIFI: string;
        CELL_2G: string;
        CELL_3G: string;
        CELL_4G: string;
        CELL: string;
        NONE: string;
    }
    interface NetworkInformationPhonegapPlugin_0_2_7 {
        type: any;
    }
}
interface Navigator {
    connection?: Coveo.NetworkInformationPhonegapPlugin_0_2_7;
}
interface Window {
    Connection: Coveo.NetworkNetworkInformationPhonegapPluginState_0_2_7;
    plugins: any;
    plugin: {
        email?: Coveo.EmailComposerPhonegapPlugin_0_8_1;
    };
}
declare module Coveo.Models {
    interface ModelSetOptions {
        silent?: boolean;
        customAttribute?: boolean;
        validateType?: boolean;
    }
    interface AttributeChangedEventArg {
        attribute: string;
        value: any;
    }
    interface AttributesChangedEventArg {
        attributes: {};
    }
    interface ModelChangedEventArg {
        model: Model;
    }
    class Model extends Ui.Component {
        public attributes: {
            [key: string]: any;
        };
        public defaultAttributes: {
            [key: string]: any;
        };
        private eventNameSpace;
        static eventTypes: {
            preprocess: string;
            changeOne: string;
            change: string;
            reset: string;
            all: string;
        };
        constructor(element: HTMLElement, id: string, attributes: {
            [key: string]: any;
        }, bindings?: Ui.ComponentBindings);
        public set(attribute: string, value: any, options?: ModelSetOptions): void;
        public setMultiple(toSet: {
            [key: string]: any;
        }, options?: ModelSetOptions): void;
        public setNewDefault(attribute: string, value: any, options?: ModelSetOptions): void;
        public setDefault(attribute: string, options?: ModelSetOptions): void;
        public get(attribute?: string): any;
        public getDefault(attribute?: string): any;
        public reset(): void;
        public registerNewAttribute(attribute: string, defaultValue: any): void;
        public getEventName(event: string): string;
        private attributesHasChangedEvent();
        private attributeHasChangedEvent(attr);
        private preprocessEvent(attributes);
        private modelWasResetEvent();
        private anyEvent();
        private createAttributeChangedArgument(attribute);
        private createAttributesChangedArgument();
        private createModelChangedArgument();
        private checkIfAttributeExists(attribute);
        private validateType(attribute, value);
        private parseToCorrectType(attribute, value);
        private checkIfAttributeChanged(attribute, newValue);
    }
}
declare module Coveo.Models {
    interface QueryStateAttributes {
        q: string;
        first: number;
        t: string;
        tg: string;
        sort: string;
        hd: string;
        hq: string;
    }
    interface QueryStateIncludedAttribute {
        title: string;
        included: string[];
    }
    interface QueryStateExcludedAttribute {
        title: string;
        excluded: string[];
    }
    class QueryStateModel extends Model {
        static ID: string;
        static defaultAttributes: QueryStateAttributes;
        static attributesEnum: {
            q: string;
            first: string;
            t: string;
            sort: string;
            hd: string;
            hq: string;
            tg: string;
        };
        static getFacetId(id: string, include?: boolean): string;
        static getFacetOperator(id: string): string;
        static getFacetLookupValue(id: string): string;
        constructor(element: HTMLElement, attributes?: QueryStateAttributes, bindings?: Ui.ComponentBindings);
        public set(attribute: string, value: any, options?: ModelSetOptions): void;
        private validate(attribute, value);
        public getAttributes(): {
            [key: string]: any;
        };
    }
}
interface JQuery {
    coveo(method: 'state'): Coveo.Models.QueryStateModel;
    coveo(method: 'state', name: string): any;
    coveo(method: 'state', name: string, value: any, options?: Coveo.Models.ModelSetOptions): any;
    coveo(method: 'state', values: {}, options?: Coveo.Models.ModelSetOptions): any;
}
declare module Coveo.Models {
    class ComponentStateModel extends Model {
        static ID: string;
        constructor(element: HTMLElement, window_?: any);
        public registerComponent(componentId: string, component: Ui.Component): void;
    }
}
declare module Coveo.Models {
    interface ComponentOptionsAttributes {
        resultLink: Ui.ResultLinkOptions;
    }
    class ComponentOptionsModel extends Model {
        static ID: string;
        static defaultAttributes: ComponentOptionsAttributes;
        static attributesEnum: {
            resultLink: string;
        };
        constructor(element: HTMLElement, attributes?: ComponentOptionsAttributes, window_?: any);
    }
}
declare module Coveo.Controllers {
    class HistoryController extends Ui.Component {
        public _window: Window;
        public queryStateModel: Models.QueryStateModel;
        public queryController: QueryController;
        static ID: string;
        private ignoreNextHashChange;
        private initialHashChange;
        private willUpdateHash;
        constructor(element: HTMLElement, _window?: Window, queryStateModel?: Models.QueryStateModel, queryController?: QueryController);
        private handleHashChange();
        private updateHashFromModel();
        private updateModelFromHash();
        private getHashValue(value);
        private setHashValues(values);
    }
}
declare module Coveo.Controllers {
    interface QueryOptions {
        searchAsYouType?: boolean;
        beforeExecuteQuery: () => void;
    }
    class QueryController extends Ui.Component {
        public options: Ui.SearchInterfaceOptions;
        static ID: string;
        private currentPendingQuery;
        private lastQueryBuilder;
        private searchUidCache;
        private searchUid;
        private firstQuery;
        private showingExecutingQueryAnimation;
        private overrideEndpoint;
        constructor(element: HTMLElement, options: Ui.SearchInterfaceOptions);
        public setEndpoint(endpoint: Rest.SearchEndpoint): void;
        public getEndpoint(): Rest.SearchEndpointInterface;
        public executeQuery(options?: QueryOptions): JQueryDeferred<Rest.QueryResults>;
        public deferExecuteQuery(options?: QueryOptions): void;
        public fetchMore(count: number): JQueryDeferred<Rest.QueryResults>;
        public isStandaloneSearchBox(): boolean;
        public newSearchUid(): string;
        public getSearchUid(): string;
        private continueLastQueryBuilder(queryBuilder, count);
        private createQueryBuilder(options);
        private cancelAnyCurrentPendingQuery();
        private showExecutingQueryAnimation();
        private hideExecutingQueryAnimation();
        private redirectToSearchPage();
        private getCallOptions();
        private buildingQueryEvent(args);
        private doneBuildingQueryEvent(args);
        private duringQueryEvent(args);
        private querySuccessEvent(args);
        private deferredQuerySuccessEvent(args);
        private queryError(args);
        private preprocessResultsEvent(args);
        private noResultEvent(args);
    }
}
interface JQuery {
    coveo(method: 'executeQuery'): any;
}
declare module Coveo.Controllers {
    class FacetQueryController {
        public facet: Ui.Facet;
        private expressionToUseForFacetSearch;
        public lastGroupByRequestIndex: number;
        constructor(facet: Ui.Facet);
        public prepareForNewQuery(): void;
        public computeOurFilterExpression(): string;
        public putGroupByIntoQueryBuilder(queryBuilder: Ui.QueryBuilder): void;
        public searchInFacet(numberOfValuesToRequest: number, valuesToSearch: string[], ignoreAccents?: boolean): JQueryDeferred<Rest.FieldValue[]>;
        public searchInFacetWithLookupField(numberOfValuesToRequest: number, valuesToSearch: string[], ignoreAccents?: boolean): JQueryDeferred<Rest.QueryResults>;
        public recursiveFacetSearch(valueToCheckAgainst: string, numberOfValuesToRequest: number, oldLength?: number, returnDeferred?: JQueryDeferred<Rest.FieldValue[]>): JQueryDeferred<Rest.FieldValue[]>;
        public fetchMore(): JQueryDeferred<Rest.QueryResults>;
        public searchInFacetToUpdateDelta(facetValues: Ui.FacetValue[]): JQueryDeferred<Rest.QueryResults>;
        private createSearchDeferer(query);
        private createListFieldDeferer(request);
        private buildSearchQueryForFacetWithLookupField(valuesToSearch);
        private buildListFieldValuesRequest(numberOfResult, pattern?, ignoreAccents?, queryOverride?);
        private buildGroupByQuery(allowedValues?);
        public _createGroupByAllowedValues(): string[];
        private createGroupByQueryOverride(queryBuilder);
        public _createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): Rest.GroupByRequest;
        private checkForFacetSearchValuesToRemove(fieldValues, valueToCheckAgainst);
        private static makeFacetSearchPattern(values);
    }
}
declare module Coveo.Controllers {
    class FacetRangeQueryController extends FacetQueryController {
        public facet: Ui.FacetRange;
        public graphGroupByQueriesIndex: number;
        private rangeValuesForGraphToUse;
        constructor(facet: Ui.FacetRange);
        public putGroupByIntoQueryBuilder(queryBuilder: Ui.QueryBuilder): void;
        public _createBasicGroupByRequest(allowedValues?: string[], addComputedField?: boolean): Rest.GroupByRequest;
        public _createGroupByAllowedValues(): string[];
        public computeOurFilterExpression(boundary?: number[]): string;
        private handleQuerySuccess(e, args);
        private addFilterExpressionWithOuterBoundsIncluded(start, end, builder);
        private addFilterExpressionWithOuterBoundsExcluded(start, end, builder);
        private buildGroupByQueryForSlider(groupByQuery);
        private buildGroupByQueryForAutomaticRanges(groupByQuery);
        private buildGroupByQueryForPredefinedRanges(groupByQuery);
        private putGroupByForGraphIntoQueryBuilder(queryBuilder);
        private putGroupByForSliderIntoQueryBuilder(queryBuilder);
        private createRangeValuesForGraph(basicRangeRequest);
        private usePrebuiltRange(basicRangeRequest);
        private buildRange(basicRangeRequest);
        private buildGroupByQueryForSelectedAndExcludedValues(groupByQuery);
        private getISOFormat(value);
        private getFilterDateFormat(rawValue);
    }
}
declare module Coveo.Controllers {
    class HierarchicalFacetQueryController extends FacetQueryController {
        public facet: Ui.HierarchicalFacet;
        private lastGroupByIndexForCountOf;
        public lastGroupByForCountOf: Rest.GroupByResult;
        constructor(facet: Ui.HierarchicalFacet);
        public putGroupByIntoQueryBuilder(queryBuilder: Ui.QueryBuilder): void;
    }
}
declare module Coveo.Events {
    interface AnalyticsSearchEventsArgs {
        searchEvents: Rest.APISearchEvent[];
    }
    interface AnalyticsDocumentViewEventArgs {
        documentViewEvent: Rest.APIDocumentViewEvent;
    }
    interface AnalyticsCustomEventArgs {
        customEvent: Rest.APICustomEvent;
    }
    interface ChangeAnalyticsCustomDataEventArgs extends ChangeableAnalyticsDataObject {
        type: string;
        metaObject: ChangeableAnalyticsMetaObject;
    }
    interface ChangeableAnalyticsMetaObject {
        metaDataAsString: {
            [name: string]: string;
        };
        metaDataAsNumber: {};
    }
    interface ChangeableAnalyticsDataObject {
        originLevel1: string;
        originLevel2: string;
        originLevel3: string;
        language: string;
    }
    class AnalyticsEvents {
        static searchEvent: string;
        static documentViewEvent: string;
        static customEvent: string;
        static changeAnalyticsCustomData: string;
    }
}
declare module Coveo.Events {
    interface NewQueryEventArgs {
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
    }
    interface BuildingQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
    }
    interface DoneBuildingQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
    }
    interface DuringQueryEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        deferred: JQueryDeferred<any>;
        searchAsYouType: boolean;
    }
    interface QuerySuccessEventArgs {
        query: Rest.Query;
        results: Rest.QueryResults;
        queryBuilder: Ui.QueryBuilder;
        searchAsYouType: boolean;
    }
    interface QueryErrorEventArgs {
        queryBuilder: Ui.QueryBuilder;
        endpoint: Rest.SearchEndpointInterface;
        query: Rest.Query;
        error: Rest.EndpointError;
        searchAsYouType: boolean;
    }
    interface PreprocessResultsEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        results: Rest.QueryResults;
        searchAsYouType: boolean;
    }
    interface NoResultsEventArgs {
        queryBuilder: Ui.QueryBuilder;
        query: Rest.Query;
        results: Rest.QueryResults;
        searchAsYouType: boolean;
        retryTheQuery: boolean;
    }
    interface BuildingCallOptionsEventArgs {
        options: Rest.EndpointCallOptions;
    }
    class QueryEvents {
        static newQuery: string;
        static buildingQuery: string;
        static doneBuildingQuery: string;
        static duringQuery: string;
        static duringFetchMoreQuery: string;
        static querySuccess: string;
        static deferredQuerySuccess: string;
        static queryError: string;
        static preprocessResults: string;
        static noResults: string;
        static buildingCallOptions: string;
    }
}
interface JQuery {
    on(events: string, handler: (e: JQueryEventObject, args: {}) => any): any;
    on(events: 'newQuery', handler: (e: JQueryEventObject, args: Coveo.Events.NewQueryEventArgs) => any): any;
    on(events: 'buildingQuery', handler: (e: JQueryEventObject, args: Coveo.Events.BuildingQueryEventArgs) => any): any;
    on(events: 'doneBuildingQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DoneBuildingQueryEventArgs) => any): any;
    on(events: 'duringQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DuringQueryEventArgs) => any): any;
    on(events: 'duringFetchMoreQuery', handler: (e: JQueryEventObject, args: Coveo.Events.DuringQueryEventArgs) => any): any;
    on(events: 'querySuccess', handler: (e: JQueryEventObject, args: Coveo.Events.QuerySuccessEventArgs) => any): any;
    on(events: 'queryError', handler: (e: JQueryEventObject, args: Coveo.Events.QueryErrorEventArgs) => any): any;
    on(events: 'preprocessResults', handler: (e: JQueryEventObject, args: Coveo.Events.PreprocessResultsEventArgs) => any): any;
    on(events: 'noResults', handler: (e: JQueryEventObject, args: Coveo.Events.NoResultsEventArgs) => any): any;
    on(events: 'buildingCallOptions', handler: (e: JQueryEventObject, args: Coveo.Events.BuildingCallOptionsEventArgs) => any): any;
}
declare module Coveo.Events {
    interface BeforeInitializationEventArgs {
    }
    interface AfterInitializationEventArgs {
    }
    class InitializationEvents {
        static beforeInitialization: string;
        static afterComponentsInitialization: string;
        static restoreHistoryState: string;
        static afterInitialization: string;
    }
}
declare module Coveo.Events {
    interface DisplayedNewResultEventArgs {
        result: Rest.QueryResult;
        item: HTMLElement;
    }
    interface DisplayedNewResultsEventArgs {
    }
    class ResultListEvents {
        static newResultsDisplayed: string;
        static newResultDisplayed: string;
    }
}
declare module Coveo.Events {
    interface CompletedImageResultsLayoutEventArgs {
    }
    class ImageResultListEvents {
        static imageResultsLayoutComplete: string;
    }
}
declare module Coveo.Events {
    interface PopulateBreadcrumbEventArgs {
        breadcrumbs: Ui.BreadcrumbItem[];
    }
    interface ClearBreadcrumbEventArgs {
    }
    class BreadcrumbEvents {
        static populateBreadcrumb: string;
        static clearBreadcrumb: string;
    }
}
declare module Coveo.Events {
    interface PopulateOmniBoxEventArgs extends Ui.OmniBoxData {
    }
    interface PopulateOmniBoxEventRow extends Ui.OmniBoxDataRow {
    }
    interface CloseOmniBoxEventArgs {
    }
    class OmniBoxEvents {
        static populateOmniBox: string;
        static openOmniBox: string;
        static closeOmniBox: string;
    }
}
declare module Coveo.Events {
    interface EnterOnSearchBoxEventArgs {
        expression: string;
    }
    interface QuickViewLoadedEventArgs {
        duration: number;
    }
    class UserActionEvents {
        static enterOnSearchBox: string;
        static quickViewLoaded: string;
    }
}
declare module Coveo.Events {
    interface StartSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface DuringSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface EndSlideEventArgs {
        slider: Ui.Slider;
        button: Ui.SliderButton;
    }
    interface GraphValueSelectedArgs {
        start: any;
        end: any;
        value: any;
    }
    class SliderEvents {
        static startSlide: string;
        static duringSlide: string;
        static endSlide: string;
        static graphValueSelected: string;
    }
}
declare module Coveo.Events {
    interface SavePreferencesEventArgs {
    }
    class PreferencesPanelEvents {
        static savePreferences: string;
        static exitPreferencesWithoutSave: string;
    }
}
declare module Coveo.Ui {
    interface SearchInterfaceOptions {
        searchPageUri?: string;
        enableHistory?: boolean;
        resultsPerPage?: number;
        excerptLength?: number;
        hiddenExpression?: string;
        filterField?: string;
        hideUntilFirstQuery?: boolean;
        firstLoadingAnimation?: HTMLElement;
        autoTriggerQuery?: boolean;
        initOptions?: any;
        endpoint?: Rest.SearchEndpoint;
        timezone?: string;
        enableDebugInfo?: boolean;
    }
    class DefaultSearchInterfaceOptions extends ComponentOptions implements SearchInterfaceOptions {
        public searchPageUri: string;
        public enableHistory: boolean;
        public resultsPerPage: number;
        public excerptLength: number;
        public hiddenExpression: string;
        public filterField: string;
        public hideUntilFirstQuery: boolean;
        public firstLoadingAnimation: HTMLElement;
        public autoTriggerQuery: boolean;
        public initOptions: any;
        public endpoint: Rest.SearchEndpoint;
        public timezone: string;
        public enableDebugInfo: boolean;
        constructor(element: HTMLElement);
    }
    class SearchInterface extends Component {
        public element: HTMLElement;
        public options: SearchInterfaceOptions;
        public analyticsOptions: AnalyticsOptions;
        static ID: string;
        private attachedComponents;
        constructor(element: HTMLElement, options?: SearchInterfaceOptions, analyticsOptions?: AnalyticsOptions, _window?: Window);
        private initializeAnalytics();
        private initializeAnalyticsFromComponent(element);
        private showAndHideFirstQueryAnimation();
        private displayFirstQueryWaitAnimation();
        private hideFirstQueryWaitAnimation();
        private handlePreprocessQueryStateModel(args);
        private getTabGroupId(tabGroupId);
        private getTabId(tabGroupId, tabId);
        private getSort(tabId, sortId);
        public attachComponent(type: string, component: Component): void;
        public detachComponent(type: string, component: Component): void;
        public components<T>(type: string): T[];
    }
}
declare module Coveo.Ui {
    interface QueryBoxOptions {
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        disableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        enablePartialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        autoFocus?: boolean;
    }
    class DefaultQueryBoxOptions extends ComponentOptions implements QueryBoxOptions {
        public enableSearchAsYouType: boolean;
        public searchAsYouTypeDelay: number;
        public disableQuerySyntax: boolean;
        public enableWildcards: boolean;
        public enableQuestionMarks: boolean;
        public enableLowercaseOperators: boolean;
        public enablePartialMatch: boolean;
        public partialMatchKeywords: number;
        public partialMatchThreshold: string;
        public autoFocus: boolean;
        constructor(element: HTMLElement);
    }
    class QueryBox extends Component {
        public element: HTMLElement;
        public options: QueryBoxOptions;
        static ID: string;
        private searchAsYouTypeTimeout;
        public _clearElement: JQuery;
        constructor(element: HTMLElement, options: QueryBoxOptions, bindings?: ComponentBindings);
        public clear(): void;
        public replace(searchValue: string, newValue: string): void;
        public replaceCurrentExpression(newValue: string): void;
        public clearCurrentExpression(): void;
        public getCurrentQueryExpression(): any;
        public insertAt(at: number, toInsert: string): void;
        public _handleChange(event: JQueryEventObject): boolean;
        public _handleQueryStateChanged(e: JQueryEventObject, data: Models.AttributeChangedEventArg): void;
        public _handleKeyUp(event: KeyboardEvent): void;
        public _addClearElement(): void;
        public _hideClearElement(): void;
        public _showClearElement(): void;
        private startNewSearchAsYouTypeTimeout();
        static queryBoxIsAlreadyAddedToQuery: boolean;
        public _handleNewQuery(e: JQueryEventObject, data: Events.NewQueryEventArgs): void;
        private handleBuildingQuery(e, data);
        public enterOnSearchBox(): void;
        public triggerNewQuery(beforeExecuteQuery: () => void, searchAsYouType: boolean): void;
        private updateQueryState();
        private cancelAnyPendingSearchAsYouTypeTimeout();
    }
}
declare module Coveo.Ui {
    interface PopulateOmniBoxObject {
        completeQueryExpression: PopulateOmniBoxQueryExpression;
        currentQueryExpression: PopulateOmniBoxQueryExpression;
        allQueryExpressions: PopulateOmniBoxQueryExpression[];
        cursorPosition: number;
        clear(): void;
        clearCurrentExpression(): void;
        replace(searchValue: string, newValue: string): void;
        replaceCurrentExpression(newValue: string): void;
        insertAt(at: number, toInsert: string): void;
        closeOmniBox(): void;
    }
    interface PopulateOmniBoxQueryExpression {
        word: string;
        regex: RegExp;
    }
    interface OmniBoxData extends PopulateOmniBoxObject {
        rows: OmniBoxDataRow[];
    }
    interface OmniBoxDataRow {
        zIndex?: number;
        element?: HTMLElement;
        deferred?: JQueryDeferred<OmniBoxDataRow>;
    }
    interface OmniBoxOptions extends QueryBoxOptions {
        omniBoxDelay?: number;
        omniBoxTimeout?: number;
        omniBoxChangeLimit?: number;
        omniBoxMinimumLetters?: number;
    }
    class DefaultOmniBoxOptions extends DefaultQueryBoxOptions implements OmniBoxOptions {
        public omniBoxDelay: number;
        public omniBoxTimeout: number;
        public omniBoxChangeLimit: number;
        public omniBoxMinimumLetters: number;
        constructor(element: HTMLElement);
    }
    class OmniBox extends QueryBox {
        public element: HTMLElement;
        public options: OmniBoxOptions;
        static ID: string;
        private omniBoxHeaderSearchForTemplate;
        private omniBoxIsOpen;
        private omniBoxDiv;
        private numberOfPendingQueries;
        private omniBoxHeader;
        private lastOmniBoxRows;
        private lastOmniBoxData;
        private omniBoxRows;
        private isCurrentlyBeingRendered;
        private isLoadingData;
        private throttledCallForOmniBoxBody;
        private lastNumberOfLettersInOmniBox;
        constructor(element: HTMLElement, options: OmniBoxOptions, bindings?: ComponentBindings);
        public close(): void;
        public open(): void;
        private getDataForOmniboxBody();
        private buildOmniBoxRequestObject();
        private prepareThrottledCall();
        private requestOmniBoxData(dataToSearch);
        private getQueryExpressionBreakDown();
        public _handleNewQuery(e: JQueryEventObject, data: Events.NewQueryEventArgs): void;
        public _handleKeyUp(event: KeyboardEvent): void;
        public _handleChange(event: JQueryEventObject): boolean;
        private handleHover(event);
        private bindOmniBoxEvent();
        private bindHoverEvent();
        private escapeEvent();
        private selectionEvent();
        private navigationEvent(event);
        private navigationEventWhenNoSelection(event);
        private navigationEventWhenSelection(event, alreadySelected);
        private keyBoardSelection();
        public triggerNewQuery(beforeExecuteQuery: () => void): void;
        private processNewOmniBoxData(data);
        private renderOmniBoxDiv();
        private setWidthOnOmniBoxDiv();
        private renderOmniBoxHeader();
        private renderOmniBoxBody(data);
        private rejectAllPendingDeferred(data);
        private allDeferredHaveArrived();
        private clearLastOmniBoxRows();
        private appendOmniBoxSections();
        private resetOmniBoxInternalData();
        private renderOmniBoxForOneElement(row);
        private renderOmniBoxForOneElementDeferred(row);
        private isFirstValueSelected(selected);
        private isLastValueSelected(selected);
        private unselectValueInOmnibox(alreadySelected);
        private selectValueBeforeAlreadySelected(alreadySelected);
        private selectValueAfterAlreadySelected(alreadySelected);
        private findPosOfAlreadySelected(alreadySelected);
        private findSelectable();
        private findSelected();
        private toggleSelected(newSelected);
        private getWidth();
        private getSearchButtonWidth();
        private getRegexToSearch(strValue?);
        private getCorrectTarget(event);
        private addSearchAnimation();
        private removeSearchAnimation();
    }
}
declare module Coveo.Ui {
    interface SearchButtonOptions {
    }
    class DefaultSearchButtonOptions extends ComponentOptions implements SearchButtonOptions {
        constructor(element: HTMLElement);
    }
    class SearchButton extends Component {
        public element: HTMLElement;
        public options: SearchButtonOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: SearchButtonOptions, bindings?: ComponentBindings);
        private handleClick();
    }
}
declare module Coveo.Ui {
    interface SearchBoxOptions extends OmniBoxOptions {
        activateOmniBox?: boolean;
        enableSearchAsYouType?: boolean;
        searchAsYouTypeDelay?: number;
        disableQuerySyntax?: boolean;
        enableWildcards?: boolean;
        enableQuestionMarks?: boolean;
        enableLowercaseOperators?: boolean;
        enablePartialMatch?: boolean;
        partialMatchKeywords?: number;
        partialMatchThreshold?: string;
        autoFocus?: boolean;
    }
    class DefaultSearchBoxOptions extends DefaultOmniBoxOptions implements SearchBoxOptions {
        public activateOmniBox: boolean;
        public enableSearchAsYouType: boolean;
        public searchAsYouTypeDelay: number;
        public disableQuerySyntax: boolean;
        public enableWildcards: boolean;
        public enableQuestionMarks: boolean;
        public enableLowercaseOperators: boolean;
        public enablePartialMatch: boolean;
        public partialMatchKeywords: number;
        public partialMatchThreshold: string;
        public omniBoxDelay: number;
        public autoFocus: boolean;
        constructor(element: HTMLElement);
    }
    class SearchBox extends Component {
        public element: HTMLElement;
        public options: SearchBoxOptions;
        static ID: string;
        public searchButton: SearchButton;
        public searchBox: QueryBox;
        constructor(element: HTMLElement, options?: SearchBoxOptions, bindings?: ComponentBindings);
        private buildInputTag();
    }
}
declare module Coveo.Ui {
    interface ResultListOptions {
        resultContainer?: HTMLElement;
        resultTemplate?: Template;
        resultOptions?: {};
        waitAnimationContainer?: HTMLElement;
        enableInfiniteScroll?: boolean;
        infiniteScrollPageSize?: number;
        infiniteScrollContainer?: HTMLElement;
        waitAnimation?: string;
        mobileScrollContainer?: HTMLElement;
        showInfiniteScrollWaitingAnimation?: boolean;
    }
    class DefaultResultListOptions extends ComponentOptions implements ResultListOptions {
        public resultContainer: HTMLElement;
        public resultTemplate: Template;
        public resultOptions: {};
        public waitAnimationContainer: HTMLElement;
        public waitAnimation: string;
        public enableInfiniteScroll: boolean;
        public infiniteScrollPageSize: number;
        public infiniteScrollContainer: HTMLElement;
        public mobileScrollContainer: HTMLElement;
        public showInfiniteScrollWaitingAnimation: boolean;
        constructor(element: HTMLElement, appendResultContainer?: boolean, showInfiniteScrollWaitingAnimation?: boolean);
    }
    class ResultList extends Component {
        public element: HTMLElement;
        public options: ResultListOptions;
        public bindings: ComponentBindings;
        static ID: string;
        private currentlyDisplayedResults;
        private fetchingMoreResults;
        private reachedTheEndOfResults;
        private resetList;
        private pageChanged;
        constructor(element: HTMLElement, options?: ResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private handlePageChanged();
        public handleNewQuery(): void;
        public displayMoreResults(count: number, triggeredByUser: boolean): void;
        public _triggerNewResultDisplayed(result: Rest.QueryResult, resultElement: HTMLElement): void;
        public _buildResults(results: Rest.QueryResults): void;
        public _instantiateTemplateForResult(result: Rest.QueryResult): HTMLElement;
        public _autoCreateComponentsInsideResult(element: HTMLElement, result: Rest.QueryResult): void;
        private handleDuringQuery();
        private handleProcessNewQueryResults(e, data);
        private reset();
        private handleScrollOfResultList(event?);
        public isCurrentlyFetchingMoreResults(): boolean;
        private isScrollingOfResultListAlmostAtTheBottom();
        private isScrollAtBottomForWindowElement();
        private isScrollAtBottomForHtmlElement();
        public hasPotentiallyMoreResultsToDisplay(): boolean;
        private cancelFetchingMoreResultsIfNeeded();
        private showOrHideElementsDependingOnState(hasQuery, hasResults);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private showWaitingAnimationForInfiniteScrolling();
        private hideWaitingAnimationForInfiniteScrolling();
        public getOptions(): ResultListOptions;
    }
}
declare module Coveo.Ui {
    interface OmniBoxResultListOptions extends ResultListOptions {
        omniBoxZIndex?: number;
        onSelect?: (result: Rest.QueryResult, resultElement: JQuery, omniboxObject: Events.PopulateOmniBoxEventArgs) => void;
        headerTitle?: string;
    }
    class DefaultOmniBoxResultListOptions extends DefaultResultListOptions implements OmniBoxResultListOptions {
        public omniBoxZIndex: number;
        public headerTitle: string;
        constructor(element: HTMLElement);
    }
    class OmniBoxResultList extends ResultList {
        public element: HTMLElement;
        public options: OmniBoxResultListOptions;
        public bindings: ComponentBindings;
        static ID: string;
        private lastOmniboxRequest;
        private suggestionForOmniBox;
        constructor(element: HTMLElement, options?: OmniBoxResultListOptions, bindings?: ComponentBindings);
        public _buildResults(results: Rest.QueryResults): void;
        private setupOptions();
        private handlePopulateOmniBox(e, args);
        private onRowSelection(result, resultElement, omniboxObject);
    }
}
declare module Coveo.Ui {
    interface ImageResultListOptions extends ResultListOptions {
        layoutType?: string;
        heightThreshold?: number;
        columnWidth?: number;
    }
    class DefaultImageResultListOptions extends DefaultResultListOptions implements ImageResultListOptions {
        public layoutType: string;
        public heightThreshold: number;
        public columnWidth: number;
        constructor(element: HTMLElement);
        private findScrollParent(element);
    }
    class ImageResultList extends ResultList {
        public element: HTMLElement;
        static ID: string;
        public options: ImageResultListOptions;
        static rowLayoutTypeStr: string;
        static columnLayoutTypeStr: string;
        private columnResultsArray;
        private imagesInCurrentRow;
        private imagesLoaded;
        private resultIndex;
        private lastRowHeight;
        constructor(element: HTMLElement, options?: ImageResultListOptions, bindings?: ComponentBindings, elementClassId?: string);
        private getResultsElement();
        private getResultsElementImages();
        private getResultsContainerDiv();
        private bindWindowResizeEvent();
        private handleProcessNewResultsDisplayed();
        private addTransitionAllToElement(element);
        private retrieveLayoutMethod();
        private onImageProxy(callback);
        private getHorizontalMargin(element);
        private getVerticalMargin(element);
        private setupColumns();
        private positionColumns(colWidth, margin);
        private setResultsContainerHeight(height);
        private setupRows();
        private getCurrentRowHeight(results, containerWidth);
        private getImageDimensionsFromResult(result);
        private setCurrentRowImagesDimensions(images, height, top);
        private adjustNumberOfResults();
    }
}
declare module Coveo.Ui {
    interface ResultLinkOptions {
        onClick?: (e: JQueryEventObject, result: Rest.QueryResult) => any;
        field?: string;
        openInOutlook?: boolean;
        openQuickView?: boolean;
        alwaysOpenInNewWindow?: boolean;
    }
    class DefaultResultLinkOptions extends ComponentOptions implements ResultLinkOptions {
        public onClick: (e: JQueryEventObject, result: Rest.QueryResult) => any;
        public field: string;
        public openInOutlook: boolean;
        public openQuickView: boolean;
        public alwaysOpenInNewWindow: boolean;
        constructor(element: HTMLElement);
    }
    class ResultLink extends Component {
        public element: HTMLElement;
        public options: ResultLinkOptions;
        public result: Rest.QueryResult;
        public os: OS.NAME;
        static ID: string;
        constructor(element: HTMLElement, options?: ResultLinkOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, os?: OS.NAME);
        private bindOnClickIfNotUndefined();
        private bindOpenQuickViewIfNotUndefined();
        private openLinkThatIsNotAnAnchor();
        private setHrefIfNotAlready();
        private bindPhonegapClick();
        private logOpenDocument(e);
        private getResultUri();
        private elementIsAnAnchor();
        private setField();
        private hasOutlookField();
    }
}
declare module Coveo.Ui {
    class SortCriteria {
        public sort: string;
        public direction: string;
        private static validSorts;
        private static sortsNeedingDirection;
        private static validDirections;
        constructor(sort: string, direction?: string);
        public putInQueryBuilder(queryBuilder: QueryBuilder): void;
        public getValueFromResult(result: Rest.QueryResult): any;
        public toString(): string;
        public equals(criteria: SortCriteria): boolean;
        static parse(criteria: string): SortCriteria;
        private static sortIsField(criteria);
        private static sortNeedsDirection(sort);
    }
    interface SortOptions {
        sortCriterias?: SortCriteria[];
    }
    class DefaultSortOptions extends ComponentOptions implements SortOptions {
        public sortCriterias: SortCriteria[];
        constructor(element: HTMLElement);
    }
    class Sort extends Component {
        public element: HTMLElement;
        public options: SortOptions;
        static ID: string;
        private currentCriteria;
        private listenToQueryStateChange;
        constructor(element: HTMLElement, options?: SortOptions, bindings?: ComponentBindings);
        public select(direction?: string, silent?: boolean): void;
        public disable(): void;
        public enable(): void;
        public getCurrentCriteria(): SortCriteria;
        private handleQueryStateChanged(e, data);
        private handleBuildingQuery(e, data);
        private handleClick();
        private isToggle();
        private isSelected();
        private updateAppearance();
        public match(sortId: string): boolean;
    }
}
declare module Coveo.Ui {
    interface PagerOptions {
        numberOfPages?: number;
        navigationButton?: boolean;
    }
    class DefaultPagerOptions extends ComponentOptions implements PagerOptions {
        public numberOfPages: number;
        public navigationButton: boolean;
        constructor(element: HTMLElement);
    }
    class Pager extends Component {
        public element: HTMLElement;
        public options: PagerOptions;
        static ID: string;
        public currentPage: number;
        private listenToQueryStateChange;
        private needToReset;
        private ignoreNextQuerySuccess;
        private listTemplate;
        private listItemTemplate;
        private listItemValueTemplate;
        private navigationButtonTemplate;
        constructor(element: HTMLElement, options?: PagerOptions, bindings?: ComponentBindings);
        public setPage(pageNumber: number): void;
        public previousPage(): void;
        public nextPage(): void;
        private handleNewQuery();
        private updateQueryStateModel(attrValue);
        private handleQueryError(e, data);
        private handleQuerySuccess(e, data);
        private handleNoResults(e, data);
        private reset();
        private handleBuildingQuery(e, data);
        private computePagerBoundary(firstResult, totalCount);
        private renderNavigationButton(pagerBoundary, list);
        private handleQueryStateModelChanged(e, data);
        private handleClickPage(pageNumber);
        private handleClickPrevious();
        private handleClickNext();
        private fromFirstResultsToPageNumber(firstResult);
        private getFirstResultNumber(pageNumber?);
        private getQueryEventArgs();
    }
}
declare module Coveo.Ui {
    interface AggregateOptions {
        field?: string;
        operation?: string;
        format?: string;
    }
    class DefaultAggregateOptions extends ComponentOptions implements AggregateOptions {
        public field: string;
        public operation: string;
        public format: string;
        constructor(element: HTMLElement);
    }
    class Aggregate extends Component {
        public element: HTMLElement;
        public options: AggregateOptions;
        static ID: string;
        private index;
        constructor(element: HTMLElement, options?: AggregateOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, args);
        private handleQuerySuccess(e, args);
    }
}
declare module Coveo.Ui {
    class FacetValue {
        public value: string;
        public lookupValue: string;
        public occurrences: number;
        public computedField: number;
        public delta: number;
        public score: number;
        public selected: boolean;
        public excluded: boolean;
        public waitingForDelta: boolean;
        public reset(): void;
        public updateCountsFromNewValue(newValue: FacetValue): void;
        public cloneWithZeroOccurrences(): FacetValue;
        public cloneWithDelta(count: number, delta: number): FacetValue;
        public getFormattedCount(): string;
        public getFormattedComputedField(format: string): any;
        static create(value: any): FacetValue;
        static createFromValue(value: string): FacetValue;
        static createFromGroupByValue(groupByValue: Rest.GroupByValue): FacetValue;
        static createFromFieldValue(fieldValue: Rest.FieldValue): FacetValue;
    }
    class FacetValues {
        private values;
        constructor(groupByResult?: Rest.GroupByResult);
        public add(facetValue: FacetValue): void;
        public remove(value: string): void;
        public size(): number;
        public isEmpty(): boolean;
        public at(index: number): FacetValue;
        public get(value: string): FacetValue;
        public contains(value: string): boolean;
        public getAll(): FacetValue[];
        public getSelected(): FacetValue[];
        public getExcluded(): FacetValue[];
        public hasSelectedOrExcludedValues(): boolean;
        public reset(): void;
        public importActiveValuesFromOtherList(other: FacetValues): void;
        public updateCountsFromNewValues(newValues: FacetValues): void;
        public updateDeltaWithFilteredFacetValues(filtered: FacetValues): void;
        public mergeWithUnfilteredFacetValues(unfiltered: FacetValues): void;
        public sortValuesDependingOnStatus(excludeLastIndex?: number): void;
    }
}
declare module Coveo.Ui {
    interface FacetSortDescription {
        label: string;
        directionToggle: boolean;
        description: string;
        name: string;
        relatedSort?: string;
    }
    interface FacetState {
        included: string[];
        excluded: string[];
        operator: string;
    }
    class FacetSettings {
        public facet: Facet;
        static availableSorts: {
            [name: string]: FacetSortDescription;
        };
        public loadedFromSettings: {
            [attribute: string]: any;
        };
        private facetSettingsIconTemplate;
        private facetSettingsButtonTemplate;
        private facetSettingsPopupTemplate;
        private facetSettingsSectionTemplate;
        private facetSettingsSectionIconTemplate;
        private facetSettingsItemsTemplate;
        private facetSettingsItemTemplate;
        private enabledSorts;
        private enabledSortsIgnoreRenderBecauseOfPairs;
        private activeSort;
        private facetStateLocalStorage;
        private includedStateAttribute;
        private excludedStateAttribute;
        private operatorStateAttribute;
        private settingsPopup;
        private settingsIcon;
        private settingsButton;
        private directionSection;
        private saveStateSection;
        private clearStateSection;
        private hideSection;
        private showSection;
        private customSortDirection;
        private customSortDirectionChange;
        constructor(sorts: string[], facet: Facet);
        public build(): JQuery;
        public reorderValues(facetValues: FacetValue[]): FacetValue[];
        public loadSavedState(): void;
        private removeEnabledSortsBasedOnFacetType();
        private reorderValuesWithCustomOrder(facetValues);
        private buildSortSection();
        private buildSortSectionItems();
        private closePopupAndUpdateSort();
        private closePopup();
        private buildDirectionSection();
        private buildSaveStateSection();
        private buildClearStateSection();
        private buildHideSection();
        private buildShowSection();
        private handleClickSettingsButtons(event, sortSection?);
        private handleClickSortButton(e, enabledSort);
        private handleDirectionClick(e, direction);
        private handleSaveStateClick(e);
        private handleClearStateClick(e);
        private handleMouseEventOnButton(sortSection);
        private activateDirectionSection();
        private disableDirectionSection();
        private getItems(section);
        private unselectSection(section);
        private selectItem(item);
        private unselectItem(item);
        private filterDuplicateForRendering();
        private getPopupAlignment();
        private hasDuplicate(first, second);
    }
}
declare module Coveo.Ui {
    class FacetSearch {
        public facet: Facet;
        public facetSearchValuesListKlass: FacetSearchValuesListKlass;
        private search;
        private magnifier;
        private wait;
        private clearIcon;
        private clear;
        private middle;
        private input;
        private searchResults;
        private facetSearchTimeout;
        private showingFacetSearchWaitAnimation;
        private facetSearchDeferred;
        private searchTemplate;
        private magnifierTemplate;
        private waitTemplate;
        private clearIconTemplate;
        private clearTemplate;
        private middleTemplate;
        private inputTemplate;
        private searchResultsTemplate;
        constructor(facet: Facet, facetSearchValuesListKlass: FacetSearchValuesListKlass);
        public build(): JQuery;
        public positionSearchResults(): void;
        public completelyDismissSearch(): void;
        private buildBaseSearch();
        private buildSearchMobile();
        private handleFacetSearchKeyUp(event);
        private handleFacetSearchFocus(e);
        private handleFacetSearchBlur();
        private handleFacetSearchClear();
        private showOrHideClearElement(isEmpty);
        private handleKeyboardNavigation(event, isEmpty);
        private keyboardNavigationEnterPressed(event, isEmpty);
        private keyboardNavigationDeletePressed(event);
        private triggerNewFacetSearch(numberOfValuesInFacetSearch?, oldLength?);
        private startNewSearchTimeout();
        private cancelAnyPendingSearchOperation();
        public _processNewFacetSearchResults(fieldValues: Rest.FieldValue[]): void;
        private rebuildSearchResults(fieldValues);
        private showSearchResultsElement();
        private hideSearchResultsElement();
        private highlightCurrentQueryWithinSearchResults();
        private makeFirstSearchResultTheCurrentOne();
        private makeCurrentResult(result);
        private moveCurrentResultDown();
        private moveCurrentResultUp();
        private getSelectables(target?);
        private performSelectActionOnCurrentSearchResult();
        private performExcludeActionOnCurrentSearchResult();
        private getValueInInputForFacetSearch();
        private selectAllValuesMatchingSearch();
        private showFacetSearchWaitingAnimation();
        private hideFacetSearchWaitingAnimation();
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetSearch extends FacetSearch {
    }
}
declare module Coveo.Ui {
    class FacetValuesList {
        public facet: Facet;
        public facetValueElementKlass: FacetValueElementKlass;
        public valueList: {
            [value: string]: FacetValueElement;
        };
        private valueContainer;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        public build(): JQuery;
        public get(value: FacetValue): ValueElement;
        public get(value: string): ValueElement;
        public select(value: FacetValue): ValueElement;
        public select(value: string): ValueElement;
        public unselect(value: FacetValue): ValueElement;
        public unselect(value: string): ValueElement;
        public exclude(value: FacetValue): ValueElement;
        public exclude(value: string): ValueElement;
        public unExclude(value: FacetValue): ValueElement;
        public unExclude(value: string): ValueElement;
        public toggleSelect(value: FacetValue): ValueElement;
        public toggleSelect(value: string): ValueElement;
        public toggleExclude(value: FacetValue): ValueElement;
        public toggleExclude(value: string): ValueElement;
        public rebuild(numberOfValues: number): void;
        public _getValuesToBuildWith(): FacetValue[];
        private facetValueShouldBeRemoved(facetValue);
        private ensureFacetValueIsInList(value);
        private addNoStateCssClassToFacetValues();
    }
}
declare module Coveo.Ui {
    var TranslatedFacetValues: {
        "image": string;
        "txt": string;
        "zip": string;
        "pdf": string;
        "html": string;
        "xml": string;
        "doc": string;
        "xls": string;
        "ppt": string;
        "mov": string;
        "folder": string;
        "exchangemessage": string;
        "exchangeappointment": string;
        "exchangenote": string;
        "exchangetask": string;
        "exchangeperson": string;
        "activedirperson": string;
        "exchangeactivity": string;
        "exchangecalendarmessage": string;
        "exchangedocument": string;
        "exchangeofficecom": string;
    };
}
declare module Coveo.Ui {
    class HierarchicalFacetValuesList extends FacetValuesList {
        public facet: HierarchicalFacet;
        public facetValueElementKlass: FacetValueElementKlass;
        public hierarchyFacetValues: FacetValue[];
        constructor(facet: HierarchicalFacet, facetValueElementKlass: FacetValueElementKlass);
        public _getValuesToBuildWith(): FacetValue[];
    }
}
declare module Coveo.Ui {
    class OmniboxValuesList {
        public facet: Facet;
        public facetValues: FacetValue[];
        public omniboxObject: PopulateOmniBoxObject;
        public omniBoxValueElementKlass: OmniBoxValueElementKlass;
        constructor(facet: Facet, facetValues: FacetValue[], omniboxObject: PopulateOmniBoxObject, omniBoxValueElementKlass: OmniBoxValueElementKlass);
        public build(): JQuery;
        private buildOmniBoxForOneRow(facetValue, omniboxObject);
        private buildFinalOmniBoxElement(rows);
        private buildOmniBoxHeader();
        private highlightOmniBoxMatch(orignalStr, regex, valueToSearch);
        private omniBoxCloseEvent(eventArg);
    }
}
declare module Coveo.Ui {
    class OmniboxHierarchicalValuesList extends OmniboxValuesList {
        public facet: HierarchicalFacet;
        public facetValues: FacetValue[];
        public omniboxObject: PopulateOmniBoxObject;
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], omniboxObject: PopulateOmniBoxObject);
    }
}
declare module Coveo.Ui {
    class BreadcrumbValueList {
        public facet: Facet;
        public facetValues: FacetValue[];
        public breadcrumbValueElementKlass: BreadcrumbValueElementKlass;
        private expanded;
        private collapsed;
        private elem;
        private valueContainer;
        constructor(facet: Facet, facetValues: FacetValue[], breadcrumbValueElementKlass: BreadcrumbValueElementKlass);
        public build(): JQuery;
        private buildExpanded();
        private buildCollapsed();
        private setExpandedAndCollapsed();
    }
}
declare module Coveo.Ui {
    class HierarchicalBreadcrumbValueList extends BreadcrumbValueList {
        public facet: HierarchicalFacet;
        public facetValues: FacetValue[];
        public valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        };
        constructor(facet: HierarchicalFacet, facetValues: FacetValue[], valueHierarchy: {
            [facetValue: string]: ValueHierarchy;
        });
    }
}
declare module Coveo.Ui {
    interface FacetSearchValuesListKlass {
        new(facet: Facet, facetValueElementKlass: FacetValueElementKlass): FacetSearchValuesList;
    }
    class FacetSearchValuesList {
        public facet: Facet;
        public facetValueElementKlass: FacetValueElementKlass;
        constructor(facet: Facet, facetValueElementKlass: FacetValueElementKlass);
        public build(facetValues: FacetValue[]): JQuery;
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetSearchValuesList extends FacetSearchValuesList {
        public facet: Facet;
        constructor(facet: Facet);
    }
}
declare module Coveo.Ui {
    interface ValueElementKlass {
        new(facet: Facet, facetValue: FacetValue): ValueElement;
    }
    interface FacetValueElementKlass {
        new(facet: Facet, facetValue: FacetValue, displayNextTime?: boolean): FacetValueElement;
    }
    interface ValueElementEventsBinding {
        displayNextTime: boolean;
        pinFacet: boolean;
        omniboxObject?: PopulateOmniBoxObject;
    }
    class ValueElement {
        public facet: Facet;
        public facetValue: FacetValue;
        public listElement: JQuery;
        public label: JQuery;
        public checkbox: JQuery;
        public stylishCheckbox: JQuery;
        public valueCaption: JQuery;
        public valueCount: JQuery;
        public icon: JQuery;
        public excludeIcon: JQuery;
        public computedField: JQuery;
        private isOmnibox;
        constructor(facet: Facet, facetValue: FacetValue);
        public build(): ValueElement;
        public bindEvent(eventBindings: ValueElementEventsBinding): void;
        public select(): void;
        public unselect(): void;
        public exclude(): void;
        public unexclude(): void;
        public _buildExcludeIcon(): JQuery;
        public _buildValueComputedField(): JQuery;
        public _buildValueCheckbox(): JQuery;
        public _buildValueStylishCheckbox(): JQuery;
        public _buildValueIcon(): JQuery;
        public _getValueIcon(): string;
        public _buildValueIconFromSprite(): JQuery;
        public _buildValueCaption(): JQuery;
        public _buildValueCount(): JQuery;
        public _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        public _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
        public _handleEventForExcludedValueElement(eventBindings: ValueElementEventsBinding): void;
        public _handleEventForValueElement(eventBindings: ValueElementEventsBinding): void;
        public _handleEventForCheckboxChange(eventBindings: ValueElementEventsBinding): void;
        public _omniBoxCloseEvent(eventArg: PopulateOmniBoxObject): void;
        public _setCssClassOnListValueElement(): void;
        private getAnalyticsFacetMeta();
    }
}
declare module Coveo.Ui {
    class FacetValueElement extends ValueElement {
        public facet: Facet;
        public facetValue: FacetValue;
        public keepDisplayedValueNextTime: boolean;
        private firstQuery;
        constructor(facet: Facet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        public bindEvent(): void;
    }
}
declare module Coveo.Ui {
    interface OmniBoxValueElementKlass {
        new(facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject): OmniBoxValueElement;
    }
    class OmniBoxValueElement extends ValueElement {
        public facet: Facet;
        public facetValue: FacetValue;
        public eventArg: PopulateOmniBoxObject;
        constructor(facet: Facet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject);
        public bindEvent(): void;
    }
}
declare module Coveo.Ui {
    class OmniboxHierarchicalValueElement extends OmniBoxValueElement {
        public facet: HierarchicalFacet;
        public facetValue: FacetValue;
        public eventArg: PopulateOmniBoxObject;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, eventArg: PopulateOmniBoxObject);
        public _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        public _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetValueElement extends FacetValueElement {
        public facet: HierarchicalFacet;
        public facetValue: FacetValue;
        public keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        public build(): ValueElement;
        private buildXOfYCountText(currentCount);
    }
}
declare module Coveo.Ui {
    class HierarchicalFacetSearchValueElement extends FacetValueElement {
        public facet: HierarchicalFacet;
        public facetValue: FacetValue;
        public keepDisplayedValueNextTime: boolean;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue, keepDisplayedValueNextTime: boolean);
        public _handleSelectValue(eventBindings: ValueElementEventsBinding): void;
        public _handleExcludeClick(eventBindings: ValueElementEventsBinding): void;
    }
}
declare module Coveo.Ui {
    interface BreadcrumbValueElementKlass {
        new(facet: Facet, facetValue: FacetValue): BreadcrumbValueElement;
    }
    class BreadcrumbValueElement {
        public facet: Facet;
        public facetValue: FacetValue;
        constructor(facet: Facet, facetValue: FacetValue);
        public build(tooltip?: boolean): JQuery;
        public getBreadcrumbTooltip(): string;
    }
}
declare module Coveo.Ui {
    class HierarchicalBreadcrumbValueElement extends BreadcrumbValueElement {
        public facet: HierarchicalFacet;
        public facetValue: FacetValue;
        constructor(facet: HierarchicalFacet, facetValue: FacetValue);
        public build(): JQuery;
    }
}
declare module Coveo.Ui {
    interface TabOptions {
        expression?: string;
        constant?: boolean;
        uniqueId?: string;
        icon?: string;
        caption?: string;
        sort?: SortCriteria;
        endpoint?: Rest.SearchEndpoint;
    }
    class DefaultTabOptions extends ComponentOptions implements TabOptions {
        public expression: string;
        public constant: boolean;
        public uniqueId: string;
        public icon: string;
        public caption: string;
        public sort: SortCriteria;
        public endpoint: Rest.SearchEndpoint;
        constructor(element: HTMLElement);
    }
    class Tab extends Component {
        public element: HTMLElement;
        public options: TabOptions;
        static ID: string;
        public iconTemplate: (...data: any[]) => string;
        public tabTemplate: (...data: any[]) => string;
        private isFirstQuery;
        constructor(element: HTMLElement, options?: TabOptions, bindings?: ComponentBindings);
        public select(): void;
        private handleClick(e);
        private render();
        private handleBuildingQuery(e, data);
        private handleQueryStateChanged(e, data);
        private isSelected();
        private showAndHideAppropriateElements();
        public isElementIncludedInTab(element: HTMLElement): boolean;
        private splitListOfTabs(value);
        private toggleAllComponentsUnder(element, enable);
        public enable(): void;
        public disable(): void;
    }
}
declare module Coveo.Ui {
    interface QuickViewOptions {
        title?: string;
        contentTemplate?: Template;
        showLoadingAnimation?: boolean;
        loadingAnimation?: HTMLElement;
    }
    class DefaultQuickViewOptions extends ComponentOptions implements QuickViewOptions {
        public title: string;
        public contentTemplate: Template;
        public showLoadingAnimation: boolean;
        public loadingAnimation: HTMLElement;
        constructor(element: HTMLElement);
        private getLoadingAnimationOption();
    }
    class QuickView extends Component {
        public element: HTMLElement;
        public options: QuickViewOptions;
        public result: Rest.QueryResult;
        static ID: string;
        static quickViewLinkTemplate: (...data: any[]) => string;
        public dialogBoxContent: JQuery;
        private link;
        private childsElements;
        private modalbox;
        constructor(element: HTMLElement, options?: QuickViewOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        public open(): void;
        public close(): void;
        private createLinkAndAppendItToDom(result);
        private bindClick(result);
        private bindQuickViewEvents(openerObject);
        private animateAndOpen();
        private createModalBox(openerObject);
        private prepareOpenQuickViewObject();
        private prepareQuickViewContent(loadingAnimation);
        private resizeIFrame();
    }
}
declare module Coveo.Ui {
    interface QuickViewDocumentOptions {
        maximumDocumentSize?: number;
        allowedZoom?: boolean;
        minimumZoom?: number;
        maximumZoom?: number;
    }
    class DefaultQuickViewDocumentOptions extends ComponentOptions implements QuickViewDocumentOptions {
        public maximumDocumentSize: number;
        public allowedZoom: boolean;
        public minimumZoom: number;
        public maximumZoom: number;
        constructor(element: HTMLElement);
    }
    class QuickViewDocument extends Component {
        public element: HTMLElement;
        public options: QuickViewDocumentOptions;
        public result: Rest.QueryResult;
        static ID: string;
        private iframe;
        private header;
        private overlaps;
        private keywordsState;
        constructor(element: HTMLElement, options?: QuickViewDocumentOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        public createDom(): void;
        public open(): void;
        private renderHTMLDocument(iframe, html);
        private renderErrorReport(iframe);
        private writeToIFrame(iframe, content);
        private bindOpenIframeLinksInPhonegap(iframe);
        private wrapPreElementsInIframe(iframe);
        private handleTouchStart(event, object);
        private handleTouchMove(event, object);
        private handleTouchEnd(event, object);
        private iframeSizeCalculation(iframe);
        private getMeanValue(touches, toGet);
        private mouseEventToPoint(event, scrollElement);
        private distance(a, b);
        private updateScaleScroll(scrollElement, scaleElement, scale, scroll, useScroll?);
        private triggerQuickviewLoaded(beforeLoad);
        private onReceivingMessage(window);
        private buildWordButton(wordState, window);
        private navigate(state, backward, window);
        private buildHeader();
        private buildIFrame();
        private resizeIframe();
    }
}
declare module Coveo.Ui {
    interface FacetOptions {
        title?: string;
        field?: string;
        isMultiValueField?: boolean;
        numberOfValues?: number;
        morePageSize?: number;
        sortCriteria?: string;
        availableSorts?: string[];
        injectionDepth?: number;
        showIcon?: boolean;
        useAnd?: boolean;
        enableCollapse?: boolean;
        allowTogglingOperator?: boolean;
        enableMoreLess?: boolean;
        valueIcon?: (facetValue: FacetValue) => string;
        valueCaption?: any;
        lookupField?: string;
        enableFacetSearch?: boolean;
        facetSearchDelay?: number;
        numberOfValuesInFacetSearch?: number;
        includeInBreadcrumb?: boolean;
        includeInOmniBox?: boolean;
        numberOfValuesInOmniBox?: number;
        numberOfValuesInBreadcrumb?: number;
        uniqueId?: string;
        computedField?: string;
        computedFieldOperation?: string;
        computedFieldFormat?: string;
        computedFieldCaption?: string;
        preservePosition?: boolean;
        scrollContainer?: HTMLElement;
        paddingContainer?: HTMLElement;
        customSort?: string[];
        enableSettings?: boolean;
        allowedValues?: string[];
        headerIcon?: string;
    }
    class DefaultFacetOptions extends ComponentOptions implements FacetOptions {
        public title: string;
        public field: string;
        public isMultiValueField: boolean;
        public numberOfValues: number;
        public morePageSize: number;
        public sortCriteria: string;
        public availableSorts: string[];
        public injectionDepth: number;
        public showIcon: boolean;
        public enableCollapse: boolean;
        public useAnd: boolean;
        public allowTogglingOperator: boolean;
        public enableMoreLess: boolean;
        public valueIcon: (facetValue: FacetValue) => string;
        public valueCaption: any;
        public lookupField: string;
        public enableFacetSearch: boolean;
        public facetSearchDelay: number;
        public numberOfValuesInFacetSearch: number;
        public includeInBreadcrumb: boolean;
        public includeInOmniBox: boolean;
        public numberOfValuesInOmniBox: number;
        public numberOfValuesInBreadcrumb: number;
        public uniqueId: string;
        public computedField: string;
        public computedFieldOperation: string;
        public computedFieldFormat: string;
        public computedFieldCaption: string;
        public preservePosition: boolean;
        public scrollContainer: HTMLElement;
        public paddingContainer: HTMLElement;
        public customSort: string[];
        public enableSettings: boolean;
        public allowedValues: string[];
        public headerIcon: string;
        constructor(element: HTMLElement);
    }
    class Facet extends Component {
        public element: HTMLElement;
        public options: FacetOptions;
        static ID: string;
        static omniboxIndex: number;
        public facetQueryController: Controllers.FacetQueryController;
        public keepDisplayedValuesNextTime: boolean;
        public values: FacetValues;
        public numberOfValues: number;
        public firstQuery: boolean;
        public facetSearch: FacetSearch;
        public facetSettings: FacetSettings;
        public facetValuesList: FacetValuesList;
        public _omniBoxZIndex: any;
        public _moreElement: JQuery;
        public _lessElement: JQuery;
        private valueContainer;
        private settingsPopup;
        private headerElement;
        private operatorElement;
        public _eraserElement: JQuery;
        private collapseElement;
        private excludeElement;
        private footerElement;
        private canFetchMore;
        private nbAvailableValues;
        private showingWaitAnimation;
        private pinnedViewportPosition;
        private pinnedTopSpace;
        private pinnedBottomSpace;
        private componentStateId;
        private includedAttributeId;
        private excludedAttributeId;
        private operatorAttributeId;
        private lookupValueAttributeId;
        private listenToQueryStateChange;
        constructor(element: HTMLElement, options: FacetOptions, bindings?: ComponentBindings, facetClassId?: string);
        public createDom(): void;
        public selectValue(value: FacetValue): void;
        public selectValue(value: string): void;
        public selectMultipleValues(values: FacetValue[]): void;
        public selectMultipleValues(values: string[]): void;
        public deselectValue(value: FacetValue): void;
        public deselectValue(value: string): void;
        public deselectMultipleValues(values: FacetValue[]): void;
        public deselectMultipleValues(values: string[]): void;
        public excludeValue(value: FacetValue): void;
        public excludeValue(value: string): void;
        public excludeMultipleValues(values: FacetValue[]): void;
        public excludeMultipleValues(values: string[]): void;
        public unexcludeValue(value: FacetValue): void;
        public unexcludeValue(value: string): void;
        public unexcludeMultipleValues(values: FacetValue[]): void;
        public unexcludeMultipleValues(values: string[]): void;
        public toggleSelectValue(value: FacetValue): void;
        public toggleSelectValue(value: string): void;
        public toggleExcludeValue(value: FacetValue): void;
        public toggleExcludeValue(value: string): void;
        public getDisplayedValues(): string[];
        public getSelectedValues(): string[];
        public getExcludedValues(): string[];
        public reset(): void;
        public switchToAnd(): void;
        public getEndpoint(): Rest.SearchEndpointInterface;
        public switchToOr(): void;
        public updateSort(criteria: string): void;
        public collapseFacet(): void;
        public expandFacet(): void;
        public unfadeInactiveValuesInMainList(): void;
        public fadeInactiveValuesInMainList(delay: number): void;
        public showWaitingAnimation(): void;
        public hideWaitingAnimation(): void;
        public processFacetSearchAllResultsSelected(facetValues: FacetValue[]): void;
        public pinFacetPosition(): void;
        public getValueCaption(facetValue: Rest.FieldValue): string;
        public getValueCaption(facetValue: FacetValue): string;
        public enable(): void;
        public disable(): void;
        public triggerNewQuery(beforeExecuteQuery: () => void): void;
        public _checkForComputedFieldAndSort(): void;
        public _checkForValueCaptionType(): void;
        public _checkForAllowedValuesOption(): void;
        public _checkForCustomSort(): void;
        public _initQueryEvents(): void;
        public _initQueryStateEvents(): void;
        public _initComponentStateEvents(): void;
        public _initOmniBoxEvents(): void;
        public _initBreadCrumbEvents(): void;
        public _initBottomAndTopSpacer(): void;
        public _initFacetQueryController(): void;
        public _initFacetValuesList(): void;
        public _initFacetSearch(): void;
        public _updateIncludedQueryStateModel(): void;
        public _facetValueHasChanged(): void;
        public _updateExcludedQueryStateModel(): void;
        public _updateOperatorQueryStateModel(): void;
        public _updateLookupValueQueryStateModel(): void;
        public _handleQueryStateChangedOperator(operator: string): void;
        public _handleQueryStateChangedIncluded(includedChanged: any): void;
        public _handleQueryStateChangedExcluded(excludedChanged: any): void;
        public _handleLookupvalueChanged(lookupFieldChanged: {
            [value: string]: string;
        }): void;
        public _handleQueryStateChanged(e: JQueryEventObject, data: Models.AttributesChangedEventArg): void;
        public _handlePopulateOmnibox(e: JQueryEventObject, data: Events.PopulateOmniBoxEventArgs): void;
        public _handleOmniBoxWithStaticValue(eventArg: Events.PopulateOmniBoxEventArgs): void;
        public _handleOmniBoxWithSearchInFacet(eventArg: Events.PopulateOmniBoxEventArgs): void;
        public _handleDuringQuery(): void;
        public _handleBuildingQuery(e: JQueryEventObject, data: Events.BuildingQueryEventArgs): void;
        public _handleDoneBuildingQuery(e: JQueryEventObject, data: Events.DoneBuildingQueryEventArgs): void;
        public _handleDeferredQuerySuccess(e: JQueryEventObject, data: Events.QuerySuccessEventArgs): void;
        public _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        public _handleClearBreadcrumb(e: JQueryEventObject, args: Events.ClearBreadcrumbEventArgs): void;
        public _processNewGroupByResults(groupByResult: Rest.GroupByResult): void;
        public _updateValues(facetValues: FacetValues): void;
        public _ensureFacetValueIsInList(facetValue: FacetValue): void;
        public _isAnyValueCurrentlyDisplayed(): boolean;
        public _handleOperatorClick(): void;
        public _handleEraserClick(): void;
        public _updateQueryStateModel(): void;
        public _buildFacetContent(): void;
        public _buildHeader(): JQuery;
        public _buildIcon(): JQuery;
        public _buildWaitAnimation(): JQuery;
        public _buildCollapse(): JQuery;
        public _buildExpand(): JQuery;
        public _buildTitle(): JQuery;
        public _buildOperatorToggle(): JQuery;
        public _buildSettingsButtons(): JQuery;
        public _rebuildOperatorToggle(): void;
        public _buildEraser(): JQuery;
        public _updateNumberOfValues(): void;
        public _rebuildValueElements(): void;
        public _updateMoreLess(): void;
        public _buildFooter(): JQuery;
        public _buildMore(): JQuery;
        public _handleClickMore(): void;
        public _triggerMoreQuery(): void;
        public _triggerUpdateDeltaQuery(facetValues: FacetValue[]): void;
        public _buildLess(): JQuery;
        public _handleClickLess(): void;
        public _unpinFacetPosition(): void;
        public _isFacetPinned(): boolean;
        public _ensurePinnedFacetHasntMoved(): void;
        public _updateAppearanceDependingOnState(): void;
    }
}
declare module Coveo.Ui {
    interface FacetRangeOptions extends FacetOptions {
        ranges?: Rest.RangeValue[];
        dateField?: boolean;
        slider?: SliderOptions;
    }
    class FacetRange extends Facet {
        public element: HTMLElement;
        static ID: string;
        public options: FacetRangeOptions;
        public startOfSlider: number;
        public endOfSlider: number;
        public initialStartOfSlider: number;
        public initialEndOfSlider: number;
        public facetQueryController: Controllers.FacetRangeQueryController;
        private generatedRanges;
        private slider;
        private rangeQueryStateAttribute;
        private isEmpty;
        constructor(element: HTMLElement, options: FacetRangeOptions, bindings?: ComponentBindings);
        public reset(): void;
        public getSelectedValues(): string[];
        public getValueCaption(facetValue: any): string;
        public _initFacetValuesList(): void;
        public _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        public getSliderBoundaryForQuery(): any[];
        private handleNoresults();
        private sliderIsActive();
        private buildBreadcrumbFacetSlider();
        private initSlider();
        public _initQueryStateEvents(): void;
        private handleRangeQueryStateChanged(e, args);
        private buildSlider();
        public _initFacetQueryController(): void;
        public _handleBuildingQuery(e: JQueryEventObject, data: Events.BuildingQueryEventArgs): void;
        public _processNewGroupByResults(groupByResult: Rest.GroupByResult): void;
        public _handleDeferredQuerySuccess(e: JQueryEventObject, data: Events.QuerySuccessEventArgs): void;
        public _facetValueShouldBeRemoved(facetValue: FacetValue): boolean;
        public _rebuildValueElements(): void;
        private handleEndSlide(e, args);
        private handleDuringSlide(e, args);
        private handleGraphValueSelected(e, args);
        private updateQueryState(values?, silent?);
        private updateFacetStyle();
        private renderToSliderGraph(data);
        public _updateAppearanceDependingOnState(): void;
        private generateBoundary();
        private generateBoundaryFromSlider();
        private generateBoundaryFromState();
        private setupSliderIfNeeded(data);
        private verifySetup();
        private setupSliderStateVariables();
        private alreadySetBoundary();
        private trySetSliderBoundaryFromOptions();
        private trySetSliderBoundaryFromState();
        private trySetSliderBoundaryFromQueryResult(data);
        private setupInitialSliderStateStart(value);
        private setupInitialSliderStateEnd(value);
    }
}
declare module Coveo.Ui {
    interface HierarchicalFacetOptions extends FacetOptions {
        delimitingCharacter?: string;
        levelStart?: number;
        levelEnd?: number;
        marginByLevel?: number;
    }
    class DefaultHierarchicalFacetOptions extends DefaultFacetOptions implements HierarchicalFacetOptions {
        public delimitingCharacter: string;
        public levelStart: number;
        public levelEnd: number;
        public marginByLevel: number;
        constructor(element: HTMLElement);
    }
    interface ValueHierarchy {
        childs?: ValueHierarchy[];
        parent?: ValueHierarchy;
        originalPosition?: number;
        facetValue: FacetValue;
        level: number;
        keepOpened: boolean;
        hasChildSelected: boolean;
    }
    class HierarchicalFacet extends Facet {
        public element: HTMLElement;
        public bindings: ComponentBindings;
        static ID: string;
        public options: HierarchicalFacetOptions;
        public facetValuesList: HierarchicalFacetValuesList;
        public numberOfValuesToShow: number;
        public facetQueryController: Controllers.HierarchicalFacetQueryController;
        private flatHierarchy;
        private valueHierarchy;
        private originalPosition;
        private firstPlacement;
        private originalNumberOfValuesToShow;
        private topLevelHierarchy;
        constructor(element: HTMLElement, options: HierarchicalFacetOptions, bindings: ComponentBindings);
        public selectValue(value: FacetValue): void;
        public selectValue(value: string): void;
        public selectMultipleValues(values: FacetValue[]): void;
        public selectMultipleValues(values: string[]): void;
        public deselectValue(value: FacetValue): void;
        public deselectValue(value: string): void;
        public excludeValue(value: FacetValue): void;
        public excludeValue(value: string): void;
        public unexcludeValue(value: FacetValue): void;
        public unexcludeValue(value: string): void;
        public deselectMultipleValues(values: FacetValue[]): void;
        public deselectMultipleValues(values: string[]): void;
        public toggleSelectValue(value: FacetValue): void;
        public toggleSelectValue(value: string): void;
        public toggleExcludeValue(value: FacetValue): void;
        public toggleExcludeValue(value: string): void;
        public getValueCaption(facetValue: Rest.FieldValue): string;
        public getValueCaption(facetValue: FacetValue): string;
        public getDisplayedValues(): string[];
        public updateSort(criteria: string): void;
        public open(value: FacetValue): any;
        public open(value: ValueHierarchy): any;
        public close(value: FacetValue): any;
        public close(value: ValueHierarchy): any;
        public getLevel(value: FacetValue): number;
        public reset(): void;
        public _isAnyValueCurrentlyDisplayed(): boolean;
        public _initFacetSearch(): void;
        public _handlePopulateBreadcrumb(e: JQueryEventObject, args: Events.PopulateBreadcrumbEventArgs): void;
        public _handleOmniBoxWithStaticValue(eventArg: Events.PopulateOmniBoxEventArgs): void;
        public _rebuildValueElements(): void;
        public _initFacetValuesList(): void;
        public _updateMoreLess(): void;
        public _handleClickMore(): void;
        public _handleClickLess(): void;
        private setValueListContent();
        private ensureValueHierarchyExists(facetValues);
        private crop();
        private placeChildsUnderTheirParent(hierarchy, hierarchyElement);
        private addCssClassToParentAndChilds(hierarchy, hierarchyElement);
        private buildParentChildRelationship();
        private setOriginalPosition();
        private createValueHierarchy(facetValues?);
        private setInHierarchy(flatHierarchy);
        private getParent(value);
        private getSelf(value);
        private showFacetValue(value);
        private hideFacetValue(value);
        private hideChilds(children);
        private showChilds(children);
        private hideParent(parent);
        private showParent(parent);
        private selectChilds(parent, children);
        private deselectChilds(parent, children);
        private excludeChilds(children);
        private unexcludeChilds(children);
        private selectParent(parent);
        private deselectParent(parent);
        private flagParentForSelection(valueHierarchy);
        private unflagParentForSelection(valueHierarchy);
    }
}
declare module Coveo.Ui {
    interface DidYouMeanOptions {
    }
    class DefaultDidYouMeanOptions extends ComponentOptions implements DidYouMeanOptions {
        constructor(element: HTMLElement);
    }
    class DidYouMean extends Component {
        public element: HTMLElement;
        public options: DidYouMeanOptions;
        public bindings: ComponentBindings;
        static ID: string;
        private hideNext;
        constructor(element: HTMLElement, options?: DidYouMeanOptions, bindings?: ComponentBindings);
        private handleNewQuery();
        private handlePrepareQueryBuilder(e, data);
        private handleNoResults(e, data);
        private handleProcessNewQueryResults(e, data);
        private buildCorrectedSentence(correction);
        private doQueryWithCorrectedTerm(correctedTerm);
    }
}
declare module Coveo.Ui {
    interface CurrentTabOptions {
        tabSectionToOpen: string;
    }
    class DefaultCurrentTabOptions extends ComponentOptions implements CurrentTabOptions {
        public tabSectionToOpen: string;
        constructor(element: HTMLElement);
    }
    class CurrentTab extends Component {
        public element: HTMLElement;
        public options: CurrentTabOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: CurrentTabOptions, bindings?: ComponentBindings);
        private handleTabChange();
    }
}
declare module Coveo.Ui {
    interface BreadcrumbItem {
        element: HTMLElement;
    }
    interface BreadcrumbOptions {
    }
    class DefaultBreadcrumbOptions extends ComponentOptions implements BreadcrumbOptions {
        constructor(element: HTMLElement);
    }
    class Breadcrumb extends Component {
        public element: HTMLElement;
        public options: BreadcrumbOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: BreadcrumbOptions, bindings?: ComponentBindings);
        private handleQuerySuccess();
        private getBreadcrumbs();
        private clearBreadcrumbs();
    }
}
declare module Coveo.Ui {
    interface HiddenQueryOptions {
    }
    class DefaultHiddenQueryOptions extends ComponentOptions implements HiddenQueryOptions {
        constructor(element: HTMLElement);
    }
    class HiddenQuery extends Component {
        public element: HTMLElement;
        public options: HiddenQueryOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: HiddenQueryOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handleUpdateUi(e, data);
        private updatePanel(descriptionHtml);
        private clearHiddenQuery();
    }
}
declare module Coveo.Ui {
    interface QueryDurationOptions {
    }
    class DefaultQueryDurationOptions extends ComponentOptions implements QueryDurationOptions {
        constructor(element: HTMLElement);
    }
    class QueryDuration extends Component {
        public element: HTMLElement;
        public options: QueryDurationOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: QueryDurationOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
        private formatQueryDuration(durationInMillis);
    }
}
declare module Coveo.Ui {
    interface QuerySummaryOptions {
    }
    class DefaultQuerySummaryOptions extends ComponentOptions implements QuerySummaryOptions {
        constructor(element: HTMLElement);
    }
    class QuerySummary extends Component {
        public element: HTMLElement;
        public options: QuerySummaryOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: QuerySummaryOptions, bindings?: ComponentBindings);
        private handleQuerySuccess(e, data);
    }
}
declare module Coveo.Ui {
    interface ErrorReportOptions {
        popUp: boolean;
        showDetailedError: boolean;
    }
    class DefaultErrorReportOptions extends ComponentOptions implements ErrorReportOptions {
        public popUp: boolean;
        public showDetailedError: boolean;
        constructor(element: HTMLElement);
    }
    class ErrorReport extends Component {
        public element: HTMLElement;
        public options: ErrorReportOptions;
        static ID: string;
        private message;
        private closePopup;
        constructor(element: HTMLElement, options?: ErrorReportOptions, bindings?: ComponentBindings);
        private setErrorTitle();
        private buildPrevious();
        private buildClear();
        private buildRetry();
        private handleNewQuery();
        private handleQueryError(e, data);
    }
}
declare module Coveo.Ui {
    interface FieldValueOptions {
        field?: string;
        facet?: string;
        htmlValue?: boolean;
        helper?: string;
        helperOptions?: string;
        splitValues?: boolean;
    }
    class DefaultFieldValueOptions extends ComponentOptions implements FieldValueOptions {
        public field: string;
        public facet: string;
        public htmlValue: boolean;
        public helper: string;
        public helperOptions: string;
        public splitValues: boolean;
        constructor(element: HTMLElement);
    }
    class FieldValue extends Component {
        public element: HTMLElement;
        public options: FieldValueOptions;
        public result: Rest.QueryResult;
        static ID: string;
        private evaluatedHelperOptions;
        constructor(element: HTMLElement, options?: FieldValueOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private getHelperOptions();
        private renderOneValue(value);
        private bindEventOnValue(element, value);
    }
}
declare module Coveo.Ui {
}
declare module Coveo.Ui {
    interface PrintableUriOptions {
    }
    class PrintableUri extends Component {
        public element: HTMLElement;
        public options: PrintableUriOptions;
        public result: Rest.QueryResult;
        static ID: string;
        private uri;
        constructor(element: HTMLElement, options: PrintableUriOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        public renderParentsXml(element: HTMLElement, parentsXml: string): void;
        public renderUri(element: HTMLElement, result?: Rest.QueryResult): void;
        public buildSeperator(): HTMLSpanElement;
        public buildEllipsis(): HTMLSpanElement;
        public buildHtmlToken(name: string, uri: string): HTMLAnchorElement;
    }
}
declare module Coveo.Ui {
    interface SettingsOptions {
        includeInMenu: string[];
        menuDelay: number;
    }
    class DefaultSettingsOptions extends ComponentOptions implements SettingsOptions {
        public includeInMenu: string[];
        public menuDelay: number;
        constructor(element: HTMLElement);
    }
    class Settings extends Component {
        public element: HTMLElement;
        public options: SettingsOptions;
        static ID: string;
        private menu;
        private settingsButton;
        constructor(element: HTMLElement, options: SettingsOptions, bindings?: ComponentBindings);
        public init(): void;
        private buildMenu();
        private buildSection(menuData);
        private buildLine(text, onOpen, otherMenu, otherMenuItems);
        private toggleMenu();
        private getPopupPositioning();
    }
}
declare module Coveo.Ui {
    interface ShareQueryOptions {
    }
    class DefaultShareQueryOptions extends ComponentOptions implements ShareQueryOptions {
        constructor(element: HTMLElement);
    }
    class ShareQuery extends Component implements Menu {
        public element: HTMLElement;
        public options: ShareQueryOptions;
        static ID: string;
        public dialogBoxContent: JQuery;
        private openCloseLink;
        private linkToThisQuery;
        private completeQuery;
        constructor(element: HTMLElement, options: ShareQueryOptions, bindings?: ComponentBindings);
        public open(): void;
        public close(): void;
        public getCssClass(): string;
        public getMenuItems(): MenuItem[];
        private handleProcessNewQueryResults(e, data);
        private outputIfNotNull(value);
        private buildContent();
        private buildTextBoxWithLabel(label, input);
        static create(element: HTMLElement, options?: ShareQueryOptions, root?: HTMLElement): ShareQuery;
    }
}
declare module Coveo.Ui {
    interface ToggleButtonOptions {
        classToToggle: string;
        target: string;
        activateGlass?: boolean;
    }
    class DefaultToggleButtonOptions extends ComponentOptions implements ToggleButtonOptions {
        public classToToggle: string;
        public target: string;
        public activateGlass: boolean;
        constructor(element: HTMLElement);
    }
    class ToggleButton extends Component {
        public element: HTMLElement;
        public options: ToggleButtonOptions;
        static ID: string;
        private classToToggle;
        private target;
        private activateGlass;
        constructor(element: HTMLElement, options?: ToggleButtonOptions, bindings?: ComponentBindings);
        private handleClick();
        private handleTabChanged();
        private addToggleClass();
        private removeToggleClass();
        private getGlass();
        private buildGlass();
    }
}
declare module Coveo.Ui {
    interface Menu extends Component {
        getCssClass: () => string;
        getMenuItems: () => MenuItem[];
    }
    interface MenuItem {
        text: string;
        onOpen: () => void;
        onClose: () => void;
    }
}
declare module Coveo.Ui {
    interface FoldingOptions {
        field?: string;
        childField?: string;
        parentField?: string;
        range?: number;
        rearrange?: SortCriteria;
        enableExpand?: boolean;
        expandExpression?: string;
        maximumExpandedResults?: number;
        expandFoldingField?: string;
        onBuildingMoreQuery?: (queryBuilder: QueryBuilder) => void;
        /**
        * Manage folding for each results individually
        */
        getResult?: (result: Rest.QueryResult) => Rest.QueryResult;
        /**
        * Manage folding of all more results
        */
        getMoreResults?: (results: Rest.QueryResult[]) => Rest.QueryResult[];
    }
    class DefaultFoldingOptions extends ComponentOptions implements FoldingOptions {
        public field: string;
        public childField: string;
        public parentField: string;
        public range: number;
        public rearrange: SortCriteria;
        public enableExpand: boolean;
        public expandExpression: string;
        public maximumExpandedResults: number;
        public expandFoldingField: string;
        constructor(element: HTMLElement);
    }
    class Folding extends Component {
        public element: HTMLElement;
        public options: FoldingOptions;
        static ID: string;
        /**
        * Convert ResultNode to QueryResult
        */
        private static resultNodeToQueryResult(resultNode);
        /**
        * Find the node in trees
        */
        private static findUniqueId(resultNodes, uniqueId);
        /**
        * From a list of results, return a list of results and their attachments
        * We use parentResult to build a tree of result
        */
        static foldWithParent(queryResults: Rest.QueryResult[]): Rest.QueryResult[];
        /**
        * 99.9% of the folding case will be alright with those default functions.
        * Otherwise use the options getResult and getMoreResults
        */
        static defaultGetResult(result: Rest.QueryResult): Rest.QueryResult;
        static defaultGetMoreResults(results: Rest.QueryResult[]): Rest.QueryResult[];
        constructor(element: HTMLElement, options: FoldingOptions, bindings?: ComponentBindings);
        private handleBuildingQuery(e, data);
        private handlepreprocessResults(e, data);
        private addLoadMoreHandler(results, originalQuery);
        private moreResults(result, originalQuery);
        private handlePreprocessMoreResults(queryResults);
    }
}
declare module Coveo.Ui {
    interface ResultFoldingOptions {
        resultTemplate: Template;
        normalCaption: string;
        expandedCaption: string;
        moreCaption: string;
        lessCaption: string;
        oneResultCaption: string;
    }
    class DefaultResultFoldingOptions extends ComponentOptions implements ResultFoldingOptions {
        public resultTemplate: Template;
        public normalCaption: string;
        public expandedCaption: string;
        public moreCaption: string;
        public lessCaption: string;
        public oneResultCaption: string;
        constructor(element: HTMLElement);
    }
    class ResultFolding extends Component {
        public element: HTMLElement;
        public options: ResultFoldingOptions;
        public result: Rest.QueryResult;
        static ID: string;
        private normalCaption;
        private expandedCaption;
        private onlyOneMessageCaption;
        private results;
        private showMore;
        private showLess;
        private waitAnimation;
        private moreResultsDeferred;
        private showingMoreResults;
        constructor(element: HTMLElement, options?: ResultFoldingOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        public showMoreResults(): void;
        public showLessResults(): void;
        private buildElements();
        private buildHeader();
        private buildResults();
        private buildFooter();
        private updateElementVisibility(subResultsLength?);
        private scrollToResultElement();
        private displayThoseResults(results);
        private renderChildResult(childResult);
        private autoCreateComponentsInsideResult(element, result);
        private cancelAnyPendingShowMore();
    }
}
declare module Coveo.Ui {
    interface DebugOptions {
    }
    class Debug extends Component {
        public element: HTMLElement;
        public options: DebugOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: DebugOptions, bindings?: ComponentBindings);
        private handleNewResultsDisplayed();
        private handleResultDoubleClick(e);
        private buildResultInfo(result);
        private buildPropertyTable(result);
        private buildFieldTable(result);
        private buildRankingInfo(result);
        private formatValue(value);
    }
}
declare module Coveo.Ui {
    interface TabGroupMenuOptions {
        menuDelay?: number;
    }
    class DefaultTabGroupMenuOptions extends ComponentOptions implements TabGroupMenuOptions {
        public menuDelay: number;
        constructor(element: HTMLElement);
    }
    class TabGroupMenu extends Component {
        public options: TabGroupMenuOptions;
        static ID: string;
        private menuItems;
        private activeMenuItem;
        private menuItemsContainer;
        private activeMenuItemDisplay;
        private menuIsOpen;
        private menuItemsContainerTemplate;
        private activeMenuItemTemplate;
        private activeMenuItemIconTemplate;
        private activeMenuItemCaptionTemplate;
        constructor(element: HTMLElement, options?: TabGroupMenuOptions, bindings?: ComponentBindings);
        public open(): void;
        public close(): void;
        private handleClick(e);
        private handleClickOnMenuItem(e);
        private handleClickOnMenu();
        private handleMouseLeave(e);
        private handleAfterInitialization();
        private handleQueryStateChange(e, args);
        private initMenuItems();
        private initQueryStateEvents();
        private initMiscEvents();
        private renderDisplayActiveMenuItem();
        private renderMenu();
        private selectMenuItem(menuItem);
        private getItemInMenuById(id);
        private getItemInMenuByElement(element);
        private getInactiveMenuItems();
        private getItemMenuClass();
        private getCorrectTarget(e);
        private targetIsAMenuItem(e);
    }
}
declare module Coveo.Ui {
    interface TabGroupOptions {
        id?: string;
        icon?: string;
        expression?: string;
    }
    class DefaultTabGroupOptions extends ComponentOptions implements TabGroupOptions {
        public id: string;
        public icon: string;
        public expression: string;
        constructor(element: HTMLElement);
    }
    class TabGroup extends Component {
        public options: TabGroupOptions;
        static ID: string;
        private title;
        private isSelected;
        private iconTemplate;
        constructor(element: HTMLElement, options?: TabGroupOptions, bindings?: ComponentBindings);
        public select(): void;
        public getTitle(): string;
        public getIcon(): string;
        public getId(): string;
        private actionOnSelect();
        private actionOnUnSelect();
        private updateQueryStateModel();
        private initQueryEvents();
        private initQueryStateEvents();
        private handleBuildingQueryEvents(e, args, foo);
        private handleQueryStateChange(e, args);
        private hideTabsNotInThisGroup();
        private getAllVisibleTab();
        private getAllTabs();
        public isElementIncludedInTabGroup(element: HTMLElement): boolean;
    }
}
declare module Coveo.Ui {
    interface AnalyticsOptions {
        searchHub?: string;
        user?: string;
        endpoint?: string;
        token?: string;
        sendToCloud?: boolean;
    }
    class DefaultAnalyticsOptions extends ComponentOptions implements AnalyticsOptions {
        public user: string;
        public endpoint: string;
        public token: string;
        public searchHub: string;
        public sendToCloud: boolean;
        constructor(element: HTMLElement);
        private static getDefaultToken();
    }
    class Analytics extends Component {
        public element: HTMLElement;
        public options: AnalyticsOptions;
        static ID: string;
        public client: AnalyticsClient;
        constructor(element: HTMLElement, options?: AnalyticsOptions, bindings?: ComponentBindings);
        private initializeAnalyticsClient();
    }
}
declare module Coveo.Ui {
    interface AnalyticsActionCause {
        name: string;
        type: string;
        metaMap?: {
            [name: string]: number;
        };
    }
    interface AnalyticsNoMeta {
    }
    interface AnalyticsInterfaceChange {
        interfaceChangeTo: string;
    }
    interface AnalyticsContextRemoveMeta {
        contextName: string;
    }
    interface AnalyticsResultsSortMeta {
        resultsSortBy: string;
    }
    interface AnalyticsDocumentViewMeta {
        documentTitle: string;
        documentURL: string;
    }
    interface AnalyticsFacetMeta {
        facetId: string;
        facetValue?: string;
    }
    interface AnalyticsFacetSortValuesMeta extends AnalyticsFacetMeta {
        facetSortBy: string;
    }
    interface AnalyticsFacetSliderChangeMeta {
        facetId: string;
        facetRangeStart: any;
        facetRangeEnd: any;
    }
    interface AnalyticsFacetGraphSelectedMeta extends AnalyticsFacetSliderChangeMeta {
    }
    interface AnalyticsFacetOperatorMeta extends AnalyticsFacetMeta {
        facetOperatorBefore: string;
        facetOperatorAfter: string;
    }
    interface AnalyticsPreferencesChangeMeta {
        preferenceName: string;
        preferenceType: string;
    }
    interface AnalyticsCustomFiltersChangeMeta {
        customFilterName: string;
        customFilterType: string;
        customFilterExpression: string;
    }
    interface AnalyticsCaseAttachMeta {
        resultUriHash: string;
        articleID: string;
        caseID: string;
    }
    interface AnalyticsCaseContextAddMeta {
        caseID: string;
    }
    interface AnalyticsCaseContextRemoveMeta {
        caseID: string;
    }
    interface AnalyticsCaseDetachMeta extends AnalyticsCaseAttachMeta {
    }
    var AnalyticsActionCauseList: {
        interfaceLoad: AnalyticsActionCause;
        interfaceChange: AnalyticsActionCause;
        contextRemove: AnalyticsActionCause;
        didyoumeanAutomatic: AnalyticsActionCause;
        didyoumeanClick: AnalyticsActionCause;
        resultsSort: AnalyticsActionCause;
        searchboxSubmit: AnalyticsActionCause;
        searchboxClear: AnalyticsActionCause;
        searchboxAsYouType: AnalyticsActionCause;
        breadcrumbFacet: AnalyticsActionCause;
        breadcrumbResetAll: AnalyticsActionCause;
        documentTag: AnalyticsActionCause;
        documentField: AnalyticsActionCause;
        documentQuickView: AnalyticsActionCause;
        documentOpen: AnalyticsActionCause;
        omniboxSearch: AnalyticsActionCause;
        omniboxFacet: AnalyticsActionCause;
        omniboxAnalytics: AnalyticsActionCause;
        omniboxField: AnalyticsActionCause;
        facetClearAll: AnalyticsActionCause;
        facetSearch: AnalyticsActionCause;
        facetToggle: AnalyticsActionCause;
        facetRangeSlider: AnalyticsActionCause;
        facetRangeGraph: AnalyticsActionCause;
        facetSelect: AnalyticsActionCause;
        facetSelectAll: AnalyticsActionCause;
        facetDeselect: AnalyticsActionCause;
        facetExclude: AnalyticsActionCause;
        facetUnexclude: AnalyticsActionCause;
        facetSortValues: AnalyticsActionCause;
        errorBack: AnalyticsActionCause;
        errorClearQuery: AnalyticsActionCause;
        errorRetry: AnalyticsActionCause;
        expandToFullUI: AnalyticsActionCause;
        caseCreate: AnalyticsActionCause;
        casecontextAdd: AnalyticsActionCause;
        casecontextRemove: AnalyticsActionCause;
        preferencesChange: AnalyticsActionCause;
        caseAttach: AnalyticsActionCause;
        caseDetach: AnalyticsActionCause;
        customfiltersChange: AnalyticsActionCause;
    };
}
declare module Coveo.Ui {
    interface TopFieldSuggestionsOptions {
        field?: string;
        queryOverride?: string;
        omniboxSuggestionOptions?: SuggestionForOmniBoxOptions;
    }
    class DefaultTopFieldSuggestionsOptions extends ComponentOptions implements TopFieldSuggestionsOptions {
        public field: string;
        public queryOverride: string;
        public omniboxSuggestionOptions: SuggestionForOmniBoxOptions;
        constructor(element: HTMLElement);
    }
    class TopFieldSuggestions extends Component {
        public options: TopFieldSuggestionsOptions;
        static ID: string;
        private suggestionForOmniBox;
        private topFieldElementHeaderTemplate;
        private topFieldElementRowTemplate;
        constructor(element: HTMLElement, options: TopFieldSuggestionsOptions, bindings?: ComponentBindings);
        private handlePopulateOmniBox(e, args);
        private resolveWithUndefined(deferred);
        private onRowSelection(value, args);
        private buildListFieldValueRequest(valueToSearch);
    }
}
declare module Coveo.Ui {
    interface TopAnalyticsSuggestionsOptions {
        omniboxSuggestionOptions?: SuggestionForOmniBoxOptions;
    }
    class DefaultTopAnalyticsSuggestionsOptions extends ComponentOptions implements TopAnalyticsSuggestionsOptions {
        public omniboxSuggestionOptions: SuggestionForOmniBoxOptions;
        constructor(element: HTMLElement, defaultSuggestionOptions: SuggestionForOmniBoxOptions);
    }
    class TopAnalyticsSuggestions extends Component {
        public options: TopAnalyticsSuggestionsOptions;
        static ID: string;
        private suggestionForOmniBox;
        private topAnalyticsElementHeaderTemplate;
        private topAnalyticsElementRowTemplate;
        constructor(element: HTMLElement, options: TopAnalyticsSuggestionsOptions, bindings?: ComponentBindings);
        private handlePopulateOmnibox(e, args);
        private onRowSelection(value, args);
        private resolveWithUndefined(deferred);
    }
}
declare module Coveo.Ui {
    interface SuggestionForOmniBoxOptions {
        omniBoxZIndex?: number;
        headerTitle?: string;
        onSelect?: (value: string, args: Events.PopulateOmniBoxEventArgs) => void;
        numberOfSuggestions?: number;
    }
    class DefaultSuggestionForOmniBoxOptions extends ComponentOptions implements SuggestionForOmniBoxOptions {
        public omniBoxZIndex: number;
        public headerTitle: string;
        public onSelect: (value: string, omniBoxObject: Events.PopulateOmniBoxEventArgs) => void;
        public numberOfSuggestions: number;
        constructor(element: HTMLElement, defaultOpts: SuggestionForOmniBoxOptions);
    }
    interface SuggestionForOmniBoxTemplate {
        header: {
            template: (...args: any[]) => string;
            title: string;
        };
        row: (...args: any[]) => string;
    }
    interface SuggestionForOmniBoxResult {
        value: string;
    }
    class SuggestionForOmniBox {
        public structure: SuggestionForOmniBoxTemplate;
        public onSelect: (value: string, args: Events.PopulateOmniBoxEventArgs) => void;
        constructor(structure: SuggestionForOmniBoxTemplate, onSelect: (value: string, args: Events.PopulateOmniBoxEventArgs) => void);
        public buildOmniBoxElement(results: SuggestionForOmniBoxResult[], args: Events.PopulateOmniBoxEventArgs): JQuery;
        private buildElementHeader();
        private buildRowElements(results, args);
    }
}
declare module Coveo.Ui {
    interface LoginOptions {
        id?: string;
        caption?: string;
        autoTriggerQuery?: boolean;
    }
    class DefaultLoginOptions extends ComponentOptions implements LoginOptions {
        public id: string;
        public caption: string;
        public autoTriggerQuery: boolean;
        constructor(element: HTMLElement);
    }
    class Login extends Component {
        public element: HTMLElement;
        public options: LoginOptions;
        static ID: string;
        private settingButton;
        private loginFormContainer;
        private loadingAnimation;
        private loginInfo;
        private loginForm;
        private loginUser;
        private loginPassword;
        private loginSubmit;
        private errorMessage;
        private isHidden;
        private settingButtonTemplate;
        private loginInfoTemplate;
        private loginFormTemplate;
        private userInputTemplate;
        private passwordInputTemplate;
        private formSubmitTemplate;
        private loginFormContainerTemplate;
        private errorMessageTemplate;
        constructor(element: HTMLElement, options?: LoginOptions, bindings?: ComponentBindings);
        public getUser(): any;
        public setUser(user: string): void;
        public getPassword(): any;
        public setPassword(password: string): void;
        public createDom(): void;
        private handleQueryError(e, args);
        private isAccessDeniedError(error);
        private handleBackButton();
        private validateCredentials();
        private getBasicAuthBase64();
        private buildLoginForm();
        private handleInputKeypress(e);
        private getOrCreateLoginFormContainer();
        private showLoginPanel();
        private hideLoginPanel();
        private buildLoginButton();
        private handleLoginFormSubmit(e);
        private updateEndpointWithCredentials();
        private setLoginInfoMessage(html);
        private getLocalStorageKeyUser();
        private getLocalStorageKeyPassword();
    }
}
declare module Coveo.Ui {
    interface ResultAttachmentsOptions {
        resultTemplate?: Template;
        subResultTemplate?: Template;
        maximumAttachmentLevel?: number;
    }
    class DefaultResultAttachmentsOptions extends ComponentOptions implements ResultAttachmentsOptions {
        public resultTemplate: Template;
        public subResultTemplate: Template;
        public maximumAttachmentLevel: number;
        constructor(element: HTMLElement);
    }
    class ResultAttachments extends Component {
        public element: HTMLElement;
        public options: ResultAttachmentsOptions;
        public bindings: ComponentBindings;
        public attachmentLevel: number;
        static ID: string;
        private attachments;
        constructor(element: HTMLElement, options?: ResultAttachmentsOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, attachmentLevel?: number);
        private renderAttachments();
        private attachmentHasSubAttachment(attachment);
        private autoCreateComponentsInsideResult(element, result);
    }
}
declare module Coveo.Ui {
    interface AnalyticsCustomData {
        [key: string]: string;
    }
    interface AnalyticsClient {
        isContextual: boolean;
        isActivated(): boolean;
        getCurrentEventCause(): string;
        getCurrentEventMeta(): {
            [key: string]: any;
        };
        logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result: Rest.QueryResult, element: HTMLElement): void;
        logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        sendAllPendingEvents(): void;
    }
}
declare module Coveo.Ui {
    class PendingSearchEvent {
        public _root: HTMLElement;
        public _endpoint: Rest.AnalyticsEndpoint;
        public _templateSearchEvent: Rest.SearchEvent;
        public _sendToCloud: boolean;
        private handler;
        private newQueryHandler;
        private searchDeferred;
        private searchEvents;
        private results;
        private armed;
        public _cancelled: boolean;
        public _finished: boolean;
        constructor(_root: HTMLElement, _endpoint: Rest.AnalyticsEndpoint, _templateSearchEvent: Rest.SearchEvent, _sendToCloud: boolean);
        public getEventCause(): string;
        public getEventMeta(): {
            [key: string]: string;
        };
        public cancel(): void;
        public _handleNewQuery(e: JQueryEventObject, args: Events.NewQueryEventArgs): void;
        public _handleDuringQuery(e: JQueryEventObject, args: Events.DuringQueryEventArgs): void;
        public _stopRecording(): void;
        private flush();
        private fillSearchEvent(searchEvent, searchInterface, query, queryResults, queryUid);
        private convertResults(results);
        private convertFacets();
        private getFacetSelector();
        private convertFacetValues(facet);
        private convertClassicFacetValues(facet);
    }
}
declare module Coveo.Ui {
    class PendingSearchAsYouTypeSearchEvent extends PendingSearchEvent {
        public _root: HTMLElement;
        public _endpoint: Rest.AnalyticsEndpoint;
        public _templateSearchEvent: Rest.SearchEvent;
        public _sendToCloud: any;
        public delayBeforeSending: number;
        private beforeUnloadHandler;
        private armBatchDelay;
        private toSendRightNow;
        constructor(_root: HTMLElement, _endpoint: Rest.AnalyticsEndpoint, _templateSearchEvent: Rest.SearchEvent, _sendToCloud: any);
        public _handleDuringQuery(e: JQueryEventObject, args: Events.DuringQueryEventArgs): void;
        public sendRightNow(): void;
        public _stopRecording(): void;
        private onWindowUnload();
        private isCancelledOrFinished();
    }
}
declare module Coveo.Ui {
    class LiveAnalyticsClient implements AnalyticsClient {
        public endpoint: Rest.AnalyticsEndpoint;
        public rootElement: HTMLElement;
        public originLevel1: string;
        public sendToCloud: boolean;
        public isContextual: boolean;
        private language;
        private device;
        private pendingSearchEvent;
        private pendingSearchAsYouTypeSearchEvent;
        constructor(endpoint: Rest.AnalyticsEndpoint, rootElement: HTMLElement, originLevel1: string, sendToCloud: boolean);
        public isActivated(): boolean;
        public getCurrentEventCause(): string;
        public getCurrentEventMeta(): {
            [key: string]: string;
        };
        public logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        public logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta): void;
        public logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result: Rest.QueryResult, element: HTMLElement): void;
        public logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element: HTMLElement): void;
        public getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        public sendAllPendingEvents(): void;
        private pushCustomEvent(actionCause, metaObject, element?);
        private pushSearchEvent(actionCause, metaObject);
        private checkToSendAnyPendingSearchAsYouType(actionCause);
        private pushSearchAsYouTypeEvent(actionCause, metaObject);
        private pushClickEvent(actionCause, metaObject, result, element);
        private buildAnalyticsEvent(actionCause, metaObject);
        private buildSearchEvent(actionCause, metaObject);
        private buildClickEvent(actionCause, metaObject, result, element);
        private buildCustomEvent(actionCause, metaObject, element);
        private buildMetaObject(actionCause, meta);
        private cancelAnyPendingSearchEvent();
        private cancelAnyPendingSearchAsYouTypeEvent();
        private resolveActiveTabFromElement(element);
        private resolveQueryStateModel(rootElement);
        private eventIsNotRelatedToSearchBox(event);
        private triggerChangeAnalyticsCustomData(type, metaObject, event);
        private getChangeableAnalyticsDataObject(event);
        private merge<T extends Rest.AnalyticsEvent>(first, second);
    }
}
declare module Coveo.Ui {
    class MultiAnalyticsClient implements AnalyticsClient {
        private analyticsClients;
        public isContextual: boolean;
        constructor(analyticsClients?: AnalyticsClient[]);
        public isActivated(): boolean;
        public getCurrentEventCause(): string;
        public getCurrentEventMeta(): {
            [key: string]: any;
        };
        public logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        public logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        public logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta, result?: Rest.QueryResult, element?: HTMLElement): void;
        public logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta?: TMeta, element?: HTMLElement): void;
        public getTopQueries(params: Rest.TopQueries): JQueryPromise<string[]>;
        public sendAllPendingEvents(): void;
        private mergeTopQueries(values, pageSize);
    }
}
declare module Coveo.Ui {
    class NoopAnalyticsClient implements AnalyticsClient {
        public isContextual: boolean;
        public isActivated(): boolean;
        public getCurrentEventCause(): string;
        public getCurrentEventMeta(): {
            [key: string]: any;
        };
        public logSearchEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        public logSearchAsYouType<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta): void;
        public logClickEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, result?: Rest.QueryResult, element?: HTMLElement): void;
        public logCustomEvent<TMeta>(actionCause: AnalyticsActionCause, meta: TMeta, element?: HTMLElement): void;
        public getTopQueries(params: Rest.TopQueries): JQueryDeferred<string[]>;
        public sendAllPendingEvents(): void;
    }
}
declare module Coveo.Ui {
    interface SliderGraphData {
        start: any;
        y: number;
        end: any;
        isDate?: boolean;
    }
    interface SliderOptions {
        start?: any;
        end?: any;
        excludeOuterBounds?: boolean;
        steps?: number;
        getSteps?: (start: number, end: number) => number[];
        rangeSlider?: boolean;
        displayAsValue?: {
            unitSign?: string;
            separator?: string;
        };
        displayAsPercent?: {
            separator?: string;
        };
        valueCaption?: (values: number[]) => string;
        percentCaption?: (percent: number[]) => string;
        dateFormat?: string;
        document?: Document;
        graph?: {
            steps?: number;
            animationDuration?: number;
            margin?: {
                top?: number;
                bottom?: number;
                left?: number;
                right?: number;
            };
        };
        dateField?: boolean;
        rounded?: number;
    }
    class Slider {
        public element: JQuery;
        public options: SliderOptions;
        public steps: number[];
        public currentValues: number[];
        private sliderButton;
        private sliderRange;
        private sliderLine;
        private sliderCaption;
        private sliderGraph;
        constructor(element: JQuery, options: SliderOptions);
        public onMoving(): void;
        public initializeState(values?: number[]): void;
        public getPosition(): number[];
        public getPercentPosition(): number[];
        public getValues(): any[];
        public getCaptionFromValue(values: number[]): string;
        public getCaption(): string;
        public setValues(values: number[]): void;
        public drawGraph(data?: SliderGraphData[]): void;
        private displayCaption();
        private buildSteps();
    }
    class SliderButton {
        public slider: Slider;
        private which;
        public leftBoundary: number;
        public rightBoundary: number;
        public element: JQuery;
        private currentPos;
        private startPositionX;
        private isMouseDown;
        private lastElementLeft;
        private origUserSelect;
        private origCursor;
        private origZIndex;
        private eventMouseDown;
        private eventMouseMove;
        private eventMouseUp;
        constructor(slider: Slider, which: number);
        public build(): JQuery;
        public toBeginning(): void;
        public toEnd(): void;
        public setValue(value: number): void;
        public getPosition(): number;
        public getPercent(position?: number): number;
        public getValue(): any;
        public fromValueToPercent(value: number): number;
        public fromPositionToValue(position: number): any;
        public fromValueToPosition(value: number): number;
        private bindEvents();
        private handleStartSlide(e);
        private handleMoving(e);
        private handleEndSlide(e);
        private handleButtonNearEnd();
        private getMousePosition(e);
        private updatePosition(e);
        private snapToStep(spanX);
    }
}
declare module Coveo.Ui {
    interface EmailActionOptions {
        type: string;
        currentUserEmail?: string;
    }
    class DefaultEmailActionOptions extends ComponentOptions implements EmailActionOptions {
        public type: string;
        public currentUserEmail: string;
        constructor(element: HTMLElement);
    }
    class EmailAction extends Component {
        public element: HTMLElement;
        public options: EmailActionOptions;
        private result;
        static ID: string;
        static forward: string;
        static reply: string;
        static replyAll: string;
        private mailTo;
        constructor(element: HTMLElement, options?: EmailActionOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private showWaitingAnimation();
        private hideWaitingAnimation();
        private setMailToFromResult();
        private appendBodyToMailTo(callback);
        private doneRetrieveBody(res, callback);
        private openMailTo();
    }
}
declare module Coveo.Ui {
    interface EmailActionsOptions {
        currentUserEmail?: string;
        reply?: boolean;
        replyAll?: boolean;
        forward?: boolean;
    }
    class DefaultEmailActionsOptions extends ComponentOptions implements EmailActionsOptions {
        public currentUserEmail: string;
        public reply: boolean;
        public replyAll: boolean;
        public forward: boolean;
        constructor(element: HTMLElement);
    }
    class EmailActions extends Component {
        public element: HTMLElement;
        public options: EmailActionsOptions;
        private result;
        static ID: string;
        private reply;
        private replyAll;
        private forward;
        constructor(element: HTMLElement, options: EmailActionsOptions, bindings?: ComponentBindings, result?: Rest.QueryResult);
        private createAndAppendEmailActions();
        private appendWaitingAnimation();
    }
}
declare module Coveo.Ui {
    interface PreferencesPanelOptions {
    }
    class DefaultPreferencesPanelOptions extends ComponentOptions implements PreferencesPanelOptions {
    }
    class PreferencesPanel extends Component implements Menu {
        public element: HTMLElement;
        public options: PreferencesPanelOptions;
        static ID: string;
        constructor(element: HTMLElement, options: PreferencesPanelOptions, bindings?: ComponentBindings);
        public getCssClass(): string;
        public getMenuItems(): {
            text: string;
            onOpen: () => void;
            onClose: () => void;
        }[];
        public open(): void;
        public close(): void;
        public save(): void;
        public closeWithoutSave(): void;
        private buildCloseButton();
        private buildTitle();
    }
}
declare module Coveo.Ui {
    interface PreferencePanelInputToBuild {
        label: string;
        placeholder?: string;
        tab?: string[];
        expression?: string;
        otherAttribute?: string;
    }
    class PreferencesPanelBoxInput {
        private boxInputToBuild;
        private nameOfInput;
        private type;
        public inputs: {
            [label: string]: JQuery;
        };
        private inputTemplate;
        constructor(boxInputToBuild: PreferencePanelInputToBuild[], nameOfInput: string, type: string);
        public build(): JQuery;
        public select(toSelect: string): void;
        public unselect(toUnselect: string): void;
        public getSelected(): any;
        public getSelecteds(): any[];
    }
    class PreferencesPanelRadioInput extends PreferencesPanelBoxInput {
        private radioElementToBuild;
        private name;
        constructor(radioElementToBuild: PreferencePanelInputToBuild[], name: string);
    }
    class PreferencesPanelCheckboxInput extends PreferencesPanelBoxInput {
        private checkboxElementToBuild;
        public name: string;
        constructor(checkboxElementToBuild: PreferencePanelInputToBuild[], name: string);
        public build(): JQuery;
    }
    class PreferencesPanelTextInput {
        public textElementToBuild: PreferencePanelInputToBuild[];
        public name: string;
        public inputs: {
            [label: string]: JQuery;
        };
        public inputTemplate: (...data: any[]) => string;
        constructor(textElementToBuild: PreferencePanelInputToBuild[], name: string);
        public build(): JQuery;
        public getValues(): any[];
        public setValue(input: string, value: string): void;
        public reset(): void;
        private getInput(input);
    }
    class PreferencesPanelTextAreaInput extends PreferencesPanelTextInput {
        public inputTemplate: (...data: any[]) => string;
        public build(): JQuery;
    }
    class PreferencePanelMultiSelectInput {
        private toBuild;
        public options: string[];
        public name: string;
        private textInput;
        private select;
        constructor(toBuild: PreferencePanelInputToBuild, options: string[], name: string);
        public build(): JQuery;
        public getValues(): any;
        public setValues(values: string[]): void;
        public reset(): void;
    }
}
declare module Coveo.Ui {
    interface ResultsPreferencesOptions {
        showOpenInOutlook?: boolean;
        showOpenInNewWindow?: boolean;
    }
    class DefaultResultsPreferencesOptions extends ComponentOptions implements ResultsPreferencesOptions {
        public showOpenInOutlook: boolean;
        public showOpenInNewWindow: boolean;
        constructor(element: HTMLElement);
    }
    class ResultsPreferences extends Component {
        public element: HTMLElement;
        public options: ResultsPreferencesOptions;
        public bindings: ComponentBindings;
        static ID: string;
        public preferences: ResultLinkOptions;
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferencePanelCheckboxInput;
        constructor(element: HTMLElement, options: ResultsPreferencesOptions, bindings: ComponentBindings);
        public save(): void;
        public exitWithoutSave(): void;
        private updateComponentOptionsModel();
        private buildTitle();
        private buildCheckboxesInput();
        private fromCheckboxInputToPreferences();
        private fromPreferencesToCheckboxInput();
        private fromPreferenceChangeEventToUsageAnalyticsLog(e);
    }
}
declare module Coveo.Ui {
    interface ResultFilterPreference {
        selected?: boolean;
        custom?: boolean;
        tab?: string[];
        caption: string;
        expression: string;
    }
    interface ResultsFiltersPreferencesOptions {
        filters: {
            [caption: string]: {
                expression: string;
                tab?: string[];
            };
        };
        includeInBreadcrumb?: boolean;
        showAdvancedFilters?: boolean;
    }
    class DefaultResultsFiltersPreferenceOptions extends ComponentOptions implements ResultsFiltersPreferencesOptions {
        public filters: {
            [caption: string]: {
                expression: string;
                tab?: string[];
            };
        };
        public includeInBreadcrumb: boolean;
        public showAdvancedFilters: boolean;
        constructor(element: HTMLElement);
    }
    class ResultsFiltersPreferences extends Component {
        public element: HTMLElement;
        public options: ResultsFiltersPreferencesOptions;
        public bindings: ComponentBindings;
        static ID: string;
        public preferences: {
            [caption: string]: ResultFilterPreference;
        };
        private preferencePanelLocalStorage;
        private preferencePanel;
        private preferenceContainer;
        private preferencePanelCheckboxInput;
        private advancedFilters;
        private advancedFiltersBuilder;
        private advancedFiltersTextInputCaption;
        private advancedFiltersTextInputExpression;
        private advancedFiltersTabSelect;
        private advancedFilterFormValidate;
        constructor(element: HTMLElement, options: ResultsFiltersPreferencesOptions, bindings: ComponentBindings);
        public createDom(): void;
        public save(): void;
        public exitWithoutSave(): void;
        private bindPreferencePanelEvent();
        private bindBreadcrumbEvent();
        private bindQueryEvent();
        private handleBuildingQuery(e, args);
        private handlePopulateBreadcrumb(e, args);
        private handleClearBreadcrumb(e, args);
        private buildTitle();
        private buildAdvancedFilters();
        private buildAdvancedFilterInput();
        private buildAdvancedFilterFormValidate();
        private getAdvancedFiltersTextInputToBuild();
        private getAllTabs();
        private getPreferencesBoxInputToBuild();
        private buildCheckboxesInput();
        private buildDeleteAdvancedFilter();
        private buildEditAdvancedFilter();
        private buildBreadcrumb(filter);
        private confirmDelete(filter, filterElement);
        private editElement(filter, filterElement);
        private populateEditSection(toPopulate?);
        private deleteFilterPreference(filter, filterElement);
        private openAdvancedFilterSectionOrSaveFilters();
        private validateAndSaveAdvancedFilter(e);
        private fromPreferencesToCheckboxInput();
        private fromCheckboxInputToPreferences();
        private getActiveFilters();
        private getInactiveFilters();
        private getActiveTab();
        private filterIsInActiveTab(filter, tab);
        private getFilterElementByCaption(caption);
        private fromResultsFilterOptionToResultsPreferenceInterface(filters?);
        private mergeLocalPreferencesWithStaticPreferences();
        private fromFilterToAnalyticsEvent(filter, type);
    }
}
declare module Coveo.Ui {
    interface ResultTaggingOptions {
        field: string;
        suggestBoxSize?: number;
        autoCompleteTimer?: number;
    }
    class DefaultResultTaggingOptions extends ComponentOptions implements ResultTaggingOptions {
        public field: string;
        public suggestBoxSize: number;
        public autoCompleteTimer: number;
        constructor(element: HTMLElement);
    }
    class ResultTagging extends Component {
        public element: HTMLElement;
        public options: ResultTaggingOptions;
        public result: Rest.QueryResult;
        public os: OS.NAME;
        static ID: string;
        static AUTO_COMPLETE_CLASS: string;
        private autoCompleteZone;
        private textBox;
        private autoCompletePopup;
        private tagZone;
        private tags;
        constructor(element: HTMLElement, options?: ResultTaggingOptions, bindings?: ComponentBindings, result?: Rest.QueryResult, os?: OS.NAME);
        private buildExistingTags();
        private buildTagIcon();
        private focusOnTextBox();
        private buildTagValue(tagValue);
        private buildShortenedTagWithTitle(tagValue);
        private buildTextBox();
        private buildAddIcon();
        private buildClearIcon();
        private bindFacetEventOnValue(element, value);
        private clearPopup();
        private showPopup();
        private populateSuggestions();
        private manageAutocompleteAutoHide();
        /**
        Exclude tags that are already on the result (Since we can tag with the same value twice)
        **/
        private buildRegEx(searchTerm);
        private buildTermToExclude(term);
        private manageUpDownEnter(code);
        private computeNextIndex(code, selectableArray);
        private buildSelectableValue(lookupValue);
        private doRemoveTag(element, tagValue);
        private doAddTagWithValue(tagValue);
        private doAddSingleTagValue(tagValue);
        private doAddTag();
    }
}
declare module Coveo.Ui {
}
declare module Coveo.Ui {
    interface AuthenticationProviderOptions {
        name?: string;
        caption?: string;
        useIFrame?: boolean;
        showIFrame?: boolean;
    }
    class DefaultAuthenticationProviderOptions extends ComponentOptions implements AuthenticationProviderOptions {
        public name: string;
        public caption: string;
        public useIFrame: boolean;
        public showIFrame: boolean;
        constructor(element: HTMLElement);
    }
    class AuthenticationProvider extends Component implements Menu {
        public element: HTMLElement;
        public options: AuthenticationProviderOptions;
        static ID: string;
        constructor(element: HTMLElement, options?: AuthenticationProviderOptions, bindings?: ComponentBindings);
        public getCssClass(): string;
        public getMenuItems(): MenuItem[];
        private handleBuildingCallOptions(e, args);
        private handleQueryError(e, args);
        private authenticateWithProvider();
        private redirectToAuthenticationProvider();
        private useIFrameToAuthenticate();
        private createPopupForWaitMessage(iframe);
        private createPopupForVisibleIFrame(iframe);
        private getAuthenticationProviderUriForRedirect();
        private getAuthenticationProviderUriForIFrame();
    }
}
