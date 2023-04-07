class Fenix {

    static addLayoutStyles({background, fontSize}) {
        document.body.style.cssText = `background: ${background}; font-size: ${fontSize}px`
    }

    static addContent({count}) {


        const wrapper = document.createElement("div");
        wrapper.style.cssText = 'display: flex; flex-direction: row; align-items: center; justify-content: flex-start; flex-wrap: wrap; gap: 10px 20px'

        const contentString = "<a aria-label=\"Go to this event's detail\" href=\"/events/demio-game-show-demo\" class=\"blog-list-image-link w-inline-block\"><img loading=\"lazy\" src=\"https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail.png\" alt=\"\" sizes=\"(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 66vw, (max-width: 1919px) 31vw, 340px\" srcset=\"https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail-p-500.png 500w, https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail-p-800.png 800w, https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail-p-1080.png 1080w, https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail-p-1600.png 1600w, https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail-p-2000.png 2000w, https://assets-global.website-files.com/61a529b176c3293ae1c9a93d/62eafa1c0790115955a6b62c_Game%20Show%20Demo%20Thumbnail.png 2176w\" class=\"blog-list-item-image\"></a><div class=\"blog-list-item-text\"><div class=\"event-list-date\">8/3/22</div><a href=\"/events/demio-game-show-demo\" class=\"link-block-3 w-inline-block\"><h3 class=\"blog-list-item-title\">Demio's Game Show Demo</h3></a><a href=\"/events/demio-game-show-demo\" class=\"blog-list-item-link w-inline-block\"><div class=\"blog-list-item-link-text\">Watch&nbsp;Now</div><img loading=\"lazy\" src=\"https://assets-global.website-files.com/61967dbb50eec57a4e7fde97/61a6654256d9d5f634f8c327_culture-recognition-arrow.png\" alt=\"\" class=\"blog-list-item-icon\"></a></div>"


        let result = ''
        for (let i = 0; i < count; i++) {
            result += `${contentString} `
        }
        wrapper.innerHTML = result


        document.body.appendChild(wrapper)
    }

}


window.Fenix = Fenix
