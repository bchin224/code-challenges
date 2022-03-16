/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let good = 0
        let bad = n
        
        while (good < bad) {
            let mid = Math.floor((good + bad) / 2)
            
          if(isBadVersion(mid)){
                bad = mid;
            } else {
                good = mid + 1;
            }
        }
        return bad
    };
};