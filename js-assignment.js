class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    append(value) {

        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
        }
        else {
            let presentNode = this.head
            while (presentNode.next) {
                presentNode = presentNode.next;
            }
            presentNode.next = newNode;

        }
        this.size++
    }

    listReverse(){
        if(!this.head || !this.head.next)
        {
            return this.head;
        }
        let prevNode = this.head
        let currentNode = prevNode.next
        this.tail = this.head
        while(currentNode){
    
            let nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
    
        }
        this.head.next = null
        this.head = prevNode
        return this;
    }

    secondLargest(arr){
        const sortedArray = arr.sort((a,b) => a-b)
        const nonDuplicatesArray = [...new Set(sortedArray)].reverse()
        if (nonDuplicatesArray.length >= 2){
            return "Second largest number in linkedlist is ".concat(String(nonDuplicatesArray[1]))
        }
        else{
            return "There is no second largest number in linkedlist"
        }
    }
    
}


let a = prompt("Enter space seperated Numbers",)

let arr = a.trim().split(" ").map((num) => {
    return Number(num)
})

let linkedList = new LinkedList()

for (let itemNum of arr) {
    
    linkedList.append(itemNum)
}

let reverseLinkedList = linkedList.listReverse()
console.log('Reverse linkedlist', reverseLinkedList)



let secondLargestNumber = linkedList.secondLargest(arr)
console.log(secondLargestNumber)

