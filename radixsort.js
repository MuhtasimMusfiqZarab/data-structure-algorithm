const getDigit =(num, i)=>{
  return Math.floor(Math.abs(num)/ Math.pow(10,i)) %10;
}

const digitCount =(num)=>{
  if(num ===0 ) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1;
}

//get the most digit of a number from digit
 const mostDigits =(nums)=>{
   let maxDigits =0;
   for (let i = 0; i < nums.length; i++) {
     
     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
   }

   return maxDigits;
 }

 const radixSort = (nums) =>{
  let maxDigitCount = mostDigits(num);

  for (let k = 0; k < maxDigitCount; k++) {
    
    //make the buckets
    let digitBuckets= Array.from({length: 10},()=>[]);

    //loop through each number and put it inside the bucket
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit( nums[i],k);
     digitBuckets[digit].push(nums[i]); 
    }
    
  }

 };

 radixSort([234,5456,13246,657]);
 