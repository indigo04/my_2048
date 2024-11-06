!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=new/*#__PURE__*/(function(){var t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.initialState=t.map(function(t){return e(t)}),this.state=this.initialState.map(function(t){return e(t)}),this.score=0,this.status="idle"}return t=[{key:"moveLeft",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<4;e++){var r=this.merge(this.state[e]);r.toString()!==this.state[e].toString()&&(t=!0),this.state[e]=r}t&&this.spawn(),this.checkLose(),this.checkWin()}}},{key:"moveRight",value:function(){this.state=this.state.map(function(t){return t.reverse()}),this.moveLeft(),this.state=this.state.map(function(t){return t.reverse()})}},{key:"moveUp",value:function(){this.transpose(),this.moveLeft(),this.transpose()}},{key:"moveDown",value:function(){this.transpose(),this.moveRight(),this.transpose()}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state.map(function(t){return e(t)})}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.spawn(),this.spawn(),this.checkWin(),this.checkLose()}},{key:"restart",value:function(){this.state=this.initialState.map(function(t){return e(t)}),this.score=0,this.status="idle"}},{key:"spawn",value:function(){for(var t=[],e=0;e<4;e++)for(var r=0;r<4;r++)0===this.state[e][r]&&t.push({row:e,column:r});if(t.length>0){var n=t[Math.floor(Math.random()*t.length)],s=n.row,a=n.column;this.state[s][a]=.9>Math.random()?2:4}}},{key:"transpose",value:function(){for(var t=this.initialState.map(function(t){return e(t)}),r=0;r<4;r++)for(var n=0;n<4;n++)t[n][r]=this.state[r][n];this.state=t}},{key:"merge",value:function(t){for(var e=t.filter(function(t){return 0!==t}),r=0;r<e.length-1;r++)e[r]===e[r+1]&&(e[r]*=2,this.score+=e[r],e[r+1]=0);for(e=e.filter(function(t){return 0!==t});4!==e.length;)e.push(0);return e}},{key:"checkWin",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)2048===this.state[t][e]&&(this.status="win")}},{key:"checkLose",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.state[t][e])return;for(var r=0;r<4;r++)for(var n=0;n<4;n++)if(r<3&&this.state[r][n]===this.state[r+1][n]||n<3&&this.state[r][n]===this.state[r][n+1])return;this.status="lose"}}],function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(r.prototype,t),r}()),n=document.querySelectorAll(".field-cell"),s=document.querySelector(".button.start");function a(){for(var t=0,e=r.getState(),s=0;s<4;s++)for(var a=0;a<4;a++){var i=n[t];i.className="field-cell",e[s][a]?(i.textContent=e[s][a],i.classList.add("field-cell--".concat(e[s][a]))):i.textContent="",t++}document.querySelector(".game-score").textContent=r.getScore();var o=r.getStatus();"win"===o?document.querySelector(".message-win").classList.remove("hidden"):"lose"===o&&document.querySelector(".message-lose").classList.remove("hidden")}document.addEventListener("keydown",function(t){if("playing"===r.getStatus()){switch(t.key){case"ArrowLeft":r.moveLeft();break;case"ArrowRight":r.moveRight();break;case"ArrowUp":r.moveUp();break;case"ArrowDown":r.moveDown()}a()}}),s.addEventListener("click",function(){"button restart"===s.className&&r.restart(),r.start(),a(),document.querySelector(".message-win").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden"),document.querySelector(".message-start").classList.add("hidden"),s.textContent="Restart",s.className="button restart"})}();
//# sourceMappingURL=index.471a0e28.js.map
