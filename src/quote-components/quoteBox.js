import React from 'react'
import './quoteBox.css'



const QuoteBox = () => {
    const [quotes, setQuotes] = React.useState(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [index, setIndex] = React.useState(Math.round(Math.random()*1643))
    
    React.useEffect(()=> {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            setQuotes(data)
            setIsLoaded(true)
    });}, [])

    
    const newQuoteHandler = () => {
        setIndex(Math.round(Math.random()*1643))
    }
    

    if (isLoaded){
        
        return (
            <div id='quote-box'>
                <div id='main-quote' className='px-sm-5 px-3'>
                    <p id='text' className='tc'>"{quotes[index]['text']}</p>
                    <p id='author' className='tr'>{quotes[index]['author']}</p>
                </div>
                <div id='footer'>
                    <a 
                        href={`https://twitter.com/intent/tweet?hashtags=aspireToperspire&related=dami_laare&text=${encodeURIComponent('"' + quotes[index]['text'] + '" \n' + quotes[index]['author'] + ' \n@dami_laare')}`} target='_blank'
                        rel='noreferrer'
                        >
                            <i className="fab fa-twitter"></i>
                    
                    </a>
                    <button id='new-quote' className="btn btn-primary" onClick={newQuoteHandler}>New Quote</button>
                </div>
            </div>
        )
    }
    return (
            <div id='quote-box__unloaded'>
                <i id='loading' class="fas fa-sync-alt"></i>
            </div>
    )
    
}

export default QuoteBox;