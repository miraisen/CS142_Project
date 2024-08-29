"use strict";
function cs142MakeMultiFilter(originalArray){
    let currentArray = originalArray.slice();

    function arrayFilter(filterCriteria, callback){
        if (typeof filterCriteria !== 'function'){
            return currentArray;
        }
        
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === 'function'){
            callback.call(originalArray, currentArray);
        }
        return arrayFilter;
    }

    return arrayFilter;
}