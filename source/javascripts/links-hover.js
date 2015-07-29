document.addEventListener("DOMContentLoaded", function(event) {
    function addClassToBodyOnHover (domNode, nameOfClass) {
      // Toggles css class 'hovering-#{id}' to document.body on element mouseover
      domNode.addEventListener('mouseover', function(){
          document.body.classList.add(nameOfClass)
      })

      domNode.addEventListener('mouseout', function() {
          document.body.classList.remove(nameOfClass)
      })
    }

    ['name', 'designer', 'location'].forEach(function (id){
        addClassToBodyOnHover(document.getElementById(id), ('hovering-' + id))
    })
});
