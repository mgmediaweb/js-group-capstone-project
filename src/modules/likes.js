import Config from './config.js';

export const loadLikes = async () => {
    const response = await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/likes`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(response.status != 400) {
        const results = await response.json();
        results.map(item => {
            //console.log(item);
            if(item.item_id != null) {
                document.getElementById(`likes${item.item_id}`).innerHTML = `${item.likes} Likes`;
            }
        });
    }
}

export const setLikes = async item => {
    const sendInfo = {
        item_id: item
    }    

    const response = await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/likes?item_id=${item}`, {
        method: 'POST',
        body: JSON.stringify(sendInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    setTimeout(loadLikes(), 1000);
    
}