console.log("loaded")

document.getElementById("change").addEventListener("click",()=>{
    console.log("clicked")
    let colors =["red", "green", "yellow", "orange", "blue","indigo","brown", "violet","pink"]
    let values =[100,200,300,400,500,600,700,800,900]
    let randomValue1 = Math.floor(Math.random()*values.length)
    let color1 = colors[randomValue1]
    let value1 = values[randomValue1]
    let randomValue2 = Math.floor(Math.random()*values.length)
    let color2 = colors[randomValue2]
    let value2 = values[randomValue2]
    let randomValue3 = Math.floor(Math.random()*values.length)
    let color3 = colors[randomValue3]
    let value3 = values[randomValue3]
    document.getElementById('body').className = `bg-gradient-to-r from-${color1}-${value1} via-${color2}-${value2} to-${color3}-${value3}`
    console.log("end")
})