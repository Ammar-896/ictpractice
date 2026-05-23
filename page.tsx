import { useState } from "react";

const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const pick = (a, n) => shuffle(a).slice(0, Math.min(n, a.length));
const rand = a => a[Math.floor(Math.random() * a.length)];

const T = [
  { id:'amethyst', nm:'House Amethyst',  bg:'#0e0820', card:'#1a1035', ac:'#c9a84c', ac2:'#9b59b6', tx:'#f0e6d0', mt:'#6a4e8a', bd:'1px solid #c9a84c44', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'◆ ' },
  { id:'crimson',  nm:'House Crimson',   bg:'#150810', card:'#261020', ac:'#d4a843', ac2:'#c0392b', tx:'#f5e8d8', mt:'#7a3040', bd:'1px solid #d4a84355', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'❧ ' },
  { id:'sapphire', nm:'House Sapphire',  bg:'#060d1e', card:'#0d1a30', ac:'#bfa868', ac2:'#2980b9', tx:'#e8eef8', mt:'#3a5878', bd:'1px solid #bfa86855', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'✦ ' },
  { id:'obsidian', nm:'House Obsidian',  bg:'#080608', card:'#111010', ac:'#e8c84a', ac2:'#888888', tx:'#f5f0e0', mt:'#555050', bd:'1px solid #e8c84a44', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'⬧ ' },
  { id:'emerald',  nm:'House Emerald',   bg:'#050f0a', card:'#0a1a10', ac:'#c8a840', ac2:'#27ae60', tx:'#e8f5ec', mt:'#2a5a38', bd:'1px solid #c8a84055', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'✾ ' },
  { id:'azure',    nm:'House Azure',     bg:'#060812', card:'#0e1222', ac:'#d4b84a', ac2:'#1a4fa0', tx:'#e0e8fc', mt:'#2a3870', bd:'1px solid #d4b84a44', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'❖ ' },
  { id:'ivory',    nm:'House Ivory',     bg:'#1a1408', card:'#241c0e', ac:'#d4a020', ac2:'#8b4513', tx:'#fff8e8', mt:'#7a6040', bd:'1px solid #d4a02055', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'✸ ' },
  { id:'midnight', nm:'House Midnight',  bg:'#04030a', card:'#09080e', ac:'#e0c060', ac2:'#6a4aaa', tx:'#f0ebff', mt:'#3a3060', bd:'1px solid #e0c06044', rd:4, ff:'"Palatino Linotype",Palatino,Georgia,serif', pfx:'⬥ ' },
];

const QB = {
  master: {
    mcq: [
      { id:'m1', q:'What is the purpose of a master slide?', opts:['To delete slides','To control the design of multiple slides','To add animations only','To print presentations'], ans:1 },
      { id:'m2', q:'Which feature would MOST likely be added using a master slide?', opts:['A single photo on one slide','A title on one page only','A school logo on every slide','A video clip'], ans:2 },
      { id:'m3', q:'What happens when you edit a normal slide?', opts:['Every slide changes','Only that slide changes','The presentation deletes','Fonts disappear'], ans:1 },
      { id:'m4', q:'Why are master slides useful?', opts:['They make presentations inconsistent','They save time and keep designs consistent','They stop editing','They remove transitions'], ans:1 },
      { id:'m5', q:'Which task is BEST done on a normal slide?', opts:['Changing the font for all slides','Adding unique information to one slide','Adding the same footer to every slide','Changing the theme for the whole presentation'], ans:1 },
    ],
    tf: [
      { id:'mt1', s:'A master slide affects multiple slides.', ans:true },
      { id:'mt2', s:'Normal slides are used for individual content.', ans:true },
      { id:'mt3', s:'Changing a master slide can update all slides linked to it.', ans:true },
      { id:'mt4', s:'You should use a master slide for repeated information.', ans:true },
      { id:'mt5', s:'Every slide in a presentation must look different.', ans:false },
    ],
    matching: [{ id:'mm1', title:'Match each term to its meaning', pairs:[
      {t:'Master Slide',d:'Keeps design consistent'},{t:'Normal Slide',d:'Individual presentation page'},
      {t:'Consistency',d:'Same style across slides'},{t:'Layout',d:'Arrangement of items on a slide'},
    ]}],
    oe: [
      { id:'mo1', q:'In your own words, explain the difference between a master slide and a normal slide. Give one example of when you would use each.', rubric:'Master slide controls design of ALL slides (e.g., add logo to every slide). Normal slide holds unique content for ONE slide (e.g., specific text or image). Both examples needed for full marks.' },
      { id:'mo2', q:'A student is creating a 10-slide school presentation and wants the school logo to appear on every slide. How should they add it, and why is this method better than adding it to each slide individually?', rubric:'Add logo to the master slide so it appears automatically on all slides. Better because: saves time, ensures consistency, only needs updating once if changed.' },
    ],
  },
  cyber: {
    mcq: [
      { id:'c1', q:'What is an upstander?', opts:['Someone who watches bullying happen','Someone who joins in bullying','Someone who takes positive action against bullying','Someone who ignores problems online'], ans:2 },
      { id:'c2', q:'Which action shows ally behaviour?', opts:['Sharing rumours','Supporting someone being bullied','Laughing at harmful comments','Recording bullying for entertainment'], ans:1 },
      { id:'c3', q:'What should you do if you see cyberbullying online?', opts:['Forward the messages','Encourage others to join in','Report the behaviour','Ignore it every time'], ans:2 },
      { id:'c4', q:'Why is reporting cyberbullying important?', opts:['It wastes time','It can help stop harmful behaviour','It spreads the problem','It embarrasses everyone'], ans:1 },
      { id:'c5', q:'Which is the safest response to cyberbullying?', opts:['Threatening the bully','Posting angry insults back','Supporting the victim and reporting the issue','Sharing screenshots publicly'], ans:2 },
    ],
    tf: [
      { id:'ct1', s:'An upstander helps make online spaces safer.', ans:true },
      { id:'ct2', s:'Ignoring serious cyberbullying is always the best option.', ans:false },
      { id:'ct3', s:'Allies can support others online and offline.', ans:true },
      { id:'ct4', s:'Sharing hurtful content can make cyberbullying worse.', ans:true },
      { id:'ct5', s:'You should save evidence of cyberbullying before reporting it.', ans:true },
    ],
    matching: [{ id:'cm1', title:'Match each term to its meaning', pairs:[
      {t:'Upstander',d:'Taking action to help stop bullying'},{t:'Ally',d:'Supporting someone being treated unfairly'},
      {t:'Bystander',d:'Watching bullying without helping'},{t:'Report',d:'Informing a trusted adult or platform'},
    ]}],
    oe: [
      { id:'co1', q:'Describe what you would do if you saw cyberbullying happening in an online group chat. Give at least 3 steps you would take and explain why each is important.', rubric:'Should include at least 3 of: not sharing/forwarding content, supporting victim privately, saving evidence, reporting to platform, telling trusted adult. Each step explained clearly.' },
      { id:'co2', q:'Explain the difference between an upstander, an ally, and a bystander. Which role is the most positive and why?', rubric:'Upstander=takes action to stop bullying. Ally=supports victim. Bystander=watches without helping. Upstander is most positive because they actively try to stop harm.' },
    ],
  },
  bool: {
    mcq: [
      { id:'b1', q:'Who introduced Boolean logic?', opts:['Claude Shannon','George Boole','Charles Babbage','Alan Turing'], ans:1 },
      { id:'b2', q:'What does a Boolean expression evaluate to?', opts:['A numerical value','A text message','True or False','A colour'], ans:2 },
      { id:'b3', q:'Which of the following is an example of a Boolean statement?', opts:['Please open the window.','The sky is blue.','What is your favourite film?','How old are you?'], ans:1 },
      { id:'b4', q:'Which logic gate has only ONE input and ONE output?', opts:['AND','OR','NOT','XOR'], ans:2 },
      { id:'b5', q:'What is the output of an AND gate when both inputs are 1?', opts:['0','1','Undefined','Cannot determine'], ans:1 },
      { id:'b6', q:'Which logic gate has the HIGHEST operator precedence?', opts:['OR','AND','NOT','NAND'], ans:2 },
      { id:'b7', q:'With A=0 and B=1, what is Q = NOT (A AND B)?', opts:['0','1','Depends on C','Error'], ans:1 },
      { id:'b8', q:'What is the correct order of precedence (highest first)?', opts:['OR then AND then NOT then brackets','brackets then NOT then AND then OR','NOT then AND then OR then brackets','AND then OR then brackets then NOT'], ans:1 },
    ],
    tf: [
      { id:'bt1', s:'Boolean logic was introduced by George Boole.', ans:true },
      { id:'bt2', s:'A Boolean expression can evaluate to more than two values.', ans:false },
      { id:'bt3', s:'The NOT gate has two inputs and one output.', ans:false },
      { id:'bt4', s:'An AND gate outputs 1 only when both inputs are 1.', ans:true },
      { id:'bt5', s:'An OR gate outputs 1 when at least one input is 1.', ans:true },
      { id:'bt6', s:'Brackets have the lowest precedence in Boolean expressions.', ans:false },
    ],
    matching: [{ id:'bm1', title:'Match each logic gate to its description', pairs:[
      {t:'AND gate',d:'Outputs 1 only if BOTH inputs are 1'},{t:'OR gate',d:'Outputs 1 if at least ONE input is 1'},
      {t:'NOT gate',d:'Reverses/inverts the single input'},{t:'Boolean',d:'A value that is True or False only'},
    ]}],
    oe: [
      { id:'bo1', q:'Explain why the NOT gate is different from AND and OR gates. Include details about the number of inputs, outputs, and what the gate does.', rubric:'NOT has ONE input, ONE output. AND/OR have two inputs. NOT reverses/inverts: 0 to 1 and 1 to 0. AND/OR combine two inputs to produce one output.' },
      { id:'bo2', q:'A=1, B=0, C=1. Calculate Q = (A AND B) OR C. Show each step clearly.', rubric:'Step 1 brackets first: A AND B = 1 AND 0 = 0. Step 2: 0 OR C = 0 OR 1 = 1. Q = 1. Must show working and apply correct precedence.' },
    ],
  },
  python: {
    mcq: [
      { id:'p1', q:'What is the term for the rules specifying how a program must be written?', opts:['Algorithm','Flowchart','Syntax','Command'], ans:2 },
      { id:'p2', q:'What type of error does pint("Success") contain?', opts:['Runtime error','Syntax error','Logic error','Compilation error'], ans:1 },
      { id:'p3', q:'Which function displays text on the screen in Python?', opts:['input()','output()','print()','show()'], ans:2 },
      { id:'p4', q:'Which function gets user input in Python?', opts:['print()','get()','input()','ask()'], ans:2 },
      { id:'p5', q:'What data type does the input() function ALWAYS return?', opts:['Integer','Boolean','Float','String'], ans:3 },
      { id:'p6', q:'Which function converts a string to an integer?', opts:['print()','input()','int()','len()'], ans:2 },
      { id:'p7', q:'Which keyword creates a code block that only runs when a condition is true?', opts:['print','else','if','input'], ans:2 },
      { id:'p8', q:'Which correctly checks if the variable score is greater than or equal to 80?', opts:['if score > 80:','if score = 80:','if score >= 80:','if score <= 80:'], ans:2 },
    ],
    tf: [
      { id:'pt1', s:'Python is case-sensitive: Print() and print() are different.', ans:true },
      { id:'pt2', s:'The input() function in Python always returns a string.', ans:true },
      { id:'pt3', s:'An integer is a number with a decimal point.', ans:false },
      { id:'pt4', s:'The == operator checks if two values are equal.', ans:true },
      { id:'pt5', s:'The != operator means "greater than".', ans:false },
      { id:'pt6', s:'In Python, multiplication is calculated before addition.', ans:true },
    ],
    matching: [{ id:'pm1', title:'Match each operator to its meaning', pairs:[
      {t:'>',d:'Greater than'},{t:'!=',d:'Not equal to'},
      {t:'==',d:'Equal to'},{t:'<=',d:'Less than or equal to'},
    ]}],
    oe: [
      { id:'po1', q:'Write a Python program that asks the user for two numbers, adds them together, and prints the result. Show the code and explain each line.', rubric:'Should use int(input()) twice, + to add, print() to display. Each line explained. e.g. num1=int(input("Enter first number: ")); num2=int(input("Enter second number: ")); print("Sum:", num1+num2).' },
      { id:'po2', q:'Identify and explain THREE syntax errors in this code:\nPrint("Hello")\nname = input "What is your name?"\nif name = "Ali":\n    print("Hello Ali!")', rubric:'1) Print should be print (case-sensitive). 2) input needs parentheses: input("What is your name?"). 3) Single = should be == for comparison: if name == "Ali":' },
    ],
  },
};

const NOTES = {
  master: { title:'Master Slide & Normal Slide', emoji:'🖥️', gold:'#c9a84c', sections:[
    { h:'What is a Master Slide?', body:'A master slide controls the design of MULTIPLE slides at once. Any changes made automatically apply to all linked slides. Used for repeated elements such as logos, fonts, colours, and backgrounds.' },
    { h:'What is a Normal Slide?', body:'An individual slide for specific, unique content such as text, images, and videos. Changes affect ONLY that one slide and no others.' },
    { h:'Key Comparison', table:[['Feature','Master Slide','Normal Slide'],['Affects','All linked slides','Only that one slide'],['Use for','Repeated elements','Unique content'],['Updates','All at once','Single slide only']] },
    { h:'Vocabulary', terms:[['Master Slide','Controls the design of multiple slides'],['Normal Slide','Individual slide for unique content'],['Consistency','Same style across all slides'],['Layout','The arrangement of items on a slide']] },
  ]},
  cyber: { title:'Digital Citizenship: Cyberbullying', emoji:'🛡️', gold:'#c06090', sections:[
    { h:'What is Cyberbullying?', body:'Bullying that takes place through digital devices or online platforms, including sending harmful, negative, or false content about someone via social media, messaging apps, games, or forums.' },
    { h:'The Three Roles', table:[['Role','Definition','Standing'],['Upstander','Takes positive action to stop bullying','Honourable'],['Ally','Supports the person being bullied','Honourable'],['Bystander','Witnesses bullying but does nothing','Dishonourable']] },
    { h:'What To Do', body:'I.   Do NOT forward or share harmful content\nII.  Support the victim privately\nIII. Save evidence before reporting\nIV.  Report to the platform\nV.   Inform a trusted adult' },
    { h:'Vocabulary', terms:[['Upstander','Takes action to stop bullying'],['Ally','Supports someone treated unfairly'],['Bystander','Watches without helping'],['Report','Inform a trusted adult or platform']] },
  ]},
  bool: { title:'Boolean Logic & Logic Gates', emoji:'⚡', gold:'#8860d0', sections:[
    { h:'What is Boolean Logic?', body:'Introduced by George Boole. Values can ONLY be TRUE (1) or FALSE (0). The very foundation of how computers reason and make decisions.' },
    { h:'The Three Logic Gates', table:[['Gate','Inputs','Rule','Example'],['AND','Two','Output 1 ONLY if BOTH inputs are 1','1 AND 1 = 1'],['OR','Two','Output 1 if AT LEAST ONE input is 1','1 OR 0 = 1'],['NOT','One','REVERSES the input','NOT 1 = 0']] },
    { h:'Order of Precedence', body:'Evaluate logic gates in this order:\nI.   Brackets  ( )\nII.  NOT\nIII. AND\nIV.  OR' },
    { h:'Vocabulary', terms:[['Boolean','A True or False (1 or 0) value'],['Logic Gate','Circuit performing a Boolean operation'],['Truth Table','Table of all possible inputs and outputs'],['Precedence','Order in which operations are evaluated']] },
  ]},
  python: { title:'Python Programming', emoji:'🐍', gold:'#50a8c0', sections:[
    { h:'Key Functions', table:[['Function','Purpose','Example'],['print()','Display text on screen','print("Hello")'],['input()','Get user input (always a string)','name = input("Name?")'],['int()','Convert string to whole number','age = int(input())'],['float()','Convert string to decimal','price = float(input())']] },
    { h:'Data Types', table:[['Type','Description','Examples'],['Integer','Whole numbers','10, -5, 0'],['Float','Decimal numbers','3.14, -2.5'],['String','Text in quotes','"Hello"'],['Boolean','True or False','True, False']] },
    { h:'Common Syntax Errors', body:'Print() is not the same as print() - Python is case-sensitive\nMissing quote:  print("Hello)\nMissing bracket:  print "Hello"\nWrong equals:  if name = "Ali"  should be  ==\nMissing colon:  if x > 5  needs  if x > 5:' },
    { h:'Relational Operators', terms:[['>', 'Greater than'],['<', 'Less than'],['>=','Greater than or equal to'],['<=','Less than or equal to'],['==','Equal to (comparison)'],['!=','Not equal to']] },
  ]},
};

const TOPICS = [
  { id:'master', label:'Master Slide & Normal Slide', emoji:'🖥️', gold:'#c9a84c', desc:'Presentation design fundamentals' },
  { id:'cyber',  label:'Digital Citizenship',         emoji:'🛡️', gold:'#c06090', desc:'Cyberbullying and online safety' },
  { id:'bool',   label:'Boolean Logic',               emoji:'⚡', gold:'#8860d0', desc:'Logic gates and truth tables' },
  { id:'python', label:'Python Programming',          emoji:'🐍', gold:'#50a8c0', desc:'Syntax, data types and selection' },
];

function buildExam(topicId) {
  const b = QB[topicId];
  return shuffle([
    ...pick(b.mcq, 4).map(q => ({...q, type:'mcq'})),
    ...pick(b.tf, 3).map(q => ({...q, type:'tf'})),
    { ...b.matching[0], type:'matching', pairs: shuffle([...b.matching[0].pairs]) },
    { ...pick(b.oe, 1)[0], type:'oe' },
  ]);
}

async function gradeExam(questions, answers, apiKey) {
  return Promise.all(questions.map(async q => {
    if (q.type === 'mcq') {
      const ok = answers[q.id] === q.ans;
      return { id:q.id, type:'mcq', ok, pts:ok?1:0, max:1, fb: ok ? 'Correct - well answered.' : 'Incorrect. Correct answer: ' + q.opts[q.ans] };
    }
    if (q.type === 'tf') {
      const ok = answers[q.id] === q.ans;
      return { id:q.id, type:'tf', ok, pts:ok?1:0, max:1, fb: ok ? 'Correct - well answered.' : 'Incorrect. The answer is: ' + (q.ans ? 'True' : 'False') };
    }
    if (q.type === 'matching') {
      const ua = answers[q.id] || {};
      let pts = 0;
      const fb = q.pairs.map(p => { const ok = ua[p.t] === p.d; if (ok) pts++; return (ok ? 'correct' : 'incorrect') + ': ' + p.t + ' to ' + (ok ? p.d : (ua[p.t]||'unanswered') + ' (correct: ' + p.d + ')'); });
      return { id:q.id, type:'matching', ok:pts===q.pairs.length, pts, max:q.pairs.length, fb:fb.join('\n') };
    }
    if (q.type === 'oe') {
      if (!apiKey) return { id:q.id, type:'oe', ok:null, pts:null, max:3, fb:'No API key provided. Consult the mark scheme to self-assess.', userAns:answers[q.id]||'', rubric:q.rubric };
      try {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer ' + apiKey},
          body: JSON.stringify({ model:'llama3-8b-8192', max_tokens:250, messages:[{ role:'user',
            content:'Grade this ICT answer for a secondary school student age 11-14.\nQuestion: ' + q.q + '\nMark Scheme: ' + q.rubric + '\nStudent Answer: ' + (answers[q.id]||'blank') + '\nRespond ONLY in JSON no markdown: {"marks":0,"feedback":"1-2 sentences"}\nMarks: 0=blank or wrong, 1=partial, 2=good, 3=excellent'
          }] }),
        });
        const data = await res.json();
        let parsed;
        try { parsed = JSON.parse(data.choices[0].message.content.replace(/```json|```/g,'')); }
        catch { parsed = { marks:0, feedback:'Could not parse grading response.' }; }
        return { id:q.id, type:'oe', ok:parsed.marks>=2, pts:parsed.marks, max:3, fb:parsed.feedback, userAns:answers[q.id]||'' };
      } catch(e) {
        return { id:q.id, type:'oe', ok:null, pts:null, max:3, fb:'Grading error: ' + e.message, userAns:answers[q.id]||'', rubric:q.rubric };
      }
    }
  }));
}

const CSS = `
  @keyframes royalFade { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
  @keyframes crownFloat { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-8px) rotate(3deg)} }
  @keyframes goldPulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
  @keyframes orbitalSpin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
  @keyframes pop { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
  .royal-btn:hover { filter:brightness(1.18); transform:translateY(-1px); }
  .opt-btn:hover { border-color: var(--ac) !important; filter:brightness(1.07); }
  .topic-card:hover { transform:translateY(-4px) scale(1.01); box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
  * { box-sizing:border-box; }
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:#0a0816}
  ::-webkit-scrollbar-thumb{background:#c9a84c55;border-radius:3px}
`;

const SERIF = '"Palatino Linotype",Palatino,Georgia,serif';
const BODY  = '"Palatino Linotype",Palatino,Georgia,serif';
const GOLD  = '#c9a84c';
const GOLD2 = '#e8d080';

const Divider = ({ color }) => {
  const c = color || GOLD;
  return (
    <div style={{display:'flex',alignItems:'center',gap:10,margin:'16px 0',opacity:0.4}}>
      <div style={{flex:1,height:'1px',background:'linear-gradient(to right,transparent,' + c + ')'}}/>
      <span style={{color:c,fontSize:11}}>✦</span>
      <div style={{flex:1,height:'1px',background:'linear-gradient(to left,transparent,' + c + ')'}}/>
    </div>
  );
};

function MCQCard({ q, answer, onAnswer, t }) {
  const labels = ['I','II','III','IV'];
  return (
    <div>
      <p style={{fontFamily:BODY,fontSize:19,color:t.tx,lineHeight:1.75,marginBottom:24,fontStyle:'italic'}}>{q.q}</p>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {q.opts.map((opt,i) => {
          const sel = answer === i;
          return (
            <button key={i} className="opt-btn" onClick={()=>onAnswer(i)} style={{
              background: sel ? t.ac + '28' : t.card + 'cc',
              border: sel ? '1px solid ' + t.ac : '1px solid ' + t.ac + '33',
              borderRadius:3, padding:'13px 18px', color: sel ? t.ac : t.tx,
              fontFamily:BODY, fontSize:16, textAlign:'left', cursor:'pointer',
              display:'flex', alignItems:'center', gap:14, transition:'all 0.2s',
              boxShadow: sel ? '0 0 16px ' + t.ac + '22' : 'none',
            }}>
              <span style={{minWidth:28,height:28,borderRadius:'50%',background:sel?t.ac:'transparent',border:'1px solid ' + (sel?t.ac:t.mt),display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,color:sel?t.bg:t.mt,fontFamily:SERIF,fontWeight:600,flexShrink:0}}>
                {labels[i]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TFCard({ q, answer, onAnswer, t }) {
  return (
    <div>
      <p style={{fontFamily:SERIF,fontSize:11,color:t.ac,letterSpacing:3,marginBottom:10,textTransform:'uppercase'}}>Decree of Truth</p>
      <blockquote style={{fontFamily:BODY,fontSize:20,color:t.tx,fontStyle:'italic',lineHeight:1.75,margin:'0 0 26px',padding:'16px 22px',background:t.ac + '10',border:'1px solid ' + t.ac + '33',borderLeft:'3px solid ' + t.ac,borderRadius:3}}>
        {q.s}
      </blockquote>
      <div style={{display:'flex',gap:14}}>
        {[true,false].map(val => (
          <button key={String(val)} className="opt-btn" onClick={()=>onAnswer(val)} style={{
            flex:1, padding:'18px 0', borderRadius:3, cursor:'pointer', transition:'all 0.2s',
            background: answer===val ? (val?'#22c55e20':'#dc262620') : t.card + 'cc',
            border: answer===val ? '1px solid ' + (val?'#22c55e':'#dc2626') : '1px solid ' + t.ac + '33',
            color: answer===val ? (val?'#22c55e':'#dc2626') : t.tx,
            fontFamily:SERIF, fontSize:14, fontWeight:600, letterSpacing:2,
          }}>
            {val ? 'True' : 'False'}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ q, answer:rawAns, onAnswer, t }) {
  const ans = rawAns || {};
  const [sel, setSel] = useState(null);
  const [defs] = useState(() => shuffle(q.pairs.map(p=>p.d)));
  const usedDefs = Object.values(ans);
  const handleTerm = term => {
    if (ans[term]) { const n={...ans}; delete n[term]; onAnswer(n); setSel(null); }
    else setSel(sel===term ? null : term);
  };
  const handleDef = def => {
    if (!sel || usedDefs.includes(def)) return;
    onAnswer({...ans,[sel]:def}); setSel(null);
  };
  return (
    <div>
      <p style={{fontFamily:SERIF,fontSize:12,color:t.ac,letterSpacing:3,marginBottom:18,textTransform:'uppercase'}}>{q.title}</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
        <div>
          <p style={{fontFamily:SERIF,fontSize:9,color:t.mt,margin:'0 0 10px',textTransform:'uppercase',letterSpacing:3}}>Terms</p>
          {q.pairs.map(p => {
            const matched=!!ans[p.t], isSel=sel===p.t;
            return <div key={p.t} onClick={()=>handleTerm(p.t)} style={{padding:'11px 14px',marginBottom:8,borderRadius:3,background:matched ? t.ac+'22' : isSel ? t.ac2+'22' : t.card+'cc',border: matched ? '1px solid '+t.ac : isSel ? '1px solid '+t.ac2 : '1px solid '+t.ac+'33',color:matched?t.ac:isSel?t.ac2:t.tx,cursor:'pointer',fontFamily:BODY,fontSize:15,transition:'all 0.2s',lineHeight:1.4}}>
              {p.t}{matched ? ' ✦' : ''}
            </div>;
          })}
        </div>
        <div>
          <p style={{fontFamily:SERIF,fontSize:9,color:t.mt,margin:'0 0 10px',textTransform:'uppercase',letterSpacing:3}}>Definitions</p>
          {defs.map(def => {
            const used=usedDefs.includes(def);
            return <div key={def} onClick={()=>handleDef(def)} style={{padding:'11px 14px',marginBottom:8,borderRadius:3,background:used ? t.mt+'15' : t.card+'cc',border:'1px solid '+t.ac+'33',color:used?t.mt:t.tx,cursor:used||!sel?'default':'pointer',fontFamily:BODY,fontSize:14,opacity:used?0.4:1,transition:'all 0.2s',lineHeight:1.4,outline: sel&&!used ? '1px dashed '+t.ac+'55' : ''}}>
              {def}
            </div>;
          })}
        </div>
      </div>
      {sel && <p style={{color:t.ac,fontSize:14,marginTop:10,fontFamily:BODY,fontStyle:'italic',animation:'goldPulse 1.5s infinite'}}>Now select a definition to pair with: {sel}</p>}
    </div>
  );
}

function OECard({ q, answer, onAnswer, t, hasKey }) {
  return (
    <div>
      <p style={{fontFamily:SERIF,fontSize:11,color:t.ac,letterSpacing:3,marginBottom:10,textTransform:'uppercase'}}>Open Examination</p>
      <p style={{fontFamily:BODY,fontSize:19,color:t.tx,lineHeight:1.75,marginBottom:18,fontStyle:'italic'}}>{q.q}</p>
      {!hasKey && <div style={{padding:'10px 16px',background:t.ac2+'15',border:'1px solid '+t.ac2+'44',borderRadius:3,marginBottom:14,fontFamily:BODY,fontSize:15,color:t.ac,fontStyle:'italic'}}>
        AI grading requires a Groq API key. Add via Settings above. The mark scheme will be revealed upon submission.
      </div>}
      <textarea value={answer||''} onChange={e=>onAnswer(e.target.value)} placeholder="Compose your answer here..." rows={6} style={{width:'100%',padding:'16px',borderRadius:3,background:t.card+'cc',border:'1px solid '+t.ac+'44',color:t.tx,fontFamily:BODY,fontSize:17,resize:'vertical',outline:'none',lineHeight:1.7}} />
    </div>
  );
}

function ResultsView({ results, questions, t, groqKey, onRetry, onBack }) {
  const total = results.reduce((s,r)=>s+(r.pts||0),0);
  const max   = results.reduce((s,r)=>s+r.max,0);
  const pct   = Math.round((total/max)*100);
  const grade = pct>=90?'A*':pct>=80?'A':pct>=70?'B':pct>=60?'C':pct>=50?'D':'F';
  const gc    = pct>=70?'#c9a84c':pct>=50?'#d49040':'#a04040';
  return (
    <div style={{animation:'royalFade 0.5s ease'}}>
      <div style={{textAlign:'center',padding:'32px 20px 26px',background:'linear-gradient(180deg,'+t.card+','+t.bg+')',border:'1px solid '+gc+'55',borderRadius:4,marginBottom:22,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 0%,'+gc+'12,transparent 65%)',pointerEvents:'none'}} />
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,'+gc+',transparent)'}} />
        <div style={{fontSize:38,marginBottom:2,animation:'crownFloat 3s ease-in-out infinite'}}>👑</div>
        <div style={{fontFamily:SERIF,fontSize:68,fontWeight:900,color:gc,animation:'pop 0.7s ease',lineHeight:1}}>{pct}<span style={{fontSize:28}}>%</span></div>
        <div style={{fontFamily:SERIF,fontSize:20,color:gc,fontWeight:600,marginTop:4,letterSpacing:3}}>Grade {grade}</div>
        <Divider color={gc} />
        <div style={{fontFamily:BODY,fontSize:17,color:t.tx,fontStyle:'italic'}}>{pct>=80?'Distinguished Scholar':pct>=60?'Commendable Performance':'Continue your studies, scholar.'}</div>
        <div style={{fontFamily:SERIF,fontSize:12,color:t.mt,marginTop:8,letterSpacing:2}}>{total} of {max} marks awarded</div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,'+gc+',transparent)'}} />
      </div>

      <p style={{fontFamily:SERIF,fontSize:10,color:t.mt,letterSpacing:4,marginBottom:12,textTransform:'uppercase',textAlign:'center'}}>Examination Breakdown</p>
      {results.map((r,i) => {
        const q = questions.find(x=>x.id===r.id);
        const label = q?.q||q?.s||q?.title||'Matching exercise';
        const rc = r.ok===null?GOLD:r.ok?'#22c55e':'#c04040';
        return <div key={r.id} style={{marginBottom:10,padding:'15px 18px',borderRadius:3,background:(r.ok===null?t.mt:r.ok?'#22c55e':'#c04040')+'10',border:'1px solid '+rc+'44'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
            <span style={{fontFamily:BODY,color:t.tx,fontSize:16,flex:1,marginRight:12,lineHeight:1.5,fontStyle:'italic'}}>{i+1}. {label}</span>
            <span style={{fontFamily:SERIF,color:rc,fontWeight:700,fontSize:13,whiteSpace:'nowrap'}}>{r.pts!==null ? r.pts+'/'+r.max : '?/'+r.max}</span>
          </div>
          <p style={{fontFamily:BODY,color:rc,fontSize:15,margin:0,whiteSpace:'pre-line',lineHeight:1.7}}>{r.fb}</p>
          {r.type==='oe'&&r.userAns&&<div style={{marginTop:10,padding:'10px',background:'#ffffff06',borderRadius:3,borderLeft:'2px solid '+GOLD+'44'}}>
            <p style={{fontFamily:SERIF,color:t.mt,fontSize:9,margin:'0 0 3px',letterSpacing:2,textTransform:'uppercase'}}>Your Response</p>
            <p style={{fontFamily:BODY,color:t.tx,fontSize:15,margin:0,opacity:0.65,lineHeight:1.6,fontStyle:'italic'}}>{r.userAns}</p>
          </div>}
          {r.type==='oe'&&!groqKey&&r.rubric&&<div style={{marginTop:8,padding:'10px',background:'#c9a84c0e',borderRadius:3,border:'1px solid #c9a84c33'}}>
            <p style={{fontFamily:SERIF,color:GOLD,fontSize:9,margin:'0 0 3px',letterSpacing:2,textTransform:'uppercase'}}>Mark Scheme</p>
            <p style={{fontFamily:BODY,color:'#c8a860',fontSize:15,margin:0,lineHeight:1.7}}>{r.rubric}</p>
          </div>}
        </div>;
      })}
      <div style={{display:'flex',gap:14,marginTop:22}}>
        <button className="royal-btn" onClick={onRetry} style={{flex:1,padding:'15px',background:'linear-gradient(135deg,'+GOLD+',#a07820)',border:'none',borderRadius:3,color:'#1a0e00',fontFamily:SERIF,fontWeight:700,fontSize:13,cursor:'pointer',letterSpacing:2,transition:'all 0.2s'}}>
          Sit Again
        </button>
        <button className="royal-btn" onClick={onBack} style={{flex:1,padding:'15px',background:'transparent',border:'1px solid '+GOLD+'55',borderRadius:3,color:GOLD,fontFamily:SERIF,fontSize:12,cursor:'pointer',letterSpacing:2,transition:'all 0.2s'}}>
          Choose Subject
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const envKey = (typeof process!=='undefined'&&process.env?.NEXT_PUBLIC_GROQ_API_KEY)||'';
  const [groqKey,setGroqKey]   = useState(envKey);
  const [keyDraft,setKeyDraft] = useState('');
  const [showKey,setShowKey]   = useState(false);
  const [tab,setTab]           = useState('notes');
  const [openNote,setOpenNote] = useState(null);
  const [phase,setPhase]       = useState('select');
  const [examTopic,setExamTopic] = useState(null);
  const [template,setTemplate] = useState(T[0]);
  const [questions,setQuestions] = useState([]);
  const [qIdx,setQIdx]         = useState(0);
  const [answers,setAnswers]   = useState({});
  const [results,setResults]   = useState(null);

  const startExam = tid => {
    setExamTopic(tid); setTemplate(rand(T));
    setQuestions(buildExam(tid)); setQIdx(0); setAnswers({}); setResults(null); setPhase('running');
  };
  const setAns = (id,v) => setAnswers(p=>({...p,[id]:v}));
  const submit = async () => {
    setPhase('grading');
    setResults(await gradeExam(questions, answers, groqKey));
    setPhase('done');
  };
  const t = template;
  const q = questions[qIdx];

  return (
    <div style={{minHeight:'100vh',background:'#0d0820',fontFamily:BODY,color:'#f0e6d0'}}>
      <style>{CSS}</style>

      {/* ROYAL HEADER */}
      <div style={{background:'linear-gradient(180deg,#1a0e30,#110a22)',borderBottom:'1px solid #c9a84c44',padding:'0 24px',position:'sticky',top:0,zIndex:50}}>
        <div style={{maxWidth:920,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 0'}}>
          <div style={{display:'flex',alignItems:'center',gap:14}}>
            <div style={{fontSize:30,animation:'crownFloat 4s ease-in-out infinite'}}>👑</div>
            <div>
              <div style={{fontFamily:SERIF,fontSize:19,fontWeight:700,letterSpacing:4,background:'linear-gradient(90deg,'+GOLD+','+GOLD2+','+GOLD+')',backgroundSize:'200% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',animation:'shimmer 4s linear infinite'}}>
                ROYAL ICT ACADEMY
              </div>
              <div style={{fontFamily:SERIF,fontSize:8,color:'#c9a84c66',letterSpacing:5,textTransform:'uppercase'}}>Examination and Revision System</div>
            </div>
          </div>
          <button onClick={()=>{setKeyDraft(groqKey);setShowKey(true);}} className="royal-btn" style={{background:'transparent',border:'1px solid #c9a84c44',borderRadius:3,padding:'9px 18px',color:GOLD,fontSize:11,cursor:'pointer',fontFamily:SERIF,letterSpacing:2,display:'flex',alignItems:'center',gap:8,transition:'all 0.2s'}}>
            {groqKey ? 'AI Active' : 'Set API Key'}
          </button>
        </div>
        <div style={{height:'1px',background:'linear-gradient(to right,transparent,'+GOLD+'55,transparent)'}} />
      </div>

      {/* TAB BAR */}
      <div style={{background:'#0e0820',borderBottom:'1px solid #c9a84c22'}}>
        <div style={{maxWidth:920,margin:'0 auto',display:'flex'}}>
          {['notes','exam'].map(tb => (
            <button key={tb} onClick={()=>{setTab(tb);if(tb==='exam')setPhase('select');}} style={{flex:1,padding:'15px',background:'transparent',border:'none',borderBottom:tab===tb?'2px solid '+GOLD:'2px solid transparent',color:tab===tb?GOLD:'#5a4a6a',fontSize:12,fontFamily:SERIF,fontWeight:600,cursor:'pointer',letterSpacing:4,textTransform:'uppercase',transition:'all 0.25s'}}>
              {tb==='notes' ? 'Study Scrolls' : 'Enter Examination'}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:920,margin:'0 auto',padding:'28px 18px'}}>

        {/* NOTES */}
        {tab==='notes' && (
          <div style={{animation:'royalFade 0.4s ease'}}>
            <div style={{textAlign:'center',marginBottom:28}}>
              <p style={{fontFamily:SERIF,fontSize:9,color:GOLD+'88',letterSpacing:5,marginBottom:4,textTransform:'uppercase'}}>The Royal Library</p>
              <h2 style={{fontFamily:SERIF,fontSize:21,color:GOLD,margin:0,fontWeight:400,letterSpacing:3}}>Select a Subject to Study</h2>
              <Divider />
            </div>
            {TOPICS.map(topic => {
              const note=NOTES[topic.id], open=openNote===topic.id;
              return (
                <div key={topic.id} style={{marginBottom:14,borderRadius:3,border:'1px solid '+(open?topic.gold:topic.gold+'33'),overflow:'hidden',transition:'border-color 0.3s'}}>
                  <div onClick={()=>setOpenNote(open?null:topic.id)} style={{padding:'18px 24px',background:open?topic.gold+'14':'#110a22',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <div style={{display:'flex',alignItems:'center',gap:14}}>
                      <span style={{fontSize:26}}>{topic.emoji}</span>
                      <div>
                        <div style={{fontFamily:SERIF,fontSize:15,fontWeight:600,color:open?topic.gold:'#c8b888',letterSpacing:2}}>{topic.label}</div>
                        <div style={{fontFamily:BODY,fontSize:14,color:'#5a4a6a',fontStyle:'italic'}}>{topic.desc}</div>
                      </div>
                    </div>
                    <span style={{color:topic.gold,transform:open?'rotate(180deg)':'none',transition:'transform 0.3s',fontSize:14}}>▼</span>
                  </div>
                  {open && <div style={{padding:'24px 26px',background:'#09071a',borderTop:'1px solid '+topic.gold+'33',animation:'royalFade 0.3s ease'}}>
                    {note.sections.map((sec,si) => (
                      <div key={si} style={{marginBottom:24}}>
                        <h4 style={{fontFamily:SERIF,color:topic.gold,margin:'0 0 12px',fontSize:11,textTransform:'uppercase',letterSpacing:4,display:'flex',alignItems:'center',gap:10}}>
                          <span style={{width:18,height:'1px',background:topic.gold,display:'inline-block'}} />
                          {sec.h}
                          <span style={{flex:1,height:'1px',background:'linear-gradient(to right,'+topic.gold+'66,transparent)',display:'inline-block'}} />
                        </h4>
                        {sec.body && <p style={{fontFamily:BODY,color:'#c0b0d0',lineHeight:1.9,fontSize:17,whiteSpace:'pre-line',margin:0}}>{sec.body}</p>}
                        {sec.table && <div style={{overflowX:'auto'}}>
                          <table style={{width:'100%',borderCollapse:'collapse',fontFamily:BODY,fontSize:15}}>
                            {sec.table.map((row,ri) => <tr key={ri} style={{borderBottom:'1px solid '+topic.gold+'15'}}>
                              {row.map((cell,ci) => <td key={ci} style={{padding:'9px 13px',color:ri===0?topic.gold:'#c0b0d0',fontFamily:ri===0?SERIF:BODY,fontWeight:ri===0?600:400,background:ri===0?topic.gold+'12':ri%2===0?'#0e0820':'transparent',fontSize:ri===0?11:15,letterSpacing:ri===0?1:0}}>{cell}</td>)}
                            </tr>)}
                          </table>
                        </div>}
                        {sec.terms && <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:10}}>
                          {sec.terms.map(([term,def],ti) => (
                            <div key={ti} style={{padding:'13px 15px',background:'#110a22',borderRadius:3,border:'1px solid '+topic.gold+'33',borderLeft:'3px solid '+topic.gold+'66'}}>
                              <div style={{fontFamily:SERIF,color:topic.gold,fontWeight:600,fontSize:12,marginBottom:4,letterSpacing:1}}>{term}</div>
                              <div style={{fontFamily:BODY,color:'#9888aa',fontSize:15,lineHeight:1.5,fontStyle:'italic'}}>{def}</div>
                            </div>
                          ))}
                        </div>}
                        {si < note.sections.length-1 && <Divider color={topic.gold} />}
                      </div>
                    ))}
                  </div>}
                </div>
              );
            })}
          </div>
        )}

        {/* EXAM */}
        {tab==='exam' && (
          <div style={{animation:'royalFade 0.4s ease'}}>

            {phase==='select' && (
              <div>
                <div style={{textAlign:'center',marginBottom:28}}>
                  <p style={{fontFamily:SERIF,fontSize:9,color:GOLD+'88',letterSpacing:5,marginBottom:4,textTransform:'uppercase'}}>The Royal Examination Hall</p>
                  <h2 style={{fontFamily:SERIF,fontSize:21,color:GOLD,margin:0,fontWeight:400,letterSpacing:3}}>Choose Your Subject</h2>
                  <p style={{fontFamily:BODY,color:'#5a4a6a',fontSize:16,fontStyle:'italic',marginTop:8}}>A royal house is drawn at random — questions are reshuffled anew each attempt</p>
                  <Divider />
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:14,marginBottom:28}}>
                  {TOPICS.map(topic => (
                    <div key={topic.id} className="topic-card" onClick={()=>startExam(topic.id)}
                      style={{padding:'26px 18px',borderRadius:3,cursor:'pointer',background:'#110a22',border:'1px solid '+topic.gold+'44',transition:'all 0.25s',textAlign:'center',position:'relative',overflow:'hidden'}}>
                      <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(to right,transparent,'+topic.gold+',transparent)'}} />
                      <div style={{fontSize:32,marginBottom:10}}>{topic.emoji}</div>
                      <div style={{fontFamily:SERIF,fontSize:13,fontWeight:700,color:topic.gold,marginBottom:4,letterSpacing:2}}>{topic.label}</div>
                      <div style={{fontFamily:BODY,fontSize:14,color:'#5a4a6a',fontStyle:'italic',marginBottom:14}}>{topic.desc}</div>
                      <div style={{padding:'7px 0',background:topic.gold+'18',border:'1px solid '+topic.gold+'44',borderRadius:2,color:topic.gold,fontSize:10,fontFamily:SERIF,letterSpacing:3}}>
                        COMMENCE
                      </div>
                      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'1px',background:'linear-gradient(to right,transparent,'+topic.gold+'55,transparent)'}} />
                    </div>
                  ))}
                </div>
                <div style={{padding:'18px 22px',background:'#110a22',borderRadius:3,border:'1px solid '+GOLD+'22'}}>
                  <p style={{fontFamily:SERIF,fontSize:9,color:GOLD+'77',letterSpacing:4,margin:'0 0 10px',textTransform:'uppercase'}}>The Eight Royal Houses</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                    {T.map(tmpl => <span key={tmpl.id} style={{padding:'4px 13px',background:tmpl.bg,border:'1px solid '+tmpl.ac+'55',borderRadius:2,fontSize:10,color:tmpl.ac,fontFamily:SERIF,letterSpacing:1}}>{tmpl.nm}</span>)}
                  </div>
                </div>
              </div>
            )}

            {phase==='running' && q && (
              <div style={{background:t.bg,borderRadius:3,overflow:'hidden',border:'1px solid '+t.ac+'44',animation:'royalFade 0.4s ease'}}>
                <div style={{height:'2px',background:'linear-gradient(to right,transparent,'+t.ac+',transparent)'}} />
                <div style={{background:'linear-gradient(135deg,'+t.card+','+t.bg+')',padding:'14px 22px',borderBottom:'1px solid '+t.ac+'22',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontFamily:SERIF,color:t.ac,fontSize:12,letterSpacing:3}}>{t.nm}</span>
                  <div style={{display:'flex',alignItems:'center',gap:14}}>
                    <span style={{fontFamily:SERIF,color:t.mt,fontSize:11,letterSpacing:2}}>Question {qIdx+1} of {questions.length}</span>
                    <button onClick={()=>setPhase('select')} style={{background:'transparent',border:'1px solid '+t.mt+'55',borderRadius:2,padding:'5px 12px',color:t.mt,cursor:'pointer',fontSize:10,fontFamily:SERIF,letterSpacing:2}}>Withdraw</button>
                  </div>
                </div>
                <div style={{height:'2px',background:t.ac+'18'}}>
                  <div style={{height:'100%',background:'linear-gradient(to right,'+t.ac+'88,'+t.ac+')',width:((qIdx+1)/questions.length*100)+'%',transition:'width 0.5s ease'}} />
                </div>
                <div style={{padding:'30px 28px',minHeight:350}} key={qIdx}>
                  <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
                    <span style={{background:t.ac+'18',border:'1px solid '+t.ac+'44',padding:'4px 12px',borderRadius:2,fontFamily:SERIF,fontSize:9,color:t.ac,letterSpacing:3,textTransform:'uppercase'}}>
                      {q.type==='mcq'?'Multiple Choice':q.type==='tf'?'True or False':q.type==='matching'?'Matching Exercise':'Open Answer'}
                    </span>
                    <span style={{fontFamily:SERIF,color:t.mt,fontSize:10,letterSpacing:2}}>
                      {q.type==='mcq'||q.type==='tf' ? 'One Mark' : q.type==='matching' ? q.pairs.length+' Marks' : 'Three Marks'}
                    </span>
                  </div>
                  {q.type==='mcq'      && <MCQCard  q={q} answer={answers[q.id]} onAnswer={v=>setAns(q.id,v)} t={t} />}
                  {q.type==='tf'       && <TFCard   q={q} answer={answers[q.id]} onAnswer={v=>setAns(q.id,v)} t={t} />}
                  {q.type==='matching' && <MatchCard q={q} answer={answers[q.id]} onAnswer={v=>setAns(q.id,v)} t={t} />}
                  {q.type==='oe'       && <OECard   q={q} answer={answers[q.id]} onAnswer={v=>setAns(q.id,v)} t={t} hasKey={!!groqKey} />}
                </div>
                <div style={{height:'1px',background:'linear-gradient(to right,transparent,'+t.ac+'33,transparent)'}} />
                <div style={{padding:'14px 28px 24px',display:'flex',justifyContent:'space-between',alignItems:'center',background:t.card+'99'}}>
                  <button className="royal-btn" onClick={()=>setQIdx(Math.max(0,qIdx-1))} disabled={qIdx===0} style={{background:'transparent',border:'1px solid '+t.ac+'44',borderRadius:2,padding:'10px 20px',color:qIdx===0?t.mt:t.ac,cursor:qIdx===0?'not-allowed':'pointer',fontFamily:SERIF,fontSize:11,letterSpacing:2,opacity:qIdx===0?0.3:1,transition:'all 0.2s'}}>
                    Previous
                  </button>
                  <div style={{display:'flex',gap:6,alignItems:'center'}}>
                    {questions.map((_,i) => <div key={i} onClick={()=>setQIdx(i)} style={{width:i===qIdx?18:6,height:6,borderRadius:3,cursor:'pointer',background:i===qIdx?t.ac:answers[questions[i].id]!==undefined?t.ac+'88':t.mt+'55',transition:'all 0.25s'}} />)}
                  </div>
                  {qIdx < questions.length-1
                    ? <button className="royal-btn" onClick={()=>setQIdx(qIdx+1)} style={{background:'linear-gradient(135deg,'+t.ac+'cc,'+t.ac+'88)',border:'none',borderRadius:2,padding:'10px 22px',color:t.bg,cursor:'pointer',fontFamily:SERIF,fontSize:11,fontWeight:700,letterSpacing:2,transition:'all 0.2s'}}>Proceed</button>
                    : <button className="royal-btn" onClick={submit} style={{background:'linear-gradient(135deg,'+GOLD+',#a07828)',border:'none',borderRadius:2,padding:'10px 22px',color:'#1a0e00',cursor:'pointer',fontFamily:SERIF,fontSize:11,fontWeight:700,letterSpacing:2,animation:'goldPulse 2s infinite',transition:'all 0.2s'}}>Submit</button>
                  }
                </div>
                <div style={{height:'2px',background:'linear-gradient(to right,transparent,'+t.ac+',transparent)'}} />
              </div>
            )}

            {phase==='grading' && (
              <div style={{textAlign:'center',padding:'80px 20px',animation:'royalFade 0.3s ease'}}>
                <div style={{fontSize:36,marginBottom:18,display:'inline-block',animation:'orbitalSpin 2s linear infinite'}}>✦</div>
                <h2 style={{fontFamily:SERIF,color:GOLD,margin:'0 0 10px',fontSize:18,letterSpacing:5}}>Deliberating Your Answers</h2>
                <p style={{fontFamily:BODY,color:'#5a4a6a',fontSize:17,fontStyle:'italic'}}>{groqKey?'The Royal Scholar examines your responses...':'Tallying your marks...'}</p>
              </div>
            )}

            {phase==='done' && results && (
              <ResultsView results={results} questions={questions} t={t} groqKey={groqKey}
                onRetry={()=>startExam(examTopic)} onBack={()=>setPhase('select')} />
            )}
          </div>
        )}
      </div>

      {/* API KEY MODAL */}
      {showKey && (
        <div style={{position:'fixed',inset:0,background:'rgba(5,3,12,0.92)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}}>
          <div style={{background:'#110a22',border:'1px solid '+GOLD+'55',borderRadius:3,padding:'34px',maxWidth:450,width:'90%',animation:'royalFade 0.3s ease',position:'relative'}}>
            <div style={{height:'2px',background:'linear-gradient(to right,transparent,'+GOLD+',transparent)',position:'absolute',top:0,left:0,right:0}} />
            <div style={{textAlign:'center',marginBottom:22}}>
              <div style={{fontSize:26,marginBottom:6}}>⚙</div>
              <h2 style={{fontFamily:SERIF,color:GOLD,margin:'0 0 6px',fontSize:17,letterSpacing:3}}>Royal Groq Seal</h2>
              <p style={{fontFamily:BODY,color:'#5a4a6a',fontSize:15,fontStyle:'italic',margin:'0 0 8px'}}>Required for AI grading of open answers. Obtain your seal at console.groq.com</p>
              <p style={{fontFamily:SERIF,color:'#3a2a4a',fontSize:9,letterSpacing:2,margin:0}}>For Vercel: set NEXT_PUBLIC_GROQ_API_KEY as an environment variable</p>
            </div>
            <input type="password" value={keyDraft} onChange={e=>setKeyDraft(e.target.value)} placeholder="gsk_..." style={{width:'100%',padding:'12px 14px',background:'#080616',border:'1px solid '+GOLD+'33',borderRadius:2,color:'#f0e6d0',fontSize:15,marginBottom:14,fontFamily:'monospace',outline:'none'}} />
            <div style={{display:'flex',gap:12}}>
              <button className="royal-btn" onClick={()=>{setGroqKey(keyDraft);setShowKey(false);}} style={{flex:1,padding:'12px',background:'linear-gradient(135deg,'+GOLD+',#a07828)',border:'none',borderRadius:2,color:'#1a0e00',fontFamily:SERIF,fontWeight:700,fontSize:11,cursor:'pointer',letterSpacing:3,transition:'all 0.2s'}}>
                Bestow Seal
              </button>
              {groqKey && <button className="royal-btn" onClick={()=>{setGroqKey('');setKeyDraft('');setShowKey(false);}} style={{padding:'12px 14px',background:'transparent',border:'1px solid #a0404044',borderRadius:2,color:'#a04040',fontFamily:SERIF,fontSize:10,cursor:'pointer',letterSpacing:2,transition:'all 0.2s'}}>Revoke</button>}
              <button className="royal-btn" onClick={()=>setShowKey(false)} style={{padding:'12px 14px',background:'transparent',border:'1px solid '+GOLD+'22',borderRadius:2,color:'#5a4a6a',fontFamily:SERIF,fontSize:10,cursor:'pointer',letterSpacing:2,transition:'all 0.2s'}}>Dismiss</button>
            </div>
            <div style={{height:'2px',background:'linear-gradient(to right,transparent,'+GOLD+',transparent)',position:'absolute',bottom:0,left:0,right:0}} />
          </div>
        </div>
      )}
    </div>
  );
}