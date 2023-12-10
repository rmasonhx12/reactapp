// add use state
import { useState , useEffect} from'react'; // add useEffect 



// Counter Component

function Counter(props) {
    //var count = 0;
    var init = parseInt(props.init || 0);

    const [count, setCount] = useState(init);

    // use setinterval() to increment counter


    useEffect(function() {
        var timer = setInterval(function() {
         
            setCount((count) => count + 1); // first increment
         
            console.log("count =", count);
    
    }, 1000);
    return function() {
        clearInterval(timer);
    }
    }, );

   
    return (
        <>
        Intial value of the counter is: {init}
        <br></br>
        The counter is set to: {count}
        </>
    )
}

export default Counter;