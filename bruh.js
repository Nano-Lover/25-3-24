const submit=document.getElementById("submit");
const what =document.getElementById("what");

submit.onclick(()=>{
    let height = document.getElementById("height");
    let mass  = document.getElementById("mass");
    let ca = height*height*0.428;
    let dragco=2*0.01/(985*100*ca);
    let n = 0;
    for (let c=0;c<height;c++){
        let v = 10*c + v;
        let drag=1/2*985*v*v*dragco*ca;
        v -= drag;
        height -= v;
        n = c;
    }
    what.innerHTML = n;
});
