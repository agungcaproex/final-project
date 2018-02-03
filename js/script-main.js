var body = document.body;

//membuat div class "wrapper" - child dari body
var wrapper = document.createElement("div");
wrapper.setAttribute("class","wrapper");
body.appendChild(wrapper);


// CLASS MENU

//membuat div class "menu" - child dari wrapper
var menu = document.createElement("div");
menu.setAttribute("class","menu");
wrapper.appendChild(menu);

//membuat element "hrwrap" - child dari wrapper
var hrwrap = document.createElement("hr");
wrapper.appendChild(hrwrap);

//membuat nav class "navi" - child dari menu
var navi = document.createElement("nav");
navi.setAttribute("class","navi");
menu.appendChild(navi);

//membuat element "ul_navi" - child dari navi
var ul_navi = document.createElement("ul");
navi.appendChild(ul_navi);

//membuat element "center_navi" - child dari ul_navi
var center_navi = document.createElement("center");
ul_navi.appendChild(center_navi)

//membuat element "li1_navicenter" - child dari center_navi
var li1_navicenter = document.createElement("li");
center_navi.appendChild(li1_navicenter);

//membuat element "a1_navicenter" - child dari center_navi 
var a1_navicenter = document.createElement("a");
a1_navicenter.setAttribute("href","#profile");
li1_navicenter.appendChild(a1_navicenter);

//membuat element "h3_a1" - child dari a1_navicenter
var h3_a1 = document.createElement("h3");
a1_navicenter.appendChild(h3_a1);
h3_a1.innerHTML = "My Profile"; 

//membuat element "li2_navicenter" - child dari center_navi
var li2_navicenter = document.createElement("li");
center_navi.appendChild(li2_navicenter);

//membuat element "a2_navicenter" - child dari center_navi 
var a2_navicenter = document.createElement("a");
a2_navicenter.setAttribute("href","#background");
li2_navicenter.appendChild(a2_navicenter);

//membuat element "h3_a2" - child dari a2_navicenter
var h3_a2 = document.createElement("h3");
a2_navicenter.appendChild(h3_a2);
h3_a2.innerHTML = "Background"; 


//membuat element "li3_navicenter" - child dari center_navi
var li3_navicenter = document.createElement("li");
center_navi.appendChild(li3_navicenter);

//membuat element "a3_navicenter" - child dari center_navi 
var a3_navicenter = document.createElement("a");
a3_navicenter.setAttribute("href","#experience");
li3_navicenter.appendChild(a3_navicenter);

//membuat element "h3_a3" - child dari a3_navicenter
var h3_a3 = document.createElement("h3");
a3_navicenter.appendChild(h3_a3);
h3_a3.innerHTML = "My Experience"; 

//membuat element "li4_navicenter" - child dari center_navi
var li4_navicenter = document.createElement("li");
center_navi.appendChild(li4_navicenter);

//membuat element "a4_navicenter" - child dari center_navi 
var a4_navicenter = document.createElement("a");
a4_navicenter.setAttribute("href","#contact");
li4_navicenter.appendChild(a4_navicenter);

//membuat element "h3_a4" - child dari a4_navicenter
var h3_a4 = document.createElement("h3");
a4_navicenter.appendChild(h3_a4);
h3_a4.innerHTML = "Contact"; 

//membuat element "li5_navicenter" - child dari center_navi
var li5_navicenter = document.createElement("li");
center_navi.appendChild(li5_navicenter);

//membuat element "a5_navicenter" - child dari center_navi 
var a5_navicenter = document.createElement("a");
a5_navicenter.setAttribute("href","apps.html");
li5_navicenter.appendChild(a5_navicenter);

//membuat element "h3_a5" - child dari a5_navicenter
var h3_a5 = document.createElement("h3");
a5_navicenter.appendChild(h3_a5);
h3_a5.innerHTML = "My To Do List"; 

//CLASS HEADER

//membuat div class "header" - child dari wrapper
var header = document.createElement("div");
header.setAttribute("class","header");
wrapper.appendChild(header);

//membuat element "h1_header" - child dari header
var h1_header = document.createElement("h1");
header.appendChild(h1_header);

//membuat element "span_header" - child dari h1 header
var span_header = document.createElement("span");
h1_header.appendChild(span_header);
h1_header.innerHTML = "My Portfolio";


//CLASS CONTENT

//membuat div class "content" - child dari wrapper
var content = document.createElement("div");
content.setAttribute("class","content");
wrapper.appendChild(content);

//membuat div id "profile"  - child dari content
var profile = document.createElement("div");
profile.setAttribute("id","profile");
profile.setAttribute("class","subcontent");
content.appendChild(profile);


//membuat div class "sidebar_profile" - child dari profile
var sidebar_profile = document.createElement("div");
sidebar_profile.setAttribute("class","sidebar");
profile.appendChild(sidebar_profile);

//membuat element "h2_sidebarprof" - child dari sidebar_profile
var h2_sidebarprof = document.createElement("h2");
sidebar_profile.appendChild(h2_sidebarprof);
h2_sidebarprof.innerHTML = "My Profile";

//membuat div class "line_profile" - child dari profile
var line_profile = document.createElement("div");
line_profile.setAttribute("class","line");
profile.appendChild(line_profile);

//membuat div class "substance_profile" - child dari profile
var substance_profile = document.createElement("div");
substance_profile.setAttribute("class","substance");
profile.appendChild(substance_profile);

//membuat element "p_subprofile" - child dari substance_profile
var p_subprofile = document.createElement("p");
substance_profile.appendChild(p_subprofile);
p_subprofile.innerHTML = "I'm a Networking Engineer at a weapons manufacturing company in Bandung.</br> Currently my position becomes a SAP Basis Administrator at my company.</br> And right now i want to be a profesional application developer.";

//membuat div id "background" - child dari content
var background = document.createElement("div");
background.setAttribute("id","background");
background.setAttribute("class","subcontent");
content.appendChild(background);

//membuat div class "sidebar_background" - child dari background
var sidebar_background = document.createElement("div");
sidebar_background.setAttribute("class","sidebar");
background.appendChild(sidebar_background);

//membuat element "h2_sidebarback" - child dari sidebar_background
var h2_sidebarback = document.createElement("h2");
sidebar_background.appendChild(h2_sidebarback);
h2_sidebarback.innerHTML = "Background";

//membuat div class "line_background" - child dari background
var line_background = document.createElement("div");
line_background.setAttribute("class","line");
background.appendChild(line_background);

//membuat div class "substance_background" - child dari background
var substance_background = document.createElement("div");
substance_background.setAttribute("class","substance");
background.appendChild(substance_background);

//membuat element "p_subbackground" - child dari substance_background
var p_subbackground = document.createElement("p");
substance_background.appendChild(p_subbackground);
p_subbackground.innerHTML = "I'm studied in vacational high schools, computer and network engineering course.";


//membuat div id "experience" - child dari content
var experience = document.createElement("div");
experience.setAttribute("id","experience");
experience.setAttribute("class","subcontent");
content.appendChild(experience);

//membuat div class "sidebar_experience" - child dari experience
var sidebar_experience = document.createElement("div");
sidebar_experience.setAttribute("class","sidebar");
experience.appendChild(sidebar_experience);

//membuat element "h2_sidebarexp" - child dari sidebar_experience
var h2_sidebarexp = document.createElement("h2");
sidebar_experience.appendChild(h2_sidebarexp);
h2_sidebarexp.innerHTML = "Experience";

//membuat div class "line_experience" - child dari experience
var line_experience = document.createElement("div");
line_experience.setAttribute("class","line");
experience.appendChild(line_experience);

//membuat div class "substance_experience" - child dari experience
var substance_experience = document.createElement("div");
substance_experience.setAttribute("class","substance");
experience.appendChild(substance_experience);

//membuat element "p_subexperience" - child dari substance_experience
var p_subexperience = document.createElement("p");
substance_experience.appendChild(p_subexperience);
p_subexperience.innerHTML = "I have some experience.";


//membuat element "br_experience" - child dari substance_experience
var br_experience = document.createElement("br");
substance_experience.appendChild(br_experience);

//membuat element "ul_experience" - child dari substance_experience
var ul_experience = document.createElement("ul");
substance_experience.appendChild(ul_experience);

//membuat element "li1_experience" - child dari ul_experience
var li1_experience = document.createElement("li");
ul_experience.appendChild(li1_experience);
li1_experience.innerHTML = "Computer Engineer";

//membuat element "li2_experience" - child dari ul_experience
var li2_experience = document.createElement("li");
ul_experience.appendChild(li2_experience);
li2_experience.innerHTML = "Networking Engineer";

//membuat element "li3_experience" - child dari ul_experience
var li3_experience = document.createElement("li");
ul_experience.appendChild(li3_experience);
li3_experience.innerHTML = "SAP Basis Administrator";

//membuat element "li4_experience" - child dari ul_experience
var li4_experience = document.createElement("li");
ul_experience.appendChild(li4_experience);
li4_experience.innerHTML = "Database Administrator";

//membuat div id "contact" - child dari content
var contact = document.createElement("div");
contact.setAttribute("id","contact");
contact.setAttribute("class","subcontent");
content.appendChild(contact);

//membuat div class "sidebar_contact" - child dari contact
var sidebar_contact = document.createElement("div");
sidebar_contact.setAttribute("class","sidebar");
contact.appendChild(sidebar_contact);

//membuat element "h2_sidebarcont" - child dari sidebar_contact
var h2_sidebarcont = document.createElement("h2");
sidebar_contact.appendChild(h2_sidebarcont);
h2_sidebarcont.innerHTML = "Contact";

//membuat div class "line_contact" - child dari contact
var line_contact = document.createElement("div");
line_contact.setAttribute("class","line");
contact.appendChild(line_contact);

//membuat div class "substance_contact" - child dari contact
var substance_contact = document.createElement("div");
substance_contact.setAttribute("class","substance");
contact.appendChild(substance_contact);

//membuat element "ul_contact" - child dari substance_contact
var ul_contact = document.createElement("ul");
substance_contact.appendChild(ul_contact);

//membuat element "li1_contact" - child dari ul_contact
var li1_contact = document.createElement("li");
ul_contact.appendChild(li1_contact);
li1_contact.innerHTML = "Phone : 087822171172";

//membuat element "li1_contact" - child dari ul_contact
var li2_contact = document.createElement("li");
ul_contact.appendChild(li2_contact);
li2_contact.innerHTML = "Email : agung.caproex@gmail.com";
