function choice(arr){
    const Index = Math.floor(Math.random() * arr.length)
    return arr[Index]
}


function remove(items,item){
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            items.splice(i,1)
            return item
        }
    }
}

export {choice,remove}