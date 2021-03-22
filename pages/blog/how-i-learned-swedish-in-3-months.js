import React from 'react'
import Metadata from '../../components/Metadata'
import { Container } from '../../styles'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Post from '../../components/Post'
import data from '../../data/blog'

export default function Blog() {
  return (
    <>
      <Metadata />
      <Container>
        <Nav />
        <main>
          <Post
            heading={data[1].heading}
            subheading={data[1].subheading}
            published={data[1].published}
          >
            <p>
              Before I begin outlining how I managed to drastically improve my
              comprehension with the Swedish language in a short amount of time,
              let me explain why I wanted to put myself through all of those
              long arduous hours. You see, there’s a girl involved. Don’t all
              great stories start like that?
            </p>
            <p>
              My girlfriend was born and raised in Sweden and is of Persian
              descent, she’s multilingual and can speak English, Swedish and
              Farsi fluently, which at times I am quite jealous of. With English
              being her weakest of the three I would occasionally correct her on
              subtle mistakes. How to pronounce the word ‘determined’,
              correcting her v’s from her w’s as well as her g’s and j’s.
              Whenever I would stop to correct her she would jokingly say,
              “Whatever, I know three languages.” I would reply back with, “Two
              and a half.”
            </p>
            <p>
              Every so often she would pull out a complicated word in English
              and I’d stop to ask her how she learned that word. She would shrug
              her shoulders and think nothing of it. I, on the other hand, would
              be amazed and wonder how hard it would be to learn a new language.
              Being born and raised in England and being of Filipino descent, I
              never really embraced the Filipino culture. Learning Tagalog (the
              native language of the Philippines) wasn’t really that appealing
              to me. I stuck with English and always struggled with learning
              another language. In my early 20’s I gave Tagalog ago and failed
              miserably, I would periodically go on Duolingo and attempt to
              learn Spanish too. That didn’t last long either.
            </p>
            <p>
              Regardless of my lack of experience with learning a new language,
              I decided for my girlfriends next birthday I would surprise her
              with learning one of her languages. I chose Swedish instead of
              Farsi because I thought it would be the lesser of two evils, plus
              my cousin is half Swedish so I thought I could reach out to her
              and get some tips.
            </p>
            <p>
              Not only would it be a nice surprise, I thought that I could hit
              two birds with one stone. Her dad doesn’t speak English well
              enough to maintain a conversation, so I thought I could use the
              skill of a new language and be able to communicate with him.
            </p>
            <p>
              I had carefully planned this out, I wanted to start off by taking
              photos together with the camera on a tripod, then I would sneakily
              hit the record button and start talking to her in Swedish and not
              stop until she took me seriously.
            </p>
            <p>
              I had come up with this idea 12 months beforehand, but I didn’t
              really do much for the first 9 months. I had no idea how to
              approach learning a new language and I wasn’t taking the challenge
              seriously. I had purchased{' '}
              <a href="https://galiway.blog/duolingo-vs-rosettastone/">
                Rosetta Stone for Swedish and hardly used it.{' '}
              </a>
              Occasionally I would jump on Duolingo for 10 minutes and be so
              lackadaisical about it. I was making little to no progress, but I
              could only blame myself. Then with three months left everything
              changed. I realised with the birthday looming, I had to get my
              priorities in order if I wanted to successfully surprise my
              girlfriend.
            </p>
            <p>
              Instead of dusting off the cobwebs and jumping back into the
              Rosetta Stone program, I thought I’d do some research on useful
              techniques on how to learn a language within 3 months. I knew I
              had to put the work in and time was running out. So I committed to
              a minimum of 10 hours a week of studying Swedish whilst
              implementing the different techniques of learning a new language
              in a short amount of time.
            </p>
            <p>
              The goal wasn’t to be fluent in Swedish but to have enough
              knowledge to get by and surprise my girlfriend. I do regret not
              taking the challenge seriously from the very start. Who knows, I
              could’ve been fluent by the time I surprised her. At least I now
              have enough knowledge to have a basic conversation with my
              girlfriend. If I keep up this progress I’m sure I’ll be speaking
              fluently in no time.
            </p>
            <p>
              A useful guide that helped put everything into perspective for me
              was an article written by Arthur from{' '}
              <a href="https://fastertomaster.com/">Faster To Master</a>. It
              outlined how to learn any language fast and I got some useful tips
              from it.{' '}
              <a href="https://fastertomaster.com/how-to-a-language-learning-guide/">
                You can check it out here
              </a>
              .
            </p>
            <p>
              If you’re looking for more tools to help you with your language
              learning journey, I recommend checking out this{' '}
              <a href="https://www.reviews.com/blog/netflix-learn-another-language/">
                article
              </a>
              . It goes in-depth on how the use of Netflix can help you learn
              another language. I would watch shows on Netflix quite often as it
              gave me the opportunity to listen and read in Swedish. I finally
              had a legitimate reason to sit in front of the computer all day!
            </p>
            <p>
              With the use of{' '}
              <a href="https://galiway.blog/deep-practice/">
                deliberate practice
              </a>{' '}
              coupled with the{' '}
              <a href="https://galiway.blog/pomodoro/">Pomodoro technique</a>. I
              managed to effectively study around 10 hours a week. Here’s what
              my schedule would normally look like:
            </p>
            <p>
              <strong>Monday – 19:00 – 21:00</strong>
            </p>
            <ul>
              <li>
                25 minutes of{' '}
                <a href="https://galiway.blog/anki/">Anki Flashcards</a>
              </li>
              <li>5-minute break</li>
              <li>25 minutes of Duolingo</li>
              <li>5-minute break</li>
              <li>25 minutes of Memrise</li>
              <li>5-minute break</li>
              <li>
                25 minutes of watching an English film with Swedish subtitles
              </li>
            </ul>
            <p>
              <strong>Tuesday – 0 Hours</strong>
            </p>
            <p>
              <strong>Wednesday – 19:00 – 21:00</strong>
            </p>
            <ul>
              <li>60 mins on iTalki</li>
              <li>5-minute break</li>
              <li>25 minutes of Anki Flashcards</li>
              <li>5-minute break</li>
              <li>
                25 minutes of reading the book,{' '}
                <a href="https://amzn.to/2Hw6fX8">
                  “Essentials of Swedish Grammar.”
                </a>{' '}
                – This was so boring and I dreaded doing this every time I
                picked up the book, but I knew it was essential for my learning.
              </li>
              <li>5-minute break</li>
            </ul>
            <p>
              <strong>Thursday – 18:00 – 19:00</strong>
            </p>
            <ul>
              <li>25 minutes of Anki Flashcards</li>
              <li>5-minute break</li>
              <li>25 minutes of Duolingo</li>
              <li>5-minute break</li>
            </ul>
            <p>
              <strong>Friday – 18:00 – 19:00</strong>
            </p>
            <ul>
              <li>25 minutes of Anki Flashcards</li>
              <li>5-minute break</li>
              <li>25 minutes of writing exercises</li>
              <li>5-minute break</li>
            </ul>
            <p>
              <strong>Saturday – 19:00 – 21:00</strong>
            </p>
            <ul>
              <li>60 mins on Skype with my Swedish cousin</li>
              <li>5-minute break</li>
              <li>25 minutes of Anki Flashcards</li>
              <li>5-minute break</li>
              <li>25 minutes of Duolingo</li>
            </ul>
            <p>
              <strong>Sunday 18:00 – 19:00</strong>
            </p>
            <ul>
              <li>25 minutes of Anki Flashcards</li>
              <li>5-minute break</li>
              <li>25 minutes of Duolingo.</li>
              <li>5-minute break</li>
            </ul>
            <p>
              That was pretty much it. Of course, the times were flexible and I
              would often shift things around depending on my schedule. I would
              mix and match the different exercises according to my mood as
              well.
            </p>
            <p>
              Regardless of the order, within a week I was trying to cover all
              the important sections of listening, reading, writing and
              speaking. I would repeat this week after week for the entire 3
              months. Keep in mind that I had to hide this all from my
              girlfriend, so whenever I was with her it was difficult to
              practice. There would be times when I’d only study 3 hours for the
              week as opposed to 10.
            </p>
            <p>
              Even though at times I failed to study 10 hours a week, I still
              noticed a steep learning curve within the 3 months. Now that this
              is no longer a surprise, I have the luxury of practicing with her.
              I’d like to strengthen this skill to the point of confidently
              talking with her and hold a conversation about everyday life. I
              guess I just have to keep up what I’ve already been doing.
            </p>
            <p>
              For anyone who is attempting to learn a new language or skill,
              practicing with an intense focus is essential. What helped me
              commit to each practice was by scheduling everything in advance.
              Keep track of how much time you commit to skill and try and not to
              break the chain. You keep this consistent and I’m positive that
              you’ll see a major difference within 3 months’ time.
            </p>
          </Post>
          <Form />
        </main>
        <Footer />
      </Container>
    </>
  )
}
