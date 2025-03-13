const realLifeExamples = {
    length: [
        // 毫米例子
        { item: '一粒米', value: 7, unit: '毫米' },
        { item: '一颗花生', value: 15, unit: '毫米' },
        { item: '一颗葡萄', value: 20, unit: '毫米' },
        { item: '一个橡皮', value: 40, unit: '毫米' },
        { item: '一颗玻璃珠', value: 16, unit: '毫米' },
        { item: '一粒绿豆', value: 5, unit: '毫米' },
        { item: '一粒黄豆', value: 8, unit: '毫米' },
        { item: '一颗珍珠', value: 10, unit: '毫米' },
        { item: '一粒花生米', value: 12, unit: '毫米' },
        { item: '一颗红豆', value: 6, unit: '毫米' },
        
        // 厘米例子
        { item: '一支铅笔', value: 18, unit: '厘米' },
        { item: '一本课本', value: 25, unit: '厘米' },
        { item: '一把尺子', value: 30, unit: '厘米' },
        { item: '一块黑板擦', value: 12, unit: '厘米' },
        { item: '一个文具盒', value: 20, unit: '厘米' },
        { item: '一张A4纸的宽度', value: 21, unit: '厘米' },
        { item: '一张A4纸的长度', value: 29.7, unit: '厘米' },
        { item: '一个书包', value: 40, unit: '厘米' },
        { item: '一张课桌', value: 60, unit: '厘米' },
        { item: '一块黑板', value: 120, unit: '厘米' },
        { item: '一张床', value: 200, unit: '厘米' },
        { item: '一个篮球', value: 24, unit: '厘米' },
        { item: '一个足球', value: 22, unit: '厘米' },
        { item: '一个排球', value: 21, unit: '厘米' },
        { item: '一个乒乓球', value: 4, unit: '厘米' },
        { item: '一部手机', value: 15, unit: '厘米' },
        { item: '一台平板电脑', value: 25, unit: '厘米' },
        { item: '一台笔记本电脑', value: 35, unit: '厘米' },
        
        // 米例子
        { item: '教室的宽度', value: 8, unit: '米' },
        { item: '教室的长度', value: 10, unit: '米' },
        { item: '篮球场的宽度', value: 15, unit: '米' },
        { item: '篮球场的长度', value: 28, unit: '米' },
        { item: '游泳池的长度', value: 25, unit: '米' },
        { item: '足球场的宽度', value: 45, unit: '米' },
        { item: '足球场的长度', value: 90, unit: '米' },
        { item: '操场跑道', value: 400, unit: '米' },
        { item: '一根电线杆的高度', value: 6, unit: '米' },
        { item: '一棵小树的高度', value: 3, unit: '米' },
        { item: '一棵大树的高度', value: 15, unit: '米' },
        { item: '教学楼的高度', value: 20, unit: '米' },
        { item: '一个排球场的长度', value: 18, unit: '米' },
        { item: '一个排球场的宽度', value: 9, unit: '米' },
        { item: '一个羽毛球场的长度', value: 13.4, unit: '米' },
        { item: '一个羽毛球场的宽度', value: 6.1, unit: '米' },
        
        // 千米例子
        { item: '从学校到超市', value: 1, unit: '千米' },
        { item: '从家到学校', value: 2, unit: '千米' },
        { item: '从镇上到县城', value: 15, unit: '千米' },
        { item: '从县城到市区', value: 50, unit: '千米' },
        { item: '一圈环城公路', value: 30, unit: '千米' },
        { item: '从城市到机场', value: 25, unit: '千米' },
        { item: '从家到火车站', value: 8, unit: '千米' },
        { item: '从学校到公园', value: 3, unit: '千米' }
    ],
    weight: [
        // 克例子
        { item: '一颗糖果', value: 4, unit: '克' },
        { item: '一块橡皮', value: 15, unit: '克' },
        { item: '一个铅笔盒', value: 100, unit: '克' },
        { item: '一本教科书', value: 250, unit: '克' },
        { item: '一个苹果', value: 200, unit: '克' },
        { item: '一个橙子', value: 150, unit: '克' },
        { item: '一个香蕉', value: 120, unit: '克' },
        { item: '一个梨', value: 180, unit: '克' },
        { item: '一包大米', value: 500, unit: '克' },
        { item: '一包面粉', value: 500, unit: '克' },
        { item: '一瓶矿泉水', value: 550, unit: '克' },
        { item: '一盒牛奶', value: 250, unit: '克' },
        { item: '一包饼干', value: 80, unit: '克' },
        { item: '一包薯片', value: 100, unit: '克' },
        { item: '一个面包', value: 150, unit: '克' },
        { item: '一包糖', value: 50, unit: '克' },
        { item: '一个鸡蛋', value: 50, unit: '克' },
        { item: '一包巧克力', value: 100, unit: '克' },
        { item: '一包果冻', value: 200, unit: '克' },
        { item: '一包方便面', value: 100, unit: '克' },
        
        // 千克例子
        { item: '一只鸡', value: 2, unit: '千克' },
        { item: '一只兔子', value: 3, unit: '千克' },
        { item: '一只鸭子', value: 2.5, unit: '千克' },
        { item: '一条鱼', value: 1.5, unit: '千克' },
        { item: '一袋大米', value: 5, unit: '千克' },
        { item: '一袋面粉', value: 10, unit: '千克' },
        { item: '一箱苹果', value: 15, unit: '千克' },
        { item: '一箱橙子', value: 20, unit: '千克' },
        { item: '一只小狗', value: 8, unit: '千克' },
        { item: '一只小猫', value: 4, unit: '千克' },
        { item: '一只羊', value: 45, unit: '千克' },
        { item: '一头小猪', value: 100, unit: '千克' },
        { item: '一头成年猪', value: 150, unit: '千克' },
        { item: '一头小牛', value: 200, unit: '千克' },
        { item: '一头成年牛', value: 500, unit: '千克' },
        { item: '一个三年级小学生', value: 35, unit: '千克' },
        { item: '一个成年人', value: 65, unit: '千克' },
        { item: '一袋水泥', value: 50, unit: '千克' },
        { item: '一箱西瓜', value: 25, unit: '千克' },
        { item: '一箱香蕉', value: 30, unit: '千克' },
        
        // 吨例子
        { item: '一头大象', value: 4, unit: '吨' },
        { item: '一辆小汽车', value: 1.5, unit: '吨' },
        { item: '一辆面包车', value: 2, unit: '吨' },
        { item: '一辆卡车', value: 5, unit: '吨' },
        { item: '一节火车厢', value: 20, unit: '吨' },
        { item: '一个集装箱', value: 25, unit: '吨' },
        { item: '一辆公交车', value: 8, unit: '吨' },
        { item: '一辆校车', value: 6, unit: '吨' },
        { item: '一头蓝鲸', value: 180, unit: '吨' },
        { item: '一个大型变压器', value: 15, unit: '吨' }
    ]
};

const conversions = {
    length: {
        '毫米_厘米': 10,
        '厘米_米': 100,
        '米_千米': 1000
    },
    weight: {
        '克_千克': 1000,
        '千克_吨': 1000
    }
};

let currentQuestions = {
    unit: null,
    comparison: null,
    integer: null,
    decimal: null
};

// 生成单位认知题目
function generateUnitQuestion() {
    const categories = ['length', 'weight'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const example = realLifeExamples[category][Math.floor(Math.random() * realLifeExamples[category].length)];
    
    currentQuestions.unit = {
        item: example.item,
        value: example.value,
        unit: example.unit
    };

    document.getElementById('unitQuestion').textContent = 
        `${example.item}大约${category === 'weight' ? '重' : '长'} ${example.value}`;
    document.getElementById('unitAnswer').value = '';
    document.getElementById('unitResult').textContent = '';
}

// 修改大小比较题目生成函数
function generateComparisonQuestion() {
    // 先清除结果提示
    document.getElementById('comparisonResult').textContent = '';
    document.getElementById('comparisonResult').className = 'result';
    
    // 随机选择类别：长度或重量
    const categories = ['length', 'weight'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // 根据类别选择单位
    let units;
    if (category === 'length') {
        units = ['毫米', '厘米', '米', '千米'];
    } else {
        units = ['克', '千克', '吨'];
    }
    
    // 选择两个不同的单位
    let unitIndex1 = Math.floor(Math.random() * units.length);
    let unitIndex2;
    do {
        unitIndex2 = Math.floor(Math.random() * units.length);
    } while (unitIndex1 === unitIndex2);
    
    const unit1 = units[unitIndex1];
    const unit2 = units[unitIndex2];
    
    // 生成两个数字
    let num1, num2;
    
    // 根据单位调整数字大小范围
    if (category === 'length') {
        switch (unit1) {
            case '毫米': num1 = Math.floor(Math.random() * 900) + 100; break; // 100-999毫米
            case '厘米': num1 = Math.floor(Math.random() * 90) + 10; break;  // 10-99厘米
            case '米': num1 = Math.floor(Math.random() * 90) + 1; break;     // 1-90米
            case '千米': num1 = Math.floor(Math.random() * 9) + 1; break;     // 1-9千米
        }
        
        switch (unit2) {
            case '毫米': num2 = Math.floor(Math.random() * 900) + 100; break;
            case '厘米': num2 = Math.floor(Math.random() * 90) + 10; break;
            case '米': num2 = Math.floor(Math.random() * 90) + 1; break;
            case '千米': num2 = Math.floor(Math.random() * 9) + 1; break;
        }
    } else {
        switch (unit1) {
            case '克': num1 = Math.floor(Math.random() * 900) + 100; break;    // 100-999克
            case '千克': num1 = Math.floor(Math.random() * 90) + 10; break;    // 10-99千克
            case '吨': num1 = Math.floor(Math.random() * 9) + 1; break;        // 1-9吨
        }
        
        switch (unit2) {
            case '克': num2 = Math.floor(Math.random() * 900) + 100; break;
            case '千克': num2 = Math.floor(Math.random() * 90) + 10; break;
            case '吨': num2 = Math.floor(Math.random() * 9) + 1; break;
        }
    }
    
    // 将值转换为基本单位（毫米或克）进行比较
    let value1 = convertToBaseUnit(num1, unit1, category);
    let value2 = convertToBaseUnit(num2, unit2, category);
    
    // 确定答案
    let answer;
    if (value1 > value2) {
        answer = '>';
    } else if (value1 < value2) {
        answer = '<';
    } else {
        answer = '=';
    }
    
    currentQuestions.comparison = {
        num1: num1,
        num2: num2,
        unit1: unit1,
        unit2: unit2,
        answer: answer,
        category: category
    };

    document.getElementById('comparisonQuestion').textContent = 
        `${num1}${unit1} __ ${num2}${unit2}`;
}

// 添加辅助函数：将值转换为基本单位（毫米或克）
function convertToBaseUnit(value, unit, category) {
    if (category === 'length') {
        switch (unit) {
            case '毫米': return value;
            case '厘米': return value * 10;
            case '米': return value * 1000;
            case '千米': return value * 1000000;
        }
    } else {
        switch (unit) {
            case '克': return value;
            case '千克': return value * 1000;
            case '吨': return value * 1000000;
        }
    }
    return value;
}

// 修改检查比较答案函数
function checkComparison(answer) {
    const result = document.getElementById('comparisonResult');
    
    if (answer === currentQuestions.comparison.answer) {
        result.textContent = '正确！👍';
        result.className = 'result correct';
    } else {
        result.textContent = '不对哦，再试一次';
        result.className = 'result incorrect';
    }
}

// 生成整数单位转换题目
function generateIntegerQuestion() {
    const types = [
        // 小单位转大单位
        { from: '克', to: '千克', value: 1000, reverse: false },
        { from: '千克', to: '吨', value: 1000, reverse: false },
        { from: '厘米', to: '米', value: 100, reverse: false },
        { from: '米', to: '千米', value: 1000, reverse: false },
        // 大单位转小单位
        { from: '千克', to: '克', value: 1000, reverse: true },
        { from: '吨', to: '千克', value: 1000, reverse: true },
        { from: '米', to: '厘米', value: 100, reverse: true },
        { from: '千米', to: '米', value: 1000, reverse: true }
    ];
    
    const type = types[Math.floor(Math.random() * types.length)];
    let value, answer;

    if (type.reverse) {
        // 大单位转小单位，生成1-10的数，答案需要乘以进制值
        value = Math.floor(Math.random() * 9 + 1);
        answer = value * type.value;
    } else {
        // 小单位转大单位，生成能够整除的数，答案需要除以进制值
        value = type.value * Math.floor(Math.random() * 9 + 1);
        answer = value / type.value;
    }
    
    currentQuestions.integer = {
        value: value,
        from: type.from,
        to: type.to,
        answer: answer
    };

    document.getElementById('integerQuestion').textContent = 
        `将 ${value}${type.from} 转换为`;
    document.getElementById('integerTargetUnit').textContent = type.to;
    document.getElementById('integerAnswer').value = '';
    document.getElementById('integerResult').textContent = '';
}

// 生成小数单位转换题目
function generateDecimalQuestion() {
    const types = [
        // 小单位转大单位
        { from: '克', to: '千克', value: 1000, reverse: false },
        { from: '千克', to: '吨', value: 1000, reverse: false },
        { from: '厘米', to: '米', value: 100, reverse: false },
        { from: '米', to: '千米', value: 1000, reverse: false },
        // 大单位转小单位
        { from: '千克', to: '克', value: 1000, reverse: true },
        { from: '吨', to: '千克', value: 1000, reverse: true },
        { from: '米', to: '厘米', value: 100, reverse: true },
        { from: '千米', to: '米', value: 1000, reverse: true }
    ];
    
    const type = types[Math.floor(Math.random() * types.length)];
    let value, answer;

    if (type.reverse) {
        // 大单位转小单位，生成带一位小数的数字
        value = (Math.floor(Math.random() * 90 + 10) / 10).toFixed(1);
        answer = value * type.value;
    } else {
        // 小单位转大单位，生成能够得到一位小数的数字
        const baseNum = Math.floor(Math.random() * 90 + 10);
        value = type.value * baseNum / 10;
        answer = baseNum / 10;
    }
    
    currentQuestions.decimal = {
        value: parseFloat(value),
        from: type.from,
        to: type.to,
        answer: parseFloat(answer)
    };

    document.getElementById('decimalQuestion').textContent = 
        `将 ${value}${type.from} 转换为`;
    document.getElementById('decimalTargetUnit').textContent = type.to;
    document.getElementById('decimalAnswer').value = '';
    document.getElementById('decimalResult').textContent = '';
}

// 检查单位认知答案
function checkUnitAnswer() {
    const userAnswer = document.getElementById('unitAnswer').value.trim();
    const result = document.getElementById('unitResult');
    
    if (userAnswer === currentQuestions.unit.unit) {
        result.textContent = '正确！👍';
        result.className = 'result correct';
    } else {
        result.textContent = `不对哦，正确答案是 ${currentQuestions.unit.unit}`;
        result.className = 'result incorrect';
    }
}

// 检查整数转换答案
function checkIntegerAnswer() {
    const userAnswer = parseInt(document.getElementById('integerAnswer').value);
    const result = document.getElementById('integerResult');
    
    if (isNaN(userAnswer)) {
        result.textContent = '请输入有效的数字！';
        result.className = 'result incorrect';
        return;
    }

    if (userAnswer === currentQuestions.integer.answer) {
        result.textContent = '正确！👍';
        result.className = 'result correct';
    } else {
        result.textContent = `不对哦，正确答案是 ${currentQuestions.integer.answer}`;
        result.className = 'result incorrect';
    }
}

// 检查小数转换答案
function checkDecimalAnswer() {
    const userAnswer = parseFloat(document.getElementById('decimalAnswer').value);
    const result = document.getElementById('decimalResult');
    
    if (isNaN(userAnswer)) {
        result.textContent = '请输入有效的数字！';
        result.className = 'result incorrect';
        return;
    }

    if (Math.abs(userAnswer - currentQuestions.decimal.answer) < 0.001) {
        result.textContent = '正确！👍';
        result.className = 'result correct';
    } else {
        result.textContent = `不对哦，正确答案是 ${currentQuestions.decimal.answer}`;
        result.className = 'result incorrect';
    }
}

// 生成所有题目
function generateAllQuestions() {
    // 清空所有输入和结果
    document.getElementById('unitAnswer').value = '';
    document.getElementById('integerAnswer').value = '';
    document.getElementById('integerTargetUnit').value = '';
    document.getElementById('decimalAnswer').value = '';
    document.getElementById('decimalTargetUnit').value = '';
    
    document.getElementById('unitResult').textContent = '';
    document.getElementById('comparisonResult').textContent = '';
    document.getElementById('integerResult').textContent = '';
    document.getElementById('decimalResult').textContent = '';
    
    // 生成新题目
    generateUnitQuestion();
    generateComparisonQuestion();
    generateIntegerQuestion();
    generateDecimalQuestion();
}

// 页面加载时生成所有题目
window.onload = function() {
    generateUnitQuestion();
    generateComparisonQuestion();
    generateIntegerQuestion();
    generateDecimalQuestion();
}; 