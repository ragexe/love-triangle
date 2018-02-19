/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;
    if (preferences.length < 3){
        return result
    }

    for (let i = 0; i < preferences.length; i++){
        if (!preferences[i]) continue;
        if (isPartOfTriangle(i)) {
            result++;
            clearLoveTriangle(i)
        }
    }

    function clearLoveTriangle(i) {
        preferences[preferences[preferences[i] - 1] - 1] = null;
        preferences[preferences[i] - 1] = null;
        preferences[i] = null;
    }

    function isPartOfTriangle(i){
        return (
            isInTriangle(i) &&
            isInTriangle(preferences[i] - 1) &&
            isInTriangle(preferences[preferences[i] - 1] - 1)
        )
    }

    function isInTriangle(i){
        return (
            (i + 1) !== preferences[i] && (i + 1 === preferences[preferences[preferences[i] - 1] - 1])
        )
    }

    return result
};


