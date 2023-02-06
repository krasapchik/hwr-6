
const div = document.createElement('div')
const body = document.querySelector('body')
body.appendChild(div)
const ul = `
<button onclick = "btn('a')" class="s">a</button>
<button onclick ="btn('b')" class="s">b</button>
<button onclick = "btn('c')" class="s">c</button>
<button class="s" onclick="btn('d')">d</button>`

div.innerHTML = ul

function btn(str){
console.log(`вы нажали на кнопку ${str}`)

}