const addIndicator = () => {
    var indicatorClasses = document.getElementById('indicator').classList

    if (indicatorClasses.contains('d-hidden')) {
        indicatorClasses.remove('d-hidden')
    } else {
        indicatorClasses.add('d-hidden')
    }
}

setInterval(addIndicator, 1000)