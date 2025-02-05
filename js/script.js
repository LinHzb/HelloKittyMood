function shareMood(mood) {
    const moods = {
        happy: {
            text: 'Feliz',
            music: 'https://link-da-musica-feliz.com'
        },
        sad: {
            text: 'Triste',
            music: 'https://link-da-musica-triste.com'
        },
        calm: {
            text: 'Calma',
            music: 'https://link-da-musica-calma.com'
        },
        stressed: {
            text: 'Estressada',
            music: 'https://link-da-musica-estressada.com'
        },
        cranky: {
            text: 'A Manivela',
            music: 'https://link-da-musica-a-manivela.com'
        }
    };

    const selectedMood = moods[mood];
    if (selectedMood) {
        const message = `Estou me sentindo ${selectedMood.text}! Confira esta música da Chapel Roan: ${selectedMood.music}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        console.error('Humor não encontrado:', mood);
    }
}
