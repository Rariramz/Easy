export function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value || {}));
}

export function getObjectFromLocalStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return {};
    }
  };