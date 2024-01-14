import { FaStar } from "react-icons/fa6";
import coffe from "../assets/025.png"
const Glutter = ()=>{
    return(
            <div className="glutter-wrapper">
                <div className="Glutter">
                    <div className="">
                        <div className="rows ">
                            <div className="row flex flex-col gap-10 first">
                                
                                    <h2 className="text-3xl font-medium text-center">Get your favorites for free</h2>
                                    <ul className="flex justify-center">
                                        <li className="list active"><span className="flex items-end"><p>25</p><FaStar className="mb-2 text-sm star" /></span></li>
                                        <li className="list"><span className="flex items-end"><p>100</p><FaStar className="mb-2 text-sm star" /></span></li>
                                        <li className="list"><span className="flex items-end"><p>200</p><FaStar className="mb-2 text-sm star" /></span></li>
                                        <li className="list"><span className="flex items-end"><p>300</p><FaStar className="mb-2 text-sm star" /></span></li>
                                        <li className="list"><span className="flex items-end"><p>400</p><FaStar className="mb-2 text-sm star" /></span></li>
                                    </ul>
                                
                            </div>
                            <div className="row second text-center py-5">
                                <div className="flex justify-center gap-8 g">
                                <img src={coffe} className="glutter-image" />
                                <div className="img-text flex flex-col  justify-center">
                                    <h3 className="text-2xl font-bold text- text-left mb-4">Customize your drink</h3>
                                    <p className="max-w-xs text-left">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Glutter;