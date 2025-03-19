import "./GeekZone.css";

function GeekZone() {
  return (
    <div className="whatIsGeekZone flex">

      <div className="leftSection w-6/11 h-screen bg-blue-500">

        <div className="topicBox w-full bg-pink-500 h-3/7 px-20 py-2 flex items-end">
        <text className="topic">
          What is <br/> <span className="topic topicHighlighted">GeekZone?</span>
        </text>
        </div>

        <div className="contentBox w-full bg-zinc-500 h-3/7 px-20 py-6">
        <h1 className="content">TechCamps are hands-on, participant-driven workshops that connect private sector technology experts with key populations — journalists, non-governmental organizations, civil society advocates, and more — to explore and apply innovative tech solutions to global issues. TechCamps are focused on results, with participants identifying real-world challenges and working in partnership with trainers to apply technology solutions to these challenges. Each TechCamp also includes ongoing impact-oriented programs and efforts to help participants implement their projects post-workshop and stay connected and engaged with each other, their trainers, and U.S. State Department staff.</h1>
        </div>

        <div className="logoBox w-full bg-slate-500 h-1/7 grid justify-items-center pb-[50px] overflow-hidden">
        <img src="/Images/Untitled-1.png" className="logo object-cover size-35"/>
        </div>

      </div>

      <div className="RightSection w-5/11 h-screen bg-cyan-500 grid place-items-center items-end">
        
          <img src="/Images/2.png" className="contentImage"/>

      </div>

    </div>
  );
}

export default GeekZone;
