const images = Array.from(document.querySelectorAll('.image-gallery article'))

const indexes = [4, 5, 2, 0, 3, 1]

const showImage = i =>  new Promise((resolve, reject) => {
                            setTimeout(() => {
                                images[indexes[i]].style.opacity = "1"

                                const error = 0
                            
                                if(!error) resolve("1")
                                else reject(error)
                            }, 800)
                        })

const showAll = async () => {
    for( let i = 0; i < images.length; i++ ) {
        await showImage(indexes[i])
    }
}

showAll()