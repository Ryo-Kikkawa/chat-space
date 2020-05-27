$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="message">
            <div class="message__torm">
              <div class="message__form__name">
                ${message.user_name}
              </div>
              <div class="message__form__time">
                ${message.created_at}
              </div>
            </div>
            <div class="message__log">
              <p class="message__log__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
            </div>`
            return html;
          } else {
            var html =
            `<div class="message">
            <div class="message__torm">
              <div class="message__form__name">
                ${message.user_name}
              </div>
              <div class="message__form__time">
                ${message.created_at}
              </div>
            </div>
            <div class="message__log">
              <p class="message__log__content">
                ${message.content}
              </p>
            </div>
            </div>`
            return html;
          };
        }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.chat__send').prop('disabled',false);
    })
})
});