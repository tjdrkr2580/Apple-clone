(()=> {
    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5 , // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: document.querySelector(`#scroll-section-0`)
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
    }
    window.addEventListener('resize',setLayOut);
    setLayOut();
})();