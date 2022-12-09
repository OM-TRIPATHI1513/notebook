const addButton = document.querySelector("#add");

const updateLSData = () => {
  const textAreaData = document.querySelectorAll('textarea');
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(textAreaData);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
    <div class="operation">
  <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button></p>
    </div>
    <div class="main ${text ? "" : "hidden"} "> </div>
    <textarea class="text ${text ? "hidden" : ""}"></textarea>  `;

  note.insertAdjacentHTML("afterbegin", htmlData);

  const editbutton = note.querySelector('.edit');
  const delbutton = note.querySelector('.delete');
  const maindiv = note.querySelector('.main');
  const textArea = note.querySelector('.text');
  document.body.appendChild(note);

  textArea.value = text;
  textArea.innerHTML = text;

  // deleting node
  delbutton.addEventListener('click', () => {
    note.remove();
    updateLSData();
  });

  // toggle using edit buuton
  editbutton.addEventListener('click', () => {
    maindiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    updateLSData();
  })


  textArea.addEventListener('change', (event) => {
    const Value = event.target.value;
    console.log(Value);

  })
}

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => addNewNote(note)); }


addButton.addEventListener("click", () => addNewNote());