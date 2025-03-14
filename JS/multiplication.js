let currentAnswer = 0;

// 页面加载时自动生成一道题目和口算题
window.onload = function() {
    generateQuestion();
    generateMentalMath();
    
    // 限制输入数量在1-20之间
    document.getElementById('questionCount').addEventListener('change', function() {
        let value = parseInt(this.value) || 5;
        value = Math.min(Math.max(value, 1), 20);
        this.value = value;
    });
};

// 生成两位数 (11-99)
function generateTwoDigitNumber() {
    return Math.floor(Math.random() * 89) + 11;
}

// 生成一位数 (4-9)
function generateSingleDigit() {
    return Math.floor(Math.random() * 6) + 4;
}

// 生成整十数 (10, 20, ..., 90)
function generateTens() {
    return (Math.floor(Math.random() * 9) + 1) * 10;
}

// 生成整百数 (100, 200, ..., 900)
function generateHundreds() {
    return (Math.floor(Math.random() * 9) + 1) * 100;
}

// 生成十位相同个位相加为10的两位数 (如: 23和27, 56和54)
function generateComplementaryDigitNumbers() {
    const tens = Math.floor(Math.random() * 9) + 1; // 1-9
    const units1 = Math.floor(Math.random() * 5) + 1; // 1-5
    const units2 = 10 - units1; // 使个位数相加为10
    
    return {
        num1: tens * 10 + units1,
        num2: tens * 10 + units2
    };
}

// 随机乘法题功能
function generateQuestion() {
    const num1 = generateTwoDigitNumber();
    const num2 = generateTwoDigitNumber();
    currentAnswer = num1 * num2;
    document.getElementById('question').textContent = `${num1} × ${num2} = ?`;
    document.getElementById('answer').textContent = '';
}

function showAnswer() {
    if (currentAnswer === 0) {
        document.getElementById('answer').textContent = '请先生成题目';
        return;
    }
    document.getElementById('answer').textContent = `答案：${currentAnswer}`;
}

// 批量练习功能
function generateBatch() {
    const count = parseInt(document.getElementById('questionCount').value) || 5;
    const batchSize = Math.min(Math.max(count, 1), 20); // 限制在1-20题之间
    let html = '';
    
    for (let i = 0; i < batchSize; i++) {
        const num1 = generateTwoDigitNumber();
        const num2 = generateTwoDigitNumber();
        const answer = num1 * num2;
        
        html += `
            <div class="question-item">
                <div>第 ${i + 1} 题：${num1} × ${num2} = ?</div>
                <div class="answer-hidden batch-answer" style="color: #2196F3; margin-top: 8px;">答案：${answer}</div>
            </div>
        `;
    }
    
    document.getElementById('batchQuestions').innerHTML = html;
}

function toggleBatchAnswers() {
    const answers = document.querySelectorAll('.batch-answer');
    answers.forEach(answer => {
        if (answer.classList.contains('answer-hidden')) {
            answer.classList.remove('answer-hidden');
        } else {
            answer.classList.add('answer-hidden');
        }
    });
}

// 口算练习功能
function generateMentalMath() {
    const questions = [];
    
    // 保证有两道"两位数乘以11"的题目
    for (let i = 0; i < 2; i++) {
        questions.push({
            num1: generateTwoDigitNumber(),
            num2: 11
        });
    }
    
    // 保证有四道"十位相同个位相加为10的两位数相乘"的题目
    for (let i = 0; i < 3; i++) {
        const specialNumbers = generateComplementaryDigitNumbers();
        questions.push({
            num1: specialNumbers.num1,
            num2: specialNumbers.num2
        });
    }
    
    // 添加其他类型的题目，但减少一位数乘一位数的比例
    
    // 整十 × 整十
    questions.push({
        num1: generateTens(),
        num2: generateTens()
    });
    
    // 一位数 × 整十
    questions.push({
        num1: generateSingleDigit(),
        num2: generateTens()
    });
    
    // 两位数 × 一位数
    questions.push({
        num1: generateTwoDigitNumber(),
        num2: generateSingleDigit()
    });
    
    // 两位数 × 10
    questions.push({
        num1: generateTwoDigitNumber(),
        num2: 10
    });
    
    // 整百 × 一位数
    questions.push({
        num1: generateHundreds(),
        num2: generateSingleDigit()
    });
    
    // 如果题目还不够10道，再添加一些题目，但不包括"一位数 × 一位数"
    for (let i = questions.length; i < 10; i++) {
        // 随机选择题型，但排除一位数乘以一位数
        const questionType = Math.floor(Math.random() * 5);
        
        switch (questionType) {
            case 0: // 整十 × 整十
                questions.push({
                    num1: generateTens(),
                    num2: generateTens()
                });
                break;
            case 1: // 一位数 × 整十
                questions.push({
                    num1: generateSingleDigit(),
                    num2: generateTens()
                });
                break;
            case 2: // 两位数 × 一位数
                questions.push({
                    num1: generateTwoDigitNumber(),
                    num2: generateSingleDigit()
                });
                break;
            case 3: // 两位数 × 10
                questions.push({
                    num1: generateTwoDigitNumber(),
                    num2: 10
                });
                break;
            case 4: // 整百 × 一位数
                questions.push({
                    num1: generateHundreds(),
                    num2: generateSingleDigit()
                });
                break;
        }
    }
    
    // 打乱题目顺序
    questions.sort(() => Math.random() - 0.5);
    
    // 生成HTML
    let html = '<div class="mental-math-grid">';
    
    questions.forEach((q, index) => {
        const answer = q.num1 * q.num2;
        html += `
            <div class="mental-math-item">
                <div class="mental-question">第 ${index + 1} 题：${q.num1} × ${q.num2} = ?</div>
                <div class="mental-answer answer-hidden">${answer}</div>
            </div>
        `;
    });
    
    html += '</div>';
    
    document.getElementById('mentalMathQuestions').innerHTML = html;
}

function toggleMentalMathAnswers() {
    const answers = document.querySelectorAll('.mental-answer');
    answers.forEach(answer => {
        if (answer.classList.contains('answer-hidden')) {
            answer.classList.remove('answer-hidden');
        } else {
            answer.classList.add('answer-hidden');
        }
    });
} 