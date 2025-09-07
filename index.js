class DropDown {
    constructor(className, items, toggleBtn, appendHere) {
        this.className = className                                      // This is the class name to be given to the dropdown
        this.items = items                                              // This is an array containing all the elements meant for the drop down
        this.toggleBtn = document.querySelector(`.${toggleBtn}`)        // This is the class that on click, toggles the list visibility
        this.appendHere = document.querySelector(`.${appendHere}`)      // This is the class where you would append the dropdown
    }

    createDropDown() {
        const dropDiv = document.createElement('div')
        dropDiv.classList.add(this.className)

        const dropCont = document.createElement('div')
        dropCont.classList.add('drop-cont')
        dropDiv.appendChild(dropCont)

        const dropUl = document.createElement('ul')
        dropCont.appendChild(dropUl)

        for (let i = 0; i < this.items.length; i++) {
            let dropElm = document.createElement('p')
            dropElm.textContent = this.items[i]
            dropElm.classList.add('drop-li')
            dropUl.appendChild(dropElm)
        }

        if (this.appendHere) {
            this.appendHere.appendChild(dropDiv)
        }
        else {
            console.log(`Appending item is not found in the dom`)
        }


        this.toggleBtn.addEventListener('click', () => {
            if (dropDiv.style.display === 'none') {
                dropDiv.style.display = 'block'
            }
            else {
                dropDiv.style.display = 'none'
            }

        })

        return dropDiv

    }

}

export default DropDown