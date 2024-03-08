function start() {
    create(16);
}

function create(n) {
    let rt = Math.floor(Math.sqrt(n));
    let o = 0;

    for (let i = 0; i < n; i++) {
        if (i % rt === 0) {
            o++;
            let row = document.createElement('div');
            row.className = 'row';
            row.id = 'r' + o;
            document.getElementById('container').appendChild(row);
        }

        let div = document.createElement('div');
        div.className = 'square';
        document.getElementById('r' + o).appendChild(div);
    }
}

start();
