let v = document.getElementById('v')
        let i = document.getElementById('i')
        let b = document.getElementById('b')
        let g = document.getElementById('g')
        let y = document.getElementById('y')
        let o = document.getElementById('o')
        let r = document.getElementById('r')
        let body = document.getElementById('body')

        v.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Violet';
            v.style.border = 'none'
        })
        i.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Indigo';
            i.style.border = 'none'
        })
        b.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Blue';
            b.style.border = 'none'
        })
        g.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Green';
            g.style.border = 'none'
        })
        y.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Yellow';
            y.style.border = 'none'
        })
        o.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Orange';
            o.style.border = 'none'
        })
        r.addEventListener('mouseover' , ()=>{
            body.style.backgroundColor = 'Red';
            r.style.border = 'none'
        })