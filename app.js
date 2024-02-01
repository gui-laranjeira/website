const copyToClipboard = async (text) => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  
  const element = document.createElement('textarea');
  element.value = text;
  document.body.appendChild(element);

  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);  
  
  showModal();
  await delay(1000);   
  hideModal();
}

function showModal(){
  const modal = document.getElementById('myModal');
  modal.classList.add('show');
}

function hideModal(){
  const modal = document.getElementById('myModal');
  modal.classList.remove('show');
}