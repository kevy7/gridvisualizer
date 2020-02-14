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
            let parentIdx = Math.floor((currentIdx-1)/2);
            let parent = this.queue[parentIdx];

            if(currentNode.distance >= parent.distance) break;
            this.queue[parentIdx] = currentNode;
            this.queue[currentIdx] = parent;

            currentIdx = parentIdx;
        }
        
    }

    deQueue = () => {
        console.log("You executed this function!!!");
    }

}

export default priorityQueue;