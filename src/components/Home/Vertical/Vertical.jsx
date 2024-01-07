import { useEffect } from "react";
import styles from "./Gsap.module.css";
import gsap from "gsap";

const Vertical = () => {

    useEffect(() => {
        const divs = document.querySelectorAll(".testimonials")
        gsap.set([divs[0], divs[1], divs[2]], {x:0, opacity:0});

        gsap
        .timeline({repeat: -1, defaults:{duration:4}})

        .add("one")
        .to(divs[0], {y:0 , x:50, opacity: 1}, "one")
        .to(divs[1], {y:0, x:0, opacity: 0}, "one")
        .to(divs[2], {y:0, x:0, opacity: 0}, "one")
        
        .add("two")
        .to(divs[0], {y:0, x:0, opacity: 0}, "two")
        .to(divs[1], {y:0, x:-50, opacity: 1}, "two")
        .to(divs[2], {y:0, x:0, opacity: 0}, "two")
        
        .add("three")
        .to(divs[0], {y: 0, x:0, opacity: 0}, "three")
        .to(divs[1], {y: 0, x:0, opacity: 0}, "three")
        .to(divs[2], {y: 0, x:50, opacity: 1}, "three")
    })
    return (
        <div className={styles.content}>
            <div className="testimonials">
                <div className={styles.container}>
                    <div>
                        <img className="w-40" src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt="" />
                        
                    </div>
                </div>
            </div>
            
            <div className="testimonials">
                <div className={styles.container}>
                    <div>
                        <img className="w-40" src="https://media.istockphoto.com/id/1826983902/photo/a-modern-minimalistic-desktop-for-a-freelancer-or-blogger-office-supplies-with-a-green-branch.webp?b=1&s=170667a&w=0&k=20&c=ppxbxkjS8Sbe6q9jJ0irJWsBWbUN5S6g_9nbW0VHLbI=" alt="" />
                        
                    </div>
                </div>
            </div>
            
            <div className="testimonials">
                <div className={styles.container}>
                    <div>
                        <img className="w-40" src="https://media.istockphoto.com/id/1477858506/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-mockup.webp?b=1&s=170667a&w=0&k=20&c=G9EGbIPr1D59b_dSdrFYKXt5pC402U_NAWFefHjk-BM=" alt="" />
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Vertical;