:root {
  --esc: 1;
  --bg: #e4dfd3;
  --pap: #f6f3ec;
  --card: #fff;
  --ink: #1f1f1c;
  --mut: #5a574f;
  --ac: #c8372d;
  --onAc: #fff;
  --gr: #2d6a45;
  --onG: #fff;
  --line: #d3ccbc;
  --f1: #ece4d2;
  --f2: #f6f1e4;
  box-sizing: border-box;
}

:root[data-alto="1"] {
  --bg: #000;
  --pap: #000;
  --card: #000;
  --ink: #fff;
  --mut: #fff;
  --ac: #ffe600;
  --onAc: #000;
  --gr: #000;
  --onG: #ffe600;
  --line: #fff;
  --f1: #000;
  --f2: #1c1c1c;
}

* {
  box-sizing: border-box;
}

html {
  font-size: calc(100% * var(--esc));
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  background: var(--bg);
  color: var(--ink);
  font-family: "DM Sans", sans-serif;
  display: flex;
  justify-content: center;
}

h1, h2, h3 {
  font-family: Archivo, sans-serif;
  margin: 0;
}

button, input {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

#app {
  position: relative;
  width: 100%;
  max-width: 26rem;
  height: 100%;
  max-height: 52rem;
  margin: auto;
  background: var(--pap);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

:root[data-alto="1"] #app {
  border: 2px solid #fff;
}

@media (min-width: 480px) {
  #app {
    height: 94%;
    border: 1px solid var(--line);
  }
}

#devSplash {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #0d1117;
  color: #3fb950;
  font-family: 'Fira Code', monospace, sans-serif;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

#devSplash.esconder {
  display: none;
}

.splash-header {
  font-size: 0.75rem;
  color: #8b949e;
  border-bottom: 1px solid #30363d;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  margin: auto 0;
}

.logo-dev {
  width: 90px;
  height: 90px;
  background: #161b22;
  border: 2px solid #30363d;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dev-logs {
  width: 100%;
  font-size: 0.8rem;
  background: #161b22;
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid #30363d;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.3rem;
  color: #58a6ff;
}

.dev-logs .ok {
  color: #3fb950;
}

.splash-footer {
  font-size: 0.7rem;
  color: #8b949e;
  text-align: center;
}

.view {
  display: none;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
}

.view.on {
  display: flex;
}

.btn {
  min-height: 2.75rem;
  padding: .5rem 1rem;
  border: 2px solid var(--ink);
  background: var(--card);
  border-radius: 6px;
  font-weight: 700;
  text-decoration: none;
  color: var(--ink);
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn.p {
  background: var(--ac);
  color: var(--onAc);
  border-color: var(--ac);
}

.topo {
  background: var(--gr);
  color: var(--onG);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 3px solid var(--ac);
}

.topo h1 { font-size: 1.5rem; }
.topo p { margin: 0; font-size: .9rem; }
.topo .btn { background: transparent; color: var(--onG); border-color: var(--onG); font-size: .85rem; }

.filtros {
  padding: .6rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  align-items: center;
  font-size: .85rem;
}

.filtros .btn {
  min-height: 2.4rem;
  padding: .2rem .8rem;
  font-size: .85rem;
  border-radius: 99px;
}

.filtros .btn.ativo {
  background: var(--ink);
  color: var(--pap);
}

.cidade {
  position: relative;
  flex: 1;
  min-height: 16rem;
}

.cidade svg {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}

.pin {
  cursor: pointer;
}

.pin.off {
  opacity: .25;
}

#tip {
  display: none;
  position: absolute;
  width: 10.5rem;
  background: var(--card);
  border: 2px solid var(--ink);
  border-radius: 6px;
  padding: .5rem;
  font-size: .8rem;
  z-index: 3;
}

.st {
  color: var(--ac);
}

.cards {
  display: flex;
  gap: .6rem;
  overflow-x: auto;
  padding: .6rem 1rem 1rem;
}

.mini {
  flex: 0 0 9.5rem;
  text-align: left;
  background: var(--card);
  border: 2px solid var(--line);
  border-radius: 6px;
  padding: .5rem .7rem;
}

.mini.off {
  opacity: .35;
}

.mini small {
  display: block;
  color: var(--mut);
}

.hero {
  position: relative;
  padding: 1rem;
  min-height: 12rem;
  background-size: cover;
  background-position: center;
}

.hero .btn {
  position: absolute;
  top: .8rem;
  left: .8rem;
  z-index: 2;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(0deg, var(--pap) 0%, rgba(0,0,0,0) 70%);
}

.det {
  padding: 1rem;
  position: relative;
  z-index: 1;
}

.det h2 { font-size: 1.5rem; }
.end { color: var(--mut); margin: .2rem 0 1rem; }

.nota {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7rem 0;
  border-bottom: 1px solid var(--line);
  font-weight: 700;
}

.acoes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .6rem;
  margin-top: 1.2rem;
}

.cab {
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .8rem 1rem;
}

.plan {
  flex: 1;
  min-height: 20rem;
  margin: 0 .8rem .8rem;
  border: 2px solid var(--ink);
  border-radius: 6px;
  overflow: hidden;
}

.plan svg {
  display: block;
  width: 100%;
  height: 100%;
}

.rota {
  fill: none;
  stroke: var(--ac);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 2 10;
  animation: fl 1s linear infinite;
}

@keyframes fl {
  to { stroke-dashoffset: -12; }
}

:root[data-mov="1"] * {
  animation: none !important;
  transition: none !important;
}

.tabs {
  display: none;
  border-top: 2px solid var(--ink);
  background: var(--card);
}

.tabs.on {
  display: flex;
}

.tabs button {
  flex: 1;
  min-height: 3.2rem;
  border: 0;
  background: none;
  font-size: .75rem;
  font-weight: 700;
  border-right: 1px solid var(--line);
  padding: .3rem .1rem;
}

.tabs button.on {
  background: var(--ink);
  color: var(--pap);
}

#lista {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  background: var(--card);
  border-top: 3px solid var(--ac);
  padding: 1rem;
  display: none;
  z-index: 5;
  max-height: 78%;
  overflow: auto;
}

#lista.on {
  display: block;
}

.lh {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.prog {
  height: .6rem;
  background: var(--line);
  margin: .5rem 0 .3rem;
}

.prog i {
  display: block;
  height: 100%;
  background: var(--gr);
}

.item {
  display: flex;
  align-items: center;
  gap: .6rem;
  padding: .55rem .4rem;
  font-weight: 700;
  border-bottom: 1px solid var(--line);
}

.item.sel {
  background: var(--f1);
}

.item.ok span {
  text-decoration: line-through;
  color: var(--mut);
}

.item span { flex: 1; }
.item small { color: var(--mut); font-weight: 400; }

.lin {
  display: flex;
  gap: .5rem;
  margin-top: .6rem;
}

input[type=text] {
  flex: 1;
  min-width: 0;
  min-height: 2.75rem;
  padding: .4rem .8rem;
  border: 2px solid var(--ink);
  border-radius: 6px;
  background: var(--card);
}

.pg { padding: 1rem; }
.pg h2 { font-size: 1.4rem; margin-bottom: .6rem; }

#res {
  list-style: none;
  margin: .5rem 0 0;
  padding: 0;
}

#res button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: left;
  background: var(--card);
  border: 0;
  border-bottom: 1px solid var(--line);
  padding: .8rem .5rem;
}

.cats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .6rem;
  margin-top: 1rem;
}

.cat {
  border: 0;
  border-radius: 6px;
  padding: 1rem .5rem;
  font-weight: 700;
  color: #fff;
  min-height: 3.5rem;
}

.sw {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: .9rem 0;
  border-bottom: 1px solid var(--line);
  font-weight: 500;
}

.tam {
  display: flex;
  gap: .5rem;
  margin: .5rem 0 1rem;
}

.tam .btn { flex: 1; }

#chat {
  flex: 1;
  overflow: auto;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: .6rem;
  min-height: 12rem;
}

.msg {
  max-width: 88%;
  padding: .6rem .8rem;
  background: var(--card);
  border: 2px solid var(--line);
  border-radius: 4px 14px 14px 14px;
}

.msg.eu {
  align-self: flex-end;
  background: var(--gr);
  color: var(--onG);
  border-color: var(--gr);
  border-radius: 14px 4px 14px 14px;
}

.ing {
  margin: .5rem 0;
  display: flex;
  flex-direction: column;
  gap: .3rem;
}

.ing label {
  display: flex;
  gap: .5rem;
  align-items: center;
  min-height: 2rem;
}

.sug {
  display: flex;
  gap: .5rem;
  overflow-x: auto;
  padding: .4rem 1rem;
}

.sug .btn {
  white-space: nowrap;
  min-height: 2.4rem;
  font-size: .85rem;
  border-radius: 99px;
}

.vazio {
  padding: .8rem .5rem;
  color: var(--mut);
}
