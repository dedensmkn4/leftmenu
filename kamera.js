

var menu450 = new Menu(null,null,450);
 var node = document.getElementById("foto1").getElementsByTagName("a");
 //mengambil link sebagai id
 for (i = 0; i < node.length; i++) {
 var padd = node[i].parentNode.style.paddingLeft;
 var id = node[i].getAttribute("href").match(/\\d+/)[0];
 if(padd==="8px"){
 eval("var menu"+id+" = new Menu(menu450,node[i].parentNode.parentNode,"+id+")");
 }
 if(padd==="40px"){
 eval("var menu"+id+" = new Menu(menu450.child[menu450.child.length - 1],node[i].parentNode.parentNode,"+id+")");
 }
 if(padd==="80px"){
 eval("var menu"+id+" = new Menu(menu450.child[menu450.child.length - 1].child[menu450.child[menu450.child.length - 1].child.length - 1],node[i].parentNode.parentNode,"+id+")");
 }
 }
 console.log(node);
