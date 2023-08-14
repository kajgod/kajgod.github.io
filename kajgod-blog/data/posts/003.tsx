export const description =
  "Val Town is a social programming tool or something like that, but it's suprisingly fun, albeit I wouldn't bet my house it will catch on.";
export const Hype = () => <p>{description}</p>;
export const Post = () => (
  <>
    <p>
      I've been exploring{" "}
      <a href="https://www.val.town" target="_blank" rel="noreferrer">
        Val Town
      </a>{" "}
      for a few hours here and there over the past couple of days. Surprisingly,
      I find it quite enjoyable, which is saying something since I'm not easily
      entertained by anything even remotely related to work.
    </p>

    <h3>So, what exactly is it?</h3>
    <p>
      It's a bit tricy to put into words, but essentially, it provides a{" "}
      <em>twitterish</em> interface for writing code, where each <em>tweet</em>{" "}
      evaluates to a JavaScript function (or a value). Apparently the whole
      thing runs on Deno backend, exposes Express libraries, and enables you to
      create a few pretty cool <em>thingies</em> supereasy:
    </p>
    <ul>
      <li>Web pages</li>
      <li>Web APIs</li>
      <li>CRON jobs</li>
      <li>Web crawlers capable of sending you emails</li>
      <li>...</li>
    </ul>
  </>
);
