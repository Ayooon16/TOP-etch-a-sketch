function start() {
    create(16);
}

function create(n) {
    document.getElementById("container").innerHTML = ""
    let rt = n;
    let o = 0;
    n=rt*rt;
    for (let i = 0; i < n; i++) {
        if (i % rt === 0) {
            o++;
            let row = document.createElement('div');
            row.className = 'row';
            row.id = 'r' + o;
            document.getElementById('container').appendChild(row);
        }

        let div = document.createElement('div');
        div.className = 'square b1';
        div.onmouseover = hover.bind(div)
        if(document.getElementById("colors").checked){
           // div.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
        }
        document.getElementById('r' + o).appendChild(div);
    }
}

function generate(){
   n=prompt("Width/height of the grid")
create(n)
}
function hover(){
    if(document.getElementById("colors").checked){
   this.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16)
    }
    a=this.className.split('b')[1]
    if(a<11){
        this.className= "square b"+(parseInt(a)+1)
    }
  console.log(getComputedStyle(this).getPropertyValue("filter"))
}
start();
