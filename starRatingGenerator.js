
//  "\u2605" Black star symbol
//  "\u2606" White star symbol

const generateStarRating = (outOf, limit = 5) => {
    let stars = []
    let i;
    for (i = 0; i < outOf; i++) { stars.push("\u2605") }
    for (i = 0; i <= stars.length && stars.length < limit; i++) {
        stars.push('\u2606')
    }
    return stars.join('')
}
