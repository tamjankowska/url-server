const { nanoid } = require('nanoid')

const getUrl = (newUrl) => {
    newUrl = 'https://jisc.ac.uk/' + nanoid(10) // ~17 years needed, in order to have a 1% probability of at least one collision with 10 characters specified  
    console.log(newUrl)
    return newUrl
}

module.exports = getUrl