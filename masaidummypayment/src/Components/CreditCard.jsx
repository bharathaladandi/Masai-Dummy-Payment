import React, { useState } from 'react'
import style from './Style.css';
export const CreditCard = () => {

    const [Name, setName ] = useState("");
    const [Number, setNumber ] = useState("");
    const [Cvv, setCvv ] = useState("");
    const [Month, setMonth ] = useState("");

    const NameChange = (event) => {
        setName(event.target.value);
        // console.log(Name)
      };

      const NumberChange = (event) => {
        setNumber(event.target.value);
      };

      const CvvChange = (event) => {
        setCvv(event.target.value);
      };

      const MonthChange = (event) => {
        setMonth(event.target.value);
      };
    return (
        <div>
            <div id="container">

                {/* <!-- card section started --> */}
                <section id="cart">
                    <div id="box">
                        <div id="innerCart">
                            <h1>VISA</h1>
                        </div>
                        <div id="onesec">
                            <img id="simim" src="https://neon-entremet-2faca3.netlify.app/Screenshot_20221229_122158.png" alt="" srcset="" />
                        </div>
                        <div id="oneNumber">
                            {Number ? 
                                (<div>{Number}</div>)
                            :
                             (<div id="oneNumber">
                                <span>####</span>
                                <span>####</span>
                                <span>####</span>
                                <span>####</span>
                             </div>)}
                            
                        </div>
                        <div id="below">
                            <div>
                                <h3>
                                    CARD HOLDER
                                </h3>
                                {Name ? 
                                (<div>{Name}</div>)
                            :
                             (<div id="oneNumber">
                                <span>Enter Your Name</span>
                             </div>)}
                            </div>
                            <div>
                                <h3>
                                    Expies
                                </h3>
                                {Month ? 
                                (<div>{Month}</div>)
                            :
                             (<div id="oneNumber">
                                <span>####</span>
                             </div>)}
                            </div>

                            <div>
                                <h3>
                                    CVV
                                </h3>
                                {Cvv ? 
                                (<div>{}</div>)
                            :
                             (<div id="oneNumber">
                                <span>####</span>
                             </div>)}
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- card section end here --> */}

                {/* <!-- from section started --> */}
                <section id="form">
                    <form action="">
                        <div id="headform">
                            <h1>Payment details</h1>
                        </div>
                        <div id="fromcont">
                            <div>
                                <p className="fo">CARDHOLDE NAME</p>
                                <i className="fa fa-user" aria-hidden="true" style={{color: 'crimson'}}></i>
                                <input className="cartHolderInut" type="text" className="fo1" onChange={NameChange} />
                                <div className="line"></div>
                            </div>
                            <div>
                                <p className="fo">CARD NUMBER</p>
                                <i className="fa fa-credit-card-alt" aria-hidden="true" style={{color: 'crimson'}}></i>
                                {/* <!-- <span>4256</span> <span>7890</span> <span>5678</span> <span>4532</span> --> */}
                                <input type="number" className="cartNumberInut" onChange={NumberChange} className="fo1" />

                                    <div className="line"></div>
                            </div>
                        </div>
                        <div id="formflex">
                            <div className="foromfont">
                                <p>EXPIRY MOUNTH</p>
                                <i className="fa fa-calendar" aria-hidden="true" style={{color: 'crimson'}}></i>
                                <input type="month" name="" id="monthfrom" onChange={MonthChange} />
                                    <div className="line"></div>
                            </div>
                            <div className="foromfont">
                                <p>CVC</p>
                                <input className="fromcvc" type="number" onChange={CvvChange} />
                                    <div className="line"></div>
                            </div>
                        </div>
                        <div className="frompayment">
                            <p>Payment amount: <span> 12300 ₹</span></p>
                        </div>
                        <div id="fromButton">
                            <button id="fromButto1"><a id="aaa" href="">PAY</a></button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
