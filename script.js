$(document).ready(function() {

    // Artist data (in a real-world scenario, this would come from a database/API)
    const artists = [
        {
            name: "Cosmic Echoes",
            genre: "Psychedelic Rock",
            time: "Day 1 @ 9:00 PM",
            image: "cosmicechoeslogo.png",
            bio: "Cosmic Echoes blend vintage rock with futuristic synths to create a sound that's truly out of this world. Their live shows are known for mesmerizing visuals and powerful energy."
        },
        {
            name: "The Celestials",
            genre: "Indie Pop",
            time: "Day 2 @ 9:00 PM",
            image: "celestialslogo.png",
            bio: "With dreamy vocals and catchy hooks, The Celestials have taken the indie scene by storm. Their music explores themes of love, loss, and the vastness of the universe."
        },
        {
            name: "Aurora Haze",
            genre: "Synthwave",
            time: "Day 1 @ 7:30 PM",
            image: "aurorahazelogo.png",
            bio: "A solo artist known for her retro-futuristic soundscapes, Aurora Haze transports her audience back to the 80s with a modern twist. Expect neon lights and driving beats."
        },
        {
            name: "Saturn Rings",
            genre: "Acoustic Folk",
            time: "Day 2 @ 7:30 PM",
            image: "saturnringslogo.png",
            bio: "Saturn Rings delivers soulful performances with just a guitar and her powerful voice. Her lyrics are storytelling at its finest, weaving tales of adventure and introspection."
        }
    ];

    // Populate the artist lineup grid
    const lineupGrid = $('#lineup .row');
    artists.forEach((artist, index) => {
        const artistCard = `
            <div class="col-lg-3 col-md-6">
                <div class="card artist-card" data-index="${index}">
                    <img src="${artist.image}" class="card-img-top" alt="${artist.name}">
                    <div class="card-body">
                        <h5 class="card-title">${artist.name}</h5>
                        <p class="card-text">${artist.time}</p>
                    </div>
                </div>
            </div>
        `;
        lineupGrid.append(artistCard);
    });

    // Handle click event for artist cards to show modal
    $('.artist-card').on('click', function() {
        const artistIndex = $(this).data('index');
        const artist = artists[artistIndex];

        // Populate modal with artist data
        $('#artistName').text(artist.name);
        $('#artistImage').attr('src', artist.image);
        $('#artistBio').text(artist.bio);
        $('#artistGenre').text(artist.genre);
        $('#artistTime').text(artist.time);

        // Show the modal
        const artistModal = new bootstrap.Modal($('#artistModal'));
        artistModal.show();
    });

});