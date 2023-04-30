
function deletePost(id)
{
}

function addVote(postId, vote)
{
}

function initCategoriesAutoComplete(fieldSelector)
{
    $.ajax ({
      url: '/categories.json',
      type: "GET",
      dataType: "json",
      success: function(responseData){
        $(fieldSelector).selectize({
          maxItems: 1,
          valueField: 'id',
          labelField: 'name',
          searchField: 'name',
          options: responseData,
          create: false
        })
      }
  });
}
