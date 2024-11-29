import JSConfetti from "js-confetti"

const jsConfetti = new JSConfetti()

setInterval(() => {
    const currentDate = new Date();
    if (currentDate.getHours() === currentDate.getUTCMinutes()) {
        jsConfetti.addConfetti({
            emojis: ['🌈', '🦄', '⚡️', '💥', '✨', '💫', '🌸'],
            emojiSize: 30,
            confettiNumber: 20,
        })
    }
}, 1000)