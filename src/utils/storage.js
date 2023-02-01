
// Checks to see if local storage is avaialable before calling the rest
const isLocalStorageAvailable = () => {
    try {
      const testKey = '__some_random_key_you_are_not_using__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // setting up cookie fallback in the case the local storage is not available
  
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }


  // Each function is set to fallback on cookies in the case local storage fails.
  
  export const saveToStorage = (key, value) => { 
      if(isLocalStorageAvailable()){
          window.localStorage.setItem(key, value);
      } else {
          setCookie(key, value, 365);
      }
  }
  
  export const getFromStorage = (key) => {
      if(isLocalStorageAvailable()){
          return window.localStorage.getItem(key);
      } else {
          return getCookie(key);
      }
  }
  