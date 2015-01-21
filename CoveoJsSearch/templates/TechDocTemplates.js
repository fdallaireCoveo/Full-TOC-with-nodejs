Coveo.Ui.TemplateCache.registerTemplate("Default", _.template(
"<div class='coveo-icon objecttype <%-raw.objecttype%>'><%-raw.objecttype%></div><div class='coveo-date'><%-dateTime(raw.sysdate)%></div><div class='coveo-title'><span class='CoveoFieldValue coveo-badge' data-field='@objecttype'></span><a class='CoveoResultLink' target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\") %></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div><div class='CoveoPrintableUri'></div><table class='CoveoFieldTable'><tr data-field='@sysauthor' data-caption='Author' /></table>"))
Coveo.Ui.TemplateCache.registerTemplate("DefaultQuickView", _.template(
"<div class='CoveoQuickView' data-title=\"<%= attrEncode('<span class=\"coveo-icon objecttype '+raw.objecttype+'\"></span>'+ Title) %>\" data-fixed='true' data-template-id=\"DefaultQuickViewContent\"></div>"))
Coveo.Ui.TemplateCache.registerTemplate("DefaultQuickViewContent", _.template(
"<div class='coveo-quick-view-header'><table class='CoveoFieldTable'><tr data-field='@sysdate' data-caption='Date' data-helper='dateTime' /><tr data-field='@objecttype' data-caption='Type' /></table></div><div class='CoveoQuickViewDocument'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("EmailThread", _.template(
"<div class=\"coveo-email-result\"><div class='coveo-email-result-top-result'><%= fromFileTypeToIcon() %><div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-email-header\"><span class=\"coveo-email-from\">From: <%= email(raw.sysfrom) %></span><span class=\"coveo-email-to\">To: <%= email(raw.sysrecipients)%></span></div><div class=\"coveo-title\"><a class=\"CoveoResultLink\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\") %></div><div class='coveo-excerpt'><%= highlight(excerpt, excerptHighlights)%></div><div class='CoveoResultAttachments'data-result-template-id='EmailResultAttachment'></div></div><div class='CoveoResultFolding'data-result-template-id=\"EmailChildResult\"data-more-caption=\"ShowAllReplies\"data-less-caption=\"ShowOnlyMostRelevantReplies\"></div></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("EmailChildResult", _.template(
"<div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-email-header\"><span class=\"coveo-email-from\"><%= email(raw.sysfrom, undefined, undefined, undefined, true) %></span><%= loadTemplate(\"DefaultQuickView\") %></div><div class='coveo-excerpt'><a class=\"CoveoResultLink\"><%= highlight(firstSentences, firstSentencesHighlights)%></a></div><div class='CoveoResultAttachments' data-result-template-id='EmailResultAttachment'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("EmailResultAttachment", _.template(
"<div class='coveo-attachment-container'><%= fromFileTypeToIcon() %><a class=\"CoveoResultLink\"><%= title || clickUri %></a><% if(Coveo.QueryUtils.hasThumbnail(obj)){ %> <span class='coveo-thumbnail-icon'><%= thumbnail() %></span><% } %><%= loadTemplate(\"DefaultQuickView\") %><div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("LithiumThread", _.template(
"<div class=\"coveo-lithium-result\"><div class=\"coveo-icon coveo-sprites-documentType-thread_x16\"></div><div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-lithium-header\"><span class=\"coveo-lithium-from\">From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span></span><span class=\"coveo-lithium-to\">To: <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\"></span></span></div><div class=\"coveo-title\"><a class=\"CoveoResultLink\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\") %></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div><div class='CoveoResultFolding'data-result-template-id=\"LithiumChildResult\"data-more-caption=\"ShowCompleteThread\"data-less-caption=\"ShowOnlyTopMatchingPosts\"></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("LithiumChildResult", _.template(
"<div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-lithium-header\"><span class=\"coveo-lithium-from\">From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span></span></div><div class='coveo-excerpt coveo-show-if-normal'><a class=\"CoveoResultLink\"><%=highlight(firstSentences, firstSentencesHighlights)%></a></div><div class='coveo-excerpt coveo-show-if-expanded'><a class=\"CoveoResultLink\"><%=raw.limessagebody%></a></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileDefault", _.template(
"<div class='coveo-title'><div class='coveo-date'><%-dateTime(raw.sysdate)%></div><div class='coveo-icon objecttype <%-raw.objecttype%>'><%-raw.objecttype%></div><span class='CoveoFieldValue coveo-badge' data-field='@objecttype'></span><a class='CoveoResultLink' target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"MobileDefaultQuickView\") %></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div><div class='CoveoPrintableUri'></div><table class='CoveoFieldTable'><tr data-field='@sysauthor' data-caption='Author' /><tr data-field='@sysconcepts' data-caption='Concepts' data-split-values='true' /></table>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileDefaultQuickView", _.template(
"<div class='CoveoQuickView' data-title=\"<%= attrEncode('<span class=\"coveo-icon objecttype '+raw.objecttype+'\"></span>'+ Title) %>\" data-template-id=\"MobileDefaultQuickViewContent\"></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileDefaultQuickViewContent", _.template(
"<div class='CoveoQuickViewDocument' data-maximum-document-size='50000'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileEmailThread", _.template(
"<div class=\"coveo-email-result\"><div class=\"coveo-email-header\"><div class=\"coveo-email-from\"><span class=\"coveo-icon coveo-sprites-documentType-mail\"></span>From: <span class=\"CoveoFieldValue\" data-field=\"@sysfrom\" data-helper=\"email\" data-html-value=\"true\"></span></div><div class=\"coveo-date\"><%-date(raw.sysdate, {predefinedFormat: \"MMM d\"})%></div><div class=\"coveo-email-to\">To: <span class=\"CoveoFieldValue\" data-field=\"@sysrecipients\" data-helper=\"email\" data-html-value=\"true\"></span></div><span class=\"coveo-title\"><% if (hasHtmlVersion) { %><a class=\"CoveoResultLink\" data-open-quickview=\"true\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"MobileQuickViewEmail\") %><% } else { %><a class=\"CoveoResultLink\"><%=title?highlight(title, titleHighlights):clickUri%></a><% } %></span></div><div class='coveo-excerpt'><%= highlight(excerpt, excerptHighlights)%></div><div class='CoveoResultAttachments'data-result-template-id='MobileEmailResultAttachment'></div><div class='CoveoResultFolding'data-result-template-id=\"MobileEmailChildResult\"data-normal-caption=\"MostRelevantReplies\"data-more-caption=\"ShowAllConversation\"data-less-caption=\"ShowOnlyMostRelevantReplies\"></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileEmailChildResult", _.template(
"<div class=\"coveo-email-header\"><span class=\"coveo-email-from\"><span class=\"CoveoFieldValue\" data-field=\"@sysfrom\" data-helper=\"email\" data-html-value=\"true\"></span></span></div><div class='coveo-excerpt'><% if(hasHtmlVersion) { %><a class=\"CoveoResultLink\" data-open-quickview=\"true\"><%= highlight(firstSentences, firstSentencesHighlights)%></a><%= loadTemplate(\"MobileQuickViewEmail\") %><% } else { %><a class=\"CoveoResultLink\"><%= highlight(firstSentences, firstSentencesHighlights)%></a><% } %></div><div class='CoveoResultAttachments' data-result-template-id='MobileEmailResultAttachment'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileQuickViewEmail", _.template(
"<div class='CoveoQuickView' data-title=\"<%= attrEncode('<span class=\"coveo-icon objecttype '+raw.objecttype+'\"></span>'+ Title) %>\" data-template-id=\"MobileQuickViewEmailContent\"></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileQuickViewEmailContent", _.template(
"<div class='coveo-quick-view-header coveo-quick-view-header-mobile-email'><div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-email-from\">From: <span class=\"CoveoFieldValue\" data-field=\"@sysfrom\" data-helper=\"email\" data-html-value=\"true\"></span></div><div class=\"coveo-email-to\">To: <span class=\"CoveoFieldValue\" data-field=\"@sysrecipients\" data-helper=\"email\" data-html-value=\"true\"></span></div></div><div class=\"CoveoEmailActions\"></div><div class='CoveoQuickViewDocument'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileEmailResultAttachment", _.template(
"<% if(Coveo.QueryUtils.hasThumbnail(obj) || hasHtmlVersion ) { %><div class='coveo-attachment-container'><% if(hasHtmlVersion) { %><%= fromFileTypeToIcon() %><a class=\"CoveoResultLink\" data-open-quickview=\"true\"><%= title || clickUri %></a><%= loadTemplate(\"MobileQuickViewEmail\") %><% } else if(Coveo.QueryUtils.hasThumbnail(obj)) { %><%= thumbnail() %><% } %></div><% } %>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileLithiumThread", _.template(
"<div class=\"coveo-lithium-result\"><div class=\"coveo-title\"><div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-icon coveo-sprites-documentType-thread_x16\"></div><a class=\"CoveoResultLink\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\") %></div><div class=\"coveo-lithium-header\"><span class=\"coveo-lithium-from\">From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span></span><span class=\"coveo-lithium-to\">To: <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\"></span></span></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div><div class='CoveoResultFolding'data-result-template-id=\"LithiumChildResult\"data-normal-caption=\"MostRelevantPosts\"data-expanded-caption=\"CompleteThread\"data-more-caption=\"ShowCompleteThread\"data-less-caption=\"ShowOnlyTopMatchingPosts\"></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileLithiumChildResult", _.template(
"<div class=\"coveo-date\"><%-dateTime(raw.sysdate)%></div><div class=\"coveo-lithium-header\"><span class=\"coveo-lithium-from\">From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span></span></div><div class='coveo-excerpt coveo-show-if-normal'><a class=\"CoveoResultLink\"><%=highlight(firstSentences, firstSentencesHighlights)%></a></div><div class='coveo-excerpt coveo-show-if-expanded'><a class=\"CoveoResultLink\"><%=raw.limessagebody%></a></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileSalesforce", _.template(
"<div class=\"coveo-salesforce-result-mobile\"><div class=\"coveo-icon objecttype <%-raw.objecttype%>\"></div><span class=\"CoveoFieldValue coveo-badge\" data-field=\"@objecttype\"></span><div class=\"coveo-date\"><%-date(raw.sysdate, {predefinedFormat: \"MMM d\"})%></div><div class=\"coveo-title\"><a class=\"CoveoResultLink\" target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a></div><table class=\"CoveoFieldTable\"><tr data-field=\"@sfaccountname\" data-caption=\"Account\" /><tr data-field=\"@sfownername\" data-caption=\"Owner\" /><tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\" /><tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\" /><tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\" /><tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\" /><tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\" /><tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\" /><tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=\"true\" /><tr data-field=\"@sfibdusername\" data-caption=\"ISR\" /><tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\" /><tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\" /><tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\" /><tr data-field=\"@sysworktitle\" data-caption=\"Work title\" /><tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper='email' data-html-value=\"true\" /><tr data-field=\"@sfcontactphone\" data-caption=\"Phone\" /></table></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileQuickViewSalesforce", _.template(
"<div class='CoveoQuickView' data-title=\"<span class='coveo-icon objecttype <%-raw.objecttype%>'></span><%= Title %>\" data-template-id=\"MobileQuickViewSalesforceContent\"></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileQuickViewSalesforceContent", _.template(
"<div class='coveo-quick-view-header'><table class='CoveoFieldTable'><tr data-field='@sysdate' data-caption='Date' data-helper='dateTime' /><tr data-field='@objecttype' data-caption='Type' /><tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\" /></table></div><div class='CoveoQuickViewDocument'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("MobileTargetProcessTemplate", _.template(
"<div class=\"CoveoResult\"><div class='coveo-icon targetprocessicon'></div><div class='coveo-date'><%-dateTime(raw.sysdate, {predefinedFormat: \"dd/MM/yyyy\", includeTimeIfThisWeek : false})%></div><div class=\"coveo-title\"><span class=\"CoveoFieldValue coveo-badge <%-raw.sysfiletype%>\" data-field=\"@sysfiletype\"></span><span class=\"TpId\"><%-raw.tpid%></span><a class=\"CoveoResultLink\" target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\", hasHtmlVersion) %></div><div class=\"coveo-excerpt\"><%= highlight(excerpt, excerptHighlights)%></div><table class=\"CoveoFieldTable\"><tr data-field=\"@state\" data-caption=\"State:\" /><tr data-field=\"@assignee\" data-caption=\"Assignee:\" /><tr data-field=\"@owner\" data-caption=\"Owner:\" /><tr data-field=\"@sprint\" data-caption=\"Sprint:\" /><tr data-field=\"@project\" data-caption=\"Project:\" /><tr data-field=\"@priority\" data-caption=\"Priority:\" /></table><div class='CoveoPrintableUri'></div></div>"))
Coveo.Ui.TemplateCache.registerTemplate("OH_CES70EN", _.template(
"<div class='coveo-icon'><img src=\"images/Online Help.png\" /><!-- <div class='coveo-sprites-documentType-how-to'></div> --></div><div class=\"audience-indicator\"><div class=\"CoveoFieldValue coveo-audience\" data-field=\"@audience\" data-facet=\"@audience\"></div><div class=\"coveo-sprites-documentType-user\"></div></div><div class='coveo-title'><a class='CoveoResultLink'><%=title?highlight(title,titleHighlights):clickUri%></a><%= loadTemplate(\"OH_QuickView\") %></div><div class='coveo-excerpt'><%=highlight(excerpt, excerptHighlights)%></div><!-- <div class='coveo-tags'><span class=\"coveo-sprites-documentType-topic\"/><span class=\"CoveoFieldValue\" data-field=\"@helptopictag\" data-split-values=\"true\" data-facet=\"@helptopictag\"/></div> -->"))
Coveo.Ui.TemplateCache.registerTemplate("OH_QuickView", _.template(
"<div class='CoveoQuickView' data-fixed='true' data-template-id=\"OH_QuickViewContent\"></div>"))
Coveo.Ui.TemplateCache.registerTemplate("OH_QuickViewContent", _.template(
"<div class='CoveoQuickViewDocument'></div>"))
Coveo.Ui.TemplateCache.registerTemplate("Salesforce", _.template(
"<div class=\"coveo-icon objecttype <%-raw.objecttype%>\"><%-raw.objecttype%></div><div class=\"coveo-date\"><% if (raw.sfclosedate) { %><%-closeDateToQuarter(raw.sfclosedate)%><% } else { %><%-dateTime(raw.sysdate)%><% } %></div><div class=\"coveo-title\"><span class=\"CoveoFieldValue coveo-badge\" data-field=\"@objecttype\"></span><a class=\"CoveoResultLink\" target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\") %></div><table class=\"CoveoFieldTable\"><tr data-field=\"@sfaccountname\" data-caption=\"Account\" /><tr data-field=\"@sfownername\" data-caption=\"Owner\" /><tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\" /><tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\" /><tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\" /><tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\" /><tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\" /><tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\" /><tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=\"true\" /><tr data-field=\"@sfibdusername\" data-caption=\"ISR\" /><tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\" /><tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\" /><tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\" /><tr data-field=\"@sysworktitle\" data-caption=\"Work title\" /><tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\" /><tr data-field=\"@sfcontactphone\" data-caption=\"Phone\" /></table>"))
Coveo.Ui.TemplateCache.registerTemplate("TargetProcessTemplate", _.template(
"<div class=\"CoveoResult\"><div class='coveo-icon targetprocessicon'></div><div class='coveo-date'><%-dateTime(raw.sysdate, {predefinedFormat: \"dd/MM/yyyy\", includeTimeIfThisWeek : false})%></div><div class=\"coveo-title\"><span class=\"CoveoFieldValue coveo-badge <%-raw.sysfiletype%>\" data-field=\"@sysfiletype\"></span><span class=\"TpId\"><%-raw.tpid%></span><a class=\"CoveoResultLink\" target=\"_blank\"><%=title?highlight(title, titleHighlights):clickUri%></a><%= loadTemplate(\"DefaultQuickView\", hasHtmlVersion) %></div><div class=\"coveo-excerpt\"><%= highlight(excerpt, excerptHighlights)%></div><table class=\"CoveoFieldTable\"><tr data-field=\"@state\" data-caption=\"State:\" /><tr data-field=\"@assignee\" data-caption=\"Assignee:\" /><tr data-field=\"@owner\" data-caption=\"Owner:\" /><tr data-field=\"@sprint\" data-caption=\"Sprint:\" /><tr data-field=\"@project\" data-caption=\"Project:\" /><tr data-field=\"@priority\" data-caption=\"Priority:\" /></table><div class='CoveoPrintableUri'></div></div>"))
