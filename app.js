angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').filter('substr', function() {
    return function(input, length) {
      if(input != undefined){
          return ( input.length >=  length ? input.substring( 0, length ) + '...' : input );
      } else{ 
        return "";
      }
    }
});

angular.module('ui.bootstrap.demo').filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

angular.module('ui.bootstrap.demo').filter('unsafe', function ($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {



 $scope.addText = 'Priority {0} Cases';
  $scope.getText = function(obj){
    return $scope.addText.replace("{0}", obj).replace(/(\(.*\))/g, '')
  };

  $scope.addClass = '<span class="jobCount">{0}</span>';
  $scope.getClass = function(obj){
    return $scope.addClass.replace("{0}", obj).replace(/(\(.*\))/g, '')
  };

  $scope.tabs = [  
   {  
      "ID":0,
      "groupName":"Cardnet BAU",
     "totalJobs":7,
      "jobsList":{  
         "1":[  
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            },
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            }
         ],
         "2":[  
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            }
         ],
         "3":[  
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            }
         ],
         "4":[  
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            },
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            },
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            },
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            }
         ],
         "5":[  

         ]
      }
   },
   {  
      "ID":1,
      "groupName":"LBG - COM - Commercial Banking",
     "totalJobs":2,
      "jobsList":{  
         "1":[  

         ],
         "2":[  
            {  
               "id":48073,
               "title":"Currency Call Rates 03.08.15",
               "desc":"Hi&nbsp; Can you please push this live on Monday morning, by 10am?&nbsp; Thanks&nbsp; Beatriz",
               "priority":"2 – Urgent",
               "url":"default.asp?48073#570411",
               "parentGroupId":"1"
            }
         ],
         "3":[  

         ],
         "4":[  

         ],
         "5":[  

         ]
      }
   },
   {  
      "ID":2,
      "groupName":"LBG Commercial Finance",
     "totalJobs":1,
      "jobsList":{  
         "1":[  

         ],
         "2":[  
            {  
               "id":46578,
               "title":"New Glossary on Commercial Finance DIGLLCF12034BPR",
               "desc":"This is now correct on stag can you check please.",
               "priority":"2 – Urgent",
               "url":"default.asp?46578#570504",
               "parentGroupId":"2"
            }
         ],
         "3":[  

         ],
         "4":[  

         ],
         "5":[  

         ]
      }
   },
   {  
      "ID":3,
      "groupName":"LBG Intermediaries BAU",
     "totalJobs":5,
      "jobsList":{  
         "1":[  

         ],
         "2":[  

         ],
         "3":[  

         ],
         "4":[  
            {  
               "id":47903,
               "title":"List of Redirects- BM Savings",
               "desc":"**PD.&nbsp; The whole site is redirected to the new domian - so every URL will redirect... unless I'm missing to the point of what's being asked.&nbsp; Noticed some of the redirects aren't working. Have passed job over to systems.",
               "priority":"4 – Normal",
               "url":"default.asp?47903#569687",
               "parentGroupId":"3"
            }
         ],
         "5":[  

         ]
      }
   },
   {  
      "ID":4,
      "groupName":"Lloyds International - CMS BAU",
     "totalJobs":3,
      "jobsList":{  
         "1":[  

         ],
         "2":[  

         ],
         "3":[  
            {  
               "id":45384,
               "title":"*full content sync* - Islands commercial 2 x new products",
               "desc":"Hi Support,&nbsp; Could we update changes below-&nbsp;https://realise.fogbugz.com/default.asp?45384#BugEvent.570521&nbsp; https://auth.lb-islands-com.realise.com/products-and-services/deposit-accounts/32-day-notice-account/#635739551863644685&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?45384#570530",
               "parentGroupId":"4"
            }
         ],
         "4":[  
            {  
               "id":48022,
               "title":"Accessibility switcher not working on C-DEV",
               "desc":"Support,&nbsp; Could you QA -&nbsp;http://dev.lb-international.realise.com/ and see if we can deploy case 47874 to live?&nbsp; Already opened another case that Nick included in comment-&nbsp;https://realise.fogbugz.com/default.asp?48022#BugEvent.569672 Here it ...",
               "priority":"4 – Normal",
               "url":"default.asp?48022#570527",
               "parentGroupId":"4"
            }
         ],
         "5":[  
            {  
               "id":47804,
               "title":"Active Standards Report. ",
               "desc":"~putting down~&nbsp; Applied formula / formatting to make it clear which jobs need action / investigation.",
               "priority":"5 – Fix If Time",
               "url":"default.asp?47804#568620",
               "parentGroupId":"4"
            }
         ]
      }
   }
];



});



/*
// ==UserScript==
// @name         Angular It Up
// @namespace    http://realise.com
// @version      0.1
// @description  Angluar up FBugz
// @author       Me
// @include     *://realise.fogbugz.com/default.asp
// @include     *://realise.fogbugz.com/default.asp?pgx=LF&ixFilter=593
// @require     https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.2/ui-bootstrap-tpls.min.js

// @resource    customCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==



//var newCSS = GM_getResourceText ("customCSS");
//GM_addStyle (newCSS);

BM_addStyle('html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;-webkit-box-shadow:none !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100% !important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000 !important}.label{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #ddd !important}}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role="button"]{cursor:pointer}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#777}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover,a.text-primary:focus{color:#286090}.text-success{color:#3c763d}a.text-success:hover,a.text-success:focus{color:#2b542c}.text-info{color:#31708f}a.text-info:hover,a.text-info:focus{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover,a.text-warning:focus{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover,a.text-danger:focus{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover,a.bg-primary:focus{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:bold}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\2014 \00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\00A0 \2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.nav:before,.nav:after{content:" ";display:table}.clearfix:after,.dl-horizontal dd:after,.nav:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}');

$(document).ready(function() { 
    
console.clear();

/
 * Object contstructor for group projects
 /
function projectGroup(ID, groupName, jobsList) {
  this.ID = ID;
  this.groupName = groupName;
  this.jobsList = jobsList;
}

/
 * Object contstructor for project priorities
 /
function projectPriorities(priorityTitle, jobsList) {
  this.priority = priorityTitle;
  this.jobs = jobsList;
}

/
 * Object contstructor for each case
 /
function Case(id, title, desc, priority, url, parentGroupId) {
  this.id = id;
  this.title = title;
  this.desc = desc;
  this.priority = priority;
  this.url = url;
  this.parentGroupId = parentGroupId;
}

var projectGroups=[];
var groupIDs=[];


var cases = [];
$( "tr[ix]" ).each(function( index ) {
  var id = $(this).attr( "ix" );
  var url = $(this).find(".titleShifted a").attr("href");
  var title = $(this).find(".titleShifted a").html();
  var desc = $(this).find(".titleExtra");
  var priority = getPriority($(this));
  var parentGroupId = getGroupID($(this));
  
  var newCase = new Case(Number(id), title, desc.html(), priority, url, parentGroupId);
  cases.push(newCase);

});

$( "[id*=groupHeader_]" ).each(function( index ) {
    if($(this).attr('id').indexOf('prototype') == -1) {
  var title =  $(this).find('.groupHeader').html() ;
  var groupID = index;
  var jobs = "";
  var project = new projectGroup(groupID,title,jobs);
  projectGroups.push(project);
  groupIDs.push(groupID);
    }
});

function getPriority(el){
  var priority = el.find( "span:contains(' – ')" );
  priority = priority.html();
  return priority;
}

function getGroupID(el){
  var group = el.closest( "tbody" );
  var id = group.attr("id");
  var idNum = id.substr(id.indexOf("_") + 1);
  return idNum;
}

for (var i = 0; i < projectGroups.length; ++i) {
  var p1Cases =[];
  var p2Cases =[];
  var p3Cases =[];
  var p4Cases =[];
  var p5Cases =[];
  var totalJobs = 0;
  var sortedCases = {};
  var ID = projectGroups[i]["ID"];
   for (var j = 0; j < cases.length; ++j) {
     
     if(ID == cases[j]["parentGroupId"]){
       totalJobs++;
       var x = cases[j]["priority"];
       x = x.charAt(0);
       switch(x){
         case '1':
           p1Cases.push(cases[j]);
           break;
          case '2':
           p2Cases.push(cases[j]);
           break;
          case '3':
           p3Cases.push(cases[j]);
           break;
          case '4':
           p4Cases.push(cases[j]);
           break;
          case '5':
           p5Cases.push(cases[j]);
           break;
          default:
           break;
       }
        sortedCases['p1']=p1Cases;
        sortedCases['p2']=p2Cases;
        sortedCases['p3']=p3Cases;
        sortedCases['p4']=p4Cases;
        sortedCases['p5']=p5Cases;
        projectGroups[i]['jobsList']=sortedCases;
       projectGroups[i]['totalJobs'] = totalJobs;
     }
   }    
}
    

console.log(JSON.stringify(projectGroups, undefined, 4));
    
//angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
//angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [  
   {  
      "ID":0,
      "groupName":"Cases in Cardnet BAU",
      "jobsList":{  
         "p1":[  

         ],
         "p2":[  

         ],
         "p3":[  
            {  
               "id":48085,
               "title":"Archived Webinar- Regulatory link",
               "desc":"Holla Systems,&nbsp; Know you're out partying, but could we deploy this to stag-stable on monday?&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?48085#570542",
               "parentGroupId":"0"
            }
         ],
         "p4":[  

         ],
         "p5":[  

         ]
      }
   },
   {  
      "ID":1,
      "groupName":"Cases in LBG - COM - Commercial Banking",
      "jobsList":{  
         "p1":[  

         ],
         "p2":[  
            {  
               "id":48073,
               "title":"Currency Call Rates 03.08.15",
               "desc":"Hi&nbsp; Can you please push this live on Monday morning, by 10am?&nbsp; Thanks&nbsp; Beatriz",
               "priority":"2 – Urgent",
               "url":"default.asp?48073#570411",
               "parentGroupId":"1"
            }
         ],
         "p3":[  

         ],
         "p4":[  

         ],
         "p5":[  

         ]
      }
   },
   {  
      "ID":2,
      "groupName":"Cases in LBG Commercial Finance",
      "jobsList":{  
         "p1":[  

         ],
         "p2":[  
            {  
               "id":46578,
               "title":"New Glossary on Commercial Finance DIGLLCF12034BPR",
               "desc":"This is now correct on stag can you check please.",
               "priority":"2 – Urgent",
               "url":"default.asp?46578#570504",
               "parentGroupId":"2"
            }
         ],
         "p3":[  

         ],
         "p4":[  

         ],
         "p5":[  

         ]
      }
   },
   {  
      "ID":3,
      "groupName":"Cases in LBG Intermediaries BAU",
      "jobsList":{  
         "p1":[  

         ],
         "p2":[  

         ],
         "p3":[  

         ],
         "p4":[  
            {  
               "id":47903,
               "title":"List of Redirects- BM Savings",
               "desc":"**PD.&nbsp; The whole site is redirected to the new domian - so every URL will redirect... unless I'm missing to the point of what's being asked.&nbsp; Noticed some of the redirects aren't working. Have passed job over to systems.",
               "priority":"4 – Normal",
               "url":"default.asp?47903#569687",
               "parentGroupId":"3"
            }
         ],
         "p5":[  

         ]
      }
   },
   {  
      "ID":4,
      "groupName":"Cases in Lloyds International - CMS BAU",
      "jobsList":{  
         "p1":[  

         ],
         "p2":[  

         ],
         "p3":[  
            {  
               "id":45384,
               "title":"*full content sync* - Islands commercial 2 x new products",
               "desc":"Hi Support,&nbsp; Could we update changes below-&nbsp;https://realise.fogbugz.com/default.asp?45384#BugEvent.570521&nbsp; https://auth.lb-islands-com.realise.com/products-and-services/deposit-accounts/32-day-notice-account/#635739551863644685&nbsp; Thanks",
               "priority":"3 – High priority",
               "url":"default.asp?45384#570530",
               "parentGroupId":"4"
            }
         ],
         "p4":[  
            {  
               "id":48022,
               "title":"Accessibility switcher not working on C-DEV",
               "desc":"Support,&nbsp; Could you QA -&nbsp;http://dev.lb-international.realise.com/ and see if we can deploy case 47874 to live?&nbsp; Already opened another case that Nick included in comment-&nbsp;https://realise.fogbugz.com/default.asp?48022#BugEvent.569672 Here it ...",
               "priority":"4 – Normal",
               "url":"default.asp?48022#570527",
               "parentGroupId":"4"
            }
         ],
         "p5":[  
            {  
               "id":47804,
               "title":"Active Standards Report. ",
               "desc":"~putting down~&nbsp; Applied formula / formatting to make it clear which jobs need action / investigation.",
               "priority":"5 – Fix If Time",
               "url":"default.asp?47804#568620",
               "parentGroupId":"4"
            }
         ]
      }
   }
];
   // $scope.tabs=projectGroups;
//});

//$('<div ng-controller="TabsDemoCtrl"> <tabset vertical="true" type="pills"> <tab ng-repeat="tab in tabs" heading="{{tab.groupName}}" active="tab.active" disable="tab.disabled"> <h3>{{tab.groupName}}</h3> <div ng-repeat="(priority, cases) in tab.jobsList"> <div ng-show="cases.length"> <h4>{{priority}}</h4> <ul> <li ng-repeat="case in cases">{{case.title}}</li></ul> </div></div></tab> </tabset></div>').appendTo('body');
//angular.bootstrap($('body'), ['ui.bootstrap.demo']);

    
});
*/

angular.module('ui.bootstrap.demo').controller('standardSwitch', function ($scope) {
  $scope.switch = 'off';
});

angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.user = {
        user: 'name',
        password: null
    };

    $scope.open = function () {

        $modal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, user) {
                $scope.user = user;
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(user);
                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };
});

angular.module('ui.bootstrap.demo')
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.counter = 0;
      $scope.change = function() {
        $scope.counter++;
      };
    }]);