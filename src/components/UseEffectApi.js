import React,{useState , useEffect} from 'react'

const UseEffectApi = () => {
    let style = {
        fontSize : '25px',
    }
    function setWidth() {
        setactualWidth(window.innerWidth);

    }
    const [actualWidth, setactualWidth] = useState(window.innerWidth);
    useEffect(()=>{
       window.addEventListener('resize',setWidth);
    })
  return (
        <>
         
        <div className="container mt-5 col-md-4" >
        <p className='text-center' style={style}> The current Width of the Window is </p>
        <h3 className='text-center'>{actualWidth}</h3>
        <img src="https://media2.giphy.com/media/3o7aCSxsasvg9LjJDy/giphy.gif" width={"60%"} alt="" />
        </div>
       
        </>



  )
}

export default UseEffectApi