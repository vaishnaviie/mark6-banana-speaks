
 
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output");

var serverUrl= "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something is wrong with server! Try Again after some time.");
}

function ClickEventHandler() {
    {
        var inputText=txtInput.value;

        if(inputText===""){
            outputDiv.innerText=`Please enter some text!`;
        }

        else{
            fetch(getTranslationURL(inputText))
            .then(response=>response.json())
            .then(json=>{
                var translatedText=json.contents.translated;
                outputDiv.innerText=translatedText;
                })
            .catch(errorHandler)
        }

    };
}

btnTranslate.addEventListener("click", ClickEventHandler );














// Doge translator API gives you API access to doge translator, so that you can integrate this functionality in your websites or applications.

// To access the web version of the translator click here.

// API End Points
// The end point for connecting : If you subscribe directly from us use this endpoint.
// https://api.funtranslations.com/translate/
	
// Ratelimiting
// Our translation API is public. To maintain our service level we ratelimit the number of API calls. For public API calls this is 60 API calls a day with distribution of 5 calls an hour. For paid plans this limit is increased according to the service level described in the plan.

// Authentication
// For public calls you don't need to pass any API key. Just invoke the endpoint (see examples below). For paid subscriptions you need to pass the API key.

// Currently we support API Key based authentication. Please set a request header 'X-FunTranslations-Api-Secret' with value of your API key. Alternatively you can also pass api_key= as a request parameter, though we strongly discourage this mode of passing the key.

// Translating English text to doge
// publicratelimited
// To translate from English to doge use the following API.

// POST  /doge
// Translate from English to doge.

// Parameters
// Parameter Name	Parameter Type	Description
// text	string	Text to translate.
// output
// The result is a json object with the converted text.
// Here is the full url to use.

// 	https://api.funtranslations.com/translate/doge.json