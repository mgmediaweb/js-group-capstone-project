import Config from './config.js';
import showCounter from './counter.js';

const boardComment = document.getElementById('msjComments');

const showData = (data) => {
  let content = '';
  boardComment.innerHTML = '';

  document.getElementById('title-comment').innerHTML = `Comments (${showCounter(data)})`;

  if (data.length) {
    data.map((item) => {
      content += `<p>${item.creation_date} <span class="fw-bold"> ${item.username}: ${item.comment}</span></p>`;
      return true;
    });
  } else {
    content += '<p class="text-center py-3">No comments availables</p>';
  }

  boardComment.innerHTML = content;
};

const getData = async (item) => {
  const response = await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/comments?item_id=${item}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.status !== 400) {
    const results = await response.json();
    showData(results);
  }
};

const addData = async (item, name, comment) => {
  const sendInfo = {
    item_id: item,
    username: name,
    comment,
  };

  await fetch(`${Config.InvolveAPI}apps/${Config.InvolveID}/comments`, {
    method: 'POST',
    body: JSON.stringify(sendInfo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getData(item);
};

export default class Comments {
  constructor() {
    return null;
  }

  static add(id, name, comment) {
    addData(id, name, comment);
  }

  static get(id) {
    getData(id);
  }
}
