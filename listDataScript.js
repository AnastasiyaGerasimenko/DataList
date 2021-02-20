"use strict"

class ListData {

  constructor(container) {
    this.URL = "https://jsonplaceholder.typicode.com/comments";
    this.countItem = 1;
    this.countPage = 1;

    this.listData = document.createElement('div');
    this.listData.setAttribute('class', 'list_data');
    container.appendChild(this.listData);
  }

  render() {
    this.loadMore();
    this.scrollList();
  }

  scrollList() {
    this.listData.addEventListener('scroll', () => {
      if (this.listData.scrollTop >= this.listData.offsetHeight * this.countPage) {
        this.countPage++;
        this.loadMore(3);
      }
    });
  }

  // loading additional items to the list
  loadMore(count = 6) {
    for (let i = 0; i < count; i++) {
      this.loadData();
      this.countItem++;
    }
  }

  // load data from server
  loadData() {
    fetch(this.URL + '/' + this.countItem)
      .then(response => response.ok ? response.json() : Promise.reject(response))
      .then(json => {
        this.createItemList(json);
      })
      .catch(() => console.log('some error'));
  }

  // create html item to the list
  createItemList(json) {
    let listItem = document.createElement('div');
    listItem.className = "list_data__item";
    this.createContentItem(listItem, "div", "list_data__item_name", json.name);
    this.createContentItem(listItem, "div", "list_data__item_email", json.email);
    this.createContentItem(listItem, "p", "list_data__item_comments", json.body);
    this.listData.appendChild(listItem);
  }

  // create content of the item
  createContentItem(container, tag, className, content) {
    let element = document.createElement(tag);
    element.className = className;
    element.textContent = content;
    container.appendChild(element);
  }
}