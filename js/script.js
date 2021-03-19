let btnGetData = document.getElementById('pobierz-dane');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        mode: 'cors',
        method: 'GET'
    })
        .then(response => response.json()) //gdy dane zostaną pobrane - zamień response na jsona przy pomocy metody json
        .then(data => {
            let pUserId = document.createElement('p');
            let pId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pUserId.innerText = 'User ID: ' + data.userId;
            pId.innerText = 'ID: ' + data.id;
            pTitle.innerText = 'Title: ' + data.title;
            pBody.innerText = 'Body: ' + data.body;

            let divOutput = document.getElementById('wypisz-dane');

            divOutput.appendChild(pUserId);
            divOutput.appendChild(pId);
            divOutput.appendChild(pTitle);
            divOutput.appendChild(pBody);
            divOutput.appendChild(hr);
        });
}

btnGetData.addEventListener('click', getData);