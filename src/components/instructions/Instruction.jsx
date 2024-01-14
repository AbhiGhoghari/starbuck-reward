import "./instruction.css";
import image1 from "../../assets/1A.png"
import image2 from "../../assets/1B.png"
import image3 from "../../assets/2A.png"
import image4 from "../../assets/2B.png"
import image5 from "../../assets/3A.png"

const Instruction = () => {
  return (
    <div className="Instruction-wrapper">
      <div className="container1">
        <div className="Instruction">
          <header className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-medium">
              Cash or card, you earn Stars
            </h2>
            <p className="mt-5 mb-10 max-w-2xl text-center">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </header>
          <div className="rows ">
            <div className=" b flex justify-start">
              <div className="f flex gap-5 py-9  ">
                <div className="col-1 flex flex-col gap-2">
                  <h1 className="text-2xl font-medium">1★ per dollar</h1>
                  <p>Pay as you go</p>
                </div>
               
                <div className="col-2 flex gap-5 ">
                  <img src={image1} className="Phone-image" />
                  <div className="description">
                    <h3 className="text-xl">Scan and pay separately</h3>
                    <p className="pt-6">
                      Use cash or credit/debit card at the register.
                    </p>
                  </div>
                </div>
                <div className="col-3 flex gap-5">
                  <img src={image2} className="Phone-image" />
                  <div className="description">
                    <h3 className="text-xl">Save payment in the app</h3>
                    <p className="pt-6">
                      Check-out faster by saving a credit/debit card or PayPal
                      to your account. You’ll be able to order ahead or scan and
                      pay at the register in one step.
                    </p>
                  </div>
                </div>
                
          
              </div>
            </div>

            <div className=" b flex justify-start">
              <div className="f flex gap-5 py-9   ">
                <div className="col-1 flex flex-col gap-2">
                  <h1 className="text-2xl font-medium">2★ per dollar</h1>
                  <p>Add funds in the app</p>
                </div>
              
                <div className="col-2 flex gap-5 ">
                  <img src={image3} className="Phone-image" />
                  <div className="description">
                    <h3 className="text-xl">Preload</h3>
                    <p className="pt-6">
                      To save time and earn Stars twice as fast, add money to
                      your digital Starbucks Card using any payment option. Scan
                      and pay in one step or order ahead in the app.
                    </p>
                  </div>
                </div>
                <div className="col-3 flex gap-5">
                  <img src={image4} className="Phone-image" />
                  <div className="description">
                    <h3 className="text-xl">Register your gift card</h3>
                    <p className="pt-6">
                      Register your gift card Then use it to pay through the
                      app. You can even consolidate balances from multiple cards
                      in one place.
                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>

            <div className="  flex justify-start">
              <div className="f flex gap-5 py-9  ">
                <div className="col-1 flex flex-col gap-2">
                  <h1 className="text-2xl font-medium">Up to 3★ per dollar</h1>
                  <p>With Starbucks Rewards Visa Card</p>
                </div>
                <div className="col-2 flex gap-5 md:max-w-xl ">
                  <img src={image5} className=" third " />
                  <div className="description ">
                    <h3 className="text-xl">Earn Star Even Faster</h3>
                    <p className="pt-6">Earn Stars on all purchases you make with our <a href="#!">credit card</a> opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
