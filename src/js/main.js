let tree = document.getElementsByTagName('ul')[0];
let treeLi = tree.getElementsByTagName('li');

for (let i = 0; i < treeLi.length; i++) {
  let li = treeLi[i];  
  let span = document.createElement('span');
  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

tree.onclick = function(event) {
  let target = event.target;  
  if (target.tagName != 'SPAN') {
    return;
  }  
  let children = target.parentNode.getElementsByTagName('ul')[0];
  if (!children) {
       return; 
  }  
  children.hidden =  !children.hidden; 
}