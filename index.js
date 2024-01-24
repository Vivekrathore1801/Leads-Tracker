let input=[]
const saveInp=document.getElementById("input-el")
const btnInp=document.getElementById("input-btn")
const listInp=document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const saveBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("input") )

if (leadsFromLocalStorage) {
    input = leadsFromLocalStorage
    renderinputs(input)
}

const tabs=[
    {url:"https://www.youtube.com/watch?v=jS4aFq5-91M&t=25204s"}
]


saveBtn.addEventListener("click", function(tabs){
    
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        
         input.push(tabs[0].url)
        localStorage.setItem("input", JSON.stringify(input) )
        renderinputs(input)
        
        // let activeTab = tabs[0]
        // var activeTabId = activeTab.id // or do whatever you need
   })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    input = []
    renderinputs()
})

btnInp.addEventListener("click",function(){
    input.push(saveInp.value)
     saveInp.value=""
     localStorage.setItem("input",JSON.stringify(input))
    // console.log(input)
    renderinputs()
 
})
function renderinputs(){
    let listitem=""
   for(let i=0;i<input.length;i++){
    // console.log(input[i])
    listitem += `
    <ul>
    <a target='_blank' href='${input[i]}'>
     ${input[i]} </a> 
    </ul>`
}
      listInp.innerHTML=listitem
}
