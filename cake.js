var num1=300 , num2=100 , num3=200 , num4=250 , num5=350;
var total=0;
let i=0;
let x=0;


function chocolate() {
    if((i<5)&&(x==0))
    {
    total += num1 
    let a = document.createElement('p')
    a.innerHTML='Chocolate ---- 300'
    document.getElementById('fs2').appendChild(a)
    let aa = document.createElement('div')
    aa.style.backgroundColor='#5e2c04'
    aa.style.height='30px'
    if(i==0)
    {
    aa.style.width= '150px'
    }
    else if(i==1)
    {
    aa.style.width= '130px'    
    }
    else if(i==2)
    {
    aa.style.width= '110px'    
    }
    else if(i==3)
    {
    aa.style.width= '90px'    
    }
    else if(i==4)
    {
    aa.style.width= '70px'    
    }
    i++
    aa.style.borderRadius ='4px'
    aa.style.margin = 'auto'
    document.getElementById('div2').appendChild(aa)
}}

function strawberry() {
    if((i<5)&&(x==0)){
    total += num2
    let b = document.createElement('p')
    b.innerHTML='Strawberry ---- 100' 
    document.getElementById('fs2').appendChild(b)
    let bb = document.createElement('div')
    bb.style.backgroundColor='#ff66cc'
    bb.style.height='35px'
    if(i==0)
    {
    bb.style.width= '150px'
    }
    else if(i==1)
    {
    bb.style.width= '130px'    
    }
    else if(i==2)
    {
    bb.style.width= '110px'    
    }
    else if(i==3)
    {
    bb.style.width= '90px'    
    }
    else if(i==4)
    {
    bb.style.width= '70px'    
    }
    i++
    bb.style.borderRadius ='4px'
    bb.style.margin = 'auto'
    document.getElementById('div2').appendChild(bb)
}}

function butterscotch() {
    if((i<5)&&(x==0)){
    total += num3
    let c = document.createElement('p')
    c.innerHTML='Butterscotch ---- 200' 
    document.getElementById('fs2').appendChild(c)
    let cc = document.createElement('div')
    cc.style.backgroundColor='#fcae1e'
    cc.style.height='35px'
    if(i==0)
    {
    cc.style.width= '150px'
    }
    else if(i==1)
    {
    cc.style.width= '130px'    
    }
    else if(i==2)
    {
    cc.style.width= '110px'    
    }
    else if(i==3)
    {
    cc.style.width= '90px'    
    }
    else if(i==4)
    {
    cc.style.width= '70px'    
    }
    i++
    cc.style.borderRadius ='4px'
    cc.style.margin = 'auto'
    document.getElementById('div2').appendChild(cc)
}}

function vanilla() {
    if((i<5)&&(x==0)){
    total += num4
    let d = document.createElement('p')
    d.innerHTML='Vanilla ---- 250' 
    document.getElementById('fs2').appendChild(d)
    let dd = document.createElement('div')
    dd.style.backgroundColor='#fdfaf1'
    dd.style.height='35px'
    if(i==0)
    {
    dd.style.width= '150px'
    }
    else if(i==1)
    {
    dd.style.width= '130px'    
    }
    else if(i==2)
    {
    dd.style.width= '110px'    
    }
    else if(i==3)
    {
    dd.style.width= '90px'    
    }
    else if(i==4)
    {
    dd.style.width= '70px'    
    }
    i++
    dd.style.borderRadius ='4px'
    dd.style.margin = 'auto'
    document.getElementById('div2').appendChild(dd)
}}

function redvelvet() {
    if((i<5)&&(x==0)){
    total += num5
    let e = document.createElement('p')
    e.innerHTML='RedVelvet ---- 350' 
    document.getElementById('fs2').appendChild(e)
    let ee = document.createElement('div')
    ee.style.backgroundColor='#ca3433'
    ee.style.height='35px'
    if(i==0)
    {
    ee.style.width= '150px'
    }
    else if(i==1)
    {
    ee.style.width= '130px'    
    }
    else if(i==2)
    {
    ee.style.width= '110px'    
    }
    else if(i==3)
    {
    ee.style.width= '90px'    
    }
    else if(i==4)
    {
    ee.style.width= '70px'    
    }
    i++
    ee.style.borderRadius ='4px'
    ee.style.margin = 'auto'
    document.getElementById('div2').appendChild(ee)
}}

function buy(){
    if(x==0){
    var img = new Image ()
    img.id = 'candle'
    img.src = 'https://cdn-icons.flaticon.com/png/512/4719/premium/4719945.png?token=exp=1649856211~hmac=31d896fc5ba3add6308418560c8c987e'
    document.getElementById('div2').appendChild(img)
    let f = document.createElement('p')
    f.innerHTML = 'Total Bill = ' + total
    f.style.backgroundColor = 'orange'
    document.getElementById('fs2').appendChild(f)
    x++
}}
