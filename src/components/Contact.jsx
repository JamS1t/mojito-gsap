import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../constants"
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: 'top center',
      }
    });

    timeline
      .from(splitTitle.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: 'power1.inOut'
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
      })
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut'
      }, '<');
  }, []);

  return (
    <footer id="contact">
      <img src="./images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf" />
      <img src="./images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit our Bar</h3>

          <p>143, In Your Heart Street, Somewhere Only We Know City</p>
        </div>

        <div>
          <h3>Contact Us</h3>

          <p>09651560000</p>
          <p>ly@youknow.that</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} | {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact