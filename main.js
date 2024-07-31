const words = ["Programmer", "Full-Stack Developer", "Roller Skater", "AI/ML Engineer", "Mythical Writer", "Business Owner"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 200; // milliseconds per character
const deletingSpeed = 100; // milliseconds per character

const typingTextElement = document.getElementById('main-title-2');

function type() {
    if (isDeleting) {
        currentWord = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        currentWord = words[wordIndex].substring(0, letterIndex + 1);
        letterIndex++;
    }

    typingTextElement.textContent = currentWord;

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        delay = 1000; // pause before start deleting
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500; // pause before start typing next word
    }

    setTimeout(type, delay);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', () => {
    type();
});





document.addEventListener("DOMContentLoaded", function() {
    const detailedinfo = document.getElementById('detailedinfo');
    const scrollDown = document.getElementById('scroll-down-control');
    const scrollUp = document.getElementById('scroll-up-control');

    function updateScrollIndicators() {
        const canScrollUp = detailedinfo.scrollTop > 0;
        const canScrollDown = detailedinfo.scrollTop + detailedinfo.clientHeight < detailedinfo.scrollHeight;

        // Update scroll up indicator
        if (canScrollUp) {
            scrollUp.classList.add('active');
        } else {
            scrollUp.classList.remove('active');
        }

        // Update scroll down indicator
        if (canScrollDown) {
            scrollDown.classList.add('active');
        } else {
            scrollDown.classList.remove('active');
        }
    }

    // Attach scroll event listener
    detailedinfo.addEventListener('scroll', updateScrollIndicators);

    // Initial update
    updateScrollIndicators();
});







document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            frontContent: 'CNN-Powered Image Classification Paradigm',
            backContent: 'Flower Species Image classification model utilizing Convolutional Neural Networks (CNNs) and supervised learning techniques to accurately predict and classify 700+ flower images based on a diverse dataset from Kaggle. Employed machine learning algorithms and data preprocessing methods to enhance model accuracy and efficiency.'
        },
        {
            frontContent: 'Data Intrusion Detection System',
            backContent: 'IDS model leveraging machine learning algorithms to identify and mitigate potential security breaches in real-time. The system utilizes a combination of supervised and unsupervised learning techniques to analyze network traffic and detect any deviations that were indicative of unauthorized access or malicious activity.'
        },
        {
            frontContent: 'ASL Articulation Translator with Text-To-Speech -- (In-Progress)',
            backContent: 'An innovative ASL (American Sign Language) translator that benefits both the Deaf/Hard of Hearing community and those wanting to learn ASL. It classifies hand gestures, converts them into visual and auditory outputs, and uses advanced image recognition and text-to-speech (TTS) to display and read the gestures.'
        },
        {
            frontContent: 'More Coming Soon...',
            backContent: '⇣ Since you clicked anyway ⇣ Riddle:\n' +
                '\n' +
                'I am observed with a single glance,\n' +
                'Found in a cup, given the chance.\n' +
                'Both a gaze and a drink, you\'ll see,\n' +
                'In the tech world, what could I be?\n' +
                'Contact me your answer😁'
        }
    ];

    const cardGrid = document.getElementById('card-grid');

    cardData.forEach(data => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardFrontFace = document.createElement('div');
        cardFrontFace.classList.add('card-face', 'card-front');
        cardFrontFace.textContent = data.frontContent;

        const cardBackFace = document.createElement('div');
        cardBackFace.classList.add('card-face', 'card-back');
        cardBackFace.textContent = data.backContent;

        cardContent.appendChild(cardFrontFace);
        cardContent.appendChild(cardBackFace);
        cardContainer.appendChild(cardContent);

        cardContainer.addEventListener('click', () => {
            cardContainer.classList.toggle('card-flipped');
        });

        cardGrid.appendChild(cardContainer);
    });
});
