export const description = `
    Starting a blog on GitHub Pages sounded like a good idea. Doing it in SSG-ed
    Next.js even better. What could possibly go WTF?
`;
export const Hype = () => <p>{description}</p>;

export const Post = () => (
  <>
    <p>
      I never tried GitHub Pages before, but I figured if I was going to write a
      blog about my experiences with technology and CS, it would have a{" "}
      <em>clean code</em> feel to it if I encapsulated the thoughts and ideas
      with related code.
    </p>
    <p>
      Being an amateur artist in my spare time, I decided I should have two
      completely separate blogs for documenting two completely separate domains,
      but again - the second blog should also encapsulate "art" with thoughts
      about art.
    </p>
    <p>
      On a more-or-less unrelated note: I wanted to make both very easy to add
      to. I'm planning to make an offline CMS for it which would create the
      content and commit it to the appropriate repo. To lessen the code-writing
      I have to do (albeit complicate the process a bit) I decided to parse
      JSONs created in the CMS with Next.js. Now, Next is something I know quite
      well. The thought of trying something more exotic and hip like Qwik, Fresh
      or Astro certainly crossed my mind, but I wanted this thing live as soon
      as possible, so...
    </p>
    <p>All of this led to the first WTF moment on GitHub Pages.</p>
    <h3>WTF, GitHub?</h3>
    <p>
      I followed the simplest flow to getting a GitHub Page: create a repo named{" "}
      [yourName].github.io and place static HTML in the root. To do so I could
      have changed a Next config, but I wanted to keep Next separated from the
      generated page in a separate folder, so I rather just added a copy action
      to build script like so:
    </p>
    <pre>next build && next export && cp -r out/* ../</pre>
    <p>Well, it didn't work. At all.</p>
    <p>
      Since I couldn't figure out what seems to be the matter, I handcrafted a
      simple HTML page and put it in the root. That was fine, but when I tried
      to serve Next code again: nothing. Now, Next creates a folder _next where
      it serves JS and such. Nothing from that directory gets served on GitHub
      Pages! Hmmmm... Could it be that Pages only serves files that are in the
      root? You cannot use any folders? Starting to get irate, and looking into
      Vercel hosting and abandoning the whole <em>encapsulation</em> idea, Duck
      Duck Go once again came to the rescue!
    </p>
    <p>
      Believe it or not, my dear friends, GitHub Pages considers any folder that
      starts with an underscore as a Jekyll folder and ignores it when serving
      content. WTF? I never really used Jekyll (we have some CI/CD workflow at
      my day job, but I never had to do much more than restart the computer
      running it) and it seems so random and odd to give it (and its
      conventions) the first-class-citizen treatment. Just let it take over all
      other software that uses the _[folder - name] file structure?
    </p>
    <h3>All's well...</h3>
    <p>On a positive note, the fix is quite simple:</p>
    <pre>
      next build && next export && cp -r out/* ../ && touch ../.nojekyll
    </pre>
    <p>
      ...create an empty .nojekyll file in the root, and the blog page appears.
      The only problem with this approach as far as I can tell is that the old
      files remain in the _next folder because they always get preferred. A
      delete before copying in the build script fixes it in most cases (close
      enough for all intents and purposes, anyway):
    </p>
    <pre>
      rm -r ../_next && next build && next export && cp -r out/* ../ && touch
      ../.nojekyll
    </pre>
    <p>
      Next is quite ubiquitous these days, so I guess I'm not the only one to
      run into this problem, and this short rant may actually prove useful to
      someone. You're welcome if that happens to be you.
    </p>
  </>
);
