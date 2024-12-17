document.addEventListener('DOMContentLoaded', function () {
    const roomImages = {
        livingroom: {
            image: '/img/livingroom.png',
            furniture: [
                { id: 'sofa', top: '62%', left: '55%', name_price: 'BOSNAS Sofa - $450' , dimension: 'Dimensions: 251x97x66' ,link: '/B/SG/furnitureCategory.html?cat=Sofas%20%26%20Chair'},
                { id: 'storageBox', top: '65%', left: '24%', name_price: 'ANTONIUS Storage Box - $40' , dimension: 'Dimensions: 32x34x32', link: '/B/SG/furnitureCategory.html?cat=Cabinets%20%26%20Storage' },
                { id: 'lamp', top: '52%', left: '87%', name_price: 'GALLO Lamp - $40' , dimension:'Dimensions: 60x12x12', link:'/B/SG/furnitureCategory.html?cat=Lightings' }
            ]
        },
        bedroom: {
            image: '/img/bedroom.png',
            furniture: [
                { id: 'lamp', top: '40%', left: '95%', name_price: 'GALLO Lamp - $40', dimension:'Dimensions: 60x12x12', link:'/B/SG/furnitureCategory.html?cat=Lightings' },
                { id: 'bed', top: '60%', left: '50%', name_price: 'BRIMNES Bed - $400', dimension: 'Dimensions: 47x206x158' , link: '/B/SG/furnitureCategory.html?cat=Beds%20%26%20Mattresses'},
                { id: 'storageBox', top: '78%', left: '105%', name_price: 'ANTONIUS Storage Box - $40' , dimension: 'Dimensions: 32x34x32', link: '/B/SG/furnitureCategory.html?cat=Cabinets%20%26%20Storage'},
            ]
        },
        bathroom: {
            image: '/img/bathroom.png',
            furniture: [
                { id: 'basin', top: '44%', left: '25%', name_price: 'TALLEVIKEN Basin - $90' , dimension: 'Dimensions: 43x45x11', link: '/B/SG/furnitureCategory.html?cat=Bathroom'},
                { id: 'storageBox', top: '72%', left: '6%', name_price: 'ANTONIUS Storage Box - $40' , dimension: 'Dimensions: 32x34x32', link: '/B/SG/furnitureCategory.html?cat=Cabinets%20%26%20Storage'},
                { id: 'waterTrap', top: '68%', left: '30%', name_price: 'LILLANGEN Water Trap - $30' , dimension: 'Dimensions: 50x25x20', link: '/B/SG/furnitureCategory.html?cat=Bathroom'}
            ]
        },
        studyroom: {
            image: '/img/studyroom.png',
            furniture: [
                { id: 'studyTable', top: '53%', left: '40%', name_price: 'STADJAN Study Table - $320' , dimension: 'Dimensions: 120x40x180', link: '/B/SG/furnitureCategory.html?cat=Study'},
                { id: 'storageBox', top: '77%', left: '77%', name_price: 'ANTONIUS Storage Box - $40' , dimension: 'Dimensions: 32x34x32', link: '/B/SG/furnitureCategory.html?cat=Cabinets%20%26%20Storage'},
                { id: 'lamp', top: '48%', left: '68%', name_price: 'GALLO Lamp - $40' , dimension:'Dimensions: 60x12x12', link:'/B/SG/furnitureCategory.html?cat=Lightings' }
            ]
        },
        kidroom: {
            image: '/img/kidroom.png',
            furniture: [
                { id: 'storageBox', top: '78%', left: '109%', name_price: 'ANTONIUS Storage Box - $40' , dimension: 'Dimensions: 32x34x32', link: '/B/SG/furnitureCategory.html?cat=Cabinets%20%26%20Storage'},
                { id: 'lamp', top: '40%', left: '5%', name_price: 'GALLO Lamp - $40' , dimension:'Dimensions: 60x12x12', link:'/B/SG/furnitureCategory.html?cat=Lightings'},
                { id: 'table', top: '78%', left: '60%', name_price: 'LINMON Table - $100' , dimension: 'Dimensions: 60x100x74', link: '/B/SG/furnitureCategory.html?cat=Tables%20%26%20Desks'},
                { id: 'rocking', top: '78%', left: '90%', name_price: 'ROCKING Toy - $27' , dimension: 'Dimensions: 29x73x52', link: '/B/SG/furnitureCategory.html?cat=Children'}
            ]
        }
    };

    const dropdown = document.getElementById('roomTypeDropdown');
    const imageContainer = document.getElementById('imageContainer');

    dropdown.addEventListener('change', function () {
        const selectedRoom = this.value;

        // Clear existing content
        imageContainer.innerHTML = '';

        if (selectedRoom && roomImages[selectedRoom]) {
            // Create the room image
            const imgElement = document.createElement('img');
            imgElement.src = roomImages[selectedRoom].image;
            imgElement.alt = selectedRoom + ' image';
            imgElement.classList.add('room-image');
            imageContainer.appendChild(imgElement);

            // Add furniture items with tooltips
            roomImages[selectedRoom].furniture.forEach(item => {
                const furnitureItem = document.createElement('div');
                furnitureItem.classList.add('furniture-item');
                furnitureItem.style.top = item.top;
                furnitureItem.style.left = item.left;

                // Add SVG icon
                furnitureItem.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 255.99414 255.99414">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(2.56,2.56)">
                    <circle cx="52" cy="52" r="44" fill="#080808" stroke="none" stroke-width="1" opacity="0.35"></circle>
                    <circle cx="50" cy="50" r="44" fill="#f2f2f2" stroke="none" stroke-width="1"></circle>
                    <path d="M50,91c-22.607,0 -41,-18.393 -41,-41c0,-22.607 18.393,-41 41,-41c22.607,0 41,18.393 41,41c0,22.607 -18.393,41 -41,41z" fill="#f2f2f2" stroke="none" stroke-width="1"></path>
                    <circle cx="50" cy="50" r="38.026" fill="#a00505" stroke="none" stroke-width="1"></circle>
                    <circle cx="50" cy="50" r="37.5" fill="none" stroke="#6e0303" stroke-width="3"></circle>
                    <g fill="#f2f2f2" stroke="none" stroke-width="1">
                        <path d="M50.025,39.346c-1.362,0 -2.408,-0.316 -3.139,-0.948c-0.729,-0.632 -1.094,-1.533 -1.094,-2.7c0,-1.199 0.365,-2.116 1.094,-2.748c0.731,-0.633 1.777,-0.95 3.139,-0.95c2.789,0 4.183,1.234 4.183,3.697c0,2.433 -1.394,3.649 -4.183,3.649zM50.025,68c-1.201,0 -2.117,-0.349 -2.749,-1.046c-0.633,-0.697 -0.948,-1.678 -0.948,-2.943v-16.637c0,-2.692 1.232,-4.038 3.697,-4.038c1.167,0 2.067,0.349 2.7,1.046c0.632,0.699 0.948,1.696 0.948,2.993v16.638c0,1.265 -0.31,2.246 -0.924,2.943c-0.617,0.695 -1.525,1.044 -2.724,1.044z"></path>
                    </g>
                </g>
            </g>
        </svg>
        <div class="tooltip">
            ${item.name_price} <br>
            ${item.dimension} <br>
            <a href="${item.link}" target="_blank" style="color: #ffcc00; text-decoration: underline;">Explore more designs</a>
        </div>
                `;

                imageContainer.appendChild(furnitureItem);
            });

            // Add decoration message
            const decorationMessage = document.createElement('p');
            decorationMessage.textContent = 'Disclaimer: Certain items are for display only and may not be available for purchase.';
            decorationMessage.classList.add('decoration-message');
            imageContainer.appendChild(decorationMessage);
        }
    });
});


