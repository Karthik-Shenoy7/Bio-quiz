// Biology Quiz Application JavaScript - Fully Fixed Version
class BiologyQuiz {
    constructor() {
        // Question bank from provided data
        this.questionBank = [
            {"id": 1, "question": "The nose of the redesigned Shinkansen bullet train is inspired by", "options": ["Kingfisher beak", "Crane beak", "Owl beak", "Heron beak"], "correct": 0},
            {"id": 2, "question": "Passive cooling in skyscrapers is inspired by", "options": ["Termite Mounds", "Earthwork Mounds", "Ant Mounds", "Spiro Mounds"], "correct": 0},
            {"id": 3, "question": "Belt movement of military tanks was inspired by", "options": ["Caterpillar Movement", "Termite Movement", "Ant Movement", "Butterfly Movement"], "correct": 0},
            {"id": 4, "question": "The gene from ____________ was used to develop genetically modified corn", "options": ["Bacillus thuringiensis", "Bacillus cereus", "Bacillus subtilis", "Bacillus anthracis"], "correct": 0},
            {"id": 5, "question": "Protein produced by Bacillus thuringiensis which has insecticide property is", "options": ["Cry Protein", "Res Protein", "Try Protein", "Taf Protein"], "correct": 0},
            {"id": 6, "question": "_______is a pollution control technique using a bioreactor containing living material", "options": ["Biofiltration", "Bioaugmentation", "Bioleaching", "Biomimetics"], "correct": 0},
            {"id": 7, "question": "A nanoparticle is a small particle that ranges between ____________", "options": ["1 to 100 nm", "1 to 100 mm", "1-1000 nm", "1-10 µm"], "correct": 0},
            {"id": 8, "question": "The tensile strength of carbon nanotubes is approximately ___ times greater than steel", "options": ["100", "10", "25", "50"], "correct": 0},
            {"id": 9, "question": "Who first used the term nanotechnology and when", "options": ["Norio Taniguchi, 1974", "Richard Feynman, 1959", "Eric Drexler, 1986", "Alexander Fleming, 1940"], "correct": 0},
            {"id": 10, "question": "The prefix nano comes from ______ word nanos which means dwarf", "options": ["Greek", "French", "Spanish", "Latin"], "correct": 0},
            {"id": 11, "question": "Prokaryotic cell size ranges from ____________ in diameter", "options": ["0.1 to 5.0 μm", "0.1 to 50 μm", "10 to 50 μm", "2 to 10 μm"], "correct": 0},
            {"id": 12, "question": "_____________do not have a true nucleus and membrane-bound organelles", "options": ["Prokaryotic cells", "Eukaryotic cells", "Plant cells", "Animal cells"], "correct": 0},
            {"id": 13, "question": "____________ protein is important constituent of eukaryotic chromosomes", "options": ["Histone", "Heme", "Cistone", "Diastone"], "correct": 0},
            {"id": 14, "question": "The asexual mode of division in prokaryotes is by", "options": ["Binary fission", "Conjugation", "Ligation", "Mitosis"], "correct": 0},
            {"id": 15, "question": "__________ can be used to observe virus", "options": ["Electron Microscope", "Light Microscope", "Naked eye", "Fluorescent microscope"], "correct": 0},
            {"id": 16, "question": "Cell wall of bacterial cell is composed of", "options": ["Peptidoglycan", "Protein", "Cellulose", "Chitin"], "correct": 0},
            {"id": 17, "question": "Gram Positive bacteria have thick layer of ___________", "options": ["Peptidoglycan", "Chitin", "Mannose", "Teichoic Acid"], "correct": 0},
            {"id": 18, "question": "__________ needs to enter a living thing to perform its only function, which is to replicate", "options": ["Virus", "Bacteria", "Fungi", "Yeast"], "correct": 0},
            {"id": 19, "question": "Which of the following is a eukaryotic cell?", "options": ["Protozoan", "Virus", "Bacteria", "None of these"], "correct": 0},
            {"id": 20, "question": "The cell wall is present in", "options": ["Only plant cells", "Only animal cells", "Plant and animal cells", "Protozoans"], "correct": 0},
            {"id": 21, "question": "Cell membrane is made up of", "options": ["Phospholipid bilayer", "Phospholipid trilayer", "Glycolipid layer", "Phospholipid layer"], "correct": 0},
            {"id": 22, "question": "___________ positions the organelles in a cell", "options": ["Cytoskeleton", "Cytoplasm", "Cell membrane", "Cell wall"], "correct": 0},
            {"id": 23, "question": "The function of ribosomes is _____", "options": ["Protein synthesis", "Chromatin synthesis", "Endoplasmic reticulum synthesis", "Enzyme synthesis"], "correct": 0},
            {"id": 24, "question": "In eukaryotic cells DNA is ________", "options": ["Linear", "Circular", "Irregular", "Flat"], "correct": 0},
            {"id": 25, "question": "The molecule that functions as energy for cells is ________", "options": ["Adenosine Tri Phosphate", "Adenosine Di Phosphate", "Adenosine Mono Phosphate", "Adenosine Phosphate"], "correct": 0},
            {"id": 26, "question": "Fatty acids with no double bonds are ________", "options": ["Saturated", "Unsaturated", "Transaturated", "Cisaturated"], "correct": 0},
            {"id": 27, "question": "The general formula for carbohydrates is ___", "options": ["Cn(H2O)n", "Cn+1(H2O)n", "Cn(H2nO)n", "Cn+1(H2nO)n2"], "correct": 0},
            {"id": 28, "question": "Amino acids are joined by _______ bonds", "options": ["Peptide bond", "Phosphodiester bond", "Hydroxyl bond", "Amine bond"], "correct": 0},
            {"id": 29, "question": "In RNA, the nitrogenous base __________ is replaced by uracil", "options": ["Thymine", "Adenine", "Guanine", "Cytosine"], "correct": 0},
            {"id": 30, "question": "The strands of DNA run _______ to each other", "options": ["Anti-parallel", "Parallel", "Obtuse", "Horizontal"], "correct": 0},
            {"id": 31, "question": "What is the source of energy for photosynthesis to take place?", "options": ["Light", "ATP", "Water", "Oxygen"], "correct": 0},
            {"id": 32, "question": "Calvin's cycle takes place in the _______", "options": ["Stroma", "Thylakoids", "Grana", "Chlorophyll"], "correct": 0},
            {"id": 33, "question": "The process by which cell breaks down glucose to give ATP is _______", "options": ["Respiration", "Photosynthesis", "Mitosis", "Meiosis"], "correct": 0},
            {"id": 34, "question": "In aerobic respiration, one glucose molecule releases _____ molecules of ATP", "options": ["38", "2", "22", "18"], "correct": 0},
            {"id": 35, "question": "Glucose breaks down to form two pyruvate molecules in _", "options": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Photosynthesis"], "correct": 0},
            {"id": 36, "question": "Which of the following is not a step in mitosis?", "options": ["Interphase", "Prophase", "Metaphase", "Anaphase"], "correct": 0},
            {"id": 37, "question": "Cell grows and prepares for mitosis in ________ step", "options": ["Interphase", "Prophase", "Metaphase", "Anaphase"], "correct": 0},
            {"id": 38, "question": "After cell division the divided cells are referred to as _______ cells", "options": ["Daughter", "Son", "Offspring", "Product"], "correct": 0},
            {"id": 39, "question": "In cytokinesis ________", "options": ["Two daughter cells are formed", "Two chromosomes are formed", "Chromatids divide", "Spindle fibres are formed"], "correct": 0},
            {"id": 40, "question": "In photosynthesis raw materials are _______", "options": ["Carbon dioxide and water", "Oxygen and water", "Hydrogen and water", "Carbon dioxide and Oxygen"], "correct": 0}
        ];

        // Admin credentials
        this.adminCredentials = {
            username: "WHITEDEV",
            password: "HAREKRSNA"
        };

        // Quiz state
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.studentName = '';
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.results = null;

        // Wait for DOM to be fully ready before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing Biology Quiz...');
        this.loadQuizData();
        this.setupEventListeners();
        this.showScreen('welcomeScreen');
        
        // Focus the name input after a brief delay
        setTimeout(() => {
            const nameInput = document.getElementById('studentName');
            if (nameInput) {
                nameInput.focus();
                console.log('Name input focused');
            }
        }, 500);
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Welcome screen
        this.setupWelcomeScreen();
        
        // Quiz navigation
        this.setupQuizNavigation();

        // Results and review screens
        this.setupResultsScreen();
        this.setupReviewScreen();

        // Admin functionality
        this.setupAdminPanel();
    }

    setupWelcomeScreen() {
        const startQuizBtn = document.getElementById('startQuiz');
        const nameInput = document.getElementById('studentName');
        
        if (startQuizBtn) {
            startQuizBtn.onclick = () => {
                console.log('Start quiz clicked');
                this.startQuiz();
            };
            console.log('Start quiz button listener attached');
        }
        
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.startQuiz();
                }
            });
            
            // Ensure input is working
            nameInput.addEventListener('input', (e) => {
                console.log('Name input changed:', e.target.value);
            });
        }
    }

    setupQuizNavigation() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        
        if (prevBtn) {
            prevBtn.onclick = () => {
                console.log('Previous question clicked');
                this.navigateQuestion(-1);
            };
        }
        
        if (nextBtn) {
            nextBtn.onclick = () => {
                console.log('Next question clicked');
                this.navigateQuestion(1);
            };
        }
        
        if (submitBtn) {
            submitBtn.onclick = () => {
                console.log('Submit quiz clicked');
                this.submitQuiz();
            };
        }
    }

    setupResultsScreen() {
        const reviewBtn = document.getElementById('reviewAnswers');
        const retakeBtn = document.getElementById('retakeQuiz');
        
        if (reviewBtn) {
            reviewBtn.onclick = () => {
                console.log('Review answers clicked');
                this.showReviewScreen();
            };
        }
        
        if (retakeBtn) {
            retakeBtn.onclick = () => {
                console.log('Retake quiz clicked');
                this.retakeQuiz();
            };
        }
    }

    setupReviewScreen() {
        const backToResultsBtn = document.getElementById('backToResults');
        
        if (backToResultsBtn) {
            backToResultsBtn.onclick = () => {
                console.log('Back to results clicked');
                this.showResults();
            };
        }
    }

    setupAdminPanel() {
        const adminGear = document.getElementById('adminGear');
        const closeAdminBtn = document.getElementById('closeAdminModal');
        const cancelAdminBtn = document.getElementById('cancelAdminLogin');
        const adminLoginBtn = document.getElementById('adminLogin');
        const adminLogoutBtn = document.getElementById('adminLogout');
        const exportBtn = document.getElementById('exportData');
        const adminModal = document.getElementById('adminModal');
        const adminPasswordInput = document.getElementById('adminPassword');
        
        if (adminGear) {
            adminGear.onclick = () => {
                console.log('Admin gear clicked');
                this.showAdminModal();
            };
            console.log('Admin gear listener attached');
        }
        
        if (closeAdminBtn) {
            closeAdminBtn.onclick = () => this.hideAdminModal();
        }
        
        if (cancelAdminBtn) {
            cancelAdminBtn.onclick = () => this.hideAdminModal();
        }
        
        if (adminLoginBtn) {
            adminLoginBtn.onclick = () => this.handleAdminLogin();
        }
        
        if (adminLogoutBtn) {
            adminLogoutBtn.onclick = () => this.adminLogout();
        }
        
        if (exportBtn) {
            exportBtn.onclick = () => this.exportData();
        }

        // Modal close on backdrop click
        if (adminModal) {
            adminModal.addEventListener('click', (e) => {
                if (e.target === adminModal) {
                    this.hideAdminModal();
                }
            });
        }

        // Enter key for admin password
        if (adminPasswordInput) {
            adminPasswordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleAdminLogin();
                }
            });
        }
    }

    loadQuizData() {
        const savedData = localStorage.getItem('biologyQuizData');
        if (!savedData) {
            localStorage.setItem('biologyQuizData', JSON.stringify([]));
        }
    }

    startQuiz() {
        console.log('Starting quiz...');
        const nameInput = document.getElementById('studentName');
        const name = nameInput ? nameInput.value.trim() : '';
        
        console.log('Name entered:', name);
        
        if (!name) {
            alert('Please enter your name to start the quiz.');
            if (nameInput) {
                nameInput.focus();
            }
            return;
        }

        this.studentName = name;
        this.setupQuiz();
        this.showScreen('quizScreen');
        this.startTimer();
    }

    setupQuiz() {
        console.log('Setting up quiz...');
        // Randomize questions - select all 40 questions and shuffle them
        this.currentQuestions = [...this.questionBank].sort(() => Math.random() - 0.5);
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();
        
        const totalQuestionsEl = document.getElementById('totalQuestions');
        if (totalQuestionsEl) {
            totalQuestionsEl.textContent = this.currentQuestions.length;
        }
        this.displayQuestion();
    }

    startTimer() {
        this.timeRemaining = 20 * 60; // Reset to 20 minutes
        this.updateTimerDisplay();
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            const timerEl = document.querySelector('.timer');
            if (this.timeRemaining <= 300 && timerEl) { // 5 minutes warning
                timerEl.classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeDisplayEl = document.getElementById('timeDisplay');
        if (timeDisplayEl) {
            timeDisplayEl.textContent = 
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        console.log('Displaying question', this.currentQuestionIndex + 1);
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;
        
        const currentQuestionEl = document.getElementById('currentQuestion');
        const questionTextEl = document.getElementById('questionText');
        
        if (currentQuestionEl) {
            currentQuestionEl.textContent = questionNumber;
        }
        
        if (questionTextEl) {
            questionTextEl.textContent = question.question;
        }
        
        // Update progress bar
        const progress = (questionNumber / this.currentQuestions.length) * 100;
        const progressFillEl = document.getElementById('progressFill');
        if (progressFillEl) {
            progressFillEl.style.width = `${progress}%`;
        }
        
        // Display options
        this.displayOptions(question);
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    displayOptions(question) {
        const optionsContainer = document.getElementById('optionsContainer');
        if (!optionsContainer) return;
        
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.value = index;
            
            const isSelected = this.userAnswers[question.id] === index;
            if (isSelected) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            optionElement.onclick = () => {
                console.log('Option selected:', index);
                this.selectAnswer(question.id, index);
            };
            
            optionsContainer.appendChild(optionElement);
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'inline-flex' : 'none';
        }
        
        const isLastQuestion = this.currentQuestionIndex === this.currentQuestions.length - 1;
        
        if (nextBtn) {
            nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
        }
        
        if (submitBtn) {
            submitBtn.style.display = isLastQuestion ? 'inline-flex' : 'none';
        }
    }

    selectAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        const selectedOption = document.querySelector(`[data-value="${answerIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.currentQuestions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        console.log('Submitting quiz...');
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.endTime = new Date();
        this.calculateResults();
        this.saveQuizData();
        this.showResults();
    }

    calculateResults() {
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;
        
        this.currentQuestions.forEach(question => {
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer === undefined) {
                unanswered++;
            } else if (userAnswer === question.correct) {
                correct++;
            } else {
                wrong++;
            }
        });
        
        this.results = {
            correct,
            wrong,
            unanswered,
            total: this.currentQuestions.length,
            percentage: Math.round((correct / this.currentQuestions.length) * 100),
            timeTaken: this.endTime - this.startTime
        };

        console.log('Results calculated:', this.results);
    }

    showResults() {
        console.log('Showing results...');
        const { correct, wrong, unanswered, percentage, timeTaken } = this.results;
        
        const scorePercentEl = document.getElementById('scorePercent');
        const resultStudentNameEl = document.getElementById('resultStudentName');
        const correctAnswersEl = document.getElementById('correctAnswers');
        const wrongAnswersEl = document.getElementById('wrongAnswers');
        const unansweredQuestionsEl = document.getElementById('unansweredQuestions');
        const timeTakenEl = document.getElementById('timeTaken');
        
        if (scorePercentEl) scorePercentEl.textContent = `${percentage}%`;
        if (resultStudentNameEl) resultStudentNameEl.textContent = this.studentName;
        if (correctAnswersEl) correctAnswersEl.textContent = correct;
        if (wrongAnswersEl) wrongAnswersEl.textContent = wrong;
        if (unansweredQuestionsEl) unansweredQuestionsEl.textContent = unanswered;
        
        const timeMinutes = Math.floor(timeTaken / 60000);
        const timeSeconds = Math.floor((timeTaken % 60000) / 1000);
        if (timeTakenEl) {
            timeTakenEl.textContent = `${timeMinutes}:${timeSeconds.toString().padStart(2, '0')}`;
        }
        
        // Update score circle gradient
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            const gradientPercent = (percentage / 100) * 360;
            scoreCircle.style.background = 
                `conic-gradient(var(--color-primary) ${gradientPercent}deg, rgba(50, 184, 198, 0.1) ${gradientPercent}deg)`;
        }
        
        this.showScreen('resultsScreen');
    }

    showReviewScreen() {
        console.log('Showing review screen...');
        const { correct, wrong, unanswered } = this.results;
        
        // Update review summary
        const reviewCorrectEl = document.getElementById('reviewCorrect');
        const reviewWrongEl = document.getElementById('reviewWrong');
        const reviewUnansweredEl = document.getElementById('reviewUnanswered');
        
        if (reviewCorrectEl) reviewCorrectEl.textContent = correct;
        if (reviewWrongEl) reviewWrongEl.textContent = wrong;
        if (reviewUnansweredEl) reviewUnansweredEl.textContent = unanswered;
        
        // Generate review content
        this.generateReviewContent();
        this.showScreen('reviewScreen');
    }

    generateReviewContent() {
        const reviewContainer = document.getElementById('reviewContainer');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === undefined;
            
            let status = 'unanswered';
            let statusIcon = '❓';
            if (!isUnanswered) {
                status = isCorrect ? 'correct' : 'wrong';
                statusIcon = isCorrect ? '✅' : '❌';
            }
            
            const reviewQuestion = document.createElement('div');
            reviewQuestion.className = `review-question ${status}`;
            
            let optionsHTML = '';
            question.options.forEach((option, optionIndex) => {
                const isCorrectOption = optionIndex === question.correct;
                const isUserOption = optionIndex === userAnswer;
                
                let optionClass = '';
                let optionIcon = '';
                
                if (isCorrectOption) {
                    optionClass = 'correct';
                    optionIcon = '✅';
                } else if (isUserOption && !isCorrectOption) {
                    optionClass = 'user-wrong';
                    optionIcon = '❌';
                }
                
                optionsHTML += `
                    <div class="review-option ${optionClass}">
                        <span class="review-option-label">${String.fromCharCode(65 + optionIndex)}</span>
                        <span class="review-option-text">${option}</span>
                        ${optionIcon ? `<span class="review-option-icon">${optionIcon}</span>` : ''}
                    </div>
                `;
            });
            
            reviewQuestion.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Q${index + 1}</span>
                    <span class="review-status-icon">${statusIcon}</span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${optionsHTML}
                </div>
            `;
            
            reviewContainer.appendChild(reviewQuestion);
        });
    }

    saveQuizData() {
        const quizData = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
        
        const newEntry = {
            name: this.studentName,
            score: this.results.percentage,
            correct: this.results.correct,
            wrong: this.results.wrong,
            unanswered: this.results.unanswered,
            timeTaken: this.results.timeTaken,
            date: new Date().toISOString(),
            answers: { ...this.userAnswers }
        };
        
        quizData.push(newEntry);
        localStorage.setItem('biologyQuizData', JSON.stringify(quizData));
        console.log('Quiz data saved');
    }

    retakeQuiz() {
        this.userAnswers = {};
        this.currentQuestionIndex = 0;
        this.results = null;
        const timerEl = document.querySelector('.timer');
        if (timerEl) {
            timerEl.classList.remove('warning');
        }
        this.showScreen('welcomeScreen');
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
            setTimeout(() => nameInput.focus(), 100);
        }
    }

    showScreen(screenId) {
        console.log('Showing screen:', screenId);
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }

    // Admin functionality
    showAdminModal() {
        console.log('Showing admin modal...');
        const adminModal = document.getElementById('adminModal');
        if (adminModal) {
            adminModal.classList.remove('hidden');
            const usernameInput = document.getElementById('adminUsername');
            if (usernameInput) {
                setTimeout(() => usernameInput.focus(), 100);
            }
        }
    }

    hideAdminModal() {
        const adminModal = document.getElementById('adminModal');
        const adminError = document.getElementById('adminError');
        const adminUsername = document.getElementById('adminUsername');
        const adminPassword = document.getElementById('adminPassword');
        
        if (adminModal) adminModal.classList.add('hidden');
        if (adminError) adminError.classList.add('hidden');
        if (adminUsername) adminUsername.value = '';
        if (adminPassword) adminPassword.value = '';
    }

    handleAdminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        const errorElement = document.getElementById('adminError');
        
        const username = usernameInput ? usernameInput.value : '';
        const password = passwordInput ? passwordInput.value : '';
        
        if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            if (errorElement) {
                errorElement.textContent = 'Invalid username or password';
                errorElement.classList.remove('hidden');
            }
        }
    }

    showAdminDashboard() {
        this.loadAdminData();
        this.showScreen('adminScreen');
    }

    loadAdminData() {
        const quizData = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
        
        // Calculate statistics
        const totalParticipants = quizData.length;
        const averageScore = totalParticipants > 0 
            ? Math.round(quizData.reduce((sum, entry) => sum + entry.score, 0) / totalParticipants)
            : 0;
        const completionRate = 100; // All entries are completed quizzes
        
        const totalParticipantsEl = document.getElementById('totalParticipants');
        const averageScoreEl = document.getElementById('averageScore');
        const completionRateEl = document.getElementById('completionRate');
        
        if (totalParticipantsEl) totalParticipantsEl.textContent = totalParticipants;
        if (averageScoreEl) averageScoreEl.textContent = `${averageScore}%`;
        if (completionRateEl) completionRateEl.textContent = `${completionRate}%`;
        
        // Populate table
        const tbody = document.getElementById('participantTableBody');
        if (tbody) {
            tbody.innerHTML = '';
            
            quizData.forEach(entry => {
                const row = document.createElement('tr');
                const date = new Date(entry.date).toLocaleDateString();
                const timeTakenMinutes = Math.floor(entry.timeTaken / 60000);
                const timeTakenSeconds = Math.floor((entry.timeTaken % 60000) / 1000);
                const timeDisplay = `${timeTakenMinutes}:${timeTakenSeconds.toString().padStart(2, '0')}`;
                
                row.innerHTML = `
                    <td>${entry.name}</td>
                    <td>${entry.score}%</td>
                    <td>${entry.correct}</td>
                    <td>${entry.wrong}</td>
                    <td>${entry.unanswered}</td>
                    <td>${timeDisplay}</td>
                    <td>${date}</td>
                `;
                tbody.appendChild(row);
            });
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    exportData() {
        const quizData = JSON.parse(localStorage.getItem('biologyQuizData') || '[]');
        
        if (quizData.length === 0) {
            alert('No data to export');
            return;
        }
        
        // Create CSV content
        const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
        const csvContent = [
            headers.join(','),
            ...quizData.map(entry => {
                const date = new Date(entry.date).toLocaleDateString();
                const timeTakenMinutes = Math.floor(entry.timeTaken / 60000);
                const timeTakenSeconds = Math.floor((entry.timeTaken % 60000) / 1000);
                const timeDisplay = `${timeTakenMinutes}:${timeTakenSeconds.toString().padStart(2, '0')}`;
                
                return [
                    `"${entry.name}"`,
                    entry.score,
                    entry.correct,
                    entry.wrong,
                    entry.unanswered,
                    timeDisplay,
                    date
                ].join(',');
            })
        ].join('\n');
        
        // Download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `biology_quiz_data_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Initialize the application - Ensure DOM is fully loaded
let quizApp;

function initializeQuiz() {
    if (!quizApp) {
        quizApp = new BiologyQuiz();
        console.log('Biology Quiz initialized successfully');
    }
}

// Multiple initialization methods to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!quizApp) {
        initializeQuiz();
    }
});