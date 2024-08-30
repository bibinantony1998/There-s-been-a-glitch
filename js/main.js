window.ts_endpoint_url = "https:\/\/slack.com\/beacon\/timing";(function(e) {
    var n=Date.now?Date.now():+new Date,r=e.performance||{},t=[],a={},i=function(e,n){for(var r=0,a=t.length,i=[];a>r;r++)t[r][e]==n&&i.push(t[r]);return i},o=function(e,n){for(var r,a=t.length;a--;)r=t[a],r.entryType!=e||void 0!==n&&r.name!=n||t.splice(a,1)};r.now||(r.now=r.webkitNow||r.mozNow||r.msNow||function(){return(Date.now?Date.now():+new Date)-n}),r.mark||(r.mark=r.webkitMark||function(e){var n={name:e,entryType:"mark",startTime:r.now(),duration:0};t.push(n),a[e]=n}),r.measure||(r.measure=r.webkitMeasure||function(e,n,r){n=a[n].startTime,r=a[r].startTime,t.push({name:e,entryType:"measure",startTime:n,duration:r-n})}),r.getEntriesByType||(r.getEntriesByType=r.webkitGetEntriesByType||function(e){return i("entryType",e)}),r.getEntriesByName||(r.getEntriesByName=r.webkitGetEntriesByName||function(e){return i("name",e)}),r.clearMarks||(r.clearMarks=r.webkitClearMarks||function(e){o("mark",e)}),r.clearMeasures||(r.clearMeasures=r.webkitClearMeasures||function(e){o("measure",e)}),e.performance=r,"function"==typeof define&&(define.amd||define.ajs)&&define("performance",[],function(){return r}) // eslint-disable-line
})(window);

//section
(function () {
         	
    window.TSMark = function (mark_label) {
        if (!window.performance || !window.performance.mark) return;
        performance.mark(mark_label);
    };
    window.TSMark('start_load');

    
    window.TSMeasureAndBeacon = function (measure_label, start_mark_label) {
        if (!window.performance || !window.performance.mark || !window.performance.measure) {
            return;
        }

        performance.mark(start_mark_label + '_end');

        try {
            performance.measure(measure_label, start_mark_label, start_mark_label + '_end');
            window.TSBeacon(measure_label, performance.getEntriesByName(measure_label)[0].duration);
        } catch (e) {
            
        }
    };

    
    if ('sendBeacon' in navigator) {
        window.TSBeacon = function (label, value) {
            var endpoint_url = window.ts_endpoint_url || 'https://slack.com/beacon/timing';
            navigator.sendBeacon(
                endpoint_url + '?data=' + encodeURIComponent(label + ':' + value),
                '',
            );
        };
    } else {
        window.TSBeacon = function (label, value) {
            var endpoint_url = window.ts_endpoint_url || 'https://slack.com/beacon/timing';
            new Image().src = endpoint_url + '?data=' + encodeURIComponent(label + ':' + value);
        };
    }
})();

//section

window.TSMark('step_load');


// section
var safe_hosts = ['app.optimizely.com', 'tinyspeck.dev.slack.com'];
if (self !== top && safe_hosts.indexOf(top.location.host) === -1) {
    window.document.write(
        '\u003Cstyle>body * {display:none !important;}\u003C/style>\u003Ca href="#" onclick=' +
            '"top.location.href=window.location.href" style="display:block !important;padding:10px">Go to Slack.com\u003C/a>'
    );
}

(function() {
    var timer;
    if (self !== top && safe_hosts.indexOf(top.location.host) === -1) {
        timer = window.setInterval(function() {
            if (window) {
                try {
                    var pageEl = document.getElementById('page');
                    var clientEl = document.getElementById('client-ui');
                    var sectionEls = document.querySelectorAll('nav, header, section');

                    pageEl.parentNode.removeChild(pageEl);
                    clientEl.parentNode.removeChild(clientEl);
                    for (var i = 0; i < sectionEls.length; i++) {
                        sectionEls[i].parentNode.removeChild(sectionEls[i]);
                    }
                    window.TS = null;
                    window.TD = null;
                    window.clearInterval(timer);
                } catch (e) {}
            }
        }, 200);
    }
})();


//section

window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
    gtag('consent', "default", {"ad_storage":"granted","ad_user_data":"granted","ad_personalization":"granted","personalization_storage":"granted","analytics_storage":"granted","functionality_storage":"granted","security_storage":"granted","wait_for_update":1000});

    window.dataLayer.push({
    'gtm.start': Date.now(),
    'event' : 'gtm.js',
    'AnalyticsActiveGroups' : ",1,2,3,4,",
    'policy_ga_only' : false,
});

var firstScript = document.getElementsByTagName('script')[0];
var thisScript = document.createElement('script');
thisScript.async = true;
thisScript.src = '//www.googletagmanager.com/gtm.js?id=GTM-KH2LPK';
firstScript.parentNode.insertBefore(thisScript, firstScript);

//section

document.addEventListener("DOMContentLoaded", function(e) {
    var gtmDataLayer = window.dataLayer || [];
    var gtmTags = document.querySelectorAll('*[data-gtm-click]');
    var gtmClickHandler = function(c) {
        var gtm_events = this.getAttribute('data-gtm-click');
        if (!gtm_events) return;
        var gtm_events_arr = gtm_events.split(",");
        for(var e=0; e < gtm_events_arr.length; e++) {
            var ev = gtm_events_arr[e].trim();
            gtmDataLayer.push({ 'event': ev });
        }
    };
    for(var g=0; g < gtmTags.length; g++){
        var elem = gtmTags[g];
        elem.addEventListener('click', gtmClickHandler);
    }
});

//section

(function(e,c,b,f,d,g,a){
    e.SlackBeaconObject=d;
    e[d]=e[d]||function(){(e[d].q=e[d].q||[]).push([1*new Date(),arguments])};
    e[d].l=1*new Date();g=c.createElement(b);a=c.getElementsByTagName(b)[0];
    g.async=1;g.src=f;a.parentNode.insertBefore(g,a)
})
(window,document,"script","https://a.slack-edge.com/bv1-13-br/slack_beacon.1f9ab05446fdf309c62d.min.js","sb");
window.sb('set', 'token', '3307f436963e02d4f9eb85ce5159744c');
sb('set', 'user_' + "batch", "signup_api");sb('set', 'user_' + "created", "2024-07-22");sb('set', 'user_id', "U07E3D2B0HE");
sb('set', 'name_tag', "jopasck" + '/' + "bibin");
window.sb('track', 'pageview');

//section

var TS_last_log_date = null;
var TSMakeLogDate = function() {
    var date = new Date();
    
    var y = date.getFullYear();
    var mo = date.getMonth()+1;
    var d = date.getDate();
    
    var time = {
        h: date.getHours(),
        mi: date.getMinutes(),
        s: date.getSeconds(),
        ms: date.getMilliseconds()
    };
    
    Object.keys(time).map(function(moment, index) {
        if (moment == 'ms') {
            if (time[moment] < 10) {
                time[moment] = time[moment]+'00';
            } else if (time[moment] < 100) {
                time[moment] = time[moment]+'0';
            }
        } else if (time[moment] < 10) {
            time[moment] = '0' + time[moment];
        }
    });
    
    var str = y + '/' + mo + '/' + d + ' ' + time.h + ':' + time.mi + ':' + time.s + '.' + time.ms;
    if (TS_last_log_date) {
        var diff = date-TS_last_log_date;
        //str+= ' ('+diff+'ms)';
    }
    TS_last_log_date = date;
    return str+' ';
    }
    
    var parseDeepLinkRequest = function(code) {
    var m = code.match(/"id":"([CDG][A-Z0-9]{8,})"/);
    var id = m ? m[1] : null;
    
    m = code.match(/"team":"(T[A-Z0-9]{8,})"/);
    var team = m ? m[1] : null;
    
    m = code.match(/"message":"([0-9]+\.[0-9]+)"/);
    var message = m ? m[1] : null;
    
    return { id: id, team: team, message: message };
    }
    
    if ('rendererEvalAsync' in window) {
    var origRendererEvalAsync = window.rendererEvalAsync;
    window.rendererEvalAsync = function(blob) {
        try {
            var data = JSON.parse(decodeURIComponent(atob(blob)));
            if (data.code.match(/handleDeepLink/)) {
                var request = parseDeepLinkRequest(data.code);
                if (!request.id || !request.team || !request.message) return;
    
                request.cmd = 'channel';
                TSSSB.handleDeepLinkWithArgs(JSON.stringify(request));
                return;
            } else {
                origRendererEvalAsync(blob);
            }
        } catch (e) {
        }
    }
}

//section

var TSSSB = {
    call: function() {
        return false;
    }
};

//section

window.addEventListener('load', function() {
    var was_TS = window.TS;
    delete window.TS;
    if (was_TS) window.TS = was_TS;
});