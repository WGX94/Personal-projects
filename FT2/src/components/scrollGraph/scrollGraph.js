import { set } from "lodash"

class Carousel {

    constructor (element, options = {}) {
        this.element = element 
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClass('scroll')
        let container = this.createDivWithClass('scroll_inner')
        this.root.appendChild(container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass('scroll-slide')
            item.appendChild(child)
            this.container.appendChild(item)
            return item

        });
        this.setStyle()
        this.createNavigation
    
    }

    setStyle () {
        let ratio = this.items.lenght / this.options.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item =>  item.style.width = ((100 / this.options.slidesVisible) / ratio) + '%')
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('scroll__next')
        let prevButton = this.createDivWithClass('scroll__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
    }

    next () {
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }

    prev () {
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    }

    gotoItem (index) {
        let translateX = index * -100 / this.items.lenght
        this.container.style.transform = 'translate('+ translateX + '% ,0,0)'
        this.currentItem.index

    }

    createDivWithClass (classname) {
        let div = document.createElement('div')
        div.setAttribute('class', classname)
        return div
    }
    
}





export default Carousel