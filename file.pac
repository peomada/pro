var autoproxy_host = {
    "google.com": 1,
    "twitter.com": 1
    "youtube.com": 1
};
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (autoproxy_host.hasOwnProperty(host)) {
            return 'PROXY 192.168.123.1:7890';
        }
        
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return 'DIRECT';
}
