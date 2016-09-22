<script>// <![CDATA[
function Menu (parent,nodes,id){
this.parent = parent;
this.node = nodes;
this.child = [];
this.mark = 0;
this.id = id;
//tambahkan object ini ke parent
if (parent){parent.child.push(this);}

this.show = function(){

 if(this.parent){
	this.mark = 1;
	parent.show();
 }
 else{
 this.expand();
 }
};

this.expand = function(){
 
 var i = 0;
 do {
 this.child[i].collapse();
 if(this.child[i].mark == 1){
 if(this.child[i].child.length > 0){ this.child[i].expand()}
 }
 i++;
 }
 while (i < this.child.length);
 
};

this.collapse = function(){
this.node.classList.remove("hidden");
};

this.topbrand = function(){
 
 if(document.getElementById(("topbrand"+this.id.toString()))){
 document.getElementById(("topbrand"+this.id.toString())).classList.remove("hidden")
 }
 else{
 if(this.parent){
 parent.topbrand();
 }
 }
};
this.panduan = function(){
 
 if(document.getElementById(("panduan"+this.id.toString()))){
 document.getElementById(("panduan"+this.id.toString())).classList.remove("hidden")
 }
 else{
 if(this.parent){
 parent.panduan();
 }
 }
};
}
// ]]></script>
<script>// <![CDATA[
var menu450 = new Menu(null,null,450);
 var node = document.getElementById("foto1").getElementsByTagName("a");
 //mengambil link sebagai id
 for (i = 0; i < node.length; i++) {
 var padd = node[i].parentNode.style.paddingLeft;
 var id = node[i].getAttribute("href").match(/\d+/)[0];
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
// ]]></script>
