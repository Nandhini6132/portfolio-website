"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9884],{9884:(e,i,t)=>{t.d(i,{BaseMover:()=>a});var n=t(4864);class a{async init(e){const i=e.options.move.gravity;e.gravity={enable:i.enable,acceleration:(0,n.qS)(i.acceleration),inverse:i.inverse};const{initSpin:a}=await t.e(2588).then(t.bind(t,2588));a(e),await Promise.resolve()}isEnabled(e){return!e.destroyed&&e.options.move.enable}async move(e,i){var a,o,r,s,c;const l=e.options,v=l.move;if(!v.enable)return;const d=e.container,p=d.retina.pixelRatio;null!==(o=(a=e.retina).moveSpeed)&&void 0!==o||(a.moveSpeed=(0,n.qS)(v.speed)*p),null!==(s=(r=e.retina).moveDrift)&&void 0!==s||(r.moveDrift=(0,n.qS)(e.options.move.drift)*p);const{getProximitySpeedFactor:m}=await t.e(2588).then(t.bind(t,2588)),b=m(e),u=e.retina.moveSpeed*d.retina.reduceFactor,f=e.retina.moveDrift,S=(0,n.GO)(l.size.value)*p,w=u*(v.size?e.getRadius()/S:1)*b*(i.factor||1)/2,h=null!==(c=e.retina.maxSpeed)&&void 0!==c?c:d.retina.maxSpeed;if(v.spin.enable){const{spin:i}=await t.e(2588).then(t.bind(t,2588));i(e,w)}else{const{move:n}=await t.e(2588).then(t.bind(t,2588));await n(e,v,w,h,f,i)}const{applyDistance:y}=await t.e(2588).then(t.bind(t,2588));y(e)}}}}]);
//# sourceMappingURL=9884.31af10ea.chunk.js.map