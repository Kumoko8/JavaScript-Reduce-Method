 //Reducer accumluates values through an array
 //for example if the array is nums = [2, 4, 6, 8] the reducer, starting at 0(accum) would take the first value (curr) and add it to 0
 //0 + 2
 //2 + 4
 //6 + 6
 //12 + 8 and the final value would be 20
 //basically it gives a total of all the values in an array

 var reduce = function(nums, fn, init) {
    for (let i = 0; i <= nums.length; i++) { 
        const val = fn(init, nums[i])
        fn = function sum(accum, curr) {
            return accum + curr
        }
       
    }
    
        
    };
    