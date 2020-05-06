/**
 * skylark-threejs-editor - A version of threejs-editor that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-threejs-editor/
 * @license MIT
 */
define([],function(){function i(i,t,n,e,s){this._listener=t,this._isOnce=n,this.context=e,this._signal=i,this._priority=s||0}function t(i,t){if("function"!=typeof i)throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",t))}function n(){this._bindings=[],this._prevParams=null;var i=this;this.dispatch=function(){n.prototype.dispatch.apply(i,arguments)}}i.prototype={active:!0,params:null,execute:function(i){var t,n;return this.active&&this._listener&&(n=this.params?this.params.concat(i):i,t=this._listener.apply(this.context,n),this._isOnce&&this.detach()),t},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},n.prototype={VERSION:"1.0.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(t,n,e,s){var r,h=this._indexOfListener(t,e);if(-1!==h){if((r=this._bindings[h]).isOnce()!==n)throw new Error("You cannot add"+(n?"":"Once")+"() then add"+(n?"Once":"")+"() the same listener without removing the relationship first.")}else r=new i(this,t,n,e,s),this._addBinding(r);return this.memorize&&this._prevParams&&r.execute(this._prevParams),r},_addBinding:function(i){var t=this._bindings.length;do{--t}while(this._bindings[t]&&i._priority<=this._bindings[t]._priority);this._bindings.splice(t+1,0,i)},_indexOfListener:function(i,t){for(var n,e=this._bindings.length;e--;)if((n=this._bindings[e])._listener===i&&n.context===t)return e;return-1},has:function(i,t){return-1!==this._indexOfListener(i,t)},add:function(i,n,e){return t(i,"add"),this._registerListener(i,!1,n,e)},addOnce:function(i,n,e){return t(i,"addOnce"),this._registerListener(i,!0,n,e)},remove:function(i,n){t(i,"remove");var e=this._indexOfListener(i,n);return-1!==e&&(this._bindings[e]._destroy(),this._bindings.splice(e,1)),i},removeAll:function(){for(var i=this._bindings.length;i--;)this._bindings[i]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(i){if(this.active){var t,n=Array.prototype.slice.call(arguments),e=this._bindings.length;if(this.memorize&&(this._prevParams=n),e){t=this._bindings.slice(),this._shouldPropagate=!0;do{e--}while(t[e]&&this._shouldPropagate&&!1!==t[e].execute(n))}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var e=n;return e.Signal=n,e});
//# sourceMappingURL=../sourcemaps/utils/signals.js.map