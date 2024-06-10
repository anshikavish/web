document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const resultsContainer = document.getElementById('results');

    const clothes = [
        { name: 'T-Shirt', image: 'https://via.placeholder.com/150', price: 'Rs 600' },
        { name: 'Jeans', image: 'https://via.placeholder.com/150', price: 'Rs 800' },
        { name: 'Kurtas', image: 'https://via.placeholder.com/150', price: 'Rs 1000' },
        { name: 'Dress', image: 'https://via.placeholder.com/150', price: 'Rs 1200' },
        { name: 'Sarees', image: 'https://via.placeholder.com/150', price: 'Rs 1000' },
        // Add more clothes as needed
    ];

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim().toLowerCase();

        resultsContainer.innerHTML = '';

        if (query.length > 3) {
            const filteredClothes = clothes.filter(cloth => cloth.name.toLowerCase().includes(query));
            
            if (filteredClothes.length > 0) {
                filteredClothes.forEach(cloth => {
                    const clothCard = document.createElement('div');
                    clothCard.className = 'bg-white p-4 rounded shadow-md';
                    clothCard.innerHTML = `
                        <img src="${cloth.image}" alt="${cloth.name}" class="w-full h-40 object-cover rounded">
                        <h3 class="mt-2 text-xl font-semibold">${cloth.name}</h3>
                        <p class="text-gray-600">${cloth.price}</p>
                    `;
                    resultsContainer.appendChild(clothCard);
                });
            } else {
                resultsContainer.innerHTML = '<p class="text-center text-gray-500">No results found.</p>';
            }
        }
    });
});