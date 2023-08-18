
function getSubsets(arr,subset,idx){
    if(idx == arr.length){
        console.log(subset);
        return;
    }
    getSubsets(arr,subset,idx+1);
    subset.push(arr[idx]);
    getSubsets(arr,subset,idx+1);
    subset.pop();
}

function getSubsetsWithSum(arr,subset,idx,sum,target){
    if(sum == target){
        console.log(subset);
        return;
    }
    if(idx == arr.length)
        return;
    if(sum + arr[idx] <= target){
        subset.push(arr[idx]);
        getSubsetsWithSum(arr,subset,idx+1,sum+arr[idx],target);
        subset.pop();
    }
    getSubsetsWithSum(arr,subset,idx+1,sum,target);
}

console.log("-------------Subset Problem--------------");

let arr = [7,2,5,4,6,3];
let subset = [];
let idx = 0;
let sum = 0;
let target = 9;
getSubsets(arr,subset,idx);

console.log("-------------Subset Sum Problem--------------");

getSubsetsWithSum(arr,subset,idx,sum,target)
