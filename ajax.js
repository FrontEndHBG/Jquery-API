$(() => {
  $("#search-form").submit(e => {
    e.preventDefault();

    let searchTerm = $("#search-input").val();
    searchMe(searchTerm);
    $('#search-results').html('');
  });

  const searchMe = term => {
    const url = "https://swapi.co/api/people/";
    let params = {
      search: term
    };

    $.ajax({
      url: url,
      type: "GET",
      data: params,
      dataType: "json"
    })
      .done(data => {
        showResults(data.results);
      })
      .fail(fail => {
        console.log(fail);
      });
  };

  const showResults = data => {
      $.each(data, (i,v) => {
          $('#search-results').append(`<p> Name: ${v.name} gender: ${v.gender}`);
      });
  };
});
