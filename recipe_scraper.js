
// Wait until DOM is ready
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};
  
ready(() => { 
    console.log('extension loaded')

    let list = document.querySelector('ul');
    console.log('list:', list)

    // helpers for DOM selections
    // let $savedRecipeListId = document.getElementById('savedList');
    // let $savedRecipeListClass = document.getElementsByClassName('savedList');
    // console.log($savedRecipeListId)
    // console.log($savedRecipeListClass)

    // ====================================
    // ==== handle click on add recipe item
    // ====================================
    document.getElementById("getContentBtn").addEventListener('click', () => {
        console.log("Popup DOM fully loaded and parsed");

        function modifyDOM() {
            
            console.log(document.body);
            

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

            return document.body.innerHTML;
        }

        // We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
        }, (results) => {
            //Here we have just the innerHTML and not DOM structure
            console.log('Popup script:')
            console.log(results[0]);

            console.log('execute script')
        });
    });

    document.getElementById("container").addEventListener('click', () => {
        console.log('item')
    })
});
