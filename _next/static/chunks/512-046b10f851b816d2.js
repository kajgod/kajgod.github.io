"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6015:function(e,t,i){var n=i(5893);let s=e=>{let{dateString:t}=e,i=t.substring(0,4),s=t.substring(4,6),a=t.substring(6,8);return(0,n.jsxs)("p",{className:"small",children:[i,(0,n.jsx)("span",{className:"highlight",children:s}),a]})};t.Z=s},4260:function(e,t,i){var n=i(5893),s=i(1664),a=i.n(s);let r=()=>(0,n.jsx)("footer",{children:(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/",children:"About Me"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"/articles-archive",children:"Archive"})})]})})});t.Z=r},3505:function(e,t,i){var n=i(5893),s=i(1664),a=i.n(s);let r=()=>(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)("h1",{children:"Kajgod blog"})});t.Z=r},4154:function(e,t,i){var n=i(5893);let s=e=>{let{title:t,description:i,slug:s,timeString:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossOrigin:"true"}),(0,n.jsx)("link",{rel:"canonical",href:"https://kajgod.github.io/".concat(s)}),(0,n.jsx)("meta",{name:"description",content:i}),(0,n.jsx)("meta",{property:"og:type",content:""!==s?"article":"website"}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:description",content:i}),(0,n.jsx)("meta",{property:"og:site_name",content:"Kajgod Blog"}),(0,n.jsx)("meta",{property:"article:author",content:"https://www.facebook.com/jurica.staresincic"}),(0,n.jsx)("meta",{property:"article:section",content:"Technology"}),(0,n.jsx)("meta",{property:"article:published_time",content:a}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:description",content:i}),(0,n.jsx)("meta",{name:"twitter:title",content:t})]})};t.Z=s},2203:function(e,t,i){i.d(t,{t:function(){return p}});var n=i(5893);let s="\n    Starting a blog on GitHub Pages sounded like a good idea. Doing it in SSG-ed\n    Next.js even better. What could possibly go WTF?\n",a=()=>(0,n.jsx)("p",{children:s}),r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["I never tried GitHub Pages before, but I figured if I was going to write a blog about my experiences with technology and CS, it would have a"," ",(0,n.jsx)("em",{children:"clean code"})," feel to it if I encapsulated the thoughts and ideas with related code."]}),(0,n.jsx)("p",{children:'Being an amateur artist in my spare time, I decided I should have two completely separate blogs for documenting two completely separate domains, but again - the second blog should also encapsulate "art" with thoughts about art.'}),(0,n.jsx)("p",{children:"On a more-or-less unrelated note: I wanted to make both very easy to add to. I'm planning to make an offline CMS for it which would create the content and commit it to the appropriate repo. To lessen the code-writing I have to do (albeit complicate the process a bit) I decided to parse JSONs created in the CMS with Next.js. Now, Next is something I know quite well. The thought of trying something more exotic and hip like Qwik, Fresh or Astro certainly crossed my mind, but I wanted this thing live as soon as possible, so..."}),(0,n.jsx)("p",{children:"All of this led to the first WTF moment on GitHub Pages."}),(0,n.jsx)("h3",{children:"WTF, GitHub?"}),(0,n.jsxs)("p",{children:["I followed the simplest flow to getting a GitHub Page: create a repo named"," ","[yourName].github.io and place static HTML in the root. To do so I could have changed a Next config, but I wanted to keep Next separated from the generated page in a separate folder, so I rather just added a copy action to build script like so:"]}),(0,n.jsx)("pre",{children:"next build && next export && cp -r out/* ../"}),(0,n.jsx)("p",{children:"Well, it didn't work. At all."}),(0,n.jsxs)("p",{children:["Since I couldn't figure out what seems to be the matter, I handcrafted a simple HTML page and put it in the root. That was fine, but when I tried to serve Next code again: nothing. Now, Next creates a folder _next where it serves JS and such. Nothing from that directory gets served on GitHub Pages! Hmmmm... Could it be that Pages only serves files that are in the root? You cannot use any folders? Starting to get irate, and looking into Vercel hosting and abandoning the whole ",(0,n.jsx)("em",{children:"encapsulation"})," idea, Duck Duck Go once again came to the rescue!"]}),(0,n.jsx)("p",{children:"Believe it or not, my dear friends, GitHub Pages considers any folder that starts with an underscore as a Jekyll folder and ignores it when serving content. WTF? I never really used Jekyll (we have some CI/CD workflow at my day job, but I never had to do much more than restart the computer running it) and it seems so random and odd to give it (and its conventions) the first-class-citizen treatment. Just let it take over all other software that uses the _[folder - name] file structure?"}),(0,n.jsx)("h3",{children:"All's well..."}),(0,n.jsx)("p",{children:"On a positive note, the fix is quite simple:"}),(0,n.jsx)("pre",{children:"next build && next export && cp -r out/* ../ && touch ../.nojekyll"}),(0,n.jsx)("p",{children:"...create an empty .nojekyll file in the root, and the blog page appears. The only problem with this approach as far as I can tell is that the old files remain in the _next folder because they always get preferred. A delete before copying in the build script fixes it in most cases (close enough for all intents and purposes, anyway):"}),(0,n.jsx)("pre",{children:"rm -r ../_next && next build && next export && cp -r out/* ../ && touch ../.nojekyll"}),(0,n.jsx)("p",{children:"Next is quite ubiquitous these days, so I guess I'm not the only one to run into this problem, and this short rant may actually prove useful to someone. You're welcome if that happens to be you."})]}),o="\n    There's both a moral and existential panic over using AI-powered tools \n    to create visual arts. Having many artist friends, I tried to make some \n    sense of it all.\n",l=()=>(0,n.jsx)("p",{children:o}),h=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"A bunch of artists I know are panicking that AI is going to take over their jobs. Not that art is much of a job anyway at this point, but you work with what you have."}),(0,n.jsxs)("p",{children:["Anyway, AIs are doing pretty well imitating artists whose ",(0,n.jsx)("em",{children:"work"})," ",'they get fed with, so I guess they might be right: much like stock photos practically killed a once decent job of illustrating newspaper and magazine articles (did a few gigs myself), AI seems quite capable of killing what\'s left in and around that industry. No web portal will ever pay a dime to an artist from their sinking profit margins if the AI can "draw" an acceptable art instead. Much like they no longer pay students to argue in comments to "increase engagement", and soon they\'ll no longer pay their writers either, because AI seems to be getting better at pretending to write meaningful content also.']}),(0,n.jsx)("h3",{children:"But what is art?"}),(0,n.jsx)("p",{children:"Creating pretty images from your editors' pitch is a craft for sure, but art?"}),(0,n.jsxs)("p",{children:["There's a lot of newspeak related to creative fields introduced lately by semi-literate tech-billionaire-wannabes, so it may get confusing. Art isn't, never was, nor will it ever be ",(0,n.jsx)("em",{children:"content"}),", ",(0,n.jsx)("em",{children:"craft"})," or something that can be ",(0,n.jsx)("em",{children:"stocked up"})," and served when appropriate. Come to think about it, this materialist perspective on creative products is a bit older than the internet craze... Structuralists were probably right in asserting that there is nothing ",(0,n.jsx)("em",{children:"ontological"})," about cultural ",(0,n.jsx)("em",{children:"texts"})," (this would include art), and that it's all a product of social structures. AI is amazing at identifying those structures and generating patchworks of clich\xe9s and conventions it gathers from available sources"]}),(0,n.jsxs)("p",{children:["What AI does not do is experience life (or art, for that matter). It isn't intrinsically motivated to communicate, and however mesmerizingly crafty it gets - it will never cut its own ear off out of madness, nor will it hang itself by the window in Russian winter because it could no longer handle the pains of life. There are very few interesting directions spreading paint can take you in the 21",(0,n.jsx)("sup",{children:"st"})," century. It's all been done, right?"]}),(0,n.jsxs)("p",{children:["Art was never about giving people what they want, but making them see things through their eyes, genitals or guts. Art isn't some neural network being fed inputs, and receiving digital taps on the back when it produces something a trainer deems right according to behavior he/she wants to get out of it. AI is such a ",(0,n.jsx)("em",{children:"good kid"}),", the one that always does as he is told and makes his folks proud. An artist is a little evil prick that gets on your nerves and will be the ruin of you, never thankful for what you do for him/her, never ever doing what is expected of him/her."]}),(0,n.jsx)("p",{children:"If anything, the safe, derivative craft the AI produces is anti-art."}),(0,n.jsx)("h3",{children:"What about creativity?"}),(0,n.jsxs)("p",{children:["Creativity might be a completely different matter. As far as I know, the"," ",(0,n.jsx)("em",{children:"eureka effect"})," associated with creativity in humans stems from random firings of neurons that the brain triggers all the time. Sometimes the accidental firing connects neural links that were already strengthened from previous experiences, the conscious mind recognizes that something interesting ",(0,n.jsx)("em",{children:"popped up"})," and magic happens."]}),(0,n.jsx)("p",{children:"It doesn't seem too difficult to emulate in artificial neurons, at least to me. I expect upcoming AIs to blow us out of the park in terms of creativity and problem-solving skills."}),(0,n.jsx)("h3",{children:"So are artists doomed?"}),(0,n.jsx)("p",{children:"Probably, yes. But not for the reasons immediately obvious, I think. I for one will never look for a book written by an algorithm. However good it may pretend, it will never write about its feelings, its fears, its life. It will never risk anything. A human can be ridiculed, publicly shamed, or even attacked with murderous intentions (artists from Charlie Hebdo, or Salman Rushdie are just recent examples) for the symbols they place on paper, but an algorithm risks nothing. It doesn't have the insatiable need to put into words or paint its philosophy, despair or ecstasy. It just does what it was trained to do with zero interest. So I don't see myself interested."}),(0,n.jsxs)("p",{children:["Cinema-goers, however, seem quite content with run-of-the-mill soulless, mindless, derivative crap they're being fed by the semi-human \"creatives\" from Hollywood studios. Take just about any safe, by-the-numbers superhero rehash of (literally) ancient ideas and tropes. So I guess they'd be thrilled to have their ",(0,n.jsx)("em",{children:"content"})," served for them to"," ",(0,n.jsx)("em",{children:"consume"})," generated by real AI instead of a bunch of geeks in writer's rooms following idiotic algorithms (famous one being"," ",(0,n.jsx)("em",{children:"22 Pixar Storytelling Rules"}),"), re-reading Joseph Campell and analyzing key elements that make a film money-grabbing success."]}),(0,n.jsxs)("p",{children:["There's a trend going on right now of ",(0,n.jsx)("em",{children:"wine and paint"})," events where amateurs get served wine and acryl, and a professional presents them with a kitsch painting they are supposed to imitate. My wife likes this event and went for it half a dozen times. It's really amazing how close to the \"real thing\" her paintings are. If I didn't know better, I'd think she's got a real artist inside of her just waiting to be released. Similar are online computer-art classes. Many people learn many tricks to imitate art. Imitate other people's brush strokes, other people's motives, lighting, framing... And it looks almost as good as the original. A lot of creative writing classes, writers' rooms, studio systems, and art classes produce a lot of quite capable pretenders."]}),(0,n.jsxs)("p",{children:["Such ",(0,n.jsx)("em",{children:"creatives"})," are already a poor man's imitation of a computer, rather than artists; just as the public that flocks to cinemas for their fix are poor man's imitation of human beings, rather than real feeling, hurting, thinking, analyzing, wondering adult children a real artist would deserve."]}),(0,n.jsx)("p",{children:"As long as there are human beings that need to connect to other human beings, there will be the thirst for both creating and consuming art."}),(0,n.jsx)("p",{children:"Too bad there are barely any left."}),(0,n.jsx)("p",{children:"And not for long."})]}),d="Val Town is a social programming tool or something like that, but it's suprisingly fun, albeit I wouldn't bet my house it will catch on.",c=()=>(0,n.jsx)("p",{children:d}),u=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["I've been exploring"," ",(0,n.jsx)("a",{href:"https://www.val.town",target:"_blank",rel:"noreferrer",children:"Val Town"})," ","for a few hours here and there over the past couple of days. Surprisingly, I find it quite enjoyable, which is saying something since I'm not easily entertained by anything even remotely related to work."]}),(0,n.jsx)("h3",{children:"So, what exactly is it?"}),(0,n.jsxs)("p",{children:["It's a bit tricy to put into words, but essentially, it provides a"," ",(0,n.jsx)("em",{children:"twitterish"})," interface for writing code, where each ",(0,n.jsx)("em",{children:"tweet"})," ","evaluates to a JavaScript function (or a value). Apparently the whole thing runs on Deno backend, exposes Express libraries, and enables you to create a few pretty cool ",(0,n.jsx)("em",{children:"thingies"})," supereasy:"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Web pages"}),(0,n.jsx)("li",{children:"Web APIs"}),(0,n.jsx)("li",{children:"CRON jobs"}),(0,n.jsx)("li",{children:"Web crawlers capable of sending you emails"}),(0,n.jsx)("li",{children:"..."})]})]}),p={title:"Kajgod blog",description:"A blog about technology and philosophy",homepagePageCount:5,posts:[{id:1,title:"Next.js app on GitHub Pages",date:"20230111",timeString:"2023-01-11 08:00:00 +0000 UTC",description:s,hype:(0,n.jsx)(a,{}),content:(0,n.jsx)(r,{}),slug:"nextjs-app-on-github-pages",keywords:["nextjs","github","pages"],published:!0},{id:2,title:"Artists vs. AI",date:"20230118",timeString:"2023-01-18 08:00:00 +0000 UTC",description:o,hype:(0,n.jsx)(l,{}),content:(0,n.jsx)(h,{}),slug:"artists-vs-ai",keywords:["AI","art","craft"],published:!0},{id:3,title:"Val Town is pretty cool",date:"20230814",timeString:"2023-08-14 20:00:00 +0000 UTC",description:d,hype:(0,n.jsx)(c,{}),content:(0,n.jsx)(u,{}),slug:"val-town-is-pretty-cool",keywords:["val town","deno","javascript"],published:!1}]}}}]);