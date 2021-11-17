function GetData(sectionData) 
{
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute(sectionData);
        if (file)
        {
            /*make an HTTP request using the attribute sectionData as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if (this.readyState == 4)
                {
                    if (this.status == 200)
                    {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404)
                    {
                        element.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
function ChangeMain(MainPage) 
{
    document.getElementsByTagName("main")[0].setAttribute("Main-html",MainPage);
    GetData("Main-html");
}
//#region SideBar Functions
function SideBarOpen() 
{
    var side = document.getElementById("sidebar");
    if(side)
    {
        side.style.width = "200px";
    }
}
function SideBarClose() 
{
    var side = document.getElementById("sidebar");
    if(side)
    {
        side.style.width = "0px";
    }
}
function SidebarSelect(HighlightArray) 
{
    var list = document.getElementsByTagName('input');
    for (const element of list) 
    {
        element.checked = false;
        if(HighlightArray.length != 0)
        {
            for (const value of HighlightArray) 
            {
                if(element.id == value)
                {
                    element.checked = true;
                    var index = HighlightArray.indexOf(value);
                    HighlightArray.splice(index,1);
                    break;
                }
                else
                {
                    element.checked = false;
                }
                
            }
        }
    }
}
//#endregion
function GotoPage(page)
{
    location.replace("/" + page);
}
function GoToUnity(unityData) 
{
    if (unityData.includes("?")) 
    {
        unityData = unityData.replace("?","");
        var section = unityData.split("/");
        var Primary = section[0];
        var Secondary = section[1];
        var Tertiary = section[2];
        if (section.length == 1)
        {
            SidebarSelect([Primary]);
            ChangeMain(Primary + "/" + Primary +".html");
        } 
        else if (section.length == 2)
        {
            SidebarSelect([Primary, Primary+":"+Secondary]);
            ChangeMain(Primary + "/" + Secondary + "/" + Secondary +".html");
        }
        else
        {
            SidebarSelect([Primary, Primary+":"+Secondary, Primary+":"+Secondary+":"+Tertiary]);
            ChangeMain(Primary + "/" + Secondary + "/" + Tertiary +".html");
        }
    }
}
function GoToBlog(blogData) 
{
    blogData = blogData.replace("?","");
    var section = blogData.split("/");
    var Year = section[0];
    var Month = section[1];
    var Article = section[2];
    if (section.length == 1)
    {
        SidebarSelect([Year]);
        ChangeMain(Year + "/" + Year +".html");
    } 
    else if (section.length == 2)
    {
        SidebarSelect([Year, Year+":"+Month]);
        ChangeMain(Year + "/" + Month + "/" + Month +".html");
    }
    else
    {
        SidebarSelect([Year, Year+":"+Month, Year+":"+Month+":"+Article]);
        ChangeMain(Year + "/" + Month + "/" + Article +".html");
    }
}
function GoToGames(gameData) 
{
    gameData = gameData.replace("?","");
    ChangeMain(gameData +".html");
}