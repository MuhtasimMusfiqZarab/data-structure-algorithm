var sortList = function(head) {
    let temp = head;
    let arr = [];
    let i = 0;
    while (temp) {
      console.log('this is temp',temp);
        arr.push(temp.val);
        temp = temp.next;
    };
    arr.sort( (a,b) => a - b);
    temp = head;
    while (temp) {
        temp.val = arr[i++];
        temp = temp.next;
    };
    console.log("Head",head);
    return head;
};

sortList([4,3,6,2]);