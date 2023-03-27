let s = 'abcdef'
let t = 'fedcba'
let k = 15

function appendAndDelete(s, t, k) {
    let i = 0
    while (s != t) {
        if (s[i] == t[i]) {
            i++
        } else {
            if (s[i] == undefined) {
                s = s + t[i]
                console.log('Append: S[i]: '+s[i]+' t[i]: '+t[i])
            } else {
                s = s.slice(0,s.length-1)
                console.log('Delete: S[i]: '+s[i]+' t[i]: '+t[i])
                console.log('S is now: '+s)
            }
            k--
        }
        console.log('K is: '+k)

    }
    if (s == t &&  k >= 0 && k % 2 == 0) {
        console.log('Yes')
        return 'Yes'
    } else {
        console.log('No')
        return 'No'
    }

}

appendAndDelete(s, t, k)