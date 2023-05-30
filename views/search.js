function search_engine()
      {
        var input=document.getElementById("search").value;
        input=input.toLowerCase(); 
        if(input==="computer"||"com"||"Computer")
        {
          window.location.href="/subjects/computer_courses";
        }
       else if(input==="java"||"j"||"Java")
        {
          window.location.href="/subjects/computer_courses";
        }
        else if(input==="C++"||"c++"){
          window.location.href="/subjects/computer_courses";
        }
        else if(input==="algo"||"algorithm")
        {
          window.location.href="/subjects/computer_courses";
        }
          else if(input==="machine"||"machine learning")
          {
            window.location.href="/subjects/computer_courses";
          }
          else if(input==="script"||"java script")
          {
            window.location.href="/subjects/computer_courses";
          }
          else if(input==="bootstrap"||"boot")
          {
            window.location.href="/subjects/computer_courses";
          }
          else if(input==="py"||"python")
          {
            window.location.href="/subjects/computer_courses";
          }
        
        else 
        window.alert(" course not found");}
        