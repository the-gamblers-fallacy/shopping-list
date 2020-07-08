'use strict';

function createShoppingItem(item) {
  return $(`
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>
  `);
}

function main() {
  // provides functionality for rendering item based on user input
  $('form').submit(function(evt) {
    evt.preventDefault();
    let userItem = $('input').val();
    $('.shopping-list').append(createShoppingItem(userItem));
    $('input').empty();
  });

  // strikes through items that are completed
  $('.shopping-list').on('click', '.shopping-item-toggle', function(evt) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // MIGHT delete a shopping list entry
  $('.shopping-list').on('click', '.shopping-item-delete', function(evt) {
    $(this).closest('li').remove();
  });
}

$(main);