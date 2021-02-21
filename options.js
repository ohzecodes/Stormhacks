// function save(){
//     var phrase = document.getElementById('whitelist-textbox').value;
    
    
        
//     chrome.storage.sync.set({'whitelist': phrase}, function() {
//         alert('SUccess!');
//     });

    
// }

// function show(){
//     document.getElementById('whitelist-show').onclick = function() {
//         chrome.storage.sync.get('whitelist', function(data){
//             alert(data.whitelist);
//         });
//     }
// }


// function restore_options() {
//     // Use default value color = 'red' and likesColor = true.
//     chrome.storage.sync.get({
//       whitelist: "empty"
//     }, function(items) {
//       document.getElementById('').value = items.favoriteColor;
//       document.getElementById('like').checked = items.likesColor;
//     });
//   }

// document.getElementById('save').addEventListener('click',
//     save);

// document.getElementById('show').addEventListener('click',
//     show);

