let player;

// === DOM ELEMENTS (GLOBAL DECLARATIONS) ===
// These will be assigned inside DOMContentLoaded
let videoBackground;
let videoPhaseUI;
let answerPhaseUI;
let videoProgressBar;
let questionTextDisplay;
let currentPlayerDisplay;
let answerButtonsElement;
let answerTimerBar;

let setupScreen;
let readyScreen;
let readyPlayerName;
let postRoundScreen;
let endScreen;
let playerCountInput;
let playerNamesContainer;
let setupForm;
let setupStartButton;
let roundOverTitle;
let roundScoresContainer;
let continueButton;
let endGameEarlyButton;
let winnerAnnouncement;
let finalScoresContainer;
let playAgainButton;
let playlistSelectionContainer;

let correctSound;
let wrongSound;

// === GAME STATE (GLOBAL) ===
let players = [];
let allQuestions = [];
let gameQuestions = [];
let totalQuestions = 0;
let currentRound = 1;
let currentPlayerIndex = 0;
let currentQuestionIndex = 0;
let countdownTimer;
let selectedPlaylist = 'songs.js';

let isDomReady = false;
let isPlayerReady = false;

// Function to check if both DOM and Player are ready, then initialize UI
function checkInitializationStatus() {
    if (isDomReady && isPlayerReady) {
        console.log("playlistSelectionContainer before initializeUI:", playlistSelectionContainer);
        console.log("Both DOM and YouTube Player are ready. Initializing UI.");
        initializeUI();
    }
}

// === YOUTUBE API ===
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%', width: '100%',
        playerVars: { 'playsinline': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'modestbranding': 1, 'iv_load_policy': 3, 'origin': window.location.origin },
        events: { 'onReady': onPlayerReady }
    });
}

function onPlayerReady() {
    console.log("YouTube Player is ready.");
    isPlayerReady = true;
    checkInitializationStatus();
}

// === SETUP & GAME FLOW (GLOBAL FUNCTIONS) ===
function loadPlaylist(file) {
    const old = document.querySelector(`script[src="${selectedPlaylist}"]`);
    if (old) old.remove();

    const script = document.createElement('script');
    script.src = file;
    script.onload = () => { allQuestions = [...questions]; };
    document.body.appendChild(script);
    selectedPlaylist = file;
}

function updatePlayerNameInputs() {
    const count = parseInt(playerCountInput.value, 10);
    playerNamesContainer.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Player ${i} Name`;
        input.className = 'player-name-input';
        input.required = true;
        playerNamesContainer.appendChild(input);
    }
}

// === UI Initialization (called once DOM and Player are ready) ===
function initializeUI() {
    console.log("playlistSelectionContainer at start of initializeUI:", playlistSelectionContainer);
    console.log("Initializing UI...");
    setupStartButton.disabled = false;
    setupStartButton.textContent = 'Start Game';
    loadPlaylist(selectedPlaylist);
    updatePlayerNameInputs(); // Ensure player name inputs are generated on load

    // Move all event listeners here
    console.log("playlistSelectionContainer before addEventListener:", playlistSelectionContainer);
    if (playlistSelectionContainer) { // Defensive check
        playlistSelectionContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('playlist-btn')) {
                const activeBtn = playlistSelectionContainer.querySelector('.active');
                if (activeBtn) activeBtn.classList.remove('active');
                e.target.classList.add('active');
                loadPlaylist(e.target.dataset.playlist);
            }
        });
    } else {
        console.error("playlistSelectionContainer is null or undefined during initializeUI.");
    }

    setupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        players = [];
        document.querySelectorAll('.player-name-input').forEach((input, i) => {
            players.push({ name: input.value || `Player ${i + 1}`, score: 0 });
        });
        startGame();
    });

    continueButton.addEventListener('click', startTurn);
    endGameEarlyButton.addEventListener('click', endGame);
    playAgainButton.addEventListener('click', () => location.reload());

    console.log("UI Initialized. DOM elements should be available now.");
    showOverlay('setup-screen'); // Show setup screen only after UI is fully initialized
}

// === SCREEN/UI MANAGEMENT ===
function showOverlay(overlayId) {
    document.querySelectorAll('.overlay').forEach(o => o.classList.remove('active'));
    if (overlayId) document.getElementById(overlayId).classList.add('active');
}

function setUIPhase(phase) { // 'video' or 'answer'
    videoPhaseUI.classList.toggle('active', phase === 'video');
    answerPhaseUI.classList.toggle('active', phase === 'answer');
    videoBackground.classList.toggle('shrunken', phase === 'answer');
}


function startGame() {
    currentQuestionIndex = 0;
    currentRound = 1;
    gameQuestions = [...allQuestions].sort(() => 0.5 - Math.random());
    totalQuestions = Math.floor(gameQuestions.length / players.length) * players.length;
    if (totalQuestions < players.length) return alert("Not enough questions!");
    showOverlay(null); // Hide all overlays
    setNextTurn();
}

function setNextTurn() {
    if (currentQuestionIndex >= totalQuestions) return endGame();
    if (currentQuestionIndex > 0 && currentQuestionIndex % players.length === 0) {
        currentRound++;
        showPostRoundScreen();
    } else {
        showReadyScreen(); // Show ready screen before each turn
    }
}

function showReadyScreen() {
    readyPlayerName.textContent = `${players[currentPlayerIndex].name}, get ready!`;
    showOverlay('ready-screen');
    setTimeout(startTurn, 3000); // Auto-transition after 3 seconds
}

function startTurn() {
    resetQuizState();
    showOverlay(null); // Hide ready screen
    setUIPhase('video');
    const question = gameQuestions[currentQuestionIndex];
    console.log("Inside startTurn - questionTextDisplay:", questionTextDisplay);
    console.log("Inside startTurn - currentPlayerDisplay:", currentPlayerDisplay);
    questionTextDisplay.textContent = question.video.questionText;
    currentPlayerDisplay.textContent = `${players[currentPlayerIndex].name}'s Turn`;
    playQuestionClip(question);
}

// === CORE QUIZ LOGIC ===
function playQuestionClip(question) {
    const DURATION = 12;
    videoProgressBar.style.transition = 'none';
    videoProgressBar.style.width = '0%';
    setTimeout(() => {
        videoProgressBar.style.transition = `width ${DURATION}s linear`;
        videoProgressBar.style.width = '100%';
    }, 100);

    // Ensure player is ready before loading video
    if (player && typeof player.loadVideoById === 'function') {
        console.log("Loading video:", question.videoId);
        player.loadVideoById({ videoId: question.videoId, startSeconds: question.video.startTime, endSeconds: question.video.startTime + DURATION });
        player.playVideo();
    } else {
        console.error("YouTube player not ready or loadVideoById is not a function.", player);
        // Fallback or error handling if player is not ready
        setTimeout(revealAnswersAndStartTimer, DURATION * 1000); // Proceed anyway after duration
        return;
    }

    setTimeout(revealAnswersAndStartTimer, DURATION * 1000);
}

function revealAnswersAndStartTimer() {
    player.pauseVideo();
    setUIPhase('answer');
    
    const question = gameQuestions[currentQuestionIndex];
    const shuffledAnswers = [...question.answers].sort(() => 0.5 - Math.random());
    answerButtonsElement.innerHTML = '';
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.className = 'btn';
        if (answer === question.correctAnswer) button.dataset.correct = true;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
    startAnswerCountdown();
}

function startAnswerCountdown() {
    const DURATION = 15;
    answerTimerBar.style.transition = 'none';
    answerTimerBar.style.width = '100%';
    setTimeout(() => {
        answerTimerBar.style.transition = `width ${DURATION}s linear`;
        answerTimerBar.style.width = '0%';
    }, 100);

    countdownTimer = setTimeout(handleTimeUp, DURATION * 1000);
}

function selectAnswer(e) {
    clearTimeout(countdownTimer);
    handleAnswer(e.target, e.target.dataset.correct === 'true');
}

function handleTimeUp() {
    handleAnswer(null, false, true);
}

function handleAnswer(selectedButton, isCorrect) {
    if (isCorrect) {
        players[currentPlayerIndex].score++;
        correctSound.currentTime = 0;
        correctSound.play();
    }
    else { 
        wrongSound.currentTime = 0; 
        wrongSound.play();
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct) button.classList.add('correct');
    });
    if (!isCorrect && selectedButton) selectedButton.classList.add('wrong');

    setTimeout(() => {
        currentQuestionIndex++;
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        setNextTurn();
    }, 2000);
}

// === END-GAME & POST-ROUND ===
function showPostRoundScreen() {
    roundOverTitle.textContent = `End of Round ${currentRound - 1}`;
    updateScoreDisplay(roundScoresContainer, players);
    showOverlay('post-round-screen');
}

function endGame() {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    const winners = sorted.filter(p => p.score === sorted[0].score);
    winnerAnnouncement.textContent = winners.length > 1 ? "It's a tie!" : `${winners[0].name} Wins!`;
    updateScoreDisplay(finalScoresContainer, sorted, winners.map(w => w.name));
    showOverlay('end-screen');
}

function updateScoreDisplay(container, playerList, highlighted = []) {
    container.innerHTML = '';
    playerList.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${p.name}</span><span>${p.score} Points</span>`;
        if (highlighted.includes(p.name)) li.classList.add('active-player');
        container.appendChild(li);
    });
}

function resetQuizState() {
    clearTimeout(countdownTimer);
}

// === EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', () => {
    // Assign DOM elements
    videoBackground = document.getElementById('video-background');
    videoPhaseUI = document.getElementById('video-phase-ui');
    answerPhaseUI = document.getElementById('answer-phase-ui');
    videoProgressBar = document.getElementById('video-progress-bar');
    questionTextDisplay = document.getElementById('question-text-overlay');
    currentPlayerDisplay = document.getElementById('current-player-turn');
    answerButtonsElement = document.getElementById('answer-buttons');
    answerTimerBar = document.getElementById('answer-timer-bar');
    setupScreen = document.getElementById('setup-screen');
    readyScreen = document.getElementById('ready-screen');
    readyPlayerName = document.getElementById('ready-player-name');
    postRoundScreen = document.getElementById('post-round-screen');
    endScreen = document.getElementById('end-screen');
    playerCountInput = document.getElementById('player-count');
    playerNamesContainer = document.getElementById('player-names-container');
    setupForm = document.getElementById('player-setup-form');
    setupStartButton = document.getElementById('setup-start-button');
    roundOverTitle = document.getElementById('round-over-title');
    roundScoresContainer = document.getElementById('round-scores-container');
    continueButton = document.getElementById('continue-button');
    endGameEarlyButton = document.getElementById('end-game-early-button');
    winnerAnnouncement = document.getElementById('winner-announcement');
    finalScoresContainer = document.getElementById('final-scores-container');
    playAgainButton = document.getElementById('play-again-button');
    playlistSelectionContainer = document.getElementById('playlist-selection');
    correctSound = document.getElementById('correct-sound');
    wrongSound = document.getElementById('wrong-sound');

    // Add event listener that was at the top level
    playerCountInput.addEventListener('input', updatePlayerNameInputs);

    // Signal that the DOM is ready
    isDomReady = true;
    checkInitializationStatus();
});