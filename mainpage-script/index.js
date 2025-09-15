document.querySelector('.js-sideBarIcon').addEventListener('click',()=>{
  document.querySelector('.sideBar').classList.add('displaySideBar')
})
document.querySelector('.js-closeSideBar').addEventListener('click',()=>{
  document.querySelector('.sideBar').classList.remove('displaySideBar')
})
bo