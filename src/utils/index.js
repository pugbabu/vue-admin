

export function generateOpenKeys (keyPath) {
  const openKeys = [];
  for (let i = 0, len = keyPath.length; i < len; i++) {
    let subMenu = '';
    for (let j = 0; j <= i; j++) {
      subMenu += '/' + keyPath[j];
    }
    openKeys.push(subMenu);
  }
  
  return openKeys;
}
