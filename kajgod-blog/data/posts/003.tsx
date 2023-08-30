export const description =
  "Val Town is a social programming tool (or tries to be). As far as I can tell most people use it to build small backend apps, but it's suprisingly fun to work in/with.";
export const Hype = () => <p>{description}</p>;
export const Post = () => (
  <>
    <p>
      I've been exploring{" "}
      <a href="https://www.val.town" target="_blank" rel="noreferrer">
        Val Town
      </a>{" "}
      for a few hours here and there over the past couple of days. Surprisingly,
      I find it quite enjoyable, and I'm not easily entertained by anything even
      remotely alike work. Plus it's basically free (there's a paid tier, but
      you can do almost anything for free).
    </p>
    <h3>So, what exactly is it?</h3>
    <p>
      Val Town is inspired by Twitter (don't event THINK about X Town, Elon
      Musk!), but what you <em>tweet</em> are snippets of TypeScript (single
      functions or variables). You can make them private or public, and there's
      a val-way of refferencing them in other <em>vals</em>. My nickname is
      kajgod, therefore if you want to include my function in your code - you
      just write @kajgod.nameOfTheFunction(). On the other hand, if I want to
      persist some data - all I need to do is create a <em>val</em> that
      consists of a single variable. Anything in that variable will be
      persistant.
    </p>
    <p>
      Since the data I want to persist probably isn't for public use, I can make
      that <em>val</em> private, and reference it inside of my functions as
      @me.myVar, instead od @kajgod.myVar. This way, if you reference my code,
      it will lookup YOUR variable myVar, not mine. Pretty, pretty cool!
    </p>
    <aside>
      EDIT: Latest{" "}
      <a
        href="https://blog.val.town/blog/val-town-runtime-v3-my-mistakes-were-easy-the-solutions-simple"
        target="_blank"
        rel="noreferrer"
      >
        blog post
      </a>{" "}
      on Val.Town mentions some downsides of this approach (neither of which I
      agree with :-)), so they'll replace it with ES6 imports (at least they'll
      appear like ES6 imports). Well, what can you do... it's a developing
      platform. Changes are expected.
    </aside>
    <h3>What can you do with it?</h3>
    <p>
      The idea is that you write small chunks of code, and can easily string
      them together into larger projects. The best part is how easily you get a
      working backend with no need for AWS clicking, packaging, DevOps... It's
      all handled for you.
    </p>
    <p>
      Btw. did I mention how simple it is to create an account and start coding?
      It takes about 10 seconds... You just register with your Github account
      (maybe some others work, I don't really remember, and I don't care to
      check) and you're ready to code!
    </p>
    <p>
      Even better: they have a few nice tricks to make your life even simpler
      and they work like a charm.
    </p>
    <p>
      For example, they extend console prototype with a simple email method
      which sends an email to your registered email account. There are a few
      more options (HTML email and some other stuff), but the simplest (and most
      useful) one is:
    </p>
    <pre>
      console.email("Hey Kajgod,\n\rHere's an e-mail to yourself.", "Some
      subject");{" "}
    </pre>
    <aside>
      EDIT: Amazingly, this too is mentioned in the{" "}
      <a
        href="https://blog.val.town/blog/val-town-runtime-v3-my-mistakes-were-easy-the-solutions-simple"
        target="_blank"
        rel="noreferrer"
      >
        blog post
      </a>{" "}
      as a bad idea, and will be replaced with more purist implementation.
      Again, i disagree, because I feel these changes will take away a bit of
      magic-coolness from Val Town and make it look more like Deno playground
      instead of a <em>social programming tool</em> they set out to build, and I
      thought was a cool idea.{" "}
    </aside>
    <p>And that's it!</p>
    <p>
      Such a great tool to create prototypes or small project that don't need to
      scale, including:
    </p>
    <ul>
      <li>Web pages</li>
      <li>Web APIs</li>
      <li>CRON jobs</li>
      <li>Web crawlers capable of sending you emails</li>
      <li>...</li>
    </ul>
    <h3>Some examples</h3>
    <p>I built a few apps that are actually useful to me.</p>
    <p>
      I coach a few high-level mathletes and there are some organizations in
      Zagreb, Croatia that help bringing up talented kids, but the tricky part
      is that they offer camps and education opportunities on the
      first-come-first-served basis. If you visit their websites often, you have
      a better chance of getting into those (I'm simplifying the process, but
      nevermind).{" "}
    </p>
    <p>Enter the web crawlers:</p>
    <ul>
      <li>
        <a
          href="https://www.val.town/v/kajgod.fetchMnm"
          target="_blank"
          rel="noreferrer"
        >
          www.mnm.hr
        </a>
      </li>
      <li>
        <a
          href="https://www.val.town/v/kajgod.fetchZrs"
          target="_blank"
          rel="noreferrer"
        >
          www.zrs.hr
        </a>
      </li>
    </ul>
    <p>
      The two supersimple scripts above were already useful to me, and I wonder
      why I didn't make them sooner. I haven't set up a local server in my house
      yet, but there are other free options where you can run crone-fired
      lambdas, maybe even always-awake processes (maybe not? does fly.io keep
      the process up at all times on their free tier? probably not, that would
      be expensive for them). The thing is - Val.Town made it so easy and fun it
      didn't feel like chore. I hate chores. Workday is practically a long
      stretch of chores for me, so I tend to procrastinate when off-work.
    </p>
    <p>
      Making chores feel less like chores and more like fun is such a good
      selling point IMHO.
    </p>
    <h3>How can I use it?</h3>
    <p>
      Well, if you happen to be from Croatia, and you know young mathletes - you
      can just fork my vals and use them as they are :-)
    </p>
    <p>
      Since that isn't the case, you can drop a look at this wal (
      <a
        href="https://www.val.town/v/kajgod.persistantValues"
        target="_blank"
        rel="noreferrer"
      >
        @kajgod.persistantValues
      </a>
      ), and create another one just like that one:
    </p>
    <pre>let persistantValues = {"{}"};</pre>
    <p>
      ...this creates a variable that will automagically become your permanent
      storage. Any variable created as a val (outside execution context of a
      function, which gets destroyed/GC-ed as soon the function gets off of the
      callstack, just like in "normal" JS) will preserve state permanently. The
      documentation tells us something about such variables only being able to
      keep data that is JSON-like because they get written on FS as stringified
      JSON or something like that, but that's fine because that's all we need
      anyway.
    </p>
    <p>
      Then you crawl the site, find the info that's the newest, and stash it in
      that variable. On every successive call, just check if the data you got
      was already sent, and that's it.
    </p>
    <p>
      Val will autosave with the function name, and if you're new to Val Town,
      you may forget that a val must be a single variable or function. The
      editor will envelope your code in a IIFE automagically. This sort of
      attention to details is what impressed me the most. Running a <em>val</em>{" "}
      as a CRON job is also supersimple. Dropdown menu, and you're all set up.
      You don't even have to google the ever elusive CRON syntax, because you
      have a dropdown with options like run every hour, every 15 mins etc.
    </p>
    <p>
      I have my worries about Val Towns future because the social aspect didn't
      really catch up yet, and I have no idea for how long they have funding,
      but do try it, it can only help.
    </p>
  </>
);
