const listsContainer = document.querySelector('[data-lists]');

let lists = ['Youtube', 'Grocery'];

function render() {
    // <li class="list-name">Work</li>
    clearElement(listsContainer);
    lists.forEach(list => {
        let listElement = document.createElement('li');
        listElement.classList.add('list-name');
        listElement.innerText = list;
        listsContainer.appendChild(listElement);
    });
}

function clearElement(element) {
    while(element.firstChild) {
        element.remove(element.firstChild);
    }
}

render();