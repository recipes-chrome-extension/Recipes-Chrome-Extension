function modifyDOM(docu) {
            
    console.log(docu.body);
    

    // an array of h1 nodes
    const titleNodesArr = document.querySelectorAll("h1");

    // creates a list item, content parameter is used as text content
    const createMenuItem = content => {
        let li = document.createElement('li');
        li.textContent = name;
        return li;
    }

    
    // iterates through h1 array
    if (titleNodesArr.length) {

        let title = titleNodesArr[0];

        let list = document.querySelector('ul')
        console.log(list)

        list.appendChild(createMenuItem(title));

        for (let i = 0; i < titleNodesArr.length; i++) {
            console.log('inner html', titleNodesArr[i].innerText);
        }
    }

    return docu.body.innerHTML;
}

modifyDOM(document);