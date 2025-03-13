let currentNumbers = [];
let selectedNumbers = [];
let expression = '';

// 生成新的数字
function generateNumbers() {
    currentNumbers = [];
    selectedNumbers = [];
    expression = '';
    document.getElementById('expression').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('solution').style.display = 'none';
    
    // 生成4个不同的卡片编号（1-52）
    const usedCardIndexes = new Set();
    while (usedCardIndexes.size < 4) {
        const cardIndex = Math.floor(Math.random() * 52) + 1;
        // 计算卡片的值（1-13）
        const cardValue = Math.ceil(cardIndex / 4);
        // 确保值在1-10之间且不重复（排除K）
        if (cardValue <= 10 && !currentNumbers.includes(cardValue)) {
            usedCardIndexes.add(cardIndex);
            currentNumbers.push(cardValue);
        }
    }
    
    // 显示卡片
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';
    
    // 将usedCardIndexes转换为数组以便使用索引
    const cardIndexes = Array.from(usedCardIndexes);
    
    currentNumbers.forEach((num, index) => {
        const numberCard = document.createElement('div');
        numberCard.className = 'number-card';
        
        // 设置卡片背景图片，确保路径和文件名正确
        const cardIndex = cardIndexes[index];
        const imageUrl = `../课程资料/cards/扑克牌%20(${cardIndex}).png`; // 使用%20替代空格
        numberCard.style.backgroundImage = `url('${imageUrl}')`;
        
        // 存储卡片的值
        numberCard.setAttribute('data-value', num);
        
        numberCard.onclick = () => selectNumber(index);
        numbersContainer.appendChild(numberCard);
    });
}

// 选择数字
function selectNumber(index) {
    if (selectedNumbers.includes(index)) return;
    
    const numberCards = document.querySelectorAll('.number-card');
    numberCards[index].classList.add('selected');
    selectedNumbers.push(index);
    
    // 添加空格使表达式更清晰
    if (expression && !expression.endsWith(' ')) {
        expression += ' ';
    }
    expression += currentNumbers[index];
    updateExpression();
}

// 添加运算符
function addOperator(operator) {
    expression += ` ${operator} `;
    updateExpression();
}

// 添加括号
function addBracket(bracket) {
    expression += bracket;
    updateExpression();
}

// 更新表达式显示
function updateExpression() {
    document.getElementById('expression').textContent = expression;
}

// 清除表达式
function clearExpression() {
    expression = '';
    selectedNumbers = [];
    document.getElementById('expression').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('solution').style.display = 'none';
    
    const numberCards = document.querySelectorAll('.number-card');
    numberCards.forEach(card => card.classList.remove('selected'));
}

// 检查结果
function checkResult() {
    try {
        // 替换乘除号为JavaScript可识别的符号
        let evalExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(evalExpression);
        
        const resultDiv = document.getElementById('result');
        if (Math.abs(result - 24) < 0.000001) {
            resultDiv.innerHTML = '<span>🎉 太棒了！</span> 你的答案完全正确！你真是个数学小天才！';
            resultDiv.className = 'result correct';
        } else {
            const diff = Math.abs(result - 24);
            if (diff < 3) {
                resultDiv.innerHTML = `<span>👍 很接近了！</span> 你的答案是 ${result}，离24还差 ${diff.toFixed(2)}，再试一试！`;
                resultDiv.className = 'result incorrect';
            } else {
                resultDiv.innerHTML = `<span>🤔 需要再思考一下</span> 你的表达式计算结果是 ${result}，离目标值24还有距离。`;
                resultDiv.className = 'result incorrect';
            }
        }
    } catch (e) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<span>❗ 表达式有误</span> 请检查你输入的表达式，确保格式正确！';
        resultDiv.className = 'result incorrect';
    }
}

// 查找24点解法
function findSolution(numbers) {
    const operators = ['+', '-', '*', '/'];
    const solutions = [];
    const detailedSolutions = []; // 存储详细的计算过程
    
    function calculate(a, b, operator) {
        switch(operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : NaN;
        }
    }
    
    function getOperatorSymbol(op) {
        switch(op) {
            case '+': return '+';
            case '-': return '-';
            case '*': return '×';
            case '/': return '÷';
        }
    }
    
    function solve(nums, history = []) {
        if (nums.length === 1) {
            if (Math.abs(nums[0] - 24) < 0.000001) {
                detailedSolutions.push(history);
                return true;
            }
            return false;
        }
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const a = nums[i];
                const b = nums[j];
                const remainingNums = nums.filter((_, index) => index !== i && index !== j);
                
                for (const operator of operators) {
                    const result = calculate(a, b, operator);
                    if (!isNaN(result)) {
                        const newNums = [...remainingNums, result];
                        const step = `${a} ${getOperatorSymbol(operator)} ${b} = ${result}`;
                        if (solve(newNums, [...history, step])) {
                            solutions.push(`${a} ${getOperatorSymbol(operator)} ${b}`);
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    
    solve(numbers);
    return { solutions, detailedSolutions };
}

// 显示提示
function showSolution() {
    const { solutions, detailedSolutions } = findSolution(currentNumbers);
    const solutionDiv = document.getElementById('solution');
    
    if (solutions.length > 0 && detailedSolutions.length > 0) {
        const steps = detailedSolutions[0];
        let solutionHtml = '<span>💡 解题思路：</span><br>';
        
        // 显示详细的解题步骤
        steps.forEach((step, index) => {
            solutionHtml += `<div class="solution-step">步骤 ${index + 1}：${step}</div>`;
        });
        
        solutionHtml += '<div class="solution-tip">使用括号和适当的顺序可能会有多种解法哦！</div>';
        solutionDiv.innerHTML = solutionHtml;
    } else {
        solutionDiv.innerHTML = '<span>🔄 挑战一下</span><br>这组数字可能比较难，或者没有精确解法。试试新游戏吧！';
    }
    solutionDiv.style.display = 'block';
}

// 页面加载时开始新游戏
window.onload = generateNumbers; 