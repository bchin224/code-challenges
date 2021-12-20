// let s = '12:05:39AM'
let s = '04:59:59AM'


function timeConversion(s) {
    if (s[8] === 'A' && s[0] === '1' && s[1] === '2') {
        return '00' + s.substr(2, 6)
    } else if (s[8] === 'A') {
        return s.substr(0,8)
    } else if (s[8] === 'P' && s[0] === '1' && s[1] === '2') {
        return '12' + s.substr(2, 6)
    } else {
        return (parseInt(s[0]+s[1]) + 12).toString() + s.substr(2, 6)
    }
}

timeConversion(s)