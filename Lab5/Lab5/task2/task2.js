
let calc = () =>{
    let radius = document.getElementById("radius").value;
    let vol = (4/3)* Math.PI * Math.pow(radius, 3);
    let volume = document.getElementById("volume");
    volume.value = vol.toFixed(2);
}