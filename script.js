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
        document.getElementById('r' + o).appendChild(div);
    }
}

function generate(){
   n=prompt("Width/height of the grid")
create(n)
}
function hover(){
  //  this.style.backgroundColor='green'
    a=this.className.split('b')[1]
    if(a<10){
        this.className= "square b"+(parseInt(a)+1)
    }
  console.log(getComputedStyle(this).getPropertyValue("filter"))
}
start();
