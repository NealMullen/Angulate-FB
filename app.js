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
