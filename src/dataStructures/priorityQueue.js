class priorityQueue {
    constructor(){
        this.queue = [] //We'll push our nodes into this queue
    }

    addQueue = (node) => {
        this.queue.push(node);

        //Bubble the node up based on priority, meaning distance
        let currentIdx = this.queue.length - 1;
        let currentNode = this.queue[currentIdx];

        while(currentIdx > 0){
            //console.log(currentIdx);
            let parentIdx = Math.floor((currentIdx-1)/2);
            let parent = this.queue[parentIdx];

            if(currentNode.distance > parent.distance) break;
            this.queue[parentIdx] = currentNode;
            this.queue[currentIdx] = parent;

            currentIdx = parentIdx;
        }

        let fake = [];
        
        this.queue.forEach(element => {
            fake.push(element);
        })

        /* console.log("enQueue");
        console.log(fake);
        console.log("new node");
        console.log(node); */
        //console.log("add");
    }

    deQueue = () => {
        //console.log("deQueue initialized");
        let firstPriority = this.queue[0];
        let lastPriority = this.queue.pop(); //This should be trickled down

        if(this.queue.length > 0){
            this.queue[0] = lastPriority;
            this.sinkDown();
        }

        return firstPriority;
    }

    sinkDown = () => {
        let currentIdx = 0;
        let length = this.queue.length;
        let currentNode = this.queue[0];

        while(true){
            //Find the current Node's childs
            let leftidx = 2 * currentIdx + 1; //check if these are out of bounds
            let rightidx = 2 * currentIdx + 2;
            let left, right;
            let swap = null;

            if(leftidx < length){
                left = this.queue[leftidx];
                if(currentNode.distance > left.distance){
                    swap = leftidx;
                }
            }
            if(rightidx < length){
                right = this.queue[rightidx];
                if(
                    (currentNode.distance > right.distance && swap === null) 
                    || 
                    (swap !== null && right.distance < left.distance )){
                        swap = rightidx;
                }
            }

            if(swap === null) break;
            let childNode = this.queue[swap];
            this.queue[currentIdx] = childNode;
            this.queue[swap] = currentNode;
            currentIdx = swap;

        }
    }

}

export default priorityQueue;