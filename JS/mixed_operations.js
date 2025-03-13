let questions = [];
let startTime = null;
let timerInterval = null;

// 生成随机数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成运算符
function getRandomOperator() {
    const operators = ['+', '-', '×', '÷'];
    return operators[Math.floor(Math.random() * operators.length)];
}

// 生成括号位置
function getRandomBracket() {
    const brackets = [
        { start: true, end: false },  // 只有左括号
        { start: false, end: false }, // 无括号
    ];
    return brackets[Math.floor(Math.random() * brackets.length)];
}

// 计算结果
function calculateResult(nums, operators, hasBracket) {
    let result;
    if (hasBracket.start) {
        // 有括号时，先计算括号内的结果
        let bracketResult;
        switch (operators[0]) {
            case '+': bracketResult = nums[0] + nums[1]; break;
            case '-': bracketResult = nums[0] - nums[1]; break;
            case '×': bracketResult = nums[0] * nums[1]; break;
            case '÷': bracketResult = nums[0] / nums[1]; break;
        }
        // 然后计算括号外的结果
        switch (operators[1]) {
            case '+': result = bracketResult + nums[2]; break;
            case '-': result = bracketResult - nums[2]; break;
            case '×': result = bracketResult * nums[2]; break;
            case '÷': result = bracketResult / nums[2]; break;
        }
    } else {
        // 无括号时，按照运算顺序计算
        if (operators[0] === '×' || operators[0] === '÷') {
            // 先算第一个乘除
            let firstResult;
            switch (operators[0]) {
                case '×': firstResult = nums[0] * nums[1]; break;
                case '÷': firstResult = nums[0] / nums[1]; break;
            }
            // 再算加减
            switch (operators[1]) {
                case '+': result = firstResult + nums[2]; break;
                case '-': result = firstResult - nums[2]; break;
                case '×': result = firstResult * nums[2]; break;
                case '÷': result = firstResult / nums[2]; break;
            }
        } else if (operators[1] === '×' || operators[1] === '÷') {
            // 先算第二个乘除
            let secondResult;
            switch (operators[1]) {
                case '×': secondResult = nums[1] * nums[2]; break;
                case '÷': secondResult = nums[1] / nums[2]; break;
            }
            // 再算加减
            switch (operators[0]) {
                case '+': result = nums[0] + secondResult; break;
                case '-': result = nums[0] - secondResult; break;
            }
        } else {
            // 都是加减，从左到右计算
            let firstResult;
            switch (operators[0]) {
                case '+': firstResult = nums[0] + nums[1]; break;
                case '-': firstResult = nums[0] - nums[1]; break;
            }
            switch (operators[1]) {
                case '+': result = firstResult + nums[2]; break;
                case '-': result = firstResult - nums[2]; break;
            }
        }
    }
    return Math.round(result * 100) / 100; // 保留两位小数
}

// 修改生成题目函数
function generateQuestion() {
    let nums = [];
    let operators = [];
    let hasBracket = getRandomBracket();

    // 随机决定是否使用括号
    hasBracket = Math.random() < 0.3 ? { start: true, end: false } : { start: false, end: false };

    // 生成运算符
    operators.push(getRandomOperator());
    operators.push(getRandomOperator());

    // 检查是否有连续的乘法
    if (operators[0] === '×' && operators[1] === '×') {
        operators[1] = Math.random() < 0.5 ? '+' : '-';
    }

    // 临时计算中间结果，确保不出现负数
    let tempResult;
    do {
        nums = []; // 清空数组重新生成数字

        // 根据运算符生成合适的数字
        if (hasBracket.start) {
            // 括号内的运算
            if (operators[0] === '÷') {
                // 除法：确保能整除
                let divisor = getRandomNumber(1, 9);  // 除数 1-9
                let quotient = getRandomNumber(2, 99); // 商 2-99
                nums.push(divisor * quotient);        // 被除数
                nums.push(divisor);                   // 除数
            } else if (operators[0] === '×') {
                let firstNum = getRandomNumber(2, 99);    // 第一个乘数最多两位
                let secondNum = getRandomNumber(2, 9);    // 第二个乘数一位数
                nums.push(firstNum);
                nums.push(secondNum);
            } else {
                // 加减法时，确保第一个数大于第二个数
                let num1 = getRandomNumber(100, 999);
                let num2 = getRandomNumber(2, num1 - 1); // 确保减法不会出现负数
                nums.push(num1);
                nums.push(num2);
            }

            // 计算括号内的结果
            let bracketResult;
            switch (operators[0]) {
                case '+': bracketResult = nums[0] + nums[1]; break;
                case '-': bracketResult = nums[0] - nums[1]; break;
                case '×': bracketResult = nums[0] * nums[1]; break;
                case '÷': bracketResult = nums[0] / nums[1]; break;
            }

            // 根据括号内的结果生成第三个数
            if (operators[1] === '÷') {
                // 如果是除法，确保能整除
                let divisor = getRandomNumber(1, 9);
                nums.push(divisor);
                if (bracketResult % divisor !== 0) continue;
            } else if (operators[1] === '×') {
                if (operators[0] === '×') {
                    nums.push(getRandomNumber(2, 9));
                } else {
                    nums.push(getRandomNumber(2, 99));
                }
            } else if (operators[1] === '-') {
                nums.push(getRandomNumber(2, bracketResult - 1)); // 确保减法不会出现负数
            } else {
                nums.push(getRandomNumber(2, 999));
            }
        } else {
            // 无括号的情况
            if (operators[0] === '÷') {
                let divisor = getRandomNumber(1, 9);
                let quotient = getRandomNumber(2, 99);
                nums.push(divisor * quotient);
                nums.push(divisor);
            } else if (operators[0] === '×') {
                let firstNum = getRandomNumber(2, 99);
                let secondNum = getRandomNumber(2, 9);
                nums.push(firstNum);
                nums.push(secondNum);
            } else {
                let num1 = getRandomNumber(100, 999);
                let num2 = getRandomNumber(2, num1 - 1);
                nums.push(num1);
                nums.push(num2);
            }

            // 计算第一步的结果
            let firstResult;
            switch (operators[0]) {
                case '+': firstResult = nums[0] + nums[1]; break;
                case '-': firstResult = nums[0] - nums[1]; break;
                case '×': firstResult = nums[0] * nums[1]; break;
                case '÷': firstResult = nums[0] / nums[1]; break;
            }

            // 根据第一步的结果生成第三个数
            if (operators[1] === '÷') {
                let divisor = getRandomNumber(1, 9);
                nums.push(divisor);
                if (firstResult % divisor !== 0) continue;
            } else if (operators[1] === '×') {
                if (operators[0] === '×') {
                    nums.push(getRandomNumber(2, 9));
                } else {
                    nums.push(getRandomNumber(2, 99));
                }
            } else if (operators[1] === '-') {
                nums.push(getRandomNumber(2, firstResult - 1));
            } else {
                nums.push(getRandomNumber(2, 999));
            }
        }

        // 计算最终结果
        tempResult = calculateResult(nums, operators, hasBracket);
    } while (!Number.isInteger(tempResult) || tempResult <= 0 || tempResult > 10000);

    // 生成题目字符串
    let questionStr = '';
    if (hasBracket.start) {
        questionStr = `(${nums[0]} ${operators[0]} ${nums[1]}) ${operators[1]} ${nums[2]}`;
    } else {
        questionStr = `${nums[0]} ${operators[0]} ${nums[1]} ${operators[1]} ${nums[2]}`;
    }

    return {
        question: questionStr,
        answer: tempResult
    };
}

// 修改 generateQuestions 函数
function generateQuestions() {
    questions = [];
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    
    // 重置计时器
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTime = new Date();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);

    // 重新启用显示答案按钮
    document.getElementById('show-answers').disabled = false;
    
    // 清空结果
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = '';

    // 生成10道题
    for (let i = 0; i < 10; i++) {
        const questionData = generateQuestion();
        questions.push(questionData);

        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <div class="question-content">
                <span class="question-text">${i + 1}. ${questionData.question} = </span>
                <input type="number" id="answer${i}">
                <span class="answer-text" id="answer-text${i}" style="display: none;">
                    ${questionData.answer}
                </span>
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    }
}

// 更新计时器
function updateTimer() {
    if (startTime) {
        const currentTime = new Date();
        const seconds = Math.floor((currentTime - startTime) / 1000);
        document.getElementById('timer').textContent = `用时：${seconds}秒`;
    }
}

// 检查答案
function checkAnswers() {
    let correct = 0;
    const result = document.getElementById('result');
    
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = parseFloat(document.getElementById(`answer${i}`).value);
        if (!isNaN(userAnswer) && Math.abs(userAnswer - questions[i].answer) < 0.01) {
            correct++;
        }
    }

    // 停止计时器
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // 显示得分
    const score = Math.round((correct / questions.length) * 100);
    document.getElementById('score').textContent = `得分：${score}分`;

    // 显示结果
    if (score === 100) {
        result.textContent = '太棒了！全部答对了！👍';
        result.className = 'result correct';
    } else if (score >= 80) {
        result.textContent = '做得不错！继续加油！😊';
        result.className = 'result correct';
    } else if (score >= 60) {
        result.textContent = '及格了，但还需要多练习！💪';
        result.className = 'result correct';
    } else {
        result.textContent = '要加油啊，可以做得更好！📚';
        result.className = 'result incorrect';
    }
}

// 添加显示答案函数
function showAnswers() {
    for (let i = 0; i < questions.length; i++) {
        const answerText = document.getElementById(`answer-text${i}`);
        answerText.style.display = 'inline';
    }
    
    // 停止计时器
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // 禁用显示答案按钮
    document.getElementById('show-answers').disabled = true;
}

// 页面加载时生成题目
window.onload = generateQuestions; 