(function() {
  function initialize() {
    initSearch();
  }

  function initSearch() {
    var dd = $('.dropdown-toggle');
    var resultsElem, resultsMenu, searchInputElem;
    searchInputElem = $('#search-input');
    resultsElem = $('#search-results');

    var searchToggle = $('#search-toggle')
    searchToggle.on('click', function(e) {
      e.stopPropagation()
      if(!searchInputElem.hasClass('open')) {
        searchInputElem.focus()
      }
      searchInputElem.toggleClass('open')
      
    })

    searchInputElem.on('focus', function(e) {
      resultsElem.addClass('show')
    })

    searchInputElem.on('blur', function(e) {
      setTimeout(function(){
      resultsElem.removeClass('show')

      },1000);
    })
    
    // searchInputElem.onkeyup = function() {
    //   resultsMenu.show();
    // }
    
    // searchInputElem.onBlur = function() {
    //   resultsMenu.hide();
    // }
    
    SimpleJekyllSearch({
      searchInput: searchInputElem[0],
      resultsContainer: resultsElem[0],
      json: '/search.json',
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
      noResultsText: '<li><a href="{url}" disabled>No results</a></li>',
    });
  }

  initialize();
})()