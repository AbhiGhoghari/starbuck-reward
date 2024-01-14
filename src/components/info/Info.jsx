import "./info.css"

const Info = ()=>{
    return(
        <div className="info-wrapper">
            <div className="info">
                <div className="container1">
                    <div className="rows flex flex-col">
                        <div className="title-des flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-medium">Getting started easy</h2>
                            <p className="mt-5 mb-10">Earn star and get rewarded in a few easy steps</p>
                        </div>
                        <div className="cols flex">
                            <div className="col ">
                                <div className="round"><p>1</p></div>
                                <p className="title ">Create an account</p>
                                <p className="des text-center">To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
                            </div>
                            <div className="col">
                                <div className="round"><p>2</p></div>
                                <p className="title">Order and pay how you’d like</p>
                                <p className="des text-center">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                            </div>
                            <div className="col">
                                <div className="round"><p>3</p></div>
                                <p className="title">Earn Stars, get Rewards</p>
                                <p className="des text-center">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info