export const saveToStorage = (key, value)=>{ 
    // Setting the key and value to local storage. So user select doesn't get called every time. 
        window.localStorage(key,value);
}
export const getFromStorage=(key)=>{
    window.localStorage.getItem(key);
}

