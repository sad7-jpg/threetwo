// 全局变量
let questionsLeft = [];  // 左侧选手题目
let questionsRight = []; // 右侧选手题目
let selectedTypes = [];  // 选中的题型
let startTimeLeft = null;  // 左侧计时开始时间
let startTimeRight = null; // 右侧计时开始时间
let timerIntervalLeft = null;  // 左侧计时器
let timerIntervalRight = null; // 右侧计时器
let isLeftSubmitted = false;  // 左侧是否已提交
let isRightSubmitted = false; // 右侧是否已提交
let currentQuestionLeft = 0;  // 左侧当前题目索引
let currentQuestionRight = 0; // 右侧当前题目索引
let leftTimeInSeconds = 0;    // 左侧选手用时（秒）
let rightTimeInSeconds = 0;   // 右侧选手用时（秒）
let leftScore = 0;            // 左侧选手得分
let rightScore = 0;           // 右侧选手得分
let gameOverSound = null;     // 游戏结束音效
const totalQuestions = 5;     // 总题目数，5道题
const isDebug = false;        // 是否开启调试模式

// 用于单位认知题的真实例子
const realLifeExamples = {
    length: [
        { name: '铅笔的长度', options: ['厘米', '千米', '吨'], answer: '厘米' },
        { name: '教室的长度', options: ['毫米', '米', '吨'], answer: '米' },
        { name: '操场的长度', options: ['厘米', '米', '毫米'], answer: '米' },
        { name: '一本书的宽度', options: ['厘米', '米', '千米'], answer: '厘米' },
        { name: '一粒米的长度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '从家到学校的距离', options: ['厘米', '千米', '吨'], answer: '千米' },
        { name: '一张纸的厚度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        // 以下是新增的长度示例数据
        { name: '足球场的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一支钢笔的长度', options: ['厘米', '米', '千米'], answer: '厘米' },
        { name: '黑板的宽度', options: ['米', '千米', '毫米'], answer: '米' },
        { name: '一根头发的粗细', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一栋楼的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '课桌的高度', options: ['厘米', '千米', '毫米'], answer: '厘米' },
        { name: '一个人的身高', options: ['米', '千米', '厘米'], answer: '米' },
        { name: '一张A4纸的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一支铅笔的直径', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '教室的宽度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '城市之间的距离', options: ['千米', '米', '厘米'], answer: '千米' },
        { name: '指甲的长度', options: ['厘米', '毫米', '米'], answer: '毫米' },
        { name: '一步的距离', options: ['米', '千米', '厘米'], answer: '米' },
        { name: '眉毛的长度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '一层楼的高度', options: ['米', '千米', '厘米'], answer: '米' },
        { name: '教科书的厚度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '篮球场的宽度', options: ['米', '厘米', '千米'], answer: '米' },
        { name: '铅笔橡皮的长度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '教室门的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一块黑板擦的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一根火柴的长度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '一朵云的大小', options: ['千米', '米', '厘米'], answer: '千米' },
        { name: '邮票的宽度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '课本页面的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '眼睫毛的长度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一张床的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一辆小汽车的长度', options: ['米', '厘米', '千米'], answer: '米' },
        { name: '桌子的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一个杯子的高度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '电脑屏幕的对角线长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一条河的宽度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一根筷子的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一棵大树的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一页纸的厚度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '手指的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一条马路的宽度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个苹果的直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '书柜的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个橡皮的厚度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '手机的厚度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一张椅子的高度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '马拉松比赛的距离', options: ['千米', '米', '厘米'], answer: '千米' },
        { name: '教室黑板的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '水杯的直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一栋房子的宽度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个鸡蛋的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一本词典的厚度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '手表的表盘直径', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '自行车的车轮直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '教学楼的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '电灯泡的直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '铅笔盒的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一根蜡笔的直径', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一把尺子的长度', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '一个足球的直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一条小溪的宽度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一条围巾的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一棵小草的高度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一颗星星间的距离', options: ['千米', '米', '厘米'], answer: '千米' },
        { name: '书包的高度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一台电视机的屏幕宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一双鞋的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一座大桥的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一颗扣子的直径', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '一根绳子的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一张照片的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一滴水的大小', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一栋摩天大楼的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个西瓜的直径', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一个人的脚长', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一座小山的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个乒乓球的直径', options: ['厘米', '毫米', '米'], answer: '厘米' },
        { name: '一条裤子的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一个房间的高度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一个口罩的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '课桌的宽度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一把梳子的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一颗牙齿的高度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一把折扇的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一根竹竿的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一条鱼的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一粒沙子的直径', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一只蚂蚁的长度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一辆公交车的长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '一头发丝的直径', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '人的嘴唇厚度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '一块橡皮的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一个枕头的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一座城市的直径', options: ['千米', '米', '厘米'], answer: '千米' },
        { name: '一张信纸的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '一条小鱼的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '学校操场跑道长度', options: ['米', '厘米', '毫米'], answer: '米' },
        { name: '指甲的厚度', options: ['毫米', '厘米', '米'], answer: '毫米' },
        { name: '手臂的长度', options: ['厘米', '米', '毫米'], answer: '厘米' },
        { name: '眼睛的直径', options: ['厘米', '毫米', '米'], answer: '厘米' }
    ],
    weight: [
        { name: '一本书的重量', options: ['克', '厘米', '千米'], answer: '克' },
        { name: '一头大象的重量', options: ['克', '千克', '吨'], answer: '吨' },
        { name: '一个苹果的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一辆汽车的重量', options: ['吨', '克', '厘米'], answer: '吨' },
        { name: '一粒米的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个人的体重', options: ['克', '千克', '吨'], answer: '千克' },
        // 以下是新增的重量示例数据
        { name: '一块面包的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一头牛的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个书包的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一只大象的重量', options: ['吨', '克', '千克'], answer: '吨' },
        { name: '一架飞机的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一粒沙子的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一台电脑的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个鸡蛋的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一袋大米的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一辆自行车的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一节车厢的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个橡皮的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一台冰箱的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一台洗衣机的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个西瓜的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一座小山的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个铅笔的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一张纸的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一颗钻石的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一栋大楼的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个手机的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个篮球的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一块石头的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一只老虎的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一只蚂蚁的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一张椅子的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个水桶的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个足球的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一辆货车的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一台电视的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一把吉他的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个苹果的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一只兔子的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一根铁棒的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一辆摩托车的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一条金鱼的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一头猪的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一只老鼠的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一头牦牛的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一辆坦克的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一块积木的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个水杯的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个花盆的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个铁锤的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个螺丝钉的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个气球的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个番茄的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一条围巾的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一头大象的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一座山的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一只猫的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个枕头的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个电饭煲的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个行李箱的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一本词典的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一袋面粉的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个钢笔的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一辆自行车的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一艘轮船的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个人的头部重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一只鞋的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一瓶矿泉水的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个皮球的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一把剪刀的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个婴儿的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一头狮子的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个行李箱的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一头犀牛的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个指甲的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一只鸟的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个汽车轮胎的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一棵大树的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个笔记本电脑的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一瓶酱油的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一把雨伞的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个桌子的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一节火车的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个马桶的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个木箱的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个书架的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个西红柿的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个水龙头的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个钥匙的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个羽毛的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一个乒乓球的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一只大象的脚的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一个碗的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一瓶牛奶的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一条裤子的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一座桥的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一辆火车的重量', options: ['吨', '千克', '克'], answer: '吨' },
        { name: '一个鸡蛋的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一只狗的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一条毛巾的重量', options: ['克', '千克', '吨'], answer: '克' },
        { name: '一块钢板的重量', options: ['千克', '克', '吨'], answer: '千克' },
        { name: '一支铅笔的重量', options: ['克', '千克', '吨'], answer: '克' }
    ]
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 预加载音效
    gameOverSound = new Audio('../课程资料/sounds/game-over.mp3');
    
    // 绑定开始按钮点击事件
    document.getElementById('startCompetition').addEventListener('click', startCompetition);
    
    // 绑定下一题按钮点击事件
    document.getElementById('nextLeft').addEventListener('click', function() {
        goToNextQuestion('Left');
    });
    
    document.getElementById('nextRight').addEventListener('click', function() {
        goToNextQuestion('Right');
    });
    
    // 绑定提交按钮点击事件
    document.getElementById('submitLeft').addEventListener('click', function() {
        submitAnswers('Left');
    });
    
    document.getElementById('submitRight').addEventListener('click', function() {
        submitAnswers('Right');
    });
});

// 开始比赛
function startCompetition() {
    // 清除之前的状态
    resetCompetition();
    
    // 显示比赛区域
    document.getElementById('competitionArea').classList.remove('hidden');
    
    // 从六种类型中随机选择三种题型
    selectRandomTypes();
    
    // 生成题目
    generateQuestions();
    
    // 显示第一道题目
    displayCurrentQuestion('Left');
    displayCurrentQuestion('Right');
    
    // 开始计时
    startTimer('Left');
    startTimer('Right');
    
    // 隐藏开始按钮
    document.getElementById('startCompetition').classList.add('hidden');
}

// 重置比赛状态
function resetCompetition() {
    // 清空题目
    questionsLeft = [];
    questionsRight = [];
    selectedTypes = [];
    
    // 重置当前题目索引
    currentQuestionLeft = 0;
    currentQuestionRight = 0;
    
    // 重置提交状态
    isLeftSubmitted = false;
    isRightSubmitted = false;
    
    // 重置得分和用时
    leftScore = 0;
    rightScore = 0;
    leftTimeInSeconds = 0;
    rightTimeInSeconds = 0;
    
    // 清除计时器
    if (timerIntervalLeft) {
        clearInterval(timerIntervalLeft);
    }
    if (timerIntervalRight) {
        clearInterval(timerIntervalRight);
    }
    
    // 重置计时器显示
    document.getElementById('timerLeft').textContent = '00:00';
    document.getElementById('timerRight').textContent = '00:00';
    
    // 清空结果区域
    document.getElementById('resultsLeft').innerHTML = '';
    document.getElementById('resultsRight').innerHTML = '';
    document.getElementById('resultsLeft').classList.add('hidden');
    document.getElementById('resultsRight').classList.add('hidden');
    
    // 清空题目容器
    document.getElementById('questionsLeft').innerHTML = '';
    document.getElementById('questionsRight').innerHTML = '';
    
    // 重置进度显示
    document.getElementById('progressLeft').textContent = `第 1 题 / 共 ${totalQuestions} 题`;
    document.getElementById('progressRight').textContent = `第 1 题 / 共 ${totalQuestions} 题`;
    
    // 移除胜利装饰
    removeWinnerDecoration();
    
    // 启用下一题按钮
    document.getElementById('nextLeft').disabled = false;
    document.getElementById('nextRight').disabled = false;
    
    // 禁用提交按钮（直到做完所有题目）
    document.getElementById('submitLeft').disabled = true;
    document.getElementById('submitRight').disabled = true;
}

// 随机选择题型
function selectRandomTypes() {
    // 单独处理两位数乘以两位数的题型，确保它被选择
    const twoDigitMultiplication = { type: 'multiplication', subType: 'twoDigitByTwoDigit', name: '两位数乘两位数' };
    
    // 其他可能的题型
    const otherTypes = [
        // 乘法练习题型（1种，两位数乘两位数已经确保被选择）
        { type: 'multiplication', subType: 'mental', name: '乘法口算' },
        
        // 单位练习题型（3种）
        { type: 'unit', subType: 'recognition', name: '单位认知' },
        { type: 'unit', subType: 'comparison', name: '比较大小' },
        { type: 'unit', subType: 'conversion', name: '单位转换' },
        
        // 混合运算题型（1种）
        { type: 'mixed', subType: 'mixed', name: '混合运算' }
    ];
    
    // 随机打乱其他题型
    const shuffledOtherTypes = [...otherTypes].sort(() => Math.random() - 0.5);
    
    // 选择前三种其他题型，再加上两位数乘法，共四种
    selectedTypes = [twoDigitMultiplication, ...shuffledOtherTypes.slice(0, 3)];
    
    // 再次打乱，以便两位数乘法不总是第一种题型
    selectedTypes.sort(() => Math.random() - 0.5);
    
    // 调试信息只在调试模式下显示
    if (isDebug) {
        console.log("已选择题型：", selectedTypes);
    }
}

// 生成题目
function generateQuestions() {
    // 清空题目容器
    document.getElementById('questionsLeft').innerHTML = '';
    document.getElementById('questionsRight').innerHTML = '';
    
    // 计算每种题型应该生成多少题
    const typesCount = selectedTypes.length; // 4种题型
    const questionsPerType = Math.floor(totalQuestions / typesCount); // 每种题型至少出现的题目数
    const remainder = totalQuestions % typesCount; // 余数，用于分配额外的题目
    
    // 为每种题型分配题目数量，确保每种类型至少有2题
    const typeQuestionCounts = selectedTypes.map((_, index) => {
        return questionsPerType + (index < remainder ? 1 : 0);
    });
    
    // 调试信息只在调试模式下显示
    if (isDebug) {
        console.log("每种题型题目数量：", typeQuestionCounts);
    }
    
    // 为每种题型生成题目
    let leftQuestions = [];
    let rightQuestions = [];
    
    for (let i = 0; i < selectedTypes.length; i++) {
        const type = selectedTypes[i];
        const count = typeQuestionCounts[i];
        
        for (let j = 0; j < count; j++) {
            // 为左侧和右侧分别生成相同类型但不同内容的题目
            const leftQuestion = generateQuestion(type);
            leftQuestions.push(leftQuestion);
            
            // 为右侧生成新的题目，而不是复制左侧的题目
            const rightQuestion = generateQuestion(type);
            rightQuestions.push(rightQuestion);
        }
    }
    
    // 打乱题目顺序，但保持左右两侧题型分布均匀
    questionsLeft = leftQuestions.sort(() => Math.random() - 0.5);
    questionsRight = rightQuestions.sort(() => Math.random() - 0.5);
    
    // 初始化题目HTML
    renderAllQuestions('Left');
    renderAllQuestions('Right');
}

// 显示当前题目
function displayCurrentQuestion(side) {
    const currentIndex = side === 'Left' ? currentQuestionLeft : currentQuestionRight;
    const questionsContainer = document.getElementById(`questions${side}`);
    
    // 隐藏所有题目
    const allQuestions = questionsContainer.querySelectorAll('.question-item');
    allQuestions.forEach(item => item.classList.remove('active'));
    
    // 显示当前题目
    const currentQuestion = questionsContainer.querySelector(`.question-item[data-index="${currentIndex}"]`);
    if (currentQuestion) {
        currentQuestion.classList.add('active');
    }
    
    // 更新进度显示
    document.getElementById(`progress${side}`).textContent = `第 ${currentIndex + 1} 题 / 共 ${totalQuestions} 题`;
    
    // 更新按钮状态
    const nextButton = document.getElementById(`next${side}`);
    const submitButton = document.getElementById(`submit${side}`);
    
    if (currentIndex === totalQuestions - 1) {
        // 最后一题，禁用下一题按钮，启用提交按钮
        nextButton.disabled = true;
        submitButton.disabled = false;
    } else {
        // 不是最后一题，启用下一题按钮，禁用提交按钮
        nextButton.disabled = false;
        submitButton.disabled = true;
    }
}

// 前往下一题
function goToNextQuestion(side) {
    const currentIndex = side === 'Left' ? currentQuestionLeft : currentQuestionRight;
    
    // 检查是否有下一题
    if (currentIndex < totalQuestions - 1) {
        // 更新当前题目索引
        if (side === 'Left') {
            currentQuestionLeft++;
        } else {
            currentQuestionRight++;
        }
        
        // 显示新的当前题目
        displayCurrentQuestion(side);
    }
}

// 渲染所有题目（但初始只显示第一题）
function renderAllQuestions(side) {
    const questionsContainer = document.getElementById(`questions${side}`);
    const questions = side === 'Left' ? questionsLeft : questionsRight;
    
    let html = '';
    
    questions.forEach((question, index) => {
        const isUnitRecognition = question.type === 'unit' && question.subType === 'recognition';
        const isComparison = question.type === 'unit' && question.subType === 'comparison';
        
        // 添加data-index属性用于索引
        html += `
            <div class="question-item" data-index="${index}">
                <div class="question-text">${index + 1}. [${question.name}] </div>
                <div class="question-content">${question.question}</div>`;
                
        if (isUnitRecognition || isComparison) {
            // 选择题，不显示输入框，而是显示选项按钮
            html += `
                <div class="option-buttons" data-question-index="${index}">
                    <div class="option-button" data-option="A">A</div>
                    <div class="option-button" data-option="B">B</div>
                    <div class="option-button" data-option="C">C</div>
                </div>
                <input type="hidden" class="question-input" id="answer${side}${index}" data-index="${index}">
            `;
        } else {
            // 普通题目，显示输入框
            html += `<input type="text" class="question-input" id="answer${side}${index}" data-index="${index}">`;
        }
        
        html += `</div>`;
    });
    
    questionsContainer.innerHTML = html;
    
    // 添加选项按钮的点击事件处理
    const optionGroups = questionsContainer.querySelectorAll('.option-buttons');
    optionGroups.forEach(group => {
        const questionIndex = group.getAttribute('data-question-index');
        const inputField = document.getElementById(`answer${side}${questionIndex}`);
        
        const options = group.querySelectorAll('.option-button');
        options.forEach(option => {
            option.addEventListener('click', function() {
                // 移除所有选项的选中状态
                options.forEach(opt => opt.classList.remove('selected'));
                
                // 添加当前选项的选中状态
                this.classList.add('selected');
                
                // 更新隐藏的输入框值
                const selectedOption = this.getAttribute('data-option');
                inputField.value = selectedOption;
            });
        });
    });
}

// 根据题型生成具体题目
function generateQuestion(type) {
    let question = {
        type: type.type,
        subType: type.subType,
        name: type.name,
        question: '',
        answer: 0
    };
    
    switch (type.type) {
        case 'multiplication':
            return generateMultiplicationQuestion(type.subType);
        case 'unit':
            return generateUnitQuestion(type.subType);
        case 'mixed':
            return generateMixedQuestion(type.subType);
        default:
            return question;
    }
}

// 生成乘法题
function generateMultiplicationQuestion(subType) {
    let num1, num2, answer, question;
    
    switch (subType) {
        case 'mental':
            // 乘法口算题 - 匹配原始页面的生成逻辑
            const mentalTypes = [
                'singleDigit',      // 一位数乘一位数
                'twoDigitBySingleDigit', // 两位数乘一位数
                'singleDigitByTens', // 一位数乘整十数
                'tensByTens',       // 整十数乘整十数
                'twoDigitBy10',     // 两位数乘10
                'hundredsBySingleDigit' // 整百数乘一位数
            ];
            
            // 随机选择题型
            const mentalType = mentalTypes[Math.floor(Math.random() * mentalTypes.length)];
            
            // 根据题型生成具体题目
            switch (mentalType) {
                case 'singleDigit':
                    // 一位数乘以一位数 (4-9范围)
                    num1 = Math.floor(Math.random() * 6) + 4; // 4-9
                    num2 = Math.floor(Math.random() * 6) + 4; // 4-9
                    break;
                case 'twoDigitBySingleDigit':
                    // 两位数乘以一位数
                    num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                    num2 = Math.floor(Math.random() * 6) + 4; // 4-9
                    break;
                case 'singleDigitByTens':
                    // 一位数乘以整十数
                    num1 = Math.floor(Math.random() * 6) + 4; // 4-9
                    num2 = (Math.floor(Math.random() * 9) + 1) * 10; // 10,20,...90
                    break;
                case 'tensByTens':
                    // 整十数乘以整十数
                    num1 = (Math.floor(Math.random() * 9) + 1) * 10; // 10,20,...90
                    num2 = (Math.floor(Math.random() * 9) + 1) * 10; // 10,20,...90
                    break;
                case 'twoDigitBy10':
                    // 两位数乘以10
                    num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                    num2 = 10;
                    break;
                case 'hundredsBySingleDigit':
                    // 整百数乘以一位数
                    num1 = (Math.floor(Math.random() * 9) + 1) * 100; // 100,200,...900
                    num2 = Math.floor(Math.random() * 6) + 4; // 4-9
                    break;
                default:
                    num1 = Math.floor(Math.random() * 6) + 4; // 4-9
                    num2 = Math.floor(Math.random() * 6) + 4; // 4-9
            }
            
            answer = num1 * num2;
            question = `${num1} × ${num2} = ?`;
            break;
            
        case 'twoDigitByTwoDigit':
            // 两位数乘以两位数 - 多种类型的两位数乘法
            const twoDigitTypes = [
                'regular',           // 普通两位数相乘
                'specialBy11',       // 两位数乘以11
                'complementaryDigits' // 十位相同个位和为10的乘法
            ];
            
            const twoDigitType = twoDigitTypes[Math.floor(Math.random() * twoDigitTypes.length)];
            
            switch (twoDigitType) {
                case 'regular':
                    // 普通两位数相乘
                    num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                    num2 = Math.floor(Math.random() * 89) + 11; // 11-99
                    break;
                case 'specialBy11':
                    // 两位数乘以11
                    num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                    num2 = 11;
                    break;
                case 'complementaryDigits':
                    // 十位相同个位和为10的两位数相乘
                    const tens = Math.floor(Math.random() * 9) + 1; // 1-9
                    const units1 = Math.floor(Math.random() * 5) + 1; // 1-5
                    const units2 = 10 - units1; // 使个位数相加为10
                    
                    num1 = tens * 10 + units1;
                    num2 = tens * 10 + units2;
                    break;
                default:
                    num1 = Math.floor(Math.random() * 89) + 11; // 11-99
                    num2 = Math.floor(Math.random() * 89) + 11; // 11-99
            }
            
            answer = num1 * num2;
            question = `${num1} × ${num2} = ?`;
            break;
            
        default:
            num1 = Math.floor(Math.random() * 9) + 1; // 1-9
            num2 = Math.floor(Math.random() * 9) + 1; // 1-9
            answer = num1 * num2;
            question = `${num1} × ${num2} = ?`;
    }
    
    return {
        type: 'multiplication',
        subType: subType,
        name: getTypeName('multiplication', subType),
        question: question,
        answer: answer
    };
}

// 生成单位题
function generateUnitQuestion(subType) {
    let question, answer;
    
    // 定义单位数组
    const lengthUnits = ['毫米', '厘米', '分米', '米', '千米'];
    const weightUnits = ['克', '千克', '吨'];
    
    switch (subType) {
        case 'recognition':
            // 单位认知题 - 匹配原始页面的生成逻辑
            const categories = ['length', 'weight'];
            const category = categories[Math.floor(Math.random() * categories.length)];
            const examples = realLifeExamples[category];
            const selectedExample = examples[Math.floor(Math.random() * examples.length)];
            
            // 打乱选项顺序
            const shuffledOptions = [...selectedExample.options].sort(() => Math.random() - 0.5);
            
            question = `${selectedExample.name}应该用哪个单位来表示？<br>A. ${shuffledOptions[0]}<br>B. ${shuffledOptions[1]}<br>C. ${shuffledOptions[2]}`;
            
            // 确定正确答案的选项
            answer = shuffledOptions.findIndex(option => option === selectedExample.answer);
            answer = ['A', 'B', 'C'][answer]; // 转换为字母答案
            break;
            
        case 'comparison':
            // 单位大小比较题 - 修改为选择题形式
            // 随机选择类别：长度或重量
            const compCategories = ['length', 'weight'];
            const compCategory = compCategories[Math.floor(Math.random() * compCategories.length)];
            
            // 根据类别选择单位和值的范围
            let valueA, valueB, unitA, unitB;
            if (compCategory === 'length') {
                // 长度单位比较
                const unitIndexA = Math.floor(Math.random() * lengthUnits.length);
                let unitIndexB;
                do {
                    unitIndexB = Math.floor(Math.random() * lengthUnits.length);
                } while (unitIndexA === unitIndexB);
                
                unitA = lengthUnits[unitIndexA];
                unitB = lengthUnits[unitIndexB];
                
                // 根据单位调整数值范围
                switch (unitA) {
                    case '毫米': valueA = Math.floor(Math.random() * 900) + 100; break; // 100-999毫米
                    case '厘米': valueA = Math.floor(Math.random() * 90) + 10; break;   // 10-99厘米
                    case '分米': valueA = Math.floor(Math.random() * 90) + 10; break;   // 10-99分米
                    case '米': valueA = Math.floor(Math.random() * 90) + 1; break;      // 1-90米
                    case '千米': valueA = Math.floor(Math.random() * 9) + 1; break;      // 1-9千米
                    default: valueA = Math.floor(Math.random() * 90) + 10;
                }
                
                switch (unitB) {
                    case '毫米': valueB = Math.floor(Math.random() * 900) + 100; break;
                    case '厘米': valueB = Math.floor(Math.random() * 90) + 10; break;
                    case '分米': valueB = Math.floor(Math.random() * 90) + 10; break;
                    case '米': valueB = Math.floor(Math.random() * 90) + 1; break;
                    case '千米': valueB = Math.floor(Math.random() * 9) + 1; break;
                    default: valueB = Math.floor(Math.random() * 90) + 10;
                }
            } else {
                // 重量单位比较
                const unitIndexA = Math.floor(Math.random() * weightUnits.length);
                let unitIndexB;
                do {
                    unitIndexB = Math.floor(Math.random() * weightUnits.length);
                } while (unitIndexA === unitIndexB);
                
                unitA = weightUnits[unitIndexA];
                unitB = weightUnits[unitIndexB];
                
                // 根据单位调整数值范围
                switch (unitA) {
                    case '克': valueA = Math.floor(Math.random() * 900) + 100; break; // 100-999克
                    case '千克': valueA = Math.floor(Math.random() * 90) + 10; break;   // 10-99千克
                    case '吨': valueA = Math.floor(Math.random() * 9) + 1; break;       // 1-9吨
                    default: valueA = Math.floor(Math.random() * 90) + 10;
                }
                
                switch (unitB) {
                    case '克': valueB = Math.floor(Math.random() * 900) + 100; break;
                    case '千克': valueB = Math.floor(Math.random() * 90) + 10; break;
                    case '吨': valueB = Math.floor(Math.random() * 9) + 1; break;
                    default: valueB = Math.floor(Math.random() * 90) + 10;
                }
            }
            
            // 构建题目 - 改为选择题形式
            question = `${valueA}${unitA} 与 ${valueB}${unitB} 的大小关系是：<br>A. ${valueA}${unitA} < ${valueB}${unitB}<br>B. ${valueA}${unitA} = ${valueB}${unitB}<br>C. ${valueA}${unitA} > ${valueB}${unitB}`;
            
            // 确定答案
            let valueAInBase, valueBInBase;
            if (compCategory === 'length') {
                valueAInBase = convertToBaseUnit(valueA, unitA, 'length');
                valueBInBase = convertToBaseUnit(valueB, unitB, 'length');
            } else {
                valueAInBase = convertToBaseUnit(valueA, unitA, 'weight');
                valueBInBase = convertToBaseUnit(valueB, unitB, 'weight');
            }
            
            // 改为字母答案形式
            if (valueAInBase > valueBInBase) {
                answer = 'C';
            } else if (valueAInBase < valueBInBase) {
                answer = 'A';
            } else {
                answer = 'B';
            }
            break;
            
        case 'conversion':
            // 单位转换题 - 匹配原始页面的生成逻辑
            // 随机选择类别：长度或重量，以及转换方向（大单位到小单位 或 小单位到大单位）
            const convCategories = ['length', 'weight'];
            const convCategory = convCategories[Math.floor(Math.random() * convCategories.length)];
            const isSmallToBig = Math.random() < 0.5; // 小单位到大单位
            
            let fromUnit, toUnit, value;
            
            if (convCategory === 'length') {
                // 长度单位转换
                const fromLengthIndex = Math.floor(Math.random() * (lengthUnits.length - 1));
                let toLengthIndex;
                
                if (isSmallToBig) {
                    // 小单位到大单位，例如厘米→米
                    toLengthIndex = fromLengthIndex + 1 + Math.floor(Math.random() * (lengthUnits.length - fromLengthIndex - 1));
                    
                    // 生成能整除的数值
                    const factor = getConversionFactor(lengthUnits[fromLengthIndex], lengthUnits[toLengthIndex], 'length');
                    value = factor * (Math.floor(Math.random() * 9) + 1);
                } else {
                    // 大单位到小单位，例如米→厘米
                    toLengthIndex = Math.floor(Math.random() * fromLengthIndex);
                    
                    // 生成合适的数值
                    value = Math.floor(Math.random() * 9) + 1;
                }
                
                fromUnit = lengthUnits[fromLengthIndex];
                toUnit = lengthUnits[toLengthIndex];
            } else {
                // 重量单位转换
                const fromWeightIndex = Math.floor(Math.random() * (weightUnits.length - 1));
                let toWeightIndex;
                
                if (isSmallToBig) {
                    // 小单位到大单位，例如克→千克
                    toWeightIndex = fromWeightIndex + 1 + Math.floor(Math.random() * (weightUnits.length - fromWeightIndex - 1));
                    
                    // 生成能整除的数值
                    const factor = getConversionFactor(weightUnits[fromWeightIndex], weightUnits[toWeightIndex], 'weight');
                    value = factor * (Math.floor(Math.random() * 9) + 1);
                } else {
                    // 大单位到小单位，例如千克→克
                    toWeightIndex = Math.floor(Math.random() * fromWeightIndex);
                    
                    // 生成合适的数值
                    value = Math.floor(Math.random() * 9) + 1;
                }
                
                fromUnit = weightUnits[fromWeightIndex];
                toUnit = weightUnits[toWeightIndex];
            }
            
            // 构建题目
            question = `${value}${fromUnit} = ?${toUnit}`;
            
            // 计算答案
            if (convCategory === 'length') {
                answer = convertLength(value, fromUnit, toUnit);
            } else {
                answer = convertWeight(value, fromUnit, toUnit);
            }
            break;
            
        default:
            question = '单位练习题';
            answer = 0;
    }
    
    return {
        type: 'unit',
        subType: subType,
        name: getTypeName('unit', subType),
        question: question,
        answer: answer
    };
}

// 将值转换为基本单位（毫米或克）
function convertToBaseUnit(value, unit, category) {
    if (category === 'length') {
        switch (unit) {
            case '毫米': return value;
            case '厘米': return value * 10;
            case '分米': return value * 100;
            case '米': return value * 1000;
            case '千米': return value * 1000000;
        }
    } else { // weight - 基准单位改为克
        switch (unit) {
            case '克': return value;
            case '千克': return value * 1000;
            case '吨': return value * 1000000;
        }
    }
    return value;
}

// 获取单位转换因子
function getConversionFactor(fromUnit, toUnit, category) {
    const baseValue = convertToBaseUnit(1, fromUnit, category);
    const targetValue = convertToBaseUnit(1, toUnit, category);
    return baseValue / targetValue;
}

// 生成混合运算题
function generateMixedQuestion(subType) {
    let question, answer;
    
    // 混合运算 - 匹配原始页面的生成逻辑
    // 1. 随机决定是否使用括号
    const hasBracket = Math.random() < 0.3 ? true : false;
    
    // 2. 生成运算符
    const operators = ['+', '-', '×', '÷'];
    let operator1 = operators[Math.floor(Math.random() * operators.length)];
    let operator2 = operators[Math.floor(Math.random() * operators.length)];
    
    // 检查是否有连续的乘法
    if (operator1 === '×' && operator2 === '×') {
        operator2 = Math.random() < 0.5 ? '+' : '-';
    }
    
    // 3. 生成数字
    let nums = [];
    
    // 根据运算符生成合适的数字
    if (hasBracket) {
        // 括号内的运算
        if (operator1 === '÷') {
            // 除法：确保能整除
            const divisor = Math.floor(Math.random() * 9) + 1;  // 除数 1-9
            const quotient = Math.floor(Math.random() * 99) + 1; // 商 1-99
            nums.push(divisor * quotient);        // 被除数
            nums.push(divisor);                   // 除数
        } else if (operator1 === '×') {
            const firstNum = Math.floor(Math.random() * 29) + 2;    // 第一个乘数最多两位
            const secondNum = Math.floor(Math.random() * 8) + 2;    // 第二个乘数一位数
            nums.push(firstNum);
            nums.push(secondNum);
        } else {
            // 加减法时，确保第一个数大于第二个数
            const num1 = Math.floor(Math.random() * 100) + 100;
            const num2 = Math.floor(Math.random() * (num1 - 1)) + 1; // 确保减法不会出现负数
            nums.push(num1);
            nums.push(num2);
        }

        // 计算括号内的结果
        let bracketResult;
        switch (operator1) {
            case '+': bracketResult = nums[0] + nums[1]; break;
            case '-': bracketResult = nums[0] - nums[1]; break;
            case '×': bracketResult = nums[0] * nums[1]; break;
            case '÷': bracketResult = nums[0] / nums[1]; break;
        }

        // 根据括号内的结果生成第三个数
        if (operator2 === '÷') {
            // 如果是除法，确保能整除
            let divisor = Math.floor(Math.random() * 9) + 1;
            while (bracketResult % divisor !== 0) {
                divisor = Math.floor(Math.random() * 9) + 1;
            }
            nums.push(divisor);
        } else if (operator2 === '×') {
            nums.push(Math.floor(Math.random() * 8) + 2);
        } else if (operator2 === '-') {
            nums.push(Math.floor(Math.random() * bracketResult) + 1); // 确保减法不会出现负数
        } else {
            nums.push(Math.floor(Math.random() * 20) + 1);
        }
        
        // 构建题目字符串
        question = `(${nums[0]} ${operator1} ${nums[1]}) ${operator2} ${nums[2]} = ?`;
        
    } else {
        // 无括号的情况
        if (operator1 === '÷') {
            const divisor = Math.floor(Math.random() * 9) + 1;
            const quotient = Math.floor(Math.random() * 99) + 1;
            nums.push(divisor * quotient);
            nums.push(divisor);
        } else if (operator1 === '×') {
            const firstNum = Math.floor(Math.random() * 29) + 2;
            const secondNum = Math.floor(Math.random() * 8) + 2;
            nums.push(firstNum);
            nums.push(secondNum);
        } else {
            const num1 = Math.floor(Math.random() * 100) + 100;
            const num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
            nums.push(num1);
            nums.push(num2);
        }

        // 计算第一步的结果
        let firstResult;
        switch (operator1) {
            case '+': firstResult = nums[0] + nums[1]; break;
            case '-': firstResult = nums[0] - nums[1]; break;
            case '×': firstResult = nums[0] * nums[1]; break;
            case '÷': firstResult = nums[0] / nums[1]; break;
        }

        // 根据第一步的结果生成第三个数
        if (operator2 === '÷') {
            let divisor = Math.floor(Math.random() * 9) + 1;
            while (firstResult % divisor !== 0) {
                divisor = Math.floor(Math.random() * 9) + 1;
            }
            nums.push(divisor);
        } else if (operator2 === '×') {
            nums.push(Math.floor(Math.random() * 8) + 2);
        } else if (operator2 === '-') {
            nums.push(Math.floor(Math.random() * firstResult) + 1);
        } else {
            nums.push(Math.floor(Math.random() * 20) + 1);
        }
        
        // 构建题目字符串
        question = `${nums[0]} ${operator1} ${nums[1]} ${operator2} ${nums[2]} = ?`;
    }
    
    // 4. 计算最终结果
    answer = calculateMixedResult(nums, operator1, operator2, hasBracket);
    
    // 确保结果是整数且不超过10000
    if (!Number.isInteger(answer) || answer <= 0 || answer > 10000) {
        // 如果结果不满足要求，重新生成题目
        return generateMixedQuestion(subType);
    }
    
    return {
        type: 'mixed',
        subType: subType,
        name: getTypeName('mixed', subType),
        question: question,
        answer: answer
    };
}

// 计算混合运算结果
function calculateMixedResult(nums, operator1, operator2, hasBracket) {
    let result;
    
    if (hasBracket) {
        // 先计算括号内的结果
        let bracketResult;
        switch (operator1) {
            case '+': bracketResult = nums[0] + nums[1]; break;
            case '-': bracketResult = nums[0] - nums[1]; break;
            case '×': bracketResult = nums[0] * nums[1]; break;
            case '÷': bracketResult = nums[0] / nums[1]; break;
        }
        
        // 再计算括号外的结果
        switch (operator2) {
            case '+': result = bracketResult + nums[2]; break;
            case '-': result = bracketResult - nums[2]; break;
            case '×': result = bracketResult * nums[2]; break;
            case '÷': result = bracketResult / nums[2]; break;
        }
    } else {
        // 无括号时，按照运算顺序计算
        if (operator1 === '×' || operator1 === '÷') {
            // 先算第一个乘除
            let firstResult;
            switch (operator1) {
                case '×': firstResult = nums[0] * nums[1]; break;
                case '÷': firstResult = nums[0] / nums[1]; break;
            }
            
            // 再算加减或第二个乘除
            switch (operator2) {
                case '+': result = firstResult + nums[2]; break;
                case '-': result = firstResult - nums[2]; break;
                case '×': result = firstResult * nums[2]; break;
                case '÷': result = firstResult / nums[2]; break;
            }
        } else if (operator2 === '×' || operator2 === '÷') {
            // 先算第二个乘除
            let secondResult;
            switch (operator2) {
                case '×': secondResult = nums[1] * nums[2]; break;
                case '÷': secondResult = nums[1] / nums[2]; break;
            }
            
            // 再算加减
            switch (operator1) {
                case '+': result = nums[0] + secondResult; break;
                case '-': result = nums[0] - secondResult; break;
            }
        } else {
            // 都是加减，从左到右计算
            let firstResult;
            switch (operator1) {
                case '+': firstResult = nums[0] + nums[1]; break;
                case '-': firstResult = nums[0] - nums[1]; break;
            }
            switch (operator2) {
                case '+': result = firstResult + nums[2]; break;
                case '-': result = firstResult - nums[2]; break;
            }
        }
    }
    
    // 限制小数位数
    return limitDecimalPlaces(result);
}

// 获取题型名称
function getTypeName(type, subType) {
    const typeNames = {
        'multiplication': {
            'mental': '乘法口算',
            'twoDigitByTwoDigit': '两位数乘两位数'
        },
        'unit': {
            'recognition': '单位认知',
            'comparison': '比较大小',
            'conversion': '单位转换'
        },
        'mixed': {
            'mixed': '混合运算'
        }
    };
    
    return typeNames[type] && typeNames[type][subType] ? typeNames[type][subType] : '未知题型';
}

// 长度单位转换函数
function convertLength(value, fromUnit, toUnit) {
    // 转换成毫米
    let valueInMm;
    switch (fromUnit) {
        case '毫米': valueInMm = value; break;
        case '厘米': valueInMm = value * 10; break;
        case '分米': valueInMm = value * 100; break;
        case '米':   valueInMm = value * 1000; break;
        case '千米': valueInMm = value * 1000000; break;
        default:     valueInMm = value;
    }
    
    // 从毫米转换成目标单位
    let result;
    switch (toUnit) {
        case '毫米': result = valueInMm; break;
        case '厘米': result = valueInMm / 10; break;
        case '分米': result = valueInMm / 100; break;
        case '米':   result = valueInMm / 1000; break;
        case '千米': result = valueInMm / 1000000; break;
        default:     result = valueInMm;
    }
    
    return limitDecimalPlaces(result);
}

// 重量单位转换函数
function convertWeight(value, fromUnit, toUnit) {
    // 转换成克(基本单位)
    let valueInG;
    switch (fromUnit) {
        case '克':   valueInG = value; break;
        case '千克': valueInG = value * 1000; break;
        case '吨':   valueInG = value * 1000000; break;
        default:     valueInG = value;
    }
    
    // 从克转换成目标单位
    let result;
    switch (toUnit) {
        case '克':   result = valueInG; break;
        case '千克': result = valueInG / 1000; break;
        case '吨':   result = valueInG / 1000000; break;
        default:     result = valueInG;
    }
    
    return limitDecimalPlaces(result);
}

// 开始计时
function startTimer(side) {
    const timerElement = document.getElementById(`timer${side}`);
    
    if (side === 'Left') {
        startTimeLeft = new Date();
        timerIntervalLeft = setInterval(() => {
            updateTimer(side, timerElement, startTimeLeft);
        }, 1000);
    } else {
        startTimeRight = new Date();
        timerIntervalRight = setInterval(() => {
            updateTimer(side, timerElement, startTimeRight);
        }, 1000);
    }
}

// 更新计时器
function updateTimer(side, timerElement, startTime) {
    const currentTime = new Date();
    const seconds = Math.floor((currentTime - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    // 存储总秒数用于比较用时
    if (side === 'Left') {
        leftTimeInSeconds = seconds;
    } else {
        rightTimeInSeconds = seconds;
    }
    
    timerElement.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// 数字补零
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// 提交答案
function submitAnswers(side) {
    // 获取计时器的值并停止计时
    if (side === 'Left') {
        if (timerIntervalLeft) {
            clearInterval(timerIntervalLeft);
        }
        isLeftSubmitted = true;
    } else {
        if (timerIntervalRight) {
            clearInterval(timerIntervalRight);
        }
        isRightSubmitted = true;
    }
    
    // 禁用提交按钮
    document.getElementById(`submit${side}`).disabled = true;
    
    // 获取所有答案
    const questions = side === 'Left' ? questionsLeft : questionsRight;
    const inputs = document.querySelectorAll(`#questions${side} .question-input`);
    
    // 计算得分
    let score = 0;
    let resultsHtml = '';
    
    inputs.forEach((input, index) => {
        const userAnswer = input.value.trim();
        const correctAnswer = questions[index].answer.toString();
        const isCorrect = userAnswer.toUpperCase() === correctAnswer.toUpperCase();
        
        if (isCorrect) {
            score++;
        }
        
        resultsHtml += `
            <div class="result-item">
                <div class="question">${index + 1}. ${questions[index].question}</div>
                <div class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">${userAnswer || '未作答'}</div>
                <div class="correct-answer">${correctAnswer}</div>
            </div>
        `;
    });
    
    // 保存得分
    if (side === 'Left') {
        leftScore = score;
    } else {
        rightScore = score;
    }
    
    // 添加总分
    resultsHtml += `<div class="score-display">得分: ${score}/${questions.length}</div>`;
    
    // 显示结果
    const resultsElement = document.getElementById(`results${side}`);
    resultsElement.innerHTML = resultsHtml;
    resultsElement.classList.remove('hidden');
    
    // 如果两边都提交了，显示"再来一局"按钮，播放结束音效，判定获胜者
    if (isLeftSubmitted && isRightSubmitted) {
        // 播放游戏结束音效
        playGameOverSound();
        
        // 显示"再来一局"按钮
        document.getElementById('startCompetition').classList.remove('hidden');
        document.getElementById('startCompetition').textContent = '再来一局';
        
        // 判定获胜者并显示祝贺信息
        determineWinner();
    }
}

// 播放游戏结束音效
function playGameOverSound() {
    // 如果音效加载成功，播放
    if (gameOverSound) {
        // 重置音频位置，确保每次都从头播放
        gameOverSound.currentTime = 0;
        gameOverSound.play().catch(e => {
            // 错误处理，可能由于浏览器策略限制自动播放
            console.log("无法播放音效:", e);
        });
    }
}

// 判定获胜者
function determineWinner() {
    let winnerSide = null;
    
    // 判断条件：全部8道题全对且用时最短
    // 第一个条件：全对
    const leftPerfect = leftScore === totalQuestions;
    const rightPerfect = rightScore === totalQuestions;
    
    if (leftPerfect && rightPerfect) {
        // 如果两边都是全对的，比较用时
        winnerSide = leftTimeInSeconds < rightTimeInSeconds ? 'Left' : 'Right';
    } else if (leftPerfect) {
        // 只有左边全对
        winnerSide = 'Left';
    } else if (rightPerfect) {
        // 只有右边全对
        winnerSide = 'Right';
    } else {
        // 如果两边都没有全对，则比较得分
        if (leftScore > rightScore) {
            winnerSide = 'Left';
        } else if (rightScore > leftScore) {
            winnerSide = 'Right';
        } else {
            // 得分相同，比较用时
            winnerSide = leftTimeInSeconds < rightTimeInSeconds ? 'Left' : 'Right';
        }
    }
    
    // 如果有获胜者，添加祝贺图样
    if (winnerSide) {
        addWinnerDecoration(winnerSide);
    }
}

// 添加获胜者装饰
function addWinnerDecoration(side) {
    removeWinnerDecoration(); // 先移除可能已存在的装饰
    
    // 获取获胜者信息
    const playerName = side === 'Left' ? '选手一' : '选手二';
    
    // 移除旧的胜利者类
    document.querySelectorAll('.player').forEach(player => {
        player.classList.remove('winner');
    });
    
    // 为获胜者添加高亮类
    const winnerPlayer = document.querySelector(`.player-${side.toLowerCase()}`);
    if (winnerPlayer) {
        winnerPlayer.classList.add('winner');
    }
    
    // 创建装饰元素并添加到页面顶部
    const decoration = document.createElement('div');
    decoration.className = 'winner-decoration';
    decoration.innerHTML = `🏆 恭喜${playerName}获胜！用时: ${formatTime(side === 'Left' ? leftTimeInSeconds : rightTimeInSeconds)} 🎉`;
    
    // 添加到body的最前面，确保它是在页面顶部
    document.body.insertBefore(decoration, document.body.firstChild);
}

// 格式化时间显示
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// 移除获胜者装饰
function removeWinnerDecoration() {
    // 移除装饰元素
    const decorations = document.querySelectorAll('.winner-decoration');
    decorations.forEach(decoration => decoration.remove());
    
    // 移除玩家高亮
    document.querySelectorAll('.player').forEach(player => {
        player.classList.remove('winner');
    });
}

// 限制小数点后的位数（最多3位）
function limitDecimalPlaces(num) {
    return Math.round(num * 1000) / 1000;
} 