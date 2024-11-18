'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { createMultipleSnowflakes } from '../../script';

import cat from '/public/images/Cat-v3-final.webp';
import horse from '/public/images/horse.webp';
import female from '/public/images/female-v4.webp';
import male from '/public/images/male.webp';
import buddha from '/public/images/buddha.webp';
import owl_bowl from '/public/images/owl-bowl.webp';
import alien from '/public/images/alien.webp';
import butterfly from '/public/images/butterfly.webp';
import roses from '/public/images/roses.webp';
import unicorn from '/public/images/unicorn.webp';
import cat2 from '/public/images/cat v6 final.webp';
import deer from '/public/images/deer.webp';
import monkeys from '/public/images/monkeys.webp';
import earrings from '/public/images/earrings.webp';
import christmas_drinkcoaster from '/public/images/christmas_drinkcoaster.webp';
import moose from '/public/images/moose.webp';
import snowflake from '/public/images/snowflake.webp';

const ThreeDLibrary: React.FC = () => {
  useEffect(() => {
    const socialButtons = document.querySelectorAll('.Social');
    socialButtons.forEach(button => {
      (button as HTMLElement).addEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
    });

    // Cleanup functie
    return () => {
      socialButtons.forEach(button => {
        (button as HTMLElement).removeEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
      });
    };
  }, []);

  return (
    <div>
      <div className="spacing"></div>
      <div className="middle-container">
        <Image
          className="common-properties common-properties-left"
          src={earrings}
          alt="3D modeling environment"
          width={500}
          height={300}
          priority={true}
        />
        <article>
          <div>
            <h1 className="exclusive-text">
              Personalized 3D Earrings Made to Order
            </h1>
            <p>
              Are you interested in unique, custom-made 3D earrings? I specialize
              in designing custom 3D earring models that perfectly match your style.
              If you want a personal and unique design made, I&apos;m here to bring your
              ideas to life. Don&apos;t hesitate to reach out for a custom design. For
              more information or to get in touch, please visit my{" "}
              <a className="custom-link" href="/Contact" aria-label="Visit the contact page">
                contact page
              </a>
              , where you can find my email address.
            </p>
            <div className="spacing3"></div>
          </div>
        </article>
      </div>
      <main>
  <div className="spacing"></div>
  <br />
  <h3 className="sellfy-text">Webshop:</h3>
  <a className="Social buy-spacing" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe" aria-label="Visit the 3D webshop of Raimonvibe">
    3D
  </a>

          <div className="spacing"></div>
  <div className="middle-container">
  <Image className="model-right" src={snowflake} alt="Elegant snowflake earrings, perfect for the holiday season!" width={500} height={300} />
  <article>
    <div>
      <h1 className="exclusive-text">❄️ Snowflake Elegance Earrings</h1>
      <p>Celebrate the winter season with these exquisitely detailed snowflake earrings ❄️. Their frosty charm adds a magical touch to any outfit, making them the perfect accessory for holiday parties or a thoughtful festive gift. Bring a sparkle to your winter wardrobe with these dazzling earrings!</p>
      <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/snowflake-earrings-v1" data-text="Download now" aria-label="Download free snowflake earrings 3D model">
        Free!
      </a>
      <div className="spacing3"></div>
    </div>
  </article>
</div>

        
  <div className="spacing"></div>
<div className="middle-container">
  <Image className="model-left" src={moose} alt="A set of moose-themed earrings for winter." width={500} height={300} />
  <article>
    <div>
      <h1 className="exclusive-text">🦌 Moose Earrings Winter Set</h1>
      <p>Celebrate the winter season with this charming set of moose-themed earrings. Perfect for cozy vibes and festive outfits. The download includes three unique designs.</p>
      <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/moose-earrings-set-winter-themed-3d-model-jewelry" data-text="Download now" aria-label="Download free moose earrings 3D model">
        Free!
      </a>
      <div className="spacing3"></div>
    </div>
  </article>
</div>
        
  <div className="spacing"></div>
  <div className="middle-container">
    <Image className="model-right" src={christmas_drinkcoaster} alt="A Christmas coaster, perfect for the holidays!" width={500} height={300} />
    <article>
      <div>
        <h1 className="exclusive-text">☃️ Christmas Coaster</h1>
        <p>A beautiful Christmas coaster featuring "Merry Christmas" and festive details like holly leaves and snowflakes ❄️. Protect your table with style and bring a touch of holiday cheer into your home!</p>
        <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/christmas-drink-coaster" data-text="Download now" aria-label="Download free Christmas coaster 3D model">
          Free!
        </a>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>

  <div className="spacing"></div>
  <div className="middle-container">
    <Image className="model-left" src={monkeys} alt="A coaster with a monkey design." width={500} height={300} />
    <article>
      <div>
        <h1 className="exclusive-text">🐵 Monkey Coaster</h1>
        <p>A beautiful set of coasters featuring a monkey design. The download includes two files.</p>
        <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-monkey-drinkcoaster-" data-text="Download now" aria-label="Download free monkey coaster 3D model">
          Free!
        </a>
        <div className="spacing3"></div>
      </div>
    </article>
  </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={deer} alt="A Christmas Deer Ornament very funny!" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">☃️ Ornament</h1>
              <p>A Christmas Deer Ornament. Ideal for Christmas ☃️. Give your Christmas tree a cheerful look with this beautiful decoration!</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-christas-deer-ornament-" data-text="Buy now" aria-label="Download free Christmas Deer Ornament 3D model">
                Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={cat2} alt="A beautiful 3D model an earring in the shape of a cat" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">😺 earrings</h1>
              <p>An unique earring in the shape of a cat. The cat has a nice long tail. Perfect for that someone special or a gift to yourself.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/cat-earrings-v6-raimonvibe" data-text="Buy now" aria-label="Buy cat earrings 3D model">
              €0.50,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={unicorn} alt="A unicorn keychain." width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🦄 keychain</h1>
              <p>Add a touch of magic to your keys with this adorable 3D-printed unicorn keychain! 🦄 It&apos;s the perfect accessory for unicorn lovers everywhere.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/unicorn-keychain-raimonvibe" data-text="Buy now" aria-label="Download free unicorn keychain 3D model">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={roses} alt="A set of roses earrings" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🌹 earrings</h1>
              <p>Add a touch of nature-inspired elegance to your style with these beautiful 3D-printed rose earrings. 🌹 The design features two distinct rose patterns.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/roses-earrings" data-text="Buy now" aria-label="Download free roses earrings 3D model">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={butterfly} alt="This is an earring in the shape of a butterfly" width={500} height={300} />
          <article>
            <div>
              <h1 className="exclusive-text">🦋 earring</h1>
              <p>Add a special touch to your look with these delicate 3D-printed butterfly earrings. 🦋 The intricate design captures the elegance of a butterfly in flight, perfect for anyone who loves nature-inspired jewelry.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/butterfly-earrings-raimonvibe" data-text="Buy now" aria-label="Download free butterfly earrings 3D model">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={alien} alt="This is a keychain with an alien shape" width={500} height={300} />
          <article>
            <div>
              <h1>👽 Keychain</h1>
              <p>This is a keychain with an alien shape. Print it in your favorite color or material.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/alien-keychain-raimonvibe" data-text="Buy now" aria-label="Download free alien keychain 3D model">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image
            className="model-right"
            src={owl_bowl}
            alt="Bowl with at the bottom an owl pattern"
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>🦉 Bowl</h1>
              <p>This bowl is trendy, and handy at the same time. Use this bowl to house your keys, wallet, office tools, etc. The bottom of the bowl has an owl pattern. Keep the bowl for yourself or give it to someone (special). The bowl has also a voronoi pattern.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/tray-owl-voronoi" data-text="Buy now" aria-label="Buy owl bowl 3D model">
              €0,50,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={buddha} alt="Inspiring Buddha Coaster" width={500} height={300} />
          <article>
            <div>
              <h1>Buddha coaster</h1>
              <p>Style your home with this inspiring Buddha coaster. Just right as a gift to your loved one(s) or to yourself.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/buddha-coaster" data-text="Buy now">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={male} alt="Beautiful male torso with voronoi pattern" width={500} height={300} />
          <article>
            <div>
              <h1>Male Torso</h1>
              <p>Beautiful male torso with voronoi pattern. A stylish decoration for your bookshelf. Perfect for someone special or a gift to yourself.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-male-torso-voronoi-pattern-" data-text="Buy now">
                Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={female} alt="Beautiful female torso with voronoi pattern" width={500} height={300} />
          <article>
            <div>
            <h1>Female Torso</h1>
            <p>Beautiful female torso with voronoi pattern. A classy decoration for on your shelf. Perfect for that someone special or a gift to yourself.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://zaap.bio/raimonvibe/3d-model-elegant-female-torso-with-voronoi-pattern" data-text="Buy now">
              Order $1,-
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-right" src={horse} alt="A beautiful 3D model a key chain in the shape of a horse" width={500} height={300} />
          <article>
            <div>
              <h1>🐎 key chain</h1>
              <p>A unique keychain in the shape of a horse with geometric shapes. Perfect for someone special or a gift to yourself.</p>
              <a className="sellfy-buy-button Social left-align align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/home/geometrical-horse-keychain" data-text="Buy now">
              Free!
              </a>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>

        <div className="spacing"></div>
        <div className="middle-container">
          <Image className="model-left" src={cat} alt="A beautiful 3D model an earring in the shape of a cat" width={500} height={300} />
          <article>
            <div>
              <h1>🐈‍⬛ earrings (v3)</h1>
              <p>An unique earring in the shape of a cat. Perfect for that someone special or a gift to yourself.</p>
              <a className="sellfy-buy-button Social align" target="_blank" rel="noreferrer" href="https://cults3d.com/en/3d-model/jewelry/cat-v3-earrings" data-text="Buy now">
                Order $0.50,-
              </a>
              <div className="spacing3"></div>
              <div className="spacing3"></div>
              <div className="spacing3"></div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default ThreeDLibrary;
