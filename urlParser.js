/*
Task 1 URLs are strings with a simple syntax:
scheme://[username:password@]domain[:port]/path?query_string#fragment_id
*/

function acceptUrl(urlString) {
    var object = {};
    let url = new URL(urlString);

    for (let key in url) {
        if (typeof url[key] !== 'function' && url[key] !== '') {
            if (key === 'protocol')
                object.scheme = url[key];
            else if (key === 'hostname')
                object.domain = url[key];
            else if (key === 'port')
                object.port = url[key];
            else if (key === 'pathname')
                object.path = url[key];
            else if (key === 'search')
                object.query = url[key];
            else if (key === 'hash')
                object.fragment = url[key];
        }
    }
    console.log(object)
}

acceptUrl('foo://example.com:8042/over/there?name=ferret#nose')
