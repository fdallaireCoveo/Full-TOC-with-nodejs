/* Building TOC with RequireJS */
/* Original RequireJS code sample from http://tregner.com/flare-blog/category/flare-for-programmers/
   and from http://stackoverflow.com/questions/6034960/create-nested-ul-lists-from-data-object*/

function createMasterToc(sourceFolder) {
    $(document).ready(function () {
        var platformRelativePath = $('meta[name=platformRelativePath]').attr("content");
        var tocPath = sourceFolder + '/Data/Toc.js';
        var tocChunkPath = sourceFolder + '/Data/Toc_Chunk0.js';
        require([tocPath, tocChunkPath], function (toc, chunk) {
            function addNodes(parent, n, topNode) {
                $.each(n, function (key, value) {
                    var nodeText = topNode;
                    var nodeLink;
                    var TOCid = value.i;

                    $.each(chunk, function (keyChunkItem, valueChunkItem) {
                        if (value.i === valueChunkItem.i[0]) {
                            nodeText = TOCid + " - " + valueChunkItem.t[0];
                            nodeLink = keyChunkItem;
                            var submenu = parent.append('<li><a href="' + nodeLink + '">' + nodeText + '</a></li>').find("li:last");
                            console.log(nodeText + " Link: "+ nodeLink);

                            if (typeof value.n !== "undefined") {
                                submenu = submenu.append('<ul></ul>').find("ul");
                                addNodes(submenu, value.n, value.i);
                            }
                        }
                    });
                });
            }
            addNodes($('#myTOC'),toc.tree.n, 'TOC');
        });
        /*$.ajax({
            type: 'POST',
            url: 'ThisIsATest.html',//url of receiver file on server
            *//*data: $('#myTOC'), //your data*//*
            data: {
                Test: "hello"
            },
            dataType: 'html', //text/json...
            success: function() {
                console.log("The file was saved!");
            } //callback when ajax request finishes
        });*/
    });
}
