path = "/foo/../test/../test/../foo//bar/./baz"
// path = "/a/./b/../../c/"
// path = "/../"
// path = "/a//b////c/d//././/.."

// build as stack and push useful items, pop whenever there's a ..
function simplifyPath(path) {
    let shortPath = []
    let pathSplit = path.split('/')
    console.log(pathSplit)
    for (let i = 0; i < pathSplit.length; i++) {
        if (i === 0 && pathSplit[i] === '..') {
            console.log('/')
            return shortPath['/']
        } else if (pathSplit[i] === '..') {
            shortPath.pop()
        } else if (pathSplit[i] === '.' || pathSplit[i] === '') {
            continue
        } else {
            shortPath.push(pathSplit[i])
        }
    }
    if (shortPath.length === 0) {
        console.log('/')
        return '/'
    } else {
        shortPath.unshift('')
        console.log(shortPath.join('/'))
        return 
    }
}

simplifyPath(path)