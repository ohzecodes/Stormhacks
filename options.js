$(document).ready(function(){
    save_options()
    show_options()
  
});


  function save_options() {
    document.getElementById('whitelist-submit').onclick() = function() {
        var phrase = document.getElementById('whitelist-textbox').value

        if(!phrase){
            console.log("error")
            alert("You did not add a word!")
            return
        }
    
        var arr = chrome.storage.sync.get('whitelist', function(data){
            return data.value
        })
    
        arr = arr.push(phrase);
        chrome.storage.sync.set({
          whitelist: arr
        }, function() {
          console.log("arr updates")
          alert("success!")
        });
    }
  }


  function show_options(){
      document.getElementById('whitelist-show').onclick() = function (data){
          chrome.storage.sync.get('whitelist', function(data){
              var arr = data.value;
              console.log(arr)
          }) 
      }
  }

  document.getElementById('whitelist-submit').addEventListener('click',
    save_options);