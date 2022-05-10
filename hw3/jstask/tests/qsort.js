function fetch() {}
function prompt() {}

var SIZE = 5;
var message = "";

function swap(a, l, h) {
    var tmp = a[l];
    a[l] = a[h];
    a[h] = tmp;
}

/* Sorts the elements of a between low and high inclusive */
function quicksort(a, low, high) {
    message += low + " " + high;
    /* Use the first element as the pivot */
    var pivot = a[low];

    /* Set l and r and move the array elements such
       that for all i:low<i<l, a[i]<=pivot,
       and for all i:r<=i<high, a[i]>pivot. */

    var l = low + 1;
    var r = high;
    while(l < r) {
        if (a[l] <= pivot) {
            l++;
        } else {
            r--;
            swap(a, l, r);
        }
        message += " " + l + " " + r;
    }
    message += "\n";

    /* Put pivot element into place */
    l--;
    swap(a, low, l);

    /* Recursively sort the partitions, if their size is > 1
       (if a partition's size is 1, it is already sorted) */
    if (l - low > 1) {
        quicksort(a, low, l);
    }
    if (high - r > 1) {
        quicksort(a, r, high);
    }
}


var i, tmp;
var a = new Array(SIZE);
for(i = 0; i < SIZE; i++) {
    tmp = prompt();
    a[i] = tmp;
}
console.log(a);
quicksort(a, 0, SIZE);
console.log(a);
for(i = 0; i < SIZE - 1; i++) {
    console.assert(a[i] <= a[i+1]);
}
