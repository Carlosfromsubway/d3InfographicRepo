//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `

<style> 
#innerTextOutput {
    height: 200px;
    width: 250px;
    background-color: #222E50; 
    padding: 20px;
    margin: 10px;
    border-radius: 9px;
    color: #FEFAE0;
    resize: both;
    overflow: auto;
  }
  
  #textContentOutput {
    height: 200px;
    width: auto;
    background-color: #222E50; 
    padding: 20px;
    margin: 15px;
    border-radius: 9px;
    color: #FEFAE0;
    resize: both;
    overflow: auto;
  }

</style>

<body>




<div id="innerTextOutput">
The year is 2022. Vancouver is regarded as one of the most sought-after city's to live in. Yet some Vancouver youth are still forced to live on the street despite residing in a modern city.  Homelessness is an issue that is growing throughout the world. Follow our fictional youth "Kevin" as he navigates the often ignored segment of our society.
</div>




</body>




`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheInfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_info.content.cloneNode(true)); //use the template to make a clone
        var textContentOutput = this.shadowRoot.getElementById("textContentOutput");
        var innerTextLong = this.shadowRoot.getElementById("innerTextOutput");
       
     
       
      }


    //To-do - CREATE THE FUNCTIONALITIES HERE!
   
  }

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)