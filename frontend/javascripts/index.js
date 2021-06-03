document.addEventListener('DOMContentLoaded', event => {
    const renderJewelryForm = () => {
        const form = document.getElementsByTagName('form');
        debugger
        form.hidden = false;
        return form;
    }
    let personalizeLink = document.getElementById('personalize-link');
    personalizeLink.addEventListener('click', e => {
        renderJewelryForm(jewelryForm())
    })
})