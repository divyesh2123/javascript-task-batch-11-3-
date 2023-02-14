const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';





  function searchItems()
  {
    let item = document.getElementById("searchTerm").value;

      fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=30&format=json&origin=*&srsearch=${item}`).then(function(value){

      return value.json();
      }).then(function(value){

    
    let result =    value.query.search.map(function(t) {

          return `  <div class="articles">
          <a href="https://en.wikipedia.org/wiki/${t.title}" target="_blank">
            <h4>${t.title}</h4>
            <p>
             ${t.snippet}
            </p>
          </a
  
       
        </div>`

        })


        document.getElementById("result").innerHTML = result.join(" ");

      })

  }