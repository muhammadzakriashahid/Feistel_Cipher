function toggleLanguage() 
{
    var englishDiv = document.getElementById("english");
    var germanDiv = document.getElementById("german");
    var button = document.getElementById("languageButton");

    if (englishDiv.style.display === "none") 
    {
        englishDiv.style.display = "block";
        germanDiv.style.display = "none"
        languageButton.innerHTML="Swith to German";
    } 
    else 
    {
        englishDiv.style.display = "none";
        germanDiv.style.display = "block"
        languageButton.innerHTML="Wechsel zu Englisch";
    }
}
