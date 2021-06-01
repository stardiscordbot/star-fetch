const { XMLHttpRequest } = require('xmlhttprequest')

function get(url, async = false) {
    const request = new XMLHttpRequest(url)
    request.open('GET', url, async)
    request.send()
    return JSON.parse(request.responseText)
}

module.exports = get