// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentIndex = 0;
    let knownCards = new Set();
    const allData = (typeof questions !== 'undefined' ? questions : (window.flashcardData || []));
    
    // Helper to shuffle an array
    function shuffleArray(array) {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }

    let currentData = shuffleArray(allData); // Filtered and randomized data

    // Elements
    const flashcard = document.getElementById('flashcard');
    const questionText = document.getElementById('question-text');
    const answerText = document.getElementById('answer-text');
    const topicBadge = document.getElementById('topic-badge');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const markKnownBtn = document.getElementById('mark-known-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const topicFilter = document.getElementById('topic-filter');

    // Populate topic filter
    const uniqueTopics = [...new Set(allData.map(item => item.topic || 'General'))].sort();
    uniqueTopics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });

    // A simple markdown to HTML parser for basic formatting in answers
    function parseMarkdown(text) {
        if (!text) return '';
        let html = text
            // Code blocks
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            // Inline code
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Bold
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            // Newlines
            .replace(/\n/g, '<br>');
        
        return html;
    }

    function updateCard() {
        if (currentData.length === 0) {
            questionText.textContent = "No questions in this topic.";
            answerText.innerHTML = "";
            topicBadge.textContent = "N/A";
            updateProgress();
            return;
        }
        
        // Reset flip
        flashcard.classList.remove('is-flipped');
        
        // Brief timeout to allow un-flip animation before changing text
        setTimeout(() => {
            if (currentData.length === 0) return;
            const card = currentData[currentIndex];
            questionText.textContent = card.question;
            answerText.innerHTML = parseMarkdown(card.answer);
            topicBadge.textContent = card.topic || "General";
            
            // Update known button state
            if (knownCards.has(card.id)) {
                markKnownBtn.textContent = "Known ✓";
                markKnownBtn.style.opacity = "0.7";
            } else {
                markKnownBtn.textContent = "Mark as Known";
                markKnownBtn.style.opacity = "1";
            }
        }, 150);

        updateProgress();
    }

    function updateProgress() {
        const total = currentData.length;
        // Count known cards within currentData
        const knownCount = currentData.filter(card => knownCards.has(card.id)).length;
        const percent = total === 0 ? 0 : (knownCount / total) * 100;
        
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `${knownCount} / ${total} Completed (Card ${total > 0 ? currentIndex + 1 : 0} of ${total})`;
    }

    // Filter Logic
    topicFilter.addEventListener('change', (e) => {
        const selectedTopic = e.target.value;
        if (selectedTopic === 'all') {
            currentData = shuffleArray(allData);
        } else {
            const filtered = allData.filter(card => (card.topic || 'General') === selectedTopic);
            currentData = shuffleArray(filtered);
        }
        currentIndex = 0; // Reset index when filter changes
        updateCard();
    });

    // Event Listeners
    flashcard.addEventListener('click', () => {
        if (currentData.length > 0) {
            flashcard.classList.toggle('is-flipped');
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < currentData.length - 1) {
            currentIndex++;
            updateCard();
        }
    });

    markKnownBtn.addEventListener('click', () => {
        if (currentData.length === 0) return;
        
        const currentId = currentData[currentIndex].id;
        if (knownCards.has(currentId)) {
            knownCards.delete(currentId);
        } else {
            knownCards.add(currentId);
            // Optionally auto-advance
            setTimeout(() => {
                if (currentIndex < currentData.length - 1 && flashcard.classList.contains('is-flipped')) {
                    currentIndex++;
                    updateCard();
                }
            }, 500);
        }
        updateCard();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                updateCard();
            }
        } else if (e.key === 'ArrowRight') {
            if (currentIndex < currentData.length - 1) {
                currentIndex++;
                updateCard();
            }
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (currentData.length > 0) {
                flashcard.classList.toggle('is-flipped');
            }
        }
    });

    // Initialize
    updateCard();
});
