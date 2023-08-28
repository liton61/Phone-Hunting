function loadPhone(searchPhone) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

function displayPhone(data) {
    // console.log(data);
    const phonContainer = document.getElementById('phone-container');
    phonContainer.textContent = '';
    const showBtnContainer = document.getElementById('show-btn-container');
    if (data.length > 12) {
        showBtnContainer.classList.remove('hidden')
    }
    else {
        showBtnContainer.classList.add('hidden')
    }
    data = data.slice(0, 12);

    data.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `
        <div class="card">
        <div class="img-container">
        <img src="${phone.image}" alt="...">
        </div>
        <div class="card-body">
            <h3 class="card-title">${phone.brand}</h3>
            <p>${phone.phone_name}</p>
            <div class="btn-container">
            <a href="#" class="details-btn">Details</a>
            </div>
        </div>
    </div>
        `;
        phonContainer.appendChild(phoneCard)

    });

}

const searchBtn = () => {
    const inputField = document.getElementById('input-field');
    const searchPhone = inputField.value;
    // console.log(inputValues);
    loadPhone(searchPhone)

    inputField.value = '';
}

// loadPhone();