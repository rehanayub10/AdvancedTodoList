const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
//use of namespace - prevents you from overwriting info already in local storage, and other websites from overwriting
//our local storage keys. Don't have to worry about collisions.

function render() {
    // <li class="list-name">Work</li>
    clearElement(listsContainer);
    lists.forEach(list => {
        let listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add('list-name');
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement);
    });
}

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName === null || listName === '') return;
    const list = createList(listName);
    lists.push(list);
    newListInput.value = null;

    save();
    render();
});

function createList(name) {
    //was planning on using chance.guid() instead
    return { id: Date.now().toString(), name: name, tasks: [] };
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
}

function clearElement(element) {
    while(element.firstElementChild) {
        element.remove(element.firstElementChild);
    }
}

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
window.onload = render;
localStorage.clear();