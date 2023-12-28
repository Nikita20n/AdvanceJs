function a() {
    const bookingType = document.getElementById("booking").value;
    const dateSection = document.getElementById("date");
    const timeSlotSection = document.getElementById("timeSlotSection");
    const dateTimeSection = document.getElementById("dateTimeSection");
  
    dateSection.style.display = "none";
    timeSlotSection.style.display = "none";
    dateTimeSection.style.display = "none";
  
    if (bookingType === "fullDay") {
      dateSection.style.display = "block";
    } else if (bookingType === "halfDay") {
      dateSection.style.display = "block";
      timeSlotSection.style.display = "block";
    } else if (bookingType === "hourly") {
      dateTimeSection.style.display = "block";
    }
  }
  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for demo 
  
    const userName = document.getElementById("userName").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const email = document.getElementById("email").value;
    const numberOfPersons = document.getElementById("numberOfPersons").value;
    const bookingType = document.getElementById("bookingType").value;
    const date = document.getElementById("date").value;
    const timeSlot = document.getElementById("timeSlot")?.value || "";
    const dateTime = document.getElementById("dateTime")?.value || "";
  
    // Use the form values (example, validation.)
    console.log("User Name:", userName);
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    console.log("No of Persons:", numberOfPersons);
    console.log("Booking Type:", bookingType);
    console.log("Date:", date);
    console.log("Time Slot:", timeSlot);
    console.log("Date & Time:", dateTime);
  });
function one(){
    alert("you have successfully submitted!!!");
}  