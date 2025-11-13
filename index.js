const taskInput = document.querySelector("#taskInput"),
  addbtn = document.querySelector("#addBtn"),
  tasklist = document.querySelector(".taskList")

addbtn.addEventListener("click",()=>{
  const input = taskInput.value
  tasklist.innerHTML += `
  <p>${input}</p>
                <div class="btns">
                    <button class="g">✅</button>
                    <button class="y">✏</button>
                    <button class="r">🗑</button>
                </div>
  `
  taskInput.value =''
})  