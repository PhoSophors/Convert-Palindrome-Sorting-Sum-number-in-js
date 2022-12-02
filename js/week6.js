/**
 * convert number fountion ============================================
 */
function convertFunction() {
  var cNumber = document.getElementById("cNumber").value; // get element from user
  var str = "";  // String varaible

  /* for (variable of iterable) */
  for (i of cNumber) {
    // switch(expression)
    switch (i) {
      case "1":
        str += "one ";
        break;
      case "2":
        str += "two ";
        break;
      case "3":
        str += "three ";
        break;
      case "4":
        str += "four ";
        break;
      case "5":
        str += "five ";
        break;
      case "6":
        str += "six ";
        break;
      case "7":
        str += "seven ";
        break;
      case "8":
        str += "eight ";
        break;
      case "9":
        str += "nine ";
        break;
      case "0":
        str += "zero ";
        break;
    }
  }
  document.getElementById("convertResult").innerHTML = str; // print result on convertResult
}
// ======================= end convert number fountion ===============================

/**
 * palindrome number fountion ============================================
 * function that check str is palindrome or not
 */
function palindromeFunction() {
  var pNumber = document.getElementById("pNumber").value; // get element from user
  var isPanlindrome = true; // set isPanlindrome is true

  for (let i = 0; i < (pNumber.length/2); i++) {
    if(pNumber.charAt(i) !== pNumber.charAt(pNumber.length-1-i)) {
      isPanlindrome = false; 
      break;
    }
  } 
  //condition checking ans is true or not
  if(isPanlindrome) {
    // if number is panlindrome, program will printing "Number is a palindrome number"
    document.getElementById("palindromeResult").innerHTML = "Number is a palindrome number";
  } 
  else { 
    // if number is not panlindrome, program will printing "Number is not a palindrome number"
    document.getElementById("palindromeResult").innerHTML = "Number is not a palindrome number";
  }
}
// ======================= end palindrome number fountion ===============================

/** ++++++++++++++ getELement from sort number and sum number ++++++++++++ */
let getElement = ( str, convertToNum = (arr) => {
    let tmpArr = arr.filter((e) => e);
    for (i of tmpArr) {
      tmpArr.push(parseFloat(tmpArr.shift()));
    }
    return tmpArr;
  }
) => {
  let arr = str.split(" ");
  arr = convertToNum(arr);
  return arr;
};
/** ++++++++++++++ end getELement from sort number and sum number ++++++++++++ */

/**
 * sort number ==============================================================
 */
var sort = () => {
  let str = document.getElementById("sNumber").value; // input from user
  let arr = getElement(str);

  quickSort(arr, 0, arr.length - 1);
  //print the sorted array
  document.getElementById("sortResult").innerHTML = "After sort: " + " " + arr ; 
};
// sort process
let quickSort = (arr, low , high) => {
  let partition = (arr, low, high) => {

    pivot = arr[high];              // pivot (Element to be placed at right position)
    let i = low - 1;                // Index of smaller element

    // Process all cycles
    for (j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {         // If current element is smaller than to pivot
        i++;                        // increment index of smaller element

        // swap arr[i] and arr[j] 
        let tmp = arr[i];           // used as next index
        arr[i] = arr[j];            // Update arr[]
        arr[j] = tmp;               // Update value and index for next iteration
      }
    }
     // swap arr[i+1] and arr[high] (or pi) 
    let tmp = arr[i + 1];           // used as next index
    arr[i + 1] = arr[high];         // Update arr[]
    arr[high] = tmp;                // Update value and index for next iteration

    return i + 1;
  };

  // if lov < hiht generates Random Pivot, swaps pivot with 
  // end element and calls the partition function
  if (low < high) {

    /* pi is partitioning index, arr[p] is now at right place */
    pi = partition(arr, low, high); // pivot – pivot element around which array will be partitioned 

    quickSort(arr, low, pi - 1);    // call quicksort recursively to sort sub array before pivot
    quickSort(arr, pi + 1, high);   // call quicksort recursively to sort sub array after pivot
  }
};
// end sort process
// end sort number ==============================================================

/**
 * sum number ==============================================================
 */
var sum = () => {
  let str = document.getElementById("inputSum").value; // get input from user
  let array = getElement(str); 
  // call sum process
  let sumResult = sumProcess(array);
  // print sum result
  document.getElementById("sumResult").innerHTML = "Result: " + "" + sumResult  ; 
};

// sum process
let sumProcess = (array) => {
  let sumResult = 0; // initialize sum 

  // Iterate through all elements 
  // and add them to sumResult
  for (i of array) {
    sumResult += i;           
  }
  return sumResult; 
};
// end sum process
// end sum number ==============================================================