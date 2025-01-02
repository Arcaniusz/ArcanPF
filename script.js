document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const changingText = document.getElementById('changing-text');

    const welcomeMessages = [
        "Hola",
        "Witaj",
        "ようこそ",
        "欢迎",
        "Willkonmen",
    ];

    let currentIndex = 0;

    const changeText = () => {
        changingText.textContent = welcomeMessages[currentIndex];
        currentIndex = (currentIndex +1) % welcomeMessages.length;
    };

    const interval = setInterval(changeText, 250);

    setTimeout(() => {
        clearInterval(interval);
        welcomeScreen.style.display = 'none';
    }, 1250);    

    const contactBtn = document.querySelector('.contact-btn');
    const contactPopup = document.getElementById('contact-popup');
    const closeContactPopup = document.getElementById('close-contact-popup');
    const copyEmailBtn = document.getElementById('copy-email');
    const copySuccessMsg = document.getElementById('copy-success');

    contactBtn.addEventListener('click', () => {
        contactPopup.classList.remove('hidden')
    });

    closeContactPopup.addEventListener('click', () => {
        contactPopup.classList.add('hidden');
        copySuccessMsg.classList.add('hidden');
    });

    copyEmailBtn.addEventListener('click', () => {
        const email = "arcaniusz123@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            copyEmailBtn.textContent = "Copied!";
            copySuccessMsg.classList.remove('hidden');

            setTimeout(() => {
                copyEmailBtn.textContent = "Copy Email";
                copySuccessMsg.classList.add('hidden');
            }, 2000);
        });
    });

    const projects = document.querySelectorAll('.project');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
    const ImagesContainer = document.querySelector('.images');

    const projectImages = {
        'discord-bots': ['assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg'],
        'websites': ['assets/image4.jpg', 'assets/image5.jpg', 'assets/image6.jpg'],
        'drawings': ['assets/image7.jpg', 'assets/image8.jpg', 'assets/image9.jpg'],
    };

    const projectTexts = {
        'discord-bots' : {
            title: "Discord Bots",
            description: "I specialize in creating Discord bots that bring fresh energy and unique functionality to your community. Each bot is thoughtfully designed to match the specific needs and personality of your server, ensuring it blends seamlessly with your space. Whether you need tools for organization, entertainment, or server management, I deliver solutions that are both intuitive and tailored to your vision.",
        },
        'websites' : {
            title: "Websites",
            description: "I design elegant, minimalist websites that seamlessly combine aesthetics with functionality. Each project is crafted with care to reflect your unique identity and goals, ensuring your website stands out while remaining user-friendly and responsive. By focusing on clean layouts and intuitive design, I create digital experiences that leave a lasting impression.",
        },
        'drawings' : {
            title: "Drawings",
            description: "My anime-style artwork is a blend of creativity, attention to detail, and a deep commitment to bringing your ideas to life. Every piece is designed with you in mind, tailored to capture your vision and evoke the emotions you want to express. From dynamic characters to atmospheric scenes, each illustration is a personal, one-of-a-kind creation that tells your story with artistry and care.",
        },
    };

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const projectType = project.dataset.project;

            const images = projectImages[projectType];
            if (images) {
                ImagesContainer.innerHTML = '';
                images.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = 'Image for ${projectType}';
                    ImagesContainer.appendChild(img);
                });
            }

            const text = projectTexts[projectType];
            if (text) {
                document.getElementById('popup-title').textContent = text.title;
                document.getElementById('popup-description').textContent = text.description;
            }

            popup.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});

projects.forEach(project => {
    project.addEventListener('click', () => {
        const projectType = project.dataset.project;

        console.log("clicked project type:", projectType);

        const text = projectTexts[projectType];
        if (text) {
            console.log("Project Texts:", text);
            document.getElementById('popup-title').textContent = text.title;
            document.getElementById('popup-description').textContent = text.description;
        } else {
            console.error("no oppai text found for poject type:", projectType);
        }

        popup.classList.remove('hidden');
    });
});