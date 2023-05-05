
const dayBtn = document.getElementById('dailyWork')
const weekBtn = document.getElementById('weeklyWork')
const monthBtn = document.getElementById('monthlyWork')

const dailyWork = document.querySelectorAll('.daily')
const weeklyWork = document.querySelectorAll('.weekly')
const monthlyWork = document.querySelectorAll('.monthly')

/* console.log(weeklyWork)
console.log(dayBtn.firstChild) */

dayBtn.addEventListener('click', ()=>{    
    monthBtn.firstChild.style.color = "inherit";
    weekBtn.firstChild.style.color = "inherit";
    dayBtn.firstChild.style.color = "white";
    
    dailyWork.forEach( dailyClassBox =>{
        dailyClassBox.style.display= "flex";
    })
    weeklyWork.forEach(weeklyClassBox =>{
        weeklyClassBox.style.display= "none";
    })
    monthlyWork.forEach(monthlyClassBox =>{
        monthlyClassBox.style.display= "none";
    })

    console.log('daily Btn is clicked')
})

weekBtn.addEventListener('click', ()=>{
    monthBtn.firstChild.style.color = "inherit";
    weekBtn.firstChild.style.color = "white";
    dayBtn.firstChild.style.color = "inherit";
    
    dailyWork.forEach( dailyClassBox =>{
        dailyClassBox.style.display= "none";
    })
    weeklyWork.forEach(weeklyClassBox =>{
        weeklyClassBox.style.display= "flex";
    })
    monthlyWork.forEach(monthlyClassBox =>{
        monthlyClassBox.style.display= "none";
    })

    console.log('weekly Btn is clicked')
})

monthBtn.addEventListener('click', ()=>{
    monthBtn.firstChild.style.color = "white";
    weekBtn.firstChild.style.color = "inherit";
    dayBtn.firstChild.style.color = "inherit";
    
    dailyWork.forEach( dailyClassBox =>{
        dailyClassBox.style.display= "none";
    })
    weeklyWork.forEach(weeklyClassBox =>{
        weeklyClassBox.style.display= "none";
    })
    monthlyWork.forEach(monthlyClassBox =>{
        monthlyClassBox.style.display= "flex";
    })

    console.log('monthly Btn is clicked')
})

console.log(weekBtn)