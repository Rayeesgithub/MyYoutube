import { comment } from 'postcss';
import React from 'react'


const actualComment=[
  {
    name:"@Rayees",
    text:"Can’t believe this is free content, you’re helping so many people 🙏",
    reply:[
      {
        name:"@Saddam",
        text:" After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation and the feeling that  instead of a teacher a friend is teaching,makes the videos more and more interesting.thanks a lot for sharing ,",
        reply:[]
      }
    ],
   
  },
  {
    name:"@Rahul Kumar",
    text:"Who else watches this kind of content at 2 AM?, 🚀🚀🚀♥Amazing content",
    reply:[
     {
      name:"@Anmol Kumar",
      text:"hh my God Man!! 🔥 Heavy stuffs. I literally had goosebumps when you showed practical example of 📚 Thank you so much for these awesome contents. 🙏🏼",
      reply:[
        {
          name:"@Reyasat Ali",
          text:"Every beginner should start with this channel, no joke.",
          reply:[]
        }
      ],
     },
     {
      name:"@Suraj",
      text:"Your Youtube project very⭐🔴🚀♥ good",
      reply:[],
     },
    ],

  },
  {
    name:"@Md Asher",
    text:"Can’t believe this is free content, you’re helping so many people 🙏",
    reply:  [
      {
        name: "Awais Karni",
        text: "कोणी कोणी शेवट पर्यंत व्हिडिओ बघितला? Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
        reply: [],
      },
      {
        name: "@Abdullah",
        text: "The way you explain things is just perfect — please keep going!",
        reply: [],
      },
    ]
  },
  {
    name:"@Dilshad Babu",
    text:"Came here to learn, stayed for the good vibes ❤️",
    reply: [
      {
        name: "Kaish Bhai",
        text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
        reply: [],
      },
      {
        name: "Murad",
        text: "I was just casually watching, and suddenly I learned more than in school.👌👌❤️",
        reply: [],
      },
      {
        name: "Harshdeep ",
        text: "Bro dropped the realest tutorial and just walked off like a legend 😎",
        reply: [],
      },
    ],
  },
  {
    name:"@spillthebuzz",
    text:"Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ...❤❤❤ Feeling like someone is singing for me and literally a different vibe comes ❤❤❤    ",
    reply:[
      {
        name: "sandeep",
        text: "The editing on this is next level, so smooth 👏",
        reply: [],
      },
    ]
    
  },
  {
    name:"@DebojyotiMandal",
    text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    reply:[
      {
        name: "sohail",
        text: "Loved every second of this, please make a part 2!",
        reply: [],
      },
      {
        name: "Salman Khan",
        text: "Aaaaahhhhhhhh kya voice hai. Yaar 🔥🔥🔥...,...❤️❤️❤️so sweet", 
        reply: [],
      },
    ]
  },
  {
    name:"@rahulchavan",
    text:"Can someone tell me why this isn’t viral yet? 🔥 💫💫💫❣️",
    reply:  [
      {
        name: "rayees",
        text: "The explanation was super clear, I finally understood this topic!",
        reply: [],
      },
      {
        name: "Reyast",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        reply: [],
      },
    ]
  },
  {
    name:"@Raja",
    text:"This video literally made my day, thank you so much! 🙌",
    reply: [
      {
        name: "Samat chavan",
        text: "What a magical Superb voice… I m Artist when I m working alwz listen ur songs … it’s gave me energy to do my work ✍",
        reply: [],
      },
      {
        name: "Nadim",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        reply: [],
      },
     
    ],
  }
]

const Comment=({data})=>{
  const {name,text,reply}=data;
  return(
    <div className=' flex shadow-sm bg-gray-100 p-2 rounded-lg my-2  dark:bg-black text-black dark:text-white '>
     <img className=' md:h-10 md:w-10 h-6 w-6'
      src='https://i.pinimg.com/1200x/c7/ab/cd/c7abcd3ce378191a3dddfa4cdb2be46f.jpg' alt='logo'/>
      <div className=' px-3'>
      <p className=' font-bold md:text-sm text-[0.8rem]'>{name}</p>
      <p className='  md:text-[12px] text-[11px]'>{text}</p>
      </div>
    </div>
  )
}
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-gray-300 ml-7">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentContainer=()=>{
  return(
    <div className=' m-3 p-2'>
    <h1 className=' border-b border-gray-400 mt-1 sm:text-xl text-[0.8rem] font-bold'>Add Comment...</h1>
    <CommentList comments={actualComment} />
    </div>
  )
}
export default CommentContainer;
