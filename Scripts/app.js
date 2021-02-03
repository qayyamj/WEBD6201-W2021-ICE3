/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

// // Create an object without a class
// let myContact = 
// {
//   "fullName":"Tom Smith",
//   "contactNumber":"416-555-5555",
//   "emailAddress":"tom@example.com"
// };

((core) =>
{
    function displayHome()
    {
      $("button").on("mouseover", function(){
        console.log("mouse over button - jquery");
      });

      let myButton = document.querySelectorAll("button")[0];

      myButton.addEventListener("click", () => {
        console.log("clicked button - js");
      })

      console.log(myButton);

        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
         <p id="paragraphOne" class="fs-3 fw-bold">This is my first Paragraph</p>
        `;
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function displayContactList()
    {

      if(localStorage.length > 0)
      {
        let contactList = document.getElementById("contactList");
        let data = "";
        
        for (let index = 1; index < localStorage.length + 1; index++)
        {
          let serializedContact = localStorage.getItem(index.toString());
          let contact = new core.Contact();
          contact.deserialize(serializedContact);
  
          data += `<tr>
          <th scope="row">${index}</th>
          <td>${contact.fullName}</td>
          <td>${contact.contactNumber}</td>
          <td>${contact.emailAddress}</td>
        </tr>`
        }
        contactList.innerHTML = data;
      }

    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        // form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

          let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
          
          console.log(contact.serialize());

          localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
        });
    }

    function Start()
    {
        console.log("App Started...");

       // console.log(myContact);

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
              displayContactList();
            break;
        }
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core={}));