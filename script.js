document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content'); 
    const itemsPerPage = 2; 
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('li')).slice(0);
  
  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }
  
  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');
  
   
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
  
        content.appendChild(paginationContainer);
        paginationDiv.appendChild(pageButton);
      }
  }
  
  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
    createPageButtons(); 
    showPage(currentPage);

    document.getElementById('btn').onclick = myFunc;
    
    function myFunc() {
    alert('Статья принята к публикации!');
    

  }

  document.getElementById('btn1').onclick = myFunc;
    
    function myFunc() {
    alert('Статья принята к публикации!');
    

  }

  document.getElementById('btn2').onclick = myFunc;
    
    function myFunc() {
    alert('Статья принята к публикации!');
    

  }

  document.getElementById('btn3').onclick = myFunc;
    
    function myFunc() {
    alert('Статья принята к публикации!');
    

  }

  var hideModal=document.querySelector('#btnh');
  function hide() {
    let modal = document.querySelector('.options')
    modal.style.display='none';

  }
  hideModal.onclick=hide;

  var hideModal=document.querySelector('#btnh1');
  function hide1() {
    let modal = document.querySelector('.options1')
    modal.style.display='none';

  }
  hideModal.onclick=hide1;

  var hideModal=document.querySelector('#btnh2');
  function hide2() {
    let modal = document.querySelector('.options2')
    modal.style.display='none';

  }
  hideModal.onclick=hide2;

  var hideModal=document.querySelector('#btnh3');
  function hide3() {
    let modal = document.querySelector('.options3')
    modal.style.display='none';

  }
  hideModal.onclick=hide3;
    
  });

  