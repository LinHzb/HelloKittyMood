function shareMood(mood) {
    const moods = {
        happy: {
            text: 'Feliz',
            music: 'https://www.youtube.com/watch?v=dLoJGzpkMVo'
        },
        sad: {
            text: 'Triste',
            music: 'https://www.youtube.com/watch?v=dLoJGzpkMVo'
        },
        calm: {
            text: 'Calma',
            music: 'https://www.youtube.com/watch?v=dLoJGzpkMVo'
        },
        stressed: {
            text: 'Estressada',
            music: 'https://www.youtube.com/watch?v=dLoJGzpkMVo'
        },
        cranky: {
            text: 'A Manivela',
            music: 'https://www.youtube.com/watch?v=dLoJGzpkMVo'
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
