const taskFirst = () =>{
    var task = 'I prefer const when I can.';
    return task;
}
let getLast = () => {
    return ' is okay';
  }
let taskNext = () => {
    var combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
}

export {taskFirst,taskNext} 