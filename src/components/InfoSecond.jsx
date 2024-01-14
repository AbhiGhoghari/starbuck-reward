import firstImage from "../assets/1-fun-freebies.jpg"
import secondImgage from "../assets/2-order-and-pay-ahead.jpg"
import third from "../assets/3-get-to-free-faster.jpg"
const InfoSecond = ()=>{
    return(
        <div className="info-wrapper">
            <div className="info">
                <div className="container1">
                    <div className="rows flex flex-col">
                        <div className="title-des flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-medium">Endless Extras</h2>
                            <p className="mt-5 mb-10 max-w-2xl text-center sm:max-w-xl">Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                            
                        </div>
                        <div className="cols flex ">
                            <div className="col ">
                                <img src={firstImage} width={120} />
                                <p className="title ">Fun freebies</p>
                                <p className="des text-center sm:max-w-md">Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                                <a className="link">Learn more</a>
                           </div>
                            <div className="col">
                            <img src={secondImgage} width={120} />
                                <p className="title">Order & pay ahead</p>
                                <p className="des text-center sm:max-w-md">Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                                <a className="link">Learn more</a>
                            </div>
                            <div className="col">
                                <img src={third} width={120} />
                                <p className="title">Get to free faster</p>
                                <p className="des text-center sm:max-w-md">Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                                <a className="link">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSecond