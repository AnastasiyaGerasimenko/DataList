"use strict" 

{
  const CONTAINER = document.querySelector('.container');
  const ADD = document.getElementById('add');

  let listData = new ListData(CONTAINER);
  listData.render();
  
  ADD.addEventListener('click', () => {
    let listData = new ListData(CONTAINER);
    listData.render();
  })
}