(()=> {

    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화 된(눈 앞에 보고있는) 씬 (scroll-section)
    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5 , // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector(`#scroll-section-0`),
                messageA: document.querySelector('#scroll-section-0 .main-message .a'),
                messageB: document.querySelector('#scroll-section-1 .main-message .b'),
                messageC: document.querySelector('#scroll-section-2 .main-message .c'),
                messageD: document.querySelector('#scroll-section-3 .main-message .d')
            },
            values: {
                messageA_opacity: [0 , 1],
            } 
        },
        {
            type: 'normal',
            heightNum: 5 ,
            scrollHeight: 0,
            objs: {
                container: document.querySelector(`#scroll-section-1`)
            }
        },
        {
            type: 'sticky',
            heightNum: 5 ,
            scrollHeight: 0,
            objs: {
                container: document.querySelector(`#scroll-section-2`)
            }
        },
        {   type: 'sticky',
            heightNum: 5 ,
            scrollHeight: 0,
            objs: {
                container: document.querySelector(`#scroll-section-3`)
            }
        }
    ]

    function setLayOut() {
        //각 스크롤 섹션의 높이 세팅
        for(let i = 0 ; i < sceneInfo.length ; i++ ){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight }px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for(let i = 0 ; i < sceneInfo.length ; i++){
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if(totalScrollHeight >= yOffset){
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id',`show-scene-${currentScene}`);
    }

    function calcValues(values , currentYOffset) {
         
    }

    const playAnimation = () => {
        switch (currentScene) {
            case 0:

                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }

    const scrollloop = () => {
        prevScrollHeight = 0;
        for(let i = 0 ; i < currentScene ; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }
        if(yOffset < prevScrollHeight){
            if(currentScene === 0) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
            currentScene--;
            document.body.setAttribute('id',`show-scene-${currentScene}`);
        }   
        playAnimation();
    }
    window.addEventListener('scroll',() => {
        yOffset = window.pageYOffset;
        scrollloop();
    });
    window.addEventListener('load',setLayOut)
    window.addEventListener('resize',setLayOut);
})();