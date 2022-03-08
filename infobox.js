//MUST HAVE - CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_comp.innerHTML = `

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


<p id="contain">
 

  <span style="display:none">The year is 2022. Vancouver is regarded as one of the most sought-after city's to live in. Yet some Vancouver youth are still forced to live on the street despite residing in a modern city.  Homelessness is an issue that is growing throughout the world. Follow our fictional youth "Kevin" as he navigates the often ignored segment of our society.</span>
</p>

<textarea id="textContentOutput" rows="6" cols="30" readonly>...</textarea>



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
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}   
const textContentOutput = document.getElementById("textContentOutput");
const innerTextLong = document.getElementById("innerTextOutput");

textContentOutput.value = contain.textContent;
innerTextOutput.value = contain.innerText;

//MUST HAVE - define the tag for the custom elements
customElements.define("info", TheInfo)