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
      searchInputElem.toggleClass('open')
      searchInputElem.focus()
    })

    searchInputElem.on('focus', function(e) {
      $('.dropdown-menu').addClass('show')
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