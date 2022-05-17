var PROXY = "PROXY 192.168.123.1:7890";
var DERECT = "DIRECT";

var FILTERS = [
    "192.168.123.1",
    "site_do_not_want_to_visit_2.com",
    "site_do_not_want_to_visit_3.com",
];

// PAC文件的主方法
function FindProxyForURL(url, host) {
    function rule_filter(domain) {
        for (var i = 0; i < FILTERS.length; i++) {
           if (domain.search(FILTERS[i]) !== -1) {
               return false;
           }
        }
        return true;
    }

    if (rule_filter(host) === true) {
        return DERECT;
    } else {
        return PROXY;
    }
}
