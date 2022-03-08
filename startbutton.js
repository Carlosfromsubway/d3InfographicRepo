//MUST HAVE - CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `

<style> 

    #start_button {  
    border-radius: 50%;
    border: 5px solid #71F099;
    border-radius: 50%;
    color: #71F099;
    width: 250px;
    height: 250px;
    background: transparent;
    transition: 0.4s;
    animation:pulse 1.3s ease infinite;
    cursor: pointer;
    }

    #start_button::before{
        content:"";
        display: inline-block;
        border-left: 75px solid;
        border-top: 60px solid transparent;
        border-bottom: 50px solid transparent;
        margin-right:-25px;
        
    }

    #start_button:hover{
        background: #3DA35D;
    }

    @keyframes pulse {
        0%{
            boxshadow: 0em 0em 0em 0em #71F099;
        }
        100%{
            box shadow: 0em 0em 0em 0.4em #3DA35D;    
        }
    }
</style>

<body>
<button id="start_button"> </button>


</body>




`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheStart extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-start", TheStart)