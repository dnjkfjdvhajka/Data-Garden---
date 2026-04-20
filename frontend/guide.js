// 花朵详细信息数据
const flowerData = {
    '子时': {
        name: '昙花',
        time: '23:00–01:00',
        ancient: '夜半独开，经晓即谢，香清而寂（《花镜》）',
        temperament: '幽冷孤绝、一瞬芳华',
        mainSenses: '视觉（暗夜素白流光）+ 嗅觉（极淡冷香）',
        secondarySenses: '触觉（薄如蝉翼清冷）',
        interpretation: '深夜无光，以纯白盛放视觉惊艳为主，香气幽微清冷，无声静谧。',
        image: '../1.png',
        hour: 0
    },
    '丑时': {
        name: '牵牛花',
        time: '01:00–03:00',
        ancient: '凌晨破晓而舒，日高而敛（《本草纲目》）',
        temperament: '破晓初心、柔弱坚韧',
        mainSenses: '视觉（晨露清新浅紫）',
        secondarySenses: '触觉（柔嫩蔓柔）',
        interpretation: '天将亮未亮，露水微光视觉清新，几乎无香，以柔软视觉生机为主。',
        image: '../2.png',
        hour: 2
    },
    '寅时': {
        name: '木槿',
        time: '03:00–05:00',
        ancient: '有女同车，颜如舜华（《诗经・郑风》）',
        temperament: '朝开暮落、从容豁达',
        mainSenses: '视觉（柔和温润花色）+ 触觉（丝绒柔瓣）',
        secondarySenses: '嗅觉（淡若无香）',
        interpretation: '拂晓微光，花色温柔柔和，花瓣细腻绵软，清雅无声。',
        image: '../3.png',
        hour: 4
    },
    '卯时': {
        name: '桃花',
        time: '05:00–07:00',
        ancient: '桃之夭夭，灼灼其华（《诗经・周南》）',
        temperament: '明媚烂漫、春日生机',
        mainSenses: '视觉（明媚艳丽暖色）',
        secondarySenses: '嗅觉（浅甜花香）',
        interpretation: '晨光初醒，桃红耀眼明媚，是全天视觉最烂漫热烈的花。',
        image: '../4.png',
        hour: 6
    },
    '辰时': {
        name: '兰草',
        time: '07:00–09:00',
        ancient: '兰生幽谷，不以无人而不芳（《孔子家语》）',
        temperament: '幽谷清雅、君子高洁',
        mainSenses: '嗅觉（幽谷暗香）',
        secondarySenses: '视觉（清雅素绿）、触觉（温润清雅）',
        interpretation: '清晨清气流动，暗香悠远内敛，以嗅觉气韵为核心。',
        image: '../5.png',
        hour: 8
    },
    '巳时': {
        name: '芍药',
        time: '09:00–11:00',
        ancient: '伊其相谑，赠之以勺药（《诗经・郑风》）',
        temperament: '温婉华贵、深情浪漫',
        mainSenses: '视觉（雍容柔美花色）+ 触觉（饱满柔润花瓣）',
        secondarySenses: '嗅觉（温润淡香）',
        interpretation: '上午暖光柔和，花型饱满柔美，触感丰盈温婉。',
        image: '../6.png',
        hour: 10
    },
    '午时': {
        name: '莲花',
        time: '11:00–13:00',
        ancient: '出淤泥而不染，濯清涟而不妖（《爱莲说》）',
        temperament: '清净高洁、中正澄澈',
        mainSenses: '视觉（洁净清透素雅）',
        secondarySenses: '嗅觉（清心淡香）、触觉（水润清凉）',
        interpretation: '正午日光最盛，水清花净，视觉澄澈清净，自带清凉感。',
        image: '../7.png',
        hour: 12
    },
    '未时': {
        name: '月季',
        time: '13:00–15:00',
        ancient: '月月常开，四时不绝（《广群芳谱》）',
        temperament: '恒久温柔、四季坚韧',
        mainSenses: '视觉（温润持久花色）',
        secondarySenses: '触觉（厚实柔瓣）、嗅觉（清甜淡香）',
        interpretation: '午后柔光，花色温润耐看，花瓣厚实有韧性。',
        image: '../8.png',
        hour: 14
    },
    '申时': {
        name: '茉莉',
        time: '15:00–17:00',
        ancient: '一卉能熏一室香（宋・董嗣杲）',
        temperament: '冰清玉润、清雅沁心',
        mainSenses: '嗅觉（清甜沁骨浓香）',
        secondarySenses: '视觉（洁白小巧）、触觉（莹润微凉）',
        interpretation: '斜阳微风，香气扩散最强，是全天嗅觉主导最明显的花。',
        image: '../9.png',
        hour: 16
    },
    '酉时': {
        name: '桂花',
        time: '17:00–19:00',
        ancient: '何须浅碧深红色，自是花中第一流（李清照）',
        temperament: '温润醇厚、内敛悠长',
        mainSenses: '嗅觉（绵长醇厚暗香）',
        secondarySenses: '视觉（细碎暖黄暮色）',
        interpretation: '黄昏暮色，香气悠远不散，微小花朵视觉柔和，以嗅觉韵味为主。',
        image: '../10.png',
        hour: 18
    },
    '戌时': {
        name: '萱草',
        time: '19:00–21:00',
        ancient: '忘忧安神，夕开静美（《本草纲目》）',
        temperament: '温柔治愈、平和忘忧',
        mainSenses: '触觉（柔和舒缓）+ 嗅觉（安神淡香）',
        secondarySenses: '视觉（暖柔暮色花色）',
        interpretation: '入夜静谧，偏向内心舒缓安抚，安神治愈感官。',
        image: '../11.png',
        hour: 20
    },
    '亥时': {
        name: '夜来香',
        time: '21:00–23:00',
        ancient: '夜静乃放，香随风逸（《南方草木状》）',
        temperament: '暗夜幽秘、朦胧温柔',
        mainSenses: '嗅觉（夜间浓郁幽香）',
        secondarySenses: '视觉（朦胧暗调）、听觉（静谧气息）',
        interpretation: '深夜寂静，香气夜间爆发，朦胧幽暗，静谧氛围感最强。',
        image: '../12.png',
        hour: 22
    }
};

// 当前选中的花朵
let currentFlower = null;

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const startBtn = document.getElementById('startBtn');
    const scrollContainer = document.getElementById('scrollContainer');
    const flowerContainer = document.getElementById('flowerContainer');
    const enterBtn = document.getElementById('enterBtn');
    const flowerItems = document.querySelectorAll('.flower-item');
    
    // 点击开始按钮
    startBtn.addEventListener('click', function() {
        // 隐藏开始按钮
        startBtn.style.opacity = '0';
        startBtn.style.pointerEvents = 'none';
        
        // 展开卷轴
        scrollContainer.classList.add('scroll-open');
        
        // 卷轴展开后，花朵左移
        setTimeout(() => {
            flowerContainer.classList.add('flower-move');
            
            // 花朵左移结束后，显示进入按钮
            setTimeout(() => {
                enterBtn.classList.add('enter-show');
                // 启用拖动功能
                enableDrag(flowerContainer);
                // 绑定花朵点击事件
                bindFlowerClickEvents();
            }, 8000); // 花朵左移时长8秒
        }, 1500); // 卷轴展开时长1.5秒
    });
    
    // 点击进入花园按钮
    enterBtn.addEventListener('click', function() {
        // 播放音效（如果有）
        try {
            const audio = new Audio('../sound/click.mp3');
            audio.play();
        } catch (error) {
            console.log('音效播放失败:', error);
        }
        
        // 跳转至花园页面
        setTimeout(() => {
            window.location.href = 'garden.html';
        }, 300);
    });
    
    // 动画容错：12秒后自动显示进入按钮
    setTimeout(() => {
        if (!enterBtn.classList.contains('enter-show')) {
            enterBtn.classList.add('enter-show');
            // 启用拖动功能
            enableDrag(flowerContainer);
            // 绑定花朵点击事件
            bindFlowerClickEvents();
        }
    }, 12000);
    
    // 绑定花朵点击事件
    function bindFlowerClickEvents() {
        flowerItems.forEach(item => {
            item.addEventListener('click', function() {
                const flowerName = this.getAttribute('data-flower');
                showFlowerModal(flowerName);
            });
        });
    }
    
    // 启用拖动功能
    function enableDrag(element) {
        let isDragging = false;
        let startX = 0;
        let currentTranslateX = -1260; // 花朵移动结束后的初始位置
        
        // 获取当前transform值
        function getCurrentTranslateX() {
            const transform = window.getComputedStyle(element).getPropertyValue('transform');
            if (transform === 'none') return 0;
            const matrix = new DOMMatrix(transform);
            return matrix.e;
        }
        
        element.addEventListener('mousedown', function(e) {
            isDragging = true;
            startX = e.clientX;
            currentTranslateX = getCurrentTranslateX();
        });
        
        element.addEventListener('mouseleave', function() {
            isDragging = false;
        });
        
        element.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        element.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            const deltaX = (e.clientX - startX) * 2; // 增加拖动速度，2倍速
            const newTranslateX = currentTranslateX + deltaX;
            // 限制拖动范围，防止拖出边界
            if (newTranslateX > 1200) return; // 最右边
            if (newTranslateX < -2500) return; // 最左边
            element.style.transform = `translateX(${newTranslateX}px)`;
        });
        
        // 移动端触摸拖动
        element.addEventListener('touchstart', function(e) {
            isDragging = true;
            startX = e.touches[0].clientX;
            currentTranslateX = getCurrentTranslateX();
        });
        
        element.addEventListener('touchend', function() {
            isDragging = false;
        });
        
        element.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            e.preventDefault();
            const deltaX = (e.touches[0].clientX - startX) * 2; // 增加拖动速度，2倍速
            const newTranslateX = currentTranslateX + deltaX;
            // 限制拖动范围，防止拖出边界
            if (newTranslateX > 1200) return; // 最右边
            if (newTranslateX < -2500) return; // 最左边
            element.style.transform = `translateX(${newTranslateX}px)`;
        });
    }
});

// 显示花朵详细信息模态框
function showFlowerModal(flowerName) {
    const flower = flowerData[flowerName];
    if (!flower) return;
    
    currentFlower = flower;
    
    // 填充模态框数据
    document.getElementById('modalTitle').textContent = `${flowerName} · ${flower.name}`;
    document.getElementById('modalFlowerImg').src = flower.image;
    document.getElementById('modalFlowerImg').alt = flower.name;
    document.getElementById('modalTime').textContent = `${flowerName} ${flower.time}｜${flower.name}`;
    document.getElementById('modalAncient').textContent = flower.ancient;
    document.getElementById('modalTemperament').textContent = flower.temperament;
    document.getElementById('modalMainSenses').textContent = flower.mainSenses;
    document.getElementById('modalSecondarySenses').textContent = flower.secondarySenses;
    document.getElementById('modalInterpretation').textContent = flower.interpretation;
    
    // 显示模态框
    document.getElementById('flowerModal').classList.add('active');
}

// 关闭模态框
function closeModal() {
    document.getElementById('flowerModal').classList.remove('active');
    currentFlower = null;
}

// 从模态框进入花园
function goToGarden() {
    if (currentFlower) {
        // 播放音效（如果有）
        try {
            const audio = new Audio('../sound/click.mp3');
            audio.play();
        } catch (error) {
            console.log('音效播放失败:', error);
        }
        
        // 跳转至花园页面，并传递选中的时辰
        setTimeout(() => {
            window.location.href = `garden.html?hour=${currentFlower.hour}`;
        }, 300);
    } else {
        // 如果没有选中花朵，直接跳转
        window.location.href = 'garden.html';
    }
}

// 返回首页
function goBack() {
    window.location.href = 'index.html';
}