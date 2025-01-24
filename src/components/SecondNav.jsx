import { useRef } from "react";
import weatherIcon from "../assets/images/weatherIcon.png"
import { useNavigate } from "react-router";
const SecondNav = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);  
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);
    let navigate = useNavigate();


    const handleClickFirst = (ref) => {
        navigate("news-details");
        // ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
        // ref2.current.style.backgroundColor = "";
        // ref3.current.style.backgroundColor = "";
        // ref4.current.style.backgroundColor = "";
        // ref5.current.style.backgroundColor = "";
        // ref6.current.style.backgroundColor = "";
        // ref7.current.style.backgroundColor = "";
        // ref8.current.style.backgroundColor = "";
        // ref9.current.style.backgroundColor = "";
        // ref10.current.style.backgroundColor = "";
    }
    const handleClickSecknd = (ref) => {
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
        ref3.current.style.backgroundColor = "";
        ref4.current.style.backgroundColor = "";
        ref5.current.style.backgroundColor = "";
        ref6.current.style.backgroundColor = "";
        ref7.current.style.backgroundColor = "";
        ref8.current.style.backgroundColor = "";
        ref9.current.style.backgroundColor = "";
        ref10.current.style.backgroundColor = "";
    }
    const handleClick3 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick4 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick5 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick6 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick7 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick8 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick9 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    const handleClick10 = (ref) => {
        ref.current.style.backgroundColor = "rgba(4, 89, 77, 1)";
    }
    return (
        <div className="second-nav">
            <div className="categories-container">
                <div className="nav-item" ref={ref1} onClick={() => handleClickFirst(ref1)}>Politics</div>
                <div className="nav-item" ref={ref2} onClick={() => handleClickSecknd(ref2)}>World</div>
                <div className="nav-item" ref={ref3} onClick={() => handleClick3(ref3)}>Economy</div>
                <div className="nav-item" ref={ref4} onClick={() => handleClick4(ref4)}>Science & Tech</div>
                <div className="nav-item" ref={ref5} onClick={() => handleClick5(ref5)}>Business</div>
                <div className="nav-item" ref={ref6} onClick={() => handleClick6(ref6)}>Travel</div>
                <div className="nav-item" ref={ref7} onClick={() => handleClick7(ref7)}>Climate</div>
                <div className="nav-item" ref={ref8} onClick={() => handleClick8(ref8)}>Lifestyle</div>
                <div className="nav-item" ref={ref9} onClick={() => handleClick9(ref9)}>Food</div>
                <div className="nav-item" ref={ref10} onClick={() => handleClick10(ref10)}>Sports</div>
            </div>
            <div className="date-container">
                13:40
                <img src={weatherIcon} alt="" />
                24 °C
            </div>
        </div>
    );
}

export default SecondNav;