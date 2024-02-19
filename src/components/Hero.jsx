import { ButtonsComponent } from "./buttons";
const HeroSection =()=>{
    return(
        <main className="hero-section container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <ButtonsComponent stylename="btn" text="Shope Now"/>
                    <ButtonsComponent stylename="btn grayStyle" text="Category"/>
                </div>
                <div className="get-products">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="Flipkart icon" />
                        <img src="/images/amazon.png" alt="Amazon icon" />
                    </div>
                </div>
            </div>
            <div className="brand-image">
                <img src="/images/shoe_image.png"  alt="shoe image" />
            </div>
        </main>
    )
}

export default HeroSection;