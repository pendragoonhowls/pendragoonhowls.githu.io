document.addEventListener('DOMContentLoaded', function () {
    const giftSection = document.getElementById('gift-section');

    // Sample gift data
    const gifts = [
        { name: 'Happy Birthday', description: 'Tolong di camkan ya yang aku tulis disini.', link: 'https://drive.google.com/file/d/1aLBQ5DJ1f0dlFwrksuAdZGP4Pk87aa1Q/view?usp=sharing' },
        { name: 'Its Been a Year', description: 'Masih inget gaksih? Kok aneh ya.', link: 'https://heyzine.com/flip-book/b195040613.html' },
        { name: 'To This Person', description: 'Sejujurnya ini orang nyebelin banget.', link: 'https://drive.google.com/file/d/11EQVTane4d9-KM6i6NYeMI8A4d-GC2k6/view?usp=drivesdk' },
        { name: "You Can Open This When You're Feelin Down", description: 'Cuman boleh dibuka sesuai sama tulisan di atas.', link: 'https://drive.google.com/file/d/1HD9Esxf1lHEVVExrGn27lBFusyXr8_we/view?usp=sharing' },
        { name: 'Thank You 🖤', description: 'Dibukanya kapan kapan aja.', link: 'https://drive.google.com/file/d/1FlytleE4GldBsGCuLD2w-fW-Sn22HEo7/view?usp=drivesdk' },
        // Add more gift items as needed
    ];

    // Function to create a gift option
    function createGiftOption(gift) {
        const option = document.createElement('div');
        option.classList.add('gift-option');
        option.innerHTML = `
            <h3 class="gift-title">${gift.name}</h3>
            <p class="gift-description">${gift.description}</p>
        `;
        giftSection.appendChild(option);

        // Add click event listener to the gift option
        option.addEventListener('click', function () {
            window.location.href = gift.link; // Navigate to the specified HTML page
        });
    }

    // Populate gift options
    gifts.forEach(createGiftOption);
});
