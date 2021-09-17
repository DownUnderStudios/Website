function Header() 
{
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute("Header-html");
        if (file) 
        {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200)
                {
                    element.innerHTML = this.responseText;
                }
                if (this.status == 404)
                {
                    element.innerHTML = "Page not found.";
                }
                /*remove the attribute, and call this function once more:*/
                element.removeAttribute("Header-html");
            }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
function Footer() 
{
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute("Footer-html");
        if (file) 
        {
            /*make an HTTP request using the attribute value as the file name:*/
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
                    element.removeAttribute("Footer-html");
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
function SetSidebar() 
{
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute("Sidebar-html");
        if (file)
        {
            /*make an HTTP request using the attribute value as the file name:*/
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
                    element.removeAttribute("Sidebar-html");
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
function Main() 
{
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute("Main-html");
        if (file)
        {
            /*make an HTTP request using the attribute value as the file name:*/
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
                    element.removeAttribute("Main-html");
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}
function SideBarOpen() 
{
    var side = document.getElementById("sidebar");
    side.style.width = "250px";
    var main = document.getElementById("main");
    main.style.marginLeft= "250px";
}

function SideBarClose() 
{
    var side = document.getElementById("sidebar");
    if(side)
    {
        side.style.width = "0px";
    }
    var main = document.getElementById("main");
    if(main)
    {
        main.style.marginLeft= "0px";
    }
}
function ChangeMain(value) 
{
    document.getElementsByTagName("main")[0].setAttribute("Main-html",value);
    Main();
}
function ChangeSide(value) 
{
    document.getElementById("sidebar").setAttribute("Sidebar-html",value);
    Sidebar(value);
}
function Sidebar(value)
{
    var x = document.getElementById("hidden");
    switch(value.length) 
    {
        case 0:
            x.style.display = "none";
            break;
        default:
            x.style.display = "block";
            SetSidebar();
    }
    SideBarClose();
}
function SidebarSelect(values) 
{
    var list = document.getElementsByTagName('input');
    for (const element of list) 
    {
        if(values.length != 0)
        {
            for (const value of values) 
            {
                if(element.id == value)
                {
                    element.checked = true;
                    var index = values.indexOf(value);
                    values.splice(index,1);
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