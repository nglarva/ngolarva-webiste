const btnOpen = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal_footer button')
const iconClose = document.querySelector('.modal_header i')
function toggleModal() {
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
iconClose.addEventListener('click',toggleModal)
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget){
        toggleModal()
    }
})