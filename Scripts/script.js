window.onload = function () {
    const selectElement = document.querySelector('select.form-select');
    const inputFields = document.getElementById("inputFields");

    function toggleInputFields() {
      const sliceCount = parseInt(selectElement.value);
      inputFields.innerHTML = "";
  
      if (sliceCount > 0) {
        for (let i = 1; i <= sliceCount; i++) {
          const inputContainer = document.createElement("div");
  
          const labelText = document.createElement("label");
         
  
          const elementInput = document.createElement("input");
          elementInput.type = "text";
          elementInput.placeholder = "Label";
          elementInput.name = `label${i}`;
  
          const valueInput = document.createElement("input");
          valueInput.type = "text";
          valueInput.placeholder = "Value";
          valueInput.name = `value${i}`;
  
          const colorPicker = document.createElement("input");
          colorPicker.type = "color";
          colorPicker.name = `color${i}`;
  
          inputContainer.appendChild(labelText);
          inputContainer.appendChild(elementInput);
          inputContainer.appendChild(valueInput);
          inputContainer.appendChild(colorPicker);
  
          inputFields.appendChild(inputContainer);
        }
      }
    }
  
    

    toggleInputFields();
  
    selectElement.addEventListener("change", toggleInputFields);
    
  };
  