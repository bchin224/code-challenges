// path = "/foo/../test/../test/../foo//bar/./baz"
path = "/a/./b/../../c/"

// build as stack and push useful items, pop whenever there's a ..
function shortenPath(path) {

    return 
}

shortenPath(path)

// doesn't work for [path = "/a/./b/../../c/"]
// function shortenPath(path) {
//     let pathArray = path.split('/')
//     let absolute = false

//     if (path[0] === '/') {
//         absolute = true
//     }

//     for (let i = 0; i < pathArray.length; i++) {
//         if (pathArray[i] === '..') {
//             if (i === 0) {
//                 pathArray.splice(i, 1)
//             } else {
//                 pathArray.splice(i, 1)
//                 pathArray.splice(i - 1, 1)
//                 i--
//             }
//         }
//         if (pathArray[i] === '.' || pathArray[i] === '') {
//             pathArray.splice(i, 1)
//         }
//     }

//     if (pathArray.length === 1 && pathArray[0] === '..') {
//         console.log('/')
//         return '/'
//     }

//     if (absolute === true) {
//         pathArray.unshift('')
//     }
//     console.log(pathArray.join('/'))
//     return pathArray.join('/')
// }