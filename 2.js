javascript:void(function(global){'use strict';console.clear();
 var o=global, p='domsnapshot'+(new Date().getTime()), $=((p in o)?o[p]:(o[p]={

	nuovafinestra:(function(w1){
		var w=w1, apri=w.open,l=w.location.href;
		return function(i,c){
			var p=l+i, o=$, w=o[p];
			console.log(w);
			if(w===undefined){
				$[p]=1;
				console.log(1);
			}else{
				console.log(2);
			};
		


		};
	})(o),

	f:function(w1){
		var nf=this.nuovafinestra,w2=nf(2,function(xxx){
			console.dir(xxx);
			console.log(3);
		});
	}

 }));
 $.f(o);
}(window));


//
javascript:void(function(global){'use strict';
 var o=global,p='domsnapshot'+(new Date().getTime()),f=p in o;
 (f=f?o[p]:(o[p]={
	
	nuovafinestra:(function(w1){
		var ns=this, w=w1, apri=w.open,l=w.location.href;
		return function(i,g){
			var o=ns , p=l+i, x=o[p], f=function(e){g(e);};
			if(x && x.closed===false){
				f()
			}else{
				x=o[p]=apri(l,p);
				x.addEventListener('load',f);
			};
			return x;
		};
	})(o),

//x.removeEventListener('load',f);


	f:function(w1){
		var f=this.nuovafinestra,
		w2=f(2,function(d2){

			console.dir(d2);
			console.log(2);
		});

	}

 })).f(o);
}(window));



		w1.clearTimeout(w1.TimeoutB);
		w1.TimeoutB=w1.setTimeout(function(){alert(2);w2=apri('B');},1000);








			var w$2=load$2.target, d$2=w$2.document,
			//e=d1.createDocumentFragment().appendChild(d1.documentElement.cloneNode(true));
			//e.normalize();

		var w1=$,
		d1=w1.document,

			e=d2.replaceChild(e,d2.documentElement);
			w2.removeEventListener('load',load2);



		console.dir(e);









function(thewindow){
	var w=thewindow,$f=function(evt){
		var $=(evt===false)?w:evt.target,

		apri=)($),
			var w=o, f=w.open,l=
			return function(s){return f('data:text/html,<!DOCTYPE html>',l+'_'+s);};


		w1=apri('A'),
		w2=null;



		$.removeEventListener('load',$f);
		$.focus();
	};
	if(w.document.readyState==='complete'){$f(false);}else{w.addEventListener('load',$f);};
 }







//(function(e){return })()

/*
	document.children[0] //HTMLCollection
encodeURIComponent('<!DOCTYPE html>')

open('data:text/html,<title>w1</title>','A'),
encodedLocation$1=o.encodeURIComponent(o.location);

		d$1=o.document;
		console.log('\nwindow:',o,'\ndocument:',d$1);


+(new Date().getTime())

(function(){})();

function(){}
thewindow
global
alert(1);
$d=w1.document,
*/



