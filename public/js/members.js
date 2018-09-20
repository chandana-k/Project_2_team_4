$(document).ready(function() {
 
  // Get references to page elements
  var $exampleText = $("#example-text");
  var $exampleDescription = $("#example-description");
  var $submitBtn = $("#submit");
  var $exampleList = $("#example-list");
  var $memberName = $(".member-name");
  var $details = $(".details");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function(example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/examples",
        data: JSON.stringify(example)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "/api/examples",
        type: "GET"
      });
    },
    getExample: function(id) {
      return $.ajax({
        url: "/api/examples/" + id,
        type: "GET"
      });
    },
    deleteExample: function(id) {
      return $.ajax({
        url: "/api/examples/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshExamples gets new examples from the db and repopulates the list
  var refreshExamples = function() {
    API.getExamples().then(function(data) {
      console.log(data);
      var $examples = data.map(function(example) {
        var $a = $("<a>")
          .text(example.text)
          .attr("href", "/example/" + example.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": example.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger pull-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $exampleList.empty();
      $exampleList.append($examples);
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var example = {
      text: $exampleText.val().trim(),
      description: $exampleDescription.val().trim()
    };

    if (!(example.text && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(example).then(function() {
      refreshExamples();
    });

    $exampleText.val("");
    $exampleDescription.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
    });
  };

  // Once the main page loads, we retrieve the logged in user and render on the header
  var getMemberName = function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $memberName.text(data.email);
    });
  };

  // Once the detail page loads, we retrieve the data for the detail page, and render it
  var loadDetails = function(id) {
    API.getExample(id).then(function(data) {
      console.log(data);
      var $id = $('<p>').html(`<strong>ID</strong>: ${data.id}`);
      var $text = $('<p>').html(`<strong>Text</strong>: ${data.text}`);
      var $desc = $('<p>').html(`<strong>Description:</strong> ${data.description}`);
      $details.append($id, $text, $desc);
    });
  }

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);

  // If this is the home page, render the list of examples, otherwise render the detail data
  var page = window.location.pathname;
  if(page === "/members") {
    getMemberName();
    refreshExamples();
  } else {
    var id = page.split("/")[2];
    loadDetails(id);
  }

});
