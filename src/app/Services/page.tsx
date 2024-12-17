'use client';

import Image from "next/image";
import { useEffect } from 'react';
import blog from "/public/images/blog.webp";
import youtube from "/public/images/youtube.webp";
import { createMultipleSnowflakes } from '../../script';

export default function Diensten() {
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
      <main>
     
   
    
        <section className="middle-container2">
          <div>
            <Image
              className="common-properties common-properties-left"
              src={blog}
              alt="Illustration of a blogging environment with a laptop and notepad."
              width={500}
              height={300}
            />
            <article>
              <div>
                <h1>Blogs about my Studies</h1>
                <p>
                  On Medium, I share in-depth articles about my experiences and
                  learning processes in online coding bootcamps, including project
                  examples and scripts. Additionally, I passionately write about
                  3D printing, highlighting my unique design process, steps for
                  publication, and my motivation for this innovative technology.
                  As a content creator on YouTube, I also share my experiences and
                  knowledge in an accessible manner. This is just a glimpse of the
                  diversity on my Medium blog, where I invite you to discover more
                  about my professional and creative journey in the exciting world
                  of technology and design.
                </p>
                <p>Check out my blog posts at:</p>
                <strong>
                  <a
                    className="Social left-align"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@raimonvibe"
                  >
                    Medium
                  </a>
                </strong>
                <div className="spacing"></div>
              </div>
            </article>
          </div>
        </section>

        <section className="middle-container">
          <Image
            className="common-properties common-properties-right"
            src={youtube}
            alt="Illustration of a video creation environment with camera and editing equipment."
            width={500}
            height={300}
          />
          <article>
            <div>
              <h1>YouTube Creator</h1>
              <p>
                My YouTube channel not only offers instructional videos on creating 3D
                models but also explores the fascinating world of AI technology
                and the technical aspects of starting an online business. I
                share insights about the software that is crucial for my
                business, providing a valuable source of knowledge for anyone
                interested in technology and online entrepreneurship.
              </p>
              <div className="spacing"></div>
              <span>
                <p>Check out my YouTube channel at:</p>
                <strong>
                  <a
                    className="Social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos"
                  >
                    YouTube
                  </a>
                </strong>
              </span>
              <div className="spacing3"></div>
            </div>
          </article>
        </section>
      </main>

      <div className="spacing"></div>
    </div>
  );
}
