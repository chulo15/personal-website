    // kapag pinindut yung app iikot yung card tapos may text na kung ano na yung expertise example "intermidiate" "beginner" "advanced" "expert"
    document.addEventListener("DOMContentLoaded", function() {
        const texts = [
            "I'm an Information Technology Student.",
            "Welcome to my website!",
            "Feel free to explore!"
        ];
        const typingTextElement = document.getElementById("typing-text");
        let textIndex = 0;
        let charIndex = 0;
    
        function typeWriter() {
            if (charIndex < texts[textIndex].length) {
                typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 120);
            } else {
                // Pause before starting the next sentence
                setTimeout(() => {
                    charIndex = 0;
                    textIndex = (textIndex + 1) % texts.length; // Cycle through texts
                    typingTextElement.innerHTML = ""; // Clear text for the next sentence
                    typeWriter(); // Start typing next sentence
                }, 3000); // Pause duration between sentences
            }
        }
    
        setTimeout(typeWriter, 3500);
    });
